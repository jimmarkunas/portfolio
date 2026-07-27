import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  AwardRow,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

type HomepageAwardsSectionProps = {
  section: HomepageText["sections"]["awards"]
  awards: HomepageText["awards"]
}

export function HomepageAwardsSection({ section, awards }: HomepageAwardsSectionProps) {
  return (
    <HomepageSectionShell
      className="bg-[#F3F3F3]"
      paddingClassName="pt-10 pb-0 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0"
    >
      <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-12">
          <MotionReveal preset="hero" className="w-full" delay={0.02}>
            <HomepageSectionHeader label={section.pill}>
              <div className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start`}>
                <h2 className="type-h2 max-w-none lg:max-w-[396px] text-[#222222]">
                  {section.title}
                </h2>
                <p className="type-p2 max-w-none lg:max-w-[482px] text-black/70">{section.description}</p>
              </div>
            </HomepageSectionHeader>
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
    </HomepageSectionShell>
  )
}
