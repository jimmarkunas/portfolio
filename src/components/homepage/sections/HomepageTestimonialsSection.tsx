import type { ReactNode } from "react"
import { Shirt } from "lucide-react"

import { MotionReveal } from "@/components/motion/MotionReveal"
import type { HomepageText } from "@/components/homepage/homepage"
import {
  HOMEPAGE_SECTION_HEADER_TITLE_CLASS,
  HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS,
  HomepageSectionHeader,
  HomepageSectionShell,
} from "@/components/homepage/ui"

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

type TestimonialRenderItem = {
  testimonial: TestimonialItem
  delay: number
  tone: "light" | "dark"
  topRightBadge?: ReactNode
}

function TestimonialCard({ testimonial, tone, className = "", topRightBadge }: TestimonialCardProps) {
  const isDark = tone === "dark"

  const articleClass = isDark
    ? "relative rounded-[10px] bg-[#222222] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
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

function renderTestimonialCard({ testimonial, delay, tone, topRightBadge }: TestimonialRenderItem) {
  const cardClassName = "md:flex md:h-[320px] md:flex-col md:justify-between md:overflow-hidden"

  return (
    <MotionReveal key={`${testimonial.company}-${testimonial.name}`} preset="cardStrong" delay={delay}>
      <TestimonialCard testimonial={testimonial} tone={tone} className={cardClassName} topRightBadge={topRightBadge} />
    </MotionReveal>
  )
}

export function HomepageTestimonialsSection({ section, testimonials }: HomepageTestimonialsSectionProps) {
  const leftColumnTestimonials = [
    {
      testimonial: testimonials[0],
      delay: 0.06,
      tone: "dark" as const,
      topRightBadge: (
        <div className="h-10 w-10 overflow-hidden rounded-full bg-white/15">
          <img src="/testimonials/tfa-logo.jpg" alt="TFA logo" className="h-full w-full object-cover" />
        </div>
      ),
    },
    {
      testimonial: testimonials[6],
      delay: 0.18,
      tone: "dark" as const,
    },
  ].filter((item): item is TestimonialRenderItem => Boolean(item.testimonial))

  const middleColumnTestimonials = [
    { testimonial: testimonials[1], delay: 0.1, tone: "light" as const },
    {
      testimonial: testimonials[5],
      delay: 0.18,
      tone: "light" as const,
      topRightBadge: (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-[#2B2B2B]"
          aria-hidden="true"
        >
          <Shirt className="h-5 w-5" strokeWidth={1.8} />
        </div>
      ),
    },
  ].filter((item): item is TestimonialRenderItem => Boolean(item.testimonial))

  const rightColumnTestimonials = [
    { testimonial: testimonials[2], delay: 0.12, tone: "light" as const },
    { testimonial: testimonials[3], delay: 0.2, tone: "light" as const },
  ].filter((item): item is TestimonialRenderItem => Boolean(item.testimonial))

  return (
    <HomepageSectionShell className="bg-[#F3F3F3]">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="w-full">
          <div className="mx-auto flex w-full flex-col items-center gap-6 md:gap-8">
            <MotionReveal preset="hero" className="w-full" delay={0.02}>
              <HomepageSectionHeader label={section.pill}>
                <div className={`${HOMEPAGE_SECTION_HEADER_TITLE_GROUP_CLASS} items-start`}>
                  <h3 className={`${HOMEPAGE_SECTION_HEADER_TITLE_CLASS} text-[#222222]`}>
                    {section.title}
                  </h3>
                  <p className="type-p3 max-w-[900px] text-black/70">{section.description}</p>
                </div>
              </HomepageSectionHeader>
            </MotionReveal>

            <div className="grid w-full gap-5 md:grid-cols-3">
              <div className="flex flex-col gap-5">
                {leftColumnTestimonials.map(renderTestimonialCard)}
              </div>

              <div className="flex flex-col gap-5">
                {middleColumnTestimonials.map(renderTestimonialCard)}
              </div>

              <div className="flex flex-col gap-5">
                {rightColumnTestimonials.map(renderTestimonialCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomepageSectionShell>
  )
}
