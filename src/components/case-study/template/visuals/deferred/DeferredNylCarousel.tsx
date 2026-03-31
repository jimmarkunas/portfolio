"use client"

import NylEditorialCarousel from "@/components/case-study/NylEditorialCarousel"

type Props = {
  images: string[]
}

export function DeferredNylCarousel({ images }: Props) {
  return <NylEditorialCarousel images={images} />
}
