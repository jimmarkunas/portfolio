#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/lego/index.html"),
    Path("work/directv02/index.html"),
    Path("work/aa/index.html"),
    Path("work/newyorklife/index.html"),
]

STYLE_TO_CLASS = {
    "font-size:12px; color:var(--text-muted); margin-top:2px;": "u-fs12-muted-mt2",
    "font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--text-muted); padding:10px 8px; text-align:center;": "u-label-muted-11-pad108-center",
    "padding:10px 12px; border-radius:8px; background:rgba(255,255,255,0.02); color:var(--text-primary); font-size:13px;": "u-cell-primary-13",
    "display:inline-flex; align-items:center; gap:6px;": "u-inline-flex-gap6",
    "padding:6px 10px; border-radius:999px; border:1px solid rgba(68,122,203,0.22); background:rgba(68,122,203,0.08); font-size:12px; color:#cfe0ff;": "u-pill-blue-12-cfe",
    "font-size:12px; color:#8fb5ff; text-transform:uppercase; letter-spacing:.08em; margin-bottom:4px;": "u-fs12-blue-overline-mb4",
    "font-size:14px; color:var(--text-primary); font-weight:600;": "u-fs14-primary-semibold",
    "font-size:13px; color:var(--text-primary); font-weight:600; margin-top:4px;": "u-fs13-primary-semibold-mt4",
    "position: relative; width: 100%; padding-top: 56.25%; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); background: rgba(0,0,0,0.18);": "u-video-wrap-16x9",
    "position: absolute; inset: 0; width: 100%; height: 100%; border: 0;": "u-video-embed-fill",
    "background: rgba(7,15,35,0.65); border: 1px solid rgba(68,122,203,0.14); border-radius: 10px; padding: 12px; text-align: center;": "u-stat-card-center-12",
    "font-size: 22px; font-weight: 700; color: var(--accent-blue);": "u-fs22-bold-accent",
    "font-size: 12px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em;": "u-overline-secondary-12",
    "background: rgba(7,15,35,0.65); border: 1px solid rgba(68,122,203,0.14); border-radius: 10px; padding: 14px; text-align:center; display:flex; flex-direction:column; justify-content:center;": "u-stat-card-center-14-flex",
    "font-size: 24px; font-weight: 700; color: var(--accent-blue); line-height: 1;": "u-fs24-bold-accent-lh1",
    "margin-top: 6px; font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em;": "u-overline-secondary-11-mt6",
    "font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 6px;": "u-overline-secondary-11-mb6",
    "text-align:center; padding:10px 8px; border-radius: 8px; border: 1px solid rgba(68,122,203,0.14); background: rgba(68,122,203,0.08);": "u-device-tile",
    "height: 22px; display:flex; align-items:center; justify-content:center;": "u-icon-holder-22",
    "font-size: 12px; color: var(--text-primary); margin-top: 4px;": "u-fs12-primary-mt4",
    "padding:4px 8px; border-radius:999px; border:1px solid rgba(68,122,203,0.16); background: rgba(7,15,35,0.6); font-size: 11px; color: var(--text-primary);": "u-pill-dark-blue-11",
    "width:20px;height:20px;border-radius:50%;background:rgba(68,122,203,0.14);border:1px solid rgba(68,122,203,0.24);display:flex;align-items:center;justify-content:center;color:var(--accent-blue);font-size:11px;": "u-step-dot-blue",
    "border: 2px dashed rgba(239, 68, 68, 0.65); border-radius: 10px; padding: 10px;": "u-flow-dashed-red",
    "background: rgba(68,122,203,0.95); color: white; border-radius: 8px 8px 0 0; padding: 10px 12px; text-align: center; font-weight: 700;": "u-flow-head-blue",
    "background: rgba(226,232,240,0.92); color: #334155; border-radius: 0 0 8px 8px; padding: 12px; text-align: center;": "u-flow-body-gray",
    "font-size: 12px; font-weight: 700; color: #f87171; letter-spacing: 0.06em; text-transform: uppercase; text-align: left;": "u-flow-step-label-red",
    "background: rgba(163, 201, 84, 0.95); color: #f8fafc; border-radius: 10px; padding: 10px 12px; text-align: center; font-weight: 700;": "u-flow-action-green",
    "text-align: center; color: rgba(163, 201, 84, 0.95); font-size: 28px; line-height: 1;": "u-flow-arrow-green",
    "display: flex; gap: 10px; align-items: flex-start; color: var(--text-secondary); line-height: 1.35; font-size: 14px;": "u-bullet-row-secondary",
    "display: grid; grid-template-columns: 1fr 1fr; gap: 24px;": "u-grid-2-24",
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
