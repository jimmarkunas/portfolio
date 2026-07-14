import { MotionReveal } from "@/components/motion/MotionReveal"
import { ContentFlow } from "@/components/ContentFlow"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

type ServicesItem = HomepageText["services"][number]

type HomepageServicesSectionProps = {
  section: Pick<HomepageText["sections"]["experience"], "pill" | "title" | "description">
  services: HomepageText["services"]
}

function ServiceCard({ item, index }: { item: ServicesItem; index: number }) {
  return (
    <article className="relative flex h-full min-h-[188px] flex-col justify-between overflow-hidden rounded-[14px] bg-[#222222] p-5 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] md:min-h-[220px] md:p-6 xl:min-h-[240px]">
      <div
        className="service-card-ambient pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(68,122,203,0.2),transparent_44%)]"
        style={{ animationDelay: `${index * 0.85}s` }}
      />

      <div className="relative flex h-full flex-col justify-between gap-6 md:gap-8">
        <div className="flex w-full flex-col gap-3 md:gap-4">
          <div
            className="service-card-accent h-[2px] w-6 rounded-full bg-[#447ACB]"
            style={{ animationDelay: `${index * 0.85 + 0.2}s` }}
          />
          <p className="type-h5 w-full max-w-none text-white leading-[1.18]">
            {item.outcome}
          </p>
        </div>

        <p className="type-p5 w-full uppercase tracking-[0.16em] text-white/50">
          {item.category}
        </p>
      </div>
    </article>
  )
}

export function HomepageServicesSection({
  section,
  services,
}: HomepageServicesSectionProps) {
  return (
    <HomepageSectionShell className="bg-[#F3F3F3]">
      <div className="flex flex-col items-start gap-12">
        <MotionReveal preset="hero" className="w-full" delay={0.02}>
          <HomepageSectionHeader label={section.pill}>
            <div
              className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-10`}
            >
              <h2 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} text-[#222222]`}>{section.title}</h2>
              <div className="max-w-[962px]">
                <ContentFlow spacing="body">
                  {section.description.map((paragraph) => (
                    <p key={paragraph} className="type-p3 text-black/80">
                      {paragraph}
                    </p>
                  ))}
                </ContentFlow>
              </div>
            </div>
          </HomepageSectionHeader>
        </MotionReveal>

        <div className="grid w-full auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <MotionReveal
              key={`${item.category}-${index}`}
              preset="cardStrong"
              className="h-full"
              delay={0.06 + index * 0.04}
            >
              <ServiceCard item={item} index={index} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </HomepageSectionShell>
  )
}
