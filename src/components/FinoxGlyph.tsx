type FinoxGlyphProps = {
  className?: string
  dotSpacing?: number
}

export function FinoxGlyph({ className, dotSpacing = 6 }: FinoxGlyphProps) {
  const dotOffset = (40 - dotSpacing * 4) / 2
  const dots = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, column) => ({
      key: `${row}-${column}`,
      cx: dotOffset + column * dotSpacing,
      cy: dotOffset + row * dotSpacing,
    })),
  ).flat()

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {dots.map((dot) => (
        <circle key={dot.key} cx={dot.cx} cy={dot.cy} r="2.15" fill="currentColor" />
      ))}
    </svg>
  )
}
