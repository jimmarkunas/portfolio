"use client"

import type { GlobalLocation } from "@/content/case-studies/types"
import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"

const GLOBAL_LOCATIONS_LOADER = () =>
  import("@/components/case-study/GlobalLocationsMap").then((module) => ({
    default: module.GlobalLocationsMap,
  }))

type DeferredGlobalLocationsVisualProps = {
  title: string
  locations: GlobalLocation[]
  className?: string
  minHeightClassName?: string
  loadingLabel?: string
  eager?: boolean
}

export function DeferredGlobalLocationsVisual({
  title,
  locations,
  className,
  minHeightClassName,
  loadingLabel = "Loading global locations...",
  eager,
}: DeferredGlobalLocationsVisualProps) {
  return (
    <DeferredVisualLoader
      cacheKey="global-locations"
      loader={GLOBAL_LOCATIONS_LOADER}
      componentProps={{ title, locations }}
      className={className}
      minHeightClassName={minHeightClassName}
      loadingLabel={loadingLabel}
      eager={eager}
    />
  )
}
