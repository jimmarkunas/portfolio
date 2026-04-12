"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function InterviewsPage() {
  useEffect(() => {
    const query = window.location.search ?? ""
    const hash = window.location.hash ?? ""
    window.location.replace(`/interview${query}${hash}`)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white grid place-items-center p-6">
      <div className="text-center space-y-3">
        <p className="text-sm tracking-[0.08em] uppercase text-white/70">
          Redirecting to the canonical route
        </p>
        <p className="text-xl">
          Opening <span className="font-semibold">/interview</span>...
        </p>
        <Link className="underline text-white/80 hover:text-white" href="/interview">
          Continue manually
        </Link>
      </div>
    </main>
  )
}
