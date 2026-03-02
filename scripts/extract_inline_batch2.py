#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path('work/newyorklife/index.html'),
    Path('about/index.html'),
    Path('services/index.html'),
]

STYLE_TO_CLASS = {
    "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;": "u-logo-link",
    "width:32px;height:32px;object-fit:contain;": "u-logo-img",
    "background-size: cover; background-position: center;": "u-banner-cover-center",
    "margin-top: 32px; margin-bottom: 32px;": "u-hero-metrics-spacing",
    "background: var(--bg-secondary); border-top: 1px solid var(--border);": "u-section-alt",
    "border-top: 1px solid var(--border);": "u-section-divider",
    "text-align: center;": "u-text-center",
    "white-space: nowrap; display: flex; align-items: center; justify-content: center;": "u-btn-inline-center",
    "padding: 60px 0;": "u-hero-section-pad-60",
    "padding: 80px 0;": "u-core-section-pad-80",
    "background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 24px;": "u-card-secondary-24",
    "background: var(--bg-primary); border: 1px solid var(--border); border-radius: 12px; padding: 24px;": "u-card-primary-24",
    "font-size: 12px; color: var(--accent-blue); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;": "u-overline-accent",
    "font-size: 18px; font-weight: 700; margin-bottom: 12px;": "u-h3-18-12",
    "font-size: 20px; font-weight: 700; margin: 0;": "u-h3-20-0",
    "font-size: 14px; color: var(--text-secondary); line-height: 1.6;": "u-p-14-secondary-lh16",
    "font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;": "u-p-14-secondary-lh16-mb16",
    "margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border);": "u-divider-top-16",
    "font-size: 12px; color: var(--text-secondary);": "u-fs12-secondary",
    "list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px;": "u-list-col-6",
    "font-size: 13px; color: var(--text-secondary); padding-left: 16px; position: relative;": "u-check-li-16",
    "font-size: 13px; color: var(--text-secondary); padding-left: 18px; position: relative;": "u-check-li-18",
    "position: absolute; left: 0; color: var(--accent-blue); font-size: 10px;": "u-check-icon-10",
    "position: absolute; left: 0; color: var(--accent-blue);": "u-check-icon",
    "display: flex; align-items: center; gap: 12px; margin-bottom: 12px;": "u-head-row-gap-12",
    "font-size: 24px;": "u-fs24",
    "font-size: 32px;": "u-fs32",
    "display: grid; grid-template-columns: 1fr 40px 1fr; gap: 20px; align-items: center;": "u-tl-row",
    "width: 16px; height: 16px; background: var(--accent-blue); border-radius: 50%; border: 3px solid var(--bg-secondary); position: relative; z-index: 1;": "u-tl-dot",
    "font-size: 14px; color: var(--accent-blue); font-weight: 600; margin-bottom: 8px;": "u-tl-date",
    "font-size: 20px; font-weight: 700; margin-bottom: 8px;": "u-tl-title",
    "z-index: 1; text-align: center; flex: 1;": "u-timeline-col",
    "font-size: 13px; font-weight: 600; color: var(--text-primary);": "u-fs13-semibold-primary",
    "font-size: 11px; color: var(--text-secondary);": "u-fs11-secondary",
}


def append_class(existing: str, cls: str) -> str:
    parts = existing.split()
    if cls not in parts:
        parts.append(cls)
    return " ".join(parts)


for file in FILES:
    text = file.read_text(encoding='utf-8')
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
        file.write_text(text, encoding='utf-8')
        print(f'updated {file}')
    else:
        print(f'no changes {file}')
