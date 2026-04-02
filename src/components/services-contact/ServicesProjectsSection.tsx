import { Container } from "@/components/Container"
import type { ServiceProjectLogoEntry } from "@/content/services-contact"
import Link from "next/link"

type ServicesProjectsSectionProps = {
  eyebrow: string
  title: string
  logos: ServiceProjectLogoEntry[]
}

export function ServicesProjectsSection({
  eyebrow,
  title,
  logos,
}: ServicesProjectsSectionProps) {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[60px] lg:pt-0">
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full max-w-[920px] flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
              <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
              <span className="type-p2 text-[#222222]">{eyebrow}</span>
            </div>
            <h2 className="type-h3 text-[#222222]">{title}</h2>
          </div>

          <div className="w-full overflow-hidden rounded-[10px] bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14"
                >
                  <Link
                    href={logo.caseStudyHref}
                    aria-label={`${logo.alt} case study`}
                    className="inline-flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={48}
                      className={`h-auto ${
                        logo.size === "half"
                          ? "w-auto max-w-none h-[56px] md:h-[64px] lg:h-[72px]"
                          : "w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px]"
                      } ${logo.scaleClass ?? "scale-100"}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
