import { notFound } from "next/navigation"
import { PressViewer } from "@/components/PressViewer"
import { loadAllCaseStudies, loadCaseStudyBySlug } from "@/content/case-studies"

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

export default async function PressViewerPage({
  params,
}: {
  params: Promise<{ slug: string; filename: string }>
}) {
  const { slug } = await params
  const study = await loadCaseStudyBySlug(slug)
  if (!study) notFound()
  const recognitionRows = study.recognition?.rows
  if (!recognitionRows?.length) notFound()

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
