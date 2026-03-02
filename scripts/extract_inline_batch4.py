#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path('index.html'),
    Path('work/index.html'),
    Path('contact/index.html'),
]

STYLE_TO_CLASS = {
    "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;": "u-logo-link",
    "display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;": "u-logo-link",
    "width:32px;height:32px;object-fit:contain;": "u-logo-img",
    "cursor: pointer;": "u-cursor-pointer",
    "width:100%;height:100%;object-fit:cover;": "u-fill-cover",
    "text-decoration: none;": "u-link-no-underline",
    "height:1px;background:var(--border);margin:0 40px;": "u-divider-thin-40",
    "padding:80px 0;": "u-core-section-pad-80",
    "text-align:center;": "u-text-center",
    "font-size:48px;margin-bottom:16px;": "u-fs48-mb16",
    "font-size:20px;font-weight:700;margin-bottom:12px;": "u-h3-20-12",
    "font-size:15px;color:var(--text-secondary);line-height:1.7;": "u-p15-secondary-lh17",
    "display:flex;align-items:center;gap:8px;color:var(--text-secondary);text-decoration:none;font-size:16px;transition:color 0.3s;": "u-contact-link-row",
    "font-size:20px;": "u-fs20",
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
