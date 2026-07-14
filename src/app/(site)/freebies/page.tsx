import type { Metadata } from "next"
import { ArrowUpRight, Download } from "lucide-react"

import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { freebiesContent, siteCanonicalPaths } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: freebiesContent.meta.title,
  description: freebiesContent.meta.description,
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
              {freebiesContent.hero.eyebrow}
            </EyebrowPill>
            <h1 className="type-h2 max-w-[920px] text-[#232323]">{freebiesContent.hero.title}</h1>
            <p className="type-p2 max-w-[900px] text-[#2E2E2E]">{freebiesContent.hero.intro}</p>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-12">
            {freebiesContent.collections.map((collection) => (
              <section key={collection.id} className="rounded-[10px] bg-[#ECECEC] px-5 py-5 md:px-8 md:py-7">
                <div className="border-b border-black/10 pb-5">
                  <h2 className="type-h5 text-[#2A2A2A]">{collection.title}</h2>
                  <p className="type-p3 mt-2 max-w-[760px] text-[#4B5154]">{collection.description}</p>
                </div>

                <ul className="mt-4 space-y-3 md:mt-5">
                  {collection.assets.map((asset) => (
                    <li key={asset.href}>
                      <article className="rounded-[10px] bg-white px-4 py-4 outline outline-1 outline-black/5 md:px-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="type-p2 text-[#2A2A2A]">{asset.title}</h3>
                              <span className="type-ui-sm inline-flex min-h-[24px] items-center rounded-[999px] bg-[#F3F3F3] px-2.5 text-[#555555]">
                                {asset.kind}
                              </span>
                            </div>
                            <p className="type-p4 max-w-[780px] text-[#4B5154]">{asset.description}</p>
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            <TrackedExternalLink
                              href={asset.href}
                              label={`Download ${asset.title}`}
                              location="freebies_download"
                              download={asset.fileName}
                              className="button-primary min-h-[44px] px-4 text-[15px]"
                            >
                              <Download className="h-4 w-4" aria-hidden="true" />
                              <span>Download</span>
                            </TrackedExternalLink>

                            <TrackedExternalLink
                              href={asset.href}
                              label={`Open ${asset.title}`}
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
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
