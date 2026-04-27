import { Container } from "@/components/Container"
import type { HomepageText } from "@/components/homepage/homepage"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { siteCta } from "@/content/site"
import Image from "next/image"
import Link from "next/link"

type HomepageWhatIDoSectionProps = {
  section: HomepageText["sections"]["experiences"]
  engagements: HomepageText["experienceEngagements"]
  motionStyle?: "default" | "homepage"
}

export function HomepageWhatIDoSection({
  section,
  engagements,
  motionStyle = "default",
}: HomepageWhatIDoSectionProps) {
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

          <MotionReveal preset={useHomepageMotion ? "cardStrong" : "card"} className="w-full">
            <div className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-[#E6E6E6] bg-white px-6 py-8 text-center md:flex-row md:gap-2">
              <p className="type-p2 text-[#222222]">{section.ctaLead} -</p>
              <Link
                href={siteCta.bookingUrls.homepageHero}
                className="type-p2 inline-flex items-center rounded-full bg-[#2B2B2B] px-5 py-2 text-white transition-colors hover:bg-[#1F1F1F]"
              >
                {siteCta.bookCallLabel}
              </Link>
            </div>
          </MotionReveal>

          <div className="grid w-full gap-4 md:grid-cols-2">
            {engagements.map((engagement, index) => (
              <MotionReveal
                key={`${engagement.company}-${index}`}
                preset={useHomepageMotion ? "cardStrong" : "card"}
                delay={index * 0.04}
              >
                <Link href={engagement.href} className="group block h-full">
                  <article className="h-full rounded-[10px] border border-[#E7E7E7] bg-[#FBFBFB] p-6 transition-all duration-200 group-hover:border-[#4B7FD1] group-hover:shadow-[0_0_0_1px_rgba(75,127,209,0.35),0_0_24px_rgba(75,127,209,0.28)] md:p-7">
                    <div className="flex items-center">
                      <Image
                        src={engagement.logoSrc}
                        alt={`${engagement.company} logo`}
                        width={220}
                        height={36}
                        className="h-9 w-auto max-w-[220px] object-contain object-left"
                      />
                      <span className="sr-only">{engagement.company}</span>
                    </div>

                    <div className="mt-5 space-y-3 border-l border-[#DFDFDF] pl-4">
                      <p className="type-p3 text-[#4A4A4A]">
                        <span className="font-semibold text-[#222222]">Situation:</span> {engagement.situation}
                      </p>
                      <p className="type-p3 text-[#4A4A4A]">
                        <span className="font-semibold text-[#222222]">What I did:</span> {engagement.whatIDid}
                      </p>
                      <p className="type-p3 text-[#222222]">
                        <span className="font-semibold text-[#222222]">Results:</span> {engagement.results}
                      </p>
                    </div>
                  </article>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
