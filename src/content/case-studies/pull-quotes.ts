import { aaRevampCaseStudy as aa } from "@/content/case-studies/revamp/aa"
import { biRevampCaseStudy as bi } from "@/content/case-studies/revamp/bi"
import { cbdistilleryRevampCaseStudy as cbdistillery } from "@/content/case-studies/revamp/cbdistillery"
import { dtv01RevampCaseStudy as dtv01 } from "@/content/case-studies/revamp/dtv01"
import { dtv02RevampCaseStudy as dtv02 } from "@/content/case-studies/revamp/dtv02"
import { fohRevampCaseStudy as foh } from "@/content/case-studies/revamp/foh"
import { k2RevampCaseStudy as k2 } from "@/content/case-studies/revamp/k2"
import { legoRevampCaseStudy as lego } from "@/content/case-studies/revamp/lego"
import { methodRevampCaseStudy as method } from "@/content/case-studies/revamp/method"
import { mmRevampCaseStudy as mm } from "@/content/case-studies/revamp/mm"
import { modereRevampCaseStudy as modere } from "@/content/case-studies/revamp/modere"
import { muradRevampCaseStudy as murad } from "@/content/case-studies/revamp/murad"

export type CaseStudyPullQuote = {
  slug: string
  quote: string
  attributionTitle: string
  attributionSubtitle: string
  avatarSrc?: string
}

export const caseStudyPullQuotes: CaseStudyPullQuote[] = [
  { slug: dtv01.slug, ...dtv01.productionQuote },
  { slug: modere.slug, ...modere.productionQuote },
  { slug: bi.slug, ...bi.productionQuote },
  { slug: mm.slug, ...mm.productionQuote },
  { slug: method.slug, ...method.productionQuote },
  { slug: murad.slug, ...murad.productionQuote },
  { slug: k2.slug, ...k2.productionQuote },
  { slug: cbdistillery.slug, ...cbdistillery.productionQuote },
  { slug: foh.slug, ...foh.productionQuote },
  { slug: lego.slug, ...lego.productionQuote },
  { slug: aa.slug, ...aa.productionQuote },
  { slug: dtv02.slug, ...dtv02.productionQuote },
]
