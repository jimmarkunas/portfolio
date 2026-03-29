"use client"
import type { DiagramCard } from "./muradDiagramData"

interface DesktopCardProps {
  data: DiagramCard
  cardKey: string
  toggle: (key: string) => void
  style: React.CSSProperties
  variant?: "outline" | "border"
  eyebrowPos?: "above" | "below"
  iconOverlay?: boolean
}

export default function DesktopCard({ data, cardKey, toggle, style, variant = "outline", eyebrowPos = "above", iconOverlay = false }: DesktopCardProps) {
  const isBorder = variant === "border"
  const outerClass = isBorder
    ? "w-64 h-40 absolute cursor-pointer group"
    : "w-64 h-40 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#7b7b7b] cursor-pointer hover:outline-2 hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-[outline,box-shadow] duration-150"
  const intTop = isBorder ? "top-[79px]" : "top-[86px]"
  const blockTop = isBorder ? "top-[25px]" : "top-[13px]"
  const logoScale = isBorder ? "" : "scale-[1.1667] origin-center"
  const eyebrowClass = eyebrowPos === "below"
    ? "absolute left-1/2 top-full mt-2 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500 whitespace-nowrap"
    : "absolute left-1/2 -top-6 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500 whitespace-nowrap"

  function IntgTile({ idx, left }: { idx: 0 | 1 | 2; left: string }) {
    const intg = data.integrations[idx]
    return (
      <div className={`group/intg w-20 h-14 ${left} ${blockTop} absolute rounded-[10px] cursor-pointer transition-colors hover:text-blue-500`} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(intg.key)}}>
        <div className="w-20 h-3.5 left-0 top-[33px] absolute text-center justify-start text-ink text-xs font-semibold font-display leading-4">{intg.label}</div>
        <div className="left-[27px] top-[2px] absolute flex h-[26px] w-[26px] items-center justify-center rounded-[4px] overflow-hidden">
          {intg.icon}
          {iconOverlay && (
            <div className="absolute inset-0 rounded-[4px] bg-[#447acb] opacity-0 group-hover/intg:opacity-70 transition-opacity duration-150 pointer-events-none" />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={outerClass} style={style} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(cardKey)}}>
      {data.eyebrow && <div className={eyebrowClass}>{data.eyebrow}</div>}
      {isBorder && <div className="w-64 h-40 left-0 top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#7b7b7b] group-hover:outline-2 group-hover:outline-blue-500 group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-[outline,box-shadow] duration-150" />}
      <div data-layer="Modal Integrations" className={`w-64 h-20 left-0 ${intTop} absolute`}>
        <IntgTile idx={2} left="left-[175px]" />
        <IntgTile idx={1} left="left-[92px]" />
        <IntgTile idx={0} left="left-[9px]" />
      </div>
      <div className="w-64 h-8 left-0 top-[51px] absolute">
        <div className="w-64 h-3.5 left-0 top-[20px] absolute text-center justify-start text-ink text-sm font-normal font-display leading-4">{data.subtitle}</div>
        <div className="w-64 h-4 left-0 top-0 absolute text-center justify-start text-ink text-base font-semibold font-display leading-4">{data.title}</div>
      </div>
      <div className={`w-64 h-9 left-0 top-[4px] absolute ${logoScale}`}>
        {data.logoDesktop}
      </div>
    </div>
  )
}
