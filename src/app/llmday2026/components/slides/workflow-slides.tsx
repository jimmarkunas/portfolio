import { AlertTriangle, CheckCircle2, Target, XCircle } from "lucide-react";

import type { LlmDay2026Content } from "@/content/llmday2026";

import { RoiWorkflowDiagram } from "./diagrams/RoiWorkflowDiagram";

type Slides = LlmDay2026Content["slides"];

function StrategyGridHeader({
  title,
  subtitle,
  destructive,
}: {
  title: string;
  subtitle: string;
  destructive?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <div className="space-y-2">
        <div className={`flex items-center gap-3 ${destructive ? "text-red-500" : "text-emerald-500"}`}>
          {destructive ? <AlertTriangle className="h-8 w-8" /> : <Target className="h-8 w-8" />}
          <h2 className="h2-display text-white">{title}</h2>
        </div>
        <p className="text-xl font-light text-finox-gray">{subtitle}</p>
      </div>
      <div className="grid grid-cols-3 gap-1 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${destructive ? "bg-red-500" : "bg-emerald-500"}`}
          />
        ))}
      </div>
    </div>
  );
}

function StrategyCard({
  text,
  destructive,
  className,
}: {
  text: string;
  destructive?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group flex items-center gap-6 rounded-3xl border p-8 transition-colors ${
        destructive
          ? "border-white/10 bg-white/5 hover:border-red-500/20 hover:bg-red-500/5"
          : "border-white/10 bg-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5"
      } ${className ?? ""}`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          destructive ? "bg-red-500/10 text-red-500" : "bg-emerald-500/10 text-emerald-500"
        }`}
      >
        {destructive ? <XCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
      </div>
      <p className="text-lg font-medium leading-relaxed text-finox-gray transition-colors group-hover:text-white">
        {text}
      </p>
    </div>
  );
}

export function SlideDontDoThis({ slide }: { slide: Slides["dontDoThis"] }) {
  return (
    <div className="flex h-full flex-col space-y-12">
      <StrategyGridHeader title={slide.title} subtitle={slide.subtitle} destructive />

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full gap-6 md:grid-cols-2">
          {slide.items.map((item) => (
            <StrategyCard key={item.id} text={item.text} destructive className="min-h-[180px] p-10" />
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-8">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.26em] text-red-500/40">
          <div className="h-px w-12 bg-current" />
          {slide.footer}
        </div>
      </div>
    </div>
  );
}

export function SlideDoThis({ slide }: { slide: Slides["doThis"] }) {
  return (
    <div className="flex h-full flex-col space-y-12">
      <StrategyGridHeader title={slide.title} subtitle={slide.subtitle} />

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full gap-6 md:grid-cols-2">
          {slide.items.map((item) => (
            <StrategyCard key={item.id} text={item.text} className="min-h-[180px] p-10" />
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-8">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.26em] text-emerald-500/40">
          <div className="h-px w-12 bg-current" />
          {slide.footer}
        </div>
      </div>
    </div>
  );
}

export function SlideHowToDoThis({ slide }: { slide: Slides["howToDoThis"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="flex flex-1 items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.62fr_0.78fr]">
          <div className="min-w-0">
            <RoiWorkflowDiagram />
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-finox-gray/70">
              Workflow Brief
            </p>
            <h3 className="mt-3 text-2xl font-medium leading-tight text-white">
              {slide.explainerTitle}
            </h3>
            <div className="mt-5 space-y-4">
              {slide.explainerPoints.map((point, index) => (
                <p key={`${slide.id}-explain-${index}`} className="text-sm leading-relaxed text-finox-gray">
                  {point}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-8">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-finox-gray/40">
          <div className="h-px w-12 bg-current" />
          {slide.footer}
        </div>
      </div>
    </div>
  );
}

export function SlideExamplesIntro({ slide }: { slide: Slides["examplesIntro"] }) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
      <div className="h-px w-24 bg-finox-gray" />
      <h2 className="h1-display">{slide.title}</h2>
      <p className="max-w-4xl text-3xl font-light leading-tight text-finox-gray">
        {slide.line}
        <br />
        <span className="text-xl tracking-wide text-white/60">{slide.subline}</span>
      </p>
      <div className="h-px w-24 bg-finox-gray" />
    </div>
  );
}
