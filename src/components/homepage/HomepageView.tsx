"use client"

import type { ReactNode } from "react"
import Link from "next/link"

import { Container } from "@/components/Container"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { HomepageHeroSection } from "@/components/homepage/sections/HomepageHeroSection"
import { PastClientsSection } from "@/components/homepage/sections/PastClientsSection"
import { HomepageWhatIDoSection } from "@/components/homepage/sections/HomepageWhatIDoSection"
import { PullQuote } from "@/components/PullQuote"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { PortfolioFounderSections } from "@/components/work/PortfolioFounderSections"

import { getHomepageText } from "./homepage"
import {
  AwardRow,
  InsightAvatarStack,
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
  "transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#F5F7FA] hover:shadow-[0_12px_30px_rgba(34,34,34,0.06)]"
const featuredTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#2B2B2B] px-4 text-[16px] leading-6 text-white"
const defaultTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#EFEFEF] px-4 text-[16px] leading-6 text-[#3A3A3A] outline outline-1 outline-black/10"
const hoverLiftClass = "transition-transform duration-300 hover:-translate-y-0.5"
const journeyCtaClass = `type-p2 inline-flex items-center gap-2 text-[#222222] underline underline-offset-4 ${hoverLiftClass}`

function InsightShapePair({
  largeShapeClassName,
  smallShapeClassName,
}: {
  largeShapeClassName: string
  smallShapeClassName: string
}) {
  return (
    <>
      <MotionReveal preset="shape" className={largeShapeClassName} />
      <MotionReveal preset="shape" delay={0.08} className={smallShapeClassName} />
    </>
  )
}

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
  const [statsCard1, statsCard2, statsCard3, statsCard4, statsCard5, statsCard6] =
    stats.cards as HomepageInsightCard[]

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <HomepageHeroSection hero={hero} />

      <PastClientsSection motionStyle="homepage" />

      <HomepageWhatIDoSection section={sections.experiences} cards={experienceCardCopy} motionStyle="homepage" />

      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
          <div className="flex flex-col gap-20">
            <div className="grid gap-10 lg:grid-cols-[482px_minmax(0,769px)] lg:justify-between lg:gap-12">
              <MotionReveal preset="hero" className="flex flex-col items-start gap-3" delay={0.02}>
                <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                  <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                  <span className="type-p2 text-[#222222]">{sections.awards.pill}</span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <h2 className="type-h3 max-w-[396px] text-[#222222]">{sections.awards.title}</h2>
                  <p className="type-p2 max-w-[482px] text-black/70">{sections.awards.description}</p>
                </div>
              </MotionReveal>

              <div className="flex flex-col gap-6">
                {awards.map((item, index) => (
                  <MotionReveal
                    key={`${item.rank}-${item.year}-${item.title}`}
                    preset="cardStrong"
                    delay={0.08 + index * 0.05}
                  >
                    <AwardRow {...item} />
                  </MotionReveal>
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
            <MotionReveal preset="hero" className="flex w-full flex-col items-start gap-5" delay={0.02}>
              <SectionPill label={sections.insights.pill} />

              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">{sections.insights.title}</h2>
                  <p className="type-p3 max-w-[962px] text-black/80">{sections.insights.description}</p>
                </div>

              </div>
            </MotionReveal>

            <div className="grid w-full gap-5 md:grid-cols-3">
              <MotionReveal preset="cardStrong" className="flex h-full flex-col gap-4" delay={0.06}>
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
                  <InsightShapePair
                    largeShapeClassName="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                    smallShapeClassName="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                  />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    <AnimatedMetricValue value={statsCard2.value ?? ""} />
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard2.label ?? ""}
                  </p>
                </article>
              </MotionReveal>

              <MotionReveal preset="cardStrong" delay={0.14} className="flex h-full flex-col gap-4 md:order-3">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:items-center md:justify-center md:gap-4">
                    <div className="type-h5 text-black">{statsCard4.title ?? ""}</div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {statsCard4.subtitle ?? ""}
                    </p>
                  </div>
                </article>

                <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <InsightShapePair
                    largeShapeClassName="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                    smallShapeClassName="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                  />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    <AnimatedMetricValue value={statsCard5.value ?? ""} />
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard5.label ?? ""}
                  </p>
                </article>
              </MotionReveal>

              <MotionReveal preset="cardStrong" delay={0.22} className="flex h-full flex-col gap-4 md:order-2">
                <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <InsightShapePair
                    largeShapeClassName="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                    smallShapeClassName="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                  />
                  <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                    <AnimatedMetricValue value={statsCard3.value ?? ""} />
                  </div>
                  <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                    {statsCard3.label ?? ""}
                  </p>
                </article>

                <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">
                      {!statsCard6.suffix || !/[0-9/]/.test(statsCard6.suffix) ? (
                        <AnimatedMetricValue value={statsCard6.value ?? ""} />
                      ) : (
                        <span>{statsCard6.value ?? ""}</span>
                      )}
                      <span className="text-[24px] leading-8 text-[#666666]">{statsCard6.suffix ?? ""}</span>
                    </div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      {statsCard6.summary ?? ""}
                    </p>
                  </div>
                </article>
              </MotionReveal>
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

                <MotionReveal preset="hero" className="flex flex-col items-center gap-3 text-center" delay={0.02}>
                  <h3 className="type-h3 text-[#222222]">{sections.testimonials.title}</h3>
                  <p className="type-p3 max-w-[900px] text-black/70">{sections.testimonials.description}</p>
                </MotionReveal>

                <div className="grid w-full gap-5 md:grid-cols-3">
                  <div className="flex flex-col gap-5">
                    {testimonials[0] ? (
                      <MotionReveal preset="cardStrong" delay={0.06}>
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
                      </MotionReveal>
                    ) : null}

                    {testimonials[4] ? (
                      <MotionReveal preset="cardStrong" delay={0.18}>
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
                      </MotionReveal>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-5">
                    {[1, 3, 5].map((index, itemIndex) =>
                      testimonials[index] ? (
                        <MotionReveal key={testimonials[index].name} preset="cardStrong" delay={0.12 + itemIndex * 0.08}>
                          <TestimonialCard testimonial={testimonials[index]} tone="light" />
                        </MotionReveal>
                      ) : null,
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    {testimonials[2] ? (
                      <MotionReveal preset="cardStrong" delay={0.1}>
                        <TestimonialCard testimonial={testimonials[2]} tone="light" />
                      </MotionReveal>
                    ) : null}

                    {testimonials[6] ? (
                      <MotionReveal preset="cardStrong" delay={0.24}>
                        <TestimonialCard
                          testimonial={testimonials[6]}
                          tone="dark"
                          className="flex min-h-[410px] flex-1 flex-col justify-between"
                        />
                      </MotionReveal>
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
          <MotionReveal preset="section" delay={0.02}>
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
          </MotionReveal>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <MotionReveal preset="section" className="rounded-[10px] bg-white p-6 md:p-10 lg:p-12" delay={0.02}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
              <MotionReveal preset="hero" className="flex flex-col items-start gap-4" delay={0.04}>
                <SectionPill label={sections.journey.pill} />
                <div className="flex w-full items-start justify-between">
                  <h2 className="type-h3 max-w-[520px] text-[#222222]">{sections.journey.title}</h2>
                <Link
                  href="https://calendar.app.google/Cc4kuM7cqTyiXQx66"
                  className={`${journeyCtaClass} hidden md:inline-flex lg:hidden`}
                >
                  <span>{sections.journey.cta}</span>
                  <ArrowUpRightIcon />
                  </Link>
                </div>
              </MotionReveal>

              <MotionReveal preset="flow" delay={0.1} className="flex flex-col items-start gap-5 lg:justify-start lg:pl-8">
                <p className="type-p3 text-black/70">{sections.journey.intro}</p>
                <Link
                  href="https://calendar.app.google/Cc4kuM7cqTyiXQx66"
                  className={`${journeyCtaClass} md:hidden lg:inline-flex`}
                >
                  <span>{sections.journey.cta}</span>
                  <ArrowUpRightIcon />
                </Link>
              </MotionReveal>
            </div>

            <div className="mt-10 space-y-5">
              <MotionReveal preset="cardStrong" className={`${recognitionRowClass} rounded-[10px] p-3 lg:!items-start`} delay={0.12}>
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

                  <MotionReveal
                    preset="image"
                    className="w-full max-w-[530px] overflow-hidden rounded-[10px] bg-black md:max-w-none lg:max-w-[530px]"
                    style={{ aspectRatio: "530 / 298" }}
                  >
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
                  </MotionReveal>

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
              </MotionReveal>

              {journey.entries.map((entry, index) => {
                const rowDelay = 0.18 + index * 0.06
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
                  <MotionReveal key={`${entry.company}-${entry.date}`} preset="cardStrong" delay={rowDelay}>
                    <a
                      href={entry.href}
                      target={entry.external ? "_blank" : undefined}
                      rel={entry.external ? "noopener noreferrer" : undefined}
                      className={`${recognitionRowClass} ${linkedRecognitionRowClass} last:border-b-0 last:pb-0`}
                    >
                      {rowContent}
                    </a>
                  </MotionReveal>
                ) : (
                  <MotionReveal key={`${entry.company}-${entry.date}`} preset="cardStrong" delay={rowDelay}>
                    <div
                      className={`${recognitionRowClass} last:border-b-0 last:pb-0`}
                    >
                      {rowContent}
                    </div>
                  </MotionReveal>
                )
              })}
            </div>
          </MotionReveal>
        </Container>
      </section>

    </main>
  )
}
