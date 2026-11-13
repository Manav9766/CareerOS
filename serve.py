from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path


def main() -> None:
    root = Path(__file__).resolve().parent
    handler = partial(SimpleHTTPRequestHandler, directory=root)

    server = ThreadingHTTPServer(("127.0.0.1", 8765), handler)
    print("CareerOS → http://localhost:8765")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping CareerOS server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
