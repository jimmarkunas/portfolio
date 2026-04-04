import type { CSSProperties, ReactNode } from "react"

import Link from "next/link"

import { ArrowUpRightIcon, StarIcon } from "@/components/icons/ui-icons"

export type HighlightArtVariant = "featuredTube" | "whiteCubes" | "blueCube" | "oliveSphere" | "redSphere" | "orangeDisk" | "mintColumn"

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
    <article className="rounded-[10px] bg-white px-6 py-5 md:px-8 md:py-6">
      <div className="grid gap-3 md:grid-cols-[140px_minmax(0,1fr)_max-content] md:items-center md:gap-6">
        <div className="type-p2">
          <span className="text-[#666666]">{rank}</span>
          <span className="text-[#222222]"> {year}</span>
        </div>
        <div className="type-p2 text-[#222222] md:text-center">{title}</div>
        <div className="type-p2 text-[#222222] md:text-right md:whitespace-nowrap">{source}</div>
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

export function ArtBlock({
  variant,
  className = "",
}: {
  variant: HighlightArtVariant
  className?: string
}) {
  const styles: Record<HighlightArtVariant, CSSProperties> = {
    featuredTube: {
      background:
        "radial-gradient(circle at 12% 28%, rgba(245,244,234,0.95) 0 6%, transparent 7%), radial-gradient(circle at 85% 22%, rgba(206,191,166,0.55) 0 12%, transparent 13%), linear-gradient(135deg, #6a4d35 0%, #947457 38%, #b19375 64%, #8b6b50 100%)",
    },
    whiteCubes: {
      background:
        "linear-gradient(160deg, #ebe9e4 0%, #f8f6f1 46%, #d8d2c9 100%)",
    },
    blueCube: {
      background:
        "linear-gradient(145deg, #d5e0ea 0%, #b7c8d5 45%, #eff4f8 100%)",
    },
    oliveSphere: {
      background:
        "radial-gradient(circle at 38% 33%, #f7f3e8 0 9%, transparent 10%), linear-gradient(140deg, #81906e 0%, #91a07f 34%, #e3ecd8 35%, #ced7c4 55%, #a6b49a 100%)",
    },
    redSphere: {
      background:
        "radial-gradient(circle at 64% 56%, #e93023 0 7%, #d61912 8%, transparent 9%), linear-gradient(135deg, #e41613 0%, #ff4316 38%, #f3d7ef 39%, #c7b0e2 68%, #eed7f6 100%)",
    },
    orangeDisk: {
      background:
        "radial-gradient(circle at 55% 17%, #f4522d 0 10%, #ff784b 11%, transparent 12%), linear-gradient(135deg, #9fd7e4 0%, #afdce3 28%, #f0a068 29%, #f07f4d 52%, #f8d8c2 100%)",
    },
    mintColumn: {
      background:
        "radial-gradient(circle at 76% 28%, #b8eadc 0 9%, #8fd3c7 10%, transparent 11%), linear-gradient(135deg, #f3ebe0 0%, #e9e3d7 42%, #d7d7d7 43%, #faf3eb 100%)",
    },
  }

  return (
    <div className={`relative overflow-hidden rounded-[10px] ${className}`.trim()} style={styles[variant]}>
      {variant === "featuredTube" ? (
        <>
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[24%] -translate-x-1/2 rounded-t-[34px] rounded-b-[20px] bg-[linear-gradient(180deg,#d8d1bd_0%,#c0ba9f_55%,#d6cdb8_100%)] shadow-[inset_0_0_0_1px_rgba(90,72,52,0.08)]" />
          <div className="absolute bottom-[11%] left-1/2 h-[13%] w-[16%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,#33383f_0_35%,#24272c_36%,#222222_100%)]" />
          <div className="absolute bottom-0 left-[18%] h-[62%] w-[1px] rotate-[-12deg] bg-white/50" />
          <div className="absolute bottom-[8%] right-[14%] h-[58%] w-[1px] rotate-[20deg] bg-white/35" />
        </>
      ) : null}
      {variant === "whiteCubes" ? (
        <>
          <div className="absolute left-[10%] top-[16%] h-[40%] w-[28%] rotate-[24deg] bg-black shadow-[22px_28px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute left-[4%] top-[6%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
          <div className="absolute right-[14%] top-[22%] h-[42%] w-[28%] rotate-[22deg] bg-black shadow-[20px_26px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute right-[8%] top-[13%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
        </>
      ) : null}
      {variant === "blueCube" ? (
        <>
          <div className="absolute bottom-[12%] left-1/2 h-[24%] w-[32%] -translate-x-1/2 bg-[#dce8ef] shadow-[0_12px_28px_rgba(34,34,34,0.14)]" />
          <div className="absolute bottom-[36%] left-[28%] h-[14%] w-[44%] rotate-[8deg] bg-[#edf5fa]" />
        </>
      ) : null}
      {variant === "oliveSphere" ? (
        <>
          <div className="absolute bottom-0 left-[34%] h-[38%] w-[34%] bg-[#d8dcc8]" />
          <div className="absolute bottom-[30%] left-[31%] h-[32%] w-[32%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fffef3_0,#f0eddd_42%,#d6d2bb_100%)] shadow-[0_12px_26px_rgba(34,34,34,0.12)]" />
        </>
      ) : null}
      {variant === "redSphere" ? (
        <>
          <div className="absolute bottom-0 left-[46%] h-[36%] w-[34%] bg-[#a285d1]" />
          <div className="absolute bottom-[28%] left-[48%] h-[22%] w-[22%] rounded-full bg-[radial-gradient(circle_at_38%_32%,#ff6b46_0,#ff2e1e_40%,#d61113_100%)] shadow-[0_10px_22px_rgba(34,34,34,0.16)]" />
          <div className="absolute bottom-0 right-0 h-[18%] w-[28%] rounded-tl-full bg-[#f2d8ea]" />
        </>
      ) : null}
      {variant === "orangeDisk" ? (
        <>
          <div className="absolute bottom-0 left-[40%] h-[48%] w-[28%] bg-[#9ea49b] shadow-[0_12px_24px_rgba(34,34,34,0.14)]" />
          <div className="absolute left-[10%] top-[36%] h-[24%] w-[38%] rounded-full bg-[#273d5a] opacity-75" />
          <div className="absolute left-[52%] top-[10%] h-[26%] w-[22%] rotate-[20deg] rounded-full bg-[#f34f26]" />
        </>
      ) : null}
      {variant === "mintColumn" ? (
        <>
          <div className="absolute bottom-0 left-[14%] h-[28%] w-[34%] bg-[#f7f7f7]" />
          <div className="absolute bottom-0 right-[14%] h-[44%] w-[24%] bg-[#b48b98]" />
          <div className="absolute bottom-[30%] right-[12%] h-[26%] w-[28%] rounded-full bg-[radial-gradient(circle_at_38%_30%,#d5fff0_0,#a8e5d5_46%,#8bcdbf_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[14%] bg-[radial-gradient(circle,#ffffff_18%,transparent_19%)] [background-size:10px_10px] opacity-75" />
        </>
      ) : null}
    </div>
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
      href="/work"
      aria-label={`${category}: ${title}. ${readTime}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[18px] bg-white">
        <ArtBlock variant={art} className="aspect-square" />

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
          <div className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 py-2 text-[16px] leading-5 text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-colors duration-200 group-hover:bg-[#4B7FD1] group-hover:text-white">
            {category}
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#4B7FD1] group-hover:text-white">
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
