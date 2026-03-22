import Link from "next/link"

import { BeforeAfterComparison } from "@/components/case-study/BeforeAfterComparison"
import { DirecTVRevenueChart } from "@/components/case-study/DirecTVRevenueChart"
import { BlogCardGrid } from "@/components/case-study/BlogCardGrid"
import { CaseStudyHeroImage } from "@/components/case-study/CaseStudyHeroImage"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import type { CaseStudyBlogCardArt, CaseStudyData } from "@/components/case-study/types"
import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { EyebrowPill } from "@/components/EyebrowPill"
import { PullQuote } from "@/components/PullQuote"
import { SectionShell } from "@/components/SectionShell"
import { StatCard } from "@/components/StatCard"
import { TagPill } from "@/components/TagPill"
import { Timeline } from "@/components/Timeline"

function renderBlogCardArt(art: CaseStudyBlogCardArt) {
  if (art.startsWith("/")) {
    return <img src={art} alt="" className="absolute inset-0 h-full w-full object-cover" />
  }

  if (art === "olive") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#90A07C_0%,#B7C1A5_52%,#D7D3C2_100%)]" />
        <div className="absolute right-8 top-5 h-52 w-52 rounded-full border border-white/30" />
        <div className="absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2 bg-[#C9D0BF] shadow-[0_-12px_30px_rgba(255,255,255,0.12)_inset]" />
        <div className="absolute bottom-16 left-1/2 h-28 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fffef7_0%,#ebe6d6_48%,#d6cfbb_100%)] shadow-[22px_26px_40px_rgba(34,34,34,0.14)]" />
      </>
    )
  }

  if (art === "ux") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#F31B0F_0%,#EF1C16_44%,#E2D5E4_45%,#D8C7E1_65%,#F7D4CB_100%)]" />
        <div className="absolute bottom-0 right-0 h-16 w-28 rounded-tl-full bg-[#E2D9EE]" />
        <div className="absolute bottom-0 left-[46%] h-24 w-24 bg-[linear-gradient(180deg,#C59CEB_0%,#9A6BCF_100%)] shadow-[0_-14px_30px_rgba(255,255,255,0.14)_inset]" />
        <div className="absolute bottom-20 left-[54%] h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffefef_0%,#ff3c2f_35%,#c6100a_100%)] shadow-[18px_22px_34px_rgba(34,34,34,0.18)]" />
      </>
    )
  }

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#B7DEE7_0%,#B9E0E9_38%,#C5E2DC_60%,#EFE7DA_100%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-44 rounded-tr-[120px] bg-[#24364D] shadow-[22px_24px_36px_rgba(34,34,34,0.18)]" />
      <div className="absolute bottom-0 left-[54%] h-32 w-24 -translate-x-1/2 bg-[#A5AB9A] shadow-[0_-12px_26px_rgba(255,255,255,0.12)_inset]" />
      <div className="absolute left-[64%] top-4 h-16 w-16 -translate-x-1/2 rotate-12 rounded-full bg-[#F1482F] shadow-[18px_20px_34px_rgba(34,34,34,0.22)]" />
      <div className="absolute left-[55%] top-9 h-16 w-16 -translate-x-1/2 rotate-12 rounded-full bg-[#2F2F2F]" />
    </>
  )
}

function renderActionButton(action: CaseStudyData["hero"]["primaryCta"], variant: "primary" | "secondary") {
  const className =
    variant === "primary"
      ? "inline-flex min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-colors hover:bg-[#447ACB]"
      : "inline-flex min-h-[56px] items-center rounded-[99px] border border-[#222222]/12 bg-white px-6 pb-3.5 pt-3 text-[20px] leading-8 text-[#222222] transition-colors hover:border-[#447ACB] hover:text-[#447ACB]"

  const content = (
    <>
      <span>{action.label}</span>
      {variant === "primary" ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 5V15C20 15.552 19.553 16 19 16C18.447 16 18 15.552 18 15V7.41406L6.70707 18.707C6.51207 18.902 6.25604 19 6.00004 19C5.74404 19 5.48801 18.902 5.29301 18.707C4.90201 18.316 4.90201 17.684 5.29301 17.293L16.586 6H9.00004C8.44704 6 8.00004 5.552 8.00004 5C8.00004 4.448 8.44704 4 9.00004 4L19 4C19.13 4 19.2601 4.0269 19.3821 4.0769C19.6271 4.1779 19.8221 4.37292 19.9231 4.61792C19.9741 4.73992 20 4.87 20 5Z" fill="white" />
        </svg>
      ) : null}
    </>
  )

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  )
}

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const isFoh = data.slug === "foh"

  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3] text-[#222222]">
      <section className="bg-[#F3F3F3]">
        <Container>
          <div className="relative overflow-hidden bg-[#F3F3F3]">
            <div className="pb-8 pt-6 md:pb-10 md:pt-10 lg:pb-0 lg:pt-[56px]">
              <div className="flex flex-col gap-4 lg:gap-6">
                <nav aria-label="Breadcrumb" className="type-p4 text-[#222222]">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#222222] text-white transition-colors hover:bg-[#447ACB] hover:text-white"
                        href="/"
                        aria-label="Home"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M2.66675 6.73327L8.00008 2.6666L13.3334 6.73327V12.6666C13.3334 13.0202 13.193 13.3594 12.9429 13.6094C12.6928 13.8595 12.3537 13.9999 12.0001 13.9999H4.00008C3.64646 13.9999 3.30732 13.8595 3.05727 13.6094C2.80722 13.3594 2.66675 13.0202 2.66675 12.6666V6.73327Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6.00008 13.9999V7.99994H10.0001V13.9999" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-[#222222]">
                      &gt;
                    </li>
                    <li>
                      <Link className="transition-colors hover:text-[#447ACB]" href="/work">
                        Case Studies
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-[#222222]">
                      &gt;
                    </li>
                    <li className="text-[#222222]">{data.breadcrumbCurrent}</li>
                  </ol>
                </nav>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_724px] lg:items-start lg:gap-12">
                  <div>
                    <h1 className="type-h1-case-study -mt-2 text-[#222222]">{data.hero.title}</h1>
                  </div>

                  <div className="max-w-[724px]">
                    <p className="type-p2 max-w-[724px] text-black/80 lg:text-[18px] lg:leading-7">
                      {data.hero.intro}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {renderActionButton(data.hero.primaryCta, "primary")}
                      {renderActionButton(data.hero.secondaryCta, "secondary")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CaseStudyHeroImage src={data.hero.image.src} alt={data.hero.image.alt} />
          </div>
        </Container>
      </section>

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
                  <svg width="285" height="86" viewBox="0 0 285 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M0 31.8666C0.982931 43.995 8.89015 50.7458 16.9821 56.0192C28.3357 63.2051 40.5816 69.2532 53.0125 73.8242C110.828 93.3802 167.509 88.0339 222.07 61.6625C235.918 54.9084 249.028 46.0603 263.891 37.1836C266.135 53.2226 258.194 68.7256 259.607 85.41C266.223 82.4942 267.67 76.9248 268.994 72.3403C274.351 53.5099 279.492 34.4022 284.142 15.2323C286.297 6.00108 284.051 1.96609 275.189 0.846921C256.758 -1.73088 239.341 1.57154 223.431 10.8163C222.877 11.2465 222.692 12.7236 222.169 14.9083C234.476 24.4655 247.556 9.86151 261.063 15.8189C245.398 35.0981 224.534 45.968 202.931 54.7439C180.283 63.8879 157.173 70.7228 132.771 71.8927C108.862 73.1247 85.8456 69.2176 62.5837 63.2787C39.26 57.8323 18.8604 47.0031 0 31.8666Z" fill="#222222" fillOpacity="0.06" />
                  </svg>
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

      <SectionShell surface="white" containerClassName="pb-14 pt-1 md:pb-16 md:pt-1 lg:pb-20 lg:pt-1">
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

          {data.solution.heroImage ? (
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
              <p key={paragraph} className="type-p2 text-[#222222]">
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
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                      <path d="M4.5 9H13.5" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M10.5 5.75L13.75 9L10.5 12.25" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4.5 9H13.5" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M10.5 5.75L13.75 9L10.5 12.25" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </div>
              ))}
            </div>
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
              <div className="hidden flex-wrap items-center gap-3 pt-2 lg:flex lg:flex-nowrap">
                {data.impact.proofPoints.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <TagPill variant="dark" className="py-2.5 text-[18px]">
                      {item}
                    </TagPill>
                    {index < data.impact.proofPoints.length - 1 ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4.5 9H13.5" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" />
                        <path d="M10.5 5.75L13.75 9L10.5 12.25" stroke="#222222" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : null}
                  </div>
                ))}
              </div>

              <h2 className="type-h3 max-w-[640px] pt-4 text-[#222222]">{data.impact.beforeAfter.title}</h2>
              <p className="type-p3 max-w-[620px] text-[#222222]">{data.impact.beforeAfter.summary}</p>
              <BeforeAfterComparison columns={data.impact.beforeAfter.columns} />
            </div>

            <div className="flex flex-col lg:col-span-2">
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

      <section id="recognition" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-[-160px] top-[-20px] h-[420px] w-[420px] rounded-full bg-[#F2CD5C]/10 blur-[125px]" />
        <div className="pointer-events-none absolute left-[-120px] top-[620px] h-[480px] w-[480px] rounded-full bg-[#D8F2D2]/20 blur-[125px]" />

        <Container className="relative z-10 py-20 md:max-w-none md:px-0 md:py-12 lg:max-w-[1440px] lg:px-12 lg:pb-20 lg:pt-28">
          <div className="flex flex-col gap-16 md:gap-8 lg:gap-20">
            <div className="grid gap-10 md:gap-5 lg:grid-cols-[minmax(0,460px)_320px_minmax(0,300px)] lg:items-start lg:gap-6 lg:justify-between">
              <div className="flex flex-col items-start gap-4 lg:relative lg:col-start-1">
                <EyebrowPill
                  className="bg-white lg:absolute lg:left-0 lg:top-[-44px]"
                  labelClassName="type-p2 text-[#222222]"
                >
                  {data.recognition.eyebrow}
                </EyebrowPill>
                <div className="w-full md:flex md:items-start md:justify-between md:gap-6 lg:block">
                  <h2 className="type-h3 w-full max-w-none lg:max-w-[396px] text-[#222222]">
                    {data.recognition.title}
                  </h2>
                  <a
                    href={data.hero.primaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="type-p4 mt-2 hidden items-center gap-1.5 whitespace-nowrap text-[#222222] underline underline-offset-4 transition-colors hover:text-[#447ACB] md:inline-flex lg:hidden"
                  >
                    <span>{data.hero.primaryCta.label}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M0.957229 11.3614L0 10.4042L9.02046 1.375H0.819729V0H11.3614V10.5417H9.9864V2.34094L0.957229 11.3614Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex w-full max-w-none flex-col items-start gap-6 lg:col-span-2 lg:col-start-2 lg:max-w-[636px]">
                <p className="type-p3 text-black/65">{data.recognition.intro}</p>

                <a
                  href={data.hero.primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="type-p4 inline-flex items-center gap-1.5 text-[#222222] underline underline-offset-4 transition-colors hover:text-[#447ACB] md:hidden lg:inline-flex"
                >
                  <span>{data.hero.primaryCta.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M0.957229 11.3614L0 10.4042L9.02046 1.375H0.819729V0H11.3614V10.5417H9.9864V2.34094L0.957229 11.3614Z" fill="currentColor" />
                  </svg>
                </a>
              </div>

            </div>

            <div className="flex flex-col">
              {data.recognition.leadImage && (
                <div className={isFoh ? "-mt-9 pb-7 md:-mt-1 lg:-mt-[52px]" : "pb-7"}>
                  <img
                    src={data.recognition.leadImage.src}
                    alt={data.recognition.leadImage.alt}
                    className="block h-auto w-full"
                  />
                </div>
              )}

              {/* Press Video Modal */}
              <div className="border-b border-[#E5E7EB] pb-7">
                <div className="flex flex-col gap-8">
                  <div className={isFoh
                    ? "grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-x-8 lg:gap-y-5 xl:grid-cols-[minmax(0,460px)_320px_minmax(0,300px)] xl:justify-between"
                    : "grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6 lg:grid-cols-[minmax(0,460px)_320px_minmax(0,300px)] lg:justify-between"}
                  >
                    <div className={isFoh
                      ? "md:col-span-2 lg:row-span-2 lg:col-span-1 lg:col-start-1 xl:row-span-1"
                      : "md:col-span-2 lg:col-span-1 lg:col-start-1"}
                    >
                      <CaseStudyMediaFrame
                        media={data.recognition.featured.media}
                        className="xl:w-[530px] xl:max-w-none rounded-xl"
                      />
                    </div>

                    <div className={isFoh
                      ? "flex w-full max-w-none flex-col gap-4 md:col-start-1 lg:col-start-2 xl:max-w-[320px]"
                      : "flex w-full max-w-none flex-col gap-8 md:col-start-1 lg:col-start-2 lg:max-w-[320px]"}
                    >
                      <div>
                        <h3 className="type-h6 text-[#222222]">{data.recognition.featured.company}</h3>
                        {data.recognition.featured.dates && (
                          <p className="type-p3 mt-1 text-black/45">{data.recognition.featured.dates}</p>
                        )}
                      </div>
                      <p className={isFoh
                        ? "type-p3 max-w-none text-black/55 xl:max-w-[320px]"
                        : "type-p3 max-w-none text-black/55 lg:max-w-[320px]"}
                      >
                        {data.recognition.featured.summary}
                      </p>
                    </div>

                    <div className={isFoh
                      ? "flex w-full flex-wrap items-center gap-2 md:col-start-2 md:w-auto md:justify-end lg:col-start-2 lg:row-start-2 lg:justify-start xl:col-start-3 xl:row-start-1 xl:justify-end xl:flex-nowrap"
                      : "flex w-full flex-wrap items-center gap-2 md:col-start-2 md:w-auto md:justify-end lg:col-start-3 lg:flex-nowrap"}
                    >
                      {data.recognition.featured.tags.map((tag) => (
                        <TagPill key={tag} variant="dark">
                          {tag}
                        </TagPill>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Modals */}
              {data.recognition.rows.map((row) => {
                const slug = row.file ? row.file.split("/").pop()?.replace(/\.[^.]+$/, "") : null
                const viewerHref = slug ? `/work/${data.slug}/press/${slug}` : null
                const inner = (
                  <div className="grid w-full gap-x-6 gap-y-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-start lg:grid-cols-[minmax(0,460px)_320px_minmax(0,300px)] lg:items-center lg:justify-between">
                    <div className="w-full">
                      <h3 className="type-h6 text-[#222222]">{row.company}</h3>
                      <p className="type-p3 mt-1 text-black/45">{row.source ? `${row.source} · ${row.dates}` : row.dates}</p>
                    </div>

                    <p className="type-p3 w-full text-black/55 md:col-start-1 lg:col-start-2 lg:max-w-[320px]">
                      {row.summary}
                    </p>

                    <div className="flex w-full flex-wrap items-center justify-start gap-2 md:col-start-2 md:row-start-1 md:row-end-3 md:w-auto md:self-start md:justify-end lg:row-auto lg:col-start-3 lg:flex-nowrap lg:justify-end">
                      {row.tags.map((tag) => (
                        <TagPill key={`${row.company}-${tag}`} variant="dark">
                          {tag}
                        </TagPill>
                      ))}
                    </div>
                  </div>
                )
                return viewerHref ? (
                  <Link
                    key={`${row.company}-${row.summary}`}
                    href={viewerHref}
                    className="block w-full cursor-pointer border-b border-[#E5E7EB] py-7 transition-colors duration-150 hover:bg-[#F5F7FA]"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={`${row.company}-${row.summary}`} className="w-full border-b border-[#E5E7EB] py-7">
                    {inner}
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
