"use client"

import { DeferredVisualLoader } from "@/components/case-study/template/visuals/deferred/DeferredVisualLoader"

const loader = () => import("@/components/case-study/NylEditorialCarousel")

type Props = {
  images: string[]
}

export function DeferredNylCarousel({ images }: Props) {
  return (
    <DeferredVisualLoader
      cacheKey={`nyl-editorial-carousel-${images.length}`}
      loader={loader}
      componentProps={{ images }}
      minHeightClassName="min-h-[240px] md:min-h-[400px]"
      loadingLabel="Loading gallery..."
      eager
    />
  )
}
