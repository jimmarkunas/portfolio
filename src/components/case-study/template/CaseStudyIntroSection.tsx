import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import type { CaseStudyData } from "@/components/case-study/types"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { FullWidthImage } from "@/components/FullWidthImage"
import { PullQuote } from "@/components/PullQuote"
import { StatCard } from "@/components/StatCard"
import { TagPill } from "@/components/TagPill"
import {
  DeferredPreQuoteChartVisual,
  DeferredProblemChartVisual,
} from "@/components/case-study/template/visuals/deferred/DeferredChartVisual"
import { DeferredGlobalLocationsVisual } from "@/components/case-study/template/visuals/deferred/DeferredMapVisual"

import { HeroSwooshBackdrop } from "./CaseStudyTemplateIcons"

export function CaseStudyIntroSection({ data }: { data: CaseStudyData }) {
  const isFoh = data.slug === "foh"
  const problemChartKey = data.problem.chart?.key
  const preQuoteChartKey = data.problem.quote.preQuoteChart
  const hideToolsUsed = data.slug === "zevo" || data.slug === "cwg"

  return (
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
                ? "grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-8 lg:gap-y-5 2xl:grid-cols-[minmax(0,573px)_minmax(0,658px)] 2xl:justify-between 2xl:gap-x-10"
                : "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-10 lg:gap-y-5 2xl:grid-cols-[minmax(0,573px)_minmax(0,658px)] 2xl:justify-between"}
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

                  {problemChartKey === "retail-vs-dtc" ? (
                    <div className={isFoh
                      ? "w-full lg:col-start-1 lg:row-start-3"
                      : "w-full lg:col-start-1 lg:row-start-3"}>
                      <DeferredProblemChartVisual
                        chartKey="retail-vs-dtc"
                        brandName={data.problem.chart?.brandName}
                        eager
                        minHeightClassName="min-h-[320px] md:min-h-[360px]"
                        loadingLabel="Loading chart..."
                      />
                    </div>
                  ) : (
                    <CaseStudyMediaFrame
                      media={data.problem.media}
                      className={
                        data.problem.media.kind === "react-diagram"
                          ? "min-w-0 lg:col-start-1 lg:row-start-3 w-full"
                          : isFoh
                            ? "min-w-0 w-full rounded-[24px] lg:col-start-1 lg:row-start-3 2xl:w-[620px]"
                            : "min-w-0 w-full rounded-[24px] lg:col-start-1 lg:row-start-3"
                      }
                      frameClassName="px-6 text-center md:px-8 lg:px-10"
                    />
                  )}
                </div>

                <div className={isFoh
                  ? "min-w-0 flex w-full max-w-none flex-col gap-8 lg:col-start-2 lg:row-start-3 xl:max-w-[658px] xl:justify-self-end"
                  : "min-w-0 flex w-full max-w-none flex-col gap-8 lg:col-start-2 lg:row-start-3 lg:max-w-[658px] lg:justify-self-end"}
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

                    {!hideToolsUsed ? (
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
                    ) : null}
                  </div>
                </div>
              </div>

              {(data.problem.quote.preQuoteHeading || data.problem.quote.preQuoteImage) && (
                <div className="mt-14 lg:mt-16">
                  {data.problem.quote.preQuoteHeading && (
                    <h3 className="type-h4 mb-6 pt-5 text-[#222222]">{data.problem.quote.preQuoteHeading}</h3>
                  )}
                  {preQuoteChartKey ? (
                    <DeferredPreQuoteChartVisual
                      chartKey={preQuoteChartKey}
                      eager
                      minHeightClassName="min-h-[320px] md:min-h-[380px]"
                      loadingLabel="Loading chart..."
                    />
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
                    <DeferredGlobalLocationsVisual
                      title={data.globalLocations.title}
                      locations={data.globalLocations.locations}
                      minHeightClassName="min-h-[420px]"
                      loadingLabel="Loading global locations..."
                    />
                  )}

                  {data.role.narrative.image && (
                    <FullWidthImage src={data.role.narrative.image} fullWidth={false} />
                  )}

                  <div className="flex flex-col gap-5">
                    {data.role.narrative.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`role-paragraph-${paragraphIndex}`} className="type-p2 text-[#222222]">
                        {paragraph}
                      </p>
                    ))}

                    {data.role.narrative.highlights ? (
                      <div className="flex flex-col gap-5">
                        {data.role.narrative.highlights.map((item, i) => (
                          <div key={`${item}-${i}`} className="flex items-start gap-3">
                            <div className="type-p5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1112] text-white">{i + 1}</div>
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
  )
}
