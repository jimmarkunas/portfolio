"use client"

import { useEffect, useRef, useState } from "react"
import type { RefObject, ReactNode } from "react"

import Modal from "@/components/case-study/Modal"
import type { Tip } from "@/components/case-study/useModal"
import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion"

type DiagramRenderContext = {
  canvasRef: RefObject<HTMLDivElement>
  scale: number
  shouldReduceMotion: boolean
}

type DiagramSurface = {
  baseWidth: number
  baseHeight: number
  viewportClassName: string
  viewportInnerClassName?: string
  canvasClassName?: string
  limitScaleToOne?: boolean
  underlay?: ReactNode
  render: (context: DiagramRenderContext) => ReactNode
}

function useScaleToFit(baseWidth: number, limitScaleToOne = true) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return undefined

    const updateScale = () => {
      const next = wrapper.getBoundingClientRect().width / baseWidth
      setScale(limitScaleToOne ? Math.min(1, next) : next)
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [baseWidth, limitScaleToOne])

  return { wrapperRef, scale }
}

type DiagramShellProps = {
  className?: string
  onPointerDown?: () => void
  modalTip?: Tip | null
  onCloseModal?: () => void
  desktop: DiagramSurface
  mobile?: DiagramSurface
}

function ScaledSurface({
  surface,
  shouldReduceMotion,
}: {
  surface: DiagramSurface
  shouldReduceMotion: boolean
}) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const { wrapperRef, scale } = useScaleToFit(surface.baseWidth, surface.limitScaleToOne ?? true)

  return (
    <div className={surface.viewportClassName}>
      <div
        className={surface.viewportInnerClassName ?? "relative w-full overflow-hidden"}
        style={{ height: `${surface.baseHeight * scale}px` }}
      >
        {surface.underlay}

        <div
          ref={wrapperRef}
          className="relative w-full overflow-hidden"
          style={{ height: `${surface.baseHeight * scale}px` }}
        >
          <div
            ref={canvasRef}
            className={surface.canvasClassName}
            style={{
              width: surface.baseWidth,
              height: surface.baseHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              position: "relative",
            }}
          >
            {surface.render({ canvasRef, scale, shouldReduceMotion })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function DiagramShell({
  className,
  onPointerDown,
  modalTip,
  onCloseModal,
  desktop,
  mobile,
}: DiagramShellProps) {
  const { shouldReduceMotion } = useAdaptiveDiagramMotion()

  return (
    <div className={className} onPointerDown={onPointerDown}>
      {onCloseModal ? <Modal tip={modalTip ?? null} onClose={onCloseModal} /> : null}
      {mobile ? <ScaledSurface surface={mobile} shouldReduceMotion={shouldReduceMotion} /> : null}
      <ScaledSurface surface={desktop} shouldReduceMotion={shouldReduceMotion} />
    </div>
  )
}
