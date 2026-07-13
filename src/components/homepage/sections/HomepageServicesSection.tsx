import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

type ServicesItem = HomepageText["services"][number]

type HomepageServicesSectionProps = {
  section: HomepageText["sections"]["services"]
  services: HomepageText["services"]
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
      <h3 className="type-h6 mt-8 text-center text-[#222222]">
        {item.title}
      </h3>
      <p className="type-p3 mt-3 max-w-[360px] text-center text-black/80">
        {item.description}
      </p>
    </article>
  )
}

export function HomepageServicesSection({
  section,
  services,
}: HomepageServicesSectionProps) {
  return (
    <HomepageSectionShell className="border border-red-500 bg-[#F3F3F3]">
      <div className="flex flex-col items-start gap-12">
        <MotionReveal preset="hero" className="w-full" delay={0.02}>
          <HomepageSectionHeader label={section.pill}>
            <div
              className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-10`}
            >
              <h2 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} text-[#222222]`}>{section.title}</h2>
              <p className="type-p3 max-w-[962px] whitespace-pre-line text-black/80">{section.description}</p>
            </div>
          </HomepageSectionHeader>
        </MotionReveal>

        <div className="grid w-full auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </HomepageSectionShell>
  )
}
