#!/usr/bin/env python3
from pathlib import Path
import re

SKIP_DIRS = {"dist", ".git", "node_modules"}

STYLE_TO_CLASS = {
    "width:32px;height:32px;object-fit:contain;": "u-logo-img",
    "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;": "u-logo-link",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px;": "u-grid-2-24",
    "flex: 1;": "u-flex-1",
    "border-left: 4px solid #ef4444;": "u-border-left-red-4",
    "color: #ef4444;": "u-text-red-500",
    "border-left: 4px solid var(--accent-blue);": "u-border-left-accent-4",
    "background: var(--bg-secondary); border: 2px solid var(--accent-blue); border-radius: 12px; padding: 40px;": "u-results-panel-40",
    "display: flex; flex-direction: column;": "u-flex-col",
    "background:var(--bg-secondary); border-top:1px solid var(--border);": "u-section-alt",
    "background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 20px;": "u-card-secondary-20",
    "font-size: 16px; font-weight: 700;": "u-fs16-bold",
    "display: flex; justify-content: space-between; align-items: center; position: relative;": "u-flex-between-center-rel",
    "position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--border);": "u-abs-midline-border",
}


def append_class(existing: str, cls: str) -> str:
    parts = existing.split()
    if cls not in parts:
        parts.append(cls)
    return " ".join(parts)


def should_skip(path: Path) -> bool:
    return any(part in SKIP_DIRS for part in path.parts)


updated = 0
for file in Path(".").rglob("*.html"):
    if should_skip(file):
        continue
    text = file.read_text(encoding="utf-8")
    original = text

    for style, cls in STYLE_TO_CLASS.items():
        esc = re.escape(style)

        pattern1 = re.compile(rf'class="([^"]*)"\s+style="{esc}"')
        text = pattern1.sub(lambda m: f'class="{append_class(m.group(1), cls)}"', text)

        pattern2 = re.compile(rf'style="{esc}"\s+class="([^"]*)"')
        text = pattern2.sub(lambda m: f'class="{append_class(m.group(1), cls)}"', text)

        pattern3 = re.compile(rf'style="{esc}"')
        text = pattern3.sub(f'class="{cls}"', text)

    if text != original:
        file.write_text(text, encoding="utf-8")
        updated += 1
        print(f"updated {file}")

print(f"updated_files={updated}")
