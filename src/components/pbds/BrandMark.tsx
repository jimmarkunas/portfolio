import type { SVGProps } from "react"

type BrandMarkColor = "ink" | "magenta" | "white"

type BrandMarkProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  color?: BrandMarkColor
  label?: string
}

const colors: Record<BrandMarkColor, string> = {
  ink: "#090909",
  magenta: "#FF2FAE",
  white: "#FFFFFF",
}

/**
 * Canonical Jim Markunas brand mark.
 *
 * Geometry is exported directly from the Figma component
 * `Brand / Mark / 2012 Asterisk` (JM Personal Brand V2).
 * Do not redraw, round, bevel, extrude, skew, outline, or substitute it.
 */
export function BrandMark({
  color = "ink",
  label,
  width = 180,
  height = 180,
  ...props
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      width={width}
      height={height}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...props}
    >
      <path
        d="M68.112 0V58.302L12.168 45.63L0 83.664L53.514 103.95L21.888 154.656L55.944 177.462L90 126.756L126.486 177.462L158.112 152.118L124.056 103.95L177.57 83.664L165.402 45.63L111.888 60.84L109.458 0H68.112Z"
        fill={colors[color]}
      />
    </svg>
  )
}
