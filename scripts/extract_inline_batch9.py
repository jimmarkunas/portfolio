#!/usr/bin/env python3
from pathlib import Path
import re

FILES = [
    Path("work/lego/index.html"),
    Path("work/aa/index.html"),
]

STYLE_TO_CLASS = {
    "font-size:13px; font-weight:600; color:var(--text-primary);": "u-fs13-semibold-primary",
    "padding:4px 8px; border-radius:999px; border:1px solid rgba(68,122,203,0.16); background: rgba(68,122,203,0.1); font-size: 11px; color: var(--text-primary);": "u-pill-blue-11",
    "padding:4px 8px; border-radius:999px; border:1px solid rgba(68,122,203,0.16); background: rgba(68,122,203,0.1); font-size:11px; color:var(--text-primary);": "u-pill-blue-11",
    "padding:12px; border-radius:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(68,122,203,0.12);": "u-card-surface-blue-8-pad12",
    "border-radius: 8px; border: 1px solid rgba(239,68,68,0.18); background: rgba(7,15,35,0.52); padding: 10px;": "u-card-red-8-pad10",
    "border-radius: 8px; border: 1px solid rgba(239,68,68,0.14); background: rgba(7,15,35,0.5); padding: 10px;": "u-card-red-8-pad10-lite",
    "padding:10px; border-radius:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(68,122,203,0.12);": "u-card-surface-blue-8-pad12",
    "border-radius:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(68,122,203,0.12); padding:10px;": "u-card-surface-blue-8-pad12",
    "font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:var(--text-muted);": "u-overline-secondary-11-mb6",
    "width:12px;height:12px;border-radius:50%;background:#facc15; box-shadow:0 0 0 4px rgba(250,204,21,0.12);": "u-dot-gold-12",
    "display:flex; align-items:center; justify-content:center; color:var(--text-secondary); font-size:26px;": "u-arrow-center-26",
    "margin: 20px 0 24px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(68,122,203,0.2); background: rgba(7,15,35,0.55); padding: 12px;": "u-shell-blue-12-20-24",
    "border-radius: 8px; background: rgba(68,122,203,0.08); border: 1px solid rgba(68,122,203,0.12); padding: 9px;": "u-card-blue-8-pad9",
    "border-radius: 10px; border: 1px solid rgba(68,122,203,0.14); background: rgba(7,15,35,0.5); padding: 12px;": "u-card-blue-10-pad12",
    "border-radius: 8px; border: 1px solid rgba(68,122,203,0.14); background: rgba(7,15,35,0.52); padding: 10px; text-align:center;": "u-card-blue-dark-8-pad10-center",
    "border-radius: 10px; border: 1px solid rgba(68,122,203,0.16); background: rgba(7,15,35,0.58); padding: 12px; text-align:center;": "u-card-blue-dim-10-pad12-center",
    "font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 5px;": "u-overline-secondary-11-mt5",
    "font-size: 12px; color: var(--text-primary);": "u-fs12-primary",
    "font-size: 13px; color: var(--text-primary);": "u-fs13-primary",
    "font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-secondary);": "u-overline-secondary-12-wide",
    "font-size: 22px; font-weight: 700; color: var(--text-primary); margin-top: 6px;": "u-fs22-bold-primary-mt6",
    "display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px;": "u-grid-repeat2-gap8",
    "border-radius: 8px; background: rgba(7,15,35,0.45); border: 1px solid rgba(239,68,68,0.12); padding: 10px;": "u-card-red-dark-8-pad10",
    "display:block; width:100%; height:auto; border-radius:10px; border:1px solid var(--border);": "u-img-block-full-rounded-border",
    "border-radius: 8px; border: 1px solid rgba(68,122,203,0.12); background: rgba(7,15,35,0.45); padding: 10px;": "u-card-blue-dark-8-pad10",
    "display:flex; align-items:center; justify-content:center; color: var(--text-secondary); font-size: 22px;": "u-arrow-center-22",
    "padding:4px 8px; border-radius:999px; border:1px solid rgba(68,122,203,0.16); background: rgba(68,122,203,0.1); font-size: 10px; color: var(--text-primary);": "u-pill-blue-10",
    "display: flex; flex-direction: column;": "u-flex-col",
    "flex: 1;": "u-flex-1",
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
