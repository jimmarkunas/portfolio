"use client"

import Link from "next/link"

import { Container } from "@/components/Container"
import { PullQuote } from "@/components/PullQuote"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"

import {
  desktopHeroLogoAxisX,
  desktopHeroRailLabelX,
  desktopHeroRailLineX,
  desktopHeroYearLabelX,
  getExperienceCards,
} from "./data"
import { getHomepageText } from "./homepage"
import {
  AwardRow,
  ExperienceCard,
  InsightAvatarStack,
  InsightStars,
  SectionPill,
} from "./ui"

function PortfolioImagePlaceholder({
  width,
  height,
  className = "",
}: {
  width: number
  height: number
  className?: string
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[10px] bg-white ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center text-[16px] text-[#666666]">
        {width} x {height}
      </div>
    </div>
  )
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

export default function Homepage() {
  const {
    hero,
    sections,
    stats,
    experienceCards: experienceCardCopy,
    awards,
    testimonials,
    journey,
    testimonial,
  } = getHomepageText()
  const experienceCards = getExperienceCards(experienceCardCopy)
  const heroTextLeft = "clamp(98px, 12vw, 177px)"
  const heroStatPlusLeft = `calc(${heroTextLeft} + 7px)`
  const heroStatNumberLeft = `calc(${heroTextLeft} + 28px)`
  const heroStatLabelLeft = `calc(${heroTextLeft} + 26px)`
  const heroSecondStatPlusLeft = `calc(${heroTextLeft} + 183px)`
  const heroSecondStatNumberLeft = `calc(${heroTextLeft} + 204px)`
  const heroSecondStatLabelLeft = `calc(${heroTextLeft} + 204px)`
  const portfolioHoverCardClass =
    "group relative block w-full overflow-hidden rounded-[10px] outline outline-1 outline-offset-[-1px] outline-transparent transition-[outline,box-shadow] duration-150 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
  const portfolioHoverWideCardClass =
    "group relative block w-full overflow-hidden rounded-xl outline outline-1 outline-offset-[-1px] outline-transparent transition-[outline,box-shadow] duration-150 hover:outline-[3px] hover:outline-blue-500 hover:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)] focus-visible:outline-[3px] focus-visible:outline-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
  const portfolioHoverOverlayClass =
    "pointer-events-none absolute inset-0 bg-[#222222]/45 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="bg-[#F3F3F3] px-0 md:px-0 lg:px-0">
          <div className="bg-[#F3F3F3] px-6 pb-10 pt-8 md:hidden">
            <div className="mx-auto max-w-[440px]">
              <div className="mt-10 text-center md:mt-12">
                <div className="type-display-hero text-[#222222]">{hero.title}</div>
                <div className="type-ui-lg mt-4 text-[#222222]">{hero.subtitle}</div>
              </div>

              <div className="mt-8 flex justify-center">
                <img
                  src="/jim/hero-jim-01-cutout.png"
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[420px]"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-[#222222]">
                <div className="type-ui-sm">{hero.role}</div>
                <div className="h-px w-16 shrink-0 bg-[#222222]" />
                <div className="type-ui-sm">{hero.year}</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">{hero.projectCompletedValue}</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">
                    {hero.projectCompletedLabel}
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">{hero.startupRaisedValue}</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">{hero.startupRaisedLabel}</div>
                </div>
              </div>

            </div>
          </div>

          <div className="relative hidden h-[938px] overflow-hidden bg-[#F3F3F3] md:block">
            <div className="absolute inset-x-0 top-0 h-full md:h-[calc(100%+80px)] md:-translate-y-20 lg:h-full lg:translate-y-0">
              <img
                src="/jim/hero-jim-01-cutout.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-[-140px] z-0 h-[760px] w-auto max-w-none md:right-[-300px] lg:right-[-140px] xl:right-[-36px]"
              />

            <div
              className="type-display-hero absolute z-10 text-[#222222]"
              style={{ left: heroTextLeft, top: "367px" }}
            >
              {hero.title}
            </div>

            <div
              className="type-ui-lg absolute z-10 text-[#222222]"
              style={{ left: heroTextLeft, top: "612px" }}
            >
              {hero.subtitle}
            </div>

              <div
                className="type-ui-md absolute bottom-8 z-10 text-[#222222] xl:hidden"
                style={{ left: heroTextLeft }}
              >
                {hero.scroll}
              </div>

              <div
                className="type-ui-md absolute z-10 hidden text-[#222222] xl:block"
                style={{ left: heroTextLeft, top: "860px" }}
              >
                {hero.scroll}
              </div>

            <div
              className="absolute z-10"
              style={{
                top: "168px",
                height: "701px",
                width: "120px",
                left: `${desktopHeroLogoAxisX}px`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative h-full w-full">
                <div
                  className="absolute left-0 top-0 origin-top-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroRailLabelX}px`,
                    top: "154px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {hero.role}
                </div>

                <div
                  className="absolute bg-[#222222]"
                  style={{
                    left: `${desktopHeroRailLineX}px`,
                    top: "189px",
                    width: "1px",
                    height: "386px",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="absolute left-0 bottom-0 origin-bottom-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroYearLabelX}px`,
                    bottom: "56px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {hero.year}
                </div>
              </div>
            </div>

            <div
              className="type-stat-plus absolute z-10 text-black"
              style={{ left: heroStatPlusLeft, top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: heroStatNumberLeft, top: "204px" }}
            >
              {hero.projectCompletedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: heroStatLabelLeft, top: "261px" }}
            >
              {hero.projectCompletedLabel}
            </div>

            <div
              className="type-stat-plus absolute z-10 text-black"
              style={{ left: heroSecondStatPlusLeft, top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: heroSecondStatNumberLeft, top: "204px" }}
            >
              {hero.startupRaisedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: heroSecondStatLabelLeft, top: "261px" }}
            >
              {hero.startupRaisedLabel}
            </div>
          </div>
        </div>
        </Container>
      </section>

      {/* Trust bar — replace placeholder divs with <img src="/logos/name.svg" alt="Name" className="h-8 w-auto" /> when ready */}
      <section className="w-full bg-[#F3F3F3]">
        <Container className="px-0 md:px-0 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            {
              src: "/company-logos/svg/disney-logo.svg",
              alt: "Disney",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
            { src: "/company-logos/svg/hbo-logo.svg", alt: "HBO", scaleClass: "scale-100" },
            { src: "/company-logos/svg/directv-logo.svg", alt: "DirecTV", scaleClass: "scale-100" },
            {
              src: "/company-logos/svg/shopify-logo.svg",
              alt: "Shopify",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
            {
              src: "/company-logos/svg/bcg-logo.svg",
              alt: "BCG",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
            {
              src: "/company-logos/svg/publicis-sapient-logo.svg",
              alt: "Publicis Sapient",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
            {
              src: "/company-logos/svg/bc-logo.svg",
              alt: "Boston Consulting",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
            {
              src: "/company-logos/svg/aa-logo.svg",
              alt: "American Airlines",
              scaleClass: "scale-110 md:scale-115 lg:scale-125",
            },
          ].map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
              <img
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={48}
                className={`h-auto w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
              />
            </div>
          ))}
        </div>
        </Container>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex w-full flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{sections.experiences.pill}</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]">
                  {sections.experiences.title}
                </h2>
                <p className="type-p3 max-w-[840px] text-[#7B7B7B]">
                  {sections.experiences.description}
                </p>
              </div>
            </div>

            <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-[396px_repeat(3,minmax(0,1fr))] lg:items-stretch">
              {experienceCards.map((card) => (
                <ExperienceCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col gap-20">
            <div className="grid gap-10 lg:grid-cols-[482px_minmax(0,769px)] lg:justify-between lg:gap-12">
              <div className="flex flex-col items-start gap-3">
                <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                  <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                  <span className="type-p2 text-[#222222]">{sections.awards.pill}</span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <h2 className="type-h3 max-w-[396px] text-[#222222]">{sections.awards.title}</h2>
                  <p className="type-p2 max-w-[482px] text-black/70">{sections.awards.description}</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {awards.map((item) => (
                  <AwardRow key={`${item.rank}-${item.year}-${item.title}`} {...item} />
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-8 md:items-start">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-6 py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{sections.portfolio.pill}</span>
              </div>

              <div className="flex w-full flex-col gap-5">
                <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <h2 className="type-h3 max-w-[702px] text-center text-[#222222] md:text-left">
                    {sections.portfolio.title}
                  </h2>

                  <Link
                    href="/work/"
                    className="inline-flex self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white lg:self-auto"
                  >
                    <span>{sections.highlights.cta}</span>
                    <ArrowUpRightIcon />
                  </Link>
                </div>

                <div className="flex w-full flex-wrap items-center justify-center gap-2 md:justify-start">
                  {sections.portfolio.categories.map((category, index) => (
                    <span
                      key={category}
                      className={`inline-flex min-h-[44px] items-center justify-center rounded-[99px] px-6 py-2 text-[14px] leading-5 ${
                        index === 0 ? "bg-[#2B2B2B] text-white" : "bg-[#F8F8F8] text-[#222222]"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full space-y-4 pt-2">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <Link
                      href="/work/dtv02/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "433 / 320" }}
                    >
                      <img
                        src="/portfolio-gallery/directv02.svg"
                        alt="DIRECTV project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <Link
                      href="/work/cps/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "433 / 320" }}
                    >
                      <img
                        src="/portfolio-gallery/cps.svg"
                        alt="CPS project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <Link
                      href="/work/newyorklife/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "433 / 320" }}
                    >
                      <img
                        src="/portfolio-gallery/nyl.svg"
                        alt="New York Life project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-3">
                    <Link
                      href="/work/modere/"
                      className={`${portfolioHoverCardClass} xl:col-span-2`}
                      style={{ aspectRatio: "882 / 658" }}
                    >
                      <img
                        src="/portfolio-gallery/modere.svg"
                        alt="Modere project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <div className="grid gap-4 md:grid-cols-2 xl:col-span-1 xl:h-full xl:grid-cols-1 xl:grid-rows-2">
                      <Link
                        href="/work/bi/"
                        className={`${portfolioHoverCardClass} xl:h-full`}
                        style={{ aspectRatio: "433 / 320" }}
                      >
                        <img
                          src="/portfolio-gallery/bi.svg"
                          alt="BI project"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                      </Link>
                      <Link
                        href="/work/mm/"
                        className={`${portfolioHoverCardClass} xl:h-full`}
                        style={{ aspectRatio: "433 / 320" }}
                      >
                        <img
                          src="/portfolio-gallery/mm.svg"
                          alt="MM project"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Link
                      href="/work/method/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/method.svg"
                        alt="Method project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <Link
                      href="/work/murad/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/murad.svg"
                        alt="Murad project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Link
                      href="/work/k2/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/k2.svg"
                        alt="K2 project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <Link
                      href="/work/cbdistillery/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/cbdistillery.svg"
                        alt="CBDistillery project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                  </div>

                  <Link
                    href="/work/foh/"
                    className={portfolioHoverWideCardClass}
                    style={{ aspectRatio: "1336 / 582" }}
                  >
                    <img
                      src="/portfolio-gallery/foh.svg"
                      alt="FOH project"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                  </Link>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Link
                      href="/work/lego/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/lego.svg"
                        alt="LEGO project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                    <Link
                      href="/work/aa/"
                      className={portfolioHoverCardClass}
                      style={{ aspectRatio: "660 / 381" }}
                    >
                      <img
                        src="/portfolio-gallery/aa.svg"
                        alt="American Apparel project"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                    </Link>
                  </div>

                  <Link
                    href="/work/dtv01/"
                    className={portfolioHoverWideCardClass}
                    style={{ aspectRatio: "1336 / 582" }}
                  >
                    <img
                      src="/portfolio-gallery/directv01.svg"
                      alt="DIRECTV project"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                      <PortfolioHoverIcon />
                  </Link>
                </div>

                <div className="mx-auto flex w-full max-w-[1336px] flex-col items-center gap-10 pt-6 md:pt-10">
                  <div className="flex w-full max-w-[1200px] flex-col items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                      <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                      <span className="type-p2 text-[#222222]">{sections.portfolio.moreProjects.pill}</span>
                    </div>

                    <h3 className="text-center text-5xl font-normal leading-[56px] text-[#222222]">
                      {sections.portfolio.moreProjects.title}
                    </h3>
                  </div>

                  <div className="grid w-full gap-6 md:grid-cols-2">
                    {sections.portfolio.moreProjects.cards.map((card, index) => (
                      <div key={card.title} className="flex flex-col items-start gap-4">
                        {index === 0 ? (
                          <Link
                            href="/work/zevo/"
                            className={portfolioHoverCardClass}
                            style={{ aspectRatio: `${card.width} / ${card.height}` }}
                          >
                            <img
                              src="/portfolio-gallery/zevo.svg"
                              alt="ZEVO project"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                            <PortfolioHoverIcon />
                          </Link>
                        ) : (
                          <Link
                            href="/work/cwg/"
                            className={portfolioHoverCardClass}
                            style={{ aspectRatio: `${card.width} / ${card.height}` }}
                          >
                            <img
                              src="/portfolio-gallery/cwg.svg"
                              alt="CWG project"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <span aria-hidden="true" className={portfolioHoverOverlayClass} />
                            <PortfolioHoverIcon />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-7 md:pb-16 md:pt-8 lg:pb-[72px] lg:pt-[36px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-5">
              <SectionPill label={sections.insights.pill} />

              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">{sections.insights.title}</h2>
                  <p className="type-p3 max-w-[962px] text-black/80">{sections.insights.description}</p>
                </div>

              </div>
            </div>

            <div className="grid w-full gap-5 xl:grid-cols-3">
              <div className="flex h-full flex-col gap-4">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <InsightAvatarStack />
                    <div className="flex flex-col">
                      <div className="type-p2 text-black">{stats.clientsCount}</div>
                      <div className="type-ui-sm text-[#666666]">{stats.clientsSubtext}</div>
                    </div>
                  </div>
                </article>

                <article className="relative flex-1 overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">{stats.completedProjectsValue}</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    {stats.completedProjectsLabel}
                  </p>
                </article>
              </div>

              <div className="flex h-full flex-col gap-4 xl:order-3">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">{stats.clientsCount}</div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {stats.clientsSubtext}
                    </p>
                  </div>
                </article>

                <article className="relative flex-1 overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">{stats.completedProjectsValue}</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    {stats.completedProjectsLabel}
                  </p>
                </article>
              </div>

              <div className="flex h-full flex-col gap-4 xl:order-2">
                <article className="relative flex-1 overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">{stats.retentionRateValue}</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    {stats.retentionRateLabel}
                  </p>
                </article>

                <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">
                      {stats.ratingValue}
                      <span className="text-[24px] leading-8 text-[#666666]">{stats.ratingOutOf}</span>
                    </div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {stats.ratingSummary}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full">
              <div className="mx-auto flex w-full flex-col items-center gap-8">
                <SectionPill label={sections.testimonials.pill} />

                <div className="flex flex-col items-center gap-3 text-center">
                  <h3 className="type-h3 text-[#222222]">{sections.testimonials.title}</h3>
                  <p className="type-p3 max-w-[900px] text-black/70">{sections.testimonials.description}</p>
                </div>

                <div className="grid w-full gap-5 xl:grid-cols-3">
                  <div className="flex flex-col gap-5">
                    {testimonials[0] ? (
                      <article className="flex min-h-[410px] flex-1 flex-col justify-between rounded-[10px] bg-[linear-gradient(180deg,#1F252B_0%,#14191F_100%)] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                        <div className="type-p2 opacity-95">{testimonials[0].company}</div>
                        <p className="type-p3 mt-6 max-w-[360px] text-white/90">{testimonials[0].quote}</p>
                        <div className="mt-8 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm">
                              {testimonials[0].name.slice(0, 1)}
                            </div>
                            <div>
                              <div className="type-p2 text-white">{testimonials[0].name}</div>
                              <div className="type-p3 text-white/70">{testimonials[0].role}</div>
                            </div>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10 text-lg text-white/90">×</div>
                        </div>
                      </article>
                    ) : null}

                    {testimonials[4] ? (
                      <article className="rounded-[10px] bg-[#F9FAFB] p-6 outline outline-1 outline-gray-200">
                        <p className="type-p3 text-[#2B2B2B]">{testimonials[4].quote}</p>
                        <div className="mt-6 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm text-[#2B2B2B]">
                              {testimonials[4].name.slice(0, 1)}
                            </div>
                            <div>
                              <div className="type-p2 text-[#222222]">{testimonials[4].name}</div>
                              <div className="type-p3 text-[#5F6368]">{testimonials[4].role}</div>
                            </div>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EEF0F3] text-lg text-[#2B2B2B]">×</div>
                        </div>
                      </article>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-5">
                    {[1, 3, 5].map((index) =>
                      testimonials[index] ? (
                        <article key={testimonials[index].name} className="rounded-[10px] bg-[#F9FAFB] p-6 outline outline-1 outline-gray-200">
                          <p className="type-p3 text-[#2B2B2B]">{testimonials[index].quote}</p>
                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm text-[#2B2B2B]">
                                {testimonials[index].name.slice(0, 1)}
                              </div>
                              <div>
                                <div className="type-p2 text-[#222222]">{testimonials[index].name}</div>
                                <div className="type-p3 text-[#5F6368]">{testimonials[index].role}</div>
                              </div>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EEF0F3] text-lg text-[#2B2B2B]">×</div>
                          </div>
                        </article>
                      ) : null,
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    {testimonials[2] ? (
                      <article className="rounded-[10px] bg-[#F9FAFB] p-6 outline outline-1 outline-gray-200">
                        <p className="type-p3 text-[#2B2B2B]">{testimonials[2].quote}</p>
                        <div className="mt-6 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm text-[#2B2B2B]">
                              {testimonials[2].name.slice(0, 1)}
                            </div>
                            <div>
                              <div className="type-p2 text-[#222222]">{testimonials[2].name}</div>
                              <div className="type-p3 text-[#5F6368]">{testimonials[2].role}</div>
                            </div>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EEF0F3] text-lg text-[#2B2B2B]">×</div>
                        </div>
                      </article>
                    ) : null}

                    {testimonials[6] ? (
                      <article className="flex min-h-[410px] flex-1 flex-col justify-between rounded-[10px] bg-[linear-gradient(180deg,#1F252B_0%,#14191F_100%)] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                        <div className="type-p2 opacity-95">{testimonials[6].company}</div>
                        <p className="type-p3 mt-6 max-w-[360px] text-white/90">{testimonials[6].quote}</p>
                        <div className="mt-8 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm">
                              {testimonials[6].name.slice(0, 1)}
                            </div>
                            <div>
                              <div className="type-p2 text-white">{testimonials[6].name}</div>
                              <div className="type-p3 text-white/70">{testimonials[6].role}</div>
                            </div>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10 text-lg text-white/90">×</div>
                        </div>
                      </article>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#222222]">
        <Container className="py-14 md:py-16 lg:py-20">
          <PullQuote
            dark
            quote={<>&ldquo;{testimonial.quote}&rdquo;</>}
            attributionTitle={testimonial.name}
            attributionSubtitle={testimonial.handle}
            initials={testimonial.initials}
            glyphClassName="text-[rgba(255,255,255,0.1)]"
            decorativeFrame={
              <>
                <div className="pointer-events-none absolute left-4 top-6 h-16 w-16 rounded-tl-[18px] border-l border-t border-white/10 md:left-8 md:top-8 md:h-20 md:w-20" />
                <div className="pointer-events-none absolute right-4 top-6 h-16 w-16 rounded-tr-[18px] border-r border-t border-white/10 md:right-8 md:top-8 md:h-20 md:w-20" />
                <div className="pointer-events-none absolute bottom-6 left-4 h-16 w-16 rounded-bl-[18px] border-b border-l border-white/10 md:bottom-8 md:left-8 md:h-20 md:w-20" />
                <div className="pointer-events-none absolute bottom-6 right-4 h-16 w-16 rounded-br-[18px] border-b border-r border-white/10 md:bottom-8 md:right-8 md:h-20 md:w-20" />
              </>
            }
          />
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="rounded-[10px] bg-white p-6 md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col items-start gap-4">
                <SectionPill label={sections.journey.pill} />
                <h2 className="type-h3 max-w-[520px] text-[#222222]">{sections.journey.title}</h2>
              </div>

              <div className="flex flex-col items-start gap-5 lg:max-w-[520px] lg:justify-start lg:justify-self-end">
                <p className="type-p3 text-black/70">{sections.journey.intro}</p>
                <Link
                  href="https://calendar.app.google/Cc4kuM7cqTyiXQx66"
                  className="type-p2 inline-flex items-center gap-2 text-[#222222] underline underline-offset-4"
                >
                  <span>{sections.journey.cta}</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div className="grid gap-6 border-b border-black/10 pb-6 lg:grid-cols-[1.1fr_0.9fr_auto] lg:items-center">
                <div>
                  <h3 className="type-h5 text-[#222222]">{journey.featured.company}</h3>
                  <p className="type-p3 mt-1 text-[#7B7B7B]">{journey.featured.date}</p>

                  <div className="mt-5 w-full max-w-[530px] overflow-hidden rounded-[10px] bg-black" style={{ aspectRatio: "530 / 298" }}>
                    <iframe
                      width="530"
                      height="298"
                      src="https://www.youtube.com/embed/Am5w8EIKxHM?si=bSia4BHbF5elGAY8"
                      title="Creative Minds featured video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <p className="type-p3 text-[#666666] lg:max-w-[320px]">{journey.featured.summary}</p>

                <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:justify-center">
                  <div className="flex flex-wrap justify-end gap-2">
                    {journey.featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex min-h-[32px] items-center rounded-[999px] bg-[#2B2B2B] px-4 text-[16px] leading-6 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/work/"
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2B2B2B] text-white"
                    aria-label="View work"
                  >
                    <ArrowUpRightIcon size={28} />
                  </Link>
                </div>
              </div>

              {journey.entries.map((entry) => (
                <div
                  key={`${entry.company}-${entry.date}`}
                  className="grid gap-5 border-b border-black/10 pb-6 last:border-b-0 last:pb-0 lg:grid-cols-[1.1fr_0.9fr_auto] lg:items-center"
                >
                  <div>
                    <h3 className="type-h5 text-[#222222]">{entry.company}</h3>
                    <p className="type-p3 mt-1 text-[#7B7B7B]">{entry.date}</p>
                  </div>
                  <p className="type-p3 text-[#666666] lg:max-w-[320px]">{entry.summary}</p>
                  <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex min-h-[32px] items-center rounded-[999px] bg-[#EFEFEF] px-4 text-[16px] leading-6 text-[#3A3A3A] outline outline-1 outline-black/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}
