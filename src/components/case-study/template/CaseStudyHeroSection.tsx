import Link from "next/link"

import type { CaseStudyData } from "@/components/case-study/types"
import { CaseStudyHeroImage } from "@/components/case-study/CaseStudyHeroImage"
import { Container } from "@/components/Container"

import { CaseStudyActionButton } from "./CaseStudyActionButton"
import { BreadcrumbHomeIcon } from "./CaseStudyTemplateIcons"

export function CaseStudyHeroSection({ data }: { data: CaseStudyData }) {
  return (
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
                      <BreadcrumbHomeIcon />
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
                    <CaseStudyActionButton action={data.hero.primaryCta} variant="primary" />
                    <CaseStudyActionButton action={data.hero.secondaryCta} variant="secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CaseStudyHeroImage src={data.hero.image.src} alt={data.hero.image.alt} />
        </div>
      </Container>
    </section>
  )
}
