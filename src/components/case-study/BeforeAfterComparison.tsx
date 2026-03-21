import type { CaseStudySummaryColumn } from "@/components/case-study/types"

type BeforeAfterComparisonProps = {
  columns: [CaseStudySummaryColumn, CaseStudySummaryColumn] | CaseStudySummaryColumn[]
}

export function BeforeAfterComparison({ columns }: BeforeAfterComparisonProps) {
  const [beforeColumn, afterColumn] = columns

  return (
    <div className="mt-2 grid w-full gap-4 p-1 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-start md:gap-0">
      <div className="rounded-[10px] bg-white p-6 shadow-[0_10px_30px_rgba(34,34,34,0.04)] md:pr-6 md:pb-6">
        <div className="flex flex-col items-start gap-3">
          <span className="text-[12px] uppercase tracking-[0.18em] text-red-500">
            {beforeColumn.label}
          </span>
          <h3 className="text-[24px] leading-[1.15] tracking-[-0.03em] text-[#222222]">
            {beforeColumn.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {beforeColumn.points.map((point) => (
              <li key={point} className="type-p4 text-[#222222]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center md:hidden">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] shadow-[0_10px_30px_rgba(34,34,34,0.12)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9 4.5V13.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M5.75 10.5L9 13.75L12.25 10.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="hidden md:flex md:h-full md:items-center md:justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] shadow-[0_10px_30px_rgba(34,34,34,0.12)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4.5 9H13.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M10.5 5.75L13.75 9L10.5 12.25" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-6 shadow-[0_10px_30px_rgba(34,34,34,0.04)] md:pl-6">
        <div className="flex flex-col items-start gap-3">
          <span className="text-[12px] uppercase tracking-[0.18em] text-blue-500">
            {afterColumn.label}
          </span>
          <h3 className="text-[24px] leading-[1.15] tracking-[-0.03em] text-[#222222]">
            {afterColumn.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {afterColumn.points.map((point) => (
              <li key={point} className="type-p4 text-[#222222]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
