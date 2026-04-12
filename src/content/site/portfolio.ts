type PortfolioShowcaseCard = {
  href: string
  src: string
  alt: string
  aspectRatio: string
}

type PortfolioShowcase = {
  topRow: PortfolioShowcaseCard[]
  feature: PortfolioShowcaseCard
  sideStack: PortfolioShowcaseCard[]
  middleRow: PortfolioShowcaseCard[]
  lowerRow: PortfolioShowcaseCard[]
  lowerMiddleRow: PortfolioShowcaseCard[]
  wideRows: PortfolioShowcaseCard[]
}

type PortfolioContent = {
  portfolioShowcase: PortfolioShowcase
  founderShowcase: PortfolioShowcaseCard[]
}

export const siteContent = {
  portfolioShowcase: {
    topRow: [
      { href: "/work/dtv01/", src: "/portfolio-gallery/directv02.svg", alt: "DIRECTV project", aspectRatio: "433 / 320" },
      { href: "/work/cps/", src: "/portfolio-gallery/cps.svg", alt: "CPS project", aspectRatio: "433 / 320" },
      { href: "/work/newyorklife/", src: "/portfolio-gallery/nyl.svg", alt: "New York Life project", aspectRatio: "433 / 320" },
    ] satisfies PortfolioShowcaseCard[],
    feature: { href: "/work/modere/", src: "/portfolio-gallery/modere.svg", alt: "Modere project", aspectRatio: "882 / 658" } satisfies PortfolioShowcaseCard,
    sideStack: [
      { href: "/work/bi/", src: "/portfolio-gallery/bi.svg", alt: "BI project", aspectRatio: "433 / 320" },
      { href: "/work/mm/", src: "/portfolio-gallery/mm.svg", alt: "MM project", aspectRatio: "433 / 320" },
    ] satisfies PortfolioShowcaseCard[],
    middleRow: [
      { href: "/work/method/", src: "/portfolio-gallery/method.svg", alt: "Method project", aspectRatio: "660 / 381" },
      { href: "/work/murad/", src: "/portfolio-gallery/murad.svg", alt: "Murad project", aspectRatio: "660 / 381" },
    ] satisfies PortfolioShowcaseCard[],
    lowerRow: [
      { href: "/work/k2/", src: "/portfolio-gallery/k2.svg", alt: "K2 project", aspectRatio: "660 / 381" },
      { href: "/work/cbdistillery/", src: "/portfolio-gallery/cbdistillery.svg", alt: "CBDistillery project", aspectRatio: "660 / 381" },
    ] satisfies PortfolioShowcaseCard[],
    lowerMiddleRow: [
      { href: "/work/lego/", src: "/portfolio-gallery/lego.svg", alt: "LEGO project", aspectRatio: "660 / 381" },
      { href: "/work/aa/", src: "/portfolio-gallery/aa.svg", alt: "American Apparel project", aspectRatio: "660 / 381" },
    ] satisfies PortfolioShowcaseCard[],
    wideRows: [
      { href: "/work/foh/", src: "/portfolio-gallery/foh.svg", alt: "FOH project", aspectRatio: "1336 / 582" },
      { href: "/work/dtv02/", src: "/portfolio-gallery/directv01.svg", alt: "DIRECTV project", aspectRatio: "1336 / 582" },
    ] satisfies PortfolioShowcaseCard[],
  },
  founderShowcase: [
    { href: "/work/zevo/", src: "/portfolio-gallery/zevo.svg", alt: "ZEVO project", aspectRatio: "703 / 527" },
    { href: "/work/cwg/", src: "/portfolio-gallery/cwg.svg", alt: "CWG project", aspectRatio: "703 / 527" },
  ] satisfies PortfolioShowcaseCard[],
} satisfies PortfolioContent
