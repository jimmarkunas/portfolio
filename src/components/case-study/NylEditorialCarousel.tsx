"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
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

  const padded = (n: number) => String(n + 1).padStart(2, "0")

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full md:aspect-[16/9]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={images[current]}
              alt={`Slide ${current + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Left edge slide counter */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90">
          <span className="type-p5 whitespace-nowrap uppercase tracking-widest text-[#7b7b7b]">
            {padded(current)} / {padded(total - 1)}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#222222]/20 bg-white text-[#222222] shadow-sm transition-opacity hover:opacity-80"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#222222]/20 bg-white text-[#222222] shadow-sm transition-opacity hover:opacity-80"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail previews */}
          {total > 2 && (
            <div className="flex items-end gap-2">
              {[thumb1Index, thumb2Index].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-[90px] w-[140px] overflow-hidden rounded-xl opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={images[idx]}
                    alt={`Slide ${idx + 1} preview`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
