import { createPageOgImage, pageOgImageContentType, pageOgImageSize } from "@/components/seo/PageOgImage"

export const size = pageOgImageSize
export const contentType = pageOgImageContentType

export default function OpenGraphImage() {
  return createPageOgImage({
    eyebrow: "Interview",
    title: "Enterprise Delivery Interview Deck",
    subtitle: "Hybrid agile execution, risk management, status reporting, and leadership under pressure.",
  })
}
