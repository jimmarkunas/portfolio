import { caseStudy as aa } from "@/content/case-studies/aa"
import { caseStudy as bi } from "@/content/case-studies/bi"
import { caseStudy as cbdistillery } from "@/content/case-studies/cbdistillery"
import { caseStudy as dtv01 } from "@/content/case-studies/dtv01"
import { caseStudy as dtv02 } from "@/content/case-studies/dtv02"
import { caseStudy as foh } from "@/content/case-studies/foh"
import { caseStudy as k2 } from "@/content/case-studies/k2"
import { caseStudy as lego } from "@/content/case-studies/lego"
import { caseStudy as method } from "@/content/case-studies/method"
import { caseStudy as mm } from "@/content/case-studies/mm"
import { caseStudy as modere } from "@/content/case-studies/modere"
import { caseStudy as murad } from "@/content/case-studies/murad"

export type CaseStudyPullQuote = {
  slug: string
  quote: string
  attributionTitle: string
  attributionSubtitle: string
  avatarSrc?: string
}

export const caseStudyPullQuotes: CaseStudyPullQuote[] = [
  { slug: dtv01.slug, ...dtv01.challengeQuote },
  { slug: modere.slug, ...modere.challengeQuote },
  { slug: bi.slug, ...bi.challengeQuote },
  { slug: mm.slug, ...mm.challengeQuote },
  { slug: method.slug, ...method.challengeQuote },
  { slug: murad.slug, ...murad.challengeQuote },
  { slug: k2.slug, ...k2.challengeQuote },
  { slug: cbdistillery.slug, ...cbdistillery.challengeQuote },
  { slug: foh.slug, ...foh.challengeQuote },
  { slug: lego.slug, ...lego.challengeQuote },
  { slug: aa.slug, ...aa.challengeQuote },
  { slug: dtv02.slug, ...dtv02.challengeQuote },
]
