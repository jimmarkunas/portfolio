import type { ComponentType } from "react"
import type { CaseStudyRevampData } from "./types"

export type CaseStudyMigrationStatus = "approved" | "in-progress" | "not-started" | "blocked"
export type CaseStudyComplexity = "A" | "B" | "C" | "D" | "E"
export type CaseStudySourceReadiness = "complete" | "partial" | "legacy-only" | "blocked"
export type CaseStudyPreviewRouteKind = "explicit" | "dynamic" | "none"

export type CaseStudyPreviewRecord = {
  slug: string
  title: string
  liveRenderer: "legacy" | "revamp"
  migrationStatus: CaseStudyMigrationStatus
  complexity: CaseStudyComplexity
  sourceReadiness: CaseStudySourceReadiness
  routeKind: CaseStudyPreviewRouteKind
  previewHref?: string
  approvedTag?: string
  bespokeSolution: boolean
  notes?: string
  loadContent?: () => Promise<CaseStudyRevampData>
  loadTemplate?: () => Promise<ComponentType<{ data: CaseStudyRevampData }>>
}

const record = (
  slug: string,
  title: string,
  complexity: CaseStudyComplexity,
  sourceReadiness: CaseStudySourceReadiness,
  bespokeSolution: boolean,
  extras: Partial<Pick<CaseStudyPreviewRecord, "migrationStatus" | "routeKind" | "previewHref" | "approvedTag" | "notes" | "loadContent" | "loadTemplate">> = {},
): CaseStudyPreviewRecord => ({
  slug,
  title,
  liveRenderer: "legacy",
  migrationStatus: "not-started",
  complexity,
  sourceReadiness,
  routeKind: "none",
  bespokeSolution,
  ...extras,
})

export const caseStudyPreviewRegistry: CaseStudyPreviewRecord[] = [
  record("cps", "CPS Energy: Smart Streetlight & Smart City Operations", "C", "complete", true, {
    migrationStatus: "in-progress",
    routeKind: "dynamic",
    previewHref: "/work/case-study-test/cps",
    loadContent: () => import("./cps").then((module) => module.caseStudy),
    loadTemplate: () => import("@/components/case-study/revamp/cps/CaseStudyRevampCpsTemplate").then((module) => module.CaseStudyRevampCpsTemplate),
  }),
  record("dtv01", "Turning DIRECTV's Slow Offer Engine to a Revenue Machine", "B", "legacy-only", false),
  record("newyorklife", "New York Life's Scalable Product Platform", "C", "legacy-only", true),
  record("modere", "Winning Awards And Making $1B With Modere", "C", "complete", true, {
    migrationStatus: "approved",
    routeKind: "explicit",
    previewHref: "/work/case-study-test/modere",
    approvedTag: "modere-revamp-approved-2026-07-18",
  }),
  record("bi", "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce", "C", "complete", true, {
    migrationStatus: "approved",
    routeKind: "explicit",
    previewHref: "/work/case-study-test/bi",
    approvedTag: "bi-revamp-approved-2026-07-19",
  }),
  record("mm", "Launching Mrs. Meyer's First DTC Channel From Scratch", "C", "partial", true),
  record("method", "Method: Brand-True DTC Launch on Shared Rails", "C", "legacy-only", true, {
    migrationStatus: "in-progress",
    routeKind: "explicit",
    previewHref: "/work/case-study-test/method",
    notes: "Diagram-only preview; live Method and shared Mrs. Meyer's routes remain unchanged.",
  }),
  record("murad", "Murad: From Chaos to Creation", "C", "legacy-only", true),
  record("k2", "Headless/Composable Commerce for 9 K2 Brands", "C", "legacy-only", true),
  record("cbdistillery", "CBDistillery's: From De-Banked to $40m", "B", "legacy-only", false),
  record("foh", "Turning Frederick's Into Celebrity-Driven DTC", "B", "complete", false, {
    migrationStatus: "approved",
    routeKind: "explicit",
    previewHref: "/work/case-study-test/foh",
    approvedTag: "foh-responsive-stasis-2026-07-18",
  }),
  record("lego", "LEGO's Digital Transformation With BCG", "B", "legacy-only", false),
  record("cwg", "Chicks With Guns: Building a Digital Music Magazine", "D", "legacy-only", true, {
    notes: "Founder-specific template required",
  }),
  record("aa", "Saving American Apparel With Digital Commerce", "B", "legacy-only", false),
  record("zevo", "Interactive Internet TV Before it was Mainstream", "D", "legacy-only", true, {
    notes: "Founder-specific template required",
  }),
  record("dtv02", "Leading the Launch of DIRECTV Everywhere", "B", "legacy-only", false),
]

export function getCaseStudyPreview(slug: string) {
  return caseStudyPreviewRegistry.find((study) => study.slug === slug)
}

export const approvedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "approved").length
export const inProgressPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "in-progress").length
export const notStartedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "not-started").length
export const blockedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "blocked").length
export const totalPreviewCount = caseStudyPreviewRegistry.length
