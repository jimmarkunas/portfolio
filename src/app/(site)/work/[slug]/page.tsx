import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate"
import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { StructuredData } from "@/components/seo/StructuredData"
import { caseStudySlugs } from "@/content/case-studies"
import { loadCaseStudyBySlug } from "@/content/case-studies"
import type { LoadedCaseStudy } from "@/content/case-studies"
import { buildPageMetadata } from "@/lib/seo"
import { createCaseStudyStructuredData } from "@/lib/structured-data"

type WorkPageParams = {
  slug: string
}

function buildCaseStudyMetadata(study: LoadedCaseStudy, slug: string): Metadata {
  switch (study.templateVersion) {
    case "revamp": {
      const metadata = study.data.metadata
      return buildPageMetadata({
        title: metadata?.title ?? study.data.breadcrumbCurrent,
        description: metadata?.description ?? study.data.hero.intro,
        canonicalPath: `/work/${slug}`,
        image: metadata
          ? {
              url: metadata.image.src,
              alt: metadata.image.alt,
              width: metadata.image.width,
              height: metadata.image.height,
            }
          : {
              url: study.data.hero.image.src,
              alt: study.data.hero.image.alt,
            },
      })
    }

    case "legacy":
    default:
      return buildPageMetadata({
        title: study.data.breadcrumbCurrent,
        description: study.data.hero.intro,
        canonicalPath: `/work/${slug}`,
        image: {
          url: study.data.hero.image.src,
          alt: study.data.hero.image.alt,
        },
      })
  }
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

  return buildCaseStudyMetadata(study, slug)
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

  const structuredData = createCaseStudyStructuredData(study)

  return (
    <>
      <StructuredData data={structuredData} />
      {(() => {
        switch (study.templateVersion) {
          case "revamp":
            return <CaseStudyRevampTemplate data={study.data} />
          case "legacy":
          default:
            return <CaseStudyTemplate data={study.data} />
        }
      })()}
    </>
  )
}
