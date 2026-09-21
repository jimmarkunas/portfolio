import type { HTMLAttributes, ReactNode } from "react"

export type SlideTone = "light" | "dark"

type SlideStageProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  tone?: SlideTone
  showGuides?: boolean
}

const toneClasses: Record<SlideTone, string> = {
  light: "bg-canvas text-ink",
  dark: "bg-ink text-white",
}

/**
 * Canonical PBDS 16:9 stage.
 * Logical render size is always 1920×1080; PresentationDeck is responsible for viewport scaling.
 */
export function SlideStage({
  children,
  tone = "light",
  showGuides = false,
  className = "",
  ...props
}: SlideStageProps) {
  return (
    <section
      className={`relative h-[1080px] w-[1920px] overflow-hidden font-body ${toneClasses[tone]} ${className}`.trim()}
      {...props}
    >
      {showGuides ? (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-presentation-y left-presentation-x right-presentation-x top-presentation-y z-50 border border-dashed border-magenta opacity-[0.6]"
        />
      ) : null}
      <div className="absolute bottom-presentation-y left-presentation-x right-presentation-x top-presentation-y">
        {children}
      </div>
    </section>
  )
}
