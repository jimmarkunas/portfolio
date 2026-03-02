#!/usr/bin/env python3
"""Build production-ready static site assets without external dependencies.

Outputs:
- dist/ (full site copy)
- dist/assets/style.<hash>.min.css
- dist/assets/script.<hash>.min.js
- dist/assets/contact.<hash>.min.js
- dist/assets/chicks-with-guns.<hash>.min.js
- .gz companions for each minified asset

It rewrites HTML references inside dist/ only.
"""

from __future__ import annotations

import gzip
import hashlib
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
ASSETS_DIR = DIST / "assets"

EXCLUDE_NAMES = {".git", ".DS_Store", "dist", "node_modules", "__pycache__"}


def sha8(data: str) -> str:
    return hashlib.sha256(data.encode("utf-8")).hexdigest()[:8]


def minify_css(css: str) -> str:
    # Remove block comments.
    css = re.sub(r"/\*[\s\S]*?\*/", "", css)
    # Collapse whitespace.
    css = re.sub(r"\s+", " ", css)
    # Remove whitespace around punctuation tokens.
    css = re.sub(r"\s*([{}:;,>+~])\s*", r"\1", css)
    # Remove redundant final semicolons in blocks.
    css = css.replace(";}", "}")
    return css.strip()


def read_css_with_imports(path: Path, seen: set[Path] | None = None) -> str:
    """Inline @import url(...) recursively to produce a single CSS payload."""
    if seen is None:
        seen = set()

    path = path.resolve()
    if path in seen:
        raise ValueError(f"Cyclic CSS import detected: {path}")
    seen.add(path)

    css = path.read_text(encoding="utf-8")
    import_pattern = re.compile(r"@import\s+url\((['\"]?)([^'\"\)]+)\1\)\s*;")

    def repl(match: re.Match[str]) -> str:
        import_ref = match.group(2).strip()
        if import_ref.startswith("http://") or import_ref.startswith("https://"):
            return match.group(0)

        if import_ref.startswith("/"):
            import_path = ROOT / import_ref.lstrip("/")
        else:
            import_path = path.parent / import_ref

        if not import_path.exists():
            raise FileNotFoundError(f"CSS import not found: {import_ref} (from {path})")

        return read_css_with_imports(import_path, seen)

    inlined = import_pattern.sub(repl, css)
    seen.remove(path)
    return inlined


class JsMinifier:
    """A compact JS minifier based on Crockford's jsmin algorithm."""

    def __init__(self, source: str):
        self.source = source
        self.index = 0
        self.length = len(source)
        self.the_a = "\n"
        self.the_b = ""
        self.the_lookahead = None
        self.out: list[str] = []

    def is_alnum(self, c: str) -> bool:
        return bool(c and (c.isalnum() or c in "_$\\" or ord(c) > 126))

    def get(self) -> str:
        if self.the_lookahead is not None:
            c = self.the_lookahead
            self.the_lookahead = None
        else:
            if self.index >= self.length:
                return ""
            c = self.source[self.index]
            self.index += 1

        if c == "\r":
            return "\n"
        if c == "\n" or c == "" or c >= " ":
            return c
        return " "

    def peek(self) -> str:
        self.the_lookahead = self.get()
        return self.the_lookahead

    def next(self) -> str:
        c = self.get()
        if c == "/":
            p = self.peek()
            if p == "/":
                while True:
                    c = self.get()
                    if c <= "\n":
                        return c
            if p == "*":
                self.get()
                while True:
                    c = self.get()
                    if c == "*" and self.peek() == "/":
                        self.get()
                        return " "
                    if c == "":
                        raise ValueError("Unterminated comment")
            return c
        return c

    def action(self, d: int) -> None:
        if d <= 1:
            self.out.append(self.the_a)

        if d <= 2:
            self.the_a = self.the_b
            if self.the_a in ('\"', "'", "`"):
                while True:
                    self.out.append(self.the_a)
                    self.the_a = self.get()
                    if self.the_a == self.the_b:
                        break
                    if self.the_a in ("", "\n"):
                        raise ValueError("Unterminated string literal")
                    if self.the_a == "\\":
                        self.out.append(self.the_a)
                        self.the_a = self.get()

        if d <= 3:
            self.the_b = self.next()
            if self.the_b == "/" and self.the_a in "(,=:[!&|?+\-{;\n":
                self.out.append(self.the_a)
                self.out.append(self.the_b)
                while True:
                    self.the_a = self.get()
                    if self.the_a == "/":
                        break
                    if self.the_a == "\\":
                        self.out.append(self.the_a)
                        self.the_a = self.get()
                    if self.the_a in ("", "\n"):
                        raise ValueError("Unterminated regex literal")
                    self.out.append(self.the_a)
                self.the_b = self.next()

    def minify(self) -> str:
        self.the_a = "\n"
        self.action(3)
        while self.the_a != "":
            if self.the_a == " ":
                if self.is_alnum(self.the_b):
                    self.action(1)
                else:
                    self.action(2)
            elif self.the_a == "\n":
                if self.the_b in "{[(+-!~":
                    self.action(1)
                elif self.the_b == " ":
                    self.action(3)
                elif self.is_alnum(self.the_b):
                    self.action(1)
                else:
                    self.action(2)
            else:
                if self.the_b == " ":
                    if self.is_alnum(self.the_a):
                        self.action(1)
                    else:
                        self.action(3)
                elif self.the_b == "\n":
                    if self.the_a in "}])+-\"'`":
                        self.action(1)
                    elif self.is_alnum(self.the_a):
                        self.action(1)
                    else:
                        self.action(3)
                else:
                    self.action(1)
        return "".join(self.out).strip()


def minify_js(js: str) -> str:
    return JsMinifier(js).minify()


def gzip_file(path: Path) -> None:
    gz_path = Path(f"{path}.gz")
    with path.open("rb") as src, gzip.open(gz_path, "wb", compresslevel=9) as dst:
        shutil.copyfileobj(src, dst)


def copy_site_tree() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)

    def ignore_func(directory: str, names: list[str]) -> set[str]:
        ignored = set()
        for n in names:
            if n in EXCLUDE_NAMES:
                ignored.add(n)
        return ignored

    shutil.copytree(ROOT, DIST, ignore=ignore_func)


def rewrite_html_refs(html: str, mapping: dict[str, str]) -> str:
    patterns = {
        "style.css": r"(<link[^>]+href=[\"'])([^\"']*style\.css(?:\?[^\"']*)?)([\"'][^>]*>)",
        "script.js": r"(<script[^>]+src=[\"'])([^\"']*script\.js(?:\?[^\"']*)?)([\"'][^>]*></script>)",
        "contact.js": r"(<script[^>]+src=[\"'])([^\"']*contact\.js(?:\?[^\"']*)?)([\"'][^>]*></script>)",
        "chicks-with-guns.js": r"(<script[^>]+src=[\"'])([^\"']*chicks-with-guns\.js(?:\?[^\"']*)?)([\"'][^>]*></script>)",
    }

    for key, pattern in patterns.items():
        if key not in mapping:
            continue
        html = re.sub(pattern, rf"\1{mapping[key]}\3", html)
    return html


def build_assets() -> dict[str, str]:
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)

    assets = {
        "style.css": minify_css(read_css_with_imports(ROOT / "style.css")),
        "script.js": minify_js((ROOT / "script.js").read_text(encoding="utf-8")),
        "contact.js": minify_js((ROOT / "contact.js").read_text(encoding="utf-8")),
        "chicks-with-guns.js": minify_js((ROOT / "chicks-with-guns.js").read_text(encoding="utf-8")),
    }

    mapping: dict[str, str] = {}

    for original_name, content in assets.items():
        stem = original_name.replace(".js", "").replace(".css", "")
        suffix = ".min.css" if original_name.endswith(".css") else ".min.js"
        hashed_name = f"{stem}.{sha8(content)}{suffix}"
        out_path = ASSETS_DIR / hashed_name
        out_path.write_text(content + "\n", encoding="utf-8")
        gzip_file(out_path)
        mapping[original_name] = f"/assets/{hashed_name}"

    return mapping


def rewrite_dist_html(mapping: dict[str, str]) -> None:
    for html_path in DIST.rglob("*.html"):
        html = html_path.read_text(encoding="utf-8")
        html = rewrite_html_refs(html, mapping)
        html_path.write_text(html, encoding="utf-8")


def remove_source_assets_from_dist() -> None:
    # Keep only hashed/minified assets referenced by HTML in dist.
    for path in (DIST / "style.css", DIST / "script.js", DIST / "contact.js", DIST / "chicks-with-guns.js"):
        if path.exists():
            path.unlink()
    styles_dir = DIST / "styles"
    if styles_dir.exists():
        shutil.rmtree(styles_dir)


def main() -> None:
    copy_site_tree()
    mapping = build_assets()
    rewrite_dist_html(mapping)
    remove_source_assets_from_dist()

    print("Build complete:")
    for k, v in mapping.items():
        print(f"  {k} -> {v}")
    print(f"Output: {DIST}")


if __name__ == "__main__":
    main()
