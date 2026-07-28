import type { CaseStudyRevampData } from "./types"
import type { ComponentType } from "react"
import { CaseStudyRevampAaTemplate } from "@/components/case-study/revamp/aa/CaseStudyRevampAaTemplate"
import { CaseStudyRevampTemplate } from "@/components/case-study/revamp/CaseStudyRevampTemplate"
import { CaseStudyRevampCpsTemplate } from "@/components/case-study/revamp/cps/CaseStudyRevampCpsTemplate"
import { CaseStudyRevampBiTemplate } from "@/components/case-study/revamp/bi/CaseStudyRevampBiTemplate"
import { CaseStudyRevampModereTemplate } from "@/components/case-study/revamp/modere/CaseStudyRevampModereTemplate"

export type CaseStudyPreviewRecord = {
  slug: string
  title: string
  loadContent: () => Promise<CaseStudyRevampData>
  loadTemplate: ComponentType<{ data: CaseStudyRevampData }>
}

const record = (
  slug: string,
  title: string,
  loadContent: () => Promise<CaseStudyRevampData>,
  loadTemplate: ComponentType<{ data: CaseStudyRevampData }>,
): CaseStudyPreviewRecord => ({ slug, title, loadContent, loadTemplate })

export const caseStudyPreviewRegistry: CaseStudyPreviewRecord[] = [
  record("cps", "CPS Energy: Smart Streetlight & Smart City Operations", () => import("./cps").then((module) => module.cpsRevampCaseStudy), CaseStudyRevampCpsTemplate),
  record("dtv01", "Turning DIRECTV's Slow Offer Engine to a Revenue Machine", () => import("./dtv01").then((module) => module.dtv01RevampCaseStudy), CaseStudyRevampTemplate),
  record("newyorklife", "New York Life's Scalable Product Platform", () => import("./newyorklife").then((module) => module.newyorklifeRevampCaseStudy), CaseStudyRevampTemplate),
  record("modere", "Winning Awards And Making $1B With Modere", () => import("./modere").then((module) => module.modereRevampCaseStudy), CaseStudyRevampModereTemplate),
  record("bi", "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce", () => import("./bi").then((module) => module.biRevampCaseStudy), CaseStudyRevampBiTemplate),
  record("mm", "Launching Mrs. Meyer's First DTC Channel From Scratch", () => import("./mm").then((module) => module.mmRevampCaseStudy), CaseStudyRevampTemplate),
  record("method", "Method: Brand-True DTC Launch on Shared Rails", () => import("./method").then((module) => module.methodRevampCaseStudy), CaseStudyRevampTemplate),
  record("murad", "Murad: From Chaos to Creation", () => import("./murad").then((module) => module.muradRevampCaseStudy), CaseStudyRevampTemplate),
  record("k2", "Headless/Composable Commerce for 9 K2 Brands", () => import("./k2").then((module) => module.k2RevampCaseStudy), CaseStudyRevampTemplate),
  record("cbdistillery", "CBDistillery's: From De-Banked to $40m", () => import("./cbdistillery").then((module) => module.cbdistilleryRevampCaseStudy), CaseStudyRevampTemplate),
  record("foh", "Turning Frederick's Into Celebrity-Driven DTC", () => import("./foh").then((module) => module.fohRevampCaseStudy), CaseStudyRevampTemplate),
  record("lego", "LEGO's Digital Transformation With BCG", () => import("./lego").then((module) => module.legoRevampCaseStudy), CaseStudyRevampTemplate),
  record("cwg", "Chicks With Guns: Building a Digital Music Magazine", () => import("./cwg").then((module) => module.cwgRevampCaseStudy), CaseStudyRevampTemplate),
  record("aa", "Saving American Apparel With Digital Commerce", () => import("./aa").then((module) => module.aaRevampCaseStudy), CaseStudyRevampAaTemplate),
  record("zevo", "Interactive Internet TV Before it was Mainstream", () => import("./zevo").then((module) => module.zevoRevampCaseStudy), CaseStudyRevampTemplate),
  record("dtv02", "Leading the Launch of DIRECTV Everywhere", () => import("./dtv02").then((module) => module.dtv02RevampCaseStudy), CaseStudyRevampTemplate),
]

export function getCaseStudyPreview(slug: string) {
  return caseStudyPreviewRegistry.find((study) => study.slug === slug)
}

export const liveRevampSlugs = caseStudyPreviewRegistry.map(
  (study) => study.slug,
)

export async function loadLiveRevampCaseStudy(slug: string) {
  const entry = getCaseStudyPreview(slug)
  if (!entry) return null

  return {
    data: await entry.loadContent(),
    Template: entry.loadTemplate,
  }
}
