import type { LlmDay2026Content } from "@/content/llmday2026";

import { AgentWorkflowBonesDiagram } from "./diagrams/AgentWorkflowBonesDiagram";

type Slides = LlmDay2026Content["slides"];

export function SlideDesignPattern({ slide }: { slide: Slides["designPattern"] }) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex justify-between">
        <h2 className="h2-display">{slide.title}</h2>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <AgentWorkflowBonesDiagram diagram={slide.diagram} />
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

export function SlideClose({ slide }: { slide: Slides["close"] }) {
  return (
    <div className="flex h-full flex-col justify-center space-y-24">
      <div className="space-y-4">
        <h2 className="h2-display text-center">{slide.title}</h2>
        <div className="flex justify-center">
          <div className="h-px w-24 bg-white/20" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-24 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="text-2xl font-light leading-relaxed text-finox-gray">
            {slide.introPrefix} <span className="font-medium text-white">{slide.introHighlight}</span>.
            <br />
            {slide.skillsIntro}
          </p>
          <div className="space-y-6">
            {slide.points.map((item) => (
              <div key={item} className="group flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-finox-slate transition-colors group-hover:bg-white" />
                <span className="text-xl text-finox-gray transition-colors group-hover:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-12 rounded-full bg-white/5 blur-3xl" />
          <div className="relative rounded-[40px] bg-white p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="h-1 w-12 bg-finox-dark/20" />
              <p className="whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-finox-dark">"{slide.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-8">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-finox-gray/40">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-current" />
            {slide.footerLeft}
          </div>
          <div>{slide.footerRight}</div>
        </div>
      </div>
    </div>
  );
}
