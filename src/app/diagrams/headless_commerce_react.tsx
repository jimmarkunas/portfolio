"use client";

import { useRef, useEffect, useState } from "react";
import type { DiagramData } from "@/components/case-study/types";
import Modal from "@/components/case-study/Modal";
import { useModal } from "@/components/case-study/useModal";
import { DiagramIcon } from "@/components/case-study/DiagramIcon";
import { DiagramGlyph } from "@/components/case-study/DiagramGlyph";
import { MobileConnector, MobileFanConnector } from "@/components/case-study/DiagramConnectors";
import { C, DUR, DELAYS, bpath } from "@/components/case-study/diagramUtils";

// ── Layout constants ────────────────────────────────────────────────────────
const VW = 920, VH = 370;
const NW = 190, NH = 80, NRX = 12;
const IX = 8, OX = VW - IX - NW;
const ECX = VW / 2, ECY = 136;
const ER = 82;

const ROW_GAP = 116;
const NODE_CY = 200;
const NYS  = [NODE_CY - NH / 2 - ROW_GAP, NODE_CY - NH / 2, NODE_CY - NH / 2 + ROW_GAP];
const NCYS = NYS.map(y => y + NH / 2);

const INTG_CARD_W   = 230;
const INTG_CARD_H   = 90;
const INTG_CARD_TOP = ECY + ER + 40;
const INTG_CARD_X   = ECX - INTG_CARD_W / 2;
const INTG_STEP_SVG = 65;
const INTG_Y_SVG    = INTG_CARD_TOP + 58;

const ICON_CSS = 51;
const ICON_PAD = 10;

// Particles along a single named path
function ParticleStream({ pathHref, delay = 0 }: { pathHref: string; delay?: number }) {
  return (
    <>
      {DELAYS.map((d, i) => (
        <circle key={i} r="4.5" fill={C.accent} filter="url(#dfa-glow)">
          <animateMotion dur={`${DUR}s`} begin={`${d + delay}s`} repeatCount="indefinite">
            <mpath href={pathHref} />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
            dur={`${DUR}s`} begin={`${d + delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </>
  );
}

// ── Component ───────────────────────────────────────────────────────────────
export default function DataFlowDiagram({ data }: { data: DiagramData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]           = useState(1);
  const { activeKey, toggle, close } = useModal();
  const [hoveredId, setHoveredId]         = useState<string | null>(null);
  const [hoveredIconId, setHoveredIconId] = useState<string | null>(null);
  const lit = (id: string) => activeKey === id || hoveredId === id || hoveredIconId === id;
  const pillHovered = hoveredId !== null && data.pills.some(p => p.id === hoveredId);
  const apiLit = lit("api") || pillHovered || (activeKey !== null && data.pills.some(p => p.id === activeKey));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => setScale(entries[0].contentRect.width / VW));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tip      = activeKey ? (data.tooltips[activeKey] ?? null) : null;
  const iconSize = Math.min(ICON_CSS, Math.round(ICON_CSS * scale));

  const pillCount  = data.pills.length;
  const pillSpread = 15;
  const pillStartY = ECY - ((pillCount - 1) * pillSpread) / 2;

  const intgXsSvg = data.integrations.map((_, j) =>
    ECX + (j - (data.integrations.length - 1) / 2) * INTG_STEP_SVG
  );

  function tap(id: string, e: React.MouseEvent | React.TouchEvent) {
    e.stopPropagation();
    toggle(id);
  }

  // Shared SVG node card (inputs and outputs)
  function NodeCard(node: { id: string; tier?: string; label: string; descriptor: string },
                    nx: number, ny: number, act: boolean, glyphType?: string) {
    const tx = nx + 12;
    return (
      <g key={node.id} style={{ cursor: "pointer" }}
        onClick={(e) => tap(node.id, e)}
        onPointerEnter={() => setHoveredId(node.id)}
        onPointerLeave={() => setHoveredId(null)}>
        <rect x={nx} y={ny} width={NW} height={NH} rx={NRX}
          fill={act ? C.ink : C.bg} stroke="none"
          style={{ transition: "fill 160ms ease" }} />
        {glyphType && (
          <g style={{ pointerEvents: "none" }}>
            <DiagramGlyph type={glyphType} x={nx + NW - 32} y={ny + (NH - 21) / 2}
              col={act ? C.white : C.ink} />
          </g>
        )}
        {node.tier && (
          <text x={tx} y={ny + 20} textAnchor="start" dominantBaseline="middle"
            fill={act ? "rgba(255,255,255,0.6)" : C.muted}
            fontSize="8" letterSpacing="1.2"
            style={{ pointerEvents: "none", userSelect: "none" }}>
            {node.tier}
          </text>
        )}
        <text x={tx} y={ny + 42} textAnchor="start" dominantBaseline="middle"
          fill={act ? C.white : C.ink} fontSize="11"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {node.label}
        </text>
        <text x={tx} y={ny + 62} textAnchor="start" dominantBaseline="middle"
          fill={act ? "rgba(255,255,255,0.65)" : C.muted} fontSize="10"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {node.descriptor}
        </text>
      </g>
    );
  }

  // Shared HTML icon overlay tile
  function IconTile(node: { id: string; icon: string; label: string },
                    left: number, top: number, showHover = false) {
    return (
      <div key={node.id} style={{
        position: "absolute", left, top,
        width: iconSize, height: iconSize,
        borderRadius: Math.round(3 * scale),
        overflow: "hidden", pointerEvents: "auto", cursor: "pointer",
      }}
        onPointerEnter={(e) => { e.stopPropagation(); setHoveredIconId(node.id); }}
        onPointerLeave={() => setHoveredIconId(null)}
        onClick={(e) => tap(node.id, e)}
      >
        <DiagramIcon src={node.icon} hovered={showHover && hoveredIconId === node.id} size={iconSize} />
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>

      <Modal tip={tip} onClose={close} />

      {/* ── Mobile layout (hidden md+) ── */}
      <div className="md:hidden flex flex-col" onClick={close}>

        <div className="flex gap-2">
          {data.inputs.map(node => (
            <div key={node.id} className="group flex-1 min-w-0 flex flex-col gap-1 rounded-[12px] bg-[#F3F3F3] hover:bg-[#222222] p-3 cursor-pointer transition-colors duration-150"
              onClick={(e) => tap(node.id, e)}>
              <div className="w-10 h-10 rounded-[3px] mb-1 shrink-0">
                <img src={node.icon} alt={node.label} className="w-10 h-10 rounded-[3px]" />
              </div>
              <p className="type-p5 text-[#7B7B7B] group-hover:text-white/60 uppercase tracking-[0.08em] leading-none">{node.tier}</p>
              <p className="type-p4 text-[#222222] group-hover:text-white leading-snug">{node.label}</p>
              <p className="type-p5 text-[#7B7B7B] group-hover:text-white/60 leading-snug">{node.descriptor}</p>
            </div>
          ))}
        </div>

        <MobileConnector fid="mc-a" />

        <div className="rounded-[12px] bg-[#F3F3F3] px-4 py-3 flex flex-col items-center">
          <p className="type-p5 text-[#7B7B7B] uppercase tracking-[0.08em] mb-3">
            {data.integrationsLabel ?? "INTEGRATIONS"}
          </p>
          <div className="flex gap-3">
            {data.integrations.map(intg => (
              <div key={intg.id} className="group/icon w-10 h-10 rounded-[3px] hover:bg-[#447ACB] transition-colors duration-150 cursor-pointer shrink-0"
                onClick={(e) => tap(intg.id, e)}>
                <img src={intg.icon} alt={intg.label} className="w-10 h-10 rounded-[3px] group-hover/icon:[filter:brightness(0)_invert(1)] transition-[filter] duration-150" />
              </div>
            ))}
          </div>
        </div>

        <MobileConnector fid="mc-b" />

        <div className="rounded-[12px] px-4 py-4 text-center bg-[#222222] cursor-pointer"
          onClick={(e) => tap("api", e)}>
          <p className="type-p4 text-white font-medium mb-2">API Layer</p>
          <div className="flex justify-center gap-4">
            {data.pills.map(pill => (
              <span key={pill.id} className="type-p5 text-white/75 cursor-pointer"
                onClick={(e) => tap(pill.id, e)}>{pill.label}</span>
            ))}
          </div>
        </div>

        <MobileFanConnector fid="mc-c" />

        <div className="flex gap-2">
          {data.outputs.map(node => (
            <div key={node.id} className="group flex-1 min-w-0 flex flex-col gap-1 rounded-[12px] bg-[#F3F3F3] hover:bg-[#222222] p-3 cursor-pointer transition-colors duration-150"
              onClick={(e) => tap(node.id, e)}>
              <div className="group/icon w-10 h-10 rounded-[3px] mb-1 flex items-center justify-center hover:bg-[#447ACB] transition-colors duration-150 shrink-0">
                <svg width="24" height="24" className="[&_path]:transition-[stroke] [&_path]:duration-150 [&_ellipse]:transition-[stroke] [&_ellipse]:duration-150 [&_rect]:transition-[stroke] [&_rect]:duration-150 group-hover/icon:[&_path]:stroke-white group-hover/icon:[&_ellipse]:stroke-white group-hover/icon:[&_rect]:stroke-white">
                  <DiagramGlyph type={node.glyph} x={2} y={2} col={C.ink} />
                </svg>
              </div>
              {node.tier && <p className="type-p5 text-[#7B7B7B] group-hover:text-white/60 uppercase tracking-[0.08em] leading-none">{node.tier}</p>}
              <p className="type-p4 text-[#222222] group-hover:text-white leading-snug">{node.label}</p>
              <p className="type-p5 text-[#7B7B7B] group-hover:text-white/60 leading-snug">{node.descriptor}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Desktop SVG (hidden below md) ── */}
      <div className="hidden md:block relative">
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        width="100%"
        style={{ display: "block", overflow: "visible", fontFamily: '"Inter Display","Inter",ui-sans-serif,system-ui,sans-serif' }}
        onClick={close}
      >
        <defs>
          <filter id="dfa-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {data.inputs.map((_, i) => (
            <path key={`dpi${i}`} id={`dfa-pi${i}`} d={bpath(IX + NW, NCYS[i], ECX - ER, ECY)} />
          ))}
          {data.outputs.map((_, i) => (
            <path key={`dpo${i}`} id={`dfa-po${i}`} d={bpath(ECX + ER, ECY, OX, NCYS[i])} />
          ))}
          <path id="dfa-pintg" d={`M${ECX},${ECY + ER} L${ECX},${INTG_CARD_TOP}`} />
        </defs>

        {/* Connector lines */}
        {data.inputs.map((_, i) => (
          <path key={`cli${i}`} d={bpath(IX + NW, NCYS[i], ECX - ER, ECY)}
            stroke={C.border} strokeWidth="1.5" fill="none" />
        ))}
        {data.outputs.map((_, i) => (
          <path key={`clo${i}`} d={bpath(ECX + ER, ECY, OX, NCYS[i])}
            stroke={C.border} strokeWidth="1.5" fill="none" />
        ))}
        <path d={`M${ECX},${ECY + ER} L${ECX},${INTG_CARD_TOP}`}
          stroke={C.border} strokeWidth="1.5" fill="none" />

        {/* Particles */}
        {data.inputs.map((_, i)  => <ParticleStream key={`pi${i}`}   pathHref={`#dfa-pi${i}`} />)}
        {data.outputs.map((_, i) => <ParticleStream key={`po${i}`}   pathHref={`#dfa-po${i}`} delay={0.35} />)}
        <ParticleStream pathHref="#dfa-pintg" delay={0.7} />

        {/* Engine rings */}
        <circle cx={ECX} cy={ECY} r={ER} fill="none" stroke={C.accent} strokeWidth="1">
          <animate attributeName="r"       values={`${ER};${ER+26};${ER+26}`} dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.22;0;0"                  dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx={ECX} cy={ECY} r={ER} fill="none" stroke={C.accent} strokeWidth="1">
          <animate attributeName="r"       values={`${ER};${ER+52};${ER+52}`} dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.14;0;0"                  dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx={ECX} cy={ECY} r={ER + 11}
          fill="none" stroke={C.accent} strokeWidth="1" strokeDasharray="7 5" opacity="0.32">
          <animateTransform attributeName="transform" type="rotate"
            from={`0 ${ECX} ${ECY}`} to={`360 ${ECX} ${ECY}`}
            dur="14s" repeatCount="indefinite" />
        </circle>

        {/* Engine circle */}
        <circle cx={ECX} cy={ECY} r={ER}
          fill={apiLit ? C.accent : C.ink}
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"
          style={{ cursor: "pointer", transition: "fill 160ms ease" }}
          onClick={(e) => tap("api", e)}
          onPointerEnter={() => setHoveredId("api")}
          onPointerLeave={() => setHoveredId(null)} />

        <text x={ECX} y={pillStartY - 30} textAnchor="middle" dominantBaseline="middle"
          fill={C.white} fontSize="14" fontWeight="500"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          API Layer
        </text>
        <DiagramGlyph type="api-arrows" x={ECX - 10} y={pillStartY + (pillCount - 1) * pillSpread + 20} col={C.white} />

        {/* Protocol pills */}
        {data.pills.map((pill, i) => {
          const act = lit(pill.id);
          return (
            <g key={pill.id} style={{ cursor: "pointer" }}
              onClick={(e) => tap(pill.id, e)}
              onPointerEnter={() => setHoveredId(pill.id)}
              onPointerLeave={() => setHoveredId(null)}>
              <text x={ECX} y={pillStartY + i * pillSpread} textAnchor="middle" dominantBaseline="middle"
                fill={act ? C.ink : C.white} fontSize="11"
                style={{ userSelect: "none" }}>
                {pill.label}
              </text>
            </g>
          );
        })}

        {/* Input / output node cards */}
        {data.inputs.map((node, i)  => NodeCard(node, IX, NYS[i], lit(node.id)))}
        {data.outputs.map((node, i) => NodeCard(node, OX, NYS[i], lit(node.id), node.glyph))}

        {/* Integration card */}
        <rect x={INTG_CARD_X} y={INTG_CARD_TOP} width={INTG_CARD_W} height={INTG_CARD_H} rx={NRX}
          fill={C.bg} stroke="none" />
        <text x={ECX} y={INTG_CARD_TOP + 18} textAnchor="middle" dominantBaseline="middle"
          fill={C.muted} fontSize="8" letterSpacing="1.2"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {data.integrationsLabel ?? "INTEGRATIONS"}
        </text>

      </svg>

      {/* HTML icon overlays */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        {data.inputs.map((node, i) =>
          IconTile(node,
            (IX + NW - ICON_PAD) * scale - iconSize,
            NYS[i] * scale + (NH * scale - iconSize) / 2
          )
        )}
        {data.integrations.map((intg, j) =>
          IconTile(intg,
            intgXsSvg[j] * scale - iconSize / 2,
            INTG_Y_SVG * scale - iconSize / 2,
            true
          )
        )}
      </div>

      </div>
    </div>
  );
}
