"use client"

import dynamic from "next/dynamic"
import type { GlobalLocation } from "@/components/case-study/GlobalLocationsMapInner"

type Props = {
  title: string
  locations: GlobalLocation[]
  clusterMarkers?: boolean
}

const GlobalLocationsMapClient = dynamic(
  () => import("@/components/case-study/GlobalLocationsMapInner").then((mod) => mod.GlobalLocationsMapInner),
  { ssr: false },
)

export type { GlobalLocation }

export function GlobalLocationsMap({ title, locations, clusterMarkers = true }: Props) {
  return <GlobalLocationsMapClient title={title} locations={locations} clusterMarkers={clusterMarkers} />
}
