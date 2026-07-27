"use client"

import { useReducedMotion } from "motion/react"

import { EyebrowPill } from "@/components/EyebrowPill"
import { ButtonLink } from "@/components/ButtonLink"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { ExternalLinkMiniIcon } from "@/components/icons/ui-icons"
import { FullSectionHeader } from "@/components/homepage/ui"
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

function PortfolioCategoryControls({ categories }: { categories: string[] }) {
  return (
    <div className="hidden w-full flex-wrap items-center justify-center gap-2 md:flex md:justify-start">
      {categories.map((category) => (
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
  )
}

export function PortfolioFounderSections({
  intro,
  portfolio,
  founder,
  ctaLabel = "See More",
  ctaHref = siteRoutes.work,
  showCta = true,
}: PortfolioFounderSectionsProps) {
  const reduceMotion = useReducedMotion()
  const reduceMotionEnabled = Boolean(reduceMotion)
  const { itemY, visibility, sentinelRefs } = useStagedPortfolioReveal()
  const hasIntro = Boolean(intro)
  const topRow = (
    <PortfolioTopRow
      reduceMotionEnabled={reduceMotionEnabled}
      visibility={visibility}
      itemY={itemY}
      sentinelRefs={sentinelRefs}
      cards={portfolioShowcase.topRow}
    />
  )

  return (
    <div className="flex w-full flex-col items-stretch gap-8">
      <div className="relative flex w-full flex-col items-stretch gap-8">
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
          className="flex w-full flex-col items-stretch gap-8"
        >
          {hasIntro ? (
            <div className="flex w-full flex-col gap-8">
              <FullSectionHeader
                eyebrow={intro?.pill ?? portfolio.pill}
                heading={intro?.title ?? portfolio.title}
                description={intro?.description}
                headingAs="h2"
                className="w-full"
                eyebrowClassName="!px-4 !py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]"
                headingClassName="w-full max-w-none type-h2 text-[#222222]"
                descriptionClassName="w-full max-w-none type-p2 text-[#4B4B4B]"
                controlsClassName="w-full"
                controls={<PortfolioCategoryControls categories={portfolio.categories} />}
              />
            </div>
          ) : (
            <>
              <EyebrowPill
                className="w-fit self-start !px-6 !py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]"
                labelClassName="type-p5 text-[#222222]"
              >
                {portfolio.pill}
              </EyebrowPill>

              <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <h2 className="type-h2 max-w-[702px] text-left text-[#222222]">
                  {portfolio.title}
                </h2>

                {showCta ? (
                  <ButtonLink href={ctaHref} variant="bookCall" className="hidden self-start md:inline-flex md:self-auto">
                    <span>{ctaLabel}</span>
                    <ExternalLinkMiniIcon />
                  </ButtonLink>
                ) : null}
              </div>

              <PortfolioCategoryControls categories={portfolio.categories} />
            </>
          )}
        </PortfolioRevealWrap>
      </div>

      <div className="flex w-full flex-col gap-6">
        {hasIntro ? <div className="w-full self-stretch">{topRow}</div> : (
          <div className="w-full self-stretch">{topRow}</div>
        )}

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
            <EyebrowPill className="!px-3 !py-0.5" labelClassName="type-p5 text-[#222222]">
              {founder.pill}
            </EyebrowPill>

            <div className="grid w-full gap-3 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <h2 className="type-h2 text-white">
                {founder.title}
              </h2>
              {founder.description ? (
                <p className="type-p2 max-w-[900px]" style={{ color: "rgba(255,255,255,0.76)" }}>
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
