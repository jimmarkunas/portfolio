import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import { BookCallCta } from "@/components/BookCallCta"
import { CaseStudyPressCta } from "@/components/case-study/template/CaseStudyPressCta"
import type { CaseStudyData } from "@/content/case-studies"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { TagPill } from "@/components/TagPill"

export function CaseStudyRecognitionSection({ data, isFoh }: { data: CaseStudyData; isFoh: boolean }) {
  if (!data.recognition) {
    return (
      <div className="w-full bg-[#222222]">
        <div className="mx-auto max-w-[1440px] border-t border-white/10 px-6 md:px-10 lg:px-12" />
      </div>
    )
  }

  return (
    <section id="recognition" className="relative overflow-hidden bg-white">
      <MotionReveal preset="shape" className="pointer-events-none absolute right-[-160px] top-[-20px] h-[420px] w-[420px] rounded-full bg-[#F2CD5C]/10 blur-[125px]" />
      <MotionReveal preset="shape" delay={0.08} className="pointer-events-none absolute left-[-120px] top-[620px] h-[480px] w-[480px] rounded-full bg-[#D8F2D2]/20 blur-[125px]" />

      <Container className="relative z-10 py-20 md:max-w-none md:px-0 md:py-12 lg:max-w-[1440px] lg:px-12 lg:pb-20 lg:pt-28">
        <div className="flex flex-col gap-16 md:gap-8 lg:gap-20">
          <MotionReveal preset="section" className="grid gap-10 md:gap-5 lg:grid-cols-[minmax(0,460px)_320px_minmax(0,300px)] lg:items-start lg:gap-6 lg:justify-between">
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
                <BookCallCta location="case_study_recognition" className="mt-2 hidden md:inline-flex lg:hidden" />
              </div>
            </div>

            <div className="flex w-full max-w-none flex-col items-start gap-6 lg:col-span-2 lg:col-start-2 lg:max-w-[636px]">
              <p className="type-p3 text-black/65">{data.recognition.intro}</p>
              <BookCallCta location="case_study_recognition" className="md:hidden lg:inline-flex" />
            </div>
          </MotionReveal>

          <div className="flex flex-col">
            {data.recognition.leadImage && (
              <MotionReveal preset="image" className={isFoh ? "-mt-9 pb-7 md:-mt-1 lg:-mt-[52px]" : "pb-7"}>
                <div className="relative">
                  <img
                    src={data.recognition.leadImage.src}
                    alt={data.recognition.leadImage.alt}
                    className="block h-auto w-full rounded-sm border border-[#222222]"
                  />
                  {data.recognition.leadImage.badge && (
                    <div className="absolute bottom-4 left-4 max-w-[260px] rounded-lg bg-black/70 px-4 py-3 text-white backdrop-blur-sm">
                      <p className="type-p4 leading-snug">{data.recognition.leadImage.badge}</p>
                    </div>
                  )}
                </div>
              </MotionReveal>
            )}

            {data.recognition.featured && (
              <MotionReveal preset="card" className="border-b border-[#E5E7EB] pb-7">
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

                    <div
                      className={
                        isFoh
                          ? "flex w-full max-w-none flex-col gap-4 md:col-start-1 lg:col-start-2 xl:max-w-[320px]"
                          : "flex w-full max-w-none flex-col gap-8 md:col-start-1 lg:col-start-2 lg:max-w-[320px]"
                      }
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

                    <div
                      className={
                        isFoh
                          ? "flex w-full flex-wrap items-center gap-2 md:col-start-2 md:w-auto md:justify-end lg:col-start-2 lg:row-start-2 lg:justify-start xl:col-start-3 xl:row-start-1 xl:justify-end xl:flex-nowrap"
                          : "flex w-full flex-wrap items-center gap-2 md:col-start-2 md:w-auto md:justify-end lg:col-start-3 lg:flex-nowrap"
                      }
                    >
                      {data.recognition.featured.tags.map((tag, tagIndex) => (
                        <TagPill key={`${tag}-${tagIndex}`} variant="dark">
                          {tag}
                        </TagPill>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            )}

            {data.recognition.rows.map((row, rowIndex) => {
              const documentHref = row.url ?? (row.file ? encodeURI(row.file) : null)
              const rowKey = row.file ?? row.url ?? `${row.company}-${row.dates}-${rowIndex}`
              const rowContent = (
                <>
                  <div className="flex flex-col gap-2">
                    <h3 className="type-h6 text-[#222222] transition-colors duration-200 group-hover:text-[#447ACB]">
                      {row.company}
                    </h3>
                    <p className="type-p4 mt-1 text-[#767676] transition-colors duration-200 group-hover:text-[#222222]">
                      {row.source ? `${row.source} · ${row.dates}` : row.dates}
                    </p>
                  </div>

                  <p className="type-p3 w-full max-w-[54ch] text-[#5B5B5B] transition-colors duration-200 group-hover:text-[#447ACB]">
                    {row.summary}
                  </p>

                  {documentHref ? (
                    <div className="flex items-start justify-start lg:col-start-3 lg:justify-end">
                      <CaseStudyPressCta href={documentHref} title={row.company} location="case_study_recognition" />
                    </div>
                  ) : null}
                </>
              )

              return (
                <MotionReveal key={rowKey} preset="card" delay={rowIndex * 0.03}>
                  <div className="group relative isolate grid gap-5 bg-transparent py-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:items-start lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_auto] lg:gap-8 lg:items-start">
                    {rowContent}
                  </div>
                </MotionReveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
