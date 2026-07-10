import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Geekle 2026",
    title: "Practical Demo Workflows",
    subtitle: "A conference talk on delivering interactive product demos quickly and credibly.",
  })
}
