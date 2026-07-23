import type { MetadataRoute } from "next"

import { liveRevampSlugs } from "@/content/case-studies/revamp/live-registry"
import { siteRoutes } from "@/content/site"
import { SEO_SITE_URL } from "@/lib/seo"

function absoluteUrl(path: string): string {
  return new URL(path, SEO_SITE_URL).toString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const publicStaticRoutes = [
    siteRoutes.home,
    siteRoutes.work,
    siteRoutes.cv,
    siteRoutes.contact,
    siteRoutes.freebies,
    siteRoutes.interview,
    siteRoutes.geekle2026,
  ]

  const staticEntries: MetadataRoute.Sitemap = publicStaticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === siteRoutes.home ? "weekly" : "monthly",
    priority:
      route === siteRoutes.home ? 1 :
      route === siteRoutes.work ? 0.9 :
      route === siteRoutes.contact ? 0.8 :
      0.7,
  }))

  const caseStudyEntries: MetadataRoute.Sitemap = liveRevampSlugs.map((slug) => ({
    url: absoluteUrl(`/work/${slug}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticEntries, ...caseStudyEntries]
}
