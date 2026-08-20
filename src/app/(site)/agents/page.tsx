import type { Metadata } from "next"

import { agentsContent } from "@/content/site/agents"
import { siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { AgentsPage } from "./AgentsPage"

export const metadata: Metadata = buildPageMetadata({
  title: agentsContent.meta.title,
  description: agentsContent.meta.description,
  canonicalPath: siteCanonicalPaths.agents,
  routeMarker: "agents",
  useDefaultImage: false,
})

export default AgentsPage
