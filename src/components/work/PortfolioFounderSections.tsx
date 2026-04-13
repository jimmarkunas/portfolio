"use client"

import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { portfolioContent, siteRoutes } from "@/content/site"
import { PortfolioImageCard } from "./portfolio-founder/PortfolioImageCard"
import { StaggerItem } from "./portfolio-founder/StaggerItem"
import {
  portfolioHoverCardClass,
  portfolioHoverWideCardClass,
} from "./portfolio-founder/styles"
import type { PortfolioFounderSectionsProps } from "./portfolio-founder/types"

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const { founderShowcase, portfolioShowcase } = portfolioContent

export function PortfolioFounderSections({
  portfolio,
  founder,
  ctaLabel = "See More",
  ctaHref = siteRoutes.work,
  showCta = true,
}: PortfolioFounderSectionsProps) {
  const reduceMotion = useReducedMotion()
  const reduceMotionEnabled = Boolean(reduceMotion)
  const [isMobile, setIsMobile] = useState(false)
  const itemY = isMobile ? 8 : 12
  const [showTitleRow, setShowTitleRow] = useState(true)
  const [showPillsRow, setShowPillsRow] = useState(true)
  const [showImageRow1, setShowImageRow1] = useState(true)
  const [showImageRow2, setShowImageRow2] = useState(true)
  const [showImageRow3, setShowImageRow3] = useState(true)
  const [showImageRow4, setShowImageRow4] = useState(true)
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
            initial={false}
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
            initial={false}
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
                  initial={false}
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
                initial={false}
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
                    initial={false}
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
                  initial={false}
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
                    initial={false}
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
                initial={false}
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
                    initial={false}
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
                initial={false}
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
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18, margin: "-8% 0px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {founderShowcase.map((card) => (
            <StaggerItem key={card.href} reduceMotion={reduceMotionEnabled} itemY={itemY}>
              <PortfolioImageCard
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={portfolioHoverCardClass}
              />
            </StaggerItem>
          ))}
        </motion.div>
      </MotionReveal>
    </div>
  )
}
