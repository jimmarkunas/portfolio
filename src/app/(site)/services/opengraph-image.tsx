import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Services",
    title: "How I Help Teams Ship",
    subtitle: "Product leadership, platform architecture, and transformation programs for teams under pressure to deliver.",
  })
}
