import type { CSSProperties } from "react"

export function MuradPulseGlow({
  w,
  h,
  uid = "pg",
  color = "#447acb",
  style,
}: {
  w: number
  h: number
  uid?: string
  color?: string
  style?: CSSProperties
}) {
  const cx = w / 2
  const cy = h / 2
  const r = Math.max(w, h) * 1.4
  const pad = r

  return (
    <svg
      width={w}
      height={h}
      style={{ position: "absolute", top: 0, left: 0, overflow: "visible", pointerEvents: "none", zIndex: 0, ...style }}
    >
      <defs>
        <radialGradient id={`${uid}-rg`} cx={cx} cy={cy} r={r} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="40%" stopColor={color} stopOpacity="0.12" />
          <stop offset="70%" stopColor={color} stopOpacity="0.04" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${uid}-clip`}>
          <path
            fillRule="evenodd"
            d={`M ${-pad} ${-pad} H ${w + pad} V ${h + pad} H ${-pad} Z M 0 0 H ${w} V ${h} H 0 Z`}
          />
        </clipPath>
      </defs>
      <rect
        x={-pad}
        y={-pad}
        width={w + pad * 2}
        height={h + pad * 2}
        fill={`url(#${uid}-rg)`}
        clipPath={`url(#${uid}-clip)`}
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="6s"
          calcMode="spline"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}
