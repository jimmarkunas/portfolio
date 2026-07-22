import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { StructuredData } from "@/components/seo/StructuredData"
import { liveRevampSlugs, loadLiveRevampCaseStudy } from "@/content/case-studies/revamp/live-registry"
import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"
import { buildPageMetadata } from "@/lib/seo"
import { createCaseStudyStructuredData } from "@/lib/structured-data"

type WorkPageParams = {
  slug: string
}

function buildCaseStudyMetadata(data: CaseStudyRevampData, slug: string): Metadata {
  const metadata = data.metadata
  return buildPageMetadata({
    title: metadata?.title ?? data.breadcrumbCurrent,
    description: metadata?.description ?? data.hero.intro,
    canonicalPath: `/work/${slug}`,
    image: metadata
      ? { url: metadata.image.src, alt: metadata.image.alt, width: metadata.image.width, height: metadata.image.height }
      : { url: data.hero.image.src, alt: data.hero.image.alt },
  })
}

export async function generateStaticParams(): Promise<WorkPageParams[]> {
  return liveRevampSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkPageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const study = await loadLiveRevampCaseStudy(slug)

  if (!study) {
    return buildPageMetadata({
      title: "Case Study",
      description:
        "Case study by Jim Markunas covering product leadership, architecture decisions, and measurable delivery outcomes.",
      canonicalPath: `/work/${slug}`,
    })
  }

  return buildCaseStudyMetadata(study.data, slug)
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<WorkPageParams>
}) {
  const { slug } = await params
  const study = await loadLiveRevampCaseStudy(slug)

  if (!study) {
    notFound()
  }

  const structuredData = createCaseStudyStructuredData({ templateVersion: "revamp", data: study.data })

  return (
    <>
      <StructuredData data={structuredData} />
      <study.Template data={study.data} />
    </>
  )
}
