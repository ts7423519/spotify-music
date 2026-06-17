import urllib.request
import urllib.parse
import re

# Base URL of the website
BASE_URL = "https://www.masstamilan.dev"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def strip_tags(text):
    """Utility function to strip HTML tags and format text."""
    if not text:
        return ""
    # Remove HTML tags
    cleaned = re.sub(r'<[^>]+>', '', text)
    # Replace multiple spaces/newlines
    cleaned = re.sub(r'\s+', ' ', cleaned)
    return cleaned.strip()

def search_albums(query):
    """Searches MassTamilan for the given query and returns matching albums."""
    url = f"{BASE_URL}/search?keyword={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
    except Exception as e:
        raise Exception(f"Failed to fetch search results from MassTamilan: {str(e)}")

    # Split by the item container
    blocks = html.split('<div class="a-i">')[1:]
    results = []
    
    for block in blocks:
        content = block.split('</a>')[0]
        
        # Link
        href_match = re.search(r'href="([^"]+)"', content)
        link = href_match.group(1) if href_match else ""
        if link and not link.startswith('http'):
            # Keep path relative or normalize it
            if not link.startswith('/'):
                link = '/' + link
        
        # Title
        title_match = re.search(r'<h2>([^<]+)</h2>', content)
        title = title_match.group(1).strip() if title_match else ""
        
        # Poster Image
        img_match = re.search(r'<img [^>]*src="([^"]+)"', content)
        poster = img_match.group(1) if img_match else ""
        if poster and poster.startswith('/'):
            poster = BASE_URL + poster
            
        # Starring
        starring_match = re.search(r'<b>Starring:</b>(.*?)<br', content, re.IGNORECASE)
        starring = strip_tags(starring_match.group(1)) if starring_match else "Not Available"
        
        # Music
        music_match = re.search(r'<b>Music:</b>(.*?)<br', content, re.IGNORECASE)
        music = strip_tags(music_match.group(1)) if music_match else "Not Available"
        
        # Director
        director_match = re.search(r'<b>Director:</b>(.*?)(?:</p>|<br)', content, re.IGNORECASE)
        director = strip_tags(director_match.group(1)) if director_match else "Not Available"
        
        if title and link:
            results.append({
                "title": title,
                "link": link,
                "poster": poster,
                "starring": starring,
                "music": music,
                "director": director
            })
            
    return results

def fetch_album_details(album_link):
    """Fetches details of a specific album and lists all its tracks."""
    if not album_link.startswith('http'):
        url = BASE_URL + (album_link if album_link.startswith('/') else '/' + album_link)
    else:
        url = album_link
        
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
    except Exception as e:
        raise Exception(f"Failed to fetch album details from MassTamilan: {str(e)}")

    # Parse album metadata
    h1_match = re.search(r'<h1>(.*?)</h1>', html)
    album_title = h1_match.group(1).strip() if h1_match else ""
    # Clean title by removing standard MassTamilan suffix
    album_title = re.sub(r'\s+Tamil\s+mp3\s+songs.*$', '', album_title, flags=re.IGNORECASE).strip()
    
    starring_match = re.search(r'<b>Starring:</b>(.*?)<br', html, re.IGNORECASE)
    starring = strip_tags(starring_match.group(1)) if starring_match else "Not Available"
    
    music_match = re.search(r'<b>Music:</b>(.*?)<br', html, re.IGNORECASE)
    music = strip_tags(music_match.group(1)) if music_match else "Not Available"
    
    director_match = re.search(r'<b>Director:</b>(.*?)<br', html, re.IGNORECASE)
    director = strip_tags(director_match.group(1)) if director_match else "Not Available"
    
    poster_match = re.search(r'<img[^>]*alt="[^"]*movie poster"[^>]*src="([^"]+)"', html)
    if not poster_match:
        poster_match = re.search(r'<img[^>]*src="([^"]+/i/[^"]+)"', html)
    poster = poster_match.group(1) if poster_match else ""
    if poster and poster.startswith('/'):
        poster = BASE_URL + poster

    album_info = {
        "title": album_title,
        "starring": starring,
        "music": music,
        "director": director,
        "poster": poster,
        "link": album_link
    }

    # Split rows in the songs table
    rows = html.split('<tr itemprop="itemListElement"')[1:]
    songs = []
    
    for row in rows:
        row_content = row.split('</tr>')[0]
        
        # Song Title
        title_match = re.search(r'itemprop="name">.*?<a[^>]*>([^<]+)</a>', row_content, re.DOTALL)
        if not title_match:
            title_match = re.search(r'<a[^>]*title="Download ([^"]+) mp3 song"', row_content)
        title = title_match.group(1).strip() if title_match else ""
        
        # Singers
        singers_match = re.search(r'itemprop="byArtist">([^<]+)</span>', row_content)
        singers = singers_match.group(1).strip() if singers_match else "Not Available"
        
        # Duration
        duration_match = re.search(r'itemprop="duration">([^<]+)</span>', row_content)
        duration = duration_match.group(1).strip() if duration_match else "Not Available"
        
        # Download links
        link_128_match = re.search(r'href="([^"]*/d128_cdn/[^"]*)"', row_content)
        download_link_128 = link_128_match.group(1) if link_128_match else ""
        if download_link_128 and not download_link_128.startswith('http'):
            download_link_128 = BASE_URL + download_link_128
            
        link_320_match = re.search(r'href="([^"]*/d320_cdn/[^"]*)"', row_content)
        download_link_320 = link_320_match.group(1) if link_320_match else ""
        if download_link_320 and not download_link_320.startswith('http'):
            download_link_320 = BASE_URL + download_link_320
            
        if title:
            songs.append({
                "title": title,
                "singers": singers,
                "duration": duration,
                "download_link_128": download_link_128,
                "download_link_320": download_link_320
            })
            
    return album_info, songs
