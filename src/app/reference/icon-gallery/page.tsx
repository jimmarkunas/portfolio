import type { ReactNode } from "react"
import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  ArrowRightCircle,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  Download,
  FileBarChart,
  FileText,
  Globe,
  HelpCircle,
  Layers,
  LayoutGrid,
  Lightbulb,
  Linkedin,
  Mail,
  Maximize,
  Menu,
  Minimize,
  MousePointerClick,
  RefreshCcw,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Target,
  User,
  UserCheck,
  Users,
  X,
  XCircle,
  Zap,
} from "lucide-react"

import { Container } from "@/components/Container"
import { buildPageMetadata } from "@/lib/seo"
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  ExternalLinkMiniIcon,
  StarIcon,
} from "@/components/icons/ui-icons"
import {
  CodeIcon,
  GanttIcon,
  NetworkIcon,
  ShapeEightIcon,
  ShapeFourIcon,
  ShapeSevenIcon,
  ShapeThreeIcon,
  StatsIcon,
} from "@/components/homepage/icons"
import {
  BreadcrumbHomeIcon,
  HeroSwooshBackdrop,
  ProofPointArrowIcon,
} from "@/components/case-study/template/CaseStudyTemplateIcons"
import { DiagramGlyph } from "@/components/case-study/DiagramGlyph"
import {
  CampaignIcon,
  ContentIcon,
  DatabaseIcon,
  InventoryIcon,
  LaptopIcon,
  ProductsIcon,
} from "@/components/case-study/bi-commerce-icons"
import { UserExperienceIcon } from "@/components/case-study/diagram-shared/SCJDiagramPrimitives"

export const metadata: Metadata = buildPageMetadata({
  title: "Icon Gallery",
  description: "Dedicated visual inventory for shared icons, glyphs, and Lucide imports.",
  canonicalPath: "/reference/icon-gallery/",
  useDefaultImage: false,
})

type PreviewCardProps = {
  title: string
  source: string
  note?: string
  children: ReactNode
}

function PreviewCard({ title, source, note, children }: PreviewCardProps) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-black/8 bg-white shadow-[0_1px_2px_rgba(34,34,34,0.02)]">
      <div className="flex min-h-[128px] items-center justify-center bg-[#F8F8F8] px-4 py-6">
        {children}
      </div>
      <div className="space-y-1 px-4 py-4">
        <div className="type-p4 text-[#222222]">{title}</div>
        <div className="type-p5 text-[#7B7B7B]">{source}</div>
        {note ? <div className="type-p5 text-[#9A9A9A]">{note}</div> : null}
      </div>
    </article>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-[999px] border border-black/8 bg-white px-3 py-1">
        <span className="h-2 w-2 rounded-full bg-[#447ACB]" />
        <span className="type-p5 text-[#222222]">{eyebrow}</span>
      </div>
      <h2 className="type-h5 text-[#222222]">{title}</h2>
      <p className="type-p4 max-w-3xl text-[#7B7B7B]">{description}</p>
    </div>
  )
}

function DiagramGlyphPreview({
  type,
  label,
}: {
  type: "database" | "monitor" | "devices" | "api-arrows"
  label: string
}) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-[18px] border border-black/8 bg-white">
      <svg viewBox="0 0 24 24" width="24" height="24" className="overflow-visible">
        <DiagramGlyph type={type} x={2} y={2} col="#222222" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  )
}

function LucidePreview({ Icon }: { Icon: LucideIcon }) {
  return <Icon className="h-7 w-7 text-[#222222]" strokeWidth={1.75} />
}

const sharedUiIcons = [
  {
    title: "ArrowUpRightIcon",
    source: "src/components/icons/ui-icons.tsx · export ArrowUpRightIcon",
    note: "Outbound CTA arrow",
    icon: <ArrowUpRightIcon size={28} className="text-[#222222]" />,
  },
  {
    title: "ExternalLinkMiniIcon",
    source: "src/components/icons/ui-icons.tsx · export ExternalLinkMiniIcon",
    note: "Tiny outbound-link glyph",
    icon: <ExternalLinkMiniIcon className="text-[#222222]" />,
  },
  {
    title: "ChevronDownIcon",
    source: "src/components/icons/ui-icons.tsx · export ChevronDownIcon",
    note: "Compact disclosure chevron",
    icon: <ChevronDownIcon size={28} className="text-[#222222]" />,
  },
  {
    title: "StarIcon",
    source: "src/components/icons/ui-icons.tsx · export StarIcon",
    note: "Filled star accent",
    icon: <StarIcon size={28} className="text-[#222222]" />,
  },
]

const caseStudyTemplateIcons = [
  {
    title: "BreadcrumbHomeIcon",
    source: "src/components/case-study/template/CaseStudyTemplateIcons.tsx · export BreadcrumbHomeIcon",
    note: "Breadcrumb home marker",
    icon: <BreadcrumbHomeIcon className="text-[#222222]" />,
  },
  {
    title: "ProofPointArrowIcon",
    source: "src/components/case-study/template/CaseStudyTemplateIcons.tsx · export ProofPointArrowIcon",
    note: "Proof-point bullet arrow",
    icon: <ProofPointArrowIcon className="text-[#222222]" />,
  },
  {
    title: "HeroSwooshBackdrop",
    source: "src/components/case-study/template/CaseStudyTemplateIcons.tsx · export HeroSwooshBackdrop",
    note: "Decorative backdrop graphic",
    icon: <HeroSwooshBackdrop />,
  },
]

const homepageIconWrappers = [
  {
    title: "ShapeThreeIcon",
    source: "src/components/homepage/icons.tsx · export ShapeThreeIcon",
    note: "Decorative shape",
    icon: <ShapeThreeIcon />,
  },
  {
    title: "ShapeEightIcon",
    source: "src/components/homepage/icons.tsx · export ShapeEightIcon",
    note: "Decorative shape",
    icon: <ShapeEightIcon />,
  },
  {
    title: "ShapeSevenIcon",
    source: "src/components/homepage/icons.tsx · export ShapeSevenIcon",
    note: "Decorative shape",
    icon: <ShapeSevenIcon />,
  },
  {
    title: "ShapeFourIcon",
    source: "src/components/homepage/icons.tsx · export ShapeFourIcon",
    note: "Decorative shape",
    icon: <ShapeFourIcon />,
  },
  {
    title: "GanttIcon",
    source: "src/components/homepage/icons.tsx · export GanttIcon",
    note: "Wraps /tool-icons/svg/icon-gantt.svg",
    icon: <GanttIcon />,
  },
  {
    title: "NetworkIcon",
    source: "src/components/homepage/icons.tsx · export NetworkIcon",
    note: "Wraps /tool-icons/svg/icon-network.svg",
    icon: <NetworkIcon />,
  },
  {
    title: "CodeIcon",
    source: "src/components/homepage/icons.tsx · export CodeIcon",
    note: "Wraps /tool-icons/svg/icon-code.svg",
    icon: <CodeIcon />,
  },
  {
    title: "StatsIcon",
    source: "src/components/homepage/icons.tsx · export StatsIcon",
    note: "Wraps /tool-icons/svg/icon-stats.svg",
    icon: <StatsIcon />,
  },
]

const caseStudyDiagramIcons = [
  {
    title: "ProductsIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export ProductsIcon",
    note: "BI commerce icon",
    icon: <ProductsIcon />,
  },
  {
    title: "InventoryIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export InventoryIcon",
    note: "BI commerce icon",
    icon: <InventoryIcon />,
  },
  {
    title: "DatabaseIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export DatabaseIcon",
    note: "BI commerce icon",
    icon: <DatabaseIcon />,
  },
  {
    title: "ContentIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export ContentIcon",
    note: "BI commerce icon",
    icon: <ContentIcon />,
  },
  {
    title: "CampaignIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export CampaignIcon",
    note: "BI commerce icon",
    icon: <CampaignIcon />,
  },
  {
    title: "LaptopIcon",
    source: "src/components/case-study/bi-commerce-icons.tsx · export LaptopIcon",
    note: "BI commerce icon",
    icon: <LaptopIcon />,
  },
  {
    title: "DiagramGlyph: database",
    source: "src/components/case-study/DiagramGlyph.tsx · type database",
    note: "Line-art diagram glyph",
    icon: <DiagramGlyphPreview type="database" label="database glyph" />,
  },
  {
    title: "DiagramGlyph: monitor",
    source: "src/components/case-study/DiagramGlyph.tsx · type monitor",
    note: "Line-art diagram glyph",
    icon: <DiagramGlyphPreview type="monitor" label="monitor glyph" />,
  },
  {
    title: "DiagramGlyph: devices",
    source: "src/components/case-study/DiagramGlyph.tsx · type devices",
    note: "Line-art diagram glyph",
    icon: <DiagramGlyphPreview type="devices" label="devices glyph" />,
  },
  {
    title: "DiagramGlyph: api-arrows",
    source: "src/components/case-study/DiagramGlyph.tsx · type api-arrows",
    note: "Line-art diagram glyph",
    icon: <DiagramGlyphPreview type="api-arrows" label="api arrows glyph" />,
  },
  {
    title: "UserExperienceIcon",
    source: "src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx · export UserExperienceIcon",
    note: "Shared UX badge",
    icon: <UserExperienceIcon />,
  },
]

const genericToolIcons = [
  { title: "icon-api.svg", source: "/tool-icons/svg/icon-api.svg", note: "Generic API glyph" },
  { title: "icon-chart.svg", source: "/tool-icons/svg/icon-chart.svg", note: "Generic chart glyph" },
  { title: "icon-code.svg", source: "/tool-icons/svg/icon-code.svg", note: "Generic code glyph" },
  { title: "icon-computer.svg", source: "/tool-icons/svg/icon-computer.svg", note: "Generic desktop glyph" },
  { title: "icon-coupon.svg", source: "/tool-icons/svg/icon-coupon.svg", note: "Generic coupon glyph" },
  { title: "icon-credit-card.svg", source: "/tool-icons/svg/icon-credit-card.svg", note: "Generic checkout glyph" },
  { title: "icon-dashboard.svg", source: "/tool-icons/svg/icon-dashboard.svg", note: "Generic dashboard glyph" },
  { title: "icon-database.svg", source: "/tool-icons/svg/icon-database.svg", note: "Generic database glyph" },
  { title: "icon-email.svg", source: "/tool-icons/svg/icon-email.svg", note: "Generic email glyph" },
  { title: "icon-gantt.svg", source: "/tool-icons/svg/icon-gantt.svg", note: "Generic Gantt glyph" },
  { title: "icon-headphones.svg", source: "/tool-icons/svg/icon-headphones.svg", note: "Generic media/support glyph" },
  { title: "icon-laptop.svg", source: "/tool-icons/svg/icon-laptop.svg", note: "Generic laptop glyph" },
  { title: "icon-mobile.svg", source: "/tool-icons/svg/icon-mobile.svg", note: "Generic mobile glyph" },
  { title: "icon-network.svg", source: "/tool-icons/svg/icon-network.svg", note: "Generic network glyph" },
  { title: "icon-pie-chart.svg", source: "/tool-icons/svg/icon-pie-chart.svg", note: "Generic analytics glyph" },
  { title: "icon-shipping.svg", source: "/tool-icons/svg/icon-shipping.svg", note: "Generic shipping glyph" },
  { title: "icon-shopping-bag.svg", source: "/tool-icons/svg/icon-shopping-bag.svg", note: "Generic commerce glyph" },
  { title: "icon-slider.svg", source: "/tool-icons/svg/icon-slider.svg", note: "Generic merchandising glyph" },
  { title: "icon-stats.svg", source: "/tool-icons/svg/icon-stats.svg", note: "Generic stats glyph" },
  { title: "icon-system.svg", source: "/tool-icons/svg/icon-system.svg", note: "Generic system glyph" },
  { title: "icon-tablet.svg", source: "/tool-icons/svg/icon-tablet.svg", note: "Generic tablet glyph" },
  { title: "icon-ugc.svg", source: "/tool-icons/svg/icon-ugc.svg", note: "Generic UGC glyph" },
  { title: "icon-user-blk.svg", source: "/tool-icons/svg/icon-user-blk.svg", note: "Black user silhouette" },
  { title: "icon-user.svg", source: "/tool-icons/svg/icon-user.svg", note: "Generic user glyph" },
  { title: "icon-web.svg", source: "/tool-icons/svg/icon-web.svg", note: "Generic web glyph" },
  { title: "iscon-user-02.svg", source: "/tool-icons/svg/iscon-user-02.svg", note: "Alternate user glyph" },
]

const lucideIcons: Array<{
  title: string
  source: string
  icon: LucideIcon
}> = [
  { title: "AlertTriangle", source: "lucide-react", icon: AlertTriangle },
  { title: "ArrowDown", source: "lucide-react", icon: ArrowDown },
  { title: "ArrowLeftRight", source: "lucide-react", icon: ArrowLeftRight },
  { title: "ArrowRight", source: "lucide-react", icon: ArrowRight },
  { title: "ArrowRightCircle", source: "lucide-react", icon: ArrowRightCircle },
  { title: "ArrowUpRight", source: "lucide-react", icon: ArrowUpRight },
  { title: "BadgeDollarSign", source: "lucide-react", icon: BadgeDollarSign },
  { title: "BarChart3", source: "lucide-react", icon: BarChart3 },
  { title: "Bot", source: "lucide-react", icon: Bot },
  { title: "Building2", source: "lucide-react", icon: Building2 },
  { title: "Check", source: "lucide-react", icon: Check },
  { title: "CheckCircle2", source: "lucide-react", icon: CheckCircle2 },
  { title: "ChevronLeft", source: "lucide-react", icon: ChevronLeft },
  { title: "ChevronRight", source: "lucide-react", icon: ChevronRight },
  { title: "Clock", source: "lucide-react", icon: Clock },
  { title: "Cpu", source: "lucide-react", icon: Cpu },
  { title: "Database", source: "lucide-react", icon: Database },
  { title: "Download", source: "lucide-react", icon: Download },
  { title: "FileBarChart", source: "lucide-react", icon: FileBarChart },
  { title: "FileText", source: "lucide-react", icon: FileText },
  { title: "Globe", source: "lucide-react", icon: Globe },
  { title: "HelpCircle", source: "lucide-react", icon: HelpCircle },
  { title: "Layers", source: "lucide-react", icon: Layers },
  { title: "LayoutGrid", source: "lucide-react", icon: LayoutGrid },
  { title: "Lightbulb", source: "lucide-react", icon: Lightbulb },
  { title: "Linkedin", source: "lucide-react", icon: Linkedin },
  { title: "Mail", source: "lucide-react", icon: Mail },
  { title: "Maximize", source: "lucide-react", icon: Maximize },
  { title: "Menu", source: "lucide-react", icon: Menu },
  { title: "Minimize", source: "lucide-react", icon: Minimize },
  { title: "MousePointerClick", source: "lucide-react", icon: MousePointerClick },
  { title: "RefreshCcw", source: "lucide-react", icon: RefreshCcw },
  { title: "Server", source: "lucide-react", icon: Server },
  { title: "Shield", source: "lucide-react", icon: Shield },
  { title: "ShieldAlert", source: "lucide-react", icon: ShieldAlert },
  { title: "ShieldCheck", source: "lucide-react", icon: ShieldCheck },
  { title: "Shirt", source: "lucide-react", icon: Shirt },
  { title: "ShoppingBag", source: "lucide-react", icon: ShoppingBag },
  { title: "Sparkles", source: "lucide-react", icon: Sparkles },
  { title: "Target", source: "lucide-react", icon: Target },
  { title: "User", source: "lucide-react", icon: User },
  { title: "UserCheck", source: "lucide-react", icon: UserCheck },
  { title: "Users", source: "lucide-react", icon: Users },
  { title: "X", source: "lucide-react", icon: X },
  { title: "XCircle", source: "lucide-react", icon: XCircle },
  { title: "Zap", source: "lucide-react", icon: Zap },
]

export default function IconGalleryPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] py-10 text-[#222222] md:py-14">
      <Container className="space-y-8">
        <section className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white px-6 py-8 shadow-[0_1px_2px_rgba(34,34,34,0.02)] md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(68,122,203,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,34,34,0.05),transparent_42%)]" />
          <div className="pointer-events-none absolute right-[-80px] top-[-24px] opacity-50">
            <HeroSwooshBackdrop />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-[999px] border border-black/8 bg-[#F8F8F8] px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#447ACB]" />
                <span className="type-p5 text-[#222222]">Reference route</span>
              </div>
              <div className="space-y-4">
                <h1 className="type-h3 text-[#222222]">Icon Gallery</h1>
                <p className="type-p3 max-w-3xl text-[#7B7B7B]">
                  Dedicated visual inventory for the shared custom icons, generic tool glyphs,
                  and currently imported Lucide icons. This page is separate from the design-system
                  page and only exists to review reuse candidates.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-[999px] bg-[#222222] px-3 py-1 text-white">
                  <span className="type-p5">23 custom</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-[999px] bg-[#222222] px-3 py-1 text-white">
                  <span className="type-p5">26 generic assets</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-[999px] bg-[#222222] px-3 py-1 text-white">
                  <span className="type-p5">46 Lucide imports</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-[999px] bg-[#447ACB] px-3 py-1 text-white">
                  <span className="type-p5">88 excluded logos</span>
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[20px] border border-black/8 bg-[#F8F8F8] p-4">
                <div className="type-p5 text-[#7B7B7B]">Best reuse candidates</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["ArrowUpRightIcon", "ExternalLinkMiniIcon", "BreadcrumbHomeIcon", "ProofPointArrowIcon", "CodeIcon", "GanttIcon"].map(
                    (label) => (
                      <span key={label} className="rounded-[999px] bg-white px-3 py-1 type-p5 text-[#222222]">
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[20px] border border-black/8 bg-[#222222] p-4 text-white">
                <div className="type-p5 text-white/70">Scope note</div>
                <p className="type-p4 mt-2 text-white">
                  Company, product, social, and technology logos are excluded from this gallery
                  and documented separately in <span className="text-[#9FC0FF]">docs/icon-inventory.md</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeader
            eyebrow="Shared custom icons"
            title="Reusable non-logo components"
            description="These live in shared modules and should be the first stop before creating any new inline SVG for UI chrome, callouts, or case-study copy."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sharedUiIcons.map((item) => (
              <PreviewCard key={item.title} title={item.title} source={item.source} note={item.note}>
                {item.icon}
              </PreviewCard>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeader
            eyebrow="Case-study template"
            title="Template and diagram primitives"
            description="These icons and glyphs are already wired into the case-study template and diagram layers, so they are strong reuse candidates for new case-study pages."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {caseStudyTemplateIcons.map((item) => (
              <PreviewCard key={item.title} title={item.title} source={item.source} note={item.note}>
                {item.icon}
              </PreviewCard>
            ))}
            {caseStudyDiagramIcons.map((item) => (
              <PreviewCard key={item.title} title={item.title} source={item.source} note={item.note}>
                {item.icon}
              </PreviewCard>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeader
            eyebrow="Homepage and wrappers"
            title="Decorative shapes plus shared wrappers"
            description="The decorative shapes are page-specific visuals, while the wrapper icons point to shared generic glyph assets under `public/tool-icons`."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homepageIconWrappers.map((item) => (
              <PreviewCard key={item.title} title={item.title} source={item.source} note={item.note}>
                {item.icon}
              </PreviewCard>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeader
            eyebrow="Generic assets"
            title="Shared non-logo files in `public/tool-icons`"
            description="These are the generic SVG assets that should be preferred over drawing a fresh inline SVG when the same meaning already exists."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {genericToolIcons.map((item) => (
              <PreviewCard
                key={item.title}
                title={item.title}
                source={item.source}
                note={item.note}
              >
                <img
                  src={item.source}
                  alt={item.title}
                  className="h-10 w-10 object-contain"
                />
              </PreviewCard>
            ))}
          </div>
        </section>

        <section className="space-y-4 pb-4">
          <SectionHeader
            eyebrow="Lucide"
            title="Distinct Lucide imports currently in use"
            description="This section mirrors the repository-wide import inventory so it is easy to compare the shared custom and generic options before reaching for a new Lucide icon."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {lucideIcons.map((item) => (
              <PreviewCard key={item.title} title={item.title} source={item.source} note="Imported from lucide-react">
                <LucidePreview Icon={item.icon} />
              </PreviewCard>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}
