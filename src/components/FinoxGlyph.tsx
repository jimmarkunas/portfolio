type FinoxGlyphProps = {
  className?: string
}

export function FinoxGlyph({ className }: FinoxGlyphProps) {
  const dots = Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 6 }, (_, column) => ({
      key: `${row}-${column}`,
      cx: 5 + column * 6,
      cy: 5 + row * 6,
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
