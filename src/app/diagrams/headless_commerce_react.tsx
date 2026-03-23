"use client";

import { useState, useRef, useEffect } from "react";
import type { DiagramData } from "@/components/case-study/types";

const C = {
  ink:    "#222222",
  sec:    "#4B5154",
  muted:  "#7B7B7B",
  accent: "#447ACB",
  border: "#E5E7EB",
  bg:     "#F3F3F3",
  white:  "#FFFFFF",
};

// ── Layout constants ────────────────────────────────────────────────────────
const VW = 920, VH = 370;
const NW = 190, NH = 80, NRX = 12;
const IX = 8, OX = VW - IX - NW;
const ECX = VW / 2, ECY = 136; // circle center — decoupled from node rows
const ER = 82;

const ROW_GAP  = 116;
const NODE_CY  = 200; // vertical center of input/output node rows
const NYS  = [NODE_CY - NH / 2 - ROW_GAP, NODE_CY - NH / 2, NODE_CY - NH / 2 + ROW_GAP];
const NCYS = NYS.map(y => y + NH / 2);

// Integration block — below the circle
const INTG_CARD_W   = 230;
const INTG_CARD_H   = 90;
const INTG_CARD_TOP = ECY + ER + 40;            // top of card
const INTG_CARD_X   = ECX - INTG_CARD_W / 2;
const INTG_STEP_SVG = 65;                        // SVG-unit spacing between icon centers
const INTG_Y_SVG    = INTG_CARD_TOP + 58;        // icon center Y within card

const ICON_CSS = 51; // always 51px CSS — matches Tools Used exactly
const ICON_PAD = 10; // padding between icon and node edge

const DUR    = 2.2;
const DELAYS = [0, DUR / 3, (DUR / 3) * 2];

function bpath(sx: number, sy: number, ex: number, ey: number) {
  const d = (ex - sx) * 0.5;
  return `M${sx},${sy} C${sx + d},${sy} ${ex - d},${ey} ${ex},${ey}`;
}

function MobileConnector({ fid }: { fid: string }) {
  const H = 44;
  return (
    <svg width="100%" height={H} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <filter id={fid} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <line x1="50%" y1="0" x2="50%" y2={H} stroke={C.border} strokeWidth="1.5" />
      {DELAYS.map((delay, i) => (
        <circle key={i} cx="50%" r="4.5" fill={C.accent} filter={`url(#${fid})`} opacity="0">
          <animate attributeName="cy" from="0" to={H} dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
            dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function MobileFanConnector({ fid }: { fid: string }) {
  const H = 56;
  // Centers of 3 equal flex-1 cards with gap-2 (8px) — approx 16%, 50%, 84%
  const targets = ["16%", "50%", "84%"];
  return (
    <svg width="100%" height={H} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <filter id={fid} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {targets.map(tx => (
        <line key={tx} x1="50%" y1="0" x2={tx} y2={H} stroke={C.border} strokeWidth="1.5" />
      ))}
      {targets.map((tx, t) =>
        DELAYS.map((delay, i) => (
          <circle key={`${t}-${i}`} r="4.5" fill={C.accent} filter={`url(#${fid})`} opacity="0">
            <animate attributeName="cx" from="50%" to={tx}
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="cy" from="0" to={H}
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
          </circle>
        ))
      )}
    </svg>
  );
}

// ── Glyphs ──────────────────────────────────────────────────────────────────
function Glyph({ type, x, y, col }: { type: string; x: number; y: number; col: string }) {
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
      {/* → */}
      <path d={`M${x+1},${y+5} L${x+16},${y+5}`} {...s} />
      <path d={`M${x+13},${y+2} L${x+16},${y+5} L${x+13},${y+8}`} {...s} />
      {/* ← */}
      <path d={`M${x+19},${y+13} L${x+4},${y+13}`} {...s} />
      <path d={`M${x+7},${y+10} L${x+4},${y+13} L${x+7},${y+16}`} {...s} />
    </g>
  );
  return null;
}

// ── Component ───────────────────────────────────────────────────────────────
export default function DataFlowDiagram({ data }: { data: DiagramData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]   = useState(1);
  const [active, setActive] = useState<string | null>(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });

  // Track rendered SVG width so we can place CSS-pixel icons at exact positions
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / VW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tip = active ? data.tooltips[active] : null;

  const pillCount  = data.pills.length;
  const pillSpread = 15;
  const pillStartY = ECY - ((pillCount - 1) * pillSpread) / 2;

  // Integration icons — SVG-coordinate positions so HTML overlay and SVG paths stay aligned
  const intgXsSvg = data.integrations.map((_, j) =>
    ECX + (j - (data.integrations.length - 1) / 2) * INTG_STEP_SVG
  );

  function tap(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (active === id) { setActive(null); return; }
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setActive(id);
    setTipPos({ x: rect.left + rect.width / 2, y: rect.bottom });
  }
  function enter(id: string, e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    e.stopPropagation();
    if (active === id) { setActive(null); return; }
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setActive(id);
    setTipPos({ x: rect.left + rect.width / 2, y: rect.bottom });
  }
  function leave(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    setActive(null);
  }

  function touchStart(id: string, e: React.TouchEvent) {
    e.stopPropagation();
    if (active === id) { setActive(null); return; }
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setActive(id);
    setTipPos({ x: rect.left + rect.width / 2, y: rect.bottom });
  }

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>

      {/* ── Tooltip ── */}
      {tip && (
        <div style={{
          position: "fixed",
          left: tipPos.x - 120,
          top:  tipPos.y + 16,
          zIndex: 1000,
          width: 240,
          pointerEvents: "auto",
          background: C.ink,
          color: "#fff",
          borderRadius: 10,
          padding: "14px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          fontFamily: '"Inter Display","Inter",ui-sans-serif,system-ui,sans-serif',
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
              {tip.title}
            </div>
            <button
              onClick={() => setActive(null)}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: "0 0 0 8px", flexShrink: 0 }}
              aria-label="Close"
            >×</button>
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,0.72)" }}>
            {tip.body}
          </div>
        </div>
      )}

      {/* ── Mobile / tablet stack layout (hidden md+) ── */}
      <div className="md:hidden flex flex-col" onClick={() => setActive(null)}>

        {/* Input nodes — horizontal row */}
        <div className="flex gap-2">
          {data.inputs.map(node => (
            <div key={node.id} className="flex-1 min-w-0 flex flex-col gap-1 rounded-[12px] bg-[#F3F3F3] p-3 cursor-pointer"
              onClick={(e) => { tap(node.id, e); }}>
              <img src={node.icon} alt={node.label} className="w-10 h-10 rounded-[8px] mb-1" />
              <p className="type-p5 text-[#7B7B7B] uppercase tracking-[0.08em] leading-none">{node.tier}</p>
              <p className="type-p4 text-[#222222] leading-snug">{node.label}</p>
              <p className="type-p5 text-[#7B7B7B] leading-snug">{node.descriptor}</p>
            </div>
          ))}
        </div>

        <MobileConnector fid="mc-a" />

        {/* Integrations block */}
        <div className="rounded-[12px] bg-[#F3F3F3] px-4 py-3 flex flex-col items-center">
          <p className="type-p5 text-[#7B7B7B] uppercase tracking-[0.08em] mb-3">
            {data.integrationsLabel ?? "INTEGRATIONS"}
          </p>
          <div className="flex gap-3">
            {data.integrations.map(intg => (
              <img key={intg.id} src={intg.icon} alt={intg.label} className="w-10 h-10 rounded-[8px] cursor-pointer"
                onClick={(e) => { tap(intg.id, e); }} />
            ))}
          </div>
        </div>

        <MobileConnector fid="mc-b" />

        {/* API Layer */}
        <div className="rounded-[12px] px-4 py-4 text-center bg-[#222222] cursor-pointer"
          onClick={(e) => { tap("api", e); }}>
          <p className="type-p4 text-white font-medium mb-2">API Layer</p>
          <div className="flex justify-center gap-4">
            {data.pills.map(pill => (
              <span key={pill.id} className="type-p5 text-white/75 cursor-pointer"
                onClick={(e) => { tap(pill.id, e); }}>{pill.label}</span>
            ))}
          </div>
        </div>

        <MobileFanConnector fid="mc-c" />

        {/* Output nodes — horizontal row */}
        <div className="flex gap-2">
          {data.outputs.map(node => (
            <div key={node.id} className="flex-1 min-w-0 flex flex-col gap-1 rounded-[12px] bg-[#F3F3F3] p-3 cursor-pointer"
              onClick={(e) => { tap(node.id, e); }}>
              <svg width="24" height="24" className="mb-1"><Glyph type={node.glyph} x={2} y={2} col={C.ink} /></svg>
              {node.tier && <p className="type-p5 text-[#7B7B7B] uppercase tracking-[0.08em] leading-none">{node.tier}</p>}
              <p className="type-p4 text-[#222222] leading-snug">{node.label}</p>
              <p className="type-p5 text-[#7B7B7B] leading-snug">{node.descriptor}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── SVG diagram (no icon images — those are HTML below) — hidden below md ── */}
      <div className="hidden md:block relative">
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        width="100%"
        style={{ display: "block", overflow: "visible", fontFamily: '"Inter Display","Inter",ui-sans-serif,system-ui,sans-serif' }}
        onClick={() => setActive(null)}
      >
        <defs>
          <filter id="dfa-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {data.inputs.map((_, i) => (
            <path key={`dpi${i}`} id={`dfa-pi${i}`} d={bpath(IX + NW, NCYS[i], ECX - ER, ECY)} />
          ))}
          {data.outputs.map((_, i) => (
            <path key={`dpo${i}`} id={`dfa-po${i}`} d={bpath(ECX + ER, ECY, OX, NCYS[i])} />
          ))}
          <path id="dfa-pintg"
            d={`M${ECX},${ECY + ER} L${ECX},${INTG_CARD_TOP}`} />
        </defs>

        {/* Connector lines — inputs → engine */}
        {data.inputs.map((_, i) => (
          <path key={`cli${i}`} d={bpath(IX + NW, NCYS[i], ECX - ER, ECY)}
            stroke={C.border} strokeWidth="1.5" fill="none" />
        ))}

        {/* Connector lines — engine → outputs */}
        {data.outputs.map((_, i) => (
          <path key={`clo${i}`} d={bpath(ECX + ER, ECY, OX, NCYS[i])}
            stroke={C.border} strokeWidth="1.5" fill="none" />
        ))}

        {/* Connector line — engine → integration block */}
        <path d={`M${ECX},${ECY + ER} L${ECX},${INTG_CARD_TOP}`}
          stroke={C.border} strokeWidth="1.5" fill="none" />


        {/* Particles — inputs → engine */}
        {data.inputs.map((_, i) => DELAYS.map((delay, j) => (
          <circle key={`pi${i}${j}`} r="4.5" fill={C.accent} filter="url(#dfa-glow)">
            <animateMotion dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite">
              <mpath href={`#dfa-pi${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
              dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        )))}

        {/* Particles — engine → outputs */}
        {data.outputs.map((_, i) => DELAYS.map((delay, j) => (
          <circle key={`po${i}${j}`} r="4.5" fill={C.accent} filter="url(#dfa-glow)">
            <animateMotion dur={`${DUR}s`} begin={`${delay + 0.35}s`} repeatCount="indefinite">
              <mpath href={`#dfa-po${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
              dur={`${DUR}s`} begin={`${delay + 0.35}s`} repeatCount="indefinite" />
          </circle>
        )))}

        {/* Particles — engine → integration block */}
        {DELAYS.map((delay, k) => (
          <circle key={`pintg${k}`} r="4.5" fill={C.accent} filter="url(#dfa-glow)">
            <animateMotion dur={`${DUR}s`} begin={`${delay + 0.7}s`} repeatCount="indefinite">
              <mpath href="#dfa-pintg" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
              dur={`${DUR}s`} begin={`${delay + 0.7}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Engine — outer pulse (inner ring) */}
        <circle cx={ECX} cy={ECY} r={ER} fill="none" stroke={C.accent} strokeWidth="1">
          <animate attributeName="r"       values={`${ER};${ER+26};${ER+26}`} dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.22;0;0"                  dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Engine — outer pulse (outer ring) */}
        <circle cx={ECX} cy={ECY} r={ER} fill="none" stroke={C.accent} strokeWidth="1">
          <animate attributeName="r"       values={`${ER};${ER+52};${ER+52}`} dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.14;0;0"                  dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Engine — rotating dashed ring */}
        <circle cx={ECX} cy={ECY} r={ER + 11}
          fill="none" stroke={C.accent} strokeWidth="1" strokeDasharray="7 5" opacity="0.32">
          <animateTransform attributeName="transform" type="rotate"
            from={`0 ${ECX} ${ECY}`} to={`360 ${ECX} ${ECY}`}
            dur="14s" repeatCount="indefinite" />
        </circle>

        {/* Engine — main circle */}
        <circle cx={ECX} cy={ECY} r={ER}
          fill={C.ink}
          stroke={active === "api" ? C.accent : "rgba(255,255,255,0.15)"}
          strokeWidth={active === "api" ? "1.5" : "1"}
          style={{ cursor: "pointer" }}
          onPointerEnter={(e) => enter("api", e)} onPointerLeave={(e) => leave(e)}
          onTouchStart={(e) => touchStart("api", e)}        />

        {/* Circle header */}
        <text x={ECX} y={pillStartY - 30} textAnchor="middle" dominantBaseline="middle"
          fill={C.white} fontSize="14" fontWeight="500"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          API Layer
        </text>

        {/* API glyph — below last pill */}
        <Glyph type="api-arrows" x={ECX - 10} y={pillStartY + (pillCount - 1) * pillSpread + 20} col={C.white} />

        {/* Protocol labels — text only */}
        {data.pills.map((pill, i) => {
          const cy  = pillStartY + i * pillSpread;
          const act = active === pill.id;
          return (
            <g key={pill.id} style={{ cursor: "pointer" }}
              onPointerEnter={(e) => enter(pill.id, e)} onPointerLeave={(e) => leave(e)}
              onTouchStart={(e) => touchStart(pill.id, e)}>
              <text x={ECX} y={cy} textAnchor="middle" dominantBaseline="middle"
                fill={act ? C.accent : C.white} fontSize="11"
                style={{ userSelect: "none" }}>
                {pill.label}
              </text>
            </g>
          );
        })}


        {/* Input nodes */}
        {data.inputs.map((node, i) => {
          const nx = IX, ny = NYS[i], act = active === node.id;
          const tx = nx + 12;
          return (
            <g key={node.id} style={{ cursor: "pointer" }}
              onPointerEnter={(e) => enter(node.id, e)} onPointerLeave={(e) => leave(e)}
              onTouchStart={(e) => touchStart(node.id, e)}>
              <rect x={nx} y={ny} width={NW} height={NH} rx={NRX}
                fill={act ? C.ink : C.bg} stroke="none"
                style={{ transition: "fill 160ms ease" }} />
              {/* Eyebrow (tier label inside card) */}
              <text x={tx} y={ny + 20}
                textAnchor="start" dominantBaseline="middle"
                fill={act ? "rgba(255,255,255,0.6)" : C.muted}
                fontSize="8" letterSpacing="1.2"
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {node.tier}
              </text>
              {/* Name */}
              <text x={tx} y={ny + 42}
                textAnchor="start" dominantBaseline="middle"
                fill={act ? C.white : C.ink} fontSize="11"
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {node.label}
              </text>
              {/* Descriptor */}
              <text x={tx} y={ny + 62}
                textAnchor="start" dominantBaseline="middle"
                fill={act ? "rgba(255,255,255,0.65)" : C.muted} fontSize="10"
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {node.descriptor}
              </text>
            </g>
          );
        })}

        {/* Output nodes */}
        {data.outputs.map((node, i) => {
          const nx = OX, ny = NYS[i], act = active === node.id;
          const tx = nx + 12;
          const gx = nx + NW - 32, gy = ny + (NH - 21) / 2;
          return (
            <g key={node.id} style={{ cursor: "pointer" }}
              onPointerEnter={(e) => enter(node.id, e)} onPointerLeave={(e) => leave(e)}
              onTouchStart={(e) => touchStart(node.id, e)}>
              <rect x={nx} y={ny} width={NW} height={NH} rx={NRX}
                fill={act ? C.ink : C.bg} stroke="none"
                style={{ transition: "fill 160ms ease" }} />
              {/* Glyph — right side */}
              <Glyph type={node.glyph} x={gx} y={gy} col={act ? C.white : C.ink} />
              {/* Eyebrow (tier label inside card) */}
              {node.tier && (
                <text x={tx} y={ny + 20}
                  textAnchor="start" dominantBaseline="middle"
                  fill={act ? "rgba(255,255,255,0.6)" : C.muted}
                  fontSize="8" letterSpacing="1.2"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {node.tier}
                </text>
              )}
              {/* Name */}
              <text x={tx} y={ny + 42}
                textAnchor="start" dominantBaseline="middle"
                fill={act ? C.white : C.ink} fontSize="11"
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {node.label}
              </text>
              {/* Descriptor */}
              <text x={tx} y={ny + 62}
                textAnchor="start" dominantBaseline="middle"
                fill={act ? "rgba(255,255,255,0.65)" : C.muted} fontSize="10"
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {node.descriptor}
              </text>
            </g>
          );
        })}

        {/* Integration block — Back-Office Systems */}
        <rect x={INTG_CARD_X} y={INTG_CARD_TOP} width={INTG_CARD_W} height={INTG_CARD_H} rx={NRX}
          fill={C.bg} stroke="none" />
        <text x={ECX} y={INTG_CARD_TOP + 18} textAnchor="middle" dominantBaseline="middle"
          fill={C.muted} fontSize="8" letterSpacing="1.2"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {data.integrationsLabel ?? "INTEGRATIONS"}
        </text>

      </svg>

      {/* ── Real HTML <img> icons — identical to Tools Used (51px / rounded-[10px]) ── */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>

        {/* Input node icons — right-aligned */}
        {data.inputs.map((node, i) => {
          const iconSize = Math.min(ICON_CSS, Math.round(ICON_CSS * scale));
          return (
          <img
            key={node.id}
            src={node.icon}
            alt={node.label}
            style={{
              position: "absolute",
              left:   (IX + NW - ICON_PAD) * scale - iconSize,
              top:    NYS[i] * scale + (NH * scale - iconSize) / 2,
              width:  iconSize,
              height: iconSize,
              borderRadius: Math.round(10 * scale),
            }}
          />
          );
        })}

        {/* Integration icons — below circle, aligned to SVG path endpoints */}
        {data.integrations.map((intg, j) => {
          const iconSize = Math.min(ICON_CSS, Math.round(ICON_CSS * scale));
          return (
          <img
            key={intg.id}
            src={intg.icon}
            alt={intg.label}
            style={{
              position: "absolute",
              left:   intgXsSvg[j] * scale - iconSize / 2,
              top:    INTG_Y_SVG * scale - iconSize / 2,
              width:  iconSize,
              height: iconSize,
              borderRadius: Math.round(10 * scale),
              cursor: "pointer",
              pointerEvents: "auto",
            }}
            onPointerEnter={(e) => enter(intg.id, e)}
            onPointerLeave={(e) => leave(e)}
            onTouchStart={(e) => touchStart(intg.id, e)}
                     />
          );
        })}
      </div>

      </div>{/* end desktop wrapper */}

    </div>
  );
}
