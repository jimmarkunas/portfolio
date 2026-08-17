import type { CSSProperties, ReactNode } from "react";
import {
  ArrowLeftRight,
  BadgeCheck,
  Ban,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleUserRound,
  Database,
  FileSearch,
  FileText,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Network,
  Search,
  Shield,
  ShieldCheck,
  Target,
  TriangleAlert,
  UserRound,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const W = 1672;
export const H = 941;

export const usaii = {
  bg: "#f7f7f5",
  ink: "#17191c",
  muted: "#6f747c",
  line: "#d8dadd",
  lineDark: "#a9afb7",
  blue: "#477ed7",
  soft: "#eef0f2",
};

export const pxX = (value: number) => `${value}px`;
export const pxY = (value: number) => `${value}px`;
export const pxW = (value: number) => `${value}px`;
export const pxH = (value: number) => `${value}px`;
export const pxFont = (value: number) => `${value}px`;

export const absoluteBox = (x: number, y: number, w: number, h: number): CSSProperties => ({
  left: pxX(x),
  top: pxY(y),
  width: pxW(w),
  height: pxH(h),
});

export const icons = {
  authority: Shield,
  guardrails: ShieldCheck,
  evidence: FileSearch,
  network: UsersRound,
  transfer: ArrowLeftRight,
  success: BarChart3,
  agent: BrainCircuit,
  chatbot: MessageSquare,
  workflow: Workflow,
  modelTools: Layers3,
  objective: Target,
  consequence: BarChart3,
  source: FileText,
  state: Layers3,
  constraint: Shield,
  decision: BrainCircuit,
  action: CheckCircle2,
  override: UserRound,
  outcome: CheckCircle2,
  identity: CircleUserRound,
  permissions: LockKeyhole,
  systems: Database,
  crm: UsersRound,
  billing: FileText,
  eligibility: CheckCircle2,
  api: Workflow,
  operational: Workflow,
  outside: Shield,
  conflicting: Database,
  high: TriangleAlert,
  failure: Ban,
  human: UserRound,
  business: BarChart3,
  quality: BadgeCheck,
  risk: ShieldCheck,
  know: Search,
  owner: CircleUserRound,
  never: Ban,
  touch: Database,
  takeover: UserRound,
  owns: CircleUserRound,
  bot: Bot,
} satisfies Record<string, LucideIcon>;

export function SlideStage({ children }: { children: ReactNode }) {
  return (
    <section
      className="relative h-[941px] w-[1672px] overflow-hidden bg-[#f7f7f5] text-[#17191c]"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ dot = false }: { dot?: boolean }) {
  return (
    <div
      className="absolute flex items-center font-medium uppercase text-[#22272e]"
      style={{ left: pxX(78), top: pxY(62), fontSize: pxFont(20), letterSpacing: "0.22em" }}
    >
      {dot ? <span className="mr-[18px] rounded-full bg-[#22272e]" style={{ width: pxW(15), height: pxW(15) }} /> : null}
      USAII AI EXPERT TALKS
    </div>
  );
}

export function ShortRule({ y = 112 }: { y?: number }) {
  return <div className="absolute h-px bg-[#d8d8d6]" style={{ left: pxX(78), top: pxY(y), width: pxW(116) }} />;
}

export function Card({
  x,
  y,
  w,
  h,
  children,
  blue = false,
  className = "",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: ReactNode;
  blue?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-[20px] border bg-white/70 shadow-[0_12px_35px_rgba(20,24,31,.04)] ${className}`}
      style={{ ...absoluteBox(x, y, w, h), borderColor: blue ? usaii.blue : usaii.line }}
    >
      {children}
    </div>
  );
}

export function CircleIcon({
  icon: Icon,
  active = false,
  size = 68,
  strokeWidth = 1.6,
}: {
  icon: LucideIcon;
  active?: boolean;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <div
      className="grid place-items-center rounded-full border"
      style={{
        width: pxW(size),
        aspectRatio: "1 / 1",
        borderColor: active ? usaii.blue : "#d7dade",
        background: active ? "linear-gradient(135deg,#5c88e7,#3e73dc)" : "linear-gradient(145deg,#f4f5f5,#e9ebec)",
        boxShadow: active ? "0 12px 28px rgba(71,126,215,.18)" : "inset 0 1px 0 rgba(255,255,255,.9)",
      }}
    >
      <Icon width={Math.round(size * 0.48)} height={Math.round(size * 0.48)} color={active ? "white" : "#6f7680"} strokeWidth={strokeWidth} />
    </div>
  );
}

export function CenteredNode({
  x,
  y,
  w,
  h,
  title,
  body,
  icon,
  active = false,
  titleBlue = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  body: ReactNode;
  icon: LucideIcon;
  active?: boolean;
  titleBlue?: boolean;
}) {
  return (
    <Card x={x} y={y} w={w} h={h} blue={active}>
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: pxY(26) }}>
        <CircleIcon icon={icon} active={active} size={72} />
      </div>
      <div
        className="absolute left-[7%] right-[7%] text-center font-semibold tracking-[-0.035em]"
        style={{ top: "55%", fontSize: pxFont(20), color: titleBlue ? usaii.blue : usaii.ink }}
      >
        {title}
      </div>
      <div
        className="absolute left-[8%] right-[8%] text-center leading-[1.25] tracking-[-0.02em] text-[#5f6670]"
        style={{ top: "70%", fontSize: pxFont(16) }}
      >
        {body}
      </div>
    </Card>
  );
}

export function QuoteIcon({ size = 64 }: { size?: number }) {
  return (
    <div
      className="grid place-items-center rounded-full text-white"
      style={{ width: pxW(size), aspectRatio: "1 / 1", background: usaii.blue, fontSize: pxFont(size * 0.6), lineHeight: 1 }}
    >
      “
    </div>
  );
}
