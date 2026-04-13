import { siteCta } from "@/content/site"

export const defaultCaseStudyPrimaryCta = {
  label: siteCta.bookCallLabel,
  href: siteCta.bookingUrls.caseStudyDefault,
  external: true,
} as const

export const founderCaseStudyPrimaryCta = {
  label: siteCta.bookCallLabel,
  href: siteCta.bookingUrls.founderCaseStudy,
  external: true,
} as const
