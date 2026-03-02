#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/murad/index.html"),
    Path("work/k2/index.html"),
    Path("work/method/index.html"),
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
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;": "u-grid-2-24-mt24",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px;": "u-grid-2-24-mt32",
    "margin-top: 24px;": "u-mt-24",
    "margin-top: 32px;": "u-mt-32",
    "z-index: 1; text-align: center; flex: 1;": "u-timeline-col",
    "font-size: 13px; font-weight: 600; color: var(--text-primary);": "u-fs13-semibold-primary",
    "font-size: 11px; color: var(--text-secondary);": "u-fs11-secondary",
    "width: 80px; height: 80px; border-radius: 50%; background: var(--accent-blue); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: white;": "u-node-blue-80-fs13",
    "width: 80px; height: 80px; border-radius: 50%; background: var(--accent-blue); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: white;": "u-node-blue-80-fs14",
    "width: 80px; height: 80px; border-radius: 50%; background: #FFD700; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #0a0a0f;": "u-node-gold-80-fs13",
    "width: 80px; height: 80px; border-radius: 50%; background: #FFD700; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #0a0a0f;": "u-node-gold-80-fs14",
    "display:block;width:100%;height:auto;border-radius:12px;margin:32px 0;border:1px solid var(--border);": "u-img-fluid-rounded-border-my32",
    "width: 100%; height: auto; display: block; margin: 32px 0; border-radius: 12px; border: 1px solid var(--border);": "u-img-fluid-rounded-border-my32",
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
