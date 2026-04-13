export type SiteNavLink = {
  href: `/${string}`
  label: string
}

export type SiteSocialLink = {
  href: string
  label: string
  icon: string
  external?: boolean
}

export const siteIdentity = {
  displayName: "James Markunas",
  linkedinLabel: "linkedin.com/in/jimmarkunas",
} as const

export const siteExternalUrls = {
  linkedin: "https://linkedin.com/in/jimmarkunas",
  x: "https://x.com/jimmarkunas",
  notionPortfolio:
    "https://jimmarkunas.notion.site/Jim-Markunas-Portfolio-2d03c5a05926807393b0f0af6a634226",
} as const

const HOMEPAGE_HERO_BOOKING_URL = "https://calendar.app.google/Cc4kuM7cqTyiXQx66"

export const siteBookingUrls = {
  siteShell: "https://calendar.app.google/TkZumQx7Bfyou7G26",
  homepageHero: HOMEPAGE_HERO_BOOKING_URL,
  caseStudyDefault: "https://calendar.app.google/iwn5AUyWqJadMK2t9",
  founderCaseStudy: HOMEPAGE_HERO_BOOKING_URL,
} as const

export const primaryNavLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
] satisfies SiteNavLink[]

export const footerNavLinks = [
  ...primaryNavLinks,
  { href: "/freebies", label: "Freebies" },
] satisfies SiteNavLink[]

export const footerSocialLinks = [
  { href: "/contact", label: "Email", icon: "/sm-icons/email.png" },
  {
    href: siteExternalUrls.linkedin,
    label: "LinkedIn",
    icon: "/sm-icons/linkedin.png",
    external: true,
  },
  {
    href: siteExternalUrls.x,
    label: "X",
    icon: "/sm-icons/twitter.png",
    external: true,
  },
  {
    href: siteExternalUrls.notionPortfolio,
    label: "Notion",
    icon: "/sm-icons/notion.svg",
    external: true,
  },
] satisfies SiteSocialLink[]

export const contactSocialLinks = [
  {
    href: siteExternalUrls.linkedin,
    label: "LinkedIn",
    icon: "/sm-icons/linkedin.png",
  },
  {
    href: siteExternalUrls.x,
    label: "X",
    icon: "/sm-icons/twitter.png",
  },
] satisfies SiteSocialLink[]

export const siteCta = {
  bookCallLabel: "Book a Call",
  bookingUrls: siteBookingUrls,
} as const
