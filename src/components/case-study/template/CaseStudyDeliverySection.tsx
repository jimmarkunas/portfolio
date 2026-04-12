import type { CaseStudyData } from "@/content/case-studies/types"
import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { SectionShell } from "@/components/SectionShell"
import { Timeline } from "@/components/Timeline"

export function CaseStudyDeliverySection({ data }: { data: CaseStudyData }) {
  return (
    <SectionShell containerClassName="pt-6 pb-16 md:pt-0 md:pb-8 lg:pb-24 lg:pt-0">
      <div className="px-0 pb-6 pt-0 md:pb-8 lg:pb-10">
        <MotionReveal preset="section" className="flex flex-col items-center gap-5 text-center">
          <EyebrowPill labelClassName="type-p4">
            {data.delivery.eyebrow}
          </EyebrowPill>
          <h2 className="type-h3 text-[#222222]">{data.delivery.title}</h2>
          <h3 className="type-h5 max-w-[760px] text-[#111111]">{data.delivery.introTitle}</h3>
          <p className="type-p2 max-w-[760px] text-[#222222]">{data.delivery.introCopy}</p>
        </MotionReveal>

        <MotionReveal preset="card" delay={0.05} className="mt-6 flex flex-col gap-4 lg:mt-14">
          <Timeline items={data.delivery.phases} />
        </MotionReveal>
      </div>
    </SectionShell>
  )
}
