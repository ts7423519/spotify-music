import sys
import os
import json
import subprocess
import urllib.request
import urllib.parse
import ssl
import re
import uuid
import time
from http.server import SimpleHTTPRequestHandler, HTTPServer
from socketserver import ThreadingTCPServer

# Disable SSL verification globally
try:
    ssl._create_default_https_context = ssl._create_unverified_context
except AttributeError:
    pass

# Path to the MCP server
MCP_SERVER_PATH = r"C:\Users\Tamil selvan\Documents\Codex\2026-06-17\https-www-masstamilan-dev-create-a\outputs\masstamilan-sqlite-mcp\server.py"

# Import scraper from D:/masstamilan-mcp
sys.path.append("D:/masstamilan-mcp")
try:
    import scraper # type: ignore
except ImportError:
    scraper = None

# Global Cloudinary config path
CONFIG_PATH = "cloudinary_config.json"

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query_params = urllib.parse.parse_qs(parsed_url.query)

        if path == "/api/search":
            self.handle_api_search(query_params)
        elif path == "/api/config":
            self.handle_api_get_config()
        elif path == "/api/latest":
            self.handle_api_latest(query_params)
        elif path == "/api/trending":
            self.handle_api_trending(query_params)
        else:
            # Serve static files
            super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        if path == "/api/sync":
            self.handle_api_sync()
        elif path == "/api/config":
            self.handle_api_save_config()
        else:
            self.send_error(404, "Not Found")

    def handle_api_get_config(self):
        config = {}
        if os.path.exists(CONFIG_PATH):
            try:
                with open(CONFIG_PATH, "r", encoding="utf-8") as f:
                    config = json.load(f)
            except:
                pass
        self.send_json_response(config)

    def handle_api_save_config(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        try:
            config = json.loads(post_data.decode('utf-8'))
            with open(CONFIG_PATH, "w", encoding="utf-8") as f:
                json.dump(config, f, indent=2)
            self.send_json_response({"status": "success"})
        except Exception as e:
            self.send_error_response(400, f"Invalid JSON config: {str(e)}")

    def call_mcp_tool(self, tool_name, arguments):
        """Spawns the MCP process, executes the tool request, reads the stdout, and shuts down."""
        try:
            # We run the Python process in stdio mode
            proc = subprocess.Popen(
                [sys.executable, MCP_SERVER_PATH],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1
            )
            
            # Send standard MCP initialize message first
            init_req = {
                "jsonrpc": "2.0",
                "method": "initialize",
                "id": 1,
                "params": {
                    "protocolVersion": "2024-11-05",
                    "capabilities": {},
                    "clientInfo": {"name": "spotify-lite-client", "version": "1.0.0"}
                }
            }
            proc.stdin.write(json.dumps(init_req) + "\n")
            proc.stdin.flush()
            
            # Read initialize response
            proc.stdout.readline()

            # Now call the actual tool
            call_req = {
                "jsonrpc": "2.0",
                "method": "tools/call",
                "id": 2,
                "params": {
                    "name": tool_name,
                    "arguments": arguments
                }
            }
            proc.stdin.write(json.dumps(call_req) + "\n")
            proc.stdin.flush()

            # Read tool call response
            resp_line = proc.stdout.readline()
            
            # Shutdown process
            proc.terminate()
            proc.wait()

            if resp_line:
                resp = json.loads(resp_line)
                if "error" in resp:
                    return {"error": resp["error"].get("message", "Unknown MCP error")}
                
                result = resp.get("result", {})
                content = result.get("content", [])
                if content and content[0].get("type") == "text":
                    text_data = content[0].get("text", "[]")
                    return json.loads(text_data)
            return []
        except Exception as e:
            print(f"Error calling MCP server: {str(e)}")
            return {"error": f"Failed to execute MCP server: {str(e)}"}

    def handle_api_search(self, query_params):
        query = query_params.get("q", [""])[0].strip()
        if not query:
            self.send_json_response([])
            return
        
        limit = int(query_params.get("limit", [10])[0])
        results = self.call_mcp_tool("search_albums", {"query": query, "limit": limit})
        self.send_json_response(results)

    def handle_api_latest(self, query_params):
        limit = int(query_params.get("limit", [10])[0])
        results = self.call_mcp_tool("list_latest_albums", {"limit": limit})
        self.send_json_response(results)

    def handle_api_trending(self, query_params):
        limit = int(query_params.get("limit", [10])[0])
        results = self.call_mcp_tool("list_trending", {"limit": limit})
        self.send_json_response(results)

    def handle_api_sync(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            req_data = json.loads(post_data.decode('utf-8'))
            album_link = req_data.get("album_link", "").strip()
            cloud_name = req_data.get("cloud_name", "").strip()
            upload_preset = req_data.get("upload_preset", "").strip()

            if not album_link or not cloud_name or not upload_preset:
                self.send_error_response(400, "Missing required parameters: album_link, cloud_name, upload_preset")
                return

            if not scraper:
                self.send_error_response(500, "Scraper module is not available in D:/masstamilan-mcp")
                return

            # Scrape album details & songs
            album_info, songs = scraper.fetch_album_details(album_link)
            if not songs:
                self.send_error_response(404, "No songs found for the provided album URL.")
                return

            # Synchronously download/upload to Cloudinary
            temp_dir = "./temp_sync_songs"
            os.makedirs(temp_dir, exist_ok=True)
            
            # 1. Upload album art
            cloudinary_cover_url = album_info["poster"]
            if album_info["poster"]:
                cloudinary_cover_url = self.upload_url_to_cloudinary(album_info["poster"], cloud_name, upload_preset)

            # 2. Upload songs
            synced_songs = []
            headers = {'User-Agent': scraper.USER_AGENT}

            for song in songs:
                song_title = song["title"]
                dl_url = song["download_link_320"] or song["download_link_128"]
                if not dl_url:
                    continue

                temp_file = os.path.join(temp_dir, f"temp_{uuid.uuid4().hex}.mp3")
                try:
                    req = urllib.request.Request(dl_url, headers=headers)
                    with urllib.request.urlopen(req) as response:
                        with open(temp_file, "wb") as f:
                            f.write(response.read())
                except:
                    if os.path.exists(temp_file): os.remove(temp_file)
                    continue

                # Upload to Cloudinary
                with open(temp_file, "rb") as f:
                    mp3_data = f.read()

                safe_filename = re.sub(r'[^a-zA-Z0-9_\.-]', '_', song_title) + ".mp3"
                cloudinary_mp3_url = self.upload_file_to_cloudinary(
                    mp3_data, safe_filename, cloud_name, upload_preset
                )

                if os.path.exists(temp_file): os.remove(temp_file)

                if cloudinary_mp3_url:
                    synced_songs.append({
                        "title": song_title,
                        "artist": song["singers"] or "Various Artists",
                        "url": cloudinary_mp3_url,
                        "cover": cloudinary_cover_url,
                        "duration": song["duration"] or "3:00"
                    })

            try:
                os.rmdir(temp_dir)
            except:
                pass

            if not synced_songs:
                self.send_error_response(500, "All Cloudinary song uploads failed.")
                return

            # Save to songs.json
            songs_json_path = "songs.json"
            existing_albums = []
            if os.path.exists(songs_json_path):
                try:
                    with open(songs_json_path, "r", encoding="utf-8") as f:
                        existing_albums = json.load(f)
                except:
                    pass

            new_album_id = "folder_synced_" + str(int(time.time()))
            new_album_data = {
                "id": new_album_id,
                "title": album_info["title"],
                "desc": f"Music: {album_info['music']}. Cast: {album_info['starring']}.",
                "cover": cloudinary_cover_url or "assets/bison image.jpg",
                "songs": synced_songs
            }

            existing_albums = [alb for alb in existing_albums if alb.get("title") != album_info["title"]]
            existing_albums.append(new_album_data)

            with open(songs_json_path, "w", encoding="utf-8") as f:
                json.dump(existing_albums, f, indent=2)

            self.send_json_response({
                "status": "success",
                "album_id": new_album_id,
                "title": album_info["title"],
                "songs_count": len(synced_songs)
            })

        except Exception as e:
            self.send_error_response(500, f"Sync process failed: {str(e)}")

    def upload_url_to_cloudinary(self, source_url, cloud_name, upload_preset):
        url = f"https://api.cloudinary.com/v1_1/{cloud_name}/image/upload"
        data = urllib.parse.urlencode({
            "file": source_url,
            "upload_preset": upload_preset
        }).encode("utf-8")
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0"
        }
        try:
            req = urllib.request.Request(url, data=data, headers=headers, method="POST")
            with urllib.request.urlopen(req) as res:
                resp = json.loads(res.read().decode("utf-8"))
                return resp.get("secure_url")
        except:
            return source_url

    def upload_file_to_cloudinary(self, file_data, file_name, cloud_name, upload_preset):
        url = f"https://api.cloudinary.com/v1_1/{cloud_name}/video/upload"
        
        # Build multipart boundary form fields
        boundary = f"----WebKitFormBoundary{uuid.uuid4().hex}"
        parts = []
        parts.append(f"--{boundary}\r\n")
        parts.append(f"Content-Disposition: form-data; name=\"upload_preset\"\r\n\r\n")
        parts.append(f"{upload_preset}\r\n")
        
        parts.append(f"--{boundary}\r\n")
        parts.append(f"Content-Disposition: form-data; name=\"file\"; filename=\"{file_name}\"\r\n")
        parts.append(f"Content-Type: audio/mpeg\r\n\r\n")
        
        body = b"".join([
            "".join(parts).encode("utf-8"),
            file_data,
            f"\r\n--{boundary}--\r\n".encode("utf-8")
        ])
        
        headers = {
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "Content-Length": str(len(body)),
            "User-Agent": "Mozilla/5.0"
        }
        
        try:
            req = urllib.request.Request(url, data=body, headers=headers, method="POST")
            with urllib.request.urlopen(req) as res:
                resp = json.loads(res.read().decode("utf-8"))
                return resp.get("secure_url")
        except Exception as e:
            print(f"Cloudinary upload failed: {str(e)}")
            return None

    def send_json_response(self, data):
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def send_error_response(self, code, message):
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps({"error": message}, ensure_ascii=False).encode("utf-8"))

class ThreadingHTTPServer(ThreadingTCPServer, HTTPServer):
    pass

def main():
    port = 8000
    server_address = ("", port)
    print(f"Starting Spotify Lite custom API & Static Server on port {port}...")
    print(f"MCP SQLite Server linked at: {MCP_SERVER_PATH}")
    
    httpd = ThreadingHTTPServer(server_address, CustomHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == "__main__":
    main()
