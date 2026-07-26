"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SCJ_TOOLTIPS } from "./scjDiagramData";
import { DiagramRendererHost } from "@/components/case-study/diagram-shared/DiagramRendererHost";
import {
  SCJ_COMMERCE_NODES,
  SCJ_SYSTEM_NODES,
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

const SCJ_DESKTOP_CANVAS_WIDTH = 1440;
type ScjRoute = {
  id: string
  points: readonly { x: number; y: number }[]
  direction: "up" | "down"
}

const SCJ_CANVAS_HEIGHT = 743
const SCJ_DOT_DURATION = 2666.625
const SCJ_DOT_RADIUS = 4.5
const SCJ_DOT_COLOR = "#447ACB"
const SCJ_DOT_PHASES = [0] as const
const SCJ_DOT_FADE_WINDOW = 0.08

const SCJ_ROUTES: readonly ScjRoute[] = [
  {
    id: "combined-api-left",
    direction: "down",
    points: [
      { x: 705.5, y: 442 },
      { x: 705.5, y: 488 },
    ],
  },
  {
    id: "combined-api-right",
    direction: "up",
    points: [
      { x: 735.5, y: 442 },
      { x: 735.5, y: 488 },
    ],
  },
  {
    id: "erp-left",
    direction: "down",
    points: [
      { x: 140.5, y: 550 },
      { x: 140.5, y: 608 },
    ],
  },
  {
    id: "erp-right",
    direction: "up",
    points: [
      { x: 170.5, y: 550 },
      { x: 170.5, y: 608 },
    ],
  },
  {
    id: "oms-left",
    direction: "down",
    points: [
      { x: 366.5, y: 550 },
      { x: 366.5, y: 608 },
    ],
  },
  {
    id: "oms-right",
    direction: "up",
    points: [
      { x: 396.5, y: 550 },
      { x: 396.5, y: 608 },
    ],
  },
  {
    id: "pim",
    direction: "up",
    points: [
      { x: 607.5, y: 550 },
      { x: 607.5, y: 608 },
    ],
  },
  {
    id: "esp-left",
    direction: "down",
    points: [
      { x: 818.5, y: 550 },
      { x: 818.5, y: 608 },
    ],
  },
  {
    id: "esp-right",
    direction: "up",
    points: [
      { x: 848.5, y: 550 },
      { x: 848.5, y: 608 },
    ],
  },
  {
    id: "cms",
    direction: "up",
    points: [
      { x: 1059.5, y: 550 },
      { x: 1059.5, y: 608 },
    ],
  },
  {
    id: "analytics",
    direction: "down",
    points: [
      { x: 1285.5, y: 550 },
      { x: 1285.5, y: 608 },
    ],
  },
] as const

function pointAlongRoute(
  route: readonly { x: number; y: number }[],
  progress: number,
) {
  const lengths = route.slice(1).map((point, index) =>
    Math.hypot(point.x - route[index].x, point.y - route[index].y),
  )

  const total = lengths.reduce((sum, length) => sum + length, 0)
  let distance = progress * total

  for (let index = 0; index < lengths.length; index += 1) {
    const segmentLength = lengths[index]

    if (distance <= segmentLength) {
      const start = route[index]
      const end = route[index + 1]
      const ratio = segmentLength === 0 ? 0 : distance / segmentLength

      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      }
    }

    distance -= segmentLength
  }

  return route[route.length - 1]
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewport = { once: true, amount: 0.1 } as const;

// ─── Diagrams ─────────────────────────────────────────────────────────────────

function DesktopDiagram({
  toggle,
  shouldReduceMotion,
}: {
  toggle: (key: string) => void
  shouldReduceMotion: boolean
}) {
  return (
    <div>
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={shouldReduceMotion ? undefined : staggerParent}
      >
      <div className="relative">
        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.div className="w-full" variants={cardVariants} transition={cardTransition}>
            <StorefrontAndCommerceLayers
              toggle={toggle}
              topGridClass="grid grid-cols-5 gap-5"
              commerceGridClass="grid grid-cols-6 gap-5"
            />
          </motion.div>

          <motion.div className="relative w-full px-5 pt-36" variants={cardVariants} transition={cardTransition}>
            <div className="absolute inset-x-0 top-6">
              <ApiLayer onClick={() => toggle("api")} />
            </div>
            <div className="grid grid-cols-6 gap-5">
              {SCJ_SYSTEM_NODES.map((node) => (
                <NodeCard
                  key={node.id}
                  label={node.label}
                  icon={<BrandMark brand={node.brand} />}
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
  const [connectorProgress, setConnectorProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      setConnectorProgress(
        ((now - startedAt) % SCJ_DOT_DURATION) / SCJ_DOT_DURATION,
      );

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [shouldReduceMotion]);

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
  const connectorDots = shouldReduceMotion
    ? []
    : SCJ_ROUTES.flatMap((route) =>
        SCJ_DOT_PHASES.map((phase, index) => {
          const phasedProgress = (connectorProgress + phase) % 1
          const routeProgress = route.direction === "up"
            ? 1 - phasedProgress
            : phasedProgress
          const opacity = routeProgress < SCJ_DOT_FADE_WINDOW
            ? routeProgress / SCJ_DOT_FADE_WINDOW
            : routeProgress > 1 - SCJ_DOT_FADE_WINDOW
              ? (1 - routeProgress) / SCJ_DOT_FADE_WINDOW
              : 1

          return {
            key: `${route.id}-dot-${index}`,
            opacity,
            ...pointAlongRoute(route.points, routeProgress),
          }
        }),
      );

  return (
    <div ref={frameRef} className="relative w-full overflow-hidden" style={{ height: scaledHeight || undefined }}>
      <div
        ref={canvasRef}
        className="absolute left-0 top-0 w-[1440px] origin-top-left px-8 py-6"
        style={{ transform: `scale(${scale})`, left: canvasLeft }}
      >
        <svg
          className="pointer-events-none absolute inset-0 z-0"
          width={SCJ_DESKTOP_CANVAS_WIDTH}
          height={SCJ_CANVAS_HEIGHT}
          viewBox={`0 0 ${SCJ_DESKTOP_CANVAS_WIDTH} ${SCJ_CANVAS_HEIGHT}`}
          aria-hidden="true"
          fill="none"
        >
          {SCJ_ROUTES.map((route) => (
            <path
              key={route.id}
              d={`M ${route.points.map((point) => `${point.x} ${point.y}`).join(" L ")}`}
              stroke="#959595"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              shapeRendering="crispEdges"
            />
          ))}

          {connectorDots.map((dot) => (
            <circle
              key={dot.key}
              cx={dot.x}
              cy={dot.y}
              r={SCJ_DOT_RADIUS}
              fill={SCJ_DOT_COLOR}
              opacity={dot.opacity}
            />
          ))}
        </svg>

        <DesktopDiagram
          toggle={toggle}
          shouldReduceMotion={shouldReduceMotion}
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
