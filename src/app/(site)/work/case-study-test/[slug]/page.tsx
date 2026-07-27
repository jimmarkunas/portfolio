import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { caseStudyPreviewRegistry, getCaseStudyPreview } from "@/content/case-studies/revamp/preview-registry"

type PreviewPageProps = { params: { slug: string } }

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export function generateStaticParams() {
  return caseStudyPreviewRegistry
    .filter((study) => study.loadContent)
    .map((study) => ({ slug: study.slug }))
}

export default async function DynamicCaseStudyPreviewPage({ params }: PreviewPageProps) {
  const study = getCaseStudyPreview(params.slug)
  if (!study || !study.loadContent) notFound()

  const data = await study.loadContent()
  const Template = study.loadTemplate ?? CaseStudyRevampTemplate
  return <Template data={data} />
}
