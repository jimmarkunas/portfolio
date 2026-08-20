import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink"
import { siteCanonicalPaths } from "@/content/site"
import { ArrowUpRight } from "lucide-react"
import { buildPageMetadata } from "@/lib/seo"
import { FreebiesDownloadButton } from "./FreebiesDownloadButton"

export const metadata: Metadata = buildPageMetadata({
  title: "Freebies",
  description: "Downloadable resources from Jim Markunas.",
  canonicalPath: siteCanonicalPaths.freebies,
  useDefaultImage: false,
})

export default function FreebiesPage() {
  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="pb-14 pt-8 md:pb-16 md:pt-10 lg:pb-[80px] lg:pt-[42px]">
          <div className="flex flex-col gap-5">
            <EyebrowPill className="w-fit bg-white" labelClassName="type-p2 text-[#222222]">
              Freebies
            </EyebrowPill>
            <h1 className="type-h2 max-w-[920px] text-[#232323]">Downloadable Assets</h1>
            <p className="type-p2 max-w-[900px] text-[#2E2E2E]">
              A growing library of practical resources you can download right now.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-12">
            <section className="rounded-[10px] bg-[#ECECEC] px-5 py-5 md:px-8 md:py-7">
              <div className="border-b border-black/10 pb-5">
                <h2 className="type-h5 text-[#2A2A2A]">Product Management</h2>
                <p className="type-p3 mt-2 max-w-[760px] text-[#4B5154]">
                  Actionable tools and templates for PM workflows.
                </p>
              </div>

              <ul className="mt-4 space-y-3 md:mt-5">
                <li>
                  <article className="rounded-[10px] bg-white px-4 py-4 outline outline-1 outline-black/5 md:px-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="type-p2 text-[#2A2A2A]">PMF Checklist (Mind The Product)</h3>
                          <span className="type-ui-sm inline-flex min-h-[24px] items-center rounded-[999px] bg-[#F3F3F3] px-2.5 text-[#555555]">
                            PDF
                          </span>
                        </div>
                        <p className="type-p4 max-w-[780px] text-[#4B5154]">
                          A practical checklist to evaluate product-market fit signal quality and next actions.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <FreebiesDownloadButton
                          href="/freebies/PMF_Checklist_MindTheProduct.pdf"
                          title="PMF Checklist (Mind The Product)"
                          fileName="PMF_Checklist_MindTheProduct.pdf"
                        />

                        <TrackedExternalLink
                          href="/freebies/PMF_Checklist_MindTheProduct.pdf"
                          label="Open PMF Checklist (Mind The Product)"
                          location="freebies_open"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-text-cta type-p4"
                        >
                          <span>Open</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </TrackedExternalLink>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </section>
          </div>
        </Container>
      </section>
    </main>
  )
}
