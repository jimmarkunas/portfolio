import type { Metadata } from "next"
import { ServicesContactPage } from "@/components/services-contact/ServicesContactPage"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Jim Markunas. Available for product leadership, platform architecture, and transformation programs.",
  canonicalPath: siteCanonicalPaths.contact,
  useDefaultImage: false,
})

export default function ContactPage() {
  return <ServicesContactPage />
}
