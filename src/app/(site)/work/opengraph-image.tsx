import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Portfolio",
    title: "Case Studies & Delivery Outcomes",
    subtitle: "Commerce transformation, platform modernization, and measurable business impact across complex programs.",
  })
}
