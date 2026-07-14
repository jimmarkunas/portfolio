import type { ReactNode } from "react"

export type PortfolioSectionCopy = {
  pill: string
  title: string
  categories: string[]
}

export type FounderSectionCopy = {
  pill: string
  title: string
  description?: string
}

export type PortfolioFounderSectionsProps = {
  portfolio: PortfolioSectionCopy
  founder: FounderSectionCopy
  intro?: {
    pill: string
    title: string
    description: string
  }
  ctaLabel?: string
  ctaHref?: string
  showCta?: boolean
}

export type PortfolioImageCardProps = {
  href: string
  src: string
  alt: string
  aspectRatio: string
  className: string
  wrapperClassName?: string
  fillContainer?: boolean
  loading?: "eager" | "lazy"
  fetchPriority?: "high" | "low" | "auto"
}

export type StaggerItemProps = {
  children: ReactNode
  className?: string
  reduceMotion: boolean
  itemY: number
}
