import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PressViewer } from "@/components/PressViewer"
import { loadAllCaseStudies, loadCaseStudyBySlug } from "@/content/case-studies"
import { findRecognitionArticle } from "@/lib/press"
import { buildPageMetadata } from "@/lib/seo"

const legacyPressFilenameAliases: Record<string, string[]> = {
  "01-Harvard-Business-Review": ["01 Harvard Business Review"],
  "02-MIT-Case-Study": ["02 MIT Case Study"],
  "03-The-Guardian-LEGO-Digital": ["03 The Guardian LEGO Digital"],
  "04-MIS-Quarterly-Executive": ["04 MIS Quarterly Executive", "04 MIS Quarterly Executive_compressed"],
  "05-BCG-Interview-Lego-CEO": ["05 BCG Interview Lego CEO"],
}

export async function generateStaticParams() {
  const params: { slug: string; filename: string }[] = []
  const studies = await loadAllCaseStudies()

  for (const { slug, study } of studies) {
    for (const row of study.recognition?.rows ?? []) {
      if (row.file) {
        const basename = row.file.split("/").pop()!.replace(/\.[^.]+$/, "")
        const filenames = [basename, ...(legacyPressFilenameAliases[basename] ?? [])]

        for (const filename of filenames) {
          params.push({ slug, filename: encodeURIComponent(filename) })
        }
      }
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; filename: string }>
}): Promise<Metadata> {
  const { slug, filename } = await params
  const study = await loadCaseStudyBySlug(slug)

  if (!study) {
    return buildPageMetadata({
      title: "Press",
      description: "Press and recognition coverage for Jim Markunas case studies.",
      canonicalPath: `/work/${slug}/press/${filename}`,
      robots: {
        index: false,
        follow: false,
      },
    })
  }

  const recognitionRows = study.recognition?.rows ?? []
  const article = findRecognitionArticle(recognitionRows, filename)

  if (!article) {
    return buildPageMetadata({
      title: `${study.breadcrumbCurrent} Press`,
      description: `Press coverage and recognition for ${study.breadcrumbCurrent} project work led by Jim Markunas.`,
      canonicalPath: `/work/${slug}/press/${filename}`,
      image: {
        url: study.hero.image.src,
        alt: study.hero.image.alt,
      },
    })
  }

  return buildPageMetadata({
    title: `${article.company} Press`,
    description: article.summary,
    canonicalPath: `/work/${slug}/press/${filename}`,
    image: {
      url: study.hero.image.src,
      alt: study.hero.image.alt,
    },
  })
}

export default async function PressViewerPage({
  params,
}: {
  params: Promise<{ slug: string; filename: string }>
}) {
  const { slug, filename } = await params
  const study = await loadCaseStudyBySlug(slug)
  if (!study) notFound()
  const recognitionRows = study.recognition?.rows
  if (!recognitionRows?.length) notFound()
  const article = findRecognitionArticle(recognitionRows, filename)
  if (!article) notFound()

  return (
    <PressViewer
      rows={recognitionRows}
      backHref={`/work/${slug}#recognition`}
      breadcrumbs={[
        { label: "Work", href: "/work" },
        { label: study.breadcrumbCurrent, href: `/work/${slug}#recognition` },
      ]}
    />
  )
}
