#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/newyorklife/index.html"),
    Path("work/lego/index.html"),
    Path("work/aa/index.html"),
]

STYLE_TO_CLASS = {
    "background: rgba(68, 122, 203, 0.05); border: 1px solid var(--border); border-radius: 12px; padding: 32px; margin: 32px 0;": "u-panel-accent-32",
    "border-left: 4px solid #ef4444;": "u-border-left-red-4",
    "border-left: 4px solid var(--accent-blue);": "u-border-left-accent-4",
    "color: #ef4444;": "u-text-red-500",
    "display: flex; justify-content: space-between; align-items: center; position: relative;": "u-flex-between-center-rel",
    "position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--border);": "u-abs-midline-border",
    "background: var(--bg-secondary); border: 2px solid var(--accent-blue); border-radius: 12px; padding: 40px;": "u-results-panel-40",
    "padding:10px; border-radius:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(250,204,21,0.14);": "u-card-gold-8-pad10",
    "padding: 14px 16px; font-weight: 700; color: var(--text-primary);": "u-pad14-16-bold-primary",
    "background: rgba(226,232,240,0.9); color: #334155; border-radius: 0 0 10px 10px; padding: 14px; text-align: center;": "u-flow-body-gray-14",
    "text-align: center; margin-bottom: 18px; color: var(--text-primary);": "u-text-center-mb18-primary",
    "border: 1px solid rgba(239,68,68,0.22); border-radius: 10px; background: rgba(127,29,29,0.08); padding: 14px;": "u-card-red-10-pad14",
    "font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #fca5a5; margin-bottom: 10px;": "u-overline-red-11-mb10",
    "font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary); margin-bottom: 10px;": "u-overline-secondary-11-mb10",
    "display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 10px;": "u-grid-repeat3-gap8-mb10",
    "position:absolute; top:-1px; left:10px; right:10px; height:2px; background: linear-gradient(90deg, rgba(68,122,203,0.2), rgba(68,122,203,0.95), rgba(34,211,238,0.25)); border-radius:999px;": "u-accent-topline",
    "padding:10px; border-radius:8px; background:rgba(68,122,203,0.08); border:1px solid rgba(68,122,203,0.18);": "u-card-blue-8-pad10-border18",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch;": "u-grid-2-24-stretch",
    "font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em;": "u-overline-secondary-11-06",
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
