import type { ReactNode } from "react"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import { SectionPill } from "@/components/homepage/ui"

type TestimonialItem = HomepageText["testimonials"][number]

type TestimonialCardProps = {
  testimonial: TestimonialItem
  tone: "light" | "dark"
  className?: string
  topRightBadge?: ReactNode
}

type HomepageTestimonialsSectionProps = {
  section: HomepageText["sections"]["testimonials"]
  testimonials: HomepageText["testimonials"]
}

function TestimonialCard({ testimonial, tone, className = "", topRightBadge }: TestimonialCardProps) {
  const isDark = tone === "dark"

  const articleClass = isDark
    ? "relative rounded-[10px] bg-[linear-gradient(180deg,#1F252B_0%,#14191F_100%)] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
    : "relative rounded-[10px] bg-[#F9FAFB] p-6 outline outline-1 outline-gray-200"

  const badgeClass = isDark
    ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm text-white"
    : "flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm text-[#2B2B2B]"

  const companyClass = isDark ? "type-p2 opacity-95" : "type-p2 text-[#222222]/80"
  const quoteTextClass = isDark ? "type-p3 text-white/90" : "type-p3 text-[#2B2B2B]"
  const quoteGlyphClass = isDark ? "text-[rgba(255,255,255,0.12)]" : "text-[rgba(34,34,34,0.08)]"
  const nameClass = isDark ? "type-p2 text-white" : "type-p2 text-[#222222]"
  const roleClass = isDark ? "type-p3 text-white/70" : "type-p3 text-[#5F6368]"
  const initialBadge = <div className={badgeClass}>{testimonial.name.slice(0, 1)}</div>
  const companyBadge = testimonial.badgeSrc ? (
    <div className={`${badgeClass} overflow-hidden`}>
      <img
        src={testimonial.badgeSrc}
        alt={`${testimonial.company ?? testimonial.name} badge`}
        className={`h-full w-full object-cover ${testimonial.badgeImageClassName ?? ""}`.trim()}
      />
    </div>
  ) : initialBadge
  const profileAvatar = testimonial.avatarSrc ? (
    <img src={testimonial.avatarSrc} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
  ) : initialBadge

  return (
    <article className={`${articleClass} ${className}`.trim()}>
      <div className="absolute right-6 top-6">
        {topRightBadge ? topRightBadge : companyBadge}
      </div>

      <div className={companyClass}>{testimonial.company ?? "Client Feedback"}</div>

      <div className="relative mt-6">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 -top-[0.2em] -translate-x-1/2 font-serif text-[92px] leading-none tracking-[-0.14em] md:text-[108px] ${quoteGlyphClass}`}
        >
          &ldquo;
        </div>
        <p className={`relative z-10 ${quoteTextClass}`}>{testimonial.quote}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {profileAvatar}
          <div>
            <div className={nameClass}>{testimonial.name}</div>
            <div className={roleClass}>{testimonial.role}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function HomepageTestimonialsSection({ section, testimonials }: HomepageTestimonialsSectionProps) {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <Container className="pb-14 pt-0 md:pb-16 md:pt-0 lg:pb-[72px] lg:pt-0">
        <div className="flex flex-col items-center gap-12">
          <div className="w-full">
            <div className="mx-auto flex w-full flex-col items-center gap-8">
              <SectionPill label={section.pill} />

              <MotionReveal preset="hero" className="flex flex-col items-center gap-3 text-center" delay={0.02}>
                <h3 className="type-h3 text-[#222222]">{section.title}</h3>
                <p className="type-p3 max-w-[900px] text-black/70">{section.description}</p>
              </MotionReveal>

              <div className="grid w-full gap-5 md:grid-cols-3">
                <div className="flex flex-col gap-5">
                  {testimonials[0] ? (
                    <MotionReveal preset="cardStrong" delay={0.06}>
                      <TestimonialCard
                        testimonial={testimonials[0]}
                        tone="dark"
                        className="flex min-h-[410px] flex-1 flex-col justify-between"
                        topRightBadge={
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-white/15">
                            <img src="/testimonials/tfa-logo.jpg" alt="TFA logo" className="h-full w-full object-cover" />
                          </div>
                        }
                      />
                    </MotionReveal>
                  ) : null}

                  {testimonials[4] ? (
                    <MotionReveal preset="cardStrong" delay={0.18}>
                      <TestimonialCard
                        testimonial={testimonials[4]}
                        tone="light"
                        topRightBadge={
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-[#2B2B2B]"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4.5 w-4.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M8 5.2 5 6.4 2.8 10l3.2 2.4L8 10v9.4c2.7.2 5.3.2 8 0V10l2 2.4 3.2-2.4L19 6.4l-3-1.2c-1 1.6-2.5 2.4-4 2.4s-3-.8-4-2.4Z" />
                            </svg>
                          </div>
                        }
                      />
                    </MotionReveal>
                  ) : null}
                </div>

                <div className="flex flex-col gap-5">
                  {[1, 3, 5].map((index, itemIndex) =>
                    testimonials[index] ? (
                      <MotionReveal key={testimonials[index].name} preset="cardStrong" delay={0.12 + itemIndex * 0.08}>
                        <TestimonialCard testimonial={testimonials[index]} tone="light" />
                      </MotionReveal>
                    ) : null,
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  {testimonials[2] ? (
                    <MotionReveal preset="cardStrong" delay={0.1}>
                      <TestimonialCard testimonial={testimonials[2]} tone="light" />
                    </MotionReveal>
                  ) : null}

                  {testimonials[6] ? (
                    <MotionReveal preset="cardStrong" delay={0.24}>
                      <TestimonialCard
                        testimonial={testimonials[6]}
                        tone="dark"
                        className="flex min-h-[410px] flex-1 flex-col justify-between"
                      />
                    </MotionReveal>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
