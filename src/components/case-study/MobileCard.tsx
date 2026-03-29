"use client"
import type { DiagramCard } from "./muradDiagramTypes"

interface MobileCardProps {
  data: DiagramCard
  top: number
  cardKey: string
  toggle: (key: string) => void
}

export default function MobileCard({ data, top, cardKey, toggle }: MobileCardProps) {
  return (
    <div className="w-80 h-32 absolute cursor-pointer group" style={{left:10,top}} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(cardKey)}}>
      {data.eyebrow && (
        <div className="absolute left-1/2 -top-6 -translate-x-1/2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500 whitespace-nowrap">{data.eyebrow}</div>
      )}
      <div className="w-80 h-32 left-0 top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 group-hover:outline-blue-500 transition-colors" />
      {data.logoMobile}
      <div style={{position:"absolute",left:57,top:16,width:256,height:40}}>
        <div style={{position:"absolute",left:12,top:2}} className="text-neutral-800 text-lg font-semibold leading-none">{data.title}</div>
        <div style={{position:"absolute",left:12,top:21}} className="text-neutral-800 text-sm leading-none">{data.subtitle}</div>
      </div>
      <div className="w-80 h-16 left-0 top-[62px] absolute">
        <div className="w-20 h-14 left-[217px] top-[4px] absolute cursor-pointer hover:text-blue-500" onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[2].key)}}>
          <div className="left-[24px] top-[11px] absolute">{data.integrations[2].icon}</div>
          <div className="w-20 h-3.5 left-0 top-[34px] absolute text-center text-slate-900 text-[10px] font-semibold">{data.integrations[2].label}</div>
        </div>
        <div className="w-20 h-14 left-[133px] top-[4px] absolute cursor-pointer hover:text-blue-500" onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[1].key)}}>
          <div className="left-[24px] top-[11px] absolute">{data.integrations[1].icon}</div>
          <div className="w-20 h-3.5 left-0 top-[34px] absolute text-center text-slate-900 text-[10px] font-semibold">{data.integrations[1].label}</div>
        </div>
        <div className="w-16 h-14 left-[50px] top-[4px] absolute cursor-pointer hover:text-blue-500" onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle(data.integrations[0].key)}}>
          <div className="left-[24px] top-[11px] absolute">{data.integrations[0].icon}</div>
          <div className="w-16 h-3.5 left-0 top-[34px] absolute text-center text-slate-900 text-[10px] font-semibold">{data.integrations[0].label}</div>
        </div>
      </div>
    </div>
  )
}
