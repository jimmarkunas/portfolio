import { ArrowUpRight, Sparkles } from "lucide-react"

const colors = [
  { name: "Ink", value: "#222222", style: { backgroundColor: "var(--color-ink)" } },
  {
    name: "Secondary dark",
    value: "#4B5154",
    style: { backgroundColor: "var(--color-secondary-dark)" },
  },
  { name: "Muted", value: "#7B7B7B", style: { backgroundColor: "var(--color-muted)" } },
  { name: "White", value: "#FFFFFF", style: { backgroundColor: "var(--color-white)" } },
  { name: "Soft white", value: "#FEFEFE", style: { backgroundColor: "var(--color-soft-white)" } },
  { name: "Light gray", value: "#F3F3F3", style: { backgroundColor: "#F3F3F3" } },
  { name: "Border", value: "#E5E7EB", style: { backgroundColor: "var(--color-border)" } },
  { name: "Accent", value: "#447ACB", style: { backgroundColor: "var(--color-accent)" } },
]

const typeSamples = [
  { label: "H1", className: "type-h1", sample: "Heading 01" },
  { label: "H2", className: "type-h2", sample: "Heading 02" },
  { label: "H3", className: "type-h3", sample: "Heading 03" },
  { label: "H4", className: "type-h4", sample: "Heading 04" },
  { label: "H5", className: "type-h5", sample: "Heading 05" },
  { label: "H6", className: "type-h6", sample: "Heading 06" },
  { label: "P1", className: "type-p1", sample: "Paragraph one for premium editorial lead-ins." },
  { label: "P2", className: "type-p2", sample: "Paragraph two for section intros and support copy." },
  { label: "P3", className: "type-p3", sample: "Paragraph three for lighter body copy." },
  { label: "P4", className: "type-p4", sample: "Paragraph four for navigation and standard UI." },
  { label: "P5", className: "type-p5", sample: "Paragraph five for compact metadata and labels." },
]

const breakpointColumns = [
  { label: "Base", width: 0 },
  { label: "SM", width: 640 },
  { label: "MD", width: 768 },
  { label: "LG", width: 1024 },
  { label: "XL", width: 1280 },
  { label: "2XL", width: 1536 },
]

const breakpoints = [
  { label: "Base", prefix: "default", minWidth: "0px", usage: "Phones and any size before a breakpoint kicks in." },
  { label: "SM", prefix: "sm:", minWidth: "640px", usage: "Larger phones and small tablets." },
  { label: "MD", prefix: "md:", minWidth: "768px", usage: "Tablet layout changes." },
  { label: "LG", prefix: "lg:", minWidth: "1024px", usage: "Desktop layout changes." },
  { label: "XL", prefix: "xl:", minWidth: "1280px", usage: "Large desktop spacing and grids." },
  { label: "2XL", prefix: "2xl:", minWidth: "1536px", usage: "Very wide desktop screens." },
]

const coreTypographySpecs = [
  { label: "H1", className: ".type-h1", values: [32, 32, 32, 41, 48, 48], line: "1", track: "-0.06em", weight: "300" },
  { label: "H2", className: ".type-h2", values: [32, 32, 32, 41, 48, 48], line: "1.05", track: "-0.04em", weight: "400" },
  { label: "H3", className: ".type-h3", values: [32, 32, 32, 41, 48, 48], line: "1.2", track: "-0.02em", weight: "400" },
  {
    label: "H1 case study",
    className: ".type-h1-case-study",
    values: [32, 32, 32, 41, 48, 48],
    line: "1.2",
    track: "-0.02em",
    weight: "400",
  },
  { label: "H4", className: ".type-h4", values: [28, 28, 28, 32.8, 36, 36], line: "1.3", track: "-0.02em", weight: "400" },
  { label: "H5", className: ".type-h5", values: [24, 24, 24, 26.6, 32, 32], line: "1.35", track: "-0.02em", weight: "400" },
  { label: "H6", className: ".type-h6", values: [20, 20, 20, 22.5, 28, 28], line: "1.4", track: "-0.02em", weight: "400" },
  { label: "P1", className: ".type-p1", values: [20, 20, 20, 20.5, 24, 24], line: "1.4", track: "-0.01em", weight: "400" },
  { label: "P2", className: ".type-p2", values: [18, 18, 18, 18.4, 20, 20], line: "1.45", track: "-0.01em", weight: "400" },
  { label: "P3", className: ".type-p3", values: [16, 16, 16, 16, 18, 18], line: "1.5", track: "0", weight: "400" },
  { label: "P4", className: ".type-p4", values: [15, 15, 15, 15, 16, 16], line: "1.5", track: "0", weight: "400" },
  { label: "P5", className: ".type-p5", values: [13, 13, 13, 13, 14, 14], line: "1.6", track: "0", weight: "400" },
]

const utilityTypographySpecs = [
  { label: "Hero display", className: ".type-display-hero", values: [96, 115.2, 138.2, 184.3, 230.4, 240], line: "1.02", track: "-0.06em", weight: "300" },
  { label: "Stat plus", className: ".type-stat-plus", values: [22, 22, 22, 24.6, 30, 30], line: "1", track: "0", weight: "400" },
  { label: "Stat number", className: ".type-stat-number", values: [32, 32, 32, 38.9, 48, 48], line: "1.1", track: "-0.03em", weight: "400" },
  { label: "Rail label", className: ".type-rail-label", values: [15, 15, 15, 15, 17.3, 18], line: "1.1", track: "0", weight: "400" },
  { label: "UI large", className: ".type-ui-lg", values: [16, 16, 16, 16, 18.6, 20], line: "1.45", track: "0", weight: "400" },
  { label: "UI medium", className: ".type-ui-md", values: [15, 15, 15, 15, 15.4, 18], line: "1.4", track: "0", weight: "400" },
  { label: "UI small", className: ".type-ui-sm", values: [14, 14, 14, 14, 14, 15.4], line: "1.3", track: "0", weight: "400" },
  { label: "Footer brand", className: ".type-footer-brand", values: [22, 22, 22, 22.5, 28, 28], line: "1", track: "-0.03em", weight: "400" },
]

function formatPx(value: number) {
  return `${Number(value.toFixed(1)).toString()}px`
}

function TypographyBreakdownTable({
  title,
  note,
  specs,
}: {
  title: string
  note: string
  specs: Array<{
    label: string
    className: string
    values: number[]
    line: string
    track: string
    weight: string
  }>
}) {
  return (
    <div className="rounded-[12px] border border-black/8 bg-white">
      <div className="border-b border-black/8 px-5 py-4">
        <div className="type-p4">{title}</div>
        <div className="type-p5 mt-1 text-[#7B7B7B]">{note}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1160px] w-full border-collapse">
          <thead>
            <tr className="border-b border-black/8">
              <th className="type-p5 px-5 py-4 text-left text-[#7B7B7B]">Style</th>
              <th className="type-p5 px-5 py-4 text-left text-[#7B7B7B]">Rule</th>
              {breakpointColumns.map((breakpoint) => (
                <th key={breakpoint.label} className="type-p5 px-4 py-4 text-left text-[#7B7B7B]">
                  {breakpoint.label}
                </th>
              ))}
              <th className="type-p5 px-4 py-4 text-left text-[#7B7B7B]">Line</th>
              <th className="type-p5 px-4 py-4 text-left text-[#7B7B7B]">Track</th>
              <th className="type-p5 px-4 py-4 text-left text-[#7B7B7B]">Weight</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.className} className="border-b border-black/8 last:border-b-0">
                <td className="px-5 py-4 align-top">
                  <div className="type-p4">{spec.label}</div>
                  <div className="type-p5 mt-1 text-[#7B7B7B]">{spec.className}</div>
                </td>
                <td className="type-p5 px-5 py-4 align-top text-[#7B7B7B]">Breakpoint tokens</td>
                {spec.values.map((value, index) => (
                  <td key={breakpointColumns[index].label} className="type-p4 px-4 py-4 align-top">
                    {formatPx(value)}
                  </td>
                ))}
                <td className="type-p4 px-4 py-4 align-top">{spec.line}</td>
                <td className="type-p4 px-4 py-4 align-top">{spec.track}</td>
                <td className="type-p4 px-4 py-4 align-top">{spec.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-[#222222]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-10 md:py-14">
        <section className="border-b border-black/10 pb-12">
          <div className="eyebrow-pill">
            <span className="eyebrow-pill__dot" />
            <span className="type-p5">Style Guide</span>
          </div>
          <div className="mt-6 max-w-[840px]">
            <h1 className="type-h3">Finox design system</h1>
            <p className="type-p3 mt-4 max-w-[640px] text-[#7B7B7B]">
              A lightweight graphical display of the active tokens, typography,
              and core interface primitives used in this repo.
            </p>
          </div>
        </section>

        <section className="border-b border-black/10 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="type-h5">Colors</h2>
              <p className="type-p4 mt-2 text-[#7B7B7B]">
                Neutral-first with blue used only for interaction and emphasis.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {colors.map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-[12px] border border-black/8 bg-white"
              >
                <div className="h-32 w-full" style={color.style} />
                <div className="px-4 py-4">
                  <div className="type-p4">{color.name}</div>
                  <div className="type-p5 mt-1 text-[#7B7B7B]">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 py-12">
          <h2 className="type-h5">Typography</h2>
          <div className="mt-8 space-y-8">
            {typeSamples.map((item) => (
              <div key={item.label} className="border-b border-black/8 pb-6 last:border-b-0">
                <div className="type-p5 mb-4 text-[#7B7B7B]">{item.label}</div>
                <div className={item.className}>{item.sample}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 py-12">
          <div>
            <h2 className="type-h5">Responsive typography breakdown</h2>
            <p className="type-p4 mt-2 max-w-[760px] text-[#7B7B7B]">
              Exact live typography behavior across the active app breakpoints. Sizes below show
              the computed value at each breakpoint using the current breakpoint token values in
              the codebase.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <TypographyBreakdownTable
              title="Core type scale"
              note="Shared heading and paragraph utilities used across the design system."
              specs={coreTypographySpecs}
            />
            <TypographyBreakdownTable
              title="Homepage and UI helpers"
              note="Breakpoint-token utility classes currently used for the homepage hero, stats, rail, CTAs, and footer."
              specs={utilityTypographySpecs}
            />
          </div>
        </section>

        <section className="border-b border-black/10 py-12">
          <div>
            <h2 className="type-h5">Breakpoints</h2>
            <p className="type-p4 mt-2 text-[#7B7B7B]">
              Active responsive screens in this repo. These follow the current Tailwind defaults.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-[12px] border border-black/8 bg-white">
            <div className="grid grid-cols-[0.9fr_0.9fr_0.9fr_2fr] border-b border-black/8 px-5 py-4">
              <div className="type-p5 text-[#7B7B7B]">Label</div>
              <div className="type-p5 text-[#7B7B7B]">Prefix</div>
              <div className="type-p5 text-[#7B7B7B]">Min width</div>
              <div className="type-p5 text-[#7B7B7B]">Usage</div>
            </div>
            {breakpoints.map((breakpoint) => (
              <div
                key={breakpoint.label}
                className="grid grid-cols-[0.9fr_0.9fr_0.9fr_2fr] border-b border-black/8 px-5 py-4 last:border-b-0"
              >
                <div className="type-p4">{breakpoint.label}</div>
                <div className="type-p4">{breakpoint.prefix}</div>
                <div className="type-p4">{breakpoint.minWidth}</div>
                <div className="type-p4 text-[#7B7B7B]">{breakpoint.usage}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 py-12">
          <h2 className="type-h5">Components</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Buttons</div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button className="button-primary">See More</button>
                <button className="button-secondary">See More</button>
                <a href="#" className="inline-text-cta type-p3">
                  Book A Call
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>
            </div>

            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Compact labels</div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="eyebrow-pill">
                  <span className="eyebrow-pill__dot" />
                  <span className="type-p5">Experiences</span>
                </div>
                <span className="tag-chip type-p4">UI/UX</span>
                <span className="tag-chip type-p4">Branding</span>
                <span className="tag-chip tag-chip--dark type-p4">Selected</span>
              </div>
            </div>

            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Icon action</div>
              <div className="mt-5">
                <button className="icon-circle-button" aria-label="Open detail">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Section intro</div>
              <div className="mt-5">
                <div className="eyebrow-pill">
                  <span className="eyebrow-pill__dot" />
                  <span className="type-p5">Style Guide</span>
                </div>
                <h3 className="type-h3 mt-6">Keep the system calm and premium.</h3>
                <p className="type-p3 mt-4 max-w-[620px] text-[#7B7B7B]">
                  Use typography to lead, keep surfaces quiet, and reserve blue
                  for actions or moments of precision emphasis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="type-h5">Spacing and radius</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Spacing scale</div>
              <div className="mt-5 flex flex-wrap gap-3">
                {["8", "12", "16", "20", "24", "28", "32", "40", "52", "80", "120"].map(
                  (space) => (
                    <div
                      key={space}
                      className="inline-flex min-w-[58px] justify-center rounded-[100px] bg-transparent px-4 py-2"
                    >
                      <span className="type-p5">{space}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-[12px] border border-black/8 bg-white p-6">
              <div className="type-p5 text-[#7B7B7B]">Radius tokens</div>
              <div className="mt-5 flex flex-wrap items-end gap-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-16 w-16 rounded-[12px] bg-[#222222]" />
                  <span className="type-p5">12</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-28 rounded-[50px] bg-[#222222]" />
                  <span className="type-p5">50</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-28 rounded-[100px] bg-[#222222]" />
                  <span className="type-p5">100</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-[#222222]" />
                  <span className="type-p5">Circle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 pt-8">
          <div className="inline-flex items-center gap-2 text-[#7B7B7B]">
            <Sparkles className="h-4 w-4" strokeWidth={1.75} />
            <span className="type-p5">Lightweight live system reference</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
