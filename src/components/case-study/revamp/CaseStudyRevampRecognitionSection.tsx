"use client"

import { Container } from "@/components/Container"
import { CaseStudyMediaFrame } from "@/components/case-study/CaseStudyMediaFrame"
import { ButtonLink } from "@/components/ButtonLink"
import { FullWidthImage } from "@/components/FullWidthImage"
import { ExternalLinkMiniIcon } from "@/components/icons/ui-icons"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { TagPill } from "@/components/TagPill"
import { SectionPill } from "@/components/homepage/ui"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export function CaseStudyRevampRecognitionSection({ data }: { data: CaseStudyRevampData }) {
  const recognition = data.recognition

  if (!recognition || data.slug === "zevo") {
    return null
  }

  return (
    <section
      id="recognition"
      data-section="case-study-recognition"
      className="relative overflow-hidden bg-white"
    >
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-14">
          <MotionReveal preset="section" className="grid gap-8 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)] lg:items-start">
            <div className="flex flex-col items-start gap-6">
              <SectionPill label={recognition.eyebrow} />
              <h2 className="type-h2 text-[#222222]">Press & Accolades</h2>
            </div>
            <p className="type-p3 w-full max-w-none text-black/66 lg:pt-14">{recognition.intro}</p>
          </MotionReveal>

          {recognition.editorialImage ? (
            <MotionReveal preset="image">
              <figure className="flex w-full flex-col gap-3">
                <FullWidthImage
                  src={recognition.editorialImage.src}
                  alt={recognition.editorialImage.alt}
                  fullWidth={false}
                />
                {recognition.editorialImage.caption ? (
                  <figcaption className="type-p5 text-black/55">{recognition.editorialImage.caption}</figcaption>
                ) : null}
              </figure>
            </MotionReveal>
          ) : null}

          <div className="flex flex-col gap-8">
            {recognition.featured && (
              <MotionReveal preset="card" className="pb-8">
                <div className="grid gap-5 md:max-lg:grid-cols-[minmax(0,1fr)_auto] md:max-lg:gap-x-6 md:max-lg:gap-y-3 lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)_auto] lg:items-start lg:gap-8">
                  <div className="md:col-span-2 lg:col-span-1 md:max-lg:col-span-2">
                    <CaseStudyMediaFrame
                      media={recognition.featured.media}
                      className="overflow-hidden rounded-[18px]"
                    />
                  </div>

                  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 md:max-lg:gap-x-6 md:max-lg:gap-y-2">
                    <div className="flex min-w-0 flex-col gap-2">
                      <h3 className="type-h6 text-[#222222]">{recognition.featured.title}</h3>
                      {recognition.featured.date ? (
                        <p className="type-p4 text-black/45">{recognition.featured.date}</p>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap items-start justify-end gap-2">
                      {recognition.featured.tags.map((tag) => (
                        <TagPill key={tag} variant="dark" className="py-1.5">
                          {tag}
                        </TagPill>
                      ))}
                    </div>

                    <p className="type-p4 col-span-2 w-full max-w-none text-black/60 md:max-lg:col-span-2 md:max-lg:w-full md:max-lg:max-w-none">
                      {recognition.featured.summary}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            )}

            <div className="flex flex-col">
              {recognition.featured && <div className="border-t border-black/10" />}

              {recognition.rows.map((row, rowIndex) => (
                <MotionReveal key={`${row.publisher}-${row.date}`} preset="card" delay={rowIndex * 0.03}>
                  <div className="border-b border-black/10">
                    <ButtonLink
                      href={row.pdfHref}
                      external
                      target="_blank"
                      rel="noopener noreferrer"
                      ariaLabel={`Open "${row.publisher}" in a new tab`}
                      className="group grid w-full gap-3 py-6 text-left transition-colors duration-200 hover:text-[#447ACB] md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:items-start md:gap-5 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_auto] lg:gap-8 md:max-lg:grid-cols-[minmax(150px,200px)_minmax(0,1fr)_auto] md:max-lg:items-start md:max-lg:gap-x-6 !min-h-0 !rounded-none !border-0 !bg-transparent !px-0 !py-6 !text-inherit"
                    >
                      <div className="flex flex-col gap-1 md:max-lg:gap-0.5">
                        <h3 className="type-h6 text-[#222222] transition-colors duration-200 group-hover:text-[#447ACB]">
                          {row.publisher}
                        </h3>
                        <p className="type-p4 text-[#767676] transition-colors duration-200 group-hover:text-[#447ACB]">
                          {row.date}
                        </p>
                      </div>

                      <p className="type-p4 w-full max-w-[70ch] text-[#5B5B5B] transition-colors duration-200 group-hover:text-[#447ACB] md:max-lg:max-w-none">
                        {row.summary}
                      </p>

                      <div className="flex items-start justify-start md:max-lg:justify-self-end md:max-lg:self-start lg:justify-end">
                        <span className="button-book-call w-full px-5 text-[15px] transition-colors duration-200 group-hover:bg-[#447ACB] group-hover:border-[#447ACB] md:w-auto md:max-lg:w-auto">
                          <span>Open in new tab</span>
                          <ExternalLinkMiniIcon />
                        </span>
                      </div>
                    </ButtonLink>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
