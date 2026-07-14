import type { Metadata } from "next"

import { BookCallCta } from "@/components/BookCallCta"
import { ButtonLink } from "@/components/ButtonLink"
import { Container } from "@/components/Container"
import { ContentFlow } from "@/components/ContentFlow"
import { EyebrowPill } from "@/components/EyebrowPill"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { TextLink } from "@/components/TextLink"
import { siteCta } from "@/content/site"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Design System",
  description: "Reference the shared primitives used across the portfolio.",
  canonicalPath: "/reference/design-system/",
  useDefaultImage: false,
})

export default function DesignSystemReferencePage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] py-16 md:py-20">
      <Container className="space-y-14">
        <section className="space-y-4">
          <EyebrowPill labelClassName="type-p2 text-[#222222]">Style Guide</EyebrowPill>
          <div className="max-w-3xl space-y-4">
            <h1 className="type-h3 text-[#222222]">Finox design system</h1>
            <p className="type-p3 text-black/65">
              The live app uses one button primitive, `ButtonLink`, with the `bookCall` variant as the
              canonical booking treatment.
            </p>
          </div>
        </section>

        <section className="space-y-3 rounded-[20px] border border-black/8 bg-white p-6">
          <h2 className="type-h5 text-[#222222]">Interaction rule</h2>
          <p className="type-p4 max-w-4xl text-black/60">
            Interactive state changes must not alter component geometry. Use color,
            background, border color, outline, shadow, or opacity for feedback.
            Translation, scaling, dimensional changes, and typography changes are
            prohibited unless explicitly documented as an intentional motion variant.
          </p>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="type-h5 text-[#222222]">Text links</h2>
            <p className="type-p4 max-w-3xl text-black/55">
              `TextLink` is the shared inline hyperlink primitive. It keeps the current text styling,
              inherits its default color from context, and transitions to the canonical blue on hover
              and keyboard focus without changing layout.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Default state</div>
              <p className="type-p3 mt-4 max-w-[26rem] text-black/70">
                This sentence includes a <TextLink href="/work">standard text link</TextLink> in
                the normal light-surface context.
              </p>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Hover state</div>
              <p className="type-p3 mt-4 max-w-[26rem] text-black/70">
                Hover the <TextLink href="/work">same link</TextLink> to see the brand-blue
                interaction color.
              </p>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-[#222222] p-6">
              <div className="type-p5 text-white/55">Dark surface</div>
              <p className="type-p3 mt-4 max-w-[26rem] text-white/80">
                <TextLink href="/contact" className="text-white">
                  Inline links
                </TextLink>{" "}
                inherit their surrounding color on dark backgrounds too.
              </p>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6 md:col-span-2 xl:col-span-1">
              <div className="type-p5 text-black/45">Keyboard focus-visible</div>
              <p className="type-p3 mt-4 max-w-[26rem] text-black/70">
                Tab to the <TextLink href="/contact">focus demo link</TextLink> to see the
                accessible blue outline.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-6 rounded-[20px] border border-black/8 bg-white p-6">
          <div className="space-y-2">
            <h2 className="type-h5 text-[#222222]">Content flow</h2>
            <p className="type-p4 max-w-3xl text-black/55">
              P1–P5 own typography and line-height. ContentFlow owns spacing between semantic content
              blocks. Section and grid components own macro-layout spacing. Embedded newline
              characters do not create paragraph structure.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-[20px] border border-black/8 bg-[#F8F8F8] p-6">
              <div className="type-p5 text-black/45">Wrapped paragraph</div>
              <div className="mt-4 max-w-[28rem]">
                <p className="type-p3 text-black/70">
                  This wrapped paragraph proves that line-height still belongs to the canonical
                  paragraph type scale, not the flow primitive.
                </p>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-[#F8F8F8] p-6">
              <div className="type-p5 text-black/45">Body flow</div>
              <div className="mt-4 max-w-[28rem]">
                <ContentFlow spacing="body">
                  <p className="type-p3 text-black/70">
                    This is the first paragraph in a real content flow.
                  </p>
                  <p className="type-p3 text-black/70">
                    This is the second paragraph with the shared 20px rhythm between blocks.
                  </p>
                </ContentFlow>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-[#222222] p-6 text-white">
              <div className="type-p5 text-white/55">Compact flow</div>
              <div className="mt-4 max-w-[28rem]">
                <ContentFlow spacing="compact">
                  <p className="type-p3 text-white/80">
                    This supporting note stays closely associated with the call to action below.
                  </p>
                  <BookCallCta location="design-system-reference-content-flow" tone="brand" />
                </ContentFlow>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="type-h5 text-[#222222]">Buttons</h2>
            <p className="type-p4 max-w-3xl text-black/55">
              The shared button primitives also stay stationary on hover, press,
              and focus-visible. They only change paint properties.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Primary</div>
              <div className="mt-4">
                <ButtonLink href="/work" variant="primary">
                  See More
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Secondary</div>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="secondary">
                  See More
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Book Call</div>
              <div className="mt-4">
                <ButtonLink href={siteCta.bookingUrls.siteShell} variant="bookCall" external>
                  Book a Call
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-[#222222] p-6">
              <div className="type-p5 text-white/55">Brand tone</div>
              <div className="mt-4">
                <BookCallCta location="design-system-reference" tone="brand" />
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="type-h5 text-[#222222]">Notes</h2>
            <p className="type-p4 max-w-3xl text-black/55">
              `BookCallCta` remains the semantic booking wrapper for the live app.
              The shared primitives above are the canonical interaction surface for
              standard buttons and links.
            </p>
          </div>
        </section>
      </Container>
    </main>
  )
}
