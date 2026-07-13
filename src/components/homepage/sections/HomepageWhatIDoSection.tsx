import { Container } from "@/components/Container"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { siteCta } from "@/content/site"
import Link from "next/link"

type HomepageWhatIDoSectionProps = {
  section: HomepageText["sections"]["whatIDo"]
  engagements: HomepageText["experienceEngagements"]
  motionStyle?: "default" | "homepage"
  showEngagements?: boolean
}

function getResultBoxes(results: string): Array<{ metric: string; label: string }> {
  const normalized = results.trim().replace(/\.$/, "")
  const parts = normalized
    .split(/,\s+and\s+|\s+and\s+|,\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2)

  return parts.map((part) => {
    const [metric, ...rest] = part.split(/\s+/)
    return {
      metric: metric ?? "",
      label: rest.join(" ") || part,
    }
  })
}

export function HomepageWhatIDoSection({
  section,
  engagements,
  motionStyle = "default",
  showEngagements = true,
}: HomepageWhatIDoSectionProps) {
  const useHomepageMotion = motionStyle === "homepage"

  return (
    <HomepageSectionShell className="bg-[#FFFFFF]">
      <div className="flex flex-col items-center gap-12">
        <MotionReveal preset={useHomepageMotion ? "hero" : "section"} className="w-full">
          <HomepageSectionHeader label={section.pill} align="center">
            <div className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-center text-center`}>
              <h2
                className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]`}
              >
                {section.title}
              </h2>
              <p className="type-p2 max-w-[840px] text-black/70">{section.description}</p>
            </div>
          </HomepageSectionHeader>
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

        {showEngagements ? (
          <div className="grid w-full gap-4 md:grid-cols-2">
            {engagements.map((engagement, index) => (
              <MotionReveal
                key={`${engagement.company}-${index}`}
                preset={useHomepageMotion ? "cardStrong" : "card"}
                delay={index * 0.04}
              >
                <Link href={engagement.href} className="group block h-full">
                  <article className="h-full rounded-[10px] border border-[#E7E7E7] bg-[#F3F3F3] p-5 transition-all duration-200 group-hover:border-[#4B7FD1] group-hover:shadow-[0_0_0_1px_rgba(75,127,209,0.35),0_0_24px_rgba(75,127,209,0.28)] md:p-6">
                    <div className="flex flex-col gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-col items-start gap-2">
                          <img
                            src={engagement.logoSrc}
                            alt={`${engagement.company} logo`}
                            width="220"
                            height="36"
                            loading="lazy"
                            decoding="async"
                            className="h-9 w-auto max-w-[220px] object-contain object-left"
                          />
                          <span className="sr-only">{engagement.company}</span>
                        </div>
                        <div className="mt-3 grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="type-h6 text-[#222222]">Situation</h4>
                            <p className="type-p2 mt-2 text-black/70">{engagement.situation}</p>
                          </div>
                          <div>
                            <h4 className="type-h6 text-[#222222]">What I Did</h4>
                            <p className="type-p2 mt-2 text-black/70">{engagement.whatIDid}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <h4 className="type-h6 text-[#222222]">Results</h4>
                        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                          {getResultBoxes(engagement.results).map((result, boxIndex) => (
                            <div
                              key={`${engagement.company}-result-${boxIndex}`}
                              className="flex h-[132px] flex-col items-center justify-center rounded-[10px] border border-[#EAEAEA] bg-white px-4 py-5 text-center"
                            >
                              <div className="text-[44px] leading-none tracking-[-0.03em] text-[#232A44]">
                                {result.metric}
                              </div>
                              <div className="type-p2 mt-2 text-black/70">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </MotionReveal>
            ))}
          </div>
        ) : null}
      </div>
    </HomepageSectionShell>
  )
}
