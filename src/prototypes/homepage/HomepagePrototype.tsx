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

export default function HomepageTestPage() {
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
                  src="/test/man-placeholder.png"
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[420px]"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-[#222222]">
                <div className="type-ui-sm">Product designer</div>
                <div className="h-px w-16 shrink-0 bg-[#222222]" />
                <div className="type-ui-sm">2024</div>
              </div>

              <div className="mt-10 text-center md:mt-12">
                <div className="type-display-hero text-[#222222]">Hello</div>
                <div className="type-ui-lg mt-4 text-[#222222]">— It’s Finox a design wizerd</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">200</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">
                    Project completed
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">50</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">Startup raised</div>
                </div>
              </div>

              <div className="type-ui-md mt-8 text-center text-[#222222] md:mt-12">
                Scroll down ↓
              </div>
            </div>
          </div>

          <div className="relative hidden h-[938px] overflow-hidden bg-[#F3F3F3] lg:block">
            <img
              src="/test/man-placeholder.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 right-[-36px] z-0 h-[760px] w-auto max-w-none"
            />

            <div className="type-display-hero absolute left-[177px] top-[367px] z-10 text-[#222222]">
              Hello
            </div>

            <div className="type-ui-lg absolute left-[177px] top-[612px] z-10 text-[#222222]">
              — It’s Finox a design wizerd
            </div>

            <div className="type-ui-md absolute left-[177px] top-[860px] z-10 text-[#222222]">
              Scroll down ↓
            </div>

            <div
              className="absolute top-[168px] z-10 h-[701px] w-[120px] -translate-x-1/2"
              style={{ left: `${desktopHeroLogoAxisX}px` }}
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
                  Product designer
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
                  2024
                </div>
              </div>
            </div>

            <div className="type-stat-plus absolute left-[184px] top-[208px] z-10 text-black">
              +
            </div>
            <div className="type-stat-number absolute left-[205px] top-[204px] z-10 text-[#404040]">
              200
            </div>
            <div className="type-ui-sm absolute left-[203px] top-[261px] z-10 text-[#78716C]">
              Project completed
            </div>

            <div className="type-stat-plus absolute left-[360px] top-[208px] z-10 text-black">
              +
            </div>
            <div className="type-stat-number absolute left-[381px] top-[204px] z-10 text-[#404040]">
              50
            </div>
            <div className="type-ui-sm absolute left-[381px] top-[261px] z-10 text-[#78716C]">
              Startup raised
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex max-w-[674px] flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Experiences</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]">
                  Why you will work with me
                </h2>
                <p className="type-p3 max-w-[840px] text-[#7B7B7B]">
                  Every design decision I make is backed by strategy, research, and a commitment
                  to delivering real value. I turn complex challenges into clean, delightful user
                  experiences
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
                <span className="type-p2 text-[#222222]">Experiences</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <h2 className="type-h3 max-w-[396px] text-[#222222]">My Achievements &amp; Awards</h2>
                <p className="type-p2 max-w-[482px] text-black/70">
                  Over the years, my love for creative problem-solving has evolved into a career
                  dedicated to crafting intuitive and impactful digital experiences.
                </p>
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
                <span className="type-p2 text-[#222222]">Our Clients</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222]">Some of our Best Customers</h2>
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
                <SectionPill label="Highlights projects" />

                <div className="flex w-full flex-col gap-5">
                  <h2 className="type-h3 text-[#222222]">Case Studies &amp; Project Highlights</h2>

                  <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <p className="type-p3 max-w-[962px] text-black/80">
                      Explore detailed case studies and highlights of recent projects. Learn about
                      the challenges faced, the design solutions implemented, and the outcomes
                      achieved.
                    </p>

                    <Link
                      href="/work"
                      className="inline-flex self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white lg:self-auto"
                    >
                      <span>See More</span>
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
                  <span className="text-[14px] text-black/80">Sort by:</span>
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
          title="Filter projects"
          options={insightFilters}
          selected={selectedFilter}
          onClose={() => setOpenMobileSheet(null)}
          onSelect={setSelectedFilter}
        />

        <MobileSelectionSheet
          open={openMobileSheet === "sort"}
          title="Sort projects"
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
              <SectionPill label="Latest Insights" />

              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">Latest Insights &amp; Trends</h2>
                  <p className="type-p3 max-w-[962px] text-black/80">
                    Stay updated with the latest in UI/UX design, product design, and industry
                    trends. Here, you&apos;ll find in-depth articles, case studies, and expert
                    opinions that offer valuable insights and inspiration for your next project.
                  </p>
                </div>

              </div>
            </div>

            <div className="grid w-full gap-5 xl:grid-cols-3">
              <div className="flex flex-col gap-4">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <InsightAvatarStack />
                    <div className="flex flex-col">
                      <div className="type-p2 text-black">75+ Clients</div>
                      <div className="type-ui-sm text-[#666666]">Around the world Clients</div>
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">105+</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    Completed projects for growing brands
                  </p>
                </article>
              </div>

              <article className="rounded-[10px] bg-white p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <InsightStars />
                  <div className="text-[72px] leading-none text-[#2B2B2B]">“</div>
                </div>

                <p className="type-p2 mt-6 max-w-[520px] text-[#2B2B2B]">
                  I like their services and their professionalism and attention to details and
                  commitment delivering hign - quality results truly exceeded all our team
                  expectations and meet that on time.
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#cfcfcf_0%,#f4f4f4_100%)] text-[#222222]">
                    TA
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="type-p2 text-[#2B2B2B]">Tawanna Afumba</div>
                    <div className="type-ui-sm text-[#666666]">intransigent_toejam_15</div>
                  </div>
                </div>
              </article>

              <div className="flex flex-col gap-4">
                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">92%</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    Client retention rate over the past 3 years
                  </p>
                </article>

                <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">
                      4.9<span className="text-[24px] leading-8 text-[#666666]">/5</span>
                    </div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      We&apos;ve delivered 56+projects that help companies generate real results.
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
