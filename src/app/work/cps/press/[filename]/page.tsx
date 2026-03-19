import { PressViewer } from "@/components/PressViewer"
import { cpsEnergyCaseStudy } from "@/content/case-studies/cps-energy"

export default function CpsPressViewerPage() {
  return (
    <PressViewer
      rows={cpsEnergyCaseStudy.recognition.rows}
      backHref="/work/cps#recognition"
      breadcrumbs={[
        { label: "Work", href: "/work" },
        { label: "CPS Energy", href: "/work/cps#recognition" },
      ]}
    />
  )
}
