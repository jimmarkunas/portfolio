"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";

import ParticleCanvas from "@/components/case-study/ParticleCanvas";
import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion";
import { useModal } from "@/components/case-study/useModal";

import type { InterviewsContent } from "@/content/interviewContent";

import DiagramCard from "./diagram/DiagramCard";
import DiagramConnectorLayer from "./diagram/DiagramConnectorLayer";
import DiagramLegend from "./diagram/DiagramLegend";
import Slide5TooltipModal from "./diagram/Slide5TooltipModal";
import { slide5DesktopLayoutPreset } from "./diagram/slide5Diagram.layout";
import type { Slide5AnimationTheme } from "./diagram/slide5Diagram.types";
import {
  buildConnectorPoints,
  createNodeMap,
  getDiagramBounds,
  getScaleToFit,
  offsetConnectors,
  offsetNodes,
  offsetZones,
} from "./diagram/slide5Diagram.utils";

const DEFAULT_THEME: Slide5AnimationTheme = {
  particleColor: "243,243,243",
  particleSpeedMultiplier: 1,
  particlesPerPath: 2,
  dashedBorderColor: "#F3F3F3",
  dashedBorderWidth: 1.5,
  dashedBorderDasharray: "7 5",
  dashedBorderOpacity: 0.86,
  dashedBorderRadius: 16,
  dashedBorderInset: 6,
  dashedBorderDurationSeconds: 180,
  tooltip: {
    overlayColor: "rgba(0,0,0,0.18)",
    backgroundColor: "#FFFFFF",
    borderColor: "#E9E9E9",
    shadow: "0 24px 56px rgba(0,0,0,0.18)",
    labelColor: "#999999",
    titleColor: "#222222",
    dividerColor: "#E5E5E5",
    bodyColor: "#666666",
    closeBorderColor: "#DDDDDD",
    closeColor: "#777777",
  },
};

const EXECUTION_DASHED_BOX_NODE_PADDING = 24;

const REVERSED_PARTICLE_CONNECTOR_IDS = new Set([
  "execution-bottom",
  "execution-left-column",
  "execution-to-delivery-bottom",
]);

function asParticleContainerRef(
  ref: RefObject<HTMLDivElement>,
): RefObject<HTMLElement> {
  return ref as RefObject<HTMLElement>;
}

interface Slide5HybridDiagramProps {
  slide: InterviewsContent["slides"]["hybridAgile"];
}

export default function Slide5HybridDiagram({ slide }: Slide5HybridDiagramProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const { shouldReduceMotion } = useAdaptiveDiagramMotion();
  const { activeKey, toggle, close } = useModal();

  const activeThemeOverrides = useMemo(
    () =>
      slide.themes && slide.themePreset
        ? slide.themes[slide.themePreset]
        : (slide.theme ?? {}),
    [slide.theme, slide.themePreset, slide.themes],
  );

  const theme = useMemo<Slide5AnimationTheme>(() => {
    return {
      ...DEFAULT_THEME,
      ...activeThemeOverrides,
      tooltip: {
        ...DEFAULT_THEME.tooltip,
        ...(activeThemeOverrides.tooltip ?? {}),
      },
    };
  }, [activeThemeOverrides]);

  const activeTip = activeKey
    ? slide.tooltips[activeKey as keyof typeof slide.tooltips] ?? null
    : null;

  useEffect(() => {
    const frameEl = frameRef.current;
    if (!frameEl || activeTip) return;

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
  }, [activeTip]);

  const normalizedLayout = useMemo(() => {
    const bounds = getDiagramBounds(
      slide5DesktopLayoutPreset.zones,
      slide5DesktopLayoutPreset.nodes,
      slide5DesktopLayoutPreset.connectors,
    );

    const canvasWidth = bounds.width > 0 ? bounds.width : slide5DesktopLayoutPreset.canvas.width;
    const canvasHeight = bounds.height > 0 ? bounds.height : slide5DesktopLayoutPreset.canvas.height;
    const offsetX = -bounds.minX;
    const offsetY = -bounds.minY;

    return {
      canvas: {
        width: canvasWidth,
        height: canvasHeight,
      },
      zones: offsetZones(slide5DesktopLayoutPreset.zones, offsetX, offsetY),
      nodes: offsetNodes(slide5DesktopLayoutPreset.nodes, offsetX, offsetY),
      connectors: offsetConnectors(slide5DesktopLayoutPreset.connectors, offsetX, offsetY),
    };
  }, []);

  const executionNodeBounds = useMemo(() => {
    const executionNodes = normalizedLayout.nodes.filter((node) =>
      node.id.startsWith("execution-"),
    );

    if (executionNodes.length === 0) {
      return null;
    }

    return executionNodes.reduce(
      (acc, node) => ({
        minY: Math.min(acc.minY, node.y),
        maxY: Math.max(acc.maxY, node.y + node.h),
      }),
      {
        minY: Number.POSITIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY,
      },
    );
  }, [normalizedLayout.nodes]);

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

  const motionScale = useMemo(() => {
    if (!Number.isFinite(scale) || scale <= 0) {
      return 1;
    }

    return Math.min(1.35, Math.max(0.8, scale));
  }, [scale]);

  const adaptiveParticleSpeedMultiplier = useMemo(
    () => theme.particleSpeedMultiplier / motionScale,
    [motionScale, theme.particleSpeedMultiplier],
  );

  const adaptiveDashDurationSeconds = useMemo(
    () => theme.dashedBorderDurationSeconds * motionScale,
    [motionScale, theme.dashedBorderDurationSeconds],
  );

  const connectorParticlePaths = useMemo(() => {
    const nodeMap = createNodeMap(normalizedLayout.nodes);
    return normalizedLayout.connectors.flatMap((connector) => {
      const points = buildConnectorPoints(connector, nodeMap);

      if (points.length < 2) {
        return [];
      }

      if (REVERSED_PARTICLE_CONNECTOR_IDS.has(connector.id)) {
        return [[...points].reverse()];
      }

      return [points];
    });
  }, [normalizedLayout.connectors, normalizedLayout.nodes]);

  const scaledCanvasWidth = normalizedLayout.canvas.width * scale;
  const scaledCanvasHeight = normalizedLayout.canvas.height * scale;

  return (
    <div className="h-full min-h-0 flex flex-col space-y-8">
      <Slide5TooltipModal
        tip={activeTip}
        onClose={close}
        shouldReduceMotion={shouldReduceMotion}
        theme={theme.tooltip}
      />

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
          style={{
            width: scaledCanvasWidth,
            height: scaledCanvasHeight,
          }}
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
            {normalizedLayout.zones.map((zone) => {
              const defaultBorderTop = zone.labelHeight;
              const defaultBorderHeight = Math.max(0, zone.h - zone.labelHeight);

              let borderTop = defaultBorderTop;
              let borderHeight = defaultBorderHeight;

              if (zone.id === "execution" && executionNodeBounds) {
                const desiredTop =
                  executionNodeBounds.minY - zone.y - EXECUTION_DASHED_BOX_NODE_PADDING;
                const desiredBottom =
                  executionNodeBounds.maxY - zone.y + EXECUTION_DASHED_BOX_NODE_PADDING;

                borderTop = Math.max(zone.labelHeight, desiredTop);
                borderHeight = Math.max(0, desiredBottom - borderTop);
                borderHeight = Math.min(borderHeight, zone.h - borderTop);
              }

              const showAnimatedDashedBorder =
                zone.border?.style === "dashed" && borderHeight > 0;
              const dashTravelDistance = (zone.w + borderHeight) * 2;

              return (
                <div
                  key={zone.id}
                  className="absolute"
                  style={{ left: zone.x, top: zone.y, width: zone.w, height: zone.h }}
                >
                  {zone.border ? (
                    showAnimatedDashedBorder ? (
                      <svg
                        className="pointer-events-none absolute left-0"
                        style={{
                          top: borderTop,
                          width: zone.w,
                          height: borderHeight,
                          overflow: "visible",
                        }}
                      >
                        <rect
                          x={-theme.dashedBorderInset}
                          y={-theme.dashedBorderInset}
                          width={zone.w + theme.dashedBorderInset * 2}
                          height={borderHeight + theme.dashedBorderInset * 2}
                          rx={theme.dashedBorderRadius}
                          fill="none"
                          stroke={theme.dashedBorderColor}
                          strokeWidth={theme.dashedBorderWidth}
                          strokeDasharray={theme.dashedBorderDasharray}
                          opacity={theme.dashedBorderOpacity}
                        >
                          {shouldReduceMotion ? null : (
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to={`-${Math.round(dashTravelDistance)}`}
                              dur={`${adaptiveDashDurationSeconds}s`}
                              repeatCount="indefinite"
                            />
                          )}
                        </rect>
                      </svg>
                    ) : (
                      <div
                        className="absolute bottom-0 left-0 right-0"
                        style={{
                          top: borderTop,
                          borderStyle: zone.border.style,
                          borderWidth: zone.border.width,
                          borderColor: zone.border.color,
                          borderRadius: zone.border.radius ?? 0,
                        }}
                      />
                    )
                  ) : null}

                  <div
                    className="absolute left-0 top-0 flex items-center justify-center"
                    style={{ width: zone.w, height: zone.labelHeight }}
                  >
                    <h3 className="text-center text-2xl font-semibold text-zinc-100">
                      {slide.diagram.zones[zone.labelKey]}
                    </h3>
                  </div>
                </div>
              );
            })}

            <DiagramConnectorLayer
              canvas={normalizedLayout.canvas}
              nodes={normalizedLayout.nodes}
              connectors={normalizedLayout.connectors}
            />

            {shouldReduceMotion ? null : (
              <ParticleCanvas
                paths={connectorParticlePaths}
                containerRef={asParticleContainerRef(canvasRef)}
                color={theme.particleColor}
                speedMultiplier={adaptiveParticleSpeedMultiplier}
                particlesPerPath={theme.particlesPerPath}
              />
            )}

            {normalizedLayout.nodes.map((node) => (
              <DiagramCard
                key={node.id}
                node={node}
                label={slide.diagram.nodes[node.labelKey]}
                isActive={activeKey === node.id}
                onActivate={() => toggle(node.id)}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 z-40">
          <DiagramLegend
            legend={slide5DesktopLayoutPreset.legend}
            labels={slide.diagram.legend}
          />
        </div>
      </div>
    </div>
  );
}
