import type { MetadataRoute } from "next"

import { SEO_SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview/", "/dshhacks2026/", "/llmday2026/", "/interviews/"],
      },
    ],
    sitemap: `${SEO_SITE_URL}/sitemap.xml`,
    host: SEO_SITE_URL,
  }
}
