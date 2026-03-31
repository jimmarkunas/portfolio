"use client"

import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"

const loader = () => import("@/components/case-study/NylRevenueAttributionChart")

export function DeferredNylRevenueChart() {
  return (
    <DeferredVisualLoader
      cacheKey="nyl-revenue-attribution-chart"
      loader={loader}
      minHeightClassName="min-h-[300px]"
      loadingLabel="Loading chart..."
    />
  )
}
