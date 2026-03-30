"use client"

import { useEffect, useRef, useState } from "react"

type TimelineItem = {
  phase: string
  title: string
  copy: string
  ringClass: string
  labelClass: string
}

type TimelineProps = {
  items: TimelineItem[]
  className?: string
}

function extractColor(cls: string) {
  const match = cls.match(/#[0-9a-fA-F]{3,6}/)
  return match ? match[0] : undefined
}

export function Timeline({ items, className = "" }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const updateActiveIndex = () => {
      const triggerY = window.innerHeight * 0.45
      let nextIndex = 0

      itemRefs.current.forEach((element, index) => {
        if (!element) return

        const { top } = element.getBoundingClientRect()
        if (top <= triggerY) {
          nextIndex = index
        }
      })

      setActiveIndex(nextIndex)
    }

    updateActiveIndex()
    window.addEventListener("scroll", updateActiveIndex, { passive: true })
    window.addEventListener("resize", updateActiveIndex)

    return () => {
      window.removeEventListener("scroll", updateActiveIndex)
      window.removeEventListener("resize", updateActiveIndex)
    }
  }, [])

  return (
    <div className={className}>
      <div className="hidden lg:block">
        <div className="relative mx-auto w-full max-w-[1280px] px-5">
          <div className="absolute left-[72px] right-[72px] top-7 h-px bg-[#222222]" />
          <div className={`grid gap-8`} style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
            {items.map((item) => (
              <article key={item.phase} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-black/8 bg-[#222222]">
                  <div className="h-10 w-10 rounded-full border-[4px] bg-white flex items-center justify-center" style={{ borderColor: extractColor(item.ringClass) }}><div className="h-3 w-3 rounded-full" style={{ backgroundColor: extractColor(item.ringClass) }} /></div>
                </div>
                <div className="type-p5 mt-5 uppercase tracking-[0.22em]" style={{ color: extractColor(item.labelClass) }}>
                  {item.phase}
                </div>
                <h3 className="type-p2 mt-3 text-[#111111]">{item.title}</h3>
                <p className="type-p3 mt-3 max-w-[208px] text-black/70">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative md:hidden">
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={item.phase}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
              className="relative pl-16"
            >
              {index < items.length - 1 ? (
                <div className="pointer-events-none absolute left-6 top-[44px] h-[calc(100%+16px)] w-px bg-[#222222]/20">
                  <div
                    className="w-full bg-[#447ACB] transition-[height] duration-300 ease-out"
                    style={{ height: index < activeIndex ? "100%" : "0%" }}
                  />
                </div>
              ) : null}

              <div className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-[#222222] shadow-[0_8px_20px_rgba(34,34,34,0.04)]">
                <div className="h-8 w-8 rounded-full border-[4px] bg-white flex items-center justify-center" style={{ borderColor: extractColor(item.ringClass) }}><div className="h-3 w-3 rounded-full" style={{ backgroundColor: extractColor(item.ringClass) }} /></div>
              </div>

              <article className="rounded-[20px] border border-black/8 bg-white p-5 shadow-[0_16px_40px_rgba(34,34,34,0.04)]">
                <div>
                  <div className="type-p5 uppercase tracking-[0.22em]" style={{ color: extractColor(item.labelClass) }}>
                    {item.phase}
                  </div>
                  <h3 className="type-p2 mt-2 text-[#111111]">{item.title}</h3>
                </div>
                <p className="type-p3 mt-4 text-black/70">{item.copy}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <div className="pb-2">
          <div className="relative w-full px-2">
            <div className="absolute left-[34px] right-[34px] top-6 h-px bg-[#222222]" />
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
            >
              {items.map((item) => (
                <article key={item.phase} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-[#222222]">
                    <div className="h-8 w-8 rounded-full border-[4px] bg-white flex items-center justify-center" style={{ borderColor: extractColor(item.ringClass) }}><div className="h-3 w-3 rounded-full" style={{ backgroundColor: extractColor(item.ringClass) }} /></div>
                  </div>
                  <div className="type-p5 mt-4 uppercase tracking-[0.18em]" style={{ color: extractColor(item.labelClass) }}>
                    {item.phase}
                  </div>
                  <h3 className="type-p2 mt-2 text-[#111111]">{item.title}</h3>
                  <p className="type-p4 mt-3 max-w-[148px] text-black/70">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
