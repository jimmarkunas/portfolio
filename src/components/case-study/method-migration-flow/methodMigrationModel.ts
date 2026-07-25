export const FRAME_WIDTH = 1672
export const FRAME_HEIGHT = 941

export type Lane = "seo" | "conversion" | "both"

export type NodeId =
  | "search-console"
  | "seo-mapping"
  | "redirect-build"
  | "zero-traffic-loss"
  | "conversion-audit"
  | "migration-platform"
  | "aep-personalization"
  | "conversion-lift"
  | "revenue-uplift"

export const NODE_META: Record<NodeId, { label: string; lane: Lane }> = {
  "search-console": { label: "Google Search Console", lane: "seo" },
  "seo-mapping": { label: "SEO migration mapping", lane: "seo" },
  "redirect-build": { label: "301 redirect build", lane: "seo" },
  "zero-traffic-loss": { label: "Zero traffic loss", lane: "seo" },
  "conversion-audit": { label: "Conversion audit", lane: "conversion" },
  "migration-platform": { label: "Migration platform", lane: "conversion" },
  "aep-personalization": { label: "AEP personalization", lane: "conversion" },
  "conversion-lift": { label: "Conversion lift", lane: "conversion" },
  "revenue-uplift": { label: "20% DTC revenue uplift", lane: "both" },
}

export type SelectionState = {
  activeNode: NodeId | null
  activeLane: Lane | null
  selectedNode: NodeId | null
  bindNode: (id: NodeId) => {
    "aria-pressed": boolean
    onBlur: () => void
    onClick: () => void
    onFocus: () => void
    onPointerEnter: () => void
    onPointerLeave: () => void
  }
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export function laneMatches(activeLane: Lane | null, lane: Lane) {
  if (!activeLane || activeLane === "both" || lane === "both") return true
  return activeLane === lane
}
