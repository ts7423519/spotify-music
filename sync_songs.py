import sys
import os
import re
import json
import uuid
import time
import urllib.request
import urllib.parse
import urllib.error
import ssl

# Disable SSL verification globally to prevent certificate errors on Windows
try:
    ssl._create_default_https_context = ssl._create_unverified_context
except AttributeError:
    pass

# Append masstamilan-mcp directory to system path to reuse scraper modules
sys.path.append("D:/masstamilan-mcp")

try:
    import scraper  # type: ignore
except ImportError:
    print("Error: Could not import scraper from D:/masstamilan-mcp. Make sure D:/masstamilan-mcp/scraper.py exists.")
    sys.exit(1)

def build_multipart_formdata(fields, file_field_name, file_name, file_data, content_type):
    """Constructs multipart/form-data body for urllib uploads."""
    boundary = f"----WebKitFormBoundary{uuid.uuid4().hex}"
    parts = []
    
    # Add key-value form fields
    for key, value in fields.items():
        parts.append(f"--{boundary}\r\n")
        parts.append(f"Content-Disposition: form-data; name=\"{key}\"\r\n\r\n")
        parts.append(f"{value}\r\n")
        
    # Add file field
    parts.append(f"--{boundary}\r\n")
    parts.append(f"Content-Disposition: form-data; name=\"{file_field_name}\"; filename=\"{file_name}\"\r\n")
    parts.append(f"Content-Type: {content_type}\r\n\r\n")
    
    # Join standard fields, insert binary file data, and close boundary
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
    
    return body, headers

def upload_file_to_cloudinary(file_data, file_name, cloud_name, upload_preset, resource_type="video", content_type="audio/mpeg"):
    """Uploads binary file data directly to Cloudinary using Unsigned Upload Presets."""
    url = f"https://api.cloudinary.com/v1_1/{cloud_name}/{resource_type}/upload"
    
    fields = {
        "upload_preset": upload_preset
    }
    
    try:
        body, headers = build_multipart_formdata(fields, "file", file_name, file_data, content_type)
        req = urllib.request.Request(url, data=body, headers=headers, method="POST")
        
        with urllib.request.urlopen(req) as res:
            response_json = json.loads(res.read().decode("utf-8"))
            return response_json.get("secure_url")
    except urllib.error.HTTPError as e:
        error_msg = e.read().decode("utf-8")
        try:
            error_json = json.loads(error_msg)
            cloudinary_error = error_json.get("error", {}).get("message", error_msg)
            print(f"  Cloudinary Upload Failed for {file_name}: {cloudinary_error}")
        except:
            print(f"  Cloudinary Upload Failed for {file_name}: {error_msg}")
        return None
    except Exception as e:
        print(f"  Cloudinary Upload Failed for {file_name}: {str(e)}")
        return None

def upload_url_to_cloudinary(source_url, cloud_name, upload_preset, resource_type="image"):
    """Instructs Cloudinary to fetch and host an online asset (like the album art poster)."""
    url = f"https://api.cloudinary.com/v1_1/{cloud_name}/{resource_type}/upload"
    
    # For online URLs, we pass the URL as the 'file' parameter in a standard URL-encoded form POST
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
            response_json = json.loads(res.read().decode("utf-8"))
            return response_json.get("secure_url")
    except urllib.error.HTTPError as e:
        error_msg = e.read().decode("utf-8")
        try:
            error_json = json.loads(error_msg)
            cloudinary_error = error_json.get("error", {}).get("message", error_msg)
            print(f"  Cloudinary URL Upload Failed for poster: {cloudinary_error}")
        except:
            print(f"  Cloudinary URL Upload Failed for poster: {error_msg}")
        return source_url
    except Exception as e:
        print(f"  Cloudinary URL Upload Failed for poster: {str(e)}")
        return source_url # fallback to original URL

def main():
    print("==========================================================================")
    print("Spotify Lite - MassTamilan to Cloudinary Music Sync Pipeline")
    print("==========================================================================")
    
    # 1. Ask for Cloudinary credentials
    cloud_name = input("Enter your Cloudinary Cloud Name (e.g. c-2dd69e04c0f43b546837037e6fd544): ").strip()
    if not cloud_name:
        print("Error: Cloud Name is required.")
        return
        
    upload_preset = input("Enter your Cloudinary Unsigned Upload Preset (e.g. preset_name): ").strip()
    if not upload_preset:
        print("Error: Upload Preset is required.")
        return

    # 2. Scrape MassTamilan Album Link
    album_query = input("\nEnter album search keyword or full MassTamilan album URL: ").strip()
    if not album_query:
        print("Error: Album or query is required.")
        return
        
    album_link = ""
    # Check if link is a full URL or keyword
    if "masstamilan" in album_query or album_query.startswith("/"):
        album_link = album_query
    else:
        print(f"Searching MassTamilan for: '{album_query}'...")
        try:
            results = scraper.search_albums(album_query)
            if not results:
                print("No search results found on MassTamilan. Please check spelling.")
                return
            
            print("\nSelect an album to sync:")
            for idx, item in enumerate(results):
                print(f" [{idx + 1}] {item['title']} (Music: {item['music']}, Starring: {item['starring']})")
                
            sel = input(f"Select choice [1-{len(results)}]: ").strip()
            if not sel.isdigit() or int(sel) < 1 or int(sel) > len(results):
                print("Invalid selection.")
                return
            album_link = results[int(sel) - 1]["link"]
        except Exception as e:
            print(f"Search failed: {str(e)}")
            return

    # 3. Fetch album details & tracks
    print(f"\nFetching tracks for link: {album_link}...")
    try:
        album_info, songs = scraper.fetch_album_details(album_link)
    except Exception as e:
        print(f"Error fetching album: {str(e)}")
        return
        
    if not songs:
        print("No songs found in this album link.")
        return
        
    print(f"Found album: '{album_info['title']}' with {len(songs)} tracks.")
    confirm = input("Do you want to sync this album to your Cloudinary storage? (y/n): ").strip().lower()
    if confirm != 'y':
        print("Sync cancelled.")
        return

    # Create temporary directory for downloads
    temp_dir = "./temp_sync_songs"
    os.makedirs(temp_dir, exist_ok=True)
    
    # 4. Upload Album Art image first
    print("\nUploading album poster art to Cloudinary...")
    cloudinary_cover_url = album_info["poster"]
    if album_info["poster"]:
        cloudinary_cover_url = upload_url_to_cloudinary(album_info["poster"], cloud_name, upload_preset, "image")
        print(f"  Poster uploaded -> {cloudinary_cover_url}")

    # 5. Download and Upload songs
    synced_songs = []
    headers = {'User-Agent': scraper.USER_AGENT}
    
    for idx, song in enumerate(songs):
        song_title = song["title"]
        # Determine download link (prefer 320kbps cdn, fallback to 128kbps)
        dl_url = song["download_link_320"] or song["download_link_128"]
        if not dl_url:
            print(f" [{idx+1}/{len(songs)}] Skipping '{song_title}' (No download links available).")
            continue
            
        print(f"\n [{idx+1}/{len(songs)}] Syncing: '{song_title}'")
        print(f"  Downloading from MassTamilan...")
        
        # Download MP3 locally
        temp_file = os.path.join(temp_dir, f"temp_{uuid.uuid4().hex}.mp3")
        try:
            req = urllib.request.Request(dl_url, headers=headers)
            with urllib.request.urlopen(req) as response:
                with open(temp_file, "wb") as f:
                    f.write(response.read())
        except Exception as e:
            print(f"  Failed to download song: {str(e)}")
            if os.path.exists(temp_file): os.remove(temp_file)
            continue
            
        # Upload MP3 to Cloudinary
        print(f"  Uploading to Cloudinary folder...")
        with open(temp_file, "rb") as f:
            mp3_data = f.read()
            
        # Clean file name for Cloudinary
        safe_filename = re.sub(r'[^a-zA-Z0-9_\.-]', '_', song_title) + ".mp3"
        cloudinary_mp3_url = upload_file_to_cloudinary(
            mp3_data, 
            safe_filename, 
            cloud_name, 
            upload_preset, 
            resource_type="video", 
            content_type="audio/mpeg"
        )
        
        # Cleanup local file immediately
        if os.path.exists(temp_file):
            os.remove(temp_file)
            
        if cloudinary_mp3_url:
            print(f"  Uploaded -> {cloudinary_mp3_url}")
            synced_songs.append({
                "title": song_title,
                "artist": song["singers"] or "Various Artists",
                "url": cloudinary_mp3_url,
                "cover": cloudinary_cover_url,
                "duration": song["duration"] or "3:00"
            })
        else:
            print(f"  Skipping '{song_title}' due to Cloudinary upload failure.")

    # Cleanup temp directory
    try:
        os.rmdir(temp_dir)
    except:
        pass

    if not synced_songs:
        print("\nNo songs were successfully synced.")
        return

    # 6. Save album details to songs.json database
    songs_json_path = "songs.json"
    existing_albums = []
    
    if os.path.exists(songs_json_path):
        try:
            with open(songs_json_path, "r", encoding="utf-8") as f:
                existing_albums = json.load(f)
        except:
            existing_albums = []

    # Format new album directory folder representation
    new_album_id = "folder_synced_" + str(int(time.time()))
    new_album_data = {
        "id": new_album_id,
        "title": album_info["title"],
        "desc": f"Music: {album_info['music']}. Cast: {album_info['starring']}.",
        "cover": cloudinary_cover_url,
        "songs": synced_songs
    }

    # Filter out existing entries with the same title to avoid duplicates
    existing_albums = [alb for alb in existing_albums if alb.get("title") != album_info["title"]]
    existing_albums.append(new_album_data)

    # Write updated folders back to songs.json
    with open(songs_json_path, "w", encoding="utf-8") as f:
        json.dump(existing_albums, f, indent=2)

    print("\n==========================================================================")
    print("Sync Successful!")
    print(f"Synced Album: '{album_info['title']}' ({len(synced_songs)} songs)")
    print(f"Local database 'songs.json' updated successfully.")
    print("Refresh your Spotify Lite browser page to see your new folder in the library!")
    print("==========================================================================")

if __name__ == "__main__":
    main()
