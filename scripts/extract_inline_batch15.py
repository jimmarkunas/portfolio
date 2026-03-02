#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/newyorklife/index.html"),
    Path("work/directv02/index.html"),
    Path("work/cpsenergy/index.html"),
]

STYLE_TO_CLASS = {
    "background: rgba(68, 122, 203, 0.05); border: 1px solid var(--border); border-radius: 12px; padding: 32px; margin: 32px 0;": "u-panel-accent-32",
    "margin-top: 0;": "u-mt0",
    "text-align: center; margin-bottom: 24px; color: var(--text-primary);": "u-text-center-mb24-primary",
    "text-align: center; margin-top: 24px; color: var(--text-secondary); font-size: 14px;": "u-text-center-mt24-secondary-14",
    "display: flex; gap: 48px; align-items: flex-end; justify-content: center;": "u-flex-gap48-end-center",
    "width: 240px; height: 180px; background: #ef4444; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column;": "u-kpi-box-red-240x180",
    "font-size: 48px; font-weight: 700; color: white;": "u-fs48-bold-white",
    "font-size: 40px; color: var(--text-secondary); padding-bottom: 40px;": "u-fs40-secondary-pb40",
    "width: 240px; height: 120px; background: var(--accent-blue); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 4px;": "u-kpi-box-accent-240x120",
    "font-size: 48px; font-weight: 700; color: white; line-height: 1;": "u-fs48-bold-white-lh1",
    "position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: var(--bg-primary); border-radius: 12px; border: 1px solid var(--border);": "u-embed-wrap-16x9",
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;": "u-embed-fill-tl",
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
