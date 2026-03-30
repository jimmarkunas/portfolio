import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { caseStudyRegistry } from "@/content/case-studies"

type WorkPageParams = {
  slug: string
}

export async function generateStaticParams(): Promise<WorkPageParams[]> {
  return Object.keys(caseStudyRegistry).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkPageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudyRegistry[slug]

  if (!study) {
    return {
      title: "Case Study | Jim Markunas",
    }
  }

  return {
    title: `${study.breadcrumbCurrent} | Jim Markunas`,
    description: study.hero.intro,
  }
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<WorkPageParams>
}) {
  const { slug } = await params
  const study = caseStudyRegistry[slug]

  if (!study) {
    notFound()
  }

  return <CaseStudyTemplate data={study} />
}
