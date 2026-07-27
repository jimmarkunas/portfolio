import type { ReactNode } from "react"

import Link from "next/link"

import { Container } from "@/components/Container"
import { ArrowUpRightIcon, StarIcon } from "@/components/icons/ui-icons"
import { SectionHeader } from "@/components/SectionHeader"
import { siteRoutes } from "@/content/site"
import { ArtBlock, type HighlightArtVariant } from "./ArtBlock"

export { ArtBlock }
export type { HighlightArtVariant }

export function ExperienceCard({
  title,
  description,
  icon: Icon,
  wide = false,
}: {
  title: string
  description: string
  icon: () => ReactNode
  wide?: boolean
}) {
  return (
    <article
      className={`h-full rounded-[10px] bg-[#F3F3F3] p-6 md:p-7 ${
        wide ? "lg:col-span-1 lg:min-h-[320px]" : "lg:min-h-[320px]"
      }`}
    >
      <div className="text-[#222222]">
        <Icon />
      </div>
      <div className="mt-12 md:mt-14">
        <h3 className="type-h5 text-[#222222]">{title}</h3>
        {description ? (
          <p className="type-p3 mt-3 max-w-[320px] text-[#7B7B7B]">{description}</p>
        ) : null}
      </div>
    </article>
  )
}

export function AwardRow({
  rank,
  year,
  title,
  source,
}: {
  rank: string
  year: string
  title: string
  source: string
}) {
  return (
    <article className="rounded-[10px] bg-[#222222] px-6 py-5 md:px-8 md:py-6">
      <div className="grid grid-cols-[72px_minmax(0,1fr)_max-content] gap-3 md:grid-cols-[88px_minmax(0,1fr)_max-content] md:gap-6 md:items-center 2xl:grid-cols-[140px_minmax(0,1fr)_max-content] 2xl:gap-6">
        <div className="type-p2 min-w-0">
          <span className="text-white/65">{rank}</span>
          <span className="text-white"> {year}</span>
        </div>
        <div className="type-p2 min-w-0 text-left text-white">{title}</div>
        <div className="type-p2 min-w-0 text-left text-white">{source}</div>
      </div>
    </article>
  )
}

export function ClientCard({
  name,
  year,
  icon: Icon,
}: {
  name: string
  year: string
  icon: () => ReactNode
}) {
  return (
    <article className="flex min-h-[256px] flex-col items-center justify-between rounded-[10px] bg-white px-6 py-4 text-center">
      <div className="type-p2 text-[#7B7B7B]">{name}</div>
      <div className="flex flex-1 items-center justify-center text-[#222222]">
        <Icon />
      </div>
      <div className="type-p2 text-[#7B7B7B]">{year}</div>
    </article>
  )
}

export function SectionPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
      <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
      <span className="type-p2 text-[#222222]">{label}</span>
    </div>
  )
}

export const HOMEPAGE_SECTION_HEADER_STACK_CLASS = "flex w-full flex-col gap-5"
export const HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS = "flex flex-col gap-3"
export const HOMEPAGE_SECTION_HEADER_TITLE_CLASS = "type-h3"
export const HOMEPAGE_HEADER_SECTION_TOP_INSET_CLASS = "pt-3 md:pt-4 lg:pt-6"
export const HOMEPAGE_SECTION_SHELL_PADDING_CLASS = "py-10 md:py-12 lg:py-14"
export const HOMEPAGE_PILL_CTA_CLASS =
  "inline-flex min-h-[48px] min-w-[300px] items-center justify-center gap-2 rounded-[50px] border border-[#222222] bg-[#222222] px-5 text-[18px] font-medium whitespace-nowrap text-[#FEFEFE] transition-colors hover:border-[#447ACB] hover:bg-[#447ACB] hover:text-[#FEFEFE] focus-visible:border-[#447ACB] focus-visible:bg-[#447ACB] focus-visible:text-[#FEFEFE] active:border-[#447ACB] active:bg-[#447ACB] active:text-[#FEFEFE]"

type HomepageSectionShellProps = {
  className?: string
  containerClassName?: string
  paddingClassName?: string
  children: ReactNode
}

export function HomepageSectionShell({
  className = "",
  containerClassName = "",
  paddingClassName = HOMEPAGE_SECTION_SHELL_PADDING_CLASS,
  children,
}: HomepageSectionShellProps) {
  return (
    <section className={`w-full ${className}`.trim()}>
      <Container className={`${paddingClassName} ${containerClassName}`.trim()}>{children}</Container>
    </section>
  )
}

export function HomepageSectionHeader({
  label,
  align = "left",
  className = "",
  children,
}: {
  label: string
  align?: "left" | "center"
  className?: string
  children: ReactNode
}) {
  return (
    <SectionHeader
      eyebrow={label}
      align={align}
      className={`${HOMEPAGE_SECTION_HEADER_STACK_CLASS} ${className}`.trim()}
      eyebrowClassName="!min-h-0 !px-3 !py-0.5"
      eyebrowLabelClassName="type-p2"
    >
      {children}
    </SectionHeader>
  )
}

type FullSectionHeaderProps = {
  eyebrow: string
  heading: ReactNode
  description?: ReactNode
  controls?: ReactNode
  align?: "left" | "center"
  headingAs?: "h1" | "h2" | "h3"
  className?: string
  eyebrowClassName?: string
  headingClassName?: string
  descriptionClassName?: string
  controlsClassName?: string
}

export function FullSectionHeader({
  eyebrow,
  heading,
  description,
  controls,
  align = "left",
  headingAs = "h1",
  className = "",
  eyebrowClassName = "",
  headingClassName = "",
  descriptionClassName = "",
  controlsClassName = "",
}: FullSectionHeaderProps) {
  return (
    <SectionHeader
      eyebrow={eyebrow}
      title={heading}
      description={description}
      controls={controls}
      align={align}
      titleAs={headingAs}
      className={`${HOMEPAGE_SECTION_HEADER_STACK_CLASS} ${className}`.trim()}
      eyebrowClassName={eyebrowClassName}
      eyebrowLabelClassName="type-p5"
      titleGroupClassName={HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS}
      titleClassName={headingClassName}
      descriptionClassName={descriptionClassName}
      controlsClassName={controlsClassName}
    />
  )
}

export function HighlightCard({
  category,
  readTime,
  title,
  art,
}: {
  category: string
  readTime: string
  title: string
  art: HighlightArtVariant
}) {
  return (
    <Link
      href={siteRoutes.work}
      aria-label={`${category}: ${title}. ${readTime}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[18px] bg-white">
        <ArtBlock variant={art} className="aspect-square" />

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
          <div className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 py-2 text-[16px] leading-5 text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-colors duration-200 group-hover:bg-[#4B7FD1] group-hover:text-white">
            {category}
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-colors duration-200 group-hover:bg-[#4B7FD1] group-hover:text-white">
            <ArrowUpRightIcon size={22} />
          </div>
        </div>
      </article>
    </Link>
  )
}

export function InsightAvatarStack({ value = "75+" }: { value?: string }) {
  return (
    <div className="flex items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#2B2B2B] text-[20px] leading-8 text-white shadow-[-3px_0px_9px_rgba(0,0,0,0.15)]">
        {value}
      </div>
    </div>
  )
}

export function InsightStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  )
}

export function MobileSelectionSheet({
  open,
  title,
  options,
  selected,
  onClose,
  onSelect,
}: {
  open: boolean
  title: string
  options: string[]
  selected: string
  onClose: () => void
  onSelect: (value: string) => void
}) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog">
      <button
        type="button"
        aria-label={`Close ${title}`}
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-[#F8F6F2] px-6 pb-8 pt-6 shadow-[0_-20px_60px_rgba(34,34,34,0.18)]">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-black/10" />

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="text-[22px] leading-7 text-[#222222]">{title}</div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[24px] leading-none text-[#222222]"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {options.map((option) => {
            const isSelected = option === selected

            return (
              <button
                key={option}
                type="button"
                className={`flex min-h-[56px] items-center justify-between rounded-[18px] px-5 text-left text-[18px] leading-6 transition-colors ${
                  isSelected ? "bg-[#2B2B2B] text-white" : "bg-white text-[#222222]"
                }`}
                onClick={() => {
                  onSelect(option)
                  onClose()
                }}
              >
                <span>{option}</span>
                <span className={`text-[20px] ${isSelected ? "opacity-100" : "opacity-0"}`}>✓</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
