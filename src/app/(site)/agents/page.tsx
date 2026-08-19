import type { Metadata } from "next"
import { Github } from "lucide-react"

import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { agentsContent, freebiesContent, siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"
import { ProductionReadinessCheck } from "./ProductionReadinessCheck"

const agentsRepoUrl = "https://github.com/jimmarkunas/agents-enterprise-ai-operating-model"
const agentsAdoptionUrl =
  "https://github.com/jimmarkunas/agents-enterprise-ai-operating-model/issues/new?template=adoption-report.yml&title=I%20used%20Jim%27s%20A.G.E.N.T.S.%20Toolkit%20to%20build..."
const agentsToolkitUrl =
  "https://github.com/jimmarkunas/agents-enterprise-ai-operating-model/raw/main/Free%20Toolkit%20Download/AGENTS-Enterprise-Model-Template-Kit.zip"

export const metadata: Metadata = buildPageMetadata({
  title: agentsContent.meta.title,
  description: agentsContent.meta.description,
  canonicalPath: siteCanonicalPaths.agents,
  routeMarker: "agents",
  useDefaultImage: false,
})

const agentResources = freebiesContent.collections.find((collection) => collection.id === "usaii-agents")

export default function AgentsPage() {
  return (
    <main data-gpme-route="agents" data-gpme-deploy-sha={process.env.NEXT_PUBLIC_DEPLOY_SHA} className="min-h-full overflow-x-hidden bg-[#F3F3F3]">
      <Container className="pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-[100px] lg:pt-[42px]">
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-[52px]">
            <MotionReveal preset="hero" className="w-full" delay={0.02}>
              <section className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
                <div className="lg:col-start-1 lg:row-start-1">
                  <h1 className="type-h2 text-[#232323]">{agentsContent.hero.title}</h1>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <TrackedExternalLink
                      href={agentsToolkitUrl}
                      label="Download the free toolkit"
                      location="agents_hero"
                      download="AGENTS-Enterprise-Model-Template-Kit.zip"
                      className="button-primary"
                      ariaLabel="Download the free toolkit"
                    >
                      {agentsContent.hero.primaryCta}
                    </TrackedExternalLink>
                    <TrackedExternalLink
                      href={agentsRepoUrl}
                      label="Star on GitHub"
                      location="agents_hero"
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                      ariaLabel="Star on GitHub"
                    >
                      {agentsContent.hero.secondaryCta}
                    </TrackedExternalLink>
                  </div>
                  <TrackedExternalLink
                    href={agentsAdoptionUrl}
                    label="Report adoption"
                    location="agents_hero"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 ml-[20px] inline-text-cta type-p4"
                    ariaLabel="Report adoption"
                  >
                    {agentsContent.hero.tertiaryCta}
                  </TrackedExternalLink>
                </div>

                <div className="lg:col-start-2 lg:row-start-1">
                  <EyebrowPill
                    className="w-fit !px-6 !py-1 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)]"
                    labelClassName="type-p5 text-[#222222]"
                  >
                    {agentsContent.hero.badge}
                  </EyebrowPill>
                  <p className="type-h4 mt-5 text-[#2A2A2A]">{agentsContent.hero.subhead}</p>
                  <p className="type-p2 mt-6 text-[#3F4548]">{agentsContent.hero.body}</p>
                </div>
              </section>
            </MotionReveal>

            <section id="readiness-check" className="scroll-mt-24">
              <div>
                <h2 className="type-h4 text-center text-[#2A2A2A]">{agentsContent.readiness.heading}</h2>
                <div className="mt-6 grid gap-3 rounded-[10px] bg-white px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 md:px-7">
                  {agentsContent.readiness.steps.map((step, index) => <p key={step} className="type-p3 text-center text-[#2A2A2A]"><span className="mr-2 text-[#447ACB]">0{index + 1}</span>{step}</p>)}
                </div>
              </div>
            </section>

          <section id="agents-resources" className="scroll-mt-24 -mt-5 rounded-[10px] bg-[#ECECEC] px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
            <EyebrowPill
              className="w-fit bg-white"
              labelClassName="type-p5 text-[#222222] inline-flex items-center gap-2"
              showDot={false}
            >
              <span className="inline-flex items-center gap-2" aria-hidden="true">
                <Github className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              {agentsContent.resources.label}
            </EyebrowPill>
            <h2 className="type-h4 mt-5 text-[#2A2A2A]">{agentsContent.resources.heading}</h2>
            <p className="type-p2 mt-5 text-[#3F4548]">{agentsContent.resources.body}</p>
            <div className="mt-7 rounded-[10px] bg-white px-5 py-5 outline outline-1 outline-black/5 md:px-6">
              <h3 className="type-h5 text-[#2A2A2A]">{agentsContent.resources.githubHeading}</h3>
              <p className="type-p3 mt-3 text-[#3F4548]">{agentsContent.resources.githubBody}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TrackedExternalLink
                  href={agentsToolkitUrl}
                  label="Download the free toolkit"
                  location="agents_github_block"
                  download="AGENTS-Enterprise-Model-Template-Kit.zip"
                  className="button-primary"
                  ariaLabel="Download the free toolkit"
                >
                  {agentsContent.resources.githubDownloadCta}
                </TrackedExternalLink>
                <TrackedExternalLink
                  href={agentsRepoUrl}
                  label="Star on GitHub"
                  location="agents_github_block"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                  ariaLabel="Star on GitHub"
                >
                  {agentsContent.resources.githubStarCta}
                </TrackedExternalLink>
                <TrackedExternalLink
                  href={agentsAdoptionUrl}
                  label="Report adoption"
                  location="agents_github_block"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-text-cta type-p4"
                  ariaLabel="Report adoption"
                >
                  {agentsContent.resources.githubAdoptionCta}
                </TrackedExternalLink>
              </div>
            </div>

            <h3 className="type-h5 mt-8 flex items-center gap-2 text-[#2A2A2A]">
              <Github className="h-5 w-5 shrink-0" strokeWidth={2} />
              <span>What&apos;s included in the free system?</span>
            </h3>
            <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-10">
              <ul className="space-y-3">{agentsContent.resources.items.map((item) => <li key={item} className="type-p3 text-[#2A2A2A]">• {item}</li>)}</ul>
              <div className="space-y-3">
                {agentResources?.assets.map((asset) => (
                  <li key={asset.href} className="list-none rounded-[10px] bg-white px-4 py-4 outline outline-1 outline-black/5">
                    <h3 className="type-p2 text-[#2A2A2A]">{asset.title}</h3>
                    <p className="type-p4 mt-1 text-[#4B5154]">{asset.kind}</p>
                  </li>
                ))}
              </div>
            </div>
          </section>

            <section id="readiness-check" className="scroll-mt-24">
              <MotionReveal preset="cardStrong" className="mt-8 w-full" delay={0.08}>
                <ProductionReadinessCheck />
              </MotionReveal>
            </section>
          </div>

          <section>
            <EyebrowPill className="w-fit bg-white" labelClassName="type-p5 text-[#222222]">{agentsContent.framework.label}</EyebrowPill>
            <h2 className="type-h4 mt-5 text-[#2A2A2A]">{agentsContent.framework.heading}</h2>
            <p className="type-p2 mt-5 text-[#3F4548]">{agentsContent.framework.body}</p>
            <div className="mt-7 grid overflow-hidden rounded-[10px] bg-white outline outline-1 outline-black/5 md:grid-cols-2">
              {agentsContent.framework.controls.map(([letter, title, question, action]) => (
                <article key={letter} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 px-5 py-6 md:px-7">
                  <span className="type-h3 text-[#447ACB]">{letter}</span>
                  <div><h3 className="type-h6 text-[#2A2A2A]">{title}</h3><p className="type-p3 mt-2 text-[#555555]">{question}</p><p className="type-p2 mt-3 text-[#2A2A2A]">{action}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <EyebrowPill className="w-fit bg-white" labelClassName="type-p5 text-[#222222]">{agentsContent.productionGate.label}</EyebrowPill>
            <h2 className="type-h4 mt-5 text-[#2A2A2A]">{agentsContent.productionGate.heading}</h2>
            <div className="mt-7 divide-y divide-black/10 overflow-hidden rounded-[10px] bg-white outline outline-1 outline-black/5">
              {agentsContent.productionGate.rows.map(([number, title, question]) => <article key={number} className="grid gap-2 px-5 py-5 md:grid-cols-[64px_180px_minmax(0,1fr)] md:items-center md:gap-6 md:px-7"><span className="type-p3 text-[#447ACB]">{number}</span><h3 className="type-p2 text-[#2A2A2A]">{title}</h3><p className="type-p3 text-[#555555]">{question}</p></article>)}
            </div>
          </section>

        </div>
      </Container>
    </main>
  )
}
