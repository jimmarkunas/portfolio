import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { Container } from "@/components/Container"

export const metadata: Metadata = {
  title: "Contact | Jim Markunas",
  description:
    "Get in touch with Jim Markunas. Available for product leadership, platform architecture, and transformation programs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto flex max-w-[1336px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left column */}
          <div className="flex w-full flex-col gap-9 lg:w-[454px] lg:shrink-0">
            {/* Heading block */}
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-0.5 self-start">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="6" fill="#2B2B2B" />
                </svg>
                <span className="text-xl text-[#1F1F1F]">Contact</span>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-5xl leading-[56px] text-[#1F1F1F]">Contact Me</h1>
                <p className="text-lg leading-7 text-[#1F1F1F]/80">
                  Available for product leadership, platform architecture, and transformation
                  programs. Based in the US, UK, and EU — open to remote opportunities worldwide.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-2xl leading-8 text-zinc-600">Email</p>
                <a
                  href="mailto:jim@jimmarkunas.com"
                  className="text-3xl text-[#111111] transition-colors hover:text-[#447ACB]"
                >
                  jim@jimmarkunas.com
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl leading-8 text-zinc-600">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/jimmarkunas"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-[#111111] transition-colors hover:text-[#447ACB]"
                >
                  linkedin.com/in/jimmarkunas
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl leading-8 text-zinc-600">Location</p>
                <p className="text-3xl text-[#111111]">US · UK · EU</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="w-full lg:max-w-[766px]">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  )
}
