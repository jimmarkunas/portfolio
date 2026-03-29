import { BeforeAfterComparison } from "@/components/case-study/BeforeAfterComparison"
import { DirecTVRevenueChart } from "@/components/case-study/DirecTVRevenueChart"
import { BlogCardGrid } from "@/components/case-study/BlogCardGrid"
import HeadlessCommerceDiagram from "@/app/diagrams/headless_commerce_react"
import dynamic from "next/dynamic"
const GlobalLocationsMap = dynamic(
  () => import("@/components/case-study/GlobalLocationsMap").then((m) => ({ default: m.GlobalLocationsMap })),
  { ssr: false }
)
const MuradArchitectureDiagram = dynamic(
  () => import("@/components/case-study/MuradArchitectureDiagram"),
  { ssr: false }
)
const BISystemDiagram = dynamic(
  () => import("@/components/case-study/bi-commerce-ecosystem-diagram"),
  { ssr: false }
)
const SCJCommerceArchitecture = dynamic(
  () => import("@/components/case-study/SCJCommerceArchitecture"),
  { ssr: false }
)
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import { CaseStudyHeroSection } from "@/components/case-study/template/CaseStudyHeroSection"
import { CaseStudyRecognitionSection } from "@/components/case-study/template/CaseStudyRecognitionSection"
import {
  HeroSwooshBackdrop,
  ProofPointArrowIcon,
} from "@/components/case-study/template/CaseStudyTemplateIcons"
import type { CaseStudyData } from "@/components/case-study/types"
import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { EyebrowPill } from "@/components/EyebrowPill"
import { PullQuote } from "@/components/PullQuote"
import { SectionShell } from "@/components/SectionShell"
import { StatCard } from "@/components/StatCard"
import { TagPill } from "@/components/TagPill"
import { Timeline } from "@/components/Timeline"

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const isFoh = data.slug === "foh"

  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <CaseStudyHeroSection data={data} />

      <section className="border-t border-[#222222]/8 bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-20">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,573px)_minmax(0,658px)] lg:justify-between lg:items-start">
              <div className="flex max-w-[573px] flex-col items-start gap-5">
                <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
                  {data.atAGlance.eyebrow}
                </EyebrowPill>

                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">{data.atAGlance.title}</h2>
                  <p className="type-p2 max-w-[573px] text-black/80">{data.atAGlance.copy}</p>
                </div>
              </div>

              <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2">
                {data.atAGlance.stats.map((card) => (
                  <StatCard
                    key={`${card.value}-${card.label}`}
                    value={card.value}
                    suffix={card.suffix}
                    label={card.label}
                    className="min-h-[176px] px-8 py-10"
                    valueClassName="text-center text-slate-800"
                    valueTextClassName="text-[56px] font-medium leading-[60px]"
                    suffixClassName="text-[36px] font-semibold leading-9"
                    labelClassName="type-p2 max-w-[220px] text-neutral-700"
                    contentClassName="gap-4"
                  />
                ))}
              </div>
            </div>

            <div className="relative w-full bg-white md:left-1/2 md:w-screen md:-translate-x-1/2">
              <Container className="relative overflow-visible py-6 md:py-8 lg:min-h-[552px] lg:py-[52px]">
                <div className="pointer-events-none absolute right-[620px] top-[12px] hidden opacity-50 lg:block">
                  <HeroSwooshBackdrop />
                </div>

                <div className={isFoh
                  ? "grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-8 lg:gap-y-5 xl:grid-cols-[minmax(0,573px)_minmax(0,658px)] xl:justify-between xl:gap-x-10"
                  : "grid gap-10 lg:grid-cols-[minmax(0,573px)_minmax(0,658px)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:justify-between lg:gap-x-10 lg:gap-y-5"}
                >
                  <div className={isFoh
                    ? "flex max-w-none flex-col items-start gap-5 lg:contents"
                    : "flex max-w-none flex-col items-start gap-5 lg:max-w-[573px] lg:contents"}
                  >
                    <EyebrowPill
                      className="lg:col-start-1 lg:row-start-1 lg:w-fit"
                      labelClassName="type-p2 text-[#222222]"
                    >
                      {data.problem.eyebrow}
                    </EyebrowPill>

                    <div className={isFoh
                      ? "max-w-none lg:col-start-1 lg:row-start-2 xl:max-w-[573px]"
                      : "max-w-none lg:col-start-1 lg:row-start-2 lg:max-w-[573px]"}
                    >
                      <h2 className="type-h3 text-[#222222]">{data.problem.title}</h2>
                    </div>

                    <CaseStudyMediaFrame
                      media={data.problem.media}
                      className={isFoh
                        ? "rounded-[24px] lg:col-start-1 lg:row-start-3 xl:w-[620px]"
                        : "lg:col-start-1 lg:row-start-3 lg:w-[620px] rounded-[24px]"}
                      frameClassName="px-6 text-center md:px-8 lg:px-10"
                    />
                  </div>

                  <div className={isFoh
                    ? "flex w-full max-w-none flex-col gap-8 lg:col-start-2 lg:row-start-3 xl:max-w-[658px] xl:justify-self-end"
                    : "flex w-full max-w-none flex-col gap-8 lg:col-start-2 lg:row-start-3 lg:max-w-[658px] lg:justify-self-end"}
                  >
                    <p className="type-p3 text-[#222222]">{data.problem.overview}</p>

                    <div className="flex flex-col gap-5">
                      {data.problem.projectOverviewRows.map((row) => (
                        <div key={row.label} className="flex flex-col gap-5 border-b border-[#222222]/20 pb-5">
                          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div className="text-[#222222]">
                              <div className="type-p2 font-[500] md:hidden">{row.label}</div>
                              <div className="type-p2 hidden md:block">{row.label}</div>
                            </div>
                            <div className="type-p2 font-medium text-[#222222]">{row.value}</div>
                          </div>
                        </div>
                      ))}

                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="text-[#222222]">
                            <div className="type-p2 font-[500] md:hidden">Tools Used</div>
                            <div className="type-p2 hidden md:block">Tools Used</div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            {data.problem.tools.map((tool) => (
                              <div key={tool.label} className="group relative">
                                <img
                                  src={tool.icon}
                                  alt={tool.label}
                                  className="h-[51px] w-[51px] rounded-[10px]"
                                />
                                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#222222] px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                  {tool.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {(data.problem.quote.preQuoteHeading || data.problem.quote.preQuoteImage) && (
                  <div className="mt-14 lg:mt-16">
                    {data.problem.quote.preQuoteHeading && (
                      <h3 className="type-h4 mb-6 pt-5 text-[#222222]">{data.problem.quote.preQuoteHeading}</h3>
                    )}
                    {data.problem.quote.preQuoteChart === "directv-revenue" ? (
                      <DirecTVRevenueChart />
                    ) : data.problem.quote.preQuoteImage ? (
                      <>
                        <img src={data.problem.quote.preQuoteImage} alt="" className="w-full" />
                        {data.problem.quote.preQuoteImageCaption && (
                          <p className="mt-2 text-sm text-black/40">{data.problem.quote.preQuoteImageCaption}</p>
                        )}
                      </>
                    ) : null}
                  </div>
                )}

                <PullQuote
                  className={data.problem.quote.preQuoteImage ? "mt-8" : "mt-14 lg:mt-16"}
                  quote={<>&ldquo;{data.problem.quote.quote}&rdquo;</>}
                  attributionTitle={data.problem.quote.attributionTitle}
                  attributionSubtitle={data.problem.quote.attributionSubtitle}
                  avatarSrc={data.problem.quote.avatarSrc}
                  glyphClassName="text-[rgba(34,34,34,0.06)]"
                  attributionClassName="mt-6"
                />
              </Container>
            </div>

            <div className="relative w-full bg-[#F3F3F3] md:left-1/2 md:w-screen md:-translate-x-1/2">
              <Container className="pt-6 pb-0 md:pt-8 md:pb-0 lg:pt-[52px] lg:pb-0">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,573px)_minmax(0,1fr)] lg:items-center lg:justify-between">
                  <div className="flex max-w-[573px] flex-col items-start gap-5 md:max-w-none lg:max-w-[573px]">
                    <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
                      {data.role.eyebrow}
                    </EyebrowPill>

                    <div className="flex flex-col items-start gap-3">
                      <h2 className="type-h3 text-[#222222]">{data.role.title}</h2>
                      <p className="type-p2 max-w-[573px] text-black/80 md:max-w-none lg:max-w-[573px]">
                        {data.role.copy}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {data.role.tags.map((tag) => (
                        <TagPill key={tag} variant="dark" className="py-2.5 text-[18px]">
                          {tag}
                        </TagPill>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-[minmax(0,224px)_minmax(0,224px)_minmax(0,224px)] lg:grid-rows-[208px_208px] lg:justify-end">
                    {data.role.stats.map((stat, index) => (
                      <article
                        key={stat.label}
                        className={`h-[208px] w-full md:max-w-none lg:max-w-none ${
                          index === 0 ? "lg:row-[1/3] lg:place-self-center" : ""
                        } ${index === 1 ? "lg:col-start-2 lg:row-start-1" : ""} ${
                          index === 2 ? "lg:col-start-2 lg:row-start-2" : ""
                        } ${index === 3 ? "lg:col-start-3 lg:row-[1/3] lg:place-self-center" : ""}`}
                      >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-[10px] bg-[#222222] px-6 text-center">
                          <div className="text-center leading-none text-white">
                            <span className="font-[var(--font-family-display)] text-[52px] font-medium leading-[56px]">
                              {stat.value}
                            </span>
                            {stat.suffix ? (
                              <span className="font-[var(--font-family-display)] text-[32px] font-semibold leading-8">
                                {stat.suffix}
                              </span>
                            ) : null}
                          </div>
                          <div className="type-p3 mt-4 max-w-[160px] text-white/60">
                            {stat.label}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pb-1 pt-2 md:pb-[5px] md:pt-3 lg:mt-8 lg:pb-1.5 lg:pt-3">
                  <div className="flex flex-col gap-5">
                    <h3 className="type-h5 max-w-[760px] text-[#111111]">
                      {data.role.narrative.title}
                    </h3>

                    {data.globalLocations && (
                      <GlobalLocationsMap
                        title={data.globalLocations.title}
                        locations={data.globalLocations.locations}
                      />
                    )}

                    {data.role.narrative.image && (
                      <FullWidthImage src={data.role.narrative.image} fullWidth={false} />
                    )}

                    <div className="flex flex-col gap-5">
                      {data.role.narrative.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="type-p2 text-[#222222]">
                          {paragraph}
                        </p>
                      ))}

                      {data.role.narrative.highlights ? (
                        <div className="flex flex-col gap-5">
                          {data.role.narrative.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="h-[27px] w-px bg-[#0F1112]" />
                              <div className="type-p2 text-[#111111]">{item}</div>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {data.role.narrative.closing ? (
                        <p className="type-p2 text-[#222222]">{data.role.narrative.closing}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:mt-10 lg:mt-12">
            <div className="h-px w-full max-w-[620px] bg-[#222222]" />
          </div>
        </Container>
      </section>

      <SectionShell surface="white" containerClassName="pb-7 pt-1 md:pb-8 md:pt-1 lg:pb-10 lg:pt-1">
        <div className="flex flex-col items-center gap-8 pt-6 md:pt-8 lg:pt-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
              {data.solution.eyebrow}
            </EyebrowPill>

            <div className="flex max-w-[1200px] flex-col items-center gap-3">
              <h2 className="type-h3 max-w-[1104px] text-[#222222]">{data.solution.title}</h2>
              <p className="type-p3 max-w-[814px] text-black/65">{data.solution.copy}</p>
            </div>
          </div>

          {data.solution.diagram ? (
            <HeadlessCommerceDiagram data={data.solution.diagram} />
          ) : data.slug === "murad" ? (
            <MuradArchitectureDiagram />
          ) : data.slug === "bi" ? (
            <BISystemDiagram />
          ) : data.slug === "mm" ? (
            <SCJCommerceArchitecture />
          ) : data.solution.heroImage ? (
            <FullWidthImage src={data.solution.heroImage} fullWidth={false} />
          ) : (
            <BlogCardGrid cards={data.solution.cards} />
          )}
        </div>
      </SectionShell>

      <SectionShell surface="white" containerClassName="pt-0 pb-10 md:pb-12 lg:pb-14">
        <div className="flex w-full flex-col items-start gap-5">
          <h2 className="type-h5 text-[#111111]">{data.supplementalNarrative.title}</h2>

          {data.supplementalNarrative.paragraphs.map((paragraph, i) => (
            <>
              <p key={paragraph} className="type-p2 my-0 text-[#222222]">
                {paragraph}
              </p>
              {i === 0 && data.supplementalNarrative.image && (
                <FullWidthImage key="narrative-image" src={data.supplementalNarrative.image} />
              )}
            </>
          ))}

          {data.supplementalNarrative.highlights ? (
            <div className="flex flex-col gap-5">
              {data.supplementalNarrative.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-[27px] w-px bg-[#0F1112]" />
                  <div className="type-p2 text-[#111111]">{item}</div>
                </div>
              ))}
            </div>
          ) : null}

          {data.supplementalNarrative.closing ? (
            <p className="type-p2 text-[#222222]">{data.supplementalNarrative.closing}</p>
          ) : null}

          {data.supplementalNarrative.closingImage && (
            <FullWidthImage src={data.supplementalNarrative.closingImage} fullWidth={false} />
          )}
        </div>
      </SectionShell>

      <SectionShell containerClassName="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex max-w-[577px] flex-col items-center gap-3 text-center">
            <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
              {data.impact.eyebrow}
            </EyebrowPill>

            <div className="flex w-full flex-col items-center gap-2">
              <h2 className="type-h3 text-[#222222]">{data.impact.title}</h2>
              <p className="type-p3 max-w-[577px] text-black/55">{data.impact.intro}</p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-2 pt-2 md:hidden">
              {data.impact.proofPoints.map((item, index) => (
                <div key={`mobile-intro-${item}`} className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#222222]">{item}</span>
                  {index < data.impact.proofPoints.length - 1 ? (
                    <ProofPointArrowIcon size={16} className="shrink-0 text-[#222222]" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="hidden w-full items-center justify-center gap-3 pt-2 md:flex md:flex-wrap lg:hidden">
              {data.impact.proofPoints.map((item, index) => (
                <div key={`tablet-intro-${item}`} className="flex items-center gap-3">
                  <TagPill variant="dark" className="py-2.5 text-[18px]">
                    {item}
                  </TagPill>
                  {index < data.impact.proofPoints.length - 1 ? (
                    <ProofPointArrowIcon className="text-[#222222]" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full items-center justify-center gap-3 lg:flex">
            {data.impact.proofPoints.map((item, index) => (
              <div key={`desktop-intro-${item}`} className="flex items-center gap-3">
                <TagPill variant="dark" className="py-2.5 text-[18px]">
                  {item}
                </TagPill>
                {index < data.impact.proofPoints.length - 1 ? (
                  <ProofPointArrowIcon className="text-[#222222]" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="grid w-full grid-cols-2 gap-5 pt-3 md:pt-4 lg:grid-cols-4 lg:pt-6">
            {data.impact.stats.map((stat) => (
              <StatCard
                key={`${stat.value}-${stat.label}`}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="min-h-[176px] px-8 py-10"
                valueClassName="text-center text-slate-800"
                valueTextClassName="text-[56px] font-medium leading-[60px]"
                suffixClassName="text-[36px] font-semibold leading-9"
                labelClassName="type-p2 max-w-[220px] text-center font-medium text-neutral-700"
                contentClassName="gap-3.5"
              />
            ))}
          </div>

          {data.impact.statsImage && (
            <FullWidthImage src={data.impact.statsImage} fullWidth={false} />
          )}

          <div className="grid w-full gap-10 lg:grid-cols-4 lg:items-start lg:gap-5">
            <div className="flex flex-col items-start gap-4 lg:col-span-2">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#C8C8C8] p-8">
                <h2 className="type-h3 max-w-[640px] text-[#222222]">{data.impact.beforeAfter.title}</h2>
                <p className="type-p3 max-w-[620px] text-[#222222]">{data.impact.beforeAfter.summary}</p>
                <BeforeAfterComparison columns={data.impact.beforeAfter.columns} />
              </div>
            </div>

            <div className="flex flex-col pt-10 lg:col-span-2">
              {data.impact.journeySteps.map((item, index) => (
                <div key={item.step} className="grid grid-cols-[40px_1fr] gap-x-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-x-10">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B2B2B] text-[20px] font-medium leading-none text-white sm:h-16 sm:w-16 sm:text-[32px] sm:leading-[48px]">
                      {item.step}
                    </div>
                    {index < data.impact.journeySteps.length - 1 ? (
                      <div className="mt-2 w-px flex-1 bg-[linear-gradient(to_bottom,#667085_0%,#667085_55%,transparent_55%,transparent_100%)] bg-[length:1px_8px] bg-repeat-y" />
                    ) : null}
                  </div>
                  <div className={`flex flex-col items-start gap-2 pt-1 sm:pt-3 ${index < data.impact.journeySteps.length - 1 ? "pb-8 sm:pb-10" : ""}`}>
                    <h3 className="type-h5 text-[#222222]">{item.title}</h3>
                    <p className="type-p3 w-full max-w-none text-black/70 lg:max-w-[540px]">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell containerClassName="pt-6 pb-16 md:pt-0 md:pb-8 lg:pb-24 lg:pt-12">
        <div className="px-0 pb-6 pt-0 md:pb-8 lg:pb-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <EyebrowPill labelClassName="type-p4">
              {data.delivery.eyebrow}
            </EyebrowPill>
            <h2 className="type-h3 text-[#222222]">{data.delivery.title}</h2>
            <h3 className="type-h5 max-w-[760px] text-[#111111]">{data.delivery.introTitle}</h3>
            <p className="type-p2 max-w-[760px] text-[#222222]">{data.delivery.introCopy}</p>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:mt-14">
            <Timeline items={data.delivery.phases} />
          </div>
        </div>
      </SectionShell>

      <section className="bg-[#222222]">
        <Container className="py-14 md:py-16 lg:py-20">
          <PullQuote
            dark
            quote={<>&ldquo;{data.challengeQuote.quote}&rdquo;</>}
            attributionTitle={data.challengeQuote.attributionTitle}
            attributionSubtitle={data.challengeQuote.attributionSubtitle}
            avatarSrc={data.challengeQuote.avatarSrc}
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

      <CaseStudyRecognitionSection data={data} isFoh={isFoh} />
    </main>
  )
}
