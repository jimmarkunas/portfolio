#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/newyorklife/index.html"),
    Path("work/lego/index.html"),
    Path("work/aa/index.html"),
]

STYLE_TO_CLASS = {
    "text-align: center; max-width: 900px; margin-left: auto; margin-right: auto;": "u-max900-center-text",
    "text-align: center; margin-bottom: 24px; color: var(--text-primary);": "u-text-center-mb24-primary",
    "display: flex; gap: 48px; align-items: flex-end; justify-content: center;": "u-flex-gap48-end-center",
    "text-align: center; margin-top: 24px; color: var(--text-secondary); font-size: 14px;": "u-text-center-mt24-secondary-14",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;": "u-grid-2-24-mt24",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px;": "u-grid-2-24-mt32",
    "margin-top: 48px;": "u-mt-48",
    "margin-top: 32px;": "u-mt-32",
    "text-align: center; margin-top: 14px; color: var(--text-secondary); font-size: 14px;": "u-text-center-mt14-secondary-14",
    "display:flex; flex-wrap:wrap; gap: 6px;": "u-flex-wrap-gap6",
    "margin: 32px 0; border-radius: 12px; border: 1px solid var(--border); background: linear-gradient(135deg, rgba(68, 122, 203, 0.12) 0%, rgba(34, 211, 238, 0.06) 100%); padding: 20px;": "u-shell-grad-blue-cyan-20",
    "text-align:center; margin-bottom: 16px;": "u-text-center-mb16",
    "font-size: 14px; color: var(--text-secondary); margin-top: 6px;": "u-fs14-secondary-mt6",
    "font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;": "u-fs16-bold-primary-mb8",
    "background: rgba(68,122,203,0.05); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 12px;": "u-panel-accent-16-mb12",
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
