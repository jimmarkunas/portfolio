import type { ReactNode } from "react"

type TagPillProps = {
  children: ReactNode
  className?: string
  variant?: "soft" | "dark" | "white"
}

const variantClasses = {
  soft: "border border-[#222222]/14 bg-[#2B2B2B]/5 text-[#222222]",
  dark: "bg-[#2B2B2B] text-white",
  white: "bg-white text-[#222222]",
}

export function TagPill({
  children,
  className = "",
  variant = "soft",
}: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-[100px] px-5 py-2 text-[16px] ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
