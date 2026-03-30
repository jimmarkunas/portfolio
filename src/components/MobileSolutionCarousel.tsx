"use client"

import { useState } from "react"

type Slide = {
  category: string
  readTime: string
  title: string
  art: string
}

type MobileSolutionCarouselProps = {
  slides: Slide[]
}

function renderMobileArt(art: string) {
  if (art === "olive") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#90A07C_0%,#B7C1A5_52%,#D7D3C2_100%)]" />
        <div className="absolute right-8 top-5 h-52 w-52 rounded-full border border-white/30" />
        <div className="absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2 bg-[#C9D0BF] shadow-[0_-12px_30px_rgba(255,255,255,0.12)_inset]" />
        <div className="absolute bottom-16 left-1/2 h-28 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fffef7_0%,#ebe6d6_48%,#d6cfbb_100%)] shadow-[22px_26px_40px_rgba(34,34,34,0.14)]" />
      </>
    )
  }

  if (art === "ux") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#F31B0F_0%,#EF1C16_44%,#E2D5E4_45%,#D8C7E1_65%,#F7D4CB_100%)]" />
        <div className="absolute bottom-0 right-0 h-16 w-28 rounded-tl-full bg-[#E2D9EE]" />
        <div className="absolute bottom-0 left-[46%] h-24 w-24 bg-[linear-gradient(180deg,#C59CEB_0%,#9A6BCF_100%)] shadow-[0_-14px_30px_rgba(255,255,255,0.14)_inset]" />
        <div className="absolute bottom-20 left-[54%] h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffefef_0%,#ff3c2f_35%,#c6100a_100%)] shadow-[18px_22px_34px_rgba(34,34,34,0.18)]" />
      </>
    )
  }

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#B7DEE7_0%,#B9E0E9_38%,#C5E2DC_60%,#EFE7DA_100%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-44 rounded-tr-[120px] bg-[#24364D] shadow-[22px_24px_36px_rgba(34,34,34,0.18)]" />
      <div className="absolute bottom-0 left-[54%] h-32 w-24 -translate-x-1/2 bg-[#A5AB9A] shadow-[0_-12px_26px_rgba(255,255,255,0.12)_inset]" />
      <div className="absolute left-[64%] top-4 h-16 w-16 -translate-x-1/2 rotate-12 rounded-full bg-[#F1482F] shadow-[18px_20px_34px_rgba(34,34,34,0.22)]" />
      <div className="absolute left-[55%] top-9 h-16 w-16 -translate-x-1/2 rotate-12 rounded-full bg-[#2F2F2F]" />
    </>
  )
}

export function MobileSolutionCarousel({ slides }: MobileSolutionCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const goTo = (nextIndex: number) => {
    setActiveIndex(Math.max(0, Math.min(nextIndex, slides.length - 1)))
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null)
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX
    const deltaX = touchStartX - touchEndX

    if (deltaX > 50) goTo(activeIndex + 1)
    if (deltaX < -50) goTo(activeIndex - 1)

    setTouchStartX(null)
  }

  return (
    <div className="w-full md:hidden">
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article
              key={`${slide.category}-${slide.title}`}
              className="min-w-full flex-none overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_18px_40px_rgba(34,34,34,0.05)]"
            >
              <div className="relative h-[85svh] overflow-hidden rounded-[24px]">
                {renderMobileArt(slide.art)}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/92 text-[#222222] shadow-[0_10px_24px_rgba(34,34,34,0.18)] disabled:cursor-default disabled:opacity-35"
        >
          <span className="text-[20px] leading-none">‹</span>
        </button>

        <button
          type="button"
          aria-label="Next image"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === slides.length - 1}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/92 text-[#222222] shadow-[0_10px_24px_rgba(34,34,34,0.18)] disabled:cursor-default disabled:opacity-35"
        >
          <span className="text-[20px] leading-none">›</span>
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.category}-${index}`}
            type="button"
            aria-label={`Go to image ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 cursor-pointer rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-[#222222]" : "w-2.5 bg-[#222222]/20"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
