import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Container } from "@/components/Container"
import {
  legalDocuments,
  legalSlugs,
  type LegalSection,
  type LegalSlug,
} from "@/content/legal"

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const document = legalDocuments[params.slug as LegalSlug]
  if (!document) return {}

  return {
    title: `${document.title} | Jim Markunas`,
    description: document.description,
  }
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const document = legalDocuments[params.slug as LegalSlug]
  if (!document) notFound()

  return (
    <main className="py-16 md:py-24">
      <Container>
        <article className="mx-auto max-w-[860px] rounded-xl bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
          <header className="border-b border-[#E5E7EB] pb-8">
            <h1 className="type-h2 text-[#222222]">{document.title}</h1>
            <p className="type-p3 mt-3 text-[#7B7B7B]">Effective {document.effectiveDate}</p>
          </header>

          <div className="mt-10 space-y-10">
            {document.sections.map((rawSection) => {
              const section = rawSection as LegalSection

              return (
                <section key={section.heading}>
                  <h2 className="type-h4 text-[#222222]">{section.heading}</h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="type-p3 mt-4 text-[#4B5154]">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="type-p3 mt-4 list-disc space-y-2 pl-6 text-[#4B5154]">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.link ? (
                    <p className="type-p3 mt-4">
                      <a
                        href={section.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#447ACB] underline underline-offset-4 hover:text-[#2F5EA4]"
                      >
                        {section.link.label}
                      </a>
                    </p>
                  ) : null}
                </section>
              )
            })}
          </div>

          <div className="mt-12 border-t border-[#E5E7EB] pt-6">
            <Link href="/" className="type-ui-sm text-[#447ACB] hover:text-[#2F5EA4]">
              Return to greatestpmever.com
            </Link>
          </div>
        </article>
      </Container>
    </main>
  )
}
