"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type Props = {
  images: string[]
}

export default function NylEditorialCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const thumb1Index = (current + 1) % total
  const thumb2Index = (current + 2) % total

  const editionLabel = `EDITION NO.${current + 1}`

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-[16/10] md:aspect-[16/9]">
      {/* Main image */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        />
      </AnimatePresence>


      {/* Left sidebar */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center w-10 md:w-14 gap-3">
        <div className="flex-1 w-px bg-white/30 max-h-28" />
        <span
          className="whitespace-nowrap text-[9px] md:text-[10px] tracking-[0.25em] text-white/60 uppercase font-light"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {editionLabel}
        </span>
        <div className="flex-1 w-px bg-white/30 max-h-28" />
      </div>

      {/* Top-left metadata */}
      <div className="absolute top-4 left-12 md:left-16 text-[9px] md:text-[10px] text-white/55 tracking-[0.2em] uppercase font-light">
        41.9028° N, 12.4964° E
      </div>

      {/* Top-right metadata */}
      <div className="absolute top-4 right-4 md:right-6 text-[9px] md:text-[10px] text-white/55 tracking-[0.2em] uppercase font-light">
        35mm / f1.4 / ISO 200
      </div>

      {/* Bottom-left nav buttons */}
      <div className="absolute bottom-5 left-12 md:left-16 flex items-center gap-2 md:gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Bottom-right thumbnails */}
      {total > 2 && (
        <div className="absolute bottom-5 right-4 md:right-6 flex items-end gap-2 md:gap-3">
          {[thumb1Index, thumb2Index].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative overflow-hidden rounded-xl opacity-75 hover:opacity-100 transition-opacity h-[70px] w-[110px] md:h-[90px] md:w-[145px]"
            >
              <img
                src={images[idx]}
                alt={`Slide ${idx + 1} preview`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
