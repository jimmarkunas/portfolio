import type { LlmDay2026Content } from "@/content/llmday2026";

type AgentWorkflowBonesDiagramProps = {
  diagram: LlmDay2026Content["slides"]["designPattern"]["diagram"];
};

export function AgentWorkflowBonesDiagram({ diagram }: AgentWorkflowBonesDiagramProps) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-5">
        <div className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-finox-gray">{diagram.step01Label}</p>
          <p className="text-xl font-bold">{diagram.step01Title}</p>
        </div>

        <div className="text-center text-finox-gray">↓</div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-8 py-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">{diagram.step02Label}</p>
          <p className="text-xl font-bold text-amber-300">{diagram.step02Title}</p>
          <p className="mt-1 text-xs italic text-amber-200/70">{diagram.step02Subtitle}</p>
        </div>

        <div className="text-center text-finox-gray">↓</div>

        <div className="rounded-2xl border border-white bg-white px-8 py-5 text-center text-finox-dark">
          <p className="text-[10px] uppercase tracking-[0.2em] text-finox-slate">{diagram.step03Label}</p>
          <p className="text-xl font-bold">{diagram.step03Title}</p>
          <p className="mt-1 text-xs text-finox-slate/80">{diagram.step03Subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">{diagram.pathALabel}</p>
            <p className="font-bold text-emerald-300">{diagram.pathATitle}</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/5 p-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-finox-gray">{diagram.pathBLabel}</p>
            <p className="font-bold">{diagram.pathBTitle}</p>
            <p className="mt-1 text-[11px] text-finox-gray/80">{diagram.pathBSubtitle}</p>
          </div>
        </div>

        <div className="text-center text-finox-gray">↓</div>

        <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-8 py-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300/80">{diagram.step04Label}</p>
          <p className="text-xl font-bold text-blue-300">{diagram.step04Title}</p>
          <p className="mt-1 text-xs italic text-blue-200/70">{diagram.step04Subtitle}</p>
        </div>
      </div>

      <div className="space-y-4 self-center">
        {diagram.requirements.map((requirement) => (
          <div key={requirement.id} className="rounded-xl border border-white/15 bg-white/[0.04] p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white">{requirement.label}</p>
            <p className="mt-1 text-sm text-finox-gray">
              <span className="font-semibold text-white">{requirement.lead}</span>
              {requirement.detail}
            </p>
            {requirement.caption ? (
              <p className="text-xs italic text-finox-gray/80">{requirement.caption}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
