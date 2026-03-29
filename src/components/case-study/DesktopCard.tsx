"use client"
import type { DiagramCard } from "./muradDiagramData"

interface DesktopCardProps {
  data: DiagramCard
  cardKey: string
  toggle: (key: string) => void
  style: React.CSSProperties
  variant?: "outline" | "border"
  eyebrowPos?: "above" | "below"
}

export default function DesktopCard({ data, cardKey, toggle, style, variant = "outline", eyebrowPos = "above" }: DesktopCardProps) {
  const isBorder = variant === "border"
  const outerClass = isBorder
    ? "w-64 h-40 absolute cursor-pointer group"
    : "w-64 h-40 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#7b7b7b] cursor-pointer hover:outline-blue-500 transition-colors"
  const intTop = isBorder ? "top-[79px]" : "top-[86px]"
  const blockTop = isBorder ? "top-[25px]" : "top-[13px]"
  const logoScale = isBorder ? "" : "scale-[1.1667] origin-center"
  const eyebrowClass = eyebrowPos === "below"
    ? "absolute left-1/2 top-full mt-2 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500 whitespace-nowrap"
    : "absolute left-1/2 -top-6 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500 whitespace-nowrap"

  return (
    <div className={outerClass} style={style} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(cardKey)}}>
      {data.eyebrow && <div className={eyebrowClass}>{data.eyebrow}</div>}
      {isBorder && <div className="w-64 h-40 left-0 top-0 absolute bg-white rounded-[10px] border border-[#7b7b7b] group-hover:border-blue-500 transition-colors" />}
      <div data-layer="Modal Integrations" className={`w-64 h-20 left-0 ${intTop} absolute`}>
        <div className={`w-20 h-14 left-[175px] ${blockTop} absolute rounded-[10px] cursor-pointer transition-colors hover:text-blue-500`} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[2].key)}}>
          <div className="w-20 h-3.5 left-0 top-[33px] absolute text-center justify-start text-ink text-xs font-semibold font-display leading-4">{data.integrations[2].label}</div>
          <div className="left-[27px] top-[2px] absolute flex h-[26px] w-[26px] items-center justify-center">{data.integrations[2].icon}</div>
        </div>
        <div className={`w-20 h-14 left-[92px] ${blockTop} absolute rounded-[10px] cursor-pointer transition-colors hover:text-blue-500`} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[1].key)}}>
          <div className="w-20 h-3.5 left-0 top-[33px] absolute text-center justify-start text-ink text-xs font-semibold font-display leading-4">{data.integrations[1].label}</div>
          <div className="left-[27px] top-[2px] absolute flex h-[26px] w-[26px] items-center justify-center">{data.integrations[1].icon}</div>
        </div>
        <div className={`w-20 h-14 left-[9px] ${blockTop} absolute rounded-[10px] cursor-pointer transition-colors hover:text-blue-500`} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[0].key)}}>
          <div className="w-20 h-3.5 left-0 top-[33px] absolute text-center justify-start text-ink text-xs font-semibold font-display leading-4">{data.integrations[0].label}</div>
          <div className="left-[27px] top-[2px] absolute flex h-[26px] w-[26px] items-center justify-center">{data.integrations[0].icon}</div>
        </div>
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
