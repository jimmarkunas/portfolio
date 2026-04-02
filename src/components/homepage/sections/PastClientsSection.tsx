import { Container } from "@/components/Container"

type PastClientsSectionProps = {
  showHeading?: boolean
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

export function PastClientsSection({ showHeading = false }: PastClientsSectionProps) {
  return (
    <section className="w-full bg-[#F3F3F3]">
      {showHeading ? (
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-10">
            <div className="flex w-full max-w-[920px] flex-col items-center gap-3 text-center">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Past Clients</span>
              </div>
              <h2 className="type-h3 text-[#222222]">Trusted By Global Teams</h2>
            </div>

            <div className="w-full overflow-hidden rounded-[10px] bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {clientLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={48}
                      className={`h-auto w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container className="px-0 md:px-0 lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={48}
                  className={`h-auto w-full max-w-[130px] md:max-w-[150px] lg:max-w-[170px] ${logo.scaleClass}`}
                />
              </div>
            ))}
          </div>
        </Container>
      )}
    </section>
  )
}

