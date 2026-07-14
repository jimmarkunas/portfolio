"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { BookCallCta } from "@/components/BookCallCta"
import { Container } from "@/components/Container"
import { FinoxGlyph } from "@/components/FinoxGlyph"
import { TextLink } from "@/components/TextLink"
import { primaryNavLinks, siteIdentity } from "@/content/site"

const hoverLiftClass = "transition-transform duration-200 hover:-translate-y-0.5"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F3F3F3]">
      <Container className="py-4 md:py-5">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className={`flex items-center justify-start gap-[10px] text-[20px] text-[#222222] transition-colors duration-150 hover:text-[#447ACB] ${hoverLiftClass} md:text-[22px] lg:text-[24px]`}
            onClick={() => setIsOpen(false)}
          >
            <span className="inline-flex items-baseline leading-none">
              <FinoxGlyph className="h-[1.7em] w-[1.7em] shrink-0 text-current" />
            </span>
            <span className="font-display text-[1.15em] font-bold leading-none tracking-tight">
              {siteIdentity.displayName}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex lg:flex-1 lg:justify-end">
            <nav aria-label="Primary" className="flex items-center gap-x-10">
              {primaryNavLinks.map((link) => (
                <TextLink
                  key={link.href}
                  href={link.href}
                  className="text-[16px] font-normal leading-none text-[#222222]"
                >
                  {link.label}
                </TextLink>
              ))}
            </nav>

            <BookCallCta location="header" />
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-site-nav"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#222222]/10 bg-[#FEFEFE] text-[#222222] transition-colors hover:border-[#447ACB] hover:text-[#447ACB] ${hoverLiftClass} lg:hidden`}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>

        {isOpen ? (
          <div
            id="mobile-site-nav"
            className="mt-5 rounded-[16px] border border-black/8 bg-[#FEFEFE] p-5 shadow-[0_8px_24px_rgba(34,34,34,0.06)] lg:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-4">
              {primaryNavLinks.map((link) => (
                <TextLink
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-[18px] font-normal leading-none text-[#222222]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </TextLink>
              ))}
            </nav>

            <BookCallCta location="header" className="mt-5" onClick={() => setIsOpen(false)} />
          </div>
        ) : null}
      </Container>
    </header>
  )
}
