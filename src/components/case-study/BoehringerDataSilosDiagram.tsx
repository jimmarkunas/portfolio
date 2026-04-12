import { Globe, Database, BadgeDollarSign, FileBarChart } from "lucide-react";

const c = {
  ink: "#222222",
  sub: "#4B5154",
  muted: "#7B7B7B",
  white: "#FFFFFF",
  gray: "#F3F3F3",
  border: "#E5E7EB",
  accent: "#447ACB",
  // dark theme
  darkBg: "#222222",
  darkCard: "#2E2E2E",
  darkInner: "#3A3A3A",
  darkBorder: "#3A3A3A",
  darkText: "rgba(255,255,255,0.90)",
  darkSub: "rgba(255,255,255,0.55)",
};

const inputs = [
  { icon: Globe,           title: "Country Webshops",     subtitle: "Local storefronts" },
  { icon: Database,        title: "Oracle / Legacy ERP",  subtitle: "Regional back office" },
  { icon: BadgeDollarSign, title: "Local Rules",          subtitle: "Tax, pricing, fulfilment" },
];

const tasks = [
  "Reconcile Orders",
  "Normalize Catalog",
  "Map Loyalty",
  "Verify Pricing",
  "Handle Exceptions",
  "Rebuild Reports",
];

function InputCard({
  icon: Icon,
  title,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[12px] p-3 ${className}`}
      style={{ background: c.darkCard, border: `1px solid ${c.darkBorder}` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: c.darkInner, border: `1px solid ${c.darkBorder}` }}
        >
          <Icon className="h-4 w-4" style={{ color: c.darkText }} />
        </div>
        <div className="min-w-0">
          <div className="text-[13px] leading-[1.22]" style={{ color: c.darkText }}>{title}</div>
        </div>
      </div>
    </div>
  );
}

function TaskBlock({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[54px] items-center justify-center rounded-[12px] px-3 py-2 text-center"
      style={{ background: c.darkCard, border: `1px solid ${c.darkBorder}`, color: c.darkSub }}
    >
      <span className="text-[11px] leading-[1.2]">{label}</span>
    </div>
  );
}

function Arrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "down" }) {
  if (direction === "down") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="flex flex-col items-center">
          <div className="h-3 w-[3px]" style={{ background: c.accent }} />
          <div className="h-6 w-[3px]" style={{ background: c.accent }} />
          <div className="h-0 w-0 border-x-[7px] border-t-[12px] border-x-transparent" style={{ borderTopColor: c.accent }} />
        </div>
      </div>
    );
  }
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex w-full items-center">
        <div className="h-[3px] w-3" style={{ background: c.accent }} />
        <div className="h-[3px] flex-1" style={{ background: c.accent }} />
        <div className="h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent" style={{ borderLeftColor: c.accent }} />
      </div>
    </div>
  );
}

function MiddlePanel() {
  return (
    <div className="rounded-[20px] p-4" style={{ background: c.darkCard, border: `1px solid ${c.darkBorder}` }}>
      <div className="rounded-[14px] px-4 py-3" style={{ background: c.darkInner, color: c.white }}>
        <div className="text-[13px] leading-none" style={{ color: c.darkSub }}>
          Manual Data Mgmt.
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {tasks.map((task) => (
          <TaskBlock key={task} label={task} />
        ))}
      </div>
    </div>
  );
}

function ReportCard() {
  return (
    <div
      className="flex min-h-[124px] flex-col items-center justify-center rounded-[16px] px-3 py-4 text-center"
      style={{ background: c.darkInner, color: c.white }}
    >
      <FileBarChart className="h-8 w-8" />
      <div className="mt-3 text-[14px] leading-[1.25]">Static Reporting</div>
    </div>
  );
}

export default function BoehringerDataSilosDiagram() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="rounded-[28px] p-5 md:p-6"
        style={{
          background: c.darkBg,
          border: `1px solid ${c.darkBorder}`,
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        }}
      >
        {/* Mobile + tablet — vertical stack */}
        <div className="flex flex-col xl:hidden">
          <div className="grid gap-3">
            {inputs.map((item) => (
              <InputCard key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
          <Arrow direction="down" className="py-2" />
          <MiddlePanel />
          <Arrow direction="down" className="py-2" />
          <ReportCard />
        </div>

        {/* Desktop — full horizontal */}
        <div className="hidden xl:grid xl:items-center" style={{ gridTemplateColumns: "160px 36px 1fr 36px 110px" }}>
          <div className="flex flex-col gap-4">
            {inputs.map((item) => (
              <InputCard key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className="flex flex-col justify-around self-stretch py-2">
            <Arrow direction="right" />
            <Arrow direction="right" />
            <Arrow direction="right" />
          </div>
          <div className="min-w-0">
            <MiddlePanel />
          </div>
          <div className="flex items-center">
            <Arrow direction="right" />
          </div>
          <div>
            <ReportCard />
          </div>
        </div>
      </div>
    </div>
  );
}
