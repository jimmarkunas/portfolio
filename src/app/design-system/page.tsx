import {
  LayoutGrid,
  Link2,
  LucideIcon,
  Mail,
  Menu,
  MousePointerClick,
  Palette,
  Search,
  Sparkles,
} from 'lucide-react';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import IconCircleButton from '@/components/portfolio/ui/IconCircleButton';
import InlineLink from '@/components/portfolio/ui/InlineLink';
import SectionEyebrow from '@/components/portfolio/ui/SectionEyebrow';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

const typographyRows = [
  {
    label: 'H1',
    spec: '240 / 1.0 / -10%',
    sample: 'Typography does the heavy lifting.',
    className: 'type-h1',
  },
  {
    label: 'H2',
    spec: '120 / 1.05 / -4%',
    sample: 'Calm systems read as more premium.',
    className: 'type-h2',
  },
  {
    label: 'H3',
    spec: '48 / 1.2 / -2%',
    sample: 'Editorial section titles.',
    className: 'type-h3',
  },
  {
    label: 'H4',
    spec: '36 / 1.3 / -2%',
    sample: 'Structured modules and content transitions.',
    className: 'type-h4',
  },
  {
    label: 'H5',
    spec: '32 / 1.35 / -2%',
    sample: 'Card titles and supporting callouts.',
    className: 'type-h5',
  },
  {
    label: 'H6',
    spec: '28 / 1.4 / -2%',
    sample: 'Compact headers and utility moments.',
    className: 'type-h6',
  },
  {
    label: 'P1',
    spec: '24 / 1.4 / -1%',
    sample: 'Lead copy for opening statements and key section intros.',
    className: 'type-p1',
  },
  {
    label: 'P2',
    spec: '20 / 1.45 / -1%',
    sample: 'Supportive narrative copy that still feels elevated.',
    className: 'type-p2',
  },
  {
    label: 'P3',
    spec: '18 / 1.5 / 0',
    sample: 'Default body copy for long-form case study storytelling.',
    className: 'type-p3',
  },
  {
    label: 'P4',
    spec: '16 / 1.5 / 0',
    sample: 'Standard UI copy, controls, and metadata.',
    className: 'type-p4',
  },
  {
    label: 'P5',
    spec: '14 / 1.6 / 0',
    sample: 'Compact labels, chips, and quiet interface text.',
    className: 'type-p5',
  },
];

const colorRows = [
  { label: 'Ink', value: '#222222', className: 'bg-ink text-white' },
  { label: 'Secondary dark', value: '#4B5154', className: 'bg-charcoal text-white' },
  { label: 'Muted', value: '#7B7B7B', className: 'bg-muted text-white' },
  { label: 'Surface', value: '#F3F3F3', className: 'bg-surface text-ink' },
  { label: 'Border', value: '#E5E7EB', className: 'bg-white text-ink border border-borderSubtle' },
  { label: 'Accent', value: '#447ACB', className: 'bg-accent text-white' },
  { label: 'Accent hover', value: '#2F5EA4', className: 'bg-accentHover text-white' },
];

const iconRows: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Search', Icon: Search },
  { label: 'Mail', Icon: Mail },
  { label: 'Menu', Icon: Menu },
  { label: 'Link', Icon: Link2 },
  { label: 'Palette', Icon: Palette },
  { label: 'Action', Icon: MousePointerClick },
];

const spacingTokens = ['8', '12', '16', '20', '24', '28', '32', '40', '52', '80', '120'];

const radiusTokens = [
  { label: 'sm', value: '12px' },
  { label: 'pill', value: '50px' },
  { label: 'chip', value: '100px' },
  { label: 'circle', value: '9999px' },
];

function Surface({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-[24px] border border-borderSubtle bg-white ${className}`}>{children}</div>;
}

function SpecLabel({ children }: { children: React.ReactNode }) {
  return <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">{children}</p>;
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="design-system" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-10">
          <section className="rounded-[32px] border border-borderSubtle bg-white px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12">
            <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-12">
              <div className="flex flex-col gap-6">
                <SectionEyebrow label="Design System" />
                <h1 className="type-h3 max-w-[11ch] text-ink">
                  Finox-inspired foundations for the portfolio rebuild.
                </h1>
                <p className="type-p2 max-w-[36rem] text-muted">
                  This showroom is now intentionally stripped back. It exists to define the new neutral-first system before we
                  rebuild live portfolio pages from it.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary action</Button>
                  <Button variant="secondary">Secondary action</Button>
                  <Button variant="accent">Dark action</Button>
                </div>
              </div>

              <Surface className="flex flex-col justify-between gap-8 bg-surface p-6 md:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                    <SpecLabel>Direction</SpecLabel>
                    <p className="mt-4 type-p3 text-ink">Calm, premium, editorial, spacious, restrained.</p>
                  </div>
                  <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
                    <SpecLabel>Accent use</SpecLabel>
                    <p className="mt-4 type-p3 text-ink">Blue is for interaction, emphasis, and active states only.</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <TagChip label="Neutral-first UI" />
                  <TagChip label="Minimal motion" />
                  <TagChip label="Typography-led" variant="inverse" />
                </div>
                <div className="flex items-center justify-between border-t border-borderSubtle pt-6">
                  <InlineLink href="/finox-test">View component proving ground</InlineLink>
                  <IconCircleButton href="/finox-test" ariaLabel="Open the Finox test page" />
                </div>
              </Surface>
            </div>
          </section>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Typography"
              title="A tighter type system replaces the old experimental ladder."
              description="The new hierarchy is cleaner, lighter, and built around editorial contrast rather than decorative styling."
            />

            <div className="grid gap-4">
              {typographyRows.map((row) => (
                <Surface key={row.label} className="grid gap-5 p-6 md:grid-cols-[140px_180px_minmax(0,1fr)] md:items-start">
                  <div>
                    <SpecLabel>{row.label}</SpecLabel>
                  </div>
                  <p className="type-p5 text-muted">{row.spec}</p>
                  <div className={`${row.className} text-ink`}>{row.sample}</div>
                </Surface>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Color + Tokens"
              title="Neutrals carry the layout. Blue is kept deliberate."
              description="Surfaces stay light, dividers stay subtle, and accent is reserved for links, active controls, and small proof moments."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {colorRows.map((row) => (
                <Surface key={row.label} className="overflow-hidden">
                  <div className={`flex h-28 items-end p-5 ${row.className}`}>
                    <span className="type-p4 font-medium">{row.label}</span>
                  </div>
                  <div className="p-5">
                    <p className="type-p5 text-muted">{row.value}</p>
                  </div>
                </Surface>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <Surface className="p-6">
                <SpecLabel>Spacing scale</SpecLabel>
                <div className="mt-6 flex flex-wrap gap-3">
                  {spacingTokens.map((token) => (
                    <TagChip key={token} label={token} />
                  ))}
                </div>
              </Surface>
              <Surface className="p-6">
                <SpecLabel>Radius scale</SpecLabel>
                <div className="mt-6 flex flex-wrap gap-3">
                  {radiusTokens.map((token) => (
                    <TagChip key={token.label} label={`${token.label} · ${token.value}`} />
                  ))}
                </div>
              </Surface>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Controls"
              title="Buttons, links, and fields stay rounded, quiet, and intentional."
              description="There is no decorative chrome here. Controls should read clearly, feel premium, and reward interaction with subtle accent feedback."
            />

            <div className="grid gap-4 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
              <Surface className="flex flex-col gap-6 p-6 md:p-8">
                <SpecLabel>Buttons + links</SpecLabel>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary button</Button>
                  <Button variant="secondary">Secondary button</Button>
                  <Button variant="accent">Dark button</Button>
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  <InlineLink href="/">Inline link</InlineLink>
                  <IconCircleButton href="/" ariaLabel="Open homepage" />
                </div>
              </Surface>

              <Surface className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                <div className="grid gap-3">
                  <SpecLabel>Text field</SpecLabel>
                  <input
                    className="h-12 rounded-pill border border-borderSubtle bg-white px-5 type-p4 text-ink outline-none transition-colors duration-200 focus:border-accent"
                    defaultValue="San Antonio streetlight program"
                    readOnly
                  />
                </div>
                <div className="grid gap-3">
                  <SpecLabel>Search field</SpecLabel>
                  <div className="flex h-12 items-center gap-3 rounded-pill border border-borderSubtle bg-surface px-5">
                    <Search className="h-4 w-4 text-muted" />
                    <span className="type-p4 text-muted">Search components</span>
                  </div>
                </div>
              </Surface>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Headers + Chips"
              title="Reusable framing elements should feel editorial, not ornamental."
              description="Headers lead with hierarchy and spacing. Chips stay compact and utility-driven."
            />

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Surface className="p-6 md:p-8">
                <SectionHeader
                  eyebrow="Section Header"
                  title="Use this when a section needs a clear anchor and short supporting context."
                  description="This is the core heading pattern for the portfolio rebuild."
                />
              </Surface>

              <Surface className="flex flex-col gap-5 p-6 md:p-8">
                <SpecLabel>Chips</SpecLabel>
                <div className="flex flex-wrap gap-3">
                  <TagChip label="Case study" />
                  <TagChip label="Operations" />
                  <TagChip label="Public service" />
                  <TagChip label="Featured" variant="inverse" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <TagChip label="Recruiter-friendly" />
                  <TagChip label="Neutral-first" />
                </div>
              </Surface>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Case Study Section"
              title="The page system should come from live sections, not from speculative UI experiments."
              description="This wrapper is the structural baseline for future case-study pages. We use it to prove patterns before promoting them into the system."
            />

            <Surface className="overflow-hidden">
              <div className="grid gap-0 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <div className="border-b border-borderSubtle p-6 md:p-8 xl:border-b-0 xl:border-r">
                  <SectionEyebrow label="Section composition" />
                  <h3 className="mt-6 type-h4 max-w-[13ch] text-ink">One narrative anchor plus one supporting module.</h3>
                  <p className="mt-5 type-p3 max-w-[32rem] text-muted">
                    This is the pattern we should keep reusing on real pages: strong left-side narrative, structured right-side proof, and enough air for the typography to lead.
                  </p>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                  <Surface className="bg-surface p-5">
                    <SpecLabel>Proof module</SpecLabel>
                    <p className="mt-4 type-p3 text-ink">Use restrained surfaces, not loud cards, to support the story.</p>
                  </Surface>
                  <Surface className="bg-surface p-5">
                    <SpecLabel>Interaction</SpecLabel>
                    <p className="mt-4 type-p3 text-ink">Accent appears in links, hover borders, and a small number of active states.</p>
                  </Surface>
                </div>
              </div>
            </Surface>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10 border-b-0">
            <SectionHeader
              eyebrow="Motion + Iconography"
              title="Motion stays subtle. Lucide is the primary icon family going forward."
              description="No flashy reveals, no icon-mixing in the core system, and no gradients doing the hierarchy work."
            />

            <div className="grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <Surface className="p-6 md:p-8">
                <SpecLabel>Motion rules</SpecLabel>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-[20px] border border-borderSubtle bg-surface p-5">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <p className="type-p4 text-ink">Fade and translate only</p>
                    </div>
                  </div>
                  <div className="rounded-[20px] border border-borderSubtle bg-surface p-5">
                    <div className="flex items-center gap-3">
                      <LayoutGrid className="h-4 w-4 text-accent" />
                      <p className="type-p4 text-ink">Use motion to support hierarchy, not decorate it</p>
                    </div>
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 md:p-8">
                <SpecLabel>Lucide sample</SpecLabel>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {iconRows.map(({ label, Icon }) => (
                    <div key={label} className="rounded-[20px] border border-borderSubtle bg-surface p-5">
                      <Icon className="h-5 w-5 text-ink" />
                      <p className="mt-4 type-p5 text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
