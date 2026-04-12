"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";

import ParticleCanvas from "@/components/case-study/ParticleCanvas";
import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion";
import type { InterviewsContent } from "@/content/interviews";

import JiraDiagramCard from "./diagram/JiraDiagramCard";
import JiraDiagramConnectorLayer from "./diagram/JiraDiagramConnectorLayer";
import { slide6DesktopLayoutPreset } from "./diagram/slide6Diagram.layout";
import {
  buildConnectorPoints,
  createNodeMap,
  getDiagramBounds,
  getScaleToFit,
  offsetConnectors,
  offsetNodes,
} from "./diagram/slide6Diagram.utils";

interface Slide6JiraDiagramProps {
  slide: InterviewsContent["slides"]["jiraTickets"];
}

const PARTICLE_COLOR = "243,243,243";
const PARTICLE_SPEED_MULTIPLIER = 0.45;
const PARTICLES_PER_PATH = 4;

function asParticleContainerRef(
  ref: RefObject<HTMLDivElement>,
): RefObject<HTMLElement> {
  return ref as RefObject<HTMLElement>;
}

export default function Slide6JiraDiagram({ slide }: Slide6JiraDiagramProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const { shouldReduceMotion } = useAdaptiveDiagramMotion();

  useEffect(() => {
    const frameEl = frameRef.current;
    if (!frameEl) return;

    const updateSize = () => {
      const rect = frameEl.getBoundingClientRect();
      setFrameSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(frameEl);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const normalizedLayout = useMemo(() => {
    const bounds = getDiagramBounds(slide6DesktopLayoutPreset.nodes, slide6DesktopLayoutPreset.connectors);

    const contentWidth = bounds.width > 0 ? bounds.width : slide6DesktopLayoutPreset.canvas.width;
    const contentHeight = bounds.height > 0 ? bounds.height : slide6DesktopLayoutPreset.canvas.height;
    const offsetX = -bounds.minX;
    const offsetY = -bounds.minY;

    return {
      canvas: {
        width: contentWidth,
        height: contentHeight,
      },
      nodes: offsetNodes(slide6DesktopLayoutPreset.nodes, offsetX, offsetY),
      connectors: offsetConnectors(slide6DesktopLayoutPreset.connectors, offsetX, offsetY),
    };
  }, []);

  const scale = useMemo(
    () =>
      getScaleToFit(
        frameSize.width,
        frameSize.height,
        normalizedLayout.canvas.width,
        normalizedLayout.canvas.height,
      ),
    [frameSize.height, frameSize.width, normalizedLayout.canvas.height, normalizedLayout.canvas.width],
  );

  const scaledWidth = normalizedLayout.canvas.width * scale;
  const scaledHeight = normalizedLayout.canvas.height * scale;

  const particlePaths = useMemo(() => {
    const nodeMap = createNodeMap(normalizedLayout.nodes);
    const pointsByConnectorId = new Map(
      normalizedLayout.connectors.map((connector) => [
        connector.id,
        buildConnectorPoints(connector, nodeMap),
      ]),
    );

    const reversed = (connectorId: string) => {
      const points = pointsByConnectorId.get(connectorId) ?? [];
      return points.length > 1 ? [...points].reverse() : [];
    };

    const combine = (
      sourcePath: Array<{ x: number; y: number }>,
      targetPath: Array<{ x: number; y: number }>,
    ) => {
      if (sourcePath.length < 2 || targetPath.length < 2) {
        return [];
      }

      const lastSourcePoint = sourcePath[sourcePath.length - 1];
      const firstTargetPoint = targetPath[0];
      const skipTargetFirstPoint =
        lastSourcePoint.x === firstTargetPoint.x &&
        lastSourcePoint.y === firstTargetPoint.y;

      return [
        ...sourcePath,
        ...(skipTargetFirstPoint ? targetPath.slice(1) : targetPath),
      ];
    };

    const leftStoryToEpic = reversed("epic-to-story-left");
    const middleStoryToEpic = reversed("epic-to-story-middle");
    const rightStoryToEpic = reversed("epic-to-story-right");

    return [
      combine(reversed("story-left-to-ac-left"), leftStoryToEpic),
      combine(reversed("story-left-to-bug-left"), leftStoryToEpic),
      combine(reversed("story-middle-to-ac-middle"), middleStoryToEpic),
      combine(reversed("story-middle-to-bug-middle"), middleStoryToEpic),
      combine(reversed("story-right-to-ac-right"), rightStoryToEpic),
      combine(reversed("story-right-to-bug-right"), rightStoryToEpic),
    ].filter((path) => path.length > 1);
  }, [normalizedLayout.connectors, normalizedLayout.nodes]);

  return (
    <div className="h-full min-h-0 flex flex-col space-y-8">
      <div className="shrink-0 flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div ref={frameRef} className="relative w-full flex-1 min-h-0 overflow-hidden pt-4">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: scaledWidth, height: scaledHeight }}
        >
          <div
            ref={canvasRef}
            className="relative origin-top-left"
            style={{
              width: normalizedLayout.canvas.width,
              height: normalizedLayout.canvas.height,
              transform: `scale(${scale})`,
            }}
          >
            {shouldReduceMotion ? null : (
              <ParticleCanvas
                paths={particlePaths}
                containerRef={asParticleContainerRef(canvasRef)}
                color={PARTICLE_COLOR}
                speedMultiplier={PARTICLE_SPEED_MULTIPLIER}
                particlesPerPath={PARTICLES_PER_PATH}
              />
            )}

            <JiraDiagramConnectorLayer
              canvas={normalizedLayout.canvas}
              nodes={normalizedLayout.nodes}
              connectors={normalizedLayout.connectors}
            />

            {normalizedLayout.nodes.map((node) => (
              <JiraDiagramCard
                key={node.id}
                node={node}
                typeLabel={slide.diagram.nodeTypes[node.typeLabelKey]}
                bodyLabel={slide.diagram.nodes[node.bodyLabelKey]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
