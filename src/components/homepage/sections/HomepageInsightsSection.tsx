import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import type { ReactNode } from "react"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

type ServicesItem = HomepageText["services"][number]

export type HomepageInsightCard = {
  logoSrc?: string
  logoAlt?: string
  badgeValue?: string
  title?: string
  subtitle?: string
  value?: string
  label?: string
  suffix?: string
  summary?: string
}

type HomepageInsightsSectionProps = {
  section: HomepageText["sections"]["provenResults"]
  stats: HomepageText["stats"]
  statsCards: HomepageText["stats"]["cards"]
}

type HomepageInsightTopCardProps = {
  logoSrc?: string
  logoAlt?: string
  value: ReactNode
  description: ReactNode
}

function HomepageInsightTopCard({ logoSrc, logoAlt, value, description }: HomepageInsightTopCardProps) {
  return (
    <article className="flex min-h-[140px] items-center rounded-[10px] bg-[#222222] p-[18px]">
      <div className="flex w-full flex-col items-center gap-3 text-center">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={logoAlt ?? ""}
            className="h-7 w-auto max-w-[140px] object-contain"
          />
        ) : null}
        <div className="type-h5 shrink-0 text-white">{value}</div>
        <p className="type-ui-sm max-w-[320px] text-[#F4F4F4]">{description}</p>
      </div>
    </article>
  )
}

const serviceIconAssets: Record<
  ServicesItem["icon"],
  { src: string; scaleClass: string }
> = {
  uiux: { src: "/homepage/services/uiux-icon.png", scaleClass: "scale-[2.9]" },
  branding: { src: "/homepage/services/branding-icon.png", scaleClass: "scale-[1.34]" },
  graphic: { src: "/homepage/services/graphic-icon.png", scaleClass: "scale-[1.42]" },
  web: { src: "/homepage/services/web-icon.png", scaleClass: "scale-[1.28]" },
  marketing: { src: "/homepage/services/marketing-icon.png", scaleClass: "scale-[1.34]" },
  motion: { src: "/homepage/services/motion-icon.png", scaleClass: "scale-[1.3]" },
}

function ServicesIcon({ icon }: { icon: ServicesItem["icon"] }) {
  const asset = serviceIconAssets[icon]

  return (
    <img
      src={asset.src}
      alt=""
      aria-hidden="true"
      className={`h-full w-full object-contain ${asset.scaleClass}`}
    />
  )
}

function ServiceCard({ item }: { item: ServicesItem }) {
  return (
    <article className="relative flex h-full min-h-[320px] flex-col items-center rounded-[10px] bg-[#F9FAFB] px-6 py-5 outline outline-1 outline-gray-200">
      <div className="mt-3 flex justify-center text-[#2B2B2B]">
        <div className="h-[50px] w-[50px]">
          <ServicesIcon icon={item.icon} />
        </div>
      </div>
      <h3 className="type-h6 mt-8 text-center text-[#222222]">{item.title}</h3>
      <p className="type-p3 mt-3 max-w-[360px] text-center text-black/80">{item.description}</p>
    </article>
  )
}

export function HomepageServicesGrid({ services }: { services: HomepageText["services"] }) {
  return (
    <MotionReveal preset="cardStrong" className="w-full">
      <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => (
          <MotionReveal
            key={`${item.title}-${index}`}
            preset="cardStrong"
            className="h-full"
            delay={0.06 + index * 0.04}
          >
            <ServiceCard item={item} />
          </MotionReveal>
        ))}
      </div>
    </MotionReveal>
  )
}

function ProvenResultsLeadBlock({
  section,
}: {
  section: HomepageText["sections"]["provenResults"]
}) {
  const [introCopy, snapshotCopy] = section.description.split(/\n\s*\n/).map((part) => part.trim())

  return (
    <MotionReveal preset="hero" className="w-full" delay={0.02}>
      <HomepageSectionHeader label={section.pill}>
        <div
          className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} w-full lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-10`}
        >
          <h2 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} max-w-[540px] text-[#222222]`}>
            {section.title}
          </h2>
          <div className="flex flex-col gap-10 pt-1 lg:max-w-[980px]">
            {introCopy ? <p className="type-p3 text-black/80">{introCopy}</p> : null}
            {snapshotCopy ? <p className="type-p3 text-black/80">{snapshotCopy}</p> : null}
          </div>
        </div>
      </HomepageSectionHeader>
    </MotionReveal>
  )
}

function TrustStatsRow({ stats }: { stats: HomepageText["stats"] }) {
  return (
    <section className="w-full bg-transparent">
      <MotionReveal preset="section">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-[10px] md:grid-cols-4 md:gap-0 md:divide-x md:divide-black/10">
            {stats.trustStats.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col items-center gap-3 px-1 py-0 text-center lg:px-6"
              >
                <div className="h-[3px] w-7 rounded-full bg-[#447ACB]" />
                <div className="type-stat-number text-[#1C1C2E]">
                  <AnimatedMetricValue value={stat.value} trigger="load" />
                </div>
                <div className="type-rail-label font-semibold text-[#1C1C2E]">{stat.title}</div>
                <div className="type-p5 text-[#6B7280]">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}

function BlackStatsBand({ statsCards }: { statsCards: HomepageText["stats"]["cards"] }) {
  const [statsCard1, , , statsCard4, , statsCard6] = statsCards as HomepageInsightCard[]

  return (
    <MotionReveal preset="cardStrong" className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#222222]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid w-full gap-5 md:grid-cols-3">
            <div className="flex h-full flex-col gap-4">
              <HomepageInsightTopCard
                logoSrc={statsCard1.logoSrc}
                logoAlt={statsCard1.logoAlt}
                value={statsCard1.badgeValue ?? statsCard1.value ?? statsCard1.title ?? ""}
                description={statsCard1.subtitle ?? statsCard1.summary ?? ""}
              />
            </div>

            <div className="flex h-full flex-col gap-4 md:order-3">
              <HomepageInsightTopCard
                logoSrc={statsCard4.logoSrc}
                logoAlt={statsCard4.logoAlt}
                value={statsCard4.title ?? statsCard4.value ?? statsCard4.badgeValue ?? ""}
                description={statsCard4.subtitle ?? statsCard4.summary ?? ""}
              />
            </div>

            <div className="flex h-full flex-col gap-4 md:order-2">
              <HomepageInsightTopCard
                logoSrc={statsCard6.logoSrc}
                logoAlt={statsCard6.logoAlt}
                value={statsCard6.value ?? statsCard6.title ?? statsCard6.badgeValue ?? ""}
                description={statsCard6.summary ?? statsCard6.subtitle ?? ""}
              />
            </div>
          </div>
        </div>
      </div>
    </MotionReveal>
  )
}

export function HomepageInsightsSection({
  section,
  stats,
  statsCards,
}: HomepageInsightsSectionProps) {
  return (
    <HomepageSectionShell
      className="bg-[#F3F3F3]"
      paddingClassName="pt-10 pb-0 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0"
    >
      <div className="flex flex-col items-start gap-8 md:gap-10">
        <ProvenResultsLeadBlock section={section} />
        <TrustStatsRow stats={stats} />

        <BlackStatsBand statsCards={statsCards} />
      </div>
    </HomepageSectionShell>
  )
}
