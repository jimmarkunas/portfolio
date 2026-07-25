"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SCJ_TOOLTIPS } from "./scjDiagramData";
import { DiagramRendererHost } from "@/components/case-study/diagram-shared/DiagramRendererHost";
import {
  SCJ_COMMERCE_NODES,
  SCJ_SYSTEM_NODES,
  type MeasuredNodeId,
} from "@/components/case-study/diagram-config/scj-architecture.config";
import {
  ApiLayer,
  BrandMark,
  NodeCard,
  StorefrontAndCommerceLayers,
  cn,
} from "@/components/case-study/diagram-shared/SCJDiagramPrimitives";

type ComponentProps = {
  className?: string;
};

type Box = { left: number; top: number; width: number; height: number };
const SCJ_DESKTOP_CANVAS_WIDTH = 1440;

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewport = { once: true, amount: 0.1 } as const;

function useMeasuredNodes(ids: readonly MeasuredNodeId[], diagramScale: number) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Partial<Record<MeasuredNodeId, HTMLDivElement | null>>>({});
  const [boxes, setBoxes] = useState<Partial<Record<MeasuredNodeId, Box>>>({});

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const safeScale = diagramScale > 0 ? diagramScale : 1;
      const next: Partial<Record<MeasuredNodeId, Box>> = {};
      ids.forEach((id) => {
        const node = nodeRefs.current[id];
        if (!node) return;
        const rect = node.getBoundingClientRect();
        next[id] = {
          left: (rect.left - wrapperRect.left) / safeScale,
          top: (rect.top - wrapperRect.top) / safeScale,
          width: rect.width / safeScale,
          height: rect.height / safeScale,
        };
      });
      setBoxes(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    ids.forEach((id) => {
      const node = nodeRefs.current[id];
      if (node) observer.observe(node);
    });
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ids, diagramScale]);

  const setNodeRef = (id: MeasuredNodeId) => (element: HTMLDivElement | null) => {
    nodeRefs.current[id] = element;
  };

  return { wrapperRef, boxes, setNodeRef };
}

// ─── Diagrams ─────────────────────────────────────────────────────────────────

function DesktopDiagram({
  toggle,
  shouldReduceMotion,
  diagramScale,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
  diagramScale: number
}) {
  const measuredIds = useMemo(
    () => [
      ...SCJ_COMMERCE_NODES.map((n) => n.id),
      ...SCJ_SYSTEM_NODES.map((n) => n.id),
      "api",
    ] as MeasuredNodeId[],
    []
  );

  const { wrapperRef, boxes, setNodeRef } = useMeasuredNodes(measuredIds, diagramScale);

  const enterpriseRails = useMemo(() => {
    const api = boxes.api;
    if (!api) return [];
    const apiBottom = api.top + api.height;
    const systemRails = SCJ_SYSTEM_NODES.flatMap((node) => {
      const systemBox = boxes[node.id];
      if (!systemBox) return [];
      const systemTop = systemBox.top;
      const centerX = systemBox.left + systemBox.width / 2;
      const xs = node.id === "erp" || node.id === "oms" || node.id === "esp" ? [
        { id: `${node.id}-left`, x: centerX - 15 },
        { id: `${node.id}-right`, x: centerX + 15 },
      ] : [{ id: node.id, x: centerX }];
      return xs.map((rail) => ({ id: rail.id, x: rail.x, top: apiBottom - 1, bottom: systemTop + 1 }));
    });
    return systemRails;
  }, [boxes]);

  return (
    <div>
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={shouldReduceMotion ? undefined : staggerParent}
      >
      <div ref={wrapperRef} className="relative">
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" aria-hidden="true">
          {enterpriseRails.map((rail) => (
            <line
              key={rail.id}
              x1={Math.round(rail.x) + 0.5}
              y1={Math.round(rail.top)}
              x2={Math.round(rail.x) + 0.5}
              y2={Math.round(rail.bottom)}
              stroke="#959595"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              shapeRendering="crispEdges"
            />
          ))}
        </svg>

        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.div className="w-full" variants={cardVariants} transition={cardTransition}>
            <StorefrontAndCommerceLayers
              toggle={toggle}
              topGridClass="grid grid-cols-5 gap-5"
              commerceGridClass="grid grid-cols-6 gap-5"
              setNodeRef={setNodeRef}
            />
          </motion.div>

          <motion.div className="relative w-full px-5 pt-36" variants={cardVariants} transition={cardTransition}>
            <div className="absolute inset-x-0 top-6">
              <ApiLayer nodeRef={setNodeRef("api")} onClick={() => toggle("api")} />
            </div>
            <div className="grid grid-cols-6 gap-5">
              {SCJ_SYSTEM_NODES.map((node) => (
                <NodeCard
                  key={node.id}
                  label={node.label}
                  icon={<BrandMark brand={node.brand} />}
                  nodeRef={setNodeRef(node.id)}
                  centerLabel
                  onClick={() => toggle(node.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

function ScaledDesktopDiagram({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [availableWidth, setAvailableWidth] = useState(SCJ_DESKTOP_CANVAS_WIDTH);
  const [naturalHeight, setNaturalHeight] = useState(0);

  useEffect(() => {
    const frame = frameRef.current;
    const canvas = canvasRef.current;
    if (!frame || !canvas) return;

    const update = () => {
      setAvailableWidth(frame.clientWidth);
      setNaturalHeight(canvas.scrollHeight);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    observer.observe(canvas);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const scale = Math.min(1, availableWidth / SCJ_DESKTOP_CANVAS_WIDTH);
  const scaledWidth = SCJ_DESKTOP_CANVAS_WIDTH * scale;
  const canvasLeft = Math.max(0, (availableWidth - scaledWidth) / 2);
  const scaledHeight = naturalHeight * scale;

  return (
    <div ref={frameRef} className="relative w-full overflow-hidden" style={{ height: scaledHeight || undefined }}>
      <div
        ref={canvasRef}
        className="absolute left-0 top-0 w-[1440px] origin-top-left px-8 py-6"
        style={{ transform: `scale(${scale})`, left: canvasLeft }}
      >
        <DesktopDiagram
          toggle={toggle}
          shouldReduceMotion={shouldReduceMotion}
          diagramScale={scale}
        />
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function SCJCommerceArchitecture({ className }: ComponentProps) {
  return (
    <DiagramRendererHost
      className={cn("w-full bg-transparent text-[#222222]", className)}
      tooltips={SCJ_TOOLTIPS}
    >
      {({ toggle, shouldReduceMotion }) => (
        <div className="mx-auto w-full max-w-[1440px]">
          <ScaledDesktopDiagram toggle={toggle} shouldReduceMotion={shouldReduceMotion} />
        </div>
      )}
    </DiagramRendererHost>
  );
}
