import bookingPolicy from "./booking-policy.json"

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

export const siteRoutes = {
  home: "/",
  work: "/work/",
  services: "/services/",
  cv: "/cv/",
  contact: "/contact/",
  interview: "/interview/",
  interviews: "/interviews/",
  geekle2026: "/geekle2026/",
  dshhacks2026: "/dshhacks2026/",
  llmday2026: "/llmday2026/",
  previewHomepage: "/preview/homepage/",
  freebies: "/freebies/",
  agents: "/agents/",
} as const satisfies Record<string, SiteRoute>

function toCanonicalPath(route: SiteRoute): `/${string}` {
  return route === "/" ? route : (route.slice(0, -1) as `/${string}`)
}

// siteRoutes retain trailing slashes for route constants and smoke checks.
// Canonical metadata paths intentionally strip trailing slashes.
const CANONICAL_ROUTE_KEYS = [
  "work",
  "cv",
  "contact",
  "interview",
  "geekle2026",
  "dshhacks2026",
  "llmday2026",
  "previewHomepage",
  "freebies",
  "agents",
] as const satisfies ReadonlyArray<keyof typeof siteRoutes>

function buildCanonicalPaths<const T extends readonly (keyof typeof siteRoutes)[]>(
  routes: typeof siteRoutes,
  keys: T,
) {
  const entries = keys.map((key) => [key, toCanonicalPath(routes[key])] as const)
  return Object.fromEntries(entries) as { [K in T[number]]: `/${string}` }
}

export const siteCanonicalPaths = buildCanonicalPaths(siteRoutes, CANONICAL_ROUTE_KEYS)

export const siteIdentity = {
  displayName: "James Markunas",
  linkedinLabel: "linkedin.com/in/jimmarkunas",
} as const

export const siteContactEmail = "jim@jimmarkunas.com" as const

export const siteExternalUrls = {
  linkedin: "https://linkedin.com/in/jimmarkunas",
  x: "https://x.com/jimmarkunas",
  notionPortfolio:
    "https://jimmarkunas.notion.site/Jim-Markunas-Portfolio-2d03c5a05926807393b0f0af6a634226",
} as const

const HOMEPAGE_HERO_BOOKING_URL = bookingPolicy.homepageHero

export const siteBookingUrls = {
  siteShell: bookingPolicy.siteShell,
  homepageHero: HOMEPAGE_HERO_BOOKING_URL,
  caseStudyDefault: bookingPolicy.caseStudyDefault,
  founderCaseStudy: bookingPolicy.founderCaseStudy,
} as const

export const primaryNavLinks = [
  { href: siteRoutes.work, label: "Portfolio" },
  { href: siteRoutes.cv, label: "CV" },
  { href: siteRoutes.agents, label: "A.G.E.N.T.S." },
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
