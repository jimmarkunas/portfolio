import Link from "next/link"

import {
  approvedPreviewCount,
  blockedPreviewCount,
  caseStudyPreviewRegistry,
  inProgressPreviewCount,
  notStartedPreviewCount,
  totalPreviewCount,
  type CaseStudyMigrationStatus,
} from "@/content/case-studies/revamp/preview-registry"

const statusOrder: Record<CaseStudyMigrationStatus, number> = {
  approved: 0,
  "in-progress": 1,
  "not-started": 2,
  blocked: 3,
}
const studies = [...caseStudyPreviewRegistry].sort((a, b) => statusOrder[a.migrationStatus] - statusOrder[b.migrationStatus])

const summary = [
  ["Total", totalPreviewCount],
  ["Approved", approvedPreviewCount],
  ["In progress", inProgressPreviewCount],
  ["Not started", notStartedPreviewCount],
  ["Blocked", blockedPreviewCount],
] as const

export default function CaseStudyRevampPreviewDashboard() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] px-6 py-16 text-[#222222] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-[#777777]">Internal review</p>
        <h1 className="type-h1-case-study mt-4">Case Study Revamp Preview</h1>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {summary.map(([label, value]) => (
            <div key={label} className="border border-[#D9D9D9] bg-white px-5 py-4">
              <p className="type-eyebrow text-[#777777]">{label}</p>
              <p className="mt-2 text-3xl">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {studies.map((study) => (
            <article key={study.slug} className="border border-[#D9D9D9] bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="type-eyebrow text-[#777777]">{study.slug}</p>
                  <h2 className="mt-2 text-2xl">{study.title}</h2>
                </div>
                <span className="shrink-0 border border-[#D9D9D9] px-3 py-1 text-sm">{study.migrationStatus}</span>
              </div>
              <dl className="mt-6 grid gap-x-6 gap-y-4 text-sm sm:grid-cols-2">
                <div><dt className="text-[#777777]">Live renderer</dt><dd>{study.liveRenderer}</dd></div>
                <div><dt className="text-[#777777]">Complexity</dt><dd>{study.complexity}</dd></div>
                <div><dt className="text-[#777777]">Source readiness</dt><dd>{study.sourceReadiness}</dd></div>
                <div><dt className="text-[#777777]">Bespoke Solution</dt><dd>{study.bespokeSolution ? "Yes" : "No"}</dd></div>
              </dl>
              {study.approvedTag && <p className="mt-5 text-sm text-[#777777]">Approval: {study.approvedTag}</p>}
              {study.notes && <p className="mt-2 text-sm text-[#777777]">{study.notes}</p>}
              <div className="mt-6">
                {study.previewHref ? (
                  <Link href={study.previewHref} className="underline underline-offset-4 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#222222]">Open preview</Link>
                ) : (
                  <span className="text-sm text-[#999999]">Preview unavailable</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
