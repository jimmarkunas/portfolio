"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { TrackedOutboundIconLink } from "@/components/analytics/TrackedSiteShellLinks"
import { BookCallCta } from "@/components/BookCallCta"
import { Container } from "@/components/Container"
import { FinoxGlyph } from "@/components/FinoxGlyph"
import { ButtonLink } from "@/components/ButtonLink"
import { TextLink } from "@/components/TextLink"
import { footerNavLinks, footerSocialLinks, siteIdentity, siteRoutes } from "@/content/site"

function SocialIcon({
  href,
  label,
  icon,
  external = false,
}: {
  href: string
  label: string
  icon: string
  external?: boolean
}) {
  const lucideClassName = "h-5 w-5"
  const content = (() => {
    switch (label) {
      case "Email":
        return <Mail aria-hidden="true" className={lucideClassName} strokeWidth={2} />
      case "LinkedIn":
        return <Linkedin aria-hidden="true" className={lucideClassName} strokeWidth={2} />
      case "GitHub":
        return <Github aria-hidden="true" className={lucideClassName} strokeWidth={2} />
      case "X":
        return <Twitter aria-hidden="true" className={lucideClassName} strokeWidth={2} />
      default:
        return (
          <span
            aria-hidden="true"
            className="block h-5 w-5 bg-current"
            style={{
              maskImage: `url('${icon}')`,
              WebkitMaskImage: `url('${icon}')`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
          />
        )
    }
  })()

  const className =
    "inline-flex h-12 w-12 items-center justify-center text-[#FEFEFE] transition-colors hover:text-[#447ACB]"

  if (external) {
    return (
      <TrackedOutboundIconLink
        href={href}
        label={label}
        location="footer"
        className={className}
        ariaLabel={label}
      >
        {content}
      </TrackedOutboundIconLink>
    )
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {content}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#222222] pb-10 pt-10">
      <div className="w-full bg-[#222222]">
        <Container className="bg-transparent px-0 md:px-0 lg:px-0">
          <div className="overflow-hidden bg-transparent">
            <div className="mx-auto flex min-h-[400px] max-w-[1040px] flex-col items-center justify-center px-8 py-20 text-center">
              <h2 className="type-h3 text-[#FEFEFE]">
                <span className="block">Broken program. Impossible deadline.</span>
                <span className="block">Skeptical stakeholders.</span>
                <span className="mt-3 block md:mt-4">
                  <span className="text-[#447ACB]">Sounds like a Tuesday.</span> Let&apos;s talk.
                </span>
              </h2>
              <p className="type-p3 mt-5 max-w-[640px] text-[#F3F3F3]">
                I&apos;m always excited to collaborate on new and innovative projects. Whether
                you&apos;re starting from scratch or refining an existing idea
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink
                  href={siteRoutes.cv}
                  variant="secondary"
                  className="footer-cv-cta type-ui-md font-medium"
                >
                  My CV
                </ButtonLink>
                <BookCallCta location="footer" tone="brand" />
              </div>
            </div>
          </div>

          <div className="border-b border-white/10" />

          <div className="px-4 py-4 md:px-10">
            <div className="flex flex-col items-center gap-6 2xl:grid 2xl:min-h-[48px] 2xl:grid-cols-[1fr_auto_1fr] 2xl:items-center">
              {/* 1. Logo/wordmark — top on mobile, center on desktop */}
              <Link href="/" className="group flex items-center justify-center gap-[10px] text-[20px] text-[#FEFEFE] transition-colors hover:text-[#447ACB] md:text-[22px] lg:text-[24px] 2xl:order-2 2xl:justify-self-center">
                <FinoxGlyph className="h-[1.4em] w-[1.4em] shrink-0" dotSpacing={8} />
                <span className="font-display text-[1.15em] font-bold leading-none tracking-tight">{siteIdentity.displayName}</span>
              </Link>

              {/* 2. Social icons — middle on mobile, left on desktop */}
              <div className="flex items-center justify-center gap-1 2xl:order-1 2xl:justify-self-start">
                {footerSocialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>

              {/* 3. Nav links — bottom on mobile, right on desktop */}
              <nav className="type-ui-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-none text-[#FEFEFE] 2xl:order-3 2xl:justify-self-end">
                {footerNavLinks.map((link, index) => (
                  <div key={link.href} className="contents">
                    {index > 0 ? <span className="text-white/40">·</span> : null}
                    <TextLink
                      className="inline-flex min-h-[44px] items-center md:min-h-0"
                      href={link.href}
                    >
                      {link.label}
                    </TextLink>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
