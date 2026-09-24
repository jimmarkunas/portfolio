import type { CSSProperties } from "react";
import type { IconSource } from "../../templateTypes";

type IconCircleTone = "neutral" | "light" | "accent";

/** Native circular glyph container: lucide icon, existing SVG glyph, or a text glyph. */
export function IconCircle({ source, glyph, size, iconSize, tone = "neutral", glow = false, className = "" }: { source?: IconSource; glyph?: string; size: number; iconSize?: number; tone?: IconCircleTone; glow?: boolean; className?: string }) {
  const inner = iconSize ?? Math.round(size * 0.46);
  let content = null;
  if (glyph) content = <span className="pdmat-icon-circle__glyph">{glyph}</span>;
  else if (source && "icon" in source) { const Icon = source.icon; content = <Icon aria-hidden="true" size={inner} strokeWidth={1.8} />; }
  else if (source) content = <img src={source.src} alt="" width={inner} height={inner} />;
  return <span
    className={`pdmat-icon-circle pdmat-icon-circle--${tone}${glow ? " is-glow" : ""} ${className}`.trim()}
    style={{ "--pdmat-circle": `${size}px`, "--pdmat-icon": `${inner}px` } as CSSProperties}
  >{content}</span>;
}
