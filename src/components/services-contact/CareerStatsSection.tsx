import { Container } from "@/components/Container"
import { EyebrowPill } from "@/components/EyebrowPill"
import { StatCard } from "@/components/StatCard"
import type { CareerStatEntry } from "@/content/services-contact"

type CareerStatsSectionProps = {
  eyebrow: string
  title: string
  intro: string
  stats: CareerStatEntry[]
}

export function CareerStatsSection({
  eyebrow,
  title,
  intro,
  stats,
}: CareerStatsSectionProps) {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,573px)_minmax(0,658px)] lg:items-start lg:justify-between">
          <div className="flex max-w-[573px] flex-col items-start gap-5">
            <EyebrowPill className="bg-white" labelClassName="type-p2 text-[#222222]">
              {eyebrow}
            </EyebrowPill>

            <div className="flex flex-col items-start gap-3">
              <h2 className="type-h3 text-[#222222]">{title}</h2>
              <p className="type-p2 max-w-[573px] text-black/80">{intro}</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard
                key={`${stat.value}-${stat.label}`}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="min-h-[176px] px-8 py-10"
                valueClassName="text-center text-slate-800"
                valueTextClassName="text-[56px] font-medium leading-[60px]"
                suffixClassName="text-[36px] font-semibold leading-9"
                labelClassName="type-p2 max-w-[220px] text-neutral-700"
                contentClassName="gap-4"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

