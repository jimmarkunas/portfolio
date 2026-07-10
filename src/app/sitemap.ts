import type { MetadataRoute } from "next"

import { loadAllCaseStudies } from "@/content/case-studies"
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
    siteRoutes.services,
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

  const studies = await loadAllCaseStudies()

  const caseStudyEntries: MetadataRoute.Sitemap = studies.map(({ slug }) => ({
    url: absoluteUrl(`/work/${slug}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const pressEntries: MetadataRoute.Sitemap = studies.flatMap(({ slug, study }) =>
    (study.recognition?.rows ?? [])
      .filter((row) => Boolean(row.file))
      .map((row) => {
        const basename = row.file!.split("/").pop()!.replace(/\.[^.]+$/, "")
        return {
          url: absoluteUrl(`/work/${slug}/press/${encodeURIComponent(basename)}/`),
          lastModified: now,
          changeFrequency: "yearly" as const,
          priority: 0.5,
        }
      })
  )

  return [...staticEntries, ...caseStudyEntries, ...pressEntries]
}
