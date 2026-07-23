"use client"

import type { CaseStudySolutionDiagramKey, DiagramData } from "@/content/case-studies"
import ModereSimulation from "@/components/case-study/modere-simulation/ModereSimulation"
import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"
import { useCaseStudyRenderMode } from "@/components/case-study/revamp/CaseStudyRenderMode"
import type { ComponentType } from "react"

type SharedVisualProps = {
  className?: string
  minHeightClassName?: string
  loadingLabel?: string
  eager?: boolean
}

const SOLUTION_DIAGRAM_LOADERS: Record<
  CaseStudySolutionDiagramKey,
  () => Promise<{ default: ComponentType<any> }>
> = {
  "murad-architecture": () => import("@/components/case-study/MuradArchitectureDiagram"),
  "bi-commerce-ecosystem": () => import("@/components/case-study/bi-commerce-ecosystem-diagram"),
  "scj-commerce-architecture": () => import("@/components/case-study/SCJCommerceArchitecture"),
  "modere-simulation": () => import("@/components/case-study/modere-simulation/ModereSimulation"),
  "nyl-rbac-workflow": () => import("@/components/case-study/NylRbacWorkflow"),
}

const HEADLESS_COMMERCE_LOADER = () => import("@/app/diagrams/headless_commerce_react")

const MEDIA_REACT_LOADERS = {
  "bi-data-silos": () => import("@/components/case-study/BoehringerDataSilosDiagram"),
} as const

type DeferredSolutionDiagramVisualProps = SharedVisualProps & {
  diagram?: DiagramData
  diagramKey?: CaseStudySolutionDiagramKey
}

export function DeferredSolutionDiagramVisual({
  diagram,
  diagramKey,
  className,
  minHeightClassName,
  loadingLabel = "Loading architecture diagram...",
  eager,
}: DeferredSolutionDiagramVisualProps) {
  const renderMode = useCaseStudyRenderMode()
  const shouldLoadEagerly = eager || renderMode === "print"
  if (diagram) {
    return (
      <DeferredVisualLoader
        cacheKey="solution-diagram:headless-commerce"
        loader={HEADLESS_COMMERCE_LOADER}
        componentProps={{ data: diagram }}
        className={className}
        minHeightClassName={minHeightClassName}
        loadingLabel={loadingLabel}
        eager={shouldLoadEagerly}
      />
    )
  }

  if (!diagramKey) {
    return null
  }

  // Render Modere simulation directly in dev so Fast Refresh updates without manual page reloads.
  if (process.env.NODE_ENV === "development" && diagramKey === "modere-simulation") {
    return (
      <div className={className}>
        <ModereSimulation />
      </div>
    )
  }

  return (
    <DeferredVisualLoader
      cacheKey={`solution-diagram:${diagramKey}`}
      loader={SOLUTION_DIAGRAM_LOADERS[diagramKey]}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={shouldLoadEagerly}
    />
  )
}

type DeferredMediaReactDiagramProps = SharedVisualProps & {
  component: keyof typeof MEDIA_REACT_LOADERS
}

export function DeferredMediaReactDiagram({
  component,
  className,
  minHeightClassName,
  loadingLabel = "Loading diagram...",
  eager,
}: DeferredMediaReactDiagramProps) {
  return (
    <DeferredVisualLoader
      cacheKey={`media-react-diagram:${component}`}
      loader={MEDIA_REACT_LOADERS[component]}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={eager}
    />
  )
}
