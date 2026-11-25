from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlsplit


class AppHandler(SimpleHTTPRequestHandler):
    """Serve app assets without exposing directory indexes."""

    def send_head(self):
        # SimpleHTTPRequestHandler otherwise serves known paths under .git/.
        try:
            request_path = urlsplit(self.path).path
        except ValueError:
            self.send_error(400, "Invalid request path")
            return None
        # Decode nested escapes too: the parent handler decodes paths again.
        # For example, %252egit becomes %2egit and then .git.
        while True:
            decoded_path = unquote(request_path)
            if decoded_path == request_path:
                break
            request_path = decoded_path
        # On Windows, backslashes are path separators too; reject hidden paths
        # written with either separator before the parent handler resolves them.
        normalized_path = request_path.replace("\\", "/")
        if any(part.startswith(".") for part in normalized_path.split("/") if part):
            self.send_error(404, "File not found")
            return None
        # The standard handler follows symlinks, including links outside the app.
        # Resolve the requested file before allowing it to be served.
        root = Path(self.directory).resolve()
        target = Path(self.translate_path(self.path)).resolve()
        if not target.is_relative_to(root):
            self.send_error(404, "File not found")
            return None
        return super().send_head()

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
