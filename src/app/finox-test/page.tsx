import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import IconCircleButton from '@/components/portfolio/ui/IconCircleButton';
import InlineLink from '@/components/portfolio/ui/InlineLink';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

export default function FinoxTestPage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="design-system" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Finox Test"
              title="A compact proving ground for the active component set."
              description="This route stays intentionally small. It helps verify spacing, typography, controls, and links before they are used on live portfolio pages."
            />
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-6">
            <h2 className="type-h6 text-ink">Buttons</h2>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary button</Button>
              <Button variant="secondary">Secondary button</Button>
              <Button variant="accent">Accent button</Button>
              <Button variant="inline">Inline button</Button>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-6">
            <h2 className="type-h6 text-ink">Chips</h2>

            <div className="flex flex-wrap items-center gap-3">
              <TagChip label="Shopify" />
              <TagChip label="Adobe Commerce" />
              <TagChip label="ERP Integration" />
              <TagChip label="Featured" variant="inverse" />
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-6">
            <h2 className="type-h6 text-ink">Links and CTA</h2>

            <div className="flex flex-wrap items-center gap-8">
              <InlineLink href="/">View homepage</InlineLink>
              <IconCircleButton href="/" ariaLabel="Go to homepage" />
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-6 border-b-0">
            <h2 className="type-h6 text-ink">Typography</h2>

            <div className="flex flex-col gap-4">
              <p className="type-h3 text-ink">Heading level 3</p>
              <p className="type-h5 text-ink">Heading level 5</p>
              <p className="type-p2 text-muted">Paragraph P2 for supporting copy in section intros and lead text.</p>
              <p className="type-p3 text-muted">Paragraph P3 for standard body copy and metadata.</p>
              <p className="type-p4 text-muted">Paragraph P4 for smaller UI text like chips and supporting labels.</p>
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
