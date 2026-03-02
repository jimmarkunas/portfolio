#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/lego/index.html"),
    Path("work/aa/index.html"),
    Path("work/directv02/index.html"),
]

STYLE_TO_CLASS = {
    "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;": "u-logo-link",
    "width:32px;height:32px;object-fit:contain;": "u-logo-img",
    "color: var(--accent-blue);": "u-accent-color",
    "margin-top: 24px;": "u-mt-24",
    "margin-top: 32px;": "u-mt-32",
    "margin-top: 32px; margin-bottom: 32px;": "u-hero-metrics-spacing",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;": "u-grid-2-24-mt24",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px;": "u-grid-2-24-mt32",
    "background: var(--bg-secondary); border-top: 1px solid var(--border);": "u-section-alt",
    "border-top: 1px solid var(--border);": "u-section-divider",
    "display:grid; gap:8px;": "u-grid-gap-8",
    "display:grid; gap: 8px;": "u-grid-gap-8",
    "font-size: 13px; font-weight: 600; color: var(--text-primary);": "u-fs13-semibold-primary",
    "font-size: 12px; color: var(--text-primary); font-weight: 600;": "u-fs12-primary-semibold",
    "font-size: 11px; color: var(--text-secondary); margin-top: 3px;": "u-fs11-secondary-mt3",
    "font-size: 11px; color: var(--text-secondary); margin-top: 4px;": "u-fs11-secondary-mt4",
    "font-size: 10px; color: var(--text-secondary); margin-top: 2px;": "u-fs10-secondary-mt2",
    "font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary); margin-bottom: 8px;": "u-overline-secondary-11-08-mb8",
    "color: var(--text-primary);": "u-color-primary",
    "color: var(--text-secondary);": "u-color-secondary",
    "border-radius: 8px; border: 1px solid rgba(68,122,203,0.12); background: rgba(68,122,203,0.08); padding: 10px;": "u-card-blue-8-pad10",
    "border-radius: 8px; border: 1px solid rgba(68,122,203,0.14); background: rgba(68,122,203,0.08); padding: 10px; text-align:center;": "u-card-blue-8-pad10-center",
    "text-align:center; border-radius: 8px; border: 1px solid rgba(68,122,203,0.14); background: rgba(68,122,203,0.08); padding: 10px;": "u-card-blue-8-pad10-center",
    "border-radius: 10px; border: 1px solid rgba(68,122,203,0.16); background: rgba(7,15,35,0.58); padding: 12px;": "u-card-blue-10-pad12",
    "display:flex; justify-content:space-between; gap: 8px; font-size: 11px;": "u-flex-between-11-gap8",
    "display:grid; grid-template-columns: 14px 1fr; gap: 8px; align-items:start;": "u-grid-dot-14",
    "width:14px; height:14px; border-radius:50%; background:#ef4444; margin-top: 2px;": "u-dot-red-14-mt2",
    "padding:6px 10px; border-radius:999px; border:1px solid rgba(68,122,203,0.18); background: rgba(68,122,203,0.08); color: var(--text-primary); font-size: 13px;": "u-pill-blue-13",
    "padding: 5px 9px; border-radius: 999px; background: rgba(68,122,203,0.12); border: 1px solid rgba(68,122,203,0.18); font-size: 12px; color: var(--text-primary);": "u-pill-blue-12",
    "display:grid; grid-template-columns: 20px 1fr; gap: 8px; align-items:start;": "u-grid-20-1-start-gap8",
    "display:flex; align-items:center; justify-content:center; color: var(--text-secondary); font-size: 26px; padding: 0 2px;": "u-arrow-center-26",
    "width:10px;height:10px;border-radius:50%;background:#94a3b8; box-shadow:0 0 0 3px rgba(148,163,184,0.12);": "u-dot-slate-10",
    "width:12px;height:12px;border-radius:50%;background:#447ACB; box-shadow:0 0 0 4px rgba(68,122,203,0.14);": "u-dot-blue-12",
    "z-index: 1; text-align: center; flex: 1;": "u-timeline-col",
    "font-size: 11px; color: var(--text-secondary);": "u-fs11-secondary",
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
