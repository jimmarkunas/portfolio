"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";

import { motion } from "motion/react";
import { Cpu, Database, Layers, Server } from "lucide-react";

import ParticleCanvas from "@/components/case-study/ParticleCanvas";
import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion";
import type { InterviewsContent } from "@/content/interviewContent";

interface Slide8ComposableStackProps {
  slide: InterviewsContent["slides"]["composableStack"];
}

interface Size {
  width: number;
  height: number;
}

const CANVAS_SIZE = {
  width: 1160,
  height: 510,
};

const LABEL_WIDTH = 196;
const CARD_WIDTH = 248;
const CARD_HEIGHT = 96;
const CARD_GAP = 26;
const ROW_TOP_START = 18;
const ROW_GAP = 164;
const CARD_START_X = LABEL_WIDTH + 30;

const PARTICLE_COLOR = "243,243,243";
const PARTICLE_SPEED_MULTIPLIER = 0.55;
const PARTICLES_PER_PATH = 2;

const iconMap = {
  Layers,
  Server,
  Database,
  Cpu,
} as const;

function getScaleToFit(container: Size, content: Size): number {
  if (
    container.width <= 0 ||
    container.height <= 0 ||
    content.width <= 0 ||
    content.height <= 0
  ) {
    return 1;
  }

  return Math.min(
    container.width / content.width,
    container.height / content.height,
  );
}

function asParticleContainerRef(
  ref: RefObject<HTMLDivElement>,
): RefObject<HTMLElement> {
  return ref as RefObject<HTMLElement>;
}

export default function Slide8ComposableStack({ slide }: Slide8ComposableStackProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [frameSize, setFrameSize] = useState<Size>({ width: 0, height: 0 });
  const { shouldReduceMotion } = useAdaptiveDiagramMotion();

  useEffect(() => {
    const frameElement = frameRef.current;
    if (!frameElement) return;

    const updateSize = () => {
      const rect = frameElement.getBoundingClientRect();
      setFrameSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(frameElement);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const scale = useMemo(
    () =>
      getScaleToFit(frameSize, {
        width: CANVAS_SIZE.width,
        height: CANVAS_SIZE.height,
      }),
    [frameSize],
  );

  const rowTops = useMemo(
    () => slide.layers.map((_, index) => ROW_TOP_START + (index * ROW_GAP)),
    [slide.layers],
  );

  const connectorPaths = useMemo(() => {
    const paths: Array<Array<{ x: number; y: number }>> = [];

    if (slide.layers.length < 2) {
      return paths;
    }

    for (let rowIndex = 0; rowIndex < slide.layers.length - 1; rowIndex += 1) {
      const sourceRow = slide.layers[rowIndex];
      const targetRow = slide.layers[rowIndex + 1];
      const connectorCount = Math.min(sourceRow.items.length, targetRow.items.length);

      for (let columnIndex = 0; columnIndex < connectorCount; columnIndex += 1) {
        const centerX =
          CARD_START_X +
          (columnIndex * (CARD_WIDTH + CARD_GAP)) +
          (CARD_WIDTH / 2);

        const startY = rowTops[rowIndex] + CARD_HEIGHT + 8;
        const endY = rowTops[rowIndex + 1] - 8;

        paths.push([
          { x: centerX, y: startY },
          { x: centerX, y: endY },
        ]);
      }
    }

    return paths;
  }, [rowTops, slide.layers]);

  const scaledWidth = CANVAS_SIZE.width * scale;
  const scaledHeight = CANVAS_SIZE.height * scale;

  return (
    <div className="h-full min-h-0 flex flex-col space-y-8">
      <div className="shrink-0 flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-12 flex flex-1 min-h-0 flex-col gap-6">
        <div ref={frameRef} className="relative flex-1 min-h-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: scaledWidth, height: scaledHeight }}
          >
            <div
              ref={canvasRef}
              className="relative origin-top-left"
              style={{
                width: CANVAS_SIZE.width,
                height: CANVAS_SIZE.height,
                transform: `scale(${scale})`,
              }}
            >
              {connectorPaths.map((path, index) => {
                const [startPoint, endPoint] = path;

                return (
                  <div
                    key={`connector-${index}`}
                    className="absolute w-px bg-[#F3F3F3]/35"
                    style={{
                      left: startPoint.x,
                      top: startPoint.y,
                      height: Math.max(0, endPoint.y - startPoint.y),
                    }}
                  />
                );
              })}

              {shouldReduceMotion ? null : (
                <ParticleCanvas
                  paths={connectorPaths}
                  containerRef={asParticleContainerRef(canvasRef)}
                  color={PARTICLE_COLOR}
                  speedMultiplier={PARTICLE_SPEED_MULTIPLIER}
                  particlesPerPath={PARTICLES_PER_PATH}
                />
              )}

              {slide.layers.map((layer, layerIndex) => (
                <div
                  key={layer.id}
                  className="absolute left-0 right-0"
                  style={{ top: rowTops[layerIndex] }}
                >
                  <div className="absolute left-0 top-2 w-[186px] text-right">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-finox-gray">
                      Layer {layerIndex + 1}
                    </div>
                    <div className="text-[23px] font-semibold tracking-[-0.02em] text-white">
                      {layer.title}
                    </div>
                  </div>

                  <div
                    className="absolute top-0 flex"
                    style={{ left: CARD_START_X, gap: `${CARD_GAP}px` }}
                  >
                    {layer.items.map((item, itemIndex) => (
                      <motion.div
                        key={`${layer.id}-${itemIndex}`}
                        whileHover={{ y: -4 }}
                        className="relative z-10 flex h-[96px] w-[248px] items-center justify-center rounded-[10px] border border-[#F3F3F3] bg-[#222222] px-4 text-center text-[19px] font-medium leading-tight text-[#F3F3F3] shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-4 gap-5">
          {slide.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Layers;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.06 * index }}
                whileHover={{ y: -4 }}
                className="rounded-[10px] border border-[#F3F3F3] bg-[#222222] p-4"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#F3F3F3] bg-black/20">
                  <Icon className="h-4 w-4 text-[#F3F3F3]" />
                </div>
                <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-finox-gray leading-snug">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
