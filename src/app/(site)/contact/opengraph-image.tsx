import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Contact",
    title: "Let’s Talk About the Program",
    subtitle: "Available for product leadership, architecture strategy, and high-stakes delivery work.",
  })
}
