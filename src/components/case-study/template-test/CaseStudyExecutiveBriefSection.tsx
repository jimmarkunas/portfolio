"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { CaseStudyTemplateTestData } from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

export function CaseStudyExecutiveBriefSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <MotionReveal preset="section" className="flex flex-col gap-8">
            <CaseStudySectionHeader
              eyebrow="Executive Brief"
              title="Recruiter-readable context in one view"
              copy="This section keeps the facts compact and the narrative readable so the page can be scanned quickly without losing the shape of the work."
            />

            <dl className="divide-y divide-black/10 border-y border-black/10">
              {data.executiveBrief.facts.map((fact) => (
                <div key={fact.label} className="grid gap-2 py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                  <dt className="type-p4 uppercase tracking-[0.1em] text-[#7B7B7B]">{fact.label}</dt>
                  <dd className="type-p2 text-[#222222]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>

          <MotionReveal preset="card" delay={0.04} className="flex flex-col gap-4">
            {[
              ["Problem", data.executiveBrief.problem],
              ["Mandate", data.executiveBrief.mandate],
              ["What I Changed", data.executiveBrief.whatIChanged],
              ["Outcome", data.executiveBrief.outcome],
            ].map(([label, copy]) => (
              <article key={label} className="rounded-[20px] border border-black/8 bg-[#F8F8F8] p-6">
                <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">{label}</div>
                <p className="type-p2 mt-3 text-[#222222]">{copy}</p>
              </article>
            ))}
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}

