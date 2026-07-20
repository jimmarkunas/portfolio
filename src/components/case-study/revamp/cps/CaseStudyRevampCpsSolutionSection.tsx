"use client"

import { Fragment, useEffect, useRef, useState } from "react"

import { Container } from "@/components/Container"
import { FullWidthImage } from "@/components/FullWidthImage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { ProofPointArrowIcon } from "@/components/case-study/template/CaseStudyTemplateIcons"
import { TagPill } from "@/components/TagPill"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { cpsSolutionContent } from "@/content/case-studies/revamp/cps"
import { CaseStudyRevampSectionHeader } from "../CaseStudyRevampSectionHeader"
import { CpsOperationsFlowDiagram } from "./CpsOperationsFlowDiagram"

export function CaseStudyRevampCpsSolutionSection({ data }: { data: CaseStudyRevampData }) {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const isWhiteBackground = data.solution.background === "white"

  useEffect(() => {
    if (!activeImage) return

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null)
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener("keydown", close)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", close)
      document.body.style.overflow = previousOverflow
    }
  }, [activeImage])

  useEffect(() => {
    if (!activeImage) triggerRef.current?.focus()
  }, [activeImage])

  const activeAlt =
    cpsSolutionContent.residentExperience.gallery.find((image) => image.src === activeImage)?.alt ??
    "CPS Energy resident reporting experience"

  return (
    <section className={isWhiteBackground ? "bg-white" : "bg-[#F3F3F3]"}>
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col items-center gap-4 text-center">
            <CaseStudyRevampSectionHeader
              eyebrow={data.solution.eyebrow}
              title={data.solution.title}
              copy={data.solution.copy}
              align="center"
              className="max-w-[900px]"
            />
          </MotionReveal>

          <MotionReveal preset="card" className={`${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"} p-6 md:p-8`}>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
              {data.solution.architecture.map((lane, index) => (
                <Fragment key={lane.title}>
                  <article className={`flex min-w-0 h-full flex-col gap-4 rounded-[24px] border border-black/8 ${isWhiteBackground ? "bg-white" : "bg-[#F8F8F8]"} p-6`}>
                    {lane.image ? (
                      <button
                        type="button"
                        onClick={(event) => {
                          triggerRef.current = event.currentTarget
                          setActiveImage(lane.image?.src ?? null)
                        }}
                        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#447ACB]"
                        aria-label={`Enlarge ${lane.image.alt}`}
                      >
                        <FullWidthImage src={lane.image.src} alt={lane.image.alt} fullWidth={false} />
                      </button>
                    ) : null}

                    <div className="flex items-center justify-center gap-4">
                      <TagPill variant="soft" className="py-1.5 text-center type-p5 uppercase tracking-[0.12em]">
                        {lane.eyebrow}
                      </TagPill>
                    </div>

                    <div className="flex h-[8rem] flex-col items-center justify-center gap-2 text-center">
                      <h3 className="type-h6 text-[#222222]">{lane.title}</h3>
                      <p className="type-p3 text-black/68">{lane.copy}</p>
                    </div>

                    <ul className="mx-auto w-max max-w-full space-y-2 border-t border-black/8 pt-4 text-left lg:mx-0 lg:w-auto lg:max-w-none">
                      {lane.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[#222222]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#447ACB]" />
                          <span className="type-p3">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  {index < data.solution.architecture.length - 1 ? (
                    <div className="hidden items-center justify-center lg:flex">
                      <ProofPointArrowIcon className="text-[#447ACB]" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="overflow-hidden rounded-[24px] bg-white">
            <div className="p-6 md:p-8">
              <CaseStudyRevampSectionHeader
                eyebrow={cpsSolutionContent.flow.eyebrow}
                title={cpsSolutionContent.flow.title}
                copy={cpsSolutionContent.flow.copy}
              />
              <div className="mt-6">
                <CpsOperationsFlowDiagram />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className={`${isWhiteBackground ? "bg-[#F3F3F3]" : "bg-white"} p-6 md:p-8`}>
            <p className="type-p3 text-[#222222]">{cpsSolutionContent.closing}</p>
          </MotionReveal>
        </div>
      </Container>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged CPS Energy resident experience image"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt={activeAlt}
            className="max-h-full max-w-full rounded-[16px] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#447ACB]"
            aria-label="Close enlarged image"
          >
            ×
          </button>
        </div>
      ) : null}
    </section>
  )
}
