"use client"

import { useState } from "react"

import Link from "next/link"

import { Container } from "@/components/Container"
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons/ui-icons"

import {
  awardItems,
  clientItems,
  desktopHeroLogoAxisX,
  desktopHeroRailLabelX,
  desktopHeroRailLineX,
  desktopHeroYearLabelX,
  experienceCards,
  insightFilters,
  insightSortOptions,
  repeatedHighlightProjects,
} from "./data"
import { getHomepageText } from "./homepage"
import {
  AwardRow,
  ClientCard,
  ExperienceCard,
  HighlightCard,
  InsightAvatarStack,
  InsightStars,
  MobileSelectionSheet,
  SectionPill,
} from "./ui"

export default function Homepage() {
  const { hero, sections, stats, testimonial } = getHomepageText()
  const [selectedFilter, setSelectedFilter] = useState(insightFilters[0])
  const [selectedSort, setSelectedSort] = useState(insightSortOptions[0])
  const [openMobileSheet, setOpenMobileSheet] = useState<"filter" | "sort" | null>(null)

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="bg-[#F3F3F3] px-0 md:px-0 lg:px-0">
          <div className="bg-[#F3F3F3] px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10 lg:hidden">
            <div className="mx-auto max-w-[440px]">
              <div className="flex justify-center">
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

              <div className="mt-10 text-center md:mt-12">
                <div className="type-display-hero text-[#222222]">{hero.title}</div>
                <div className="type-ui-lg mt-4 text-[#222222]">{hero.subtitle}</div>
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

              <div className="type-ui-md mt-8 text-center text-[#222222] md:mt-12">
                {hero.scroll}
              </div>
            </div>
          </div>

          <div
            className="relative hidden overflow-hidden bg-[#F3F3F3] lg:block"
            style={{ height: "938px" }}
          >
            <img
              src="/jim/hero-jim-01-cutout.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 z-0 w-auto max-w-none"
              style={{ right: "-36px", height: "760px" }}
            />

            <div
              className="type-display-hero absolute z-10 text-[#222222]"
              style={{ left: "177px", top: "367px" }}
            >
              {hero.title}
            </div>

            <div
              className="type-ui-lg absolute z-10 text-[#222222]"
              style={{ left: "177px", top: "612px" }}
            >
              {hero.subtitle}
            </div>

            <div
              className="type-ui-md absolute z-10 text-[#222222]"
              style={{ left: "177px", top: "860px" }}
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
              style={{ left: "184px", top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: "205px", top: "204px" }}
            >
              {hero.projectCompletedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: "203px", top: "261px" }}
            >
              {hero.projectCompletedLabel}
            </div>

            <div
              className="type-stat-plus absolute z-10 text-black"
              style={{ left: "360px", top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: "381px", top: "204px" }}
            >
              {hero.startupRaisedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: "381px", top: "261px" }}
            >
              {hero.startupRaisedLabel}
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar — replace placeholder divs with <img src="/logos/name.svg" alt="Name" className="h-8 w-auto" /> when ready */}
      <section className="w-full bg-[#F3F3F3]">
        <Container className="px-0 md:px-0 lg:px-0">
        <div className="grid grid-cols-4">
          {[
            { src: "/company-logos/svg/disney-logo.svg",           alt: "Disney" },
            { src: "/company-logos/svg/hbo-logo.svg",              alt: "HBO" },
            { src: "/company-logos/svg/directv-logo.svg",          alt: "DirecTV" },
            { src: "/company-logos/svg/shopify-logo.svg",          alt: "Shopify" },
            { src: "/company-logos/svg/bcg-logo.svg",              alt: "BCG" },
            { src: "/company-logos/svg/publicis-sapient-logo.svg", alt: "Publicis Sapient" },
            { src: "/company-logos/svg/bc-logo.svg",               alt: "Boston Consulting" },
            { src: "/company-logos/svg/aa-logo.svg",               alt: "American Airlines" },
          ].map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center py-14 px-10">
              <img src={logo.src} alt={logo.alt} width={160} height={40} />
            </div>
          ))}
        </div>
        </Container>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex max-w-[674px] flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{sections.experiencesPill}</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]">
                  {sections.experiencesTitle}
                </h2>
                <p className="type-p3 max-w-[840px] text-[#7B7B7B]">
                  {sections.experiencesDescription}
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
          <div className="grid gap-10 lg:grid-cols-[482px_minmax(0,769px)] lg:justify-between lg:gap-12">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{sections.awardsPill}</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <h2 className="type-h3 max-w-[396px] text-[#222222]">{sections.awardsTitle}</h2>
                <p className="type-p2 max-w-[482px] text-black/70">{sections.awardsDescription}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {awardItems.map((item) => (
                <AwardRow key={`${item.rank}-${item.year}-${item.title}`} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{sections.clientsPill}</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222]">{sections.clientsTitle}</h2>
              </div>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {clientItems.map((item) => (
                <ClientCard key={`${item.name}-${item.year}`} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-5">
                <SectionPill label={sections.highlightsPill} />

                <div className="flex w-full flex-col gap-5">
                  <h2 className="type-h3 text-[#222222]">{sections.highlightsTitle}</h2>

                  <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <p className="type-p3 max-w-[962px] text-black/80">{sections.highlightsDescription}</p>

                    <Link
                      href="/work"
                      className="inline-flex self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white lg:self-auto"
                    >
                      <span>{sections.highlightsCta}</span>
                      <ArrowUpRightIcon />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full items-center gap-3 md:hidden">
                  <button
                    type="button"
                    className="inline-flex min-h-[52px] flex-1 items-center justify-between rounded-full bg-white px-5 text-[16px] leading-6 text-[#222222] shadow-[0_8px_20px_rgba(34,34,34,0.05)]"
                    onClick={() => setOpenMobileSheet("filter")}
                  >
                    <span className="truncate">Filter: {selectedFilter}</span>
                    <ChevronDownIcon />
                  </button>

                  <button
                    type="button"
                    className="inline-flex min-h-[52px] items-center justify-between gap-3 rounded-full bg-white px-5 text-[16px] leading-6 text-[#222222] shadow-[0_8px_20px_rgba(34,34,34,0.05)]"
                    onClick={() => setOpenMobileSheet("sort")}
                  >
                    <span>{selectedSort}</span>
                    <ChevronDownIcon />
                  </button>
                </div>

                <div className="hidden flex-wrap items-center gap-2 md:flex">
                  {insightFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`inline-flex rounded-full px-5 py-2.5 text-[14px] ${
                        selectedFilter === filter ? "bg-[#2B2B2B] text-white" : "bg-white text-[#222222]"
                      }`}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="hidden items-center gap-5 self-end md:flex lg:self-auto">
                  <span className="text-[14px] text-black/80">{sections.sortByLabel}</span>
                  <button
                    type="button"
                    className="inline-flex h-9 items-center gap-1 rounded-full bg-white px-5 py-2.5 text-[14px] text-[#222222]"
                  >
                    <span>{selectedSort}</span>
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid w-full gap-7 md:grid-cols-2 xl:grid-cols-4">
              {repeatedHighlightProjects.map(({ key, ...project }) => (
                <HighlightCard key={key} {...project} />
              ))}
            </div>
          </div>
        </Container>

        <MobileSelectionSheet
          open={openMobileSheet === "filter"}
          title={sections.filterSheetTitle}
          options={insightFilters}
          selected={selectedFilter}
          onClose={() => setOpenMobileSheet(null)}
          onSelect={setSelectedFilter}
        />

        <MobileSelectionSheet
          open={openMobileSheet === "sort"}
          title={sections.sortSheetTitle}
          options={insightSortOptions}
          selected={selectedSort}
          onClose={() => setOpenMobileSheet(null)}
          onSelect={setSelectedSort}
        />
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-5">
              <SectionPill label={sections.insightsPill} />

              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">{sections.insightsTitle}</h2>
                  <p className="type-p3 max-w-[962px] text-black/80">{sections.insightsDescription}</p>
                </div>

              </div>
            </div>

            <div className="grid w-full gap-5 xl:grid-cols-3">
              <div className="flex flex-col gap-4">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <InsightAvatarStack />
                    <div className="flex flex-col">
                      <div className="type-p2 text-black">{stats.clientsCount}</div>
                      <div className="type-ui-sm text-[#666666]">{stats.clientsSubtext}</div>
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">{stats.completedProjectsValue}</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    {stats.completedProjectsLabel}
                  </p>
                </article>
              </div>

              <article className="rounded-[10px] bg-white p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <InsightStars />
                  <div className="text-[72px] leading-none text-[#2B2B2B]">“</div>
                </div>

                <p className="type-p2 mt-6 max-w-[520px] text-[#2B2B2B]">
                  {testimonial.quote}
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#cfcfcf_0%,#f4f4f4_100%)] text-[#222222]">
                    {testimonial.initials}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="type-p2 text-[#2B2B2B]">{testimonial.name}</div>
                    <div className="type-ui-sm text-[#666666]">{testimonial.handle}</div>
                  </div>
                </div>
              </article>

              <div className="flex flex-col gap-4">
                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
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
    </main>
  )
}
