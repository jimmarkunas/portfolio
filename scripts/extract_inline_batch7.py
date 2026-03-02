#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/newyorklife/index.html"),
    Path("work/cpsenergy/index.html"),
    Path("work/directv01/index.html"),
]

STYLE_TO_CLASS = {
    "color: var(--accent-blue);": "u-accent-color",
    "margin-top: 24px;": "u-mt-24",
    "margin-top: 32px; margin-bottom: 32px;": "u-hero-metrics-spacing",
    "background: var(--bg-secondary); border-top: 1px solid var(--border);": "u-section-alt",
    "border-top: 1px solid var(--border);": "u-section-divider",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px;": "u-grid-2-24",
    "z-index: 1; text-align: center; flex: 1;": "u-timeline-col",
    "font-size: 13px; font-weight: 600; color: var(--text-primary);": "u-fs13-semibold-primary",
    "font-size: 11px; color: var(--text-secondary);": "u-fs11-secondary",
    "width: 80px; height: 80px; border-radius: 50%; background: var(--accent-blue); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: white;": "u-node-blue-80-fs20",
    "width: 80px; height: 80px; border-radius: 50%; background: #FFD700; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: #0a0a0f;": "u-node-gold-80-fs20",
    "font-size: 13px; line-height: 1.45;": "u-fs13-lh145",
    "background: rgba(7,15,35,0.55); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px;": "u-card-715-55-border-pad1416",
    "font-size: 14px; font-weight: 700; color: var(--text-primary);": "u-fs14-bold-primary",
    "font-size: 13px; color: var(--text-secondary); line-height: 1.35; margin-top: 4px;": "u-fs13-secondary-lh135-mt4",
    "padding: 16px; font-weight: 700; color: var(--text-primary);": "u-pad16-fw700-primary",
    "font-weight: 700; margin-bottom: 6px;": "u-fw700-mb6",
    "display: grid; grid-template-columns: minmax(160px, 0.9fr) 1.6fr; border-bottom: 1px solid rgba(255,255,255,0.05);": "u-grid-min160-09-16-border",
    "padding: 16px; color: #fdba74; font-weight: 600;": "u-pad16-orange600",
    "display: grid; gap: 10px;": "u-grid-gap-10",
    "font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;": "u-p14-secondary-mb8",
    "font-size: 16px; color: rgba(255,255,255,0.8);": "u-fs16-white80",
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
