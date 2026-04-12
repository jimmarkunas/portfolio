import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import { AwardRow } from "@/components/homepage/ui"

type HomepageAwardsSectionProps = {
  section: HomepageText["sections"]["awards"]
  awards: HomepageText["awards"]
}

export function HomepageAwardsSection({ section, awards }: HomepageAwardsSectionProps) {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
        <div className="flex flex-col gap-20">
          <div className="grid gap-10 lg:grid-cols-[482px_minmax(0,769px)] lg:justify-between lg:gap-12">
            <MotionReveal preset="hero" className="flex flex-col items-start gap-3" delay={0.02}>
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">{section.pill}</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <h2 className="type-h3 max-w-[396px] text-[#222222]">{section.title}</h2>
                <p className="type-p2 max-w-[482px] text-black/70">{section.description}</p>
              </div>
            </MotionReveal>

            <div className="flex flex-col gap-6">
              {awards.map((item, index) => (
                <MotionReveal
                  key={`${item.rank}-${item.year}-${item.title}`}
                  preset="cardStrong"
                  delay={0.08 + index * 0.05}
                >
                  <AwardRow {...item} />
                </MotionReveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
