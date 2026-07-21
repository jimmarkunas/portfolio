"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export function FullWidthImage({ src, alt = "", fullWidth = true }: { src: string; alt?: string; fullWidth?: boolean }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        className={`block cursor-zoom-in text-left ${fullWidth ? "relative left-1/2 w-screen -translate-x-1/2" : "w-full"}`}
        onClick={() => setOpen(true)}
        aria-label={`Expand image${alt ? `: ${alt}` : ""}`}
      >
        <img src={src} alt={alt} className="w-full h-auto block" />
      </button>

      {open && typeof document !== "undefined" ? createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded image${alt ? `: ${alt}` : ""}`}
        >
          <img
            src={src}
            alt={alt}
            className="block h-auto w-auto max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] object-contain md:max-h-[calc(100dvh-4rem)] md:max-w-[calc(100vw-4rem)]"
            onClick={() => setOpen(false)}
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      , document.body) : null}
    </>
  )
}
