import type { CaseStudyRevampData } from "@/content/case-studies/revamp/types"

export type CaseStudyTool = {
  label: string
  icon: string
}

export type CaseStudySolutionDiagramKey =
  | "murad-architecture"
  | "bi-commerce-ecosystem"
  | "scj-commerce-architecture"
  | "method-seo-cro-flow"
  | "modere-simulation"
  | "nyl-rbac-workflow"

export type CaseStudyPreQuoteChartKey = "directv-revenue" | "bi-data-silos" | "nyl-velocity-chart"

export type CaseStudyMedia =
  | {
      kind: "image"
      src: string
      alt: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "video-placeholder"
      title: string
      subtitle: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "youtube"
      videoId: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "video"
      src: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "cloudinary-video"
      cloudName: string
      publicId: string
      aspectRatio: "16/9" | "9/16"
    }
  | {
      kind: "react-diagram"
      component: "bi-data-silos" | "nyl-velocity-chart" | "directv-revenue" | "retail-vs-dtc" | "method-traffic-continuity"
      brandName?: string
    }

export type DiagramInputNode = {
  id: string
  label: string
  icon: string
  descriptor: string
  tier: string
}

export type DiagramOutputNode = {
  id: string
  label: string
  glyph: string
  descriptor: string
  tier?: string
}

export type DiagramIntegration = {
  id: string
  label: string
  icon: string
}

export type DiagramPill = {
  id: string
  label: string
}

export type DiagramTooltip = {
  title: string
  body: string
}

export type DiagramData = {
  inputs: DiagramInputNode[]
  outputs: DiagramOutputNode[]
  integrations: DiagramIntegration[]
  integrationsLabel?: string
  pills: DiagramPill[]
  tooltips: Record<string, DiagramTooltip>
}

export type GlobalLocation = {
  city: string
  country: string
  coordinates: [number, number]
}

export type LoadedRevampCaseStudy = {
  templateVersion: "revamp"
  data: CaseStudyRevampData
}
