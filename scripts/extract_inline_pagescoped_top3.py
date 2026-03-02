#!/usr/bin/env python3
from pathlib import Path
import re

TARGETS = [
    (Path("work/newyorklife/index.html"), "nyl"),
    (Path("work/lego/index.html"), "lego"),
    (Path("work/aa/index.html"), "aa"),
]


def append_class(existing: str, cls: str) -> str:
    parts = existing.split()
    if cls not in parts:
        parts.append(cls)
    return " ".join(parts)


def normalize_decl(style_value: str) -> str:
    value = style_value.strip()
    if value and not value.endswith(";"):
        value = value + ";"
    return value


for path, prefix in TARGETS:
    text = path.read_text(encoding="utf-8")
    original = text

    styles = re.findall(r'style="([^"]*)"', text)
    unique_styles = []
    seen = set()
    for style in styles:
        if style not in seen:
            seen.add(style)
            unique_styles.append(style)

    style_to_class = {
        s: f"u-{prefix}-inl-{i+1}" for i, s in enumerate(unique_styles)
    }

    for style, cls in style_to_class.items():
        esc = re.escape(style)

        pattern1 = re.compile(rf'class="([^"]*)"\s+style="{esc}"')
        text = pattern1.sub(lambda m: f'class="{append_class(m.group(1), cls)}"', text)

        pattern2 = re.compile(rf'style="{esc}"\s+class="([^"]*)"')
        text = pattern2.sub(lambda m: f'class="{append_class(m.group(1), cls)}"', text)

        pattern3 = re.compile(rf'style="{esc}"')
        text = pattern3.sub(f'class="{cls}"', text)

    rules = []
    for style in unique_styles:
        cls = style_to_class[style]
        decl = normalize_decl(style)
        rules.append(f".{cls} {{ {decl} }}")

    start = f"/* INLINE-EXTRACT START {prefix} */"
    end = f"/* INLINE-EXTRACT END {prefix} */"
    block = start + "\n" + "\n".join(rules) + "\n" + end

    marker_pattern = re.compile(
        rf"{re.escape(start)}.*?{re.escape(end)}", re.DOTALL
    )
    if marker_pattern.search(text):
        text = marker_pattern.sub(block, text)
    else:
        style_close = text.find("</style>")
        if style_close == -1:
            head_close = text.find("</head>")
            if head_close == -1:
                raise RuntimeError(f"No </head> block found in {path}")
            style_block = "<style>\n" + block + "\n</style>\n"
            text = text[:head_close] + style_block + text[head_close:]
        else:
            text = text[:style_close] + "\n\n" + block + "\n" + text[style_close:]

    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"updated {path} ({len(unique_styles)} styles extracted)")
    else:
        print(f"no changes {path}")
