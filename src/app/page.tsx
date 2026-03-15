import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import InlineLink from '@/components/portfolio/ui/InlineLink';
import SectionEyebrow from '@/components/portfolio/ui/SectionEyebrow';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

const featuredWork = [
  {
    title: 'CPS Energy Smart Streetlights',
    href: '/case-studies/cps-energy-smart-streetlights',
    summary:
      'Built the product and operating model that turned public streetlight complaints into a predictable, trackable repair service across San Antonio.',
    meta: ['CPS Energy', 'Dalkia', 'August 2024 - April 2025'],
  },
  {
    title: 'DIRECTV Digital Revenue Platform',
    href: '/case-studies/directv-digital-revenue-platform',
    summary:
      'Turned fragmented sports and premium campaign execution into a coordinated omni-channel upsell engine across set-top box, web, and mobile.',
    meta: ['DIRECTV', 'Media / Digital Revenue'],
  },
  {
    title: 'Saving American Apparel With Digital',
    href: '/case-studies/saving-american-apparel-with-digital',
    summary:
      'Helped modernize a distressed retail business by replatforming global ecommerce and connecting stores into a unified omni-channel experience.',
    meta: ['American Apparel', 'Retail / Ecommerce'],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="home" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-end">
            <div className="flex flex-col gap-6">
              <SectionEyebrow label="Portfolio" />
              <h1 className="type-h3 max-w-[10ch] text-ink">Product and program leadership for complex digital systems.</h1>
              <p className="type-p2 max-w-[36rem] text-muted">
                I lead the work between business ambition, operational constraints, and shipped execution. The portfolio now
                centers on calm, premium case studies that show what changed and why it mattered.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" href="/case-studies/cps-energy-smart-streetlights">
                  Open CPS Energy
                </Button>
                <Button variant="secondary" href="/design-system">
                  View design system
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-[24px] border border-borderSubtle bg-surface p-6">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Current direction</p>
                <p className="mt-4 type-p2 max-w-[15ch] text-ink">Calm, premium, typography-led presentation.</p>
              </div>
              <div className="rounded-[24px] border border-borderSubtle bg-white p-6">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Core strength</p>
                <p className="mt-4 type-p3 text-ink">Turning high-friction delivery problems into structured, measurable operating systems.</p>
              </div>
              <div className="rounded-[24px] border border-borderSubtle bg-white p-6">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Proof style</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <TagChip label="Case studies" />
                  <TagChip label="Operational outcomes" />
                  <TagChip label="Recruiter-friendly" />
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Selected work"
              title="Three case studies with the strongest narrative signal right now."
              description="These are the cleanest starting points for the rebuild because they already have real content and a clear business story."
            />

            <div className="grid gap-4 xl:grid-cols-3">
              {featuredWork.map((item) => (
                <article key={item.title} className="flex h-full flex-col gap-6 rounded-[24px] border border-borderSubtle bg-white p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.meta.map((meta) => (
                      <TagChip key={meta} label={meta} />
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col gap-4">
                    <h2 className="type-h5 max-w-[14ch] text-ink">{item.title}</h2>
                    <p className="type-p4 text-muted">{item.summary}</p>
                  </div>
                  <InlineLink href={item.href}>View case study</InlineLink>
                </article>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <SectionHeader
              eyebrow="System"
              title="The portfolio runs on a smaller, cleaner foundation."
              description="The design-system route now works as a restrained reference, not as a giant experimental showroom."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-borderSubtle bg-surface p-6">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">What changed</p>
                <p className="mt-4 type-p3 text-ink">Inter-based typography, neutral-first surfaces, restrained chips, Lucide-only iconography, and minimal motion.</p>
              </div>
              <div className="rounded-[24px] border border-borderSubtle bg-white p-6">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Build approach</p>
                <p className="mt-4 type-p3 text-ink">We are working backward from real live pages and promoting proven patterns into the system only when they survive use.</p>
              </div>
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
