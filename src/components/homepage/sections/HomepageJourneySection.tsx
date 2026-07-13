"use client"

import Link from "next/link"

import { MotionReveal } from "@/components/motion/MotionReveal"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

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
const journeyCtaClass = `type-p2 inline-flex min-h-[44px] items-center gap-2 text-[#222222] underline underline-offset-4 ${hoverLiftClass}`

type HomepageJourneySectionProps = {
  section: HomepageText["sections"]["journey"]
  journey: HomepageText["journey"]
  bookCallHref: string
  bookCallLabel: string
}

export function HomepageJourneySection({
  section,
  journey,
  bookCallHref,
  bookCallLabel,
}: HomepageJourneySectionProps) {
  const trackHomepageBookCall = () => {
    trackEvent("book_call_click", {
      location: "homepage_hero",
      label: bookCallLabel,
      href: bookCallHref,
      page_path: getCurrentPagePath(),
    })
  }

  const trackHomepageOutbound = (label: string, href: string) => {
    trackEvent("outbound_link_click", {
      location: "homepage_hero",
      label,
      href,
      page_path: getCurrentPagePath(),
    })
  }

  return (
    <HomepageSectionShell className="bg-[#F3F3F3]">
      <div className="flex w-full flex-col gap-8 md:gap-10">
        <MotionReveal preset="hero" className="w-full" delay={0.04}>
            <HomepageSectionHeader label={section.pill}>
              <div
              className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start lg:grid lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:items-start lg:gap-10`}
            >
              <h2 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} max-w-[520px] text-[#222222]`}>
                {section.title}
              </h2>
              <div className="flex flex-col items-start gap-5 lg:pt-1">
                <p className="type-p3 text-black/70">{section.intro}</p>
                <Link href={bookCallHref} className={journeyCtaClass} onClick={trackHomepageBookCall}>
                  <span>{section.cta}</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </HomepageSectionHeader>
        </MotionReveal>

        <MotionReveal preset="section" className="rounded-[10px] bg-white p-6 md:p-10 lg:p-12" delay={0.02}>
          <div className="space-y-5">
            <MotionReveal
              preset="cardStrong"
              className={`${recognitionRowClass} rounded-[10px] p-3 lg:!items-start`}
              delay={0.12}
            >
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
                      onClick={() => {
                        if (journey.featured.external) {
                          trackHomepageOutbound(journey.featured.company, journey.featured.href)
                        }
                      }}
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
                      onClick={() => {
                        if (journey.featured.external) {
                          trackHomepageOutbound(journey.featured.company, journey.featured.href)
                        }
                      }}
                    >
                      {journey.featured.summary}
                    </a>
                  ) : (
                    <p className={recognitionSummaryClass}>{journey.featured.summary}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 md:col-start-2 md:gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-5 lg:pt-8">
                <div className="md:order-2 md:pt-4 md:hidden lg:order-none lg:pt-0 lg:block">
                  {journey.featured.href ? (
                    <a
                      href={journey.featured.href}
                      target={journey.featured.external ? "_blank" : undefined}
                      rel={journey.featured.external ? "noopener noreferrer" : undefined}
                      className={recognitionSummaryClass}
                      onClick={() => {
                        if (journey.featured.external) {
                          trackHomepageOutbound(journey.featured.company, journey.featured.href)
                        }
                      }}
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
                  <div className="flex flex-col items-start gap-4 md:col-start-2 md:gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-5">
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
                    onClick={() => {
                      if (entry.external) {
                        trackHomepageOutbound(entry.company, entry.href)
                      }
                    }}
                  >
                    {rowContent}
                  </a>
                </MotionReveal>
              ) : (
                <MotionReveal key={`${entry.company}-${entry.date}`} preset="cardStrong" delay={rowDelay}>
                  <div className={`${recognitionRowClass} last:border-b-0 last:pb-0`}>{rowContent}</div>
                </MotionReveal>
              )
            })}
          </div>
        </MotionReveal>
      </div>
    </HomepageSectionShell>
  )
}
