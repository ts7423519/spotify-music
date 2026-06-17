import sys
import json
import os
import traceback
import urllib.request
import scraper
import database

# Logger utility
def log(message):
    sys.stderr.write(f"[MassTamilan-MCP] {message}\n")
    sys.stderr.flush()
    try:
        dir_path = os.path.dirname(os.path.abspath(__file__))
        log_file = os.path.join(dir_path, "server.log")
        with open(log_file, "a", encoding="utf-8") as f:
            f.write(f"{message}\n")
    except:
        pass

# Ensure SQLite DB is initialized on startup
DB_PATH = database.get_db_path()
log(f"Initializing database at: {DB_PATH}")
try:
    database.init_db(DB_PATH)
    log("Database initialized successfully.")
except Exception as e:
    log(f"Database initialization failed: {str(e)}")

# Define tool schema list
TOOLS = [
    {
        "name": "search_masstamilan_albums",
        "description": "Searches for Tamil music albums/movies on MassTamilan by keyword.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "The search keyword (e.g. 'vikram', 'aravindh', 'anirudh')."
            }
          },
          "required": ["query"]
        }
    },
    {
        "name": "get_masstamilan_album_details",
        "description": "Fetches metadata and song download links for a specific MassTamilan album.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "album_link": {
              "type": "string",
              "description": "The path to the album page (e.g., '/vikram-songs' or '/aravindh-indie-2026-songs')."
            }
          },
          "required": ["album_link"]
        }
    },
    {
        "name": "save_album_to_sqlite",
        "description": "Saves an album and its list of tracks into the local SQLite database. Updates direct links if already exists.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "album_info": {
              "type": "object",
              "description": "Metadata of the album including title, link, starring, music, director, poster.",
              "properties": {
                "title": {"type": "string"},
                "link": {"type": "string"},
                "starring": {"type": "string"},
                "music": {"type": "string"},
                "director": {"type": "string"},
                "poster": {"type": "string"}
              },
              "required": ["title", "link"]
            },
            "songs": {
              "type": "array",
              "description": "List of tracks belonging to the album.",
              "items": {
                "type": "object",
                "properties": {
                  "title": {"type": "string"},
                  "singers": {"type": "string"},
                  "duration": {"type": "string"},
                  "download_link_128": {"type": "string"},
                  "download_link_320": {"type": "string"}
                },
                "required": ["title"]
              }
            }
          },
          "required": ["album_info", "songs"]
        }
    },
    {
        "name": "list_saved_albums",
        "description": "Retrieves the list of all albums saved in the local SQLite database.",
        "inputSchema": {
          "type": "object",
          "properties": {}
        }
    },
    {
        "name": "get_saved_album_details",
        "description": "Retrieves detailed information and track list for an album saved in the SQLite database.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "album_id": {
              "type": "integer",
              "description": "The ID of the saved album in the database."
            }
          },
          "required": ["album_id"]
        }
    },
    {
        "name": "search_saved_songs",
        "description": "Searches the local SQLite database for songs or albums matching a keyword.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Keyword to search in song titles, singers, music directors, or actors."
            }
          },
          "required": ["query"]
        }
    },
    {
        "name": "download_song_file",
        "description": "Downloads an MP3 file from a direct download URL to a local folder.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "download_url": {
              "type": "string",
              "description": "The direct download URL (should be extracted from album details)."
            },
            "output_path": {
              "type": "string",
              "description": "The target local file path (e.g. 'D:/Music/Raathu_Raasan.mp3'). Ensure directories exist."
            }
          },
          "required": ["download_url", "output_path"]
        }
    }
]

def handle_request(request):
    """Processes JSON-RPC requests from the client."""
    method = request.get("method")
    req_id = request.get("id")
    params = request.get("params", {})
    
    if method == "initialize":
        log("Received 'initialize' request.")
        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {}
                },
                "serverInfo": {
                    "name": "masstamilan-mcp",
                    "version": "1.0.0"
                }
            }
        }
        
    elif method == "tools/list":
        log("Received 'tools/list' request.")
        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "tools": TOOLS
            }
        }
        
    elif method == "tools/call":
        name = params.get("name")
        args = params.get("arguments", {})
        log(f"Received 'tools/call' for '{name}' with args {args}.")
        
        try:
            result_text = ""
            is_error = False
            
            if name == "search_masstamilan_albums":
                query = args.get("query")
                albums = scraper.search_albums(query)
                result_text = json.dumps(albums, indent=2)
                
            elif name == "get_masstamilan_album_details":
                album_link = args.get("album_link")
                album_info, songs = scraper.fetch_album_details(album_link)
                result_text = json.dumps({
                    "album_info": album_info,
                    "songs": songs
                }, indent=2)
                
            elif name == "save_album_to_sqlite":
                album_info = args.get("album_info")
                songs = args.get("songs")
                album_id = database.save_album(DB_PATH, album_info, songs)
                result_text = json.dumps({
                    "success": True,
                    "message": f"Successfully saved album '{album_info['title']}' to database with ID {album_id}.",
                    "album_id": album_id
                })
                
            elif name == "list_saved_albums":
                albums = database.list_saved_albums(DB_PATH)
                result_text = json.dumps(albums, indent=2)
                
            elif name == "get_saved_album_details":
                album_id = args.get("album_id")
                album_info, songs = database.get_saved_album_details(DB_PATH, album_id)
                if not album_info:
                    result_text = json.dumps({"error": f"Album with ID {album_id} not found."}, indent=2)
                    is_error = True
                else:
                    result_text = json.dumps({
                        "album_info": album_info,
                        "songs": songs
                    }, indent=2)
                    
            elif name == "search_saved_songs":
                query = args.get("query")
                results = database.search_saved_songs(DB_PATH, query)
                result_text = json.dumps(results, indent=2)
                
            elif name == "download_song_file":
                download_url = args.get("download_url")
                output_path = args.get("output_path")
                
                # Normalize and ensure directories exist
                output_path = os.path.abspath(output_path)
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                headers = {'User-Agent': scraper.USER_AGENT}
                req = urllib.request.Request(download_url, headers=headers)
                
                log(f"Downloading {download_url} -> {output_path}")
                with urllib.request.urlopen(req) as response:
                    with open(output_path, "wb") as f:
                        f.write(response.read())
                        
                result_text = json.dumps({
                    "success": True,
                    "message": f"Successfully downloaded song to {output_path}"
                })
                
            else:
                result_text = f"Error: Tool '{name}' is not supported."
                is_error = True
                
            response = {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": result_text
                        }
                    ]
                }
            }
            if is_error:
                response["result"]["isError"] = True
            return response
            
        except Exception as e:
            err_trace = traceback.format_exc()
            log(f"Error executing tool '{name}': {err_trace}")
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": f"Error: {str(e)}\n\n{err_trace}"
                        }
                    ],
                    "isError": True
                }
            }
            
    # Default return for notifications or unhandled methods
    return None

def main():
    """Main input loop parsing JSON-RPC stdin/stdout stream."""
    log("MassTamilan MCP Server started.")
    
    # Force stdin/stdout to use utf-8 encoding
    sys.stdin.reconfigure(encoding='utf-8')
    sys.stdout.reconfigure(encoding='utf-8')
    
    while True:
        try:
            line = sys.stdin.readline()
            if not line:
                break
                
            line = line.strip()
            if not line:
                continue
                
            request = json.loads(line)
            response = handle_request(request)
            
            if response:
                sys.stdout.write(json.dumps(response) + "\n")
                sys.stdout.flush()
                
        except KeyboardInterrupt:
            log("Server interrupted by keyboard.")
            break
        except Exception as e:
            log(f"Error in main loops: {str(e)}\n{traceback.format_exc()}")

if __name__ == "__main__":
    main()
