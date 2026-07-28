import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { liveRevampSlugs, loadLiveRevampCaseStudy } from "@/content/case-studies/revamp/case-study-registry"

type PreviewPageProps = { params: { slug: string } }

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export function generateStaticParams() {
  return liveRevampSlugs.map((slug) => ({ slug }))
}

export default async function DynamicCaseStudyPreviewPage({ params }: PreviewPageProps) {
  const study = await loadLiveRevampCaseStudy(params.slug)
  if (!study) notFound()

  return <study.Template data={study.data} />
}
