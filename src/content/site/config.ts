export type SiteNavLink = {
  href: `/${string}`
  label: string
}

export type SiteRoute = "/" | `/${string}/`

export type SiteSocialLink = {
  href: string
  label: string
  icon: string
  external?: boolean
}

function toCanonicalPath(route: SiteRoute): `/${string}` {
  return route === "/" ? route : (route.slice(0, -1) as `/${string}`)
}

export const siteRoutes = {
  home: "/",
  work: "/work/",
  services: "/services/",
  cv: "/cv/",
  contact: "/contact/",
  interview: "/interview/",
  interviews: "/interviews/",
  geekle2026: "/geekle2026/",
  previewHomepage: "/preview/homepage/",
  freebies: "/freebies/",
} as const satisfies Record<string, SiteRoute>

export const siteCanonicalPaths = {
  work: toCanonicalPath(siteRoutes.work),
  services: toCanonicalPath(siteRoutes.services),
  cv: toCanonicalPath(siteRoutes.cv),
  contact: toCanonicalPath(siteRoutes.contact),
  interview: toCanonicalPath(siteRoutes.interview),
  geekle2026: toCanonicalPath(siteRoutes.geekle2026),
  previewHomepage: toCanonicalPath(siteRoutes.previewHomepage),
} as const

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
  { href: siteRoutes.work, label: "Portfolio" },
  { href: siteRoutes.services, label: "Services" },
  { href: siteRoutes.cv, label: "CV" },
  { href: siteRoutes.contact, label: "Contact" },
] satisfies SiteNavLink[]

export const footerNavLinks = [
  ...primaryNavLinks,
  { href: siteRoutes.freebies, label: "Freebies" },
] satisfies SiteNavLink[]

export const footerSocialLinks = [
  { href: siteRoutes.contact, label: "Email", icon: "/sm-icons/email.png" },
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
