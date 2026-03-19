import type { ReactNode } from "react"

import { StatCard } from "@/components/StatCard"

type DecorativeMetricCardProps = {
  value: string
  suffix?: string
  label: ReactNode
  className?: string
  decorationSide?: "left" | "right" | "none"
}

function DecorativeMetricCluster({ side }: { side: "left" | "right" }) {
  const positionClassName =
    side === "left"
      ? "left-[-5px] top-0 origin-center scale-x-[-1]"
      : "right-[-8px] top-0"

  return (
    <div className={`pointer-events-none absolute h-52 w-52 overflow-hidden ${positionClassName}`}>
      <div className="absolute right-0 top-0">
        <svg width="104" height="67" viewBox="0 0 104 67" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M42.8879 -0.0148768L0.0373579 -1.49677C-0.544845 15.6415 5.69563 32.3109 17.3895 44.8534C29.0833 57.396 45.2753 64.7871 62.4123 65.4052L105.263 66.8871C105.845 49.7487 99.6046 33.0794 87.9108 20.5368C76.217 7.99431 60.025 0.603164 42.8879 -0.0148768Z"
            fill="#F3F3F3"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-[73px]">
        <svg width="65" height="108" viewBox="0 0 65 108" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M66.9335 0.0374254C49.7952 -0.544777 33.1259 5.69576 20.5834 17.3896C8.04086 29.0834 0.649596 45.2753 0.0315573 62.4124C-0.185442 68.0451 0.714685 73.665 2.68014 78.948C4.64559 84.2311 7.6374 89.0729 11.4831 93.1942C15.3288 97.3154 19.9524 100.634 25.0871 102.96C30.2218 105.286 35.766 106.572 41.4002 106.745L63.1694 107.469L66.9335 0.0374254Z"
            fill="#F3F3F3"
          />
        </svg>
      </div>
      <div className="absolute right-[104px] top-[53px]">
        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M21.3445 73.836C40.5597 83.611 64.061 75.9582 73.8361 56.7429C83.6111 37.5277 75.9582 14.0265 56.743 4.25147C37.5278 -5.52356 14.0266 2.12921 4.25158 21.3444C-5.52344 40.5597 2.12926 64.0609 21.3445 73.836Z"
            fill="#F3F3F3"
          />
        </svg>
      </div>
    </div>
  )
}

export function DecorativeMetricCard({
  value,
  suffix = "",
  label,
  className = "",
  decorationSide = "none",
}: DecorativeMetricCardProps) {
  return (
    <StatCard
      value={value}
      suffix={suffix}
      label={label}
      align="left"
      className={`min-h-[208px] px-6 py-6 md:min-h-[256px] md:px-8 md:py-8 ${className}`.trim()}
      valueClassName="text-[#111111]"
      valueTextClassName="text-[72px] leading-[1.05] tracking-[-0.05em]"
      suffixClassName="text-[72px] leading-[1.05] tracking-[-0.05em]"
      labelClassName="type-p2 max-w-[250px] text-black/55"
      contentClassName="gap-4 md:justify-between md:gap-10"
      decoration={
        decorationSide === "none" ? null : <DecorativeMetricCluster side={decorationSide} />
      }
    />
  )
}
