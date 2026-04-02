"use client"

import Link from "next/link"

import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
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
  "group relative block w-full overflow-hidden rounded-[10px] outline outline-1 outline-offset-[-1px] outline-transparent transition-[outline,box-shadow] duration-150 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
const portfolioHoverWideCardClass =
  "group relative block w-full overflow-hidden rounded-xl outline outline-1 outline-offset-[-1px] outline-transparent transition-[outline,box-shadow] duration-150 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
const portfolioHoverOverlayClass =
  "pointer-events-none absolute inset-0 bg-[#222222]/45 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"

export function PortfolioFounderSections({
  portfolio,
  founder,
  ctaLabel = "See More",
  ctaHref = "/work/",
  showCta = true,
}: PortfolioFounderSectionsProps) {
  return (
    <div className="flex w-full flex-col items-center gap-8 md:items-start">
      <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-6 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
        <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
        <span className="type-p2 text-[#222222]">{portfolio.pill}</span>
      </div>

      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="type-h3 max-w-[702px] text-center text-[#222222] md:text-left">
            {portfolio.title}
          </h2>

          {showCta ? (
            <Link
              href={ctaHref}
              className="hidden self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-colors hover:bg-[#447ACB] md:inline-flex md:self-auto"
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
      </div>

      <div className="w-full space-y-4 pt-2">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {portfolioShowcase.topRow.map((card) => (
              <Link key={card.href} href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                <PortfolioHoverIcon />
              </Link>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href={portfolioShowcase.feature.href}
              className={`${portfolioHoverCardClass} md:col-span-2`}
              style={{ aspectRatio: portfolioShowcase.feature.aspectRatio }}
            >
              <img src={portfolioShowcase.feature.src} alt={portfolioShowcase.feature.alt} className="absolute inset-0 h-full w-full object-cover" />
              <span aria-hidden="true" className={portfolioHoverOverlayClass} />
              <PortfolioHoverIcon />
            </Link>
            <div className="grid gap-4 md:col-span-1 md:h-full md:grid-cols-1 md:grid-rows-2">
              {portfolioShowcase.sideStack.map((card) => (
                <Link key={card.href} href={card.href} className={`${portfolioHoverCardClass} md:h-full`} style={{ aspectRatio: card.aspectRatio }}>
                  <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                  <PortfolioHoverIcon />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {portfolioShowcase.middleRow.map((card) => (
              <Link key={card.href} href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                <PortfolioHoverIcon />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioShowcase.lowerRow.map((card) => (
              <Link key={card.href} href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                <PortfolioHoverIcon />
              </Link>
            ))}
          </div>

          <Link href={portfolioShowcase.wideRows[0].href} className={portfolioHoverWideCardClass} style={{ aspectRatio: portfolioShowcase.wideRows[0].aspectRatio }}>
            <img src={portfolioShowcase.wideRows[0].src} alt={portfolioShowcase.wideRows[0].alt} className="absolute inset-0 h-full w-full object-cover" />
            <span aria-hidden="true" className={portfolioHoverOverlayClass} />
            <PortfolioHoverIcon />
          </Link>

          <div className="grid gap-4 md:grid-cols-2">
            {portfolioShowcase.lowerMiddleRow.map((card) => (
              <Link key={card.href} href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                <PortfolioHoverIcon />
              </Link>
            ))}
          </div>

          <Link href={portfolioShowcase.wideRows[1].href} className={portfolioHoverWideCardClass} style={{ aspectRatio: portfolioShowcase.wideRows[1].aspectRatio }}>
            <img src={portfolioShowcase.wideRows[1].src} alt={portfolioShowcase.wideRows[1].alt} className="absolute inset-0 h-full w-full object-cover" />
            <span aria-hidden="true" className={portfolioHoverOverlayClass} />
            <PortfolioHoverIcon />
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-[1336px] flex-col items-center gap-10 pt-6 md:pt-10">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="type-p2 text-[#222222]">{founder.pill}</span>
            </div>

            <h3 className="text-center text-5xl font-normal leading-[56px] text-[#222222]">
              {founder.title}
            </h3>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {founderShowcase.map((card) => (
              <div key={card.href} className="flex flex-col items-start gap-4">
                <Link href={card.href} className={portfolioHoverCardClass} style={{ aspectRatio: card.aspectRatio }}>
                  <img src={card.src} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                  <PortfolioHoverIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
