import { Container } from "@/components/Container"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  InsightAvatarStack,
  SectionPill,
} from "@/components/homepage/ui"

export type HomepageInsightCard = {
  badgeValue?: string
  title?: string
  subtitle?: string
  value?: string
  label?: string
  suffix?: string
  summary?: string
}

type HomepageInsightsSectionProps = {
  section: HomepageText["sections"]["insights"]
  statsCards: HomepageText["stats"]["cards"]
}

function InsightShapePair({
  largeShapeClassName,
  smallShapeClassName,
}: {
  largeShapeClassName: string
  smallShapeClassName: string
}) {
  return (
    <>
      <MotionReveal preset="shape" className={largeShapeClassName} />
      <MotionReveal preset="shape" delay={0.08} className={smallShapeClassName} />
    </>
  )
}

export function HomepageInsightsSection({ section, statsCards }: HomepageInsightsSectionProps) {
  const [statsCard1, statsCard2, statsCard3, statsCard4, statsCard5, statsCard6] =
    statsCards as HomepageInsightCard[]

  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
        <div className="flex flex-col items-start gap-12">
          <MotionReveal preset="hero" className="flex w-full flex-col items-start gap-5" delay={0.02}>
            <SectionPill label={section.pill} />

            <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col items-start gap-3">
                <h2 className="type-h3 text-[#222222]">{section.title}</h2>
                <p className="type-p3 max-w-[962px] text-black/80">{section.description}</p>
              </div>

            </div>
          </MotionReveal>

          <div className="grid w-full gap-5 md:grid-cols-3">
            <MotionReveal preset="cardStrong" className="flex h-full flex-col gap-4" delay={0.06}>
              <article className="rounded-[10px] bg-white p-[18px]">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <InsightAvatarStack value={statsCard1.badgeValue} />
                  <div className="flex flex-col">
                    <div className="type-p2 text-black">{statsCard1.title ?? ""}</div>
                    <div className="type-ui-sm text-[#666666]">{statsCard1.subtitle ?? ""}</div>
                  </div>
                </div>
              </article>

              <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                <InsightShapePair
                  largeShapeClassName="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                  smallShapeClassName="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                />
                <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                  <AnimatedMetricValue value={statsCard2.value ?? ""} />
                </div>
                <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                  {statsCard2.label ?? ""}
                </p>
              </article>
            </MotionReveal>

            <MotionReveal preset="cardStrong" delay={0.14} className="flex h-full flex-col gap-4 md:order-3">
              <article className="rounded-[10px] bg-white p-[18px]">
                <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:items-center md:justify-center md:gap-4">
                  <div className="type-h5 text-black">{statsCard4.title ?? ""}</div>
                  <p className="type-ui-sm max-w-[280px] text-black">
                    {statsCard4.subtitle ?? ""}
                  </p>
                </div>
              </article>

              <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                <InsightShapePair
                  largeShapeClassName="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                  smallShapeClassName="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                />
                <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                  <AnimatedMetricValue value={statsCard5.value ?? ""} />
                </div>
                <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                  {statsCard5.label ?? ""}
                </p>
              </article>
            </MotionReveal>

            <MotionReveal preset="cardStrong" delay={0.22} className="flex h-full flex-col gap-4 md:order-2">
              <article className="relative flex flex-1 flex-col overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                <InsightShapePair
                  largeShapeClassName="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]"
                  smallShapeClassName="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]"
                />
                <div className="type-h2 relative z-10 text-black md:text-[82px] md:leading-[0.95] lg:[font-size:clamp(56px,9vw,var(--font-h2-size))] lg:[line-height:var(--font-h2-line)]">
                  <AnimatedMetricValue value={statsCard3.value ?? ""} />
                </div>
                <p className="type-p2 relative z-10 mt-10 max-w-[240px] text-[#666666]">
                  {statsCard3.label ?? ""}
                </p>
              </article>

              <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                  <div className="type-h5 text-black">
                    {!statsCard6.suffix || !/[0-9/]/.test(statsCard6.suffix) ? (
                      <AnimatedMetricValue value={statsCard6.value ?? ""} />
                    ) : (
                      <span>{statsCard6.value ?? ""}</span>
                    )}
                    <span className="text-[24px] leading-8 text-[#666666]">{statsCard6.suffix ?? ""}</span>
                  </div>
                  <p className="type-ui-sm max-w-[280px] text-black">
                    {statsCard6.summary ?? ""}
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
