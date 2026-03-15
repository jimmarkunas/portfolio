import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartColumnBig,
  CheckCheck,
  CircleHelp,
  FolderKanban,
  LayoutGrid,
  Mail,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-react';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

const iconGroups = [
  {
    label: 'Navigation',
    icons: [
      { name: 'Search', Icon: Search },
      { name: 'Arrow Right', Icon: ArrowRight },
      { name: 'Layout Grid', Icon: LayoutGrid },
      { name: 'Calendar', Icon: CalendarDays },
    ],
  },
  {
    label: 'Portfolio',
    icons: [
      { name: 'Briefcase', Icon: BriefcaseBusiness },
      { name: 'Folder', Icon: FolderKanban },
      { name: 'Chart', Icon: ChartColumnBig },
      { name: 'Map', Icon: MapPinned },
    ],
  },
  {
    label: 'Utility',
    icons: [
      { name: 'Mail', Icon: Mail },
      { name: 'User', Icon: UserRound },
      { name: 'Check', Icon: CheckCheck },
      { name: 'Help', Icon: CircleHelp },
    ],
  },
  {
    label: 'Signal',
    icons: [
      { name: 'Sparkles', Icon: Sparkles },
      { name: 'Shield', Icon: ShieldCheck },
    ],
  },
];

function IconCard({
  name,
  Icon,
}: {
  name: string;
  Icon: typeof Search;
}) {
  return (
    <div className="rounded-[20px] border border-borderSubtle bg-white p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-circle border border-borderSubtle bg-surface text-ink">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 type-p4 text-ink">{name}</p>
    </div>
  );
}

export default function DesignSystemIconsPage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="design-system" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="grid gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] xl:items-end">
            <SectionHeader
              eyebrow="Iconography"
              title="Lucide is the only active icon family in the rebuild."
              description="The old mixed icon browser is gone. We are standardizing on one clean outline family so navigation, utility, and case-study interfaces feel coherent."
            />

            <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
              <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Rules</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TagChip label="Lucide only" />
                <TagChip label="Neutral-first" />
                <TagChip label="No mixed families" />
                <TagChip label="Outline-forward" />
              </div>
            </div>
          </CaseStudySection>

          {iconGroups.map((group) => (
            <CaseStudySection key={group.label} className="flex flex-col gap-8">
              <SectionHeader
                eyebrow={group.label}
                title={`${group.label} icons stay restrained and structurally consistent.`}
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {group.icons.map(({ name, Icon }) => (
                  <IconCard key={name} name={name} Icon={Icon} />
                ))}
              </div>
            </CaseStudySection>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
