import type { LlmDay2026Content } from "@/content/llmday2026";

type RoiWorkflowDiagramProps = {
  slide: LlmDay2026Content["slides"]["howToDoThis"];
};

function ColumnLabel({ label }: { label: string }) {
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-finox-gray">
      {label}
    </div>
  );
}

function PlatformCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-blue-400/30 bg-[#1e4b8a] px-5 py-4 shadow-lg">
      <p className="text-lg font-semibold leading-tight text-white">{title}</p>
      <p className="mt-1 text-sm text-blue-200/70">{subtitle}</p>
    </div>
  );
}

function AgentCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-amber-400/30 bg-[#7c4a15] px-5 py-4 text-center shadow-lg">
      <p className="text-lg font-semibold leading-tight text-amber-300">{title}</p>
      <p className="mt-1 text-sm text-amber-100/70">{subtitle}</p>
    </div>
  );
}

function OutputCard({
  title,
  subtitle,
  success,
}: {
  title: string;
  subtitle: string;
  success?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-5 py-4 shadow-lg ${
        success
          ? "border-emerald-400/30 bg-[#064e3b]"
          : "border-white/15 bg-[#2d2d2d]"
      }`}
    >
      <p
        className={`text-lg font-semibold leading-tight ${
          success ? "text-emerald-300" : "text-finox-gray"
        }`}
      >
        {title}
      </p>
      <p className={`mt-1 text-sm ${success ? "text-emerald-100/70" : "text-finox-gray/70"}`}>
        {subtitle}
      </p>
    </div>
  );
}

export function RoiWorkflowDiagram({ slide }: RoiWorkflowDiagramProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-10">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_auto_1.3fr_auto_1.1fr]">
        <div className="space-y-4">
          <ColumnLabel label={slide.diagram.platformColumnLabel} />
          <div className="space-y-4">
            {slide.platformCards.map((card) => (
              <PlatformCard key={card.id} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <div className="h-[70%] w-px bg-white/10" />
        </div>

        <div className="space-y-4">
          <ColumnLabel label={slide.diagram.agentColumnLabel} />
          <div className="space-y-4">
            {slide.agentCards.map((card) => (
              <AgentCard key={card.id} title={card.title} subtitle={card.subtitle} />
            ))}
            <div className="rounded-xl border border-amber-500/40 border-dashed px-3 py-2 text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300/85">
                {slide.guardrailLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <div className="h-[70%] w-px bg-white/10" />
        </div>

        <div className="space-y-4">
          <ColumnLabel label={slide.diagram.outputColumnLabel} />
          <div className="space-y-4 pt-6 lg:pt-12">
            <OutputCard
              title={slide.outputCards[0].title}
              subtitle={slide.outputCards[0].subtitle}
              success
            />
            <OutputCard
              title={slide.outputCards[1].title}
              subtitle={slide.outputCards[1].subtitle}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center text-center">
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">
          {slide.diagram.outcomeLabel}
        </div>
      </div>
    </div>
  );
}
