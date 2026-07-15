"use client"

import { BookCallCta } from "@/components/BookCallCta"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

const recognitionRowClass =
  "group relative isolate grid gap-5 bg-transparent py-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:items-start lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_auto] lg:gap-8 lg:items-start"
const recognitionSummaryClass =
  "type-p3 w-full max-w-[54ch] text-[#5B5B5B]"
const featuredRecognitionRowClass =
  "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:items-start lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-8 lg:gap-y-3"
const featuredSummaryClass = "type-p3 w-full max-w-[54ch] text-[#545454]"
const linkedRecognitionRowClass =
  "cursor-pointer focus-visible:outline-[3px] focus-visible:outline-[#447ACB] focus-visible:shadow-[0_0_0_3px_rgba(68,122,203,0.22),0_12px_40px_rgba(68,122,203,0.48)]"
const featuredTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#2B2B2B] px-4 text-[14px] leading-6 tracking-[0.01em] text-white shadow-[0_1px_2px_rgba(34,34,34,0.08)]"
const defaultTagClass =
  "inline-flex min-h-[32px] items-center rounded-[999px] bg-[#EFEAE2] px-4 text-[14px] leading-6 tracking-[0.01em] text-[#4B4B4B] outline outline-1 outline-black/5 transition-colors duration-200 group-hover:bg-[#222222] group-hover:text-[#F4F1EA] group-hover:outline-[#222222]"
const featuredWidgetClass =
  "rounded-[24px] border border-black/5 bg-[#FCFBF7] p-5 md:p-7 lg:p-8"

type HomepageJourneySectionProps = {
  section: HomepageText["sections"]["recognition"]
  journey: HomepageText["journey"]
}

export function HomepageJourneySection({
  section,
  journey,
}: HomepageJourneySectionProps) {
  const trackHomepageOutbound = (label: string, href: string) => {
    trackEvent("outbound_link_click", {
      location: "homepage_hero",
      label,
      href,
      page_path: getCurrentPagePath(),
    })
  }

  const featured = journey.featured

  return (
    <HomepageSectionShell className="bg-[#F3F3F3]">
      <div className="flex w-full flex-col gap-8 md:gap-10">
        <MotionReveal preset="hero" className="w-full" delay={0.04}>
            <HomepageSectionHeader label={section.pill}>
              <div
              className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start lg:grid lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:items-start lg:gap-10`}
            >
              <h2 className="type-h2 max-w-[520px] text-[#222222]">
                {section.title}
              </h2>
              <div className="flex flex-col items-start gap-5 lg:pt-1">
                <p className="type-p2 text-black/70">{section.intro}</p>
                <BookCallCta location="homepage_journey" />
              </div>
            </div>
          </HomepageSectionHeader>
        </MotionReveal>

        <MotionReveal
          preset="section"
          className="w-full"
          delay={0.02}
        >
          <div className="flex w-full flex-col gap-8 md:gap-10">
            <MotionReveal preset="cardStrong" className={featuredWidgetClass} delay={0.12}>
              <div
                className={`${featuredRecognitionRowClass} rounded-[20px] bg-transparent p-0 md:gap-8 lg:gap-x-8 lg:gap-y-3`}
              >
                <div className="hidden w-full md:order-first md:col-span-2 md:block lg:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      {featured.href ? (
                        <a
                          href={featured.href}
                          target={featured.external ? "_blank" : undefined}
                          rel={featured.external ? "noopener noreferrer" : undefined}
                          className="block"
                          onClick={() => {
                            if (featured.external) {
                              trackHomepageOutbound(featured.company, featured.href)
                            }
                          }}
                        >
                          <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                          <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                        </a>
                      ) : (
                        <div>
                          <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                          <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap justify-end gap-2">
                      {featured.tags.map((tag) => (
                        <span key={`${tag}-tablet-title`} className={featuredTagClass}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden w-full lg:block lg:col-start-1 lg:row-start-1">
                  {featured.href ? (
                    <a
                      href={featured.href}
                      target={featured.external ? "_blank" : undefined}
                      rel={featured.external ? "noopener noreferrer" : undefined}
                      className="block"
                      onClick={() => {
                        if (featured.external) {
                          trackHomepageOutbound(featured.company, featured.href)
                        }
                      }}
                    >
                      <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                      <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                    </a>
                  ) : (
                    <div>
                      <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                      <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2 lg:col-start-1 lg:row-start-2">
                  <div className="md:hidden">
                    {featured.href ? (
                      <a
                        href={featured.href}
                        target={featured.external ? "_blank" : undefined}
                        rel={featured.external ? "noopener noreferrer" : undefined}
                        className="block"
                        onClick={() => {
                          if (featured.external) {
                            trackHomepageOutbound(featured.company, featured.href)
                          }
                        }}
                      >
                        <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                        <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                      </a>
                    ) : (
                      <div>
                        <h3 className="type-h6 text-[#222222]">{featured.company}</h3>
                        <p className="type-p4 mt-1 text-[#767676]">{featured.date}</p>
                      </div>
                    )}
                  </div>

                  <MotionReveal
                    preset="image"
                    className="relative w-full max-w-[530px] overflow-hidden rounded-[14px] bg-black md:max-w-none lg:max-w-[530px]"
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
                      className="absolute inset-0 block h-full w-full border-0"
                    />
                  </MotionReveal>

                  <div className="mt-4 hidden md:block lg:hidden">
                    {featured.href ? (
                      <a
                        href={featured.href}
                        target={featured.external ? "_blank" : undefined}
                        rel={featured.external ? "noopener noreferrer" : undefined}
                        className={`${recognitionSummaryClass} md:max-w-none`}
                        onClick={() => {
                          if (featured.external) {
                            trackHomepageOutbound(featured.company, featured.href)
                          }
                        }}
                      >
                        {featured.summary}
                      </a>
                    ) : (
                      <p className={`${recognitionSummaryClass} md:max-w-none`}>{featured.summary}</p>
                    )}
                  </div>
                </div>

                <div className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:pt-1">
                  <div className="flex flex-wrap justify-start gap-2 lg:flex-nowrap lg:justify-end">
                    {featured.tags.map((tag) => (
                      <span key={tag} className={featuredTagClass}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block lg:col-start-2 lg:row-start-2">
                  {featured.href ? (
                    <a
                      href={featured.href}
                      target={featured.external ? "_blank" : undefined}
                      rel={featured.external ? "noopener noreferrer" : undefined}
                      className={featuredSummaryClass}
                      onClick={() => {
                        if (featured.external) {
                          trackHomepageOutbound(featured.company, featured.href)
                        }
                      }}
                    >
                      {featured.summary}
                    </a>
                  ) : (
                    <p className={featuredSummaryClass}>{featured.summary}</p>
                  )}
                </div>
              </div>
            </MotionReveal>

            <div className="flex flex-col divide-y divide-black/10 px-4 md:px-6 lg:px-8">
              {journey.entries.map((entry, index) => {
                const rowDelay = 0.18 + index * 0.06
                const rowContent = (
                  <>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:block">
                        <h3 className="type-h6 text-[#222222] transition-colors duration-200 group-hover:text-[#447ACB]">
                          {entry.company}
                        </h3>
                        <div className="flex flex-wrap gap-2 md:hidden">
                          {entry.tags.map((tag) => (
                            <span key={`${entry.company}-${tag}`} className={`${defaultTagClass} type-p4`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="type-p4 mt-1 text-[#767676] transition-colors duration-200 group-hover:text-[#222222]">
                        {entry.date}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:col-start-2 md:gap-5 lg:col-start-2 lg:pt-1">
                      <p className={`${recognitionSummaryClass} transition-colors duration-200 group-hover:text-[#447ACB]`}>
                        {entry.summary}
                      </p>
                    </div>
                    <div className="hidden flex-wrap justify-start gap-2 md:col-start-2 md:flex lg:col-start-3 lg:justify-end">
                      {entry.tags.map((tag) => (
                        <span key={tag} className={`${defaultTagClass} type-p4`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )

                return entry.href ? (
                  <MotionReveal key={`${entry.company}-${entry.date}`} preset="section" delay={rowDelay}>
                    <a
                      href={entry.href}
                      target={entry.external ? "_blank" : undefined}
                      rel={entry.external ? "noopener noreferrer" : undefined}
                      className={`${recognitionRowClass} ${linkedRecognitionRowClass}`}
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
                  <MotionReveal key={`${entry.company}-${entry.date}`} preset="section" delay={rowDelay}>
                    <div className={recognitionRowClass}>{rowContent}</div>
                  </MotionReveal>
                )
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </HomepageSectionShell>
  )
}
