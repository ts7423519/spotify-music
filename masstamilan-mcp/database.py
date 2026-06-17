import sqlite3
import os

DB_FILENAME = "masstamilan.db"

def get_db_path(custom_path=None):
    """Returns the absolute path to the SQLite database file."""
    if custom_path:
        return custom_path
    # Default to the same directory as this script
    dir_path = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(dir_path, DB_FILENAME)

def init_db(db_path):
    """Initializes the database schema if it doesn't already exist."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Create albums table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS albums (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        link TEXT UNIQUE NOT NULL,
        starring TEXT,
        music TEXT,
        director TEXT,
        poster TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)
    
    # Create songs table with liked column
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS songs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        album_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        singers TEXT,
        duration TEXT,
        download_link_128 TEXT,
        download_link_320 TEXT,
        liked INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
    )
    """)
    
    # Migration: add liked column if it doesn't exist (for older databases)
    try:
        cursor.execute("ALTER TABLE songs ADD COLUMN liked INTEGER DEFAULT 0")
    except sqlite3.OperationalError:
        pass  # Column already exists
        
    conn.commit()
    conn.close()

def save_album(db_path, album_info, songs):
    """
    Saves or updates an album and its associated tracks in the database.
    Since download links can expire, this will update the links when re-saved.
    Preserves liked status of songs.
    """
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    try:
        # Check if the album already exists
        cursor.execute("SELECT id FROM albums WHERE link = ?", (album_info['link'],))
        row = cursor.fetchone()
        
        liked_titles = set()
        if row:
            album_id = row[0]
            # Fetch currently liked song titles for this album to preserve them
            cursor.execute("SELECT title FROM songs WHERE album_id = ? AND liked = 1", (album_id,))
            liked_titles = {r[0] for r in cursor.fetchall()}
            
            # Update the metadata
            cursor.execute("""
            UPDATE albums 
            SET title = ?, starring = ?, music = ?, director = ?, poster = ?
            WHERE id = ?
            """, (album_info['title'], album_info['starring'], album_info['music'], 
                  album_info['director'], album_info['poster'], album_id))
            
            # Delete existing songs so we can insert them fresh (updating download URLs)
            cursor.execute("DELETE FROM songs WHERE album_id = ?", (album_id,))
        else:
            # Insert new album
            cursor.execute("""
            INSERT INTO albums (title, link, starring, music, director, poster)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (album_info['title'], album_info['link'], album_info['starring'], 
                  album_info['music'], album_info['director'], album_info['poster']))
            album_id = cursor.lastrowid
            
        # Insert songs
        for song in songs:
            is_liked = 1 if song['title'] in liked_titles else 0
            cursor.execute("""
            INSERT INTO songs (album_id, title, singers, duration, download_link_128, download_link_320, liked)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (album_id, song['title'], song['singers'], song['duration'], 
                  song['download_link_128'], song['download_link_320'], is_liked))
            
        conn.commit()
        return album_id
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        conn.close()

def list_saved_albums(db_path):
    """Returns a list of all albums saved in the database."""
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM albums ORDER BY title ASC")
    rows = cursor.fetchall()
    
    albums = [dict(row) for row in rows]
    conn.close()
    return albums

def get_saved_album_details(db_path, album_id):
    """Returns the details of a saved album and its list of tracks."""
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # Fetch album info
    cursor.execute("SELECT * FROM albums WHERE id = ?", (album_id,))
    album_row = cursor.fetchone()
    if not album_row:
        conn.close()
        return None, []
        
    album_info = dict(album_row)
    
    # Fetch songs
    cursor.execute("SELECT * FROM songs WHERE album_id = ?", (album_id,))
    song_rows = cursor.fetchall()
    
    songs = [dict(row) for row in song_rows]
    conn.close()
    
    return album_info, songs

def search_saved_songs(db_path, query):
    """Searches the SQLite database for matches in song title, artist, or album metadata."""
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    search_pattern = f"%{query}%"
    
    cursor.execute("""
    SELECT 
        songs.id as song_id, 
        songs.title as song_title, 
        songs.singers, 
        songs.duration, 
        songs.download_link_128, 
        songs.download_link_320,
        albums.id as album_id,
        albums.title as album_title,
        albums.music as music_director,
        albums.starring as cast,
        albums.poster
    FROM songs
    JOIN albums ON songs.album_id = albums.id
    WHERE songs.title LIKE ? 
       OR songs.singers LIKE ? 
       OR albums.title LIKE ? 
       OR albums.music LIKE ? 
       OR albums.starring LIKE ?
    ORDER BY albums.title ASC, songs.title ASC
    """, (search_pattern, search_pattern, search_pattern, search_pattern, search_pattern))
    
    rows = cursor.fetchall()
    results = [dict(row) for row in rows]
    conn.close()
    return results

def toggle_like_song(db_path, song_id):
    """Toggles the liked status of a song in SQLite. Returns the new liked status."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT liked FROM songs WHERE id = ?", (song_id,))
        row = cursor.fetchone()
        if not row:
            return None
        new_status = 1 if row[0] == 0 else 0
        cursor.execute("UPDATE songs SET liked = ? WHERE id = ?", (new_status, song_id))
        conn.commit()
        return new_status
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        conn.close()

def list_liked_songs(db_path):
    """Retrieves all liked songs along with their parent album details."""
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("""
    SELECT 
        songs.id as song_id, 
        songs.title as song_title, 
        songs.singers, 
        songs.duration, 
        songs.download_link_128, 
        songs.download_link_320,
        songs.liked,
        albums.id as album_id,
        albums.title as album_title,
        albums.music as music_director,
        albums.starring as cast,
        albums.poster
    FROM songs
    JOIN albums ON songs.album_id = albums.id
    WHERE songs.liked = 1
    ORDER BY songs.created_at DESC
    """)
    
    rows = cursor.fetchall()
    results = [dict(row) for row in rows]
    conn.close()
    return results
