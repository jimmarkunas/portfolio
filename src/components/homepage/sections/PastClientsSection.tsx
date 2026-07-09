import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { siteCta } from "@/content/site"
import Link from "next/link"

type PastClientsSectionProps = {
  showHeading?: boolean
  motionStyle?: "default" | "homepage"
  showRescueCta?: boolean
  rescueCtaLead?: string
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
  rescueCtaLead = "",
}: PastClientsSectionProps) {
  const useHomepageMotion = motionStyle === "homepage"

  return (
    <section className="w-full bg-[#F3F3F3]">
      {showHeading ? (
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-10">
            <MotionReveal
              preset={useHomepageMotion ? "hero" : "section"}
              className="flex w-full max-w-[920px] flex-col items-center gap-3 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Past Clients</span>
              </div>
              <h2 className="type-h3 text-[#222222]">Trusted By Global Teams</h2>
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
        </Container>
      ) : (
        <Container className="px-0 md:px-0 lg:px-0">
          <div className="flex flex-col">
            {showRescueCta ? (
              <div className="pb-6 pt-0 md:pb-8 lg:pb-[32px]">
                <MotionReveal preset={useHomepageMotion ? "cardStrong" : "card"} className="w-full">
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F3F3F3]">
                    <div className="mx-auto grid w-full max-w-[1440px] gap-4 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-10 lg:px-10">
                      <div className="justify-self-start">
                        <div className="inline-flex items-center gap-2 rounded-[50px] bg-[#F3F3F3] px-3 py-0.5">
                          <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                          <span className="type-p2 text-[#222222]">Companies I&apos;ve helped</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-end gap-3 text-right md:flex-row md:items-center md:gap-2 md:justify-self-end">
                        <p className="type-p2 text-[#222222]">{rescueCtaLead} -</p>
                        <Link
                          href={siteCta.bookingUrls.homepageHero}
                          className="type-p2 inline-flex items-center rounded-full bg-[#2B2B2B] px-5 py-2 text-white transition-colors hover:bg-[#1F1F1F]"
                        >
                          {siteCta.bookCallLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>
            ) : null}

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
                        className={`h-auto w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                      />
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          </div>
        </Container>
      )}
    </section>
  )
}
