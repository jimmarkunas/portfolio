import { Container } from "@/components/Container"
import {
  desktopHeroLogoAxisX,
  desktopHeroRailLabelX,
  desktopHeroRailLineX,
  desktopHeroYearLabelX,
} from "@/components/homepage/data"
import type { HomepageText } from "@/components/homepage/homepage"

type HomepageHeroSectionProps = {
  hero: HomepageText["hero"]
}

export function HomepageHeroSection({ hero }: HomepageHeroSectionProps) {
  const heroTextLeft = "clamp(98px, 12vw, 177px)"
  const heroStatPlusLeft = `calc(${heroTextLeft} + 7px)`
  const heroStatNumberLeft = `calc(${heroTextLeft} + 28px)`
  const heroStatLabelLeft = `calc(${heroTextLeft} + 26px)`
  const heroSecondStatPlusLeft = `calc(${heroTextLeft} + 183px)`
  const heroSecondStatNumberLeft = `calc(${heroTextLeft} + 204px)`
  const heroSecondStatLabelLeft = `calc(${heroTextLeft} + 204px)`

  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="bg-[#F3F3F3] px-0 md:px-0 lg:px-0">
        <div className="bg-[#F3F3F3] px-6 pb-10 pt-8 md:hidden">
          <div className="mx-auto max-w-[440px]">
            <div className="mt-10 text-center md:mt-12">
              <div className="type-display-hero text-[#222222]">{hero.title}</div>
              <div className="type-ui-lg mt-4 text-[#222222]">{hero.subtitle}</div>
            </div>

            <div className="mt-8 flex justify-center">
              <img
                src="/jim/hero-jim-01-cutout.png"
                alt=""
                aria-hidden="true"
                className="h-auto w-full max-w-[420px]"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-[#222222]">
              <div className="type-ui-sm">{hero.role}</div>
              <div className="h-px w-16 shrink-0 bg-[#222222]" />
              <div className="type-ui-sm">{hero.year}</div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-start justify-center gap-1 text-[#222222]">
                  <span className="type-stat-plus">+</span>
                  <span className="type-stat-number text-[#404040]">{hero.projectCompletedValue}</span>
                </div>
                <div className="type-ui-sm mt-2 text-center text-[#78716C]">
                  {hero.projectCompletedLabel}
                </div>
              </div>
              <div>
                <div className="flex items-start justify-center gap-1 text-[#222222]">
                  <span className="type-stat-plus">+</span>
                  <span className="type-stat-number text-[#404040]">{hero.startupRaisedValue}</span>
                </div>
                <div className="type-ui-sm mt-2 text-center text-[#78716C]">{hero.startupRaisedLabel}</div>
              </div>
            </div>

          </div>
        </div>

        <div className="relative hidden h-[938px] overflow-hidden bg-[#F3F3F3] md:block">
          <div className="absolute inset-x-0 top-0 h-full md:h-[calc(100%+80px)] md:-translate-y-20 lg:h-full lg:translate-y-0">
            <img
              src="/jim/hero-jim-01-cutout.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 right-[-140px] z-0 h-[760px] w-auto max-w-none md:right-[-300px] lg:right-[-140px] xl:right-[-36px]"
            />

            <div
              className="type-display-hero absolute z-10 text-[#222222]"
              style={{ left: heroTextLeft, top: "367px" }}
            >
              {hero.title}
            </div>

            <div
              className="type-ui-lg absolute z-10 text-[#222222]"
              style={{ left: heroTextLeft, top: "612px" }}
            >
              {hero.subtitle}
            </div>

            <div
              className="type-ui-md absolute bottom-8 z-10 text-[#222222] xl:hidden"
              style={{ left: heroTextLeft }}
            >
              {hero.scroll}
            </div>

            <div
              className="type-ui-md absolute z-10 hidden text-[#222222] xl:block"
              style={{ left: heroTextLeft, top: "860px" }}
            >
              {hero.scroll}
            </div>

            <div
              className="absolute z-10"
              style={{
                top: "168px",
                height: "701px",
                width: "120px",
                left: `${desktopHeroLogoAxisX}px`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative h-full w-full">
                <div
                  className="absolute left-0 top-0 origin-top-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroRailLabelX}px`,
                    top: "154px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {hero.role}
                </div>

                <div
                  className="absolute bg-[#222222]"
                  style={{
                    left: `${desktopHeroRailLineX}px`,
                    top: "189px",
                    width: "1px",
                    height: "386px",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="absolute left-0 bottom-0 origin-bottom-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroYearLabelX}px`,
                    bottom: "56px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {hero.year}
                </div>
              </div>
            </div>

            <div
              className="type-stat-plus absolute z-10 text-black"
              style={{ left: heroStatPlusLeft, top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: heroStatNumberLeft, top: "204px" }}
            >
              {hero.projectCompletedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: heroStatLabelLeft, top: "261px" }}
            >
              {hero.projectCompletedLabel}
            </div>

            <div
              className="type-stat-plus absolute z-10 text-black"
              style={{ left: heroSecondStatPlusLeft, top: "208px" }}
            >
              +
            </div>
            <div
              className="type-stat-number absolute z-10 text-[#404040]"
              style={{ left: heroSecondStatNumberLeft, top: "204px" }}
            >
              {hero.startupRaisedValue}
            </div>
            <div
              className="type-ui-sm absolute z-10 text-[#78716C]"
              style={{ left: heroSecondStatLabelLeft, top: "261px" }}
            >
              {hero.startupRaisedLabel}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

