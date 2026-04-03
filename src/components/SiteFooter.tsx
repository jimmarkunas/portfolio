import Link from "next/link"

import { Container } from "@/components/Container"
import { FinoxGlyph } from "@/components/FinoxGlyph"

const footerLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
  { href: "/freebies", label: "Freebies" },
]

const socialLinks = [
  { href: "/contact", label: "Email", icon: "/sm-icons/email.png" },
  { href: "https://linkedin.com/in/jimmarkunas", label: "LinkedIn", icon: "/sm-icons/linkedin.png", external: true },
  { href: "https://x.com/jimmarkunas", label: "X", icon: "/sm-icons/twitter.png", external: true },
  {
    href: "https://jimmarkunas.notion.site/Jim-Markunas-Portfolio-2d03c5a05926807393b0f0af6a634226",
    label: "Notion",
    icon: "/sm-icons/notion.svg",
    external: true,
  },
]
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
  const content = (
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

  const className =
    "inline-flex h-12 w-12 items-center justify-center text-[#FEFEFE] transition-colors hover:text-[#447ACB]"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={className}
      >
        {content}
      </a>
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
            <div className="mx-auto flex min-h-[400px] max-w-[840px] flex-col items-center justify-center px-8 py-20 text-center">
              <h2 className="type-h3 text-[#FEFEFE]">
                Let&apos;s build something <span className="text-[#447ACB]">extraordinary</span>
              </h2>
              <p className="type-p3 mt-5 max-w-[640px] text-[#F3F3F3]">
                I&apos;m always excited to collaborate on new and innovative projects. Whether
                you&apos;re starting from scratch or refining an existing idea
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/cv"
                  className="type-ui-md inline-flex min-h-[48px] items-center rounded-[50px] border border-white/20 px-5 font-medium text-[#FEFEFE] transition-colors hover:border-[#447ACB] hover:text-[#447ACB]"
                >
                  My CV
                </Link>
                <a
                  href="https://calendar.app.google/TkZumQx7Bfyou7G26"
                  target="_blank"
                  rel="noreferrer"
                  className="type-ui-md inline-flex min-h-[48px] items-center gap-2 rounded-[50px] border border-[#447ACB] bg-[#447ACB] px-5 font-medium text-[#FEFEFE] transition-colors hover:border-[#2F5EA4] hover:bg-[#2F5EA4]"
                >
                  <span>Book a Call</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.957229 11.3614L0 10.4042L9.02046 1.375H0.819729V0H11.3614V10.5417H9.9864V2.34094L0.957229 11.3614Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10" />

          <div className="px-4 py-4 md:px-10">
            <div className="flex flex-col items-center gap-6 lg:grid lg:min-h-[48px] lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* 1. Logo/wordmark — top on mobile, center on desktop */}
              <Link href="/" className="group flex items-center justify-center gap-3 text-[#FEFEFE] transition-colors hover:text-[#447ACB] lg:order-2 lg:justify-self-center">
                <FinoxGlyph className="h-6 w-6 shrink-0" />
                <span className="type-footer-brand">Jim Markunas</span>
              </Link>

              {/* 2. Social icons — middle on mobile, left on desktop */}
              <div className="flex items-center justify-center gap-1 lg:order-1 lg:justify-self-start">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>

              {/* 3. Nav links — bottom on mobile, right on desktop */}
              <nav className="type-ui-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-none text-[#FEFEFE] lg:order-3 lg:justify-self-end">
                {footerLinks.map((link, index) => (
                  <div key={link.href} className="contents">
                    {index > 0 ? <span className="text-white/40">·</span> : null}
                    <Link className="transition-colors hover:text-[#447ACB]" href={link.href}>
                      {link.label}
                    </Link>
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
