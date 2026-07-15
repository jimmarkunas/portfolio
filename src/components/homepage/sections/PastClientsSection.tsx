import { MotionReveal } from "@/components/motion/MotionReveal"
import {
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

type PastClientsSectionProps = {
  showHeading?: boolean
  motionStyle?: "default" | "homepage"
  showRescueCta?: boolean
}

const clientLogos = [
  {
    src: "/company-logos/svg/disney-logo.svg",
    alt: "Disney",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
  { src: "/company-logos/svg/hbo-logo.svg", alt: "HBO", scaleClass: "scale-100" },
  { src: "/company-logos/svg/directv-logo.svg", alt: "DirecTV", scaleClass: "scale-100" },
  {
    src: "/company-logos/svg/shopify-logo.svg",
    alt: "Shopify",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
  {
    src: "/company-logos/svg/bcg-logo.svg",
    alt: "BCG",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
  {
    src: "/company-logos/svg/publicis-sapient-logo.svg",
    alt: "Publicis Sapient",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
  {
    src: "/company-logos/svg/bc-logo.svg",
    alt: "Boston Consulting",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
  {
    src: "/company-logos/svg/aa-logo.svg",
    alt: "American Airlines",
    scaleClass: "scale-110 md:scale-115 lg:scale-125",
  },
] as const

export function PastClientsSection({
  showHeading = false,
  motionStyle = "default",
  showRescueCta = false,
}: PastClientsSectionProps) {
  const useHomepageMotion = motionStyle === "homepage"
  const usePullQuoteStyle = !showHeading && showRescueCta

  return (
    <HomepageSectionShell className={usePullQuoteStyle ? "bg-[#222222]" : "bg-[#F3F3F3]"}>
      {showHeading ? (
        <div className="flex flex-col items-center gap-10">
          <MotionReveal preset={useHomepageMotion ? "hero" : "section"} className="w-full max-w-[920px]">
            <HomepageSectionHeader label="Past Clients" align="center">
              <h2 className="type-h2 text-[#222222]">Trusted By Global Teams</h2>
            </HomepageSectionHeader>
          </MotionReveal>

          <MotionReveal
            preset={useHomepageMotion ? "flow" : "section"}
            className="w-full overflow-hidden rounded-[10px] bg-white"
            delay={0.08}
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {clientLogos.map((logo, index) => (
                <MotionReveal key={logo.alt} preset={useHomepageMotion ? "cardStrong" : "card"} delay={index * 0.03}>
                  <div className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={48}
                      className={`h-auto w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                    />
                  </div>
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>
        </div>
      ) : (
        <div className="flex flex-col">
          {usePullQuoteStyle ? (
            <MotionReveal preset="section" className="w-full">
              <div className="flex w-full flex-col gap-4 md:gap-6">
                <HomepageSectionHeader label="Clients">
                  <h2 className="type-h2 text-white">Enterprises I&apos;ve Helped</h2>
                </HomepageSectionHeader>

                <MotionReveal preset="section" className="w-full">
                  <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-6 md:px-10 md:py-8 lg:px-10 lg:py-10">
                    <div className="pointer-events-none absolute left-2 top-4 h-16 w-16 rounded-tl-[18px] border-l border-t border-white/10 md:left-6 md:top-6 md:h-20 md:w-20" />
                    <div className="pointer-events-none absolute right-2 top-4 h-16 w-16 rounded-tr-[18px] border-r border-t border-white/10 md:right-6 md:top-6 md:h-20 md:w-20" />
                    <div className="pointer-events-none absolute bottom-4 left-2 h-16 w-16 rounded-bl-[18px] border-b border-l border-white/10 md:bottom-6 md:left-6 md:h-20 md:w-20" />
                    <div className="pointer-events-none absolute bottom-4 right-2 h-16 w-16 rounded-br-[18px] border-b border-r border-white/10 md:bottom-6 md:right-6 md:h-20 md:w-20" />

                    <div className="grid grid-cols-2 md:grid-cols-4">
                      {clientLogos.map((logo, index) => (
                        <MotionReveal
                          key={logo.alt}
                          preset={useHomepageMotion ? "cardStrong" : "card"}
                          delay={index * 0.02}
                        >
                          <div className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              width={180}
                              height={48}
                              className={`h-auto w-full max-w-[130px] opacity-90 [filter:brightness(0)_invert(1)] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                            />
                          </div>
                        </MotionReveal>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              </div>
            </MotionReveal>
          ) : (
            <MotionReveal preset={useHomepageMotion ? "flow" : "section"}>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {clientLogos.map((logo, index) => (
                  <MotionReveal key={logo.alt} preset={useHomepageMotion ? "cardStrong" : "card"} delay={index * 0.02}>
                    <div className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={180}
                        height={48}
                        className={`h-auto w-full max-w-[130px] opacity-90 [filter:brightness(0)_invert(1)] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                      />
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          )}
        </div>
      )}
    </HomepageSectionShell>
  )
}
