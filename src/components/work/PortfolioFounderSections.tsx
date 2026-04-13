"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

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
import { useStagedPortfolioReveal } from "./portfolio-founder/useStagedPortfolioReveal"

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const { founderShowcase, portfolioShowcase } = portfolioContent

type ShowcaseCard = (typeof portfolioShowcase.topRow)[number]

type PortfolioRevealWrapProps = {
  reduceMotionEnabled: boolean
  show: boolean
  itemY: number
  delay?: number
  className?: string
  children: ReactNode
}

type SimpleRowConfig = {
  id: string
  stage: "row1" | "row3"
  containerClassName: string
  gridClassName: string
  cards: ShowcaseCard[]
  delayForIndex: (index: number) => number
  cardPropsForIndex?: (index: number) => Partial<{
    loading: "eager" | "lazy"
    fetchPriority: "high" | "low" | "auto"
  }>
}

function PortfolioRevealWrap({
  reduceMotionEnabled,
  show,
  itemY,
  delay = 0,
  className,
  children,
}: PortfolioRevealWrapProps) {
  if (reduceMotionEnabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
      transition={{ duration: 0.32, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioFounderSections({
  portfolio,
  founder,
  ctaLabel = "See More",
  ctaHref = siteRoutes.work,
  showCta = true,
}: PortfolioFounderSectionsProps) {
  const reduceMotion = useReducedMotion()
  const reduceMotionEnabled = Boolean(reduceMotion)
  const { itemY, visibility, sentinelRefs } = useStagedPortfolioReveal()

  const simpleRows: SimpleRowConfig[] = [
    {
      id: "row1",
      stage: "row1",
      containerClassName: "relative mt-2 w-full",
      gridClassName: "grid w-full gap-4 md:grid-cols-3",
      cards: portfolioShowcase.topRow,
      delayForIndex: (index) => index * 0.04,
      cardPropsForIndex: (index) => ({
        loading: index < 3 ? "eager" : undefined,
        fetchPriority: index < 3 ? "high" : undefined,
      }),
    },
    {
      id: "row3",
      stage: "row3",
      containerClassName: "relative w-full",
      gridClassName: "grid w-full gap-4 md:grid-cols-2",
      cards: portfolioShowcase.middleRow,
      delayForIndex: (index) => index * 0.04,
    },
  ]

  const row4GridGroups = [
    {
      id: "lower-row",
      cards: portfolioShowcase.lowerRow,
      delayForIndex: (index: number) => index * 0.04,
    },
    {
      id: "lower-middle-row",
      cards: portfolioShowcase.lowerMiddleRow,
      delayForIndex: (index: number) => 0.08 + index * 0.04,
    },
  ]

  return (
    <div className="flex w-full flex-col items-center gap-8 md:items-start">
      <div className="relative flex w-full flex-col items-center gap-8 md:items-start">
        {!reduceMotionEnabled ? (
          <div
            ref={sentinelRefs.title}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-px w-px -translate-y-12 md:-translate-y-16"
          />
        ) : null}

        <PortfolioRevealWrap
          reduceMotionEnabled={reduceMotionEnabled}
          show={visibility.title}
          itemY={itemY}
          className="flex w-full flex-col items-center gap-8 md:items-start"
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
        </PortfolioRevealWrap>

        <PortfolioRevealWrap
          reduceMotionEnabled={reduceMotionEnabled}
          show={visibility.pills}
          itemY={itemY}
          className="flex w-full flex-wrap items-center justify-center gap-2 md:justify-start"
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
        </PortfolioRevealWrap>

        {simpleRows.map((row) => (
          <div key={row.id} className={row.containerClassName}>
            {!reduceMotionEnabled ? (
              <div
                ref={sentinelRefs[row.stage]}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
              />
            ) : null}

            <div className={row.gridClassName}>
              {row.cards.map((card, index) => (
                <PortfolioRevealWrap
                  key={card.href}
                  reduceMotionEnabled={reduceMotionEnabled}
                  show={visibility[row.stage]}
                  itemY={itemY}
                  delay={row.delayForIndex(index)}
                >
                  <PortfolioImageCard
                    href={card.href}
                    src={card.src}
                    alt={card.alt}
                    aspectRatio={card.aspectRatio}
                    className={portfolioHoverCardClass}
                    {...row.cardPropsForIndex?.(index)}
                  />
                </PortfolioRevealWrap>
              ))}
            </div>
          </div>
        ))}

        <div className="relative w-full">
          {!reduceMotionEnabled ? (
            <div
              ref={sentinelRefs.row2}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
            />
          ) : null}

          <div className="grid w-full gap-4 md:grid-cols-3">
            <PortfolioRevealWrap
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row2}
              itemY={itemY}
              className="md:col-span-2"
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
            </PortfolioRevealWrap>

            <div className="grid gap-4 md:col-span-1 md:h-full md:grid-cols-1 md:grid-rows-2">
              {portfolioShowcase.sideStack.map((card, index) => (
                <PortfolioRevealWrap
                  key={card.href}
                  reduceMotionEnabled={reduceMotionEnabled}
                  show={visibility.row2}
                  itemY={itemY}
                  delay={(index + 1) * 0.04}
                  className="md:h-full"
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
                </PortfolioRevealWrap>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full">
          {!reduceMotionEnabled ? (
            <div
              ref={sentinelRefs.row4}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
            />
          ) : null}

          <div className="w-full space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {row4GridGroups[0].cards.map((card, index) => (
                <PortfolioRevealWrap
                  key={card.href}
                  reduceMotionEnabled={reduceMotionEnabled}
                  show={visibility.row4}
                  itemY={itemY}
                  delay={row4GridGroups[0].delayForIndex(index)}
                >
                  <PortfolioImageCard
                    href={card.href}
                    src={card.src}
                    alt={card.alt}
                    aspectRatio={card.aspectRatio}
                    className={portfolioHoverCardClass}
                  />
                </PortfolioRevealWrap>
              ))}
            </div>

            <PortfolioRevealWrap
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row4}
              itemY={itemY}
              delay={0.04}
            >
              <PortfolioImageCard
                href={portfolioShowcase.wideRows[0].href}
                src={portfolioShowcase.wideRows[0].src}
                alt={portfolioShowcase.wideRows[0].alt}
                aspectRatio={portfolioShowcase.wideRows[0].aspectRatio}
                className={portfolioHoverWideCardClass}
              />
            </PortfolioRevealWrap>

            <div className="grid gap-4 md:grid-cols-2">
              {row4GridGroups[1].cards.map((card, index) => (
                <PortfolioRevealWrap
                  key={card.href}
                  reduceMotionEnabled={reduceMotionEnabled}
                  show={visibility.row4}
                  itemY={itemY}
                  delay={row4GridGroups[1].delayForIndex(index)}
                >
                  <PortfolioImageCard
                    href={card.href}
                    src={card.src}
                    alt={card.alt}
                    aspectRatio={card.aspectRatio}
                    className={portfolioHoverCardClass}
                  />
                </PortfolioRevealWrap>
              ))}
            </div>

            <PortfolioRevealWrap
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row4}
              itemY={itemY}
              delay={0.12}
            >
              <PortfolioImageCard
                href={portfolioShowcase.wideRows[1].href}
                src={portfolioShowcase.wideRows[1].src}
                alt={portfolioShowcase.wideRows[1].alt}
                aspectRatio={portfolioShowcase.wideRows[1].aspectRatio}
                className={portfolioHoverWideCardClass}
              />
            </PortfolioRevealWrap>
          </div>
        </div>
      </div>

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
