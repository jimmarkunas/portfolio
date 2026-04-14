import type { LlmDay2026Content } from "@/content/llmday2026";

type LegacyRevenueFlowDiagramProps = {
  automated: boolean;
  diagram: LlmDay2026Content["diagrams"]["legacyRevenueFlow"];
};

function getNodeStyle(automated: boolean, isAutomationTarget: boolean) {
  const automatedNode = automated && isAutomationTarget;

  if (automatedNode) {
    return "border-white bg-zinc-100 text-neutral-900";
  }

  return "border-zinc-100/80 bg-neutral-800 text-white";
}

export function LegacyRevenueFlowDiagram({
  automated,
  diagram,
}: LegacyRevenueFlowDiagramProps) {
  const automationTargetIds = new Set(diagram.automationTargetNodeIds);

  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {diagram.nodes.map((node) => (
          <div
            key={node.id}
            className={`flex min-h-20 items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium leading-tight ${getNodeStyle(
              automated,
              automationTargetIds.has(node.id),
            )}`}
          >
            {node.label}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-finox-gray">
            {diagram.automationLegendTitle}
          </p>
          <p className="mt-1 text-sm text-white/85">
            {diagram.automationLegendDescription}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-finox-gray">{diagram.peopleLegendTitle}</p>
          <p className="mt-1 text-sm text-white/85">
            {diagram.peopleLegendDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
