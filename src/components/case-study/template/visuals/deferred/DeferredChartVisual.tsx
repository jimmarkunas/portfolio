"use client"

import type { CaseStudyPreQuoteChartKey } from "@/content/case-studies"
import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"
import type { ComponentType } from "react"

type SharedVisualProps = {
  className?: string
  minHeightClassName?: string
  loadingLabel?: string
  eager?: boolean
}

const PROBLEM_CHART_LOADERS = {
  "retail-vs-dtc": () => import("@/components/case-study/MrsMeyersRetailVsDtcChart"),
  "method-traffic-continuity": () => import("@/components/case-study/MethodTrafficContinuityChart"),
} as const

const PREQUOTE_CHART_LOADERS: Record<
  CaseStudyPreQuoteChartKey,
  () => Promise<{ default: ComponentType<any> }>
> = {
  "directv-revenue": () =>
    import("@/components/case-study/DirecTVRevenueChart").then((module) => ({
      default: module.DirecTVRevenueChart,
    })),
  "bi-data-silos": () => import("@/components/case-study/BoehringerDataSilosDiagram"),
  "nyl-velocity-chart": () => import("@/components/case-study/NylVelocityChart"),
}

type DeferredProblemChartVisualProps = SharedVisualProps & {
  chartKey: keyof typeof PROBLEM_CHART_LOADERS
  brandName?: string
}

export function DeferredProblemChartVisual({
  chartKey,
  brandName,
  className,
  minHeightClassName,
  loadingLabel = "Loading chart...",
  eager,
}: DeferredProblemChartVisualProps) {
  return (
    <DeferredVisualLoader
      cacheKey={`problem-chart:${chartKey}`}
      loader={PROBLEM_CHART_LOADERS[chartKey]}
      componentProps={{ brandName }}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={eager}
    />
  )
}

type DeferredPreQuoteChartVisualProps = SharedVisualProps & {
  chartKey: CaseStudyPreQuoteChartKey
}

export function DeferredPreQuoteChartVisual({
  chartKey,
  className,
  minHeightClassName,
  loadingLabel = "Loading chart...",
  eager,
}: DeferredPreQuoteChartVisualProps) {
  return (
    <DeferredVisualLoader
      cacheKey={`prequote-chart:${chartKey}`}
      loader={PREQUOTE_CHART_LOADERS[chartKey]}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={eager}
    />
  )
}
