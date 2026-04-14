import {
  ArrowRightCircle,
  BarChart3,
  Bot,
  Cpu,
  Database,
  FileText,
  MousePointerClick,
  ShieldCheck,
  User,
  UserCheck,
  Zap,
} from "lucide-react";

import type { LlmDay2026Content } from "@/content/llmday2026";

import { LegacyRevenueFlowDiagram } from "./diagrams/LegacyRevenueFlowDiagram";

type Slides = LlmDay2026Content["slides"];

function DotGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 opacity-20">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
      ))}
    </div>
  );
}

export function SlideClay({ slide }: { slide: Slides["clay"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <DotGrid />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-64 w-64 flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-center shadow-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-finox-gray">{slide.diagram.label}</p>
          <p className="mt-3 text-4xl font-light text-white/80">{slide.diagram.state}</p>
          <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-finox-gray">
            {slide.diagram.description}
          </p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-sm uppercase tracking-widest text-finox-gray">{slide.caption}</p>
      </div>
    </div>
  );
}

const ROLE_ICONS = {
  "role-back-office": FileText,
  "role-field-agents": User,
  "role-home-office": UserCheck,
} as const;

export function SlideSystemArchitecture({
  slide,
}: {
  slide: Slides["systemArchitecture"];
}) {
  return (
    <div className="flex h-full flex-col">
      <h2 className="h2-display">{slide.title}</h2>

      <div className="flex flex-1 items-center">
        <div className="w-full space-y-10">
          <div className="grid gap-10 lg:grid-cols-3">
            {slide.roles.map((role) => {
              const Icon = ROLE_ICONS[role.id as keyof typeof ROLE_ICONS] ?? FileText;
              return (
                <div key={role.id} className="flex flex-col items-center space-y-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{role.title}</h3>
                  <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-[10px] font-bold tracking-widest text-blue-400">
                    {role.tag}
                  </div>
                  <p className="max-w-[260px] text-sm leading-relaxed text-finox-gray">{role.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-10 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-white" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {slide.flowLabel}
              </span>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-8 z-0 hidden h-px w-full bg-white/10 md:block" />
              <div className="relative z-10 grid gap-6 md:grid-cols-5">
                {slide.flowNodes.map((node) => (
                  <div key={node.id} className="flex flex-col items-center">
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold shadow-xl ${
                        node.emphasized
                          ? "bg-white text-finox-dark"
                          : "border border-white/20 bg-finox-dark text-white"
                      }`}
                    >
                      {node.step}
                    </div>
                    <p className="text-sm font-bold">{node.title}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-finox-gray">
                      {node.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlidePlaceholder({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
      <div className="h-px w-24 bg-finox-slate/30" />
      <h2 className="h1-display text-finox-gray/50">{title}</h2>
      <p className="text-xl font-light uppercase tracking-[0.2em] text-finox-gray">{subtitle}</p>
      <div className="h-px w-24 bg-finox-slate/30" />
    </div>
  );
}

function ComplianceStepIcon({ type, index }: { type: "AI AGENT" | "PERSON"; index: number }) {
  if (type === "PERSON") {
    return <MousePointerClick className="h-6 w-6" />;
  }

  const icons = [Bot, ShieldCheck, Zap, Database];
  const Icon = icons[Math.min(index, icons.length - 1)];
  return <Icon className="h-6 w-6" />;
}

export function SlideComplianceWorkflow({
  slide,
}: {
  slide: Slides["complianceWorkflow"];
}) {
  return (
    <div className="flex h-full flex-col space-y-12">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <DotGrid />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full gap-4 lg:grid-cols-5">
          {slide.steps.map((step, index) => {
            const isPerson = step.type === "PERSON";
            return (
              <div key={step.id} className="relative flex flex-col items-center">
                {index < slide.steps.length - 1 && (
                  <div className="absolute -right-6 top-12 z-0 hidden text-white/10 lg:block">
                    <ArrowRightCircle className="h-8 w-8" />
                  </div>
                )}

                <div
                  className={`relative z-10 flex h-full w-full flex-col items-center space-y-4 rounded-3xl border p-6 text-center ${
                    isPerson
                      ? "border-amber-500/30 bg-amber-500/10"
                      : "border-blue-500/20 bg-blue-500/5"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-3 ${
                      isPerson
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    <ComplianceStepIcon type={step.type} index={index} />
                  </div>

                  <div className="space-y-1">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-widest ${
                        isPerson ? "text-amber-400" : "text-blue-400"
                      }`}
                    >
                      {step.type}
                    </p>
                    <h3 className="text-lg font-bold leading-tight">{step.title}</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-finox-gray">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-12 border-t border-white/5 pt-8">
        {slide.legend.map((entry, index) => {
          const dotClass =
            index === 0
              ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              : index === 1
                ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                : "bg-white/20";

          return (
            <div key={entry.id} className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${dotClass}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-finox-gray">
                {entry.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SlideOkGo({ slide }: { slide: Slides["okgo"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <DotGrid />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-80 w-80 flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-10 text-center shadow-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-finox-gray">{slide.diagram.label}</p>
          <p className="mt-4 text-4xl font-light">{slide.diagram.state}</p>
          <p className="mt-5 text-sm leading-relaxed text-finox-gray">
            {slide.diagram.description}
          </p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-finox-gray">{slide.caption}</p>
      </div>
    </div>
  );
}

export function SlideFlowchart({
  slide,
  automated,
  diagramCopy,
}: {
  slide: Slides["flowchartManual"] | Slides["flowchartAutomated"];
  automated: boolean;
  diagramCopy: LlmDay2026Content["diagrams"]["legacyRevenueFlow"];
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LegacyRevenueFlowDiagram automated={automated} diagram={diagramCopy} />
      </div>
    </div>
  );
}

const ENGINE_ICONS = {
  "module-cohorts": User,
  "module-campaign-math": Database,
  "module-stb-push": Zap,
  "module-reporting": FileText,
} as const;

export function SlideDirectvManual({ slide }: { slide: Slides["directvManual"] }) {
  return (
    <div className="flex h-full flex-col space-y-12">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <DotGrid />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slide.modules.map((module) => {
            const Icon = ENGINE_ICONS[module.id as keyof typeof ENGINE_ICONS] ?? FileText;
            return (
              <div
                key={module.id}
                className="group flex flex-col items-center space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-finox-gray transition-colors group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{module.label}</h3>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500">
                        {slide.moduleStatusLabel}
                      </span>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="-mx-12 mt-auto border-t border-white/10 bg-white/5 p-12 text-center">
        <p className="mx-auto max-w-4xl text-2xl font-light italic leading-relaxed text-finox-gray">
          "<span className="not-italic font-medium text-white">{slide.quote}</span>"
        </p>
      </div>
    </div>
  );
}

export function SlideRubeGoldberg({ slide }: { slide: Slides["rubeGoldberg"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light tracking-wide text-finox-gray">{slide.subtitle}</p>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.1),transparent_45%)]" />
        <div className="relative grid max-w-4xl gap-4 px-8 py-10 sm:grid-cols-3">
          {slide.chips.map((chip) => (
            <div key={chip} className="rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-center text-sm text-white/85">
              {chip}
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-finox-gray/40">
          <div className="h-px w-8 bg-current" />
          {slide.caption}
        </div>
      </div>
    </div>
  );
}

function toneClass(tone: Slides["aiAmplified"]["agents"][number]["tone"]) {
  if (tone === "green") return "text-emerald-400";
  if (tone === "violet") return "text-violet-400";
  return "text-blue-400";
}

export function SlideAiAmplified({ slide }: { slide: Slides["aiAmplified"] }) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light tracking-wide text-finox-gray">{slide.subtitle}</p>
      </div>

      <div className="flex flex-1 items-center">
        <div className="grid w-full gap-6 md:grid-cols-3">
          {slide.agents.map((agent) => (
            <div
              key={agent.id}
              className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ${toneClass(agent.tone)}`}>
                {agent.id === "ai-reporting" ? (
                  <BarChart3 className="h-6 w-6" />
                ) : agent.id === "ai-billing-config" ? (
                  <Cpu className="h-6 w-6" />
                ) : (
                  <Bot className="h-6 w-6" />
                )}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight">{agent.title}</h3>
                <p className="text-sm leading-relaxed text-finox-gray">{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-8">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-finox-gray/60">
          <div className="h-px w-12 bg-current" />
          {slide.footer}
        </div>
      </div>
    </div>
  );
}
