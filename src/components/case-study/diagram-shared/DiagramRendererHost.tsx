"use client"

import type { ReactNode } from "react"

import Modal from "@/components/case-study/Modal"
import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion"
import type { Tip } from "@/components/case-study/useModal"
import { useModal } from "@/components/case-study/useModal"

type DiagramRendererContext = {
  activeKey: string | null
  open: (key: string) => void
  toggle: (key: string) => void
  close: () => void
  shouldReduceMotion: boolean
}

type DiagramRendererHostProps = {
  className?: string
  closeOnPointerDown?: boolean
  tooltips: Record<string, Tip>
  children: (context: DiagramRendererContext) => ReactNode
}

export function DiagramRendererHost({
  className,
  closeOnPointerDown = false,
  tooltips,
  children,
}: DiagramRendererHostProps) {
  const { activeKey, open, toggle, close } = useModal()
  const { shouldReduceMotion } = useAdaptiveDiagramMotion()
  const tip = activeKey ? (tooltips[activeKey] ?? null) : null

  return (
    <div className={className} onPointerDown={closeOnPointerDown ? close : undefined}>
      <Modal tip={tip} onClose={close} />
      {children({ activeKey, open, toggle, close, shouldReduceMotion })}
    </div>
  )
}
