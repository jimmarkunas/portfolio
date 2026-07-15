"use client"

import { Container } from "@/components/Container"
import { ButtonLink } from "@/components/ButtonLink"
import { BookCallCta } from "@/components/BookCallCta"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyFinalCtaSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-8 rounded-[28px] border border-black/8 bg-[#F8F8F8] p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <CaseStudySectionHeader
            eyebrow={data.finalCta.eyebrow}
            title={data.finalCta.title}
            copy={data.finalCta.copy}
          />

          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <BookCallCta location="case_study_test_final_cta" />
            <ButtonLink href="/cv" variant="secondary">
              View CV
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

