import type { Metadata } from "next"
import { ServicesContactPage } from "@/components/services-contact/ServicesContactPage"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Services by Jim Markunas: product leadership, platform architecture, and transformation programs.",
  canonicalPath: siteCanonicalPaths.services,
})

export default function ServicesPage() {
  return <ServicesContactPage entryPoint="services" />
}
