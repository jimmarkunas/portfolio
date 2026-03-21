"use client"

import { useState } from "react"

const data = [
  { year: 2012, revenue: 30.0 },
  { year: 2013, revenue: 31.5 },
  { year: 2014, revenue: 33.3 },
  { year: 2015, revenue: 32.0 },
  { year: 2016, revenue: 31.5 },
  { year: 2017, revenue: 30.0 },
  { year: 2018, revenue: 27.5 },
  { year: 2019, revenue: 25.5 },
  { year: 2020, revenue: 25.0 },
  { year: 2021, revenue: 20.0 },
  { year: 2022, revenue: 19.0 },
  { year: 2023, revenue: 16.5 },
  { year: 2024, revenue: 14.5 },
]

const SPLIT_YEAR = 2016
const PRE_COLOR = "#222222"
const ATT_COLOR = "#3E7BE0"
const LINE_COLOR = "#e8402a"
const HOVER_COLOR = "#D1D5DB"

const PADDING = { top: 60, right: 40, bottom: 70, left: 72 }
const WIDTH = 900
const HEIGHT = 420
const CHART_W = WIDTH - PADDING.left - PADDING.right
const CHART_H = HEIGHT - PADDING.top - PADDING.bottom
const Y_MAX = 40
const BAR_GAP = 0.25

function barX(index: number, total: number) {
  const slotW = CHART_W / total
  return index * slotW + slotW * (BAR_GAP / 2)
}

function barW(total: number) {
  return (CHART_W / total) * (1 - BAR_GAP)
}

function yPos(value: number) {
  return CHART_H - (value / Y_MAX) * CHART_H
}

const total = data.length
const linePts = data
  .map((d, i) => {
    const bx = barX(i, total) + barW(total) / 2
    return `${bx},${yPos(d.revenue)}`
  })
  .join(" ")

export function DirecTVRevenueChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const yTicks = [0, 10, 20, 30, 40]
  const bw = barW(total)

  return (
    <div className="w-full overflow-hidden rounded-[20px] border border-black/8 shadow-[0_16px_40px_rgba(34,34,34,0.04)] p-6">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="DIRECTV Revenue Journey 2012–2024"
      >
        <g transform={`translate(${PADDING.left},${PADDING.top})`}>

          {/* Y gridlines + labels */}
          {yTicks.map((v) => (
            <g key={v}>
              <line x1={0} x2={CHART_W} y1={yPos(v)} y2={yPos(v)} stroke="rgba(34,34,34,0.15)" strokeWidth={1} />
              <text x={-10} y={yPos(v) + 4} textAnchor="end" fill="#222222" fontSize={12} fontFamily="sans-serif">
                ${v}B
              </text>
            </g>
          ))}

          {/* Bars */}
          {data.map((d, i) => {
            const x = barX(i, total)
            const y = yPos(d.revenue)
            const h = CHART_H - y
            const r = Math.min(4, bw / 2)
            const isHovered = hoveredIndex === i
            const fill = isHovered ? HOVER_COLOR : d.year <= SPLIT_YEAR ? PRE_COLOR : ATT_COLOR
            const path = `M${x},${y + r} Q${x},${y} ${x + r},${y} L${x + bw - r},${y} Q${x + bw},${y} ${x + bw},${y + r} L${x + bw},${y + h} L${x},${y + h} Z`
            return (
              <path
                key={d.year}
                d={path}
                fill={fill}
                style={{ cursor: "default", transition: "fill 0.15s" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            )
          })}

          {/* Line */}
          <polyline points={linePts} fill="none" stroke={LINE_COLOR} strokeWidth={1.5} strokeLinejoin="round" />

          {/* Dots on line */}
          {data.map((d, i) => {
            const cx = barX(i, total) + bw / 2
            const cy = yPos(d.revenue)
            return (
              <g key={d.year}>
                <circle cx={cx} cy={cy} r={8} fill="white" stroke="rgba(34,34,34,0.08)" strokeWidth={1} />
                <circle cx={cx} cy={cy} r={5} fill="white" stroke={LINE_COLOR} strokeWidth={3} />
              </g>
            )
          })}

          {/* Tooltip */}
          {hoveredIndex !== null && (() => {
            const d = data[hoveredIndex]
            const cx = barX(hoveredIndex, total) + bw / 2
            const cy = yPos(d.revenue)
            const label = `${d.year}: $${d.revenue}B`
            const tw = label.length * 7 + 16
            const tx = Math.min(Math.max(cx - tw / 2, 0), CHART_W - tw)
            const ty = cy - 36
            return (
              <g pointerEvents="none">
                <rect x={tx} y={ty} width={tw} height={24} rx={6} fill="#222222" />
                <text x={tx + tw / 2} y={ty + 15} textAnchor="middle" fill="white" fontSize={12} fontFamily="sans-serif" fontWeight="500">
                  {label}
                </text>
              </g>
            )
          })()}

          {/* Invisible hit areas over full column height for easier hover */}
          {data.map((d, i) => (
            <rect
              key={`hit-${d.year}`}
              x={barX(i, total)}
              y={0}
              width={bw}
              height={CHART_H}
              fill="transparent"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}

          {/* X axis ticks + labels */}
          {data.map((d, i) => (
            <g key={d.year}>
              <line
                x1={barX(i, total) + bw / 2}
                x2={barX(i, total) + bw / 2}
                y1={CHART_H}
                y2={CHART_H + 6}
                stroke="rgba(34,34,34,0.15)"
                strokeWidth={1}
              />
              <text
                x={barX(i, total) + bw / 2}
                y={CHART_H + 20}
                textAnchor="middle"
                fill="#222222"
                fontSize={12}
                fontFamily="sans-serif"
              >
                {d.year}
              </text>
            </g>
          ))}

        </g>
      </svg>
      <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2 pl-[8%]">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-sm" style={{ background: PRE_COLOR }} />
          <span className="text-sm text-[#222222]">Pre-Acquisition</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-sm" style={{ background: ATT_COLOR }} />
          <span className="text-sm text-[#222222]">AT&T Acquisition</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="34" height="14" viewBox="0 0 34 14">
            <line x1={0} y1={7} x2={34} y2={7} stroke={LINE_COLOR} strokeWidth={1.5} />
            <circle cx={17} cy={7} r={6} fill="white" stroke="rgba(34,34,34,0.08)" strokeWidth={1} />
            <circle cx={17} cy={7} r={4} fill="white" stroke={LINE_COLOR} strokeWidth={2.5} />
          </svg>
          <span className="text-sm text-[#222222]">Revenue (USD Billions)</span>
        </div>
      </div>
      <p className="mt-2 pl-[8%] text-sm text-black/40">AT&amp;T chart showing DIRECTV&apos;s revenue from 2012 – 2024</p>
    </div>
  )
}
