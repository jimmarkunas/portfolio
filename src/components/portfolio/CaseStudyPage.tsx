import { getCaseStudyBySlug } from '@/lib/case-study-content';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import InlineLink from '@/components/portfolio/ui/InlineLink';
import SectionEyebrow from '@/components/portfolio/ui/SectionEyebrow';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-4 border-t border-borderSubtle pt-5">
      <div className="text-[48px] leading-[0.95] tracking-[-0.08em] text-ink md:text-[72px] xl:text-[96px]">{value}</div>
      <p className="type-p4 max-w-[16rem] text-muted">{label}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <span className="mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="type-p3 text-ink">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const { frontmatter, sections } = getCaseStudyBySlug(slug);

  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="case-study" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-end">
            <div className="flex flex-col gap-6">
              <SectionEyebrow label={frontmatter.company} />
              <h1 className="type-h3 max-w-[12ch] text-ink">{frontmatter.title}</h1>
              <p className="type-p1 max-w-[34rem] text-ink">{frontmatter.summary}</p>
              <div className="flex flex-wrap gap-3">
                <TagChip label={frontmatter.company} />
                <TagChip label={frontmatter.role} />
                <TagChip label={frontmatter.industry} />
                <TagChip label={frontmatter.status} />
              </div>
            </div>

            <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
              <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">At a glance</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                  <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Company</p>
                  <p className="mt-3 type-p3 text-ink">{frontmatter.company}</p>
                </div>
                <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                  <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Role</p>
                  <p className="mt-3 type-p3 text-ink">{frontmatter.role}</p>
                </div>
                <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                  <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Industry</p>
                  <p className="mt-3 type-p3 text-ink">{frontmatter.industry}</p>
                </div>
                <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                  <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Status</p>
                  <p className="mt-3 type-p3 text-ink">{frontmatter.status}</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

          {frontmatter.metrics.length > 0 ? (
            <CaseStudySection className="grid gap-6 md:grid-cols-3 md:gap-8">
              {frontmatter.metrics.map((metric) => (
                <MetricCard key={`${metric.value}-${metric.label}`} value={metric.value} label={metric.label} />
              ))}
            </CaseStudySection>
          ) : null}

          {sections.map((section, index) => (
            <CaseStudySection key={`${section.heading}-${index}`} className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <SectionHeader eyebrow={`Section ${String(index + 1).padStart(2, '0')}`} title={section.heading} />

              <div className="flex flex-col gap-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="type-p3 text-ink">
                    {paragraph}
                  </p>
                ))}
                {section.bullets.length > 0 ? <BulletList items={section.bullets} /> : null}
              </div>
            </CaseStudySection>
          ))}

          <CaseStudySection className="flex flex-col gap-8 border-b-0">
            <SectionHeader
              eyebrow="Next"
              title="Need the full portfolio system behind the page?"
              description="The new rebuild stays small on purpose. We are proving patterns through live case studies before promoting them into the system."
            />
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/design-system">
                Open design system
              </Button>
              <Button variant="secondary" href="/">
                Back to homepage
              </Button>
              <InlineLink href="/case-studies/cps-energy-smart-streetlights">View CPS Energy</InlineLink>
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
