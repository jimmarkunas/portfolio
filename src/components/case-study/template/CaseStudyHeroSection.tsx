import Link from "next/link"

import type { CaseStudyData } from "@/content/case-studies"
import { CaseStudyHeroImage } from "@/components/case-study/CaseStudyHeroImage"
import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { TextLink } from "@/components/TextLink"

import { CaseStudyActionButton } from "./CaseStudyActionButton"
import { BreadcrumbHomeIcon } from "./CaseStudyTemplateIcons"

export function CaseStudyHeroSection({ data }: { data: CaseStudyData }) {
  return (
    <section className="bg-[#F3F3F3]">
      <Container>
        <div className="relative overflow-hidden bg-[#F3F3F3]">
          <div className="pb-8 pt-6 md:pb-10 md:pt-10 lg:pb-0 lg:pt-[56px]">
            <div className="flex flex-col gap-4 lg:gap-6">
              <MotionReveal preset="section">
                <nav aria-label="Breadcrumb" className="type-p4 text-[#222222]">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#222222] text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#447ACB] hover:text-white"
                        href="/"
                        aria-label="Home"
                      >
                        <BreadcrumbHomeIcon />
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-[#222222]">
                      &gt;
                    </li>
                    <li>
                      <TextLink href="/work">Case Studies</TextLink>
                    </li>
                    <li aria-hidden="true" className="text-[#222222]">
                      &gt;
                    </li>
                    <li className="text-[#222222]">{data.breadcrumbCurrent}</li>
                  </ol>
                </nav>
              </MotionReveal>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_724px] lg:items-start lg:gap-12">
                <MotionReveal preset="section" className="lg:pt-1">
                  <div>
                  <h1 className="type-h1-case-study -mt-2 text-[#222222]">{data.hero.title}</h1>
                  </div>
                </MotionReveal>

                <MotionReveal preset="section" delay={0.05} className="max-w-[724px]">
                  <p className="type-p2 max-w-[724px] text-black/80 lg:text-[18px] lg:leading-7">
                    {data.hero.intro}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CaseStudyActionButton action={data.hero.primaryCta} variant="primary" />
                    <CaseStudyActionButton action={data.hero.secondaryCta} variant="secondary" />
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>

          <MotionReveal preset="image">
            <CaseStudyHeroImage src={data.hero.image.src} alt={data.hero.image.alt} />
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
