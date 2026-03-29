"use client"

interface GlyphProps { type: string; x: number; y: number; col: string }

export function DiagramGlyph({ type, x, y, col }: GlyphProps) {
  const s = {
    stroke: col, strokeWidth: 1.5, fill: "none",
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  if (type === "database") return (
    <g style={{ pointerEvents: "none" }}>
      <ellipse cx={x + 10} cy={y + 5}  rx={8} ry={2.5} {...s} />
      <path d={`M${x+2},${y+5}v11`}  {...s} />
      <path d={`M${x+18},${y+5}v11`} {...s} />
      <ellipse cx={x + 10} cy={y + 16} rx={8} ry={2.5} {...s} />
      <path d={`M${x+2},${y+10} Q${x+10},${y+13} ${x+18},${y+10}`} {...s} />
    </g>
  );
  if (type === "monitor") return (
    <g style={{ pointerEvents: "none" }}>
      <rect x={x + 1} y={y + 2} width={19} height={13} rx={2} {...s} />
      <path d={`M${x+10},${y+15}v4`} {...s} />
      <path d={`M${x+5},${y+19}h10`} {...s} />
    </g>
  );
  if (type === "devices") return (
    <g style={{ pointerEvents: "none" }}>
      <rect x={x + 1}  y={y + 2} width={11} height={17} rx={2}   {...s} />
      <rect x={x + 14} y={y + 5} width={7}  height={13} rx={1.5} {...s} />
    </g>
  );
  if (type === "api-arrows") return (
    <g style={{ pointerEvents: "none" }}>
      <path d={`M${x+1},${y+5} L${x+16},${y+5}`} {...s} />
      <path d={`M${x+13},${y+2} L${x+16},${y+5} L${x+13},${y+8}`} {...s} />
      <path d={`M${x+19},${y+13} L${x+4},${y+13}`} {...s} />
      <path d={`M${x+7},${y+10} L${x+4},${y+13} L${x+7},${y+16}`} {...s} />
    </g>
  );
  return null;
}
