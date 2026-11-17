from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path


class AppHandler(SimpleHTTPRequestHandler):
    """Serve app assets without exposing directory indexes."""

    def list_directory(self, path):
        self.send_error(404, "Directory listing is disabled")
        return None


def main() -> None:
    root = Path(__file__).resolve().parent
    handler = partial(AppHandler, directory=root)

    try:
        server = ThreadingHTTPServer(("127.0.0.1", 8765), handler)
    except OSError as error:
        raise SystemExit(
            f"Cannot start CareerOS on http://localhost:8765: {error}"
        ) from error
    print("CareerOS → http://localhost:8765")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping CareerOS server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
