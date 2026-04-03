"use client"

import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"

import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { founderShowcase, portfolioShowcase } from "@/content/portfolio-showcase"

type PortfolioSectionCopy = {
  pill: string
  title: string
  categories: string[]
}

type FounderSectionCopy = {
  pill: string
  title: string
}

type PortfolioFounderSectionsProps = {
  portfolio: PortfolioSectionCopy
  founder: FounderSectionCopy
  ctaLabel?: string
  ctaHref?: string
  showCta?: boolean
}

type PortfolioImageCardProps = {
  href: string
  src: string
  alt: string
  aspectRatio: string
  className: string
  wrapperClassName?: string
  loading?: "eager" | "lazy"
  fetchPriority?: "high" | "low" | "auto"
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  reduceMotion: boolean
  itemY: number
}

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function PortfolioHoverIcon() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      <span className="inline-flex h-20 w-20 items-center justify-center gap-2.5 rounded-[100px] bg-[#447ACB] p-3.5 outline outline-1 outline-offset-[-1px] outline-[#447ACB]/10">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.3402 17.2594L13.5615 33.0381L10.9688 30.4454L26.7475 14.6667H12.8403V11H33.0069V31.1667H29.3402V17.2594Z"
            fill="#FFE6E6"
          />
        </svg>
      </span>
    </span>
  )
}

const portfolioHoverCardClass =
  "group relative block w-full overflow-hidden rounded-[10px] outline outline-1 outline-offset-[-1px] outline-transparent transition-[transform,outline,box-shadow] duration-150 hover:-translate-y-0.5 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
const portfolioHoverWideCardClass =
  "group relative block w-full overflow-hidden rounded-xl outline outline-1 outline-offset-[-1px] outline-transparent transition-[transform,outline,box-shadow] duration-150 hover:-translate-y-0.5 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
const portfolioHoverOverlayClass =
  "pointer-events-none absolute inset-0 bg-[#222222]/45 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"

function PortfolioImageCard({
  href,
  src,
  alt,
  aspectRatio,
  className,
  wrapperClassName,
  loading,
  fetchPriority,
}: PortfolioImageCardProps) {
  return (
    <div className={wrapperClassName}>
      <Link href={href} className={className} style={{ aspectRatio }}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span aria-hidden="true" className={portfolioHoverOverlayClass} />
        <PortfolioHoverIcon />
      </Link>
    </div>
  )
}

function StaggerItem({ children, className, reduceMotion, itemY }: StaggerItemProps) {
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: itemY },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioFounderSections({
  portfolio,
  founder,
  ctaLabel = "See More",
  ctaHref = "/work/",
  showCta = true,
}: PortfolioFounderSectionsProps) {
  const reduceMotion = useReducedMotion()
  const reduceMotionEnabled = Boolean(reduceMotion)
  const [isMobile, setIsMobile] = useState(false)
  const itemY = isMobile ? 8 : 12
  const [showTitleRow, setShowTitleRow] = useState(false)
  const [showPillsRow, setShowPillsRow] = useState(false)
  const [showImageRow1, setShowImageRow1] = useState(false)
  const [showImageRow2, setShowImageRow2] = useState(false)
  const [showImageRow3, setShowImageRow3] = useState(false)
  const [showImageRow4, setShowImageRow4] = useState(false)
  const titleSentinelRef = useRef<HTMLDivElement>(null)
  const row1SentinelRef = useRef<HTMLDivElement>(null)
  const row2SentinelRef = useRef<HTMLDivElement>(null)
  const row3SentinelRef = useRef<HTMLDivElement>(null)
  const row4SentinelRef = useRef<HTMLDivElement>(null)
  const titleSentinelInView = useInView(titleSentinelRef, { once: true, margin: "0px 0px 65% 0px" })
  const row1SentinelInView = useInView(row1SentinelRef, { once: true, margin: "0px 0px 35% 0px" })
  const row2SentinelInView = useInView(row2SentinelRef, { once: true, margin: "0px 0px 35% 0px" })
  const row3SentinelInView = useInView(row3SentinelRef, { once: true, margin: "0px 0px 35% 0px" })
  const row4SentinelInView = useInView(row4SentinelRef, { once: true, margin: "0px 0px 35% 0px" })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const onChange = () => setIsMobile(mediaQuery.matches)
    onChange()
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange)
      return () => mediaQuery.removeEventListener("change", onChange)
    }
    mediaQuery.addListener(onChange)
    return () => mediaQuery.removeListener(onChange)
  }, [])

  useEffect(() => {
    if (!titleSentinelInView) return
    setShowTitleRow(true)
    const timer = window.setTimeout(() => setShowPillsRow(true), 60)
    return () => window.clearTimeout(timer)
  }, [titleSentinelInView])

  useEffect(() => {
    if (row1SentinelInView) setShowImageRow1(true)
  }, [row1SentinelInView])

  useEffect(() => {
    if (row2SentinelInView) setShowImageRow2(true)
  }, [row2SentinelInView])

  useEffect(() => {
    if (row3SentinelInView) setShowImageRow3(true)
  }, [row3SentinelInView])

  useEffect(() => {
    if (row4SentinelInView) setShowImageRow4(true)
  }, [row4SentinelInView])

  return (
    <div className="flex w-full flex-col items-center gap-8 md:items-start">
      {!reduceMotionEnabled ? (
        <div className="relative flex w-full flex-col items-center gap-8 md:items-start">
          <div
            ref={titleSentinelRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-px w-px -translate-y-12 md:-translate-y-16"
          />

          <motion.div
            className="flex w-full flex-col items-center gap-8 md:items-start"
            initial={{ opacity: 0, y: itemY }}
            animate={showTitleRow ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
            transition={{ duration: 0.32, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-6 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="type-p2 text-[#222222]">{portfolio.pill}</span>
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="type-h3 max-w-[702px] text-center text-[#222222] md:text-left">
                {portfolio.title}
              </h2>

              {showCta ? (
                <Link
                  href={ctaHref}
                  className="hidden self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#447ACB] md:inline-flex md:self-auto"
                >
                  <span>{ctaLabel}</span>
                  <ArrowUpRightIcon />
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className="flex w-full flex-wrap items-center justify-center gap-2 md:justify-start"
            initial={{ opacity: 0, y: itemY }}
            animate={showPillsRow ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
            transition={{ duration: 0.32, ease }}
          >
            {portfolio.categories.map((category) => (
              <span
                key={category}
                className={`inline-flex min-h-[44px] items-center justify-center rounded-[99px] px-6 py-2 text-[14px] leading-5 ${
                  category === "eCommerce" ? "bg-[#2B2B2B] text-white" : "bg-[#F8F8F8] text-[#222222]"
                }`}
              >
                {category}
              </span>
            ))}
          </motion.div>

          <div className="relative mt-2 w-full">
            <div ref={row1SentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24" />
            <div className="grid w-full gap-4 md:grid-cols-3">
              {portfolioShowcase.topRow.map((card, index) => (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: itemY }}
                  animate={showImageRow1 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                  transition={{ duration: 0.32, ease, delay: index * 0.04 }}
                >
                  <PortfolioImageCard
                    href={card.href}
                    src={card.src}
                    alt={card.alt}
                    aspectRatio={card.aspectRatio}
                    className={portfolioHoverCardClass}
                    loading={index < 3 ? "eager" : undefined}
                    fetchPriority={index < 3 ? "high" : undefined}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div ref={row2SentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24" />
            <div className="grid w-full gap-4 md:grid-cols-3">
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: itemY }}
                animate={showImageRow2 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                transition={{ duration: 0.32, ease }}
              >
                <PortfolioImageCard
                  href={portfolioShowcase.feature.href}
                  src={portfolioShowcase.feature.src}
                  alt={portfolioShowcase.feature.alt}
                  aspectRatio={portfolioShowcase.feature.aspectRatio}
                  className={portfolioHoverCardClass}
                  loading="eager"
                  fetchPriority="low"
                />
              </motion.div>
              <div className="grid gap-4 md:col-span-1 md:h-full md:grid-cols-1 md:grid-rows-2">
                {portfolioShowcase.sideStack.map((card, index) => (
                  <motion.div
                    key={card.href}
                    className="md:h-full"
                    initial={{ opacity: 0, y: itemY }}
                    animate={showImageRow2 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                    transition={{ duration: 0.32, ease, delay: (index + 1) * 0.04 }}
                  >
                    <PortfolioImageCard
                      href={card.href}
                      src={card.src}
                      alt={card.alt}
                      aspectRatio={card.aspectRatio}
                      className={portfolioHoverCardClass}
                      loading={index === 0 ? "eager" : undefined}
                      fetchPriority={index === 0 ? "low" : undefined}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div ref={row3SentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24" />
            <div className="grid w-full gap-4 md:grid-cols-2">
              {portfolioShowcase.middleRow.map((card, index) => (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: itemY }}
                  animate={showImageRow3 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                  transition={{ duration: 0.32, ease, delay: index * 0.04 }}
                >
                  <PortfolioImageCard
                    href={card.href}
                    src={card.src}
                    alt={card.alt}
                    aspectRatio={card.aspectRatio}
                    className={portfolioHoverCardClass}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div ref={row4SentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24" />
            <div className="w-full space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {portfolioShowcase.lowerRow.map((card, index) => (
                  <motion.div
                    key={card.href}
                    initial={{ opacity: 0, y: itemY }}
                    animate={showImageRow4 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                    transition={{ duration: 0.32, ease, delay: index * 0.04 }}
                  >
                    <PortfolioImageCard
                      href={card.href}
                      src={card.src}
                      alt={card.alt}
                      aspectRatio={card.aspectRatio}
                      className={portfolioHoverCardClass}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: itemY }}
                animate={showImageRow4 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                transition={{ duration: 0.32, ease, delay: 0.04 }}
              >
                <PortfolioImageCard
                  href={portfolioShowcase.wideRows[0].href}
                  src={portfolioShowcase.wideRows[0].src}
                  alt={portfolioShowcase.wideRows[0].alt}
                  aspectRatio={portfolioShowcase.wideRows[0].aspectRatio}
                  className={portfolioHoverWideCardClass}
                />
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {portfolioShowcase.lowerMiddleRow.map((card, index) => (
                  <motion.div
                    key={card.href}
                    initial={{ opacity: 0, y: itemY }}
                    animate={showImageRow4 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                    transition={{ duration: 0.32, ease, delay: 0.08 + index * 0.04 }}
                  >
                    <PortfolioImageCard
                      href={card.href}
                      src={card.src}
                      alt={card.alt}
                      aspectRatio={card.aspectRatio}
                      className={portfolioHoverCardClass}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: itemY }}
                animate={showImageRow4 ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
                transition={{ duration: 0.32, ease, delay: 0.12 }}
              >
                <PortfolioImageCard
                  href={portfolioShowcase.wideRows[1].href}
                  src={portfolioShowcase.wideRows[1].src}
                  alt={portfolioShowcase.wideRows[1].alt}
                  aspectRatio={portfolioShowcase.wideRows[1].aspectRatio}
                  className={portfolioHoverWideCardClass}
                />
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center gap-8 md:items-start">
          <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-6 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
            <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
            <span className="type-p2 text-[#222222]">{portfolio.pill}</span>
          </div>

          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="type-h3 max-w-[702px] text-center text-[#222222] md:text-left">
              {portfolio.title}
            </h2>

            {showCta ? (
              <Link
                href={ctaHref}
                className="hidden self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#447ACB] md:inline-flex md:self-auto"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRightIcon />
              </Link>
            ) : null}
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-2 md:justify-start">
            {portfolio.categories.map((category) => (
              <span
                key={category}
                className={`inline-flex min-h-[44px] items-center justify-center rounded-[99px] px-6 py-2 text-[14px] leading-5 ${
                  category === "eCommerce" ? "bg-[#2B2B2B] text-white" : "bg-[#F8F8F8] text-[#222222]"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-2 grid w-full gap-4 md:grid-cols-3">
            {portfolioShowcase.topRow.map((card, index) => (
              <PortfolioImageCard
                key={card.href}
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={portfolioHoverCardClass}
                loading={index < 3 ? "eager" : undefined}
                fetchPriority={index < 3 ? "high" : undefined}
              />
            ))}
          </div>

          <div className="grid w-full gap-4 md:grid-cols-3">
            <PortfolioImageCard
              href={portfolioShowcase.feature.href}
              src={portfolioShowcase.feature.src}
              alt={portfolioShowcase.feature.alt}
              aspectRatio={portfolioShowcase.feature.aspectRatio}
              className={portfolioHoverCardClass}
              wrapperClassName="md:col-span-2"
              loading="eager"
              fetchPriority="low"
            />
            <div className="grid gap-4 md:col-span-1 md:h-full md:grid-cols-1 md:grid-rows-2">
              {portfolioShowcase.sideStack.map((card, index) => (
                <PortfolioImageCard
                  key={card.href}
                  href={card.href}
                  src={card.src}
                  alt={card.alt}
                  aspectRatio={card.aspectRatio}
                  className={portfolioHoverCardClass}
                  wrapperClassName="md:h-full"
                  loading={index === 0 ? "eager" : undefined}
                  fetchPriority={index === 0 ? "low" : undefined}
                />
              ))}
            </div>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-2">
            {portfolioShowcase.middleRow.map((card) => (
              <PortfolioImageCard
                key={card.href}
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={portfolioHoverCardClass}
              />
            ))}
          </div>

          <div className="w-full space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {portfolioShowcase.lowerRow.map((card) => (
                <PortfolioImageCard
                  key={card.href}
                  href={card.href}
                  src={card.src}
                  alt={card.alt}
                  aspectRatio={card.aspectRatio}
                  className={portfolioHoverCardClass}
                />
              ))}
            </div>

            <PortfolioImageCard
              href={portfolioShowcase.wideRows[0].href}
              src={portfolioShowcase.wideRows[0].src}
              alt={portfolioShowcase.wideRows[0].alt}
              aspectRatio={portfolioShowcase.wideRows[0].aspectRatio}
              className={portfolioHoverWideCardClass}
            />

            <div className="grid gap-4 md:grid-cols-2">
              {portfolioShowcase.lowerMiddleRow.map((card) => (
                <PortfolioImageCard
                  key={card.href}
                  href={card.href}
                  src={card.src}
                  alt={card.alt}
                  aspectRatio={card.aspectRatio}
                  className={portfolioHoverCardClass}
                />
              ))}
            </div>

            <PortfolioImageCard
              href={portfolioShowcase.wideRows[1].href}
              src={portfolioShowcase.wideRows[1].src}
              alt={portfolioShowcase.wideRows[1].alt}
              aspectRatio={portfolioShowcase.wideRows[1].aspectRatio}
              className={portfolioHoverWideCardClass}
            />
          </div>
        </div>
      )}

      <MotionReveal preset="section" delay={0.08} className="mx-auto flex w-full max-w-[1336px] flex-col items-center gap-10 pt-6 md:pt-10">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
            <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
            <span className="type-p2 text-[#222222]">{founder.pill}</span>
          </div>

          <h3 className="text-center text-5xl font-normal leading-[56px] text-[#222222]">
            {founder.title}
          </h3>
        </div>

        <motion.div
          className="grid w-full gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18, margin: "-8% 0px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {founderShowcase.map((card) => (
            <StaggerItem key={card.href} reduceMotion={reduceMotionEnabled} itemY={itemY}>
              <div className="flex flex-col items-start gap-4">
                <Link href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                  <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                  <PortfolioHoverIcon />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </motion.div>
      </MotionReveal>
    </div>
  )
}
