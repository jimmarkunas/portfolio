"use client"

import type { CaseStudySolutionDiagramKey, DiagramData } from "@/components/case-study/types"
import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"
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
  if (diagram) {
    return (
      <DeferredVisualLoader
        cacheKey="solution-diagram:headless-commerce"
        loader={HEADLESS_COMMERCE_LOADER}
        componentProps={{ data: diagram }}
        className={className}
        minHeightClassName={minHeightClassName}
        loadingLabel={loadingLabel}
        eager={eager}
      />
    )
  }

  if (!diagramKey) {
    return null
  }

  return (
    <DeferredVisualLoader
      cacheKey={`solution-diagram:${diagramKey}`}
      loader={SOLUTION_DIAGRAM_LOADERS[diagramKey]}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={eager}
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
