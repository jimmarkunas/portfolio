"use client";

import type { HTMLAttributes, ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  Layers3,
  Lock,
  Network,
  ShieldCheck,
  Shuffle,
  Target,
  UserCheck,
  Users,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { usaiiPresentationContent } from "@/content/usaii";

function Card({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-[24px] border border-border bg-white shadow-[0_18px_55px_rgba(34,34,34,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

function IconBadge({ icon: Icon, active = false, large = false }: { icon: LucideIcon; active?: boolean; large?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full border ${large ? "h-16 w-16" : "h-12 w-12"} ${
        active ? "border-accent bg-accent text-white" : "border-border bg-[#f3f3f3] text-secondary-dark"
      }`}
    >
      <Icon className={large ? "h-8 w-8" : "h-5 w-5"} strokeWidth={1.7} />
    </div>
  );
}

function Kicker() {
  return (
    <div className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.26em] text-secondary-dark">
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      USAII AI Expert Talks
    </div>
  );
}

function QuoteBar({ children, support }: { children: ReactNode; support?: ReactNode }) {
  return (
    <Card className="flex items-start gap-5 p-5">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-[34px] leading-none text-white">“</div>
      <div>
        <p className="text-[clamp(1.25rem,2vw,1.9rem)] leading-[1.16] tracking-[-0.04em] text-ink">{children}</p>
        {support ? <p className="mt-2 text-[clamp(.85rem,1.1vw,1rem)] leading-snug text-muted">{support}</p> : null}
      </div>
    </Card>
  );
}

function SlideCanvas({ title, subtitle, number, children }: { title: string; subtitle?: string; number: number; children: ReactNode }) {
  return (
    <section className="flex h-full w-full flex-col overflow-hidden rounded-[30px] bg-[#f3f3f3] p-8 text-ink md:p-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <Kicker />
          <div className="mt-5 h-px w-24 bg-border" />
        </div>
        <div className="rounded-pill border border-border bg-white px-4 py-1.5 text-xs tracking-[0.2em] text-muted">
          {String(number).padStart(2, "0")}
        </div>
      </div>

      <div className="mt-6 max-w-[980px]">
        <h1 className="font-display text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-0.055em] text-ink">{title}</h1>
        {subtitle ? (
          <p className="mt-3 max-w-[850px] text-[clamp(1rem,1.7vw,1.6rem)] leading-[1.3] tracking-[-0.025em] text-muted">{subtitle}</p>
        ) : null}
      </div>

      <div className="min-h-0 flex-1">{children}</div>
    </section>
  );
}

const agentModel: Array<{ letter: string; name: string; prompt: string; icon: LucideIcon }> = [
  { letter: "A", name: "Authority", prompt: "What may it observe, recommend, decide, or execute?", icon: ShieldCheck },
  { letter: "G", name: "Guardrails", prompt: "What policies, limits, and protections constrain it?", icon: Lock },
  { letter: "E", name: "Evidence", prompt: "What must be preserved and reconstructable?", icon: FileSearch },
  { letter: "N", name: "Network", prompt: "Which systems, APIs, identities, and data can it access?", icon: Network },
  { letter: "T", name: "Transfer", prompt: "When does it stop and hand control to a person?", icon: Shuffle },
  { letter: "S", name: "Success & Accountability", prompt: "What outcome matters, and who owns the result?", icon: Gauge },
];

function TitleSlide() {
  const positions = [
    "left-[0%] top-[30%]",
    "left-[28%] top-[1%]",
    "right-[0%] top-[30%]",
    "left-[7%] bottom-[1%]",
    "left-[40%] bottom-[-2%]",
    "right-[2%] bottom-[1%]",
  ];

  return (
    <SlideCanvas number={1} title="How to Turn AI Agents Into Governed Digital Products" subtitle="Enterprise Agent Operating Model">
      <div className="mt-8 grid h-[calc(100%-2rem)] grid-cols-[0.9fr_1.1fr] gap-8">
        <div className="flex flex-col justify-end pb-4">
          <QuoteBar support="A practical product operating model for delegated autonomy.">Autonomy is a product decision, not a model property.</QuoteBar>
          <p className="mt-5 text-[clamp(.95rem,1.25vw,1.1rem)] tracking-[-0.02em] text-secondary-dark">Jim Markunas</p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#cfd3d8]" />
          <Card className="relative z-20 flex h-[160px] w-[210px] flex-col items-center justify-center p-5 text-center">
            <IconBadge icon={BrainCircuit} active large />
            <h2 className="mt-3 text-[24px] tracking-[-0.04em]">AI Agent</h2>
            <p className="mt-1 text-[14px] leading-snug text-muted">delegated authority wrapped in controls</p>
          </Card>
          {agentModel.map((item, index) => (
            <Card key={item.letter} className={`absolute z-10 flex w-[165px] items-center gap-3 p-3 ${positions[index]}`}>
              <IconBadge icon={item.icon} />
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{item.letter}</div>
                <div className="text-[14px] leading-tight tracking-[-0.025em]">{item.name}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SlideCanvas>
  );
}

function AgentDefinitionSlide() {
  const steps: Array<{ title: string; body: string; icon: LucideIcon; active?: boolean }> = [
    { title: "Chatbot", body: "Responds", icon: ClipboardCheck },
    { title: "Workflow automation", body: "Executes a predefined path", icon: Workflow },
    { title: "Model + tools", body: "Invokes capabilities when directed", icon: Layers3 },
    { title: "Enterprise agent", body: "Pursues an objective, evaluates state, chooses among permitted actions, and can change a business system", icon: Target, active: true },
  ];
  const chips: Array<{ label: string; icon: LucideIcon }> = [
    { label: "Objective", icon: Target },
    { label: "Authority", icon: ShieldCheck },
    { label: "Consequence", icon: Zap },
  ];

  return (
    <SlideCanvas number={2} title="What Makes an Enterprise AI Agent?" subtitle="From response to delegated consequence">
      <div className="mt-7 grid grid-cols-[1fr_235px] gap-5">
        <div className="grid grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 z-20 h-5 w-5 -translate-y-1/2 text-[#9ca3af]" /> : null}
              <Card className={`relative flex min-h-[275px] flex-col items-center justify-center p-5 text-center ${step.active ? "border-accent ring-1 ring-accent" : ""}`}>
                <div className={`absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border bg-white text-base ${step.active ? "border-accent text-accent" : "border-border text-secondary-dark"}`}>
                  {index + 1}
                </div>
                <IconBadge icon={step.icon} active={step.active} large />
                <h2 className={`mt-5 text-[clamp(1.1rem,1.55vw,1.45rem)] leading-tight tracking-[-0.04em] ${step.active ? "text-accent" : "text-ink"}`}>{step.title}</h2>
                <p className="mt-3 text-[clamp(.8rem,1vw,.92rem)] leading-snug text-muted">{step.body}</p>
              </Card>
            </div>
          ))}
        </div>
        <Card className="flex flex-col justify-center p-6">
          <div className="text-5xl leading-none text-accent">“</div>
          <p className="mt-3 text-[clamp(1.3rem,1.9vw,1.75rem)] leading-[1.13] tracking-[-0.05em]">A chatbot can give you an answer. An agent can create a consequence.</p>
        </Card>
      </div>
      <div className="mt-5 flex gap-3">
        {chips.map((chip) => (
          <div key={chip.label} className="flex items-center gap-2 rounded-pill border border-border bg-white px-4 py-2 text-sm text-secondary-dark">
            <chip.icon className="h-4 w-4 text-accent" />
            {chip.label}
          </div>
        ))}
      </div>
    </SlideCanvas>
  );
}

function OperatingModelSlide() {
  return (
    <SlideCanvas number={3} title="The Enterprise Agent Operating Model" subtitle="Six product decisions for governed autonomy">
      <div className="mt-7 grid grid-cols-3 gap-4">
        {agentModel.map((item) => (
          <Card key={item.letter} className="flex min-h-[140px] items-center gap-5 p-5">
            <IconBadge icon={item.icon} />
            <div className="min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[48px] font-medium leading-none tracking-[-0.08em] text-accent">{item.letter}</span>
                <h2 className="text-[clamp(1.05rem,1.4vw,1.35rem)] leading-tight tracking-[-0.035em]">{item.name}</h2>
              </div>
              <div className="my-2 h-px w-full bg-border" />
              <p className="text-[clamp(.75rem,.92vw,.88rem)] leading-snug text-secondary-dark">{item.prompt}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-5"><QuoteBar>The model is a component. The agent is the product.</QuoteBar></div>
    </SlideCanvas>
  );
}

function AuthoritySlide() {
  const levels: Array<{ title: string; body: string; icon: LucideIcon }> = [
    { title: "Observe", body: "Inspect information only", icon: FileSearch },
    { title: "Recommend", body: "Suggest an action", icon: ClipboardCheck },
    { title: "Prepare", body: "Do the work without committing it", icon: Layers3 },
    { title: "Decide", body: "Choose an approved action", icon: CheckCircle2 },
    { title: "Execute", body: "Change something in the operating environment", icon: Zap },
  ];

  return (
    <SlideCanvas number={4} title="Authority Is a Ladder, Not a Toggle" subtitle="Assign autonomy action by action">
      <div className="mt-7 grid grid-cols-[1fr_225px] gap-5">
        <div className="flex items-end gap-3">
          {levels.map((level, index) => (
            <Card key={level.title} className={`relative flex flex-1 flex-col items-center justify-center p-4 text-center ${index === 4 ? "border-accent ring-1 ring-accent" : ""}`} style={{ height: `${180 + index * 25}px` }}>
              <div className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-accent text-sm text-white">{index + 1}</div>
              <IconBadge icon={level.icon} active={index === 4} />
              <h2 className="mt-3 text-[clamp(1rem,1.2vw,1.2rem)] tracking-[-0.04em]">{level.title}</h2>
              <div className="my-2 h-px w-20 bg-border" />
              <p className="text-[clamp(.7rem,.85vw,.82rem)] leading-snug text-muted">{level.body}</p>
            </Card>
          ))}
        </div>
        <Card className="self-end p-5">
          <div className="flex items-center gap-3"><IconBadge icon={ShieldCheck} /><h3 className="text-lg tracking-[-0.04em]">Decision test</h3></div>
          <ul className="mt-5 space-y-3 text-[14px] text-secondary-dark">
            {["Consequence", "Reversibility", "Clarity of rules", "Value of human review"].map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-accent" />{item}</li>
            ))}
          </ul>
        </Card>
      </div>
      <p className="mt-5 text-center text-[clamp(1.05rem,1.4vw,1.25rem)] italic tracking-[-0.025em] text-secondary-dark">“Autonomy should be granted action by action, not agent by agent.”</p>
    </SlideCanvas>
  );
}

function EvidenceSlide() {
  const chain: Array<{ title: string; body: string; icon: LucideIcon; active?: boolean }> = [
    { title: "Source", body: "Origin of data, signals, and context", icon: FileSearch },
    { title: "State", body: "System state at the time of evaluation", icon: Layers3 },
    { title: "Constraint", body: "Policies, guardrails, and business boundaries", icon: ShieldCheck },
    { title: "Decision", body: "Operational choice selected", icon: BrainCircuit, active: true },
    { title: "Action", body: "Tool call or system change", icon: Zap },
    { title: "Override", body: "Human or policy intervention", icon: UserCheck },
    { title: "Outcome", body: "Resulting impact and observed effect", icon: CheckCircle2 },
  ];

  return (
    <SlideCanvas number={5} title="Evidence & Auditability" subtitle="Reconstruct consequential decisions from input to outcome">
      <div className="mt-7 grid grid-cols-7 gap-3">
        {chain.map((item, index) => (
          <div key={item.title} className="relative">
            {index < chain.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 z-20 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" /> : null}
            <Card className={`flex min-h-[205px] flex-col items-center justify-center p-4 text-center ${item.active ? "border-accent" : ""}`}>
              <IconBadge icon={item.icon} active={item.active} />
              <h2 className={`mt-3 text-[clamp(.95rem,1.1vw,1.1rem)] tracking-[-0.035em] ${item.active ? "text-accent" : ""}`}>{item.title}</h2>
              <p className="mt-2 text-[clamp(.65rem,.76vw,.75rem)] leading-snug text-muted">{item.body}</p>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-5 ml-auto max-w-[650px]"><QuoteBar support="More authority should generally mean more observability.">Audit the system’s behavior, not just its explanation of its behavior.</QuoteBar></div>
    </SlideCanvas>
  );
}

function IntegrationSlide() {
  const principles: Array<{ label: string; icon: LucideIcon }> = [
    { label: "Identity first", icon: UserCheck },
    { label: "Least privilege", icon: Lock },
    { label: "Bounded APIs", icon: Layers3 },
    { label: "Failure behavior", icon: ShieldCheck },
  ];
  const nodes: Array<{ title: string; body: string; icon: LucideIcon; position: string }> = [
    { title: "Identity", body: "Who the agent is", icon: UserCheck, position: "left-[40%] top-[0%]" },
    { title: "Permissions", body: "What it may access", icon: Lock, position: "left-[5%] top-[17%]" },
    { title: "Systems of record", body: "Source of truth", icon: Database, position: "right-[2%] top-[17%]" },
    { title: "CRM", body: "Customer data", icon: Users, position: "left-[0%] top-[50%]" },
    { title: "Billing", body: "Invoices and accounts", icon: ClipboardCheck, position: "right-[0%] top-[50%]" },
    { title: "Eligibility", body: "Policies and rules", icon: ShieldCheck, position: "left-[10%] bottom-[0%]" },
    { title: "APIs", body: "Integration layer", icon: Layers3, position: "left-[41%] bottom-[-2%]" },
    { title: "Workflows", body: "Execute and orchestrate", icon: Workflow, position: "right-[7%] bottom-[0%]" },
  ];

  return (
    <SlideCanvas number={6} title="Integration in the Real Enterprise" subtitle="Treat the agent as a new actor inside the architecture">
      <div className="mt-6 grid grid-cols-[285px_1fr] gap-6">
        <Card className="h-fit p-5">
          <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted">Principles</div>
          <div className="mt-4 space-y-3">
            {principles.map((item) => (
              <div key={item.label} className="flex items-center gap-3 border-b border-border pb-3 last:border-b-0"><IconBadge icon={item.icon} /><span className="text-[16px] tracking-[-0.025em]">{item.label}</span></div>
            ))}
          </div>
        </Card>

        <div className="relative flex min-h-[340px] items-center justify-center">
          <div className="absolute h-[275px] w-[500px] rounded-full border border-dashed border-[#cfd3d8]" />
          <Card className="relative z-20 flex h-[145px] w-[185px] flex-col items-center justify-center p-4 text-center">
            <IconBadge icon={BrainCircuit} active large />
            <h2 className="mt-2 text-[22px] tracking-[-0.04em]">AI Agent</h2>
            <p className="text-xs text-muted">purpose-built and bounded</p>
          </Card>
          {nodes.map((item) => (
            <Card key={item.title} className={`absolute z-10 w-[140px] p-3 text-center ${item.position}`}>
              <IconBadge icon={item.icon} />
              <h3 className="mt-2 text-[14px] leading-tight tracking-[-0.025em]">{item.title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[1.1fr_1fr] gap-4">
        <QuoteBar>Give the agent capabilities, not blanket access.</QuoteBar>
        <Card className="flex items-center gap-3 p-5 text-[14px] leading-snug text-muted"><Database className="h-5 w-5 shrink-0 text-accent" />AI doesn’t resolve conflicting systems of record by being confident.</Card>
      </div>
    </SlideCanvas>
  );
}

function TransferSlide() {
  const triggers: Array<{ label: string; icon: LucideIcon }> = [
    { label: "Outside authority", icon: ShieldCheck },
    { label: "Conflicting data", icon: Database },
    { label: "High consequence", icon: Zap },
    { label: "System failure", icon: X },
    { label: "Human request", icon: Users },
  ];
  const handoff = ["Objective", "Context", "Checks performed", "Actions attempted", "Reason for escalation", "Decision required"];

  return (
    <SlideCanvas number={7} title="Transfer & Escalation" subtitle="Know when authority ends — and what context must transfer">
      <div className="mt-6 grid grid-cols-[335px_1fr] gap-6">
        <div className="flex flex-col justify-center">
          <div className="text-5xl text-accent">“</div>
          <p className="mt-2 text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.12] tracking-[-0.055em]">A human-in-the-loop design fails if the human has to start the loop over.</p>
          <div className="mt-6 h-px w-full bg-border" />
          <p className="mt-4 text-[clamp(.95rem,1.2vw,1.1rem)] leading-snug text-muted">The goal isn’t zero escalations. The goal is correct escalations.</p>
        </div>

        <div>
          <div className="grid grid-cols-5 gap-3">
            {triggers.map((item) => (
              <Card key={item.label} className="p-3 text-center"><IconBadge icon={item.icon} /><p className="mt-2 text-[13px] leading-tight tracking-[-0.02em]">{item.label}</p></Card>
            ))}
          </div>
          <Card className="mt-5 border-accent p-5 ring-1 ring-accent">
            <div className="flex items-center justify-center gap-3"><IconBadge icon={ClipboardCheck} active /><div><h3 className="text-[22px] tracking-[-0.04em] text-accent">Handoff package</h3><p className="text-xs text-muted">Everything the next authority needs</p></div></div>
            <div className="mt-4 grid grid-cols-6 divide-x divide-border rounded-[16px] border border-border bg-white p-3">
              {handoff.map((item) => <div key={item} className="px-2 text-center text-[11px] leading-tight text-secondary-dark">{item}</div>)}
            </div>
          </Card>
        </div>
      </div>
    </SlideCanvas>
  );
}

function ValueSlide() {
  const buckets: Array<{ title: string; items: string[]; icon: LucideIcon }> = [
    { title: "Business outcome", items: ["Revenue", "Retention", "Cost-to-serve", "Cycle time"], icon: Gauge },
    { title: "Quality", items: ["Correction rate", "Rework", "Exception rate", "Repeat contact"], icon: CheckCircle2 },
    { title: "Risk", items: ["Policy violations", "Unauthorized actions", "Failed transactions", "Customer-impacting errors"], icon: ShieldCheck },
  ];

  return (
    <SlideCanvas number={8} title="How to Measure Real Value" subtitle="Activity is not value">
      <div className="mt-7 grid grid-cols-3 gap-5">
        {buckets.map((bucket) => (
          <Card key={bucket.title} className="min-h-[270px] p-6 text-center">
            <IconBadge icon={bucket.icon} active large />
            <h2 className="mt-4 text-[clamp(1.25rem,1.65vw,1.55rem)] tracking-[-0.045em]">{bucket.title}</h2>
            <div className="mx-auto my-4 h-px w-3/4 bg-border" />
            <ul className="space-y-3 text-left text-[clamp(.85rem,1vw,.98rem)] text-secondary-dark">
              {bucket.items.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-accent" />{item}</li>)}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-5"><QuoteBar support="Time saved only becomes value when the organisation converts it into an outcome.">Productivity isn’t the outcome. Business performance is.</QuoteBar></div>
    </SlideCanvas>
  );
}

function AccountabilitySlide() {
  const layers: Array<{ title: string; body: string; icon: LucideIcon; active?: boolean }> = [
    { title: "Business", body: "Owns the outcome and accepted risk", icon: ShieldCheck, active: true },
    { title: "Operations", body: "Monitoring, intervention, and recovery", icon: Workflow },
    { title: "Product", body: "Permitted actions and boundaries", icon: Target },
    { title: "Model", body: "Performance and limitations", icon: BrainCircuit },
  ];

  return (
    <SlideCanvas number={9} title="Who Is Accountable?" subtitle="Execution can be delegated. Accountability cannot.">
      <div className="mt-7 grid grid-cols-[0.9fr_1.1fr] gap-7">
        <div className="flex flex-col justify-end"><QuoteBar support="Root cause can be distributed. Accountability cannot be anonymous.">Delegating an action to software does not delegate accountability away from the organisation.</QuoteBar></div>
        <div className="flex flex-col gap-3">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <Card key={layer.title} className={`flex items-center gap-4 p-4 ${layer.active ? "border-accent" : ""}`}>
                <div className={`grid h-14 w-14 place-items-center rounded-[16px] ${layer.active ? "bg-accent text-white" : "bg-[#f3f3f3] text-muted"}`}><Icon className="h-6 w-6" /></div>
                <div><h3 className={`text-[clamp(1.15rem,1.45vw,1.4rem)] tracking-[-0.04em] ${layer.active ? "text-accent" : ""}`}>{layer.title}</h3><p className="text-[clamp(.75rem,.95vw,.9rem)] text-muted">{layer.body}</p></div>
                <div className="ml-auto text-3xl font-light text-[#d5d7db]">{index + 1}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </SlideCanvas>
  );
}

function ProductionGateSlide() {
  const questions: Array<{ text: string; icon: LucideIcon }> = [
    { text: "What may it do?", icon: ShieldCheck },
    { text: "What must it never do?", icon: X },
    { text: "How will we know what it did?", icon: FileSearch },
    { text: "What systems may it touch?", icon: Database },
    { text: "When does a person take over?", icon: UserCheck },
    { text: "Who owns the result?", icon: Users },
  ];

  return (
    <SlideCanvas number={10} title="Production-Ready Agent Checklist" subtitle="Six questions every team should answer before granting autonomy">
      <div className="mt-7 grid grid-cols-3 gap-4">
        {questions.map((question, index) => (
          <Card key={question.text} className="flex min-h-[105px] items-center gap-4 p-5">
            <IconBadge icon={question.icon} />
            <div className="h-14 w-px bg-border" />
            <div><div className="mb-1 text-xs uppercase tracking-[0.18em] text-muted">{String(index + 1).padStart(2, "0")}</div><h2 className="text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.05] tracking-[-0.045em]">{question.text}</h2></div>
          </Card>
        ))}
      </div>
      <div className="mt-5"><QuoteBar>If you can’t answer these clearly, you don’t have a <span className="text-accent">governed enterprise agent yet</span>. You have an <span className="text-accent">experiment with access to production</span>.</QuoteBar></div>
    </SlideCanvas>
  );
}

export default function USAIIPresentationApp() {
  const content = usaiiPresentationContent;
  const slides: ReactNode[] = [
    <TitleSlide key="title" />,
    <AgentDefinitionSlide key="agent-definition" />,
    <OperatingModelSlide key="operating-model" />,
    <AuthoritySlide key="authority-ladder" />,
    <EvidenceSlide key="evidence-auditability" />,
    <IntegrationSlide key="enterprise-integration" />,
    <TransferSlide key="transfer-escalation" />,
    <ValueSlide key="value-metrics" />,
    <AccountabilitySlide key="accountability" />,
    <ProductionGateSlide key="production-gate" />,
  ];

  return (
    <PresentationDeck
      dialogId="usaii-slide-toc"
      slides={slides}
      slideTitles={[...content.slideTitles]}
      slideIdOrder={[...content.slideIdOrder]}
      navigation={content.navigation}
    />
  );
}
