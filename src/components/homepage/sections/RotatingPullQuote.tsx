"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { PullQuote } from "@/components/PullQuote"
import type { CaseStudyPullQuote } from "@/content/case-studies/pull-quotes"
import { siteRoutes } from "@/content/site"

type RotatingPullQuoteProps = {
  quotes: CaseStudyPullQuote[]
  className?: string
}

const ROTATION_MS = 12000
const QUOTE_HEIGHT_CLASS = "h-[320px] md:h-[360px] lg:h-[400px]"
const inactiveDotClass = "bg-[rgba(255,255,255,0.12)] hover:bg-white/75"
const wipeVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 42 : -42,
    clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
  }),
  center: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.42,
      ease: "easeOut" as const,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -42 : 42,
    clipPath: direction > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    transition: {
      duration: 0.28,
      ease: "easeOut" as const,
    },
  }),
}

export function RotatingPullQuote({ quotes, className }: RotatingPullQuoteProps) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (reduceMotion || quotes.length <= 1) return

    const timer = window.setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % quotes.length)
    }, ROTATION_MS)

    return () => window.clearInterval(timer)
  }, [quotes.length, reduceMotion])

  useEffect(() => {
    if (index >= quotes.length) {
      setIndex(0)
    }
  }, [index, quotes.length])

  useEffect(() => {
    if (index >= quotes.length) {
      setDirection(1)
    }
  }, [index, quotes.length])

  function goToIndex(nextIndex: number) {
    if (nextIndex === index) return
    setDirection(nextIndex > index ? 1 : -1)
    setIndex(nextIndex)
  }

  function goPreviousQuote() {
    if (quotes.length <= 1) return
    setDirection(-1)
    setIndex((current) => (current - 1 + quotes.length) % quotes.length)
  }

  function goNextQuote() {
    if (quotes.length <= 1) return
    setDirection(1)
    setIndex((current) => (current + 1) % quotes.length)
  }

  if (!quotes.length) return null

  const quote = quotes[index] ?? quotes[0]
  const quoteHref = `${siteRoutes.work}/${quote.slug}`

  return (
    <div className={`w-full ${className ?? ""}`.trim()}>
      <div className={`relative w-full ${QUOTE_HEIGHT_CLASS}`}>
        {reduceMotion ? (
          <Link
            href={quoteHref}
            aria-label={`Open case study for ${quote.attributionTitle}`}
            className="group block h-full"
          >
            <PullQuote
              className="h-full px-3 py-3 md:px-4 md:py-4 lg:px-5 lg:py-5"
              contentClassName="h-full justify-center"
              quote={quote.quote}
              attributionTitle={quote.attributionTitle}
              attributionSubtitle={quote.attributionSubtitle}
              avatarSrc={quote.avatarSrc}
              glyphClassName="text-[rgba(255,255,255,0.1)]"
              dark
              hoverBlue
              decorativeFrame={
                <>
                  <div className="pointer-events-none absolute left-4 top-6 h-16 w-16 rounded-tl-[18px] border-l border-t border-white/10 md:left-8 md:top-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute right-4 top-6 h-16 w-16 rounded-tr-[18px] border-r border-t border-white/10 md:right-8 md:top-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute bottom-6 left-4 h-16 w-16 rounded-bl-[18px] border-b border-l border-white/10 md:bottom-8 md:left-8 md:h-20 md:w-20" />
                  <div className="pointer-events-none absolute bottom-6 right-4 h-16 w-16 rounded-br-[18px] border-b border-r border-white/10 md:bottom-8 md:right-8 md:h-20 md:w-20" />
                </>
              }
            />
          </Link>
        ) : (
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`${quote.attributionTitle}-${index}`}
              className="h-full"
              custom={direction}
              variants={wipeVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Link
                href={quoteHref}
                aria-label={`Open case study for ${quote.attributionTitle}`}
                className="group block h-full"
              >
                <PullQuote
                  className="h-full px-3 py-3 md:px-4 md:py-4 lg:px-5 lg:py-5"
                  contentClassName="h-full justify-center"
                  quote={quote.quote}
                  attributionTitle={quote.attributionTitle}
                  attributionSubtitle={quote.attributionSubtitle}
                  avatarSrc={quote.avatarSrc}
                  glyphClassName="text-[rgba(255,255,255,0.1)]"
                  dark
                  hoverBlue
                  decorativeFrame={
                    <>
                      <div className="pointer-events-none absolute left-4 top-6 h-16 w-16 rounded-tl-[18px] border-l border-t border-white/10 md:left-8 md:top-8 md:h-20 md:w-20" />
                      <div className="pointer-events-none absolute right-4 top-6 h-16 w-16 rounded-tr-[18px] border-r border-t border-white/10 md:right-8 md:top-8 md:h-20 md:w-20" />
                      <div className="pointer-events-none absolute bottom-6 left-4 h-16 w-16 rounded-bl-[18px] border-b border-l border-white/10 md:bottom-8 md:left-8 md:h-20 md:w-20" />
                      <div className="pointer-events-none absolute bottom-6 right-4 h-16 w-16 rounded-br-[18px] border-b border-r border-white/10 md:bottom-8 md:right-8 md:h-20 md:w-20" />
                    </>
                  }
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 md:mt-5">
        <button
          type="button"
          onClick={goPreviousQuote}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
          aria-label="Previous pull quote"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {quotes.map((item, quoteIndex) => {
            const isActive = quoteIndex === index
            return (
              <button
                key={`${item.attributionTitle}-${quoteIndex}`}
                type="button"
                onClick={() => goToIndex(quoteIndex)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  isActive ? "bg-[#447ACB]" : inactiveDotClass
                }`}
                aria-label={`Show pull quote from ${item.attributionTitle}`}
                aria-pressed={isActive}
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={goNextQuote}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
          aria-label="Next pull quote"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
