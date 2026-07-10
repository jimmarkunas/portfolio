import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Freebies",
    title: "Downloadable Product Resources",
    subtitle: "Practical templates, checklists, and working assets you can use right away.",
  })
}
