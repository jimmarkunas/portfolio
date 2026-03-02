#!/usr/bin/env python3
"""Quick static-site efficiency audit for CSS/JS/HTML hotspots."""

from __future__ import annotations

import gzip
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def size_line(path: Path) -> tuple[int, int]:
    raw = path.read_bytes()
    gz = gzip.compress(raw, compresslevel=9)
    return len(raw), len(gz)


def count_inline_styles(html: Path) -> int:
    text = html.read_text(encoding="utf-8", errors="ignore")
    return len(re.findall(r"\bstyle=\"", text))


def main() -> None:
    html_files = sorted(ROOT.rglob("*.html"))
    html_files = [p for p in html_files if "/dist/" not in str(p)]

    css_path = ROOT / "style.css"
    js_paths = [ROOT / "script.js", ROOT / "contact.js", ROOT / "chicks-with-guns.js"]

    print("== Asset Sizes ==")
    if css_path.exists():
        raw, gz = size_line(css_path)
        print(f"style.css: {raw} bytes ({gz} bytes gzip)")
    for p in js_paths:
        if p.exists():
            raw, gz = size_line(p)
            print(f"{p.name}: {raw} bytes ({gz} bytes gzip)")

    print("\n== Inline style hotspots (top 15) ==")
    rows = []
    for html in html_files:
        cnt = count_inline_styles(html)
        if cnt:
            rows.append((cnt, html.relative_to(ROOT).as_posix()))
    for cnt, rel in sorted(rows, reverse=True)[:15]:
        print(f"{cnt:4d}  {rel}")

    style_text = css_path.read_text(encoding="utf-8", errors="ignore") if css_path.exists() else ""
    mq_768 = len(re.findall(r"@media\s*\(max-width:\s*768px\)", style_text))
    mq_1024 = len(re.findall(r"@media\s*\(max-width:\s*1024px\)", style_text))
    page_blocks = len(re.findall(r"body\.page-[a-z0-9-]+", style_text))

    print("\n== CSS complexity signals ==")
    print(f"@media (max-width: 768px): {mq_768}")
    print(f"@media (max-width: 1024px): {mq_1024}")
    print(f"page-scoped selectors (body.page-*): {page_blocks}")


if __name__ == "__main__":
    main()
