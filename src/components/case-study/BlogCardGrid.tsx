"use client"

import { useState } from "react"
import type { CaseStudyBlogCard } from "@/content/case-studies/types"

function isImagePath(art: string) {
  return art.startsWith("/")
}

function CardArt({ art }: { art: string }) {
  if (isImagePath(art)) {
    return <img src={art} alt="" className="w-full h-auto block" />
  }
  // CSS art fallback
  if (art === "olive") return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#90A07C_0%,#B7C1A5_52%,#D7D3C2_100%)]" />
      <div className="absolute right-8 top-5 h-52 w-52 rounded-full border border-white/30" />
      <div className="absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2 bg-[#C9D0BF]" />
      <div className="absolute bottom-16 left-1/2 h-28 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fffef7_0%,#ebe6d6_48%,#d6cfbb_100%)] shadow-[22px_26px_40px_rgba(34,34,34,0.14)]" />
    </>
  )
  if (art === "ux") return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#F31B0F_0%,#EF1C16_44%,#E2D5E4_45%,#D8C7E1_65%,#F7D4CB_100%)]" />
      <div className="absolute bottom-0 right-0 h-16 w-28 rounded-tl-full bg-[#E2D9EE]" />
      <div className="absolute bottom-0 left-[46%] h-24 w-24 bg-[linear-gradient(180deg,#C59CEB_0%,#9A6BCF_100%)]" />
      <div className="absolute bottom-20 left-[54%] h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffefef_0%,#ff3c2f_35%,#c6100a_100%)]" />
    </>
  )
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#B7DEE7_0%,#B9E0E9_38%,#C5E2DC_60%,#EFE7DA_100%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-44 rounded-tr-[120px] bg-[#24364D]" />
      <div className="absolute bottom-0 left-[54%] h-32 w-24 -translate-x-1/2 bg-[#A5AB9A]" />
      <div className="absolute left-[64%] top-4 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F1482F]" />
      <div className="absolute left-[55%] top-9 h-16 w-16 -translate-x-1/2 rounded-full bg-[#2F2F2F]" />
    </>
  )
}

export function BlogCardGrid({ cards }: { cards: CaseStudyBlogCard[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      {/* Desktop grid */}
      <div className="hidden w-full gap-7 md:grid md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={`${card.category}-${card.title}`}
            className="overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_18px_40px_rgba(34,34,34,0.05)]"
          >
            <div
              className={`relative overflow-hidden rounded-[24px] ${isImagePath(card.art) ? "cursor-zoom-in" : "aspect-[9/16]"}`}
              onClick={() => isImagePath(card.art) ? setLightbox(card.art) : null}
            >
              <CardArt art={card.art} />
            </div>
          </article>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="flex w-full items-start gap-4 overflow-x-auto pb-2 md:hidden">
        {cards.map((card) => {
          if (isImagePath(card.art)) {
            return (
              <img
                key={`${card.category}-mobile`}
                src={card.art}
                alt=""
                className="w-[220px] h-auto flex-shrink-0 self-start rounded-[24px] border border-black/8 object-cover"
                onClick={() => setLightbox(card.art)}
              />
            )
          }

          return (
            <div
              key={`${card.category}-mobile`}
              className="relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden rounded-[24px] border border-black/8"
            >
              <CardArt art={card.art} />
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-full max-w-full rounded-[16px] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
