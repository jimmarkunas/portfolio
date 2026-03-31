"use client"

import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"

const loader = () => import("@/components/case-study/NylVelocityChart")

export function DeferredNylVelocityChart() {
  return (
    <DeferredVisualLoader
      cacheKey="nyl-velocity-chart"
      loader={loader}
      minHeightClassName="min-h-[349px]"
      loadingLabel="Loading chart..."
      eager
    />
  )
}
