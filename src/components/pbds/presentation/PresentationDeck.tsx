"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"

import { presentationSlideMotion } from "@/lib/motion"

const STAGE_WIDTH = 1920
const STAGE_HEIGHT = 1080
const VIEWPORT_PADDING = 32

export type PresentationSlide = {
  id: string
  content: ReactNode
}

export function PresentationDeck({
  slides,
  initialSlide = 0,
  showControls = true,
  className = "",
}: {
  slides: PresentationSlide[]
  initialSlide?: number
  showControls?: boolean
  className?: string
}) {
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(initialSlide, 0), Math.max(slides.length - 1, 0)),
  )
  const [scale, setScale] = useState(1)
  const reduceMotion = useReducedMotion()

  const clampIndex = useCallback(
    (nextIndex: number) => Math.min(Math.max(nextIndex, 0), Math.max(slides.length - 1, 0)),
    [slides.length],
  )

  const goTo = useCallback(
    (nextIndex: number) => setIndex(clampIndex(nextIndex)),
    [clampIndex],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const previous = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const updateScale = () => {
      const availableWidth = Math.max(window.innerWidth - VIEWPORT_PADDING * 2, 1)
      const availableHeight = Math.max(window.innerHeight - VIEWPORT_PADDING * 2, 1)
      setScale(Math.min(availableWidth / STAGE_WIDTH, availableHeight / STAGE_HEIGHT, 1))
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault()
        next()
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault()
        previous()
      } else if (event.key === "Home") {
        event.preventDefault()
        goTo(0)
      } else if (event.key === "End") {
        event.preventDefault()
        goTo(slides.length - 1)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [goTo, next, previous, slides.length])

  useEffect(() => {
    setIndex((current) => clampIndex(current))
  }, [clampIndex])

  const current = slides[index]
  const motionProps = useMemo(
    () =>
      reduceMotion
        ? {
            initial: false as const,
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 1, x: 0 },
            transition: { duration: 0 },
          }
        : presentationSlideMotion,
    [reduceMotion],
  )

  if (!current) return null

  return (
    <main
      className={`fixed inset-0 overflow-hidden bg-charcoal text-white ${className}`.trim()}
      aria-label="PBDS presentation"
    >
      <div className="flex h-full w-full items-center justify-center p-8">
        <div
          className="relative"
          style={{ width: STAGE_WIDTH * scale, height: STAGE_HEIGHT * scale }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: STAGE_WIDTH,
              height: STAGE_HEIGHT,
              transform: `scale(${scale})`,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                {...motionProps}
                className="h-full w-full"
              >
                {current.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}
      </div>

      {showControls ? (
        <nav
          aria-label="Presentation controls"
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-pill bg-ink px-4 py-3 shadow-overlay"
        >
          <button
            type="button"
            onClick={previous}
            disabled={index === 0}
            className="min-h-interactive min-w-interactive rounded-pill border border-line bg-white px-4 text-body-s font-medium text-ink transition-opacity duration-fast disabled:opacity-[0.45]"
            aria-label="Previous slide"
          >
            ←
          </button>
          <span className="min-w-[88px] text-center text-body-s font-medium text-white">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={index === slides.length - 1}
            className="min-h-interactive min-w-interactive rounded-pill bg-magenta px-4 text-body-s font-semibold text-ink transition-opacity duration-fast disabled:opacity-[0.45]"
            aria-label="Next slide"
          >
            →
          </button>
        </nav>
      ) : null}
    </main>
  )
}
