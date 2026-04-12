import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { caseStudySlugs } from "@/content/case-studies/case-study-map"
import { loadCaseStudyBySlug } from "@/content/case-studies"
import { buildPageMetadata } from "@/lib/seo"

type WorkPageParams = {
  slug: string
}

export async function generateStaticParams(): Promise<WorkPageParams[]> {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkPageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const study = await loadCaseStudyBySlug(slug)

  if (!study) {
    return buildPageMetadata({
      title: "Case Study",
      description:
        "Case study by Jim Markunas covering product leadership, architecture decisions, and measurable delivery outcomes.",
      canonicalPath: `/work/${slug}`,
    })
  }

  return buildPageMetadata({
    title: study.breadcrumbCurrent,
    description: study.hero.intro,
    canonicalPath: `/work/${slug}`,
  })
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<WorkPageParams>
}) {
  const { slug } = await params
  const study = await loadCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  return <CaseStudyTemplate data={study} />
}
