import type { ReactNode } from "react";

type ContentCardTone = "neutral" | "accent" | "outline";

/** Contained card surface. Owns its children; height follows its content in normal flow. */
export function ContentCard({ tone = "neutral", className = "", children }: { tone?: ContentCardTone; className?: string; children: ReactNode }) {
  return <article className={`pdmat-card pdmat-card--${tone} ${className}`.trim()}>{children}</article>;
}
