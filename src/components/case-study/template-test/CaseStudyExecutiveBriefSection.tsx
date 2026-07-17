"use client"

import type { LucideIcon } from "lucide-react"
import { BadgeDollarSign, Building2, Clock, Cpu, UserCheck, Users } from "lucide-react"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type {
  CaseStudyTemplateTestData,
  CaseStudyTemplateTestFactIcon,
} from "@/content/case-study-template-test"
import { CaseStudySectionHeader } from "./CaseStudySectionHeader"

const executiveBriefIconMap: Record<CaseStudyTemplateTestFactIcon, LucideIcon> = {
  role: UserCheck,
  client: Building2,
  timeline: Clock,
  team: Users,
  budget: BadgeDollarSign,
  systems: Cpu,
}

const executiveBriefSystemsIcons = [
  { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
  { label: "Shopify Plus", icon: "/tool-icons/svg/shopify-logo.svg" },
  { label: "Azure", icon: "/tool-icons/svg/azure-logo.svg" },
  { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
  { label: "Figma", icon: "/tool-icons/svg/figma-logo.svg" },
] as const

function renderHighlightedCopy(label: string, copy: string) {
  const highlightWords: Record<string, string> = {
    Problem: "systems",
    Mandate: "ownership",
    "What I Changed": "simplified",
    Outcome: "easier",
  }

  const highlight = highlightWords[label]
  if (!highlight) {
    return copy
  }

  const matchIndex = copy.indexOf(highlight)
  if (matchIndex < 0) {
    return copy
  }

  const before = copy.slice(0, matchIndex)
  const after = copy.slice(matchIndex + highlight.length)

  return (
    <>
      {before}
      <span className="text-[#447ACB]">{highlight}</span>
      {after}
    </>
  )
}

export function CaseStudyExecutiveBriefSection({ data }: { data: CaseStudyTemplateTestData }) {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-12">
          <MotionReveal preset="section" className="flex flex-col gap-8">
            <CaseStudySectionHeader
              eyebrow={data.executiveBrief.eyebrow}
              title={data.executiveBrief.title}
              copy={data.executiveBrief.copy}
            />

            <dl className="divide-y divide-black/10 border-y border-black/10">
              {data.executiveBrief.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-4 py-5 sm:grid-cols-[48px_220px_minmax(0,1fr)] sm:items-center sm:gap-x-6"
                >
                  <div className="row-span-2 flex h-11 w-11 items-center justify-center rounded-[10px] text-[#222222] sm:row-span-1 sm:h-12 sm:w-12">
                    {(() => {
                      const Icon = executiveBriefIconMap[fact.icon]
                      return <Icon className="h-[22px] w-[22px] sm:h-6 sm:w-6" strokeWidth={1.75} />
                    })()}
                  </div>
                  <dt className="type-p5 uppercase tracking-[0.1em] text-[#7B7B7B]">
                    {fact.label}
                  </dt>
                  <dd className="type-p3 mt-1 text-[#222222] sm:col-start-3 sm:row-start-1 sm:mt-0">
                    {fact.icon === "systems" ? (
                      <div className="flex flex-wrap items-center gap-2.5">
                        {executiveBriefSystemsIcons.map((tool) => (
                          <div key={tool.label} className="group relative">
                            <img
                              src={tool.icon}
                              alt={tool.label}
                              className="h-[51px] w-[51px] rounded-[10px]"
                            />
                            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#222222] px-2.5 py-1.5 type-p5 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                              {tool.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </MotionReveal>

          <MotionReveal preset="card" delay={0.04} className="lg:pt-[76px]">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {[
                ["Problem", data.executiveBrief.problem],
                ["Mandate", data.executiveBrief.mandate],
                ["What I Changed", data.executiveBrief.whatIChanged],
                ["Outcome", data.executiveBrief.outcome],
              ].map(([label, copy]) => (
                <article
                  key={label}
                  className="rounded-[20px] border border-black/8 bg-[#222222] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-[2px] w-6 rounded-full bg-[#447ACB]" />
                    <div className="type-p5 uppercase tracking-[0.16em] text-white/50">{label}</div>
                    <p className="type-p3 text-white">{renderHighlightedCopy(label as string, copy as string)}</p>
                  </div>
                </article>
              ))}
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
