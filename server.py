import sys
import os
import urllib.parse
from http.server import SimpleHTTPRequestHandler, HTTPServer
from socketserver import ThreadingTCPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Fallback to serving static files
        super().do_GET()

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

class ThreadingHTTPServer(ThreadingTCPServer, HTTPServer):
    pass

def main():
    port = 8000
    server_address = ("", port)
    print(f"Starting Spotify Lite Web Server on port {port}...")
    
    httpd = ThreadingHTTPServer(server_address, CustomHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()

if __name__ == "__main__":
    main()
