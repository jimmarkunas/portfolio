import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyRenderModeProvider } from "@/components/case-study/revamp/CaseStudyRenderMode"
import { liveRevampSlugs, loadLiveRevampCaseStudy } from "@/content/case-studies/revamp/live-registry"
import { buildPageMetadata } from "@/lib/seo"

type PrintPageParams = { slug: string }

export function generateStaticParams(): PrintPageParams[] {
  return liveRevampSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<PrintPageParams> }): Promise<Metadata> {
  const { slug } = await params
  const study = await loadLiveRevampCaseStudy(slug)

  if (!study) {
    return { robots: { index: false, follow: false } }
  }

  const data = study.data
  const metadata = data.metadata
  return buildPageMetadata({
    title: metadata?.title ?? data.breadcrumbCurrent,
    description: data.hero.intro,
    canonicalPath: `/work/${slug}`,
    image: metadata
      ? { url: metadata.image.src, alt: metadata.image.alt, width: metadata.image.width, height: metadata.image.height }
      : { url: data.hero.image.src, alt: data.hero.image.alt },
    robots: { index: false, follow: false },
  })
}

export default async function CaseStudyPrintPage({ params }: { params: Promise<PrintPageParams> }) {
  const { slug } = await params
  const study = await loadLiveRevampCaseStudy(slug)
  if (!study) notFound()

  return (
    <CaseStudyRenderModeProvider mode="print">
      <study.Template data={study.data} />
    </CaseStudyRenderModeProvider>
  )
}
