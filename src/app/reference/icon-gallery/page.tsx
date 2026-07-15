import type { Metadata } from "next"

import { Container } from "@/components/Container"
import { buildPageMetadata } from "@/lib/seo"
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  ExternalLinkMiniIcon,
  StarIcon,
} from "@/components/icons/ui-icons"
import {
  BreadcrumbHomeIcon,
  HeroSwooshBackdrop,
  ProofPointArrowIcon,
} from "@/components/case-study/template/CaseStudyTemplateIcons"

export const metadata: Metadata = buildPageMetadata({
  title: "Icon Gallery",
  description: "Visual reference for all approved glyph exports used in the app.",
  canonicalPath: "/reference/icon-gallery/",
  useDefaultImage: false,
})

export default function IconGalleryPage() {
  const icons = [
    { name: "ArrowUpRightIcon", source: "ui-icons.tsx", icon: <ArrowUpRightIcon size={28} className="text-[#222222]" /> },
    { name: "ExternalLinkMiniIcon", source: "ui-icons.tsx", icon: <ExternalLinkMiniIcon className="text-[#222222]" /> },
    { name: "ChevronDownIcon", source: "ui-icons.tsx", icon: <ChevronDownIcon size={28} className="text-[#222222]" /> },
    { name: "StarIcon", source: "ui-icons.tsx", icon: <StarIcon size={28} className="text-[#222222]" /> },
    { name: "BreadcrumbHomeIcon", source: "CaseStudyTemplateIcons.tsx", icon: <BreadcrumbHomeIcon className="text-[#222222]" /> },
    { name: "ProofPointArrowIcon", source: "CaseStudyTemplateIcons.tsx", icon: <ProofPointArrowIcon className="text-[#222222]" /> },
    { name: "HeroSwooshBackdrop", source: "CaseStudyTemplateIcons.tsx", icon: <HeroSwooshBackdrop /> },
  ]

  return (
    <main className="min-h-screen bg-[#F3F3F3] py-16 md:py-20">
      <Container className="space-y-10">
        <section className="space-y-3">
          <h1 className="type-h3 text-[#222222]">Icon Gallery</h1>
          <p className="type-p3 max-w-3xl text-black/65">
            Every currently approved export from the shared icon files, shown in one lightweight visual grid.
          </p>
        </section>

        <section className="rounded-[20px] border border-black/8 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {icons.map((item) => (
              <article key={item.name} className="rounded-[18px] border border-black/8 bg-[#F8F8F8] p-5">
                <div className="flex min-h-[120px] items-center justify-center rounded-[16px] bg-white">
                  {item.icon}
                </div>
                <div className="mt-4 space-y-1">
                  <div className="type-p4 text-[#222222]">{item.name}</div>
                  <div className="type-p5 text-black/45">{item.source}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}
