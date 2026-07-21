import { caseStudy } from "@/content/case-studies/newyorklife"
import { createLegacyParityCaseStudy } from "./createLegacyParityCaseStudy"

export const newyorklifeRevampCaseStudy = createLegacyParityCaseStudy({
  legacy: caseStudy,
  slug: "newyorklife",
  solutionMode: "diagram",
  solutionDiagramKey: "nyl-rbac-workflow",
  impactEditorialImage: "/newyorklife/corecms-revenue-attribution.png",
  solutionSecondarySummary: "The technology mattered, but the real challenge was operational. New York Life needed a platform that matched the way the business actually worked, from agent requests to home office review and centralized publishing, without brittle workarounds. Once the roles, permissions, and workflows were locked in, the platform stopped behaving like disconnected pages and started behaving like a real system. Compliance got visibility, agents got speed, and the brand stopped breaking at the edges. Built for 12,000+ governed sites and reduced ambiguity through clear role boundaries and workflow states.",
  heroMetricsOverride: caseStudy.atAGlance.stats.filter((_, index) => index !== 0).map((metric, index) => index === 0 ? { ...metric, value: "12K" } : metric),
  relatedSlugs: ["dtv01", "bi"],
  allowedAssetRoots: ["/newyorklife/"],
  ownership: [
    { title: "Multi-tenant product model", sourcePath: "role.narrative.highlights[0]" },
    { title: "Permissions and compliance", sourcePath: "role.narrative.highlights[1]" },
    { title: "Stakeholder alignment", sourcePath: "role.narrative.highlights[2]" },
    { title: "Platform delivery", sourcePath: "delivery.phases[3].copy" },
    { title: "Launch and performance", sourcePath: "delivery.phases[4].copy" },
  ],
})
