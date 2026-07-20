"use client"

import { Container } from "@/components/Container"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { GlobalLocationsMap } from "@/components/case-study/GlobalLocationsMap"
import { americanapparelStoreLocations } from "@/content/case-studies/aa"

export function CaseStudyRevampAaMapSection() {
  return (
    <section className="bg-[#F3F3F3]">
      <Container className="pb-14 md:pb-16 lg:pb-20">
        <div className="flex flex-col gap-6">
          <MotionReveal preset="image" className="w-full overflow-hidden">
            <GlobalLocationsMap title="American Apparel · Global Retail Footprint" locations={americanapparelStoreLocations} />
          </MotionReveal>
          <MotionReveal preset="cardStrong" className="w-full bg-white p-6 md:p-8">
            <div className="rounded-[24px] border border-black/8 bg-[#F8F8F8] p-6">
              <div className="type-p5 uppercase tracking-[0.16em] text-[#7B7B7B]">WHAT THE BUSINESS GAINED</div>
              <p className="type-p3 mt-3 text-black/65">American Apparel operated 268 retail stores across 16 countries. The commerce, inventory, and order-routing platform connected those locations to the BOPIS system we implemented, allowing stores and digital channels to operate from the same inventory truth.</p>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  )
}
