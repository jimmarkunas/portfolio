import {
  cn,
  laneMatches,
  type Lane,
  type NodeId,
  type SelectionState,
} from "@/components/case-study/method-migration-flow/methodMigrationModel"

export function getNodeVisualState(id: NodeId, lane: Lane, state: SelectionState) {
  return {
    active: state.activeNode === id,
    dimmed: state.activeLane !== null && !laneMatches(state.activeLane, lane),
  }
}

export function NodeMarker({ active, accent = false }: { active: boolean; accent?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-[4px] top-1/2 z-30 flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C7CBD0] bg-[#FCFCFC]"
    >
      <span
        className={cn(
          "h-[18px] w-[18px] rounded-full border-[4px] border-[#FCFCFC] ring-1 ring-[#AEB3B8] transition-colors duration-150 motion-reduce:transition-none",
          active || accent ? "bg-[#075BFF]" : "bg-[#0F1112]",
        )}
      />
    </span>
  )
}
