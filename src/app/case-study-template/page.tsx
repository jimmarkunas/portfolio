import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import SectionEyebrow from '@/components/portfolio/ui/SectionEyebrow';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

const routes = [
  {
    title: 'CPS Energy Smart Streetlights',
    href: '/case-studies/cps-energy-smart-streetlights',
    tags: ['Canonical rebuild', 'Custom page'],
  },
  {
    title: 'DIRECTV Digital Revenue Platform',
    href: '/case-studies/directv-digital-revenue-platform',
    tags: ['Content-driven', 'Generic renderer'],
  },
  {
    title: 'Saving American Apparel With Digital',
    href: '/case-studies/saving-american-apparel-with-digital',
    tags: ['Content-driven', 'Generic renderer'],
  },
];

export default function CaseStudyTemplatePage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="case-study" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-end">
            <div className="flex flex-col gap-6">
              <SectionEyebrow label="Template Route" />
              <h1 className="type-h3 max-w-[12ch] text-ink">This route is being retired as the rebuild replaces the old template stack.</h1>
              <p className="type-p2 max-w-[34rem] text-muted">
                We are no longer using one generic visual template to force every case study into the same old system. The new
                build keeps one canonical custom page and a smaller content-driven renderer for draft-ready studies.
              </p>
            </div>

            <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
              <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Current active paths</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TagChip label="Homepage" />
                <TagChip label="Design system" />
                <TagChip label="CPS Energy" />
                <TagChip label="DIRECTV" />
                <TagChip label="American Apparel" />
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10 border-b-0">
            <SectionHeader
              eyebrow="Routes"
              title="Use the rebuilt pages instead of the legacy template path."
              description="These routes are now the clean active surface for the portfolio rebuild."
            />

            <div className="grid gap-4 xl:grid-cols-3">
              {routes.map((route) => (
                <article key={route.href} className="flex flex-col gap-5 rounded-[24px] border border-borderSubtle bg-white p-6">
                  <div className="flex flex-wrap gap-2">
                    {route.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </div>
                  <h2 className="type-h6 text-ink">{route.title}</h2>
                  <Button variant="secondary" href={route.href}>
                    Open route
                  </Button>
                </article>
              ))}
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
