import type { Metadata } from "next"

import MethodMigrationFlowDiagram from "@/components/case-study/MethodMigrationFlowDiagram"
import { SectionShell } from "@/components/SectionShell"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Method Migration Diagram Preview",
  description: "Internal preview route for the Method migration and conversion diagram.",
  canonicalPath: "/work/case-study-test/method",
  robots: {
    index: false,
    follow: false,
  },
})

export default function MethodDiagramPreviewPage() {
  return (
    <SectionShell as="main" surface="white" containerClassName="py-10 md:py-14 lg:py-16">
      <MethodMigrationFlowDiagram />
    </SectionShell>
  )
}
