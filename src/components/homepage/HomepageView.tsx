"use client"

import type { ReactNode } from "react"
import Link from "next/link"

import { Container } from "@/components/Container"
import { PullQuote } from "@/components/PullQuote"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"

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

type HomepageInsightCard = {
  title?: string
  subtitle?: string
  value?: string
  label?: string
  suffix?: string
  summary?: string
}

type TestimonialItem = {
  company?: string
  name: string
  role: string
  quote: string
  avatarSrc?: string
  badgeSrc?: string
  badgeImageClassName?: string
}

type TestimonialCardProps = {
  testimonial: TestimonialItem
  tone: "light" | "dark"
  className?: string
  topRightBadge?: ReactNode
}

const recognitionRowClass =
  "grid gap-6 border-b border-black/10 pb-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:items-start lg:items-center"
const recognitionSummaryClass =
  "type-p3 text-[#666666] w-full lg:pl-8"
const linkedRecognitionRowClass =
  "transition-colors duration-150 hover:bg-[#F5F7FA]"
const featuredTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#2B2B2B] px-4 text-[16px] leading-6 text-white"
const defaultTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#EFEFEF] px-4 text-[16px] leading-6 text-[#3A3A3A] outline outline-1 outline-black/10"

function TestimonialCard({ testimonial, tone, className = "", topRightBadge }: TestimonialCardProps) {
  const isDark = tone === "dark"

  const articleClass = isDark
    ? "relative rounded-[10px] bg-[linear-gradient(180deg,#1F252B_0%,#14191F_100%)] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
    : "relative rounded-[10px] bg-[#F9FAFB] p-6 outline outline-1 outline-gray-200"

  const badgeClass = isDark
    ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm text-white"
    : "flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm text-[#2B2B2B]"

  const companyClass = isDark ? "type-p2 opacity-95" : "type-p2 text-[#222222]/80"
  const quoteTextClass = isDark ? "type-p3 text-white/90" : "type-p3 text-[#2B2B2B]"
  const quoteGlyphClass = isDark ? "text-[rgba(255,255,255,0.12)]" : "text-[rgba(34,34,34,0.08)]"
  const nameClass = isDark ? "type-p2 text-white" : "type-p2 text-[#222222]"
  const roleClass = isDark ? "type-p3 text-white/70" : "type-p3 text-[#5F6368]"
  const initialBadge = <div className={badgeClass}>{testimonial.name.slice(0, 1)}</div>
  const companyBadge = testimonial.badgeSrc ? (
    <div className={`${badgeClass} overflow-hidden`}>
      <img
        src={testimonial.badgeSrc}
        alt={`${testimonial.company ?? testimonial.name} badge`}
        className={`h-full w-full object-cover ${testimonial.badgeImageClassName ?? ""}`.trim()}
      />
    </div>
  ) : initialBadge
  const profileAvatar = testimonial.avatarSrc ? (
    <img src={testimonial.avatarSrc} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
  ) : initialBadge

  return (
    <article className={`${articleClass} ${className}`.trim()}>
      <div className="absolute right-6 top-6">
        {topRightBadge ? topRightBadge : companyBadge}
      </div>

      <div className={companyClass}>{testimonial.company ?? "Client Feedback"}</div>

      <div className="relative mt-6">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 -top-[0.2em] -translate-x-1/2 font-serif text-[92px] leading-none tracking-[-0.14em] md:text-[108px] ${quoteGlyphClass}`}
        >
          &ldquo;
        </div>
        <p className={`relative z-10 ${quoteTextClass}`}>{testimonial.quote}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {profileAvatar}
          <div>
            <div className={nameClass}>{testimonial.name}</div>
            <div className={roleClass}>{testimonial.role}</div>
          </div>
        </div>
      </div>
    </article>
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
  const [statsCard1, statsCard2, statsCard3, statsCard4, statsCard5, statsCard6] =
    stats.cards as HomepageInsightCard[]

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

            <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-[396px_repeat(3,minmax(0,1fr))] xl:items-stretch">
              {experienceCards.map((card) => (
                <ExperienceCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
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

            <PortfolioFounderSections
              portfolio={sections.portfolio}
              founder={sections.portfolio.moreProjects}
              ctaLabel={sections.highlights.cta}
              ctaHref="/work/"
              showCta
            />
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
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

            <div className="grid w-full gap-5 md:grid-cols-3">
              <div className="flex h-full flex-col gap-4">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <InsightAvatarStack />
                    <div className="flex flex-col">
                      <div className="type-p2 text-black">{statsCard1.title ?? ""}</div>
                      <div className="type-ui-sm text-[#666666]">{statsCard1.subtitle ?? ""}</div>
                    </div>
                  </div>
                </article>

                <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    {statsCard2.value ?? ""}
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard2.label ?? ""}
                  </p>
                </article>
              </div>

              <div className="flex h-full flex-col gap-4 md:order-3">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:items-center md:justify-center md:gap-4">
                    <div className="type-h5 text-black">{statsCard4.title ?? ""}</div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {statsCard4.subtitle ?? ""}
                    </p>
                  </div>
                </article>

                <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    {statsCard5.value ?? ""}
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard5.label ?? ""}
                  </p>
                </article>
              </div>

              <div className="flex h-full flex-col gap-4 md:order-2">
                <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    {statsCard3.value ?? ""}
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard3.label ?? ""}
                  </p>
                </article>

                <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">
                      {statsCard6.value ?? ""}
                      <span className="text-[24px] leading-8 text-[#666666]">{statsCard6.suffix ?? ""}</span>
                    </div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {statsCard6.summary ?? ""}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full">
              <div className="mx-auto flex w-full flex-col items-center gap-8">
                <SectionPill label={sections.testimonials.pill} />

                <div className="flex flex-col items-center gap-3 text-center">
                  <h3 className="type-h3 text-[#222222]">{sections.testimonials.title}</h3>
                  <p className="type-p3 max-w-[900px] text-black/70">{sections.testimonials.description}</p>
                </div>

                <div className="grid w-full gap-5 md:grid-cols-3">
                  <div className="flex flex-col gap-5">
                    {testimonials[0] ? (
                      <TestimonialCard
                        testimonial={testimonials[0]}
                        tone="dark"
                        className="flex min-h-[410px] flex-1 flex-col justify-between"
                        topRightBadge={
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-white/15">
                            <img src="/testimonials/tfa-logo.jpg" alt="TFA logo" className="h-full w-full object-cover" />
                          </div>
                        }
                      />
                    ) : null}

                    {testimonials[4] ? (
                      <TestimonialCard
                        testimonial={testimonials[4]}
                        tone="light"
                        topRightBadge={
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-[#2B2B2B]"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4.5 w-4.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M8 5.2 5 6.4 2.8 10l3.2 2.4L8 10v9.4c2.7.2 5.3.2 8 0V10l2 2.4 3.2-2.4L19 6.4l-3-1.2c-1 1.6-2.5 2.4-4 2.4s-3-.8-4-2.4Z" />
                            </svg>
                          </div>
                        }
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-5">
                    {[1, 3, 5].map((index) =>
                      testimonials[index] ? (
                        <TestimonialCard key={testimonials[index].name} testimonial={testimonials[index]} tone="light" />
                      ) : null,
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    {testimonials[2] ? (
                      <TestimonialCard testimonial={testimonials[2]} tone="light" />
                    ) : null}

                    {testimonials[6] ? (
                      <TestimonialCard
                        testimonial={testimonials[6]}
                        tone="dark"
                        className="flex min-h-[410px] flex-1 flex-col justify-between"
                      />
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
            avatarSrc={testimonial.avatarSrc}
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
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
              <div className="flex flex-col items-start gap-4">
                <SectionPill label={sections.journey.pill} />
                <div className="flex w-full items-start justify-between">
                  <h2 className="type-h3 max-w-[520px] text-[#222222]">{sections.journey.title}</h2>
                  <Link
                    href="https://calendar.app.google/Cc4kuM7cqTyiXQx66"
                    className="type-p2 hidden items-center gap-2 text-[#222222] underline underline-offset-4 md:inline-flex lg:hidden"
                  >
                    <span>{sections.journey.cta}</span>
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 lg:justify-start lg:pl-8">
                <p className="type-p3 text-black/70">{sections.journey.intro}</p>
                <Link
                  href="https://calendar.app.google/Cc4kuM7cqTyiXQx66"
                  className="type-p2 inline-flex items-center gap-2 text-[#222222] underline underline-offset-4 md:hidden lg:inline-flex"
                >
                  <span>{sections.journey.cta}</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div className={`${recognitionRowClass} rounded-[10px] p-3 lg:!items-start`}>
                <div className="hidden w-full p-3 md:order-first md:col-span-2 md:block lg:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      {journey.featured.href ? (
                        <a
                          href={journey.featured.href}
                          target={journey.featured.external ? "_blank" : undefined}
                          rel={journey.featured.external ? "noopener noreferrer" : undefined}
                          className="block"
                        >
                          <h3 className="type-h5 text-[#222222]">{journey.featured.company}</h3>
                          <p className="type-p3 mt-1 text-[#7B7B7B]">{journey.featured.date}</p>
                        </a>
                      ) : (
                        <div>
                          <h3 className="type-h5 text-[#222222]">{journey.featured.company}</h3>
                          <p className="type-p3 mt-1 text-[#7B7B7B]">{journey.featured.date}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap justify-end gap-2">
                      {journey.featured.tags.map((tag) => (
                        <span key={`${tag}-tablet-title`} className={featuredTagClass}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                  <div className="p-3 md:hidden lg:block">
                    {journey.featured.href ? (
                      <a
                        href={journey.featured.href}
                        target={journey.featured.external ? "_blank" : undefined}
                        rel={journey.featured.external ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        <h3 className="type-h5 text-[#222222]">{journey.featured.company}</h3>
                        <p className="type-p3 mt-1 text-[#7B7B7B]">{journey.featured.date}</p>
                      </a>
                    ) : (
                      <div>
                        <h3 className="type-h5 text-[#222222]">{journey.featured.company}</h3>
                        <p className="type-p3 mt-1 text-[#7B7B7B]">{journey.featured.date}</p>
                      </div>
                    )}
                  </div>

                  <div className="w-full max-w-[530px] overflow-hidden rounded-[10px] bg-black md:max-w-none lg:max-w-[530px]" style={{ aspectRatio: "530 / 298" }}>
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

                  <div className="mt-4 hidden md:block lg:hidden">
                    {journey.featured.href ? (
                      <a
                        href={journey.featured.href}
                        target={journey.featured.external ? "_blank" : undefined}
                        rel={journey.featured.external ? "noopener noreferrer" : undefined}
                        className={recognitionSummaryClass}
                      >
                        {journey.featured.summary}
                      </a>
                    ) : (
                      <p className={recognitionSummaryClass}>{journey.featured.summary}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:col-start-2 md:gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-5">
                  <div className="md:order-2 md:pt-4 md:hidden lg:order-none lg:pt-0 lg:block">
                    {journey.featured.href ? (
                      <a
                        href={journey.featured.href}
                        target={journey.featured.external ? "_blank" : undefined}
                        rel={journey.featured.external ? "noopener noreferrer" : undefined}
                        className={recognitionSummaryClass}
                      >
                        {journey.featured.summary}
                      </a>
                    ) : (
                      <p className={recognitionSummaryClass}>{journey.featured.summary}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap justify-start gap-2 md:hidden lg:flex lg:flex-nowrap lg:justify-end">
                    {journey.featured.tags.map((tag) => (
                      <span key={tag} className={featuredTagClass}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {journey.entries.map((entry) => {
                const rowContent = (
                  <>
                    <div>
                      <h3 className="type-h5 text-[#222222]">{entry.company}</h3>
                      <p className="type-p3 mt-1 text-[#7B7B7B]">{entry.date}</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:col-start-2 md:gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-5">
                      <p className={recognitionSummaryClass}>{entry.summary}</p>
                      <div className="flex flex-wrap justify-start gap-2 lg:flex-nowrap lg:justify-end">
                        {entry.tags.map((tag) => (
                          <span key={tag} className={defaultTagClass}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )

                return entry.href ? (
                  <a
                    key={`${entry.company}-${entry.date}`}
                    href={entry.href}
                    target={entry.external ? "_blank" : undefined}
                    rel={entry.external ? "noopener noreferrer" : undefined}
                    className={`${recognitionRowClass} ${linkedRecognitionRowClass} last:border-b-0 last:pb-0`}
                  >
                    {rowContent}
                  </a>
                ) : (
                  <div
                    key={`${entry.company}-${entry.date}`}
                    className={`${recognitionRowClass} last:border-b-0 last:pb-0`}
                  >
                    {rowContent}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}
