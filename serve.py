from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

root = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=root)

print('CareerOS → http://localhost:8765')
ThreadingHTTPServer(('127.0.0.1', 8765), handler).serve_forever()
