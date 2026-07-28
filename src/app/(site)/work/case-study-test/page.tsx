import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

import { caseStudyPreviewRegistry } from "@/content/case-studies/revamp/preview-registry"

export default function CaseStudyRevampPreviewDashboard() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] px-6 py-16 text-[#222222] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-[#777777]">Internal review</p>
        <h1 className="type-h1-case-study mt-4">Case Study Revamp Preview</h1>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {caseStudyPreviewRegistry.map((study) => (
            <article key={study.slug} className="border border-[#D9D9D9] bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="type-eyebrow text-[#777777]">{study.slug}</p>
                  <h2 className="mt-2 text-2xl">{study.title}</h2>
                </div>
              </div>
              <div className="mt-6">
                <Link href={`/work/case-study-test/${study.slug}`} className="underline underline-offset-4 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#222222]">Open preview</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
