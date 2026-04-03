"use client"

import { useEffect, useRef } from "react"
import type { Tip } from "./useModal"

interface ModalProps {
  tip: Tip | null
  onClose: () => void
}

export default function Modal({ tip, onClose }: ModalProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tip) return
    const el = cardRef.current
    if (!el) return
    el.animate(
      [
        { opacity: 0, transform: "scale(0.98) translateY(12px)" },
        { opacity: 1, transform: "scale(1) translateY(0)" },
      ],
      { duration: 200, easing: "ease", fill: "forwards" }
    )
  }, [tip])

  if (!tip) return null

  return (
    <div
      onPointerDown={(event) => event.stopPropagation()}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.18)",
        backdropFilter: "blur(2px)",
        zIndex: 90,
        padding: 16,
      }}
    >
      <div
        ref={cardRef}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(560px, calc(100vw - 32px))",
          borderRadius: 18,
          border: "1px solid #e9e9e9",
          background: "#fff",
          boxShadow: "0 24px 56px rgba(0,0,0,0.18)",
          padding: "20px 22px 24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: 28,
              height: 28,
              border: "1px solid #ddd",
              borderRadius: 9999,
              background: "#fff",
              color: "#777",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: "26px",
              textAlign: "center",
            }}
          >
            ×
          </button>
        </div>

        {tip.label ? (
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}
          >
            {tip.label}
          </div>
        ) : null}

        <div style={{ fontSize: 22, fontWeight: 400, color: "#222", marginBottom: 18, lineHeight: 1.3 }}>
          {tip.title}
        </div>

        <div style={{ width: 32, height: 1, background: "#e5e5e5", marginBottom: 18 }} />

        <div style={{ fontSize: 14, lineHeight: 1.75, color: "#666" }}>{tip.body}</div>
      </div>
    </div>
  )
}
