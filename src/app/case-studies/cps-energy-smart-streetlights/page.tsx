import CaseStudySection from '@/components/portfolio/CaseStudySection';
import Button from '@/components/portfolio/ui/Button';
import InlineLink from '@/components/portfolio/ui/InlineLink';
import SectionEyebrow from '@/components/portfolio/ui/SectionEyebrow';
import SectionHeader from '@/components/portfolio/ui/SectionHeader';
import SiteFooter from '@/components/portfolio/ui/SiteFooter';
import SiteHeader from '@/components/portfolio/ui/SiteHeader';
import TagChip from '@/components/portfolio/ui/TagChip';

const topMetrics = [
  { value: '73%', label: 'fewer support calls' },
  { value: '1-4 days', label: 'new repair window' },
  { value: '43%', label: 'fewer truck rolls' },
];

const blockers = [
  'There was no unified system of record across CPS Energy, Dalkia, and city stakeholders.',
  'Residents had no simple way to report an outage or track status without repeated calls.',
  'Support, dispatch, and field teams were working across disconnected tools, email chains, spreadsheets, and manual handoffs.',
  'Leadership could not quickly answer basic questions about backlog, neighborhood impact, or repair performance.',
];

const stakes = [
  'Public safety and resident trust',
  'City-level political and media pressure',
  'Repair speed and field efficiency',
  'Credibility for future solar LED and smart-city investment',
];

const ownershipAreas = [
  'Product strategy for the resident and operations experience',
  'Stakeholder alignment across CPS Energy, Dalkia, and city-facing interests',
  'User journeys and requirements across residents, support staff, operations teams, and field crews',
  'Delivery coordination for the reporting flow, dashboards, and field-management workflows',
  'Integration planning across CPS core systems, including SAP, and Dalkia field tools',
  'Success metrics tied to service visibility, repair speed, and operational efficiency',
];

const decisionCalls = [
  'Framed the work as an end-to-end service loop instead of a one-off outage form.',
  'Kept resident-facing reporting and internal operations views on the same source of truth.',
  'Structured the program so leadership could see safety, service, efficiency, and sustainability metrics in one place.',
  'Positioned the system as a foundation for future smart-city services, not just a streetlight repair fix.',
];

const shippedForResidents = [
  'A mobile-friendly reporting flow on cpsenergy.com',
  'A geolocated, interactive map of streetlights across San Antonio',
  'A guided form that helped residents report the right issue without needing to know pole ownership',
  'Status tracking from submitted to scheduled to fixed',
  'Repair-complete confirmation that closed the loop without another phone call',
];

const shippedForOperations = [
  'A shared operational view for CPS Energy and Dalkia',
  'Dashboards for outages, work orders, truck rolls, and program status',
  'Structured work-management queues with locations, SLAs, and crew assignment logic',
  'Citywide inventory visibility across legacy and solar LED streetlights',
  'Reporting layers for safety coverage, energy savings, emissions reduction, and neighborhood-level progress',
];

const deliveryApproach = [
  'Mapped the resident journey from outage discovery to repair confirmation.',
  'Defined the operational workflow from report intake to dispatch, field completion, and status return.',
  'Aligned utility, vendor, and city needs around a common backlog and shared success metrics.',
  'Connected the resident flow, support desktop, operational dashboards, and field tools through one integration path.',
];

const proofItems = [
  'Smart 20 Award',
  'NBC San Antonio coverage',
  'City Council agenda / program visibility',
  'DigiCity coverage',
  'San Antonio Report coverage',
  'TerraGo coverage',
  'MSN syndicated coverage',
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-4 border-t border-borderSubtle pt-5">
      <div className="text-[56px] leading-[0.95] tracking-[-0.08em] text-ink md:text-[84px] xl:text-[112px]">{value}</div>
      <p className="type-p4 max-w-[16rem] text-muted">{label}</p>
    </div>
  );
}

function BulletList({ items, subtle = false }: { items: string[]; subtle?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <span className={`mt-[0.65rem] h-1.5 w-1.5 rounded-full ${subtle ? 'bg-ink' : 'bg-accent'}`} />
          <p className="type-p3 text-ink">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function CpsEnergySmartStreetlightsPage() {
  return (
    <main className="min-h-screen bg-bgBase text-ink">
      <SiteHeader current="case-study" />

      <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10 md:py-14 xl:px-[52px] xl:py-16">
        <div className="flex flex-col gap-0">
          <CaseStudySection className="grid gap-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:items-end">
            <div className="flex flex-col gap-6">
              <SectionEyebrow label="CPS Energy" />
              <h1 className="type-h3 max-w-[11ch] text-ink">Smart streetlights and smart city operations.</h1>
              <p className="type-p1 max-w-[34rem] text-ink">
                Built the product and operating model that turned public streetlight complaints into a predictable, trackable
                repair service across San Antonio.
              </p>
              <p className="type-p3 max-w-[42rem] text-muted">
                I led product and program work for CPS Energy&apos;s smart streetlight initiative, helping CPS Energy, Dalkia, and city
                stakeholders move from fragmented outage handling to a unified reporting, repair, and operations model.
              </p>
              <div className="flex flex-wrap gap-3">
                <TagChip label="CPS Energy" />
                <TagChip label="Dalkia" />
                <TagChip label="August 2024 - April 2025" />
                <TagChip label="135,000+ streetlights" />
              </div>
            </div>

            <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
              <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Executive summary</p>
              <p className="mt-5 type-p2 max-w-[24rem] text-ink">
                The work connected resident reporting, dispatch visibility, field execution, and city-level metrics into one
                operating system for streetlight service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" href="#impact">
                  View results
                </Button>
                <Button variant="secondary" href="#proof">
                  Proof and recognition
                </Button>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="grid gap-6 md:grid-cols-3 md:gap-8">
            {topMetrics.map((metric) => (
              <Stat key={metric.value} value={metric.value} label={metric.label} />
            ))}
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Challenge"
              title="The visible problem was dark streets. The real problem was fragmented service operations."
              description="This project started as a public failure, not a normal product brief. Residents on San Antonio's Northeast Side were going to local TV because whole blocks were dark for weeks."
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
              <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">What was at stake</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {stakes.map((item) => (
                    <TagChip key={item} label={item} />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {blockers.map((item, index) => (
                  <article
                    key={item}
                    className={`rounded-[28px] border p-6 md:p-7 ${index === 2 ? 'bg-ink text-white' : 'bg-white'}`}
                  >
                    <div className={`h-px w-16 ${index === 2 ? 'bg-white/40' : 'bg-ink'}`} />
                    <p className={`mt-6 type-p2 ${index === 2 ? 'text-white' : 'text-ink'}`}>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Ownership"
              title="I owned the product and delivery spine that turned this from a noisy civic complaint into an executable service program."
              description="The exact role wording still needs final confirmation, but the ownership scope is clear and publish-safe as a draft."
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Ownership scope</p>
                <h2 className="mt-5 type-h5 max-w-[16ch] text-ink">Senior Product / Program Leadership</h2>
                <p className="mt-3 type-p5 text-accent">Draft role wording pending final confirmation</p>
                <div className="mt-8">
                  <BulletList items={ownershipAreas} />
                </div>
              </div>

              <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Important decisions I drove</p>
                <div className="mt-8">
                  <BulletList items={decisionCalls} />
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Solution"
              title="We built a connected service model that made streetlight repair feel like a modern utility service instead of a black hole."
              description="The system worked because it solved both sides of the problem at the same time. Residents got one front door and visible status. CPS Energy and Dalkia got one operating picture."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">What shipped for residents</p>
                <div className="mt-8">
                  <BulletList items={shippedForResidents} />
                </div>
              </div>
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">What shipped for operations</p>
                <div className="mt-8">
                  <BulletList items={shippedForOperations} />
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
              <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Why it worked</p>
                <p className="mt-5 type-p3 text-ink">
                  The resident-facing reporting flow sat on top of the same operational data used by support teams, dispatch,
                  and field crews. Status, completion, and service data flowed back through the same loop.
                </p>
              </div>
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Delivery approach</p>
                <div className="mt-8">
                  <BulletList items={deliveryApproach} />
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10" id="impact">
            <SectionHeader
              eyebrow="Impact"
              title="The work moved from public-service embarrassment to measurable service performance."
              description="Once the tools and integrations went live, the changes showed up fast in both operations and public perception."
            />

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <Stat value="73%" label="fewer support calls related to streetlight repair" />
              <Stat value="1-4 days" label="repair window after launch instead of roughly three-plus weeks" />
              <Stat value="43%" label="fewer truck rolls across repair operations" />
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Business and operating impact</p>
                <p className="mt-5 type-p3 text-ink">
                  This work turned a public-service embarrassment into a credible service program. Shared dashboards, structured
                  work queues, and cleaner integrations reduced waste, tightened repair performance, and gave leadership hard
                  data to justify further smart-city and solar LED investment.
                </p>
              </div>
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">What this case proves</p>
                <p className="mt-5 type-p3 text-ink">
                  I can turn public pain into product requirements, workflows, and measurable outcomes inside politically
                  sensitive institutions without pretending they operate like startups.
                </p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-10" id="proof">
            <SectionHeader
              eyebrow="Proof / Recognition"
              title="This case has stronger public proof than most because both the problem and the response played out in public."
              description="The draft currently references award recognition, local TV coverage, city-level visibility, and additional publish-safe proof assets."
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div className="rounded-[28px] border border-borderSubtle bg-white p-6 md:p-8">
                <BulletList items={proofItems} />
              </div>

              <div className="rounded-[28px] border border-borderSubtle bg-surface p-6 md:p-8">
                <p className="type-p5 font-medium uppercase tracking-[0.08em] text-muted">Final review items</p>
                <div className="mt-8">
                  <BulletList
                    items={[
                      'Exact role/title wording',
                      'Final services wording',
                      'Final collaborator/team naming',
                      'Final publish-safe proof links and media assets',
                    ]}
                    subtle
                  />
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection className="flex flex-col gap-8 border-b-0">
            <SectionHeader
              eyebrow="CTA"
              title="Need someone who can lead complex delivery without the chaos?"
              description="I help teams turn messy operational problems into clear product and program roadmaps, then lead the cross-functional work required to ship them."
            />

            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                href="https://calendar.app.google/VaoAhUQysc1QoxAV6"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </Button>
              <Button variant="secondary" href="/cv">
                Download CV
              </Button>
              <InlineLink href="/">Back to homepage</InlineLink>
            </div>
          </CaseStudySection>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
