import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "CV",
    title: "Delivery Journey & Resume",
    subtitle: "Career highlights, awards, enterprise platforms, and measurable transformation work.",
  })
}
