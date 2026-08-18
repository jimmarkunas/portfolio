import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { agentsContent, freebiesContent, siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { FreebiesDownloadButton } from "../freebies/FreebiesDownloadButton"
import { ProductionReadinessCheck } from "./ProductionReadinessCheck"

export const metadata: Metadata = buildPageMetadata({
  title: agentsContent.meta.title,
  description: agentsContent.meta.description,
  canonicalPath: siteCanonicalPaths.agents,
  useDefaultImage: false,
})

const agentResources = freebiesContent.collections.find((collection) => collection.id === "usaii-agents")

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-black/10 pt-8 md:pt-10">
      <h2 className="type-h3 max-w-[760px] text-[#2A2A2A]">{title}</h2>
      {children}
    </section>
  )
}

function Sequence({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[10px] bg-[#ECECEC] px-5 py-5 md:px-7">
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-3">
          <span className="type-ui-md text-[#2A2A2A]">{item}</span>
          {index < items.length - 1 ? <ArrowRight className="h-4 w-4 text-[#447ACB]" aria-hidden="true" /> : null}
        </span>
      ))}
    </div>
  )
}

export default function AgentsPage() {
  return (
    <main className="min-h-full overflow-x-hidden bg-[#F3F3F3]">
      <Container className="pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-[100px] lg:pt-[42px]">
        <div className="flex flex-col gap-14 md:gap-20">
          <MotionReveal preset="hero" className="w-full" delay={0.02}>
            <section className="max-w-[980px]">
              <EyebrowPill className="w-fit bg-white" labelClassName="type-p2 text-[#222222]">{agentsContent.hero.eyebrow}</EyebrowPill>
              <h1 className="type-display-hero mt-5 text-[#232323]">{agentsContent.hero.title}</h1>
              <p className="type-h5 mt-4 max-w-[820px] text-[#2E2E2E]">{agentsContent.hero.subhead}</p>
              <p className="type-p3 mt-4 text-[#555555]">{agentsContent.hero.attribution}</p>
              <div className="mt-8 max-w-[850px] space-y-4">
                {agentsContent.hero.paragraphs.map((paragraph) => <p key={paragraph} className="type-p2 text-[#3F4548]">{paragraph}</p>)}
              </div>
              <blockquote className="mt-8 border-l-2 border-[#447ACB] pl-5 type-h5 text-[#2A2A2A]">“{agentsContent.hero.quote}”</blockquote>
            </section>
          </MotionReveal>

          <MotionReveal preset="cardStrong" className="w-full" delay={0.08}>
            <ProductionReadinessCheck />
          </MotionReveal>

          <Section title="The A.G.E.N.T.S. Operating Model">
            <div className="mt-7 divide-y divide-black/10 border-b border-black/10">
              {agentsContent.questions.map(([letter, name, question, description]) => (
                <article key={letter} className="grid gap-3 py-5 md:grid-cols-[64px_220px_minmax(0,1fr)] md:items-start md:gap-6">
                  <span className="type-h4 text-[#447ACB]">{letter}</span>
                  <h3 className="type-p2 text-[#2A2A2A]">{name}</h3>
                  <div><p className="type-p2 text-[#2A2A2A]">{question}</p><p className="type-p3 mt-2 max-w-[680px] text-[#555555]">{description}</p></div>
                </article>
              ))}
            </div>
          </Section>

          <Section title="The problem A.G.E.N.T.S. addresses">
            <div className="mt-6 max-w-[900px] space-y-4 type-p2 text-[#3F4548]">
              <p>Most discussions about AI agents begin with model capability: reasoning, memory, tools, orchestration, or autonomy.</p>
              <p>A.G.E.N.T.S. starts somewhere else:</p>
              <p className="type-h5 text-[#2A2A2A]">What happens when an organization delegates real authority to software?</p>
              <p>Once an agent can change an order, issue a refund, update a system of record, contact a customer, initiate a workflow, or make another consequential decision, the organization also has to define the agent’s authority, boundaries, evidence requirements, system access, escalation model, success measures, and accountable human owner.</p>
              <p>This is why A.G.E.N.T.S. treats an enterprise agent as a governed digital product rather than simply a model connected to tools.</p>
            </div>
          </Section>

          <Section title="From Opportunity to Production">
            <p className="type-p3 mt-4 text-[#555555]">A.G.E.N.T.S. sits inside a simple four-stage implementation path.</p>
            <div className="mt-6"><Sequence items={agentsContent.stages.map(([stage]) => stage)} /></div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {agentsContent.stages.map(([stage, description]) => <article key={stage} className="rounded-[10px] bg-white px-5 py-5 outline outline-1 outline-black/5"><h3 className="type-p2 text-[#2A2A2A]">{stage}</h3><p className="type-p3 mt-2 text-[#555555]">{description}</p></article>)}
            </div>
          </Section>

          <Section title="Authority is a ladder, not a toggle">
            <div className="mt-6"><Sequence items={agentsContent.authority} /></div>
            <p className="type-p2 mt-6 max-w-[850px] text-[#3F4548]">An enterprise agent does not need one universal level of autonomy. Authority should be assigned action by action according to consequence, reversibility, operating rules, and the value of human review.</p>
            <blockquote className="mt-6 border-l-2 border-[#447ACB] pl-5 type-h5 text-[#2A2A2A]">“Autonomy should be granted action by action, not agent by agent.”</blockquote>
          </Section>

          <Section title="Worked Example: Customer Order Exception Agent">
            <div className="mt-6 max-w-[900px] space-y-4 type-p2 text-[#3F4548]"><p>Consider an agent responsible for investigating delayed or failed customer orders across customer, order-management, inventory, and payment systems.</p><p>It may inspect the current state, determine which approved resolution applies, execute bounded low-risk actions, and escalate higher-risk or conflicting cases.</p></div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">{agentsContent.rules.map(([rule, action]) => <article key={rule} className="rounded-[10px] bg-white px-5 py-5 outline outline-1 outline-black/5"><h3 className="type-p2 text-[#2A2A2A]">{rule}</h3><p className="type-p3 mt-2 text-[#555555]">{action}</p></article>)}</div>
            <p className="type-p3 mt-6 text-[#555555]">The purpose of A.G.E.N.T.S. is to turn decisions like these into an explicit operating model before production deployment.</p>
          </Section>

          <Section title="Evidence should reconstruct the consequence"><p className="type-p3 mt-4 max-w-[900px] text-[#555555]">For consequential actions, an organization should be able to reconstruct what information the agent used, what state existed, which constraints applied, what decision was made, what action occurred, whether a human intervened, and what happened afterward.</p><div className="mt-6"><Sequence items={agentsContent.evidence} /></div><blockquote className="mt-6 border-l-2 border-[#447ACB] pl-5 type-h5 text-[#2A2A2A]">“Audit the system’s behavior, not just its explanation of its behavior.”</blockquote></Section>

          <Section title="Success starts with the business case"><div className="mt-6 max-w-[850px] space-y-4 type-p2 text-[#3F4548]"><p>Agent activity is not the outcome.</p><p>The implementation should return to the value case that justified the agent in the first place.</p></div><div className="mt-6 grid gap-3 md:grid-cols-3">{agentsContent.valueCategories.map((category) => <div key={category} className="rounded-[10px] bg-white px-5 py-5 type-p2 text-[#2A2A2A] outline outline-1 outline-black/5">{category}</div>)}</div><div className="mt-6"><Sequence items={["SUCCESS METRIC", "BEFORE", "AFTER", "IMPROVEMENT"]} /></div><p className="type-p3 mt-6 text-[#555555]">If the metric the agent was created to improve does not materially improve, AI activity alone is not evidence of business value.</p></Section>

          <Section title="A.G.E.N.T.S. Resources">
            <div className="mt-6 rounded-[10px] bg-[#ECECEC] px-5 py-5 md:px-8 md:py-7"><p className="type-p3 max-w-[760px] text-[#4B5154]">{agentResources?.description}</p><ul className="mt-5 space-y-3">{agentResources?.assets.map((asset) => <li key={asset.href} className="rounded-[10px] bg-white px-4 py-4 outline outline-1 outline-black/5"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><h3 className="type-p2 text-[#2A2A2A]">{asset.title}</h3><p className="type-p4 mt-1 text-[#4B5154]">{asset.kind}</p></div><div className="flex flex-wrap items-center gap-3"><FreebiesDownloadButton href={asset.href} title={asset.title} fileName={asset.fileName} /><TrackedExternalLink href={asset.href} label={`Open ${asset.title}`} location="agents_resource_open" target="_blank" rel="noreferrer" className="inline-text-cta type-p4">Open</TrackedExternalLink></div></div></li>)}</ul></div>
          </Section>

          <Section title="About the Framework"><p className="type-p2 mt-6 max-w-[900px] text-[#3F4548]">A.G.E.N.T.S. was created by Jim Markunas as a practical operating model for product teams designing enterprise AI agents that can make decisions, use tools, interact with business systems, and create operational consequences.</p></Section>

          <section className="border-t border-black/10 pt-10"><p className="type-h4 max-w-[900px] text-[#2A2A2A]">If any A.G.E.N.T.S. control is unclear, the agent is not ready.</p><div className="mt-6 grid gap-2 md:grid-cols-2">{agentsContent.finalQuestions.map((question) => <p key={question} className="type-p3 text-[#555555]">{question}</p>)}</div></section>
        </div>
      </Container>
    </main>
  )
}
