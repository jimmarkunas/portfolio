import type { Metadata } from "next"

import Geekle2026App from "./Geekle2026App"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Geekle 2026 Talk",
  description:
    "Geekle 2026 presentation by Jim Markunas on using practical workflows to deliver interactive product demos quickly.",
  canonicalPath: "/geekle2026",
})

export default function Geekle2026Page() {
  return (
    <div className="geekle2026-page">
      <Geekle2026App />
    </div>
  )
}
