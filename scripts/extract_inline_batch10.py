#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/scj/index.html"),
    Path("work/bi/index.html"),
    Path("work/cpsenergy/index.html"),
]

STYLE_TO_CLASS = {
    "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;": "u-logo-link",
    "width:32px;height:32px;object-fit:contain;": "u-logo-img",
    "background-size: cover; background-position: center;": "u-banner-cover-center",
    "color: var(--accent-blue);": "u-accent-color",
    "margin-top: 32px; margin-bottom: 32px;": "u-hero-metrics-spacing",
    "background: var(--bg-secondary); border-top: 1px solid var(--border);": "u-section-alt",
    "border-top: 1px solid var(--border);": "u-section-divider",
    "text-align: center;": "u-text-center",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px;": "u-grid-2-24",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;": "u-grid-2-24-mt24",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px;": "u-grid-2-24-mt32",
    "margin-top: 24px;": "u-mt-24",
    "margin: 32px 0;": "u-my-32",
    "z-index: 1; text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center; gap: 12px;": "u-timeline-col-stack",
    "font-size: 13px; font-weight: 600; color: var(--text-primary);": "u-fs13-semibold-primary",
    "font-size: 11px; color: var(--text-secondary);": "u-fs11-secondary",
    "width: 80px; height: 80px; border-radius: 50%; background: var(--accent-blue); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: white; line-height: 1.3;": "u-node-blue-80-fs13-lh13",
    "width: 80px; height: 80px; border-radius: 50%; background: #FFD700; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #0a0a0f; line-height: 1.3;": "u-node-gold-80-fs13-lh13",
    "display: block; width: 100%; height: auto; border-radius: 12px; user-select: none; -webkit-user-select: none; -webkit-user-drag: none; pointer-events: none;": "u-img-banner-nonselect-rounded",
    "position: relative; width: 100%; padding-top: 56.25%; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); background: rgba(0,0,0,0.18);": "u-video-wrap-16x9",
    "position: absolute; inset: 0; width: 100%; height: 100%; border: 0;": "u-video-embed-fill",
    "display: flex; justify-content: space-between; align-items: center; position: relative;": "u-flex-between-center-rel",
    "position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--border);": "u-abs-midline-border",
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
