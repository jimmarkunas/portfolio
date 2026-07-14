import type { Metadata } from "next"

import { BookCallCta } from "@/components/BookCallCta"
import { ButtonLink } from "@/components/ButtonLink"
import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { TextLink } from "@/components/TextLink"
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

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="type-h5 text-[#222222]">Buttons</h2>
            <p className="type-p4 max-w-3xl text-black/55">
              `BookCallCta` is the semantic booking wrapper. `See More` should render the same visual
              primitive directly through `ButtonLink` with `variant="bookCall"`.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Primary button</div>
              <div className="mt-4">
                <ButtonLink href="/work" variant="primary">
                  See More
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Book a Call wrapper</div>
              <div className="mt-4">
                <BookCallCta location="design-system-reference" />
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Shared booking primitive</div>
              <div className="mt-4">
                <ButtonLink href="/work" variant="bookCall">
                  See More
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>

            <article className="rounded-[20px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-black/45">Secondary button</div>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="secondary">
                  See More
                  <ArrowUpRightIcon size={12} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </section>
      </Container>
    </main>
  )
}
