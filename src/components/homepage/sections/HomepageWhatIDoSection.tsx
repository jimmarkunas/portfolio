import { Container } from "@/components/Container"
import { getExperienceCards } from "@/components/homepage/data"
import type { HomepageText } from "@/components/homepage/homepage"
import { ExperienceCard } from "@/components/homepage/ui"
import { MotionReveal } from "@/components/motion/MotionReveal"

type HomepageWhatIDoSectionProps = {
  section: HomepageText["sections"]["experiences"]
  cards: HomepageText["experienceCards"]
  motionStyle?: "default" | "homepage"
}

export function HomepageWhatIDoSection({
  section,
  cards,
  motionStyle = "default",
}: HomepageWhatIDoSectionProps) {
  const experienceCards = getExperienceCards(cards)
  const useHomepageMotion = motionStyle === "homepage"

  return (
    <section className="w-full bg-[#FFFFFF]">
      <Container className="py-14 md:py-16 lg:py-[60px]">
        <div className="flex flex-col items-center gap-12">
          <MotionReveal
            preset={useHomepageMotion ? "hero" : "section"}
            className="flex w-full flex-col items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="type-p2 text-[#222222]">{section.pill}</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="type-h3 max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]">
                {section.title}
              </h2>
              <p className="type-p3 max-w-[840px] text-[#7B7B7B]">
                {section.description}
              </p>
            </div>
          </MotionReveal>

          <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-[396px_repeat(3,minmax(0,1fr))] xl:items-stretch">
            {experienceCards.map((card, index) => (
              <MotionReveal key={card.title} preset={useHomepageMotion ? "cardStrong" : "card"} delay={index * 0.05}>
                <ExperienceCard {...card} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
