"use client"

import Link from "next/link"
import { useReducedMotion } from "framer-motion"

import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { portfolioContent, siteRoutes } from "@/content/site"
import {
  PortfolioFeatureRow,
  PortfolioFounderRow,
  PortfolioMiddleRow,
  PortfolioTopRow,
  PortfolioWideRows,
  RevealWrap as PortfolioRevealWrap,
} from "./portfolio-founder/PortfolioSectionRows"
import type { PortfolioFounderSectionsProps } from "./portfolio-founder/types"
import { useStagedPortfolioReveal } from "./portfolio-founder/useStagedPortfolioReveal"

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
  const { itemY, visibility, sentinelRefs } = useStagedPortfolioReveal()

  return (
    <div className="flex w-full flex-col items-start gap-8">
      <div className="relative flex w-full flex-col items-start gap-8">
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
          className="flex w-full flex-col items-start gap-8"
        >
          <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-6 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
            <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
            <span className="type-p2 text-[#222222]">{portfolio.pill}</span>
          </div>

          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="type-h3 max-w-[702px] text-left text-[#222222]">
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
      </div>

      <div className="flex w-full flex-col gap-6">
        <PortfolioTopRow
          reduceMotionEnabled={reduceMotionEnabled}
          visibility={visibility}
          itemY={itemY}
          sentinelRefs={sentinelRefs}
          cards={portfolioShowcase.topRow}
        />

        <PortfolioFeatureRow
          reduceMotionEnabled={reduceMotionEnabled}
          visibility={visibility}
          itemY={itemY}
          sentinelRefs={sentinelRefs}
          feature={portfolioShowcase.feature}
          sideStack={portfolioShowcase.sideStack}
        />

        <PortfolioMiddleRow
          reduceMotionEnabled={reduceMotionEnabled}
          visibility={visibility}
          itemY={itemY}
          sentinelRefs={sentinelRefs}
          cards={portfolioShowcase.middleRow}
        />

        <PortfolioWideRows
          reduceMotionEnabled={reduceMotionEnabled}
          visibility={visibility}
          itemY={itemY}
          sentinelRefs={sentinelRefs}
          lowerRow={portfolioShowcase.lowerRow}
          lowerMiddleRow={portfolioShowcase.lowerMiddleRow}
          wideRows={portfolioShowcase.wideRows}
        />
      </div>

      <MotionReveal
        preset="section"
        delay={0.08}
        className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#222222]"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-6 py-8 md:px-10 md:py-10 lg:px-10 lg:py-12">
          <div className="flex w-full flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="type-p2 text-[#222222]">{founder.pill}</span>
            </div>

            <div className="grid w-full gap-3 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <h3 className="text-left text-5xl font-normal leading-[56px] text-white">
                {founder.title}
              </h3>
              {founder.description ? (
                <p className="type-p3 max-w-[900px]" style={{ color: "rgba(255,255,255,0.76)" }}>
                  {founder.description}
                </p>
              ) : null}
            </div>
          </div>

          <PortfolioFounderRow reduceMotionEnabled={reduceMotionEnabled} itemY={itemY} cards={founderShowcase} />
        </div>
      </MotionReveal>
    </div>
  )
}
