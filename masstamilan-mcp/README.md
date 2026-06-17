# MassTamilan MCP Server

An MCP (Model Context Protocol) Server for searching, scraping, and managing Tamil songs from `https://www.masstamilan.dev` and storing them in a local SQLite database.

## Architecture & Database

The server automatically initializes a SQLite database file named `masstamilan.db` inside the project folder.

### Database Schema

- **`albums`**: Stores details of movies, albums, or singles.
  - `id` (INTEGER PRIMARY KEY)
  - `title` (TEXT)
  - `link` (TEXT, UNIQUE) - e.g. `/vikram-songs`
  - `starring` (TEXT)
  - `music` (TEXT) - Music Director
  - `director` (TEXT)
  - `poster` (TEXT) - URL of the album art
- **`songs`**: Stores individual tracks under each album.
  - `id` (INTEGER PRIMARY KEY)
  - `album_id` (INTEGER, FOREIGN KEY)
  - `title` (TEXT)
  - `singers` (TEXT)
  - `duration` (TEXT)
  - `download_link_128` (TEXT) - Direct URL for 128kbps quality
  - `download_link_320` (TEXT) - Direct URL for 320kbps quality

---

## Connection Configuration (Where to Enter Server Details)

To use this server, you need to add its launch configuration to your MCP client (e.g. Claude Desktop, Cursor, or another IDE).

### 1. Claude Desktop Configuration

Open your Claude Desktop configuration file. On Windows, this is located at:
`%APPDATA%\Claude\claude_desktop_config.json`

Add the following block to your `mcpServers` object:

```json
{
  "mcpServers": {
    "masstamilan-mcp": {
      "command": "python",
      "args": ["d:/masstamilan-mcp/server.py"]
    }
  }
}
```

*Note: Make sure `python` is in your system PATH, and the path matches the location of `server.py`.*

### 2. Cursor IDE Configuration

1. Go to **Settings** -> **Features** -> **MCP**.
2. Click **+ Add New MCP Server**.
3. Fill in the following details:
   - **Name**: `masstamilan-mcp`
   - **Type**: `command`
   - **Command**: `python d:/masstamilan-mcp/server.py`
4. Click **Save**.

---

## Exposed MCP Tools

The server registers these tools to search, save, browse, and download songs:

1. **`search_masstamilan_albums(query)`**
   - Search for movies or indie albums on MassTamilan.
   - *Example Arguments*: `{"query": "Vikram"}`

2. **`get_masstamilan_album_details(album_link)`**
   - Fetch track names, singers, durations, and direct download links (128kbps/320kbps) from the album page.
   - *Example Arguments*: `{"album_link": "/vikram-songs"}`

3. **`save_album_to_sqlite(album_info, songs)`**
   - Stores the parsed album metadata and all its songs in your local SQLite database.
   - If the album already exists, it updates the download URLs (since MassTamilan URLs expire after a few hours).

4. **`list_saved_albums()`**
   - Retrieve all albums saved in the local SQLite database.

5. **`get_saved_album_details(album_id)`**
   - Retrieves metadata and tracks for a saved album in the database.
   - *Example Arguments*: `{"album_id": 1}`

6. **`search_saved_songs(query)`**
   - Queries the local database for songs, artists, cast, or albums matching the search string.
   - *Example Arguments*: `{"query": "Anirudh"}`

7. **`download_song_file(download_url, output_path)`**
   - Downloads the MP3 from a direct link and writes it to your local disk.
   - *Example Arguments*: `{"download_url": "...", "output_path": "D:/Music/Pathala_Pathala.mp3"}`
