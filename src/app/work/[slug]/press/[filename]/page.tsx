import { notFound } from "next/navigation"
import { PressViewer } from "@/components/PressViewer"
import { caseStudyRegistry } from "@/content/case-studies"

export default async function PressViewerPage({
  params,
}: {
  params: Promise<{ slug: string; filename: string }>
}) {
  const { slug } = await params
  const study = caseStudyRegistry[slug]
  if (!study) notFound()

  return (
    <PressViewer
      rows={study.recognition.rows}
      backHref={`/work/${slug}#recognition`}
      breadcrumbs={[
        { label: "Work", href: "/work" },
        { label: study.breadcrumbCurrent, href: `/work/${slug}#recognition` },
      ]}
    />
  )
}
