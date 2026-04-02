import { ContactForm } from "@/components/ContactForm"
import { Container } from "@/components/Container"
import { getHomepageText } from "@/components/homepage/homepage"
import { HomepageHeroSection } from "@/components/homepage/sections/HomepageHeroSection"
import { PastClientsSection } from "@/components/homepage/sections/PastClientsSection"
import { HomepageWhatIDoSection } from "@/components/homepage/sections/HomepageWhatIDoSection"
import { CareerStatsSection } from "@/components/services-contact/CareerStatsSection"
import { ServicesProjectsSection } from "@/components/services-contact/ServicesProjectsSection"
import { ScrollToSectionOnMount } from "@/components/services-contact/ScrollToSectionOnMount"
import { servicesContactContent } from "@/content/services-contact"

type ServicesContactPageProps = {
  entryPoint?: "services" | "contact"
}

export function ServicesContactPage({ entryPoint = "services" }: ServicesContactPageProps) {
  const { contact, careerStats, projectShowcase } = servicesContactContent
  const { hero, sections, experienceCards } = getHomepageText()
  const scrollToContact = entryPoint === "contact"
  const socialLinks = [
    { href: "https://linkedin.com/in/jimmarkunas", label: "LinkedIn", icon: "/sm-icons/linkedin.png" },
    { href: "https://x.com/jimmarkunas", label: "X", icon: "/sm-icons/twitter.png" },
  ]

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      {scrollToContact ? <ScrollToSectionOnMount targetId="contact" /> : null}

      <section id="services" className="scroll-mt-28">
        <HomepageHeroSection hero={hero} />
        <HomepageWhatIDoSection section={sections.experiences} cards={experienceCards} />
        <PastClientsSection showHeading />
        <CareerStatsSection
          eyebrow={careerStats.eyebrow}
          title={careerStats.title}
          intro={careerStats.intro}
          stats={careerStats.stats}
        />
        <ServicesProjectsSection
          eyebrow={projectShowcase.eyebrow}
          title={projectShowcase.title}
          logos={projectShowcase.logos}
        />
      </section>

      <section id="contact" className="scroll-mt-28 border-t border-black/10 py-14 md:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full flex-col gap-9 lg:w-[454px] lg:shrink-0">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-white px-3 py-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="6" cy="6" r="6" fill="#2B2B2B" />
                  </svg>
                  <span className="text-xl text-[#1F1F1F]">{contact.eyebrow}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-5xl leading-[56px] text-[#1F1F1F]">{contact.title}</h2>
                  <p className="text-lg leading-7 text-[#1F1F1F]/80">{contact.intro}</p>
                  <div className="pt-2">
                    <h3 className="text-2xl leading-8 text-zinc-600">Follow Me</h3>
                    <div className="mt-2 flex items-center gap-1">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.label}
                          className="inline-flex h-12 w-12 items-center justify-center text-[#1F1F1F] transition-colors hover:text-[#447ACB]"
                        >
                          <span
                            aria-hidden="true"
                            className="block h-5 w-5 bg-current"
                            style={{
                              maskImage: `url('${link.icon}')`,
                              WebkitMaskImage: `url('${link.icon}')`,
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                              maskPosition: "center",
                              WebkitMaskPosition: "center",
                              maskSize: "contain",
                              WebkitMaskSize: "contain",
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="w-full lg:max-w-[766px]">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
