import {
  BarChart3,
  Bot,
  Cpu,
  Database,
  FileText,
  MousePointerClick,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";

import type { LlmDay2026Content } from "@/content/llmday2026";

import NylRbacWorkflow from "@/components/case-study/NylRbacWorkflow";
import NylRevenueAttributionChart from "@/components/case-study/NylRevenueAttributionChart";

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
        <img
          src="/interviews/llmday/clay.png"
          alt="Clay slide visual"
          className="h-80 w-80 rounded-3xl border border-white/10 object-cover shadow-2xl"
        />
      </div>

      <div className="pt-4 text-center">
        <p className="text-sm uppercase tracking-widest text-finox-gray">{slide.caption}</p>
      </div>
    </div>
  );
}

export function SlideSystemArchitecture({
  slide,
}: {
  slide: Slides["systemArchitecture"];
}) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <NylRbacWorkflow variant="dark" />
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

export function SlideNylResults({ slide }: { slide: Slides["placeholderTwo"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-[1220px] origin-center scale-[0.9] overflow-hidden rounded-2xl border border-white/10 bg-white">
          <NylRevenueAttributionChart />
        </div>
      </div>
    </div>
  );
}

export function SlideNylPress({ slide }: { slide: Slides["placeholderGeneric"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/interviews/llmday/don-vuo-forbes-01.png"
                alt="Forbes coverage image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-20 lg:mt-16 lg:-ml-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/interviews/llmday/don-vuo-forbes-02.png"
                alt="Forbes coverage image 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
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
    <div className="flex h-full flex-col space-y-6">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-lg font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <DotGrid />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full gap-3 lg:grid-cols-5">
          {slide.steps.map((step, index) => {
            const isPerson = step.type === "PERSON";
            return (
              <div key={step.id} className="relative flex flex-col items-center">
                {index >= 0 && (
                  <div className="absolute -top-5 left-1/2 z-20 hidden -translate-x-1/2 lg:flex">
                    <span
                      className="animate-pulse text-base font-semibold leading-none text-white/75 drop-shadow-[0_0_8px_rgba(255,255,255,0.38)]"
                      style={{
                        animationDelay: `${index * 180}ms`,
                        animationDuration: "1.4s",
                      }}
                    >
                      →
                    </span>
                  </div>
                )}

                <div
                  className={`relative z-10 flex h-full min-h-[238px] w-full flex-col items-center space-y-4 rounded-3xl border p-7 text-center ${
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

      <div className="flex justify-center gap-10 border-t border-white/10 pt-4">
        {slide.legend.map((entry, index) => {
          const dotClass =
            index === 0
              ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              : index === 1
                ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                : "bg-finox-gray shadow-[0_0_8px_rgba(156,163,175,0.55)]";

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
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/qybUFnY7Y8w"
              title="OK Go treadmill video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
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
  if ("bullets" in slide) {
    return (
      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>

        <div className="mt-8 grid flex-1 items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <ul className="w-full space-y-6">
            {slide.bullets.map((bullet, index) => (
              <li
                key={`${slide.id}-bullet-${index}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <span className="mt-0.5 text-2xl font-medium text-finox-gray">{index + 1}.</span>
                <span className="text-[2rem] font-light leading-tight text-white/95">{bullet}</span>
              </li>
            ))}
          </ul>

          {slide.imageSrc ? (
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[340px] rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <img
                  src={slide.imageSrc}
                  alt={slide.imageAlt ?? ""}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

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

export function SlideDtvFunctionalDiagram({
  slide,
}: {
  slide: { title: string; subtitle: string };
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black/20 pt-[15px]">
          <img
            src="/interviews/llmday/dtv-functional-diagram.webp"
            alt="DIRECTV functional diagram"
            className="h-auto w-full object-contain"
          />
        </div>
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
        <div className="grid w-full max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {slide.modules.map((module) => {
            const Icon = ENGINE_ICONS[module.id as keyof typeof ENGINE_ICONS] ?? FileText;
            return (
              <div
                key={module.id}
                className="group flex min-h-[290px] flex-col items-center justify-center space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-finox-gray transition-colors group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[2rem] font-bold tracking-tight leading-tight">{module.label}</h3>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
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
