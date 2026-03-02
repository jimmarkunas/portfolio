#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/directv02/index.html"),
    Path("work/cbdistillery/index.html"),
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
    "margin-top: 32px;": "u-mt-32",
    "margin: 32px 0;": "u-my-32",
    "margin:0;": "u-m0",
    "margin: 0;": "u-m0",
    "display: flex; flex-direction: column;": "u-flex-col",
    "flex: 1;": "u-flex-1",
    "border-left: 4px solid #ef4444;": "u-border-left-red-4",
    "border-left: 4px solid var(--accent-blue);": "u-border-left-accent-4",
    "color: #ef4444;": "u-text-red-500",
    "background: var(--bg-secondary); border: 2px solid var(--accent-blue); border-radius: 12px; padding: 40px;": "u-results-panel-40",
    "font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 8px;": "u-overline-secondary-11-08-mb8",
    "border-radius: 8px; border: 1px solid rgba(68,122,203,0.14); background: rgba(7,15,35,0.45); padding: 10px; text-align:center;": "u-card-blue-dark-8-pad10-center",
    "font-size: 12px; color: var(--text-primary);": "u-fs12-primary",
    "font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em;": "u-overline-secondary-11-06",
    "display: block; width: 100%; height: auto; border-radius: 12px; user-select: none; -webkit-user-select: none; -webkit-user-drag: none; pointer-events: none;": "u-img-banner-nonselect-rounded",
    "display: flex; justify-content: space-between; align-items: center; position: relative;": "u-flex-between-center-rel",
    "position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--border);": "u-abs-midline-border",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch;": "u-grid-2-24-stretch",
    "stroke: #8fb5ff; fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;": "u-svg-stroke-blue-16",
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
