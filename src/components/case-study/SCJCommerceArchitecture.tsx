"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SCJ_TOOLTIPS } from "./scjDiagramData";
import ParticleCanvas from "./ParticleCanvas";
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

type Box = { left: number; top: number; width: number; height: number };

type ComponentProps = {
  className?: string;
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewport = { once: true, amount: 0.1 } as const;

function useMeasuredNodes(ids: readonly MeasuredNodeId[]) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Partial<Record<MeasuredNodeId, HTMLDivElement | null>>>({});
  const [boxes, setBoxes] = useState<Partial<Record<MeasuredNodeId, Box>>>({});

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const next: Partial<Record<MeasuredNodeId, Box>> = {};
      ids.forEach((id) => {
        const node = nodeRefs.current[id];
        if (!node) return;
        const rect = node.getBoundingClientRect();
        next[id] = {
          left: rect.left - wrapperRect.left,
          top:  rect.top  - wrapperRect.top,
          width:  rect.width,
          height: rect.height,
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
  }, [ids]);

  const setNodeRef = (id: MeasuredNodeId) => (element: HTMLDivElement | null) => {
    nodeRefs.current[id] = element;
  };

  return { wrapperRef, boxes, setNodeRef };
}


// ─── Connectors ──────────────────────────────────────────────────────────────

// ─── Diagrams ─────────────────────────────────────────────────────────────────

function DesktopDiagram({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  const measuredIds = useMemo(
    () => [
      ...SCJ_COMMERCE_NODES.map((n) => n.id),
      ...SCJ_SYSTEM_NODES.map((n) => n.id),
      "api",
    ] as MeasuredNodeId[],
    []
  );

  const { wrapperRef, boxes, setNodeRef } = useMeasuredNodes(measuredIds);

  const particlePaths = useMemo(() => {
    const api = boxes.api;
    if (!api) return [];
    const paths: { x: number; y: number }[][] = [];
    SCJ_COMMERCE_NODES.forEach((node, index) => {
      const topBox    = boxes[node.id];
      const bottomBox = boxes[SCJ_SYSTEM_NODES[index].id];
      if (!topBox || !bottomBox) return;
      const topX    = topBox.left    + topBox.width    / 2;
      const topY    = topBox.top     + topBox.height;
      const bottomX = bottomBox.left + bottomBox.width / 2;
      const bottomY = bottomBox.top;
      paths.push([{ x: topX, y: topY },               { x: topX,    y: api.top            }]);
      paths.push([{ x: bottomX, y: api.top + api.height }, { x: bottomX, y: bottomY }]);
    });
    return paths;
  }, [boxes]);

  return (
    <div className="hidden md:block">
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={shouldReduceMotion ? undefined : staggerParent}
      >
      <div ref={wrapperRef} className="relative">
        {!shouldReduceMotion && particlePaths.length > 0 && (
          <ParticleCanvas paths={particlePaths} containerRef={wrapperRef as React.RefObject<HTMLElement>} />
        )}

        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.div className="w-full" variants={cardVariants} transition={cardTransition}>
            <StorefrontAndCommerceLayers
              toggle={toggle}
              topGridClass="grid grid-cols-3 gap-3 xl:grid-cols-5 xl:gap-5"
              commerceGridClass="grid grid-cols-3 gap-3 xl:grid-cols-6 xl:gap-5"
              setNodeRef={setNodeRef}
            />
          </motion.div>

          <motion.div className="relative w-full px-5 pt-36" variants={cardVariants} transition={cardTransition}>
            <div className="absolute inset-x-0 top-6">
              <ApiLayer nodeRef={setNodeRef("api")} onClick={() => toggle("api")} />
            </div>
            <div className="grid grid-cols-3 gap-3 xl:grid-cols-6 xl:gap-5">
              {SCJ_SYSTEM_NODES.map((node) => (
                <NodeCard
                  key={node.id}
                  label={node.label}
                  icon={<BrandMark brand={node.brand} />}
                  nodeRef={setNodeRef(node.id)}
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

function MobileDiagram({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  return (
    <motion.div
      className="space-y-4 md:hidden"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={shouldReduceMotion ? undefined : staggerParent}
    >
      <motion.div variants={cardVariants} transition={cardTransition}>
        <StorefrontAndCommerceLayers
          toggle={toggle}
          topGridClass="grid grid-cols-2 gap-2.5 sm:grid-cols-2"
          commerceGridClass="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
        />
      </motion.div>

      <motion.div variants={cardVariants} transition={cardTransition}>
        <ApiLayer onClick={() => toggle("api")} />
      </motion.div>

      <motion.div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" variants={cardVariants} transition={cardTransition}>
        {SCJ_SYSTEM_NODES.map((node) => (
          <NodeCard
            key={node.id}
            label={node.label}
            icon={<BrandMark brand={node.brand} />}
            onClick={() => toggle(node.id)}
          />
        ))}
      </motion.div>
    </motion.div>
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
        <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-6 md:py-6 xl:px-8">
          <DesktopDiagram toggle={toggle} shouldReduceMotion={shouldReduceMotion} />
          <MobileDiagram toggle={toggle} shouldReduceMotion={shouldReduceMotion} />
        </div>
      )}
    </DiagramRendererHost>
  );
}
