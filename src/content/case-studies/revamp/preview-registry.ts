import type { CaseStudyRevampData } from "./types"
import type { ComponentType } from "react"
import { CaseStudyRevampAaTemplate } from "@/components/case-study/revamp/aa/CaseStudyRevampAaTemplate"
import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { CaseStudyRevampCpsTemplate } from "@/components/case-study/revamp/cps/CaseStudyRevampCpsTemplate"
import { CaseStudyRevampBiTemplate } from "@/components/case-study/revamp/bi/CaseStudyRevampBiTemplate"
import { CaseStudyRevampModereLiveTemplate } from "@/components/case-study/revamp/live/CaseStudyRevampModereLiveTemplate"

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
  loadTemplate?: ComponentType<{ data: CaseStudyRevampData }>
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
  liveRenderer: "revamp",
  migrationStatus: "approved",
  complexity,
  sourceReadiness,
  routeKind: "none",
  bespokeSolution,
  ...extras,
})

export const caseStudyPreviewRegistry: CaseStudyPreviewRecord[] = [
  record("cps", "CPS Energy: Smart Streetlight & Smart City Operations", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/cps", loadContent: () => import("./cps").then((module) => module.cpsRevampCaseStudy), loadTemplate: CaseStudyRevampCpsTemplate }),
  record("dtv01", "Turning DIRECTV's Slow Offer Engine to a Revenue Machine", "B", "complete", false, { routeKind: "dynamic", previewHref: "/work/case-study-test/dtv01", loadContent: () => import("./dtv01").then((module) => module.dtv01RevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("newyorklife", "New York Life's Scalable Product Platform", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/newyorklife", loadContent: () => import("./newyorklife").then((module) => module.newyorklifeRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("modere", "Winning Awards And Making $1B With Modere", "C", "complete", true, {
    routeKind: "explicit",
    previewHref: "/work/case-study-test/modere",
    approvedTag: "modere-revamp-approved-2026-07-18",
    loadContent: () => import("./modere").then((module) => module.modereRevampCaseStudy),
    loadTemplate: CaseStudyRevampModereLiveTemplate,
  }),
  record("bi", "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce", "C", "complete", true, {
    routeKind: "explicit",
    previewHref: "/work/case-study-test/bi",
    approvedTag: "bi-revamp-approved-2026-07-19",
    loadContent: () => import("./bi").then((module) => module.biRevampCaseStudy),
    loadTemplate: CaseStudyRevampBiTemplate,
  }),
  record("mm", "Launching Mrs. Meyer's First DTC Channel From Scratch", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/mm", loadContent: () => import("./mm").then((module) => module.mmRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("method", "Method: Brand-True DTC Launch on Shared Rails", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/method", loadContent: () => import("./method").then((module) => module.methodRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("murad", "Murad: From Chaos to Creation", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/murad", loadContent: () => import("./murad").then((module) => module.muradRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("k2", "Headless/Composable Commerce for 9 K2 Brands", "C", "complete", true, { routeKind: "dynamic", previewHref: "/work/case-study-test/k2", loadContent: () => import("./k2").then((module) => module.k2RevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("cbdistillery", "CBDistillery's: From De-Banked to $40m", "B", "complete", false, { routeKind: "dynamic", previewHref: "/work/case-study-test/cbdistillery", loadContent: () => import("./cbdistillery").then((module) => module.cbdistilleryRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("foh", "Turning Frederick's Into Celebrity-Driven DTC", "B", "complete", false, {
    routeKind: "explicit",
    previewHref: "/work/case-study-test/foh",
    approvedTag: "foh-responsive-stasis-2026-07-18",
    loadContent: () => import("./foh").then((module) => module.fohRevampCaseStudy),
    loadTemplate: CaseStudyRevampTemplate,
  }),
  record("lego", "LEGO's Digital Transformation With BCG", "B", "complete", false, { routeKind: "dynamic", previewHref: "/work/case-study-test/lego", loadContent: () => import("./lego").then((module) => module.legoRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
  record("cwg", "Chicks With Guns: Building a Digital Music Magazine", "D", "complete", true, {
    routeKind: "dynamic", previewHref: "/work/case-study-test/cwg", loadContent: () => import("./cwg").then((module) => module.cwgRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate,
    notes: "Founder-specific template required",
  }),
  record("aa", "Saving American Apparel With Digital Commerce", "B", "complete", false, {
    routeKind: "dynamic",
    previewHref: "/work/case-study-test/aa",
    loadContent: () => import("./aa").then((module) => module.aaRevampCaseStudy),
    loadTemplate: CaseStudyRevampAaTemplate,
  }),
  record("zevo", "Interactive Internet TV Before it was Mainstream", "D", "complete", true, {
    routeKind: "dynamic", previewHref: "/work/case-study-test/zevo", loadContent: () => import("./zevo").then((module) => module.zevoRevampCaseStudy), loadTemplate: CaseStudyRevampTemplate,
    notes: "Founder-specific template required",
  }),
  record("dtv02", "Leading the Launch of DIRECTV Everywhere", "B", "complete", false, { routeKind: "dynamic", previewHref: "/work/case-study-test/dtv02", loadContent: () => import("./dtv02").then((module) => module.dtv02RevampCaseStudy), loadTemplate: CaseStudyRevampTemplate }),
]

export function getCaseStudyPreview(slug: string) {
  return caseStudyPreviewRegistry.find((study) => study.slug === slug)
}

export const approvedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "approved").length
export const inProgressPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "in-progress").length
export const notStartedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "not-started").length
export const blockedPreviewCount = caseStudyPreviewRegistry.filter((study) => study.migrationStatus === "blocked").length
export const totalPreviewCount = caseStudyPreviewRegistry.length
