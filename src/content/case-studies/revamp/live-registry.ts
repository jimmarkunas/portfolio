import type { ComponentType } from "react"

import type { CaseStudyRevampData } from "./types"
import { caseStudyPreviewRegistry } from "./preview-registry"

export type LiveRevampRegistryEntry = {
  slug: string
  loadContent: () => Promise<CaseStudyRevampData>
  loadTemplate: ComponentType<{ data: CaseStudyRevampData }>
}

export const liveRevampRegistry: Record<string, LiveRevampRegistryEntry> = Object.fromEntries(
  caseStudyPreviewRegistry.map((record) => {
    if (!record.loadContent || !record.loadTemplate) {
      throw new Error(`Approved revamp record is missing a loader or template: ${record.slug}`)
    }
    return [record.slug, { slug: record.slug, loadContent: record.loadContent, loadTemplate: record.loadTemplate }]
  }),
) as Record<string, LiveRevampRegistryEntry>

export const liveRevampSlugs = Object.keys(liveRevampRegistry)

export async function loadLiveRevampCaseStudy(slug: string) {
  const entry = liveRevampRegistry[slug]
  if (!entry) return null
  return { data: await entry.loadContent(), Template: entry.loadTemplate }
}
