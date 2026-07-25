"use client"

import { useState } from "react"

import { DiagramShell } from "@/components/case-study/DiagramShell"
import { MethodMigrationDesktop } from "@/components/case-study/method-migration-flow/MethodMigrationDesktop"
import { MethodMigrationMobile } from "@/components/case-study/method-migration-flow/MethodMigrationMobile"
import {
  FRAME_HEIGHT,
  FRAME_WIDTH,
  NODE_META,
  type NodeId,
  type SelectionState,
} from "@/components/case-study/method-migration-flow/methodMigrationModel"

function useDiagramSelection(): SelectionState {
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null)
  const [selectedNode, setSelectedNode] = useState<NodeId | null>(null)
  const activeNode = hoveredNode ?? selectedNode
  const activeLane = activeNode ? NODE_META[activeNode].lane : null

  return {
    activeNode,
    activeLane,
    selectedNode,
    bindNode: (id) => ({
      "aria-pressed": selectedNode === id,
      onBlur: () => setHoveredNode(null),
      onClick: () => setSelectedNode((current) => (current === id ? null : id)),
      onFocus: () => setHoveredNode(id),
      onPointerEnter: () => setHoveredNode(id),
      onPointerLeave: () => setHoveredNode(null),
    }),
  }
}

export default function MethodMigrationFlowDiagram() {
  const state = useDiagramSelection()
  const selectedLabel = state.selectedNode ? NODE_META[state.selectedNode].label : null

  return (
    <section
      aria-labelledby="method-migration-diagram-title"
      aria-describedby="method-migration-diagram-description"
      className="w-full"
    >
      <h1 id="method-migration-diagram-title" className="sr-only">
        Method migration and conversion diagram
      </h1>
      <p id="method-migration-diagram-description" className="sr-only">
        Two connected paths show how SEO protection and conversion growth moved through audit, migration, and conversion to a 20 percent DTC revenue uplift. Focus or select a node to trace its path.
      </p>
      <p aria-live="polite" className="sr-only">
        {selectedLabel ? `${selectedLabel} selected.` : "No diagram node selected."}
      </p>

      <MethodMigrationMobile state={state} />
      <DiagramShell
        className="hidden w-full xl:block"
        desktop={{
          baseWidth: FRAME_WIDTH,
          baseHeight: FRAME_HEIGHT,
          viewportClassName: "w-full",
          viewportInnerClassName: "relative w-full overflow-hidden",
          canvasClassName: "overflow-hidden rounded-[14px] border border-[#AEB3B8] bg-[#FCFCFC]",
          limitScaleToOne: true,
          render: () => <MethodMigrationDesktop state={state} />,
        }}
      />
    </section>
  )
}
