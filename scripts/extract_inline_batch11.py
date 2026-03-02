#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/directv02/index.html"),
    Path("work/newyorklife/index.html"),
    Path("work/modere/index.html"),
]

STYLE_TO_CLASS = {
    "margin: 0;": "u-m0",
    "margin-top: 0;": "u-mt0",
    "margin-bottom: 0;": "u-mb0",
    "display:flex; flex-wrap:wrap; gap: 8px;": "u-flex-wrap-gap8",
    "font-size: 14px; font-weight: 600; color: var(--text-primary);": "u-fs14-primary-semibold",
    "font-size: 12px; color: var(--text-secondary); margin-top: 4px;": "u-fs12-secondary-mt4",
    "stroke: #8fb5ff; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;": "u-svg-stroke-blue-18",
    "fill:#8fb5ff; stroke:none;": "u-svg-fill-blue-none",
    "fill: none; stroke: #8fb5ff; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round;": "u-svg-stroke-blue-17",
    "display: grid; gap: 12px;": "u-grid-gap-12",
    "background: rgba(10, 14, 36, 0.75); border: 1px solid rgba(68, 122, 203, 0.25); border-radius: 12px; padding: 20px;": "u-card-dark-blue-20",
    "margin: 0 0 10px; color: var(--text-primary);": "u-h4-m0-mb10-primary",
    "margin: 0; padding-left: 20px; color: var(--text-secondary); line-height: 1.7;": "u-ul-m0-pl20-secondary-lh17",
    "max-width: 980px; margin-left: auto; margin-right: auto; text-align: center;": "u-max980-center-text",
    "display: flex; flex-direction: column;": "u-flex-col",
    "flex: 1;": "u-flex-1",
}


def append_class(existing: str, cls: str) -> str:
    parts = existing.split()
    if cls not in parts:
        parts.append(cls)
    return " ".join(parts)


for file in FILES:
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
        print(f"updated {file}")
    else:
        print(f"no changes {file}")
