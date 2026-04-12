"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { InterviewsContent } from "@/content/interviewContent";

interface Slide7RiskLandscapeProps {
  slide: InterviewsContent["slides"]["riskLandscape"];
}

interface Size {
  width: number;
  height: number;
}

const COLUMN_CANVAS = {
  width: 760,
  height: 420,
};

const MATRIX_CANVAS = {
  width: 680,
  height: 680,
  graphLeft: 72,
  graphTop: 78,
  graphRight: 64,
  graphBottom: 80,
};

const MATRIX_SCALE_CAP = 0.83;

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

function useFrameSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return { ref, size };
}

export default function Slide7RiskLandscape({ slide }: Slide7RiskLandscapeProps) {
  const columnsFrame = useFrameSize<HTMLDivElement>();
  const matrixFrame = useFrameSize<HTMLDivElement>();

  const columnsScale = useMemo(
    () => getScaleToFit(columnsFrame.size, COLUMN_CANVAS),
    [columnsFrame.size],
  );

  const matrixTopAlignedWithColumns = useMemo(() => {
    const frameHeight = matrixFrame.size.height;
    if (frameHeight <= 0) {
      return 0;
    }

    const columnsRenderedHeight = COLUMN_CANVAS.height * columnsScale;
    return Math.max(0, (frameHeight - columnsRenderedHeight) / 2);
  }, [columnsScale, matrixFrame.size.height]);

  const matrixScale = useMemo(() => {
    const fittedByFrame = getScaleToFit(matrixFrame.size, MATRIX_CANVAS);

    if (matrixFrame.size.height <= 0) {
      return Math.min(fittedByFrame, MATRIX_SCALE_CAP);
    }

    const availableHeight = Math.max(
      0,
      matrixFrame.size.height - matrixTopAlignedWithColumns,
    );
    const fittedByRemainingHeight = availableHeight / MATRIX_CANVAS.height;

    return Math.min(
      fittedByFrame,
      MATRIX_SCALE_CAP,
      fittedByRemainingHeight,
    );
  }, [matrixFrame.size, matrixTopAlignedWithColumns]);

  const matrixGraph = useMemo(() => {
    const width =
      MATRIX_CANVAS.width - MATRIX_CANVAS.graphLeft - MATRIX_CANVAS.graphRight;
    const height =
      MATRIX_CANVAS.height - MATRIX_CANVAS.graphTop - MATRIX_CANVAS.graphBottom;

    return {
      width,
      height,
    };
  }, []);

  return (
    <div className="h-full min-h-0 w-full flex flex-col">
      <div className="shrink-0 flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-12 grid flex-1 min-h-0 grid-cols-[1.16fr_0.94fr] gap-8 pr-12">
        <div ref={columnsFrame.ref} className="relative h-full min-h-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: COLUMN_CANVAS.width * columnsScale,
              height: COLUMN_CANVAS.height * columnsScale,
            }}
          >
            <div
              className="relative origin-top-left"
              style={{
                width: COLUMN_CANVAS.width,
                height: COLUMN_CANVAS.height,
                transform: `scale(${columnsScale})`,
              }}
            >
              {slide.columns.map((column, columnIndex) => {
                const x = columnIndex * 188;
                return (
                  <div
                    key={column.id}
                    className="absolute"
                    style={{ left: x, top: 0, width: 176 }}
                  >
                    <h3 className="text-center text-[24px] font-semibold leading-none tracking-[-0.02em] text-white">
                      {column.title}
                    </h3>

                    {column.items.map((item, itemIndex) => (
                      <div
                        key={`${column.id}-${item}`}
                        className="absolute left-0 flex h-16 w-40 items-center justify-center rounded-[8px] border border-[#F3F3F3] bg-[#222222] px-2.5 text-center text-sm font-medium text-[#F3F3F3]"
                        style={{ top: 72 + (itemIndex * 84), left: 8 }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div ref={matrixFrame.ref} className="relative h-full min-h-0 overflow-hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: matrixTopAlignedWithColumns,
              width: MATRIX_CANVAS.width * matrixScale,
              height: MATRIX_CANVAS.height * matrixScale,
            }}
          >
            <div
              className="relative origin-top-left"
              style={{
                width: MATRIX_CANVAS.width,
                height: MATRIX_CANVAS.height,
                transform: `scale(${matrixScale})`,
              }}
            >
              <div className="absolute inset-0 rounded-[8px] border border-[#F3F3F3] bg-transparent" />

              <div
                className="absolute border-l-[5px] border-b-[5px] border-[#F3F3F3]"
                style={{
                  left: MATRIX_CANVAS.graphLeft,
                  top: MATRIX_CANVAS.graphTop,
                  width: matrixGraph.width,
                  height: matrixGraph.height,
                }}
              >
                <div
                  className="absolute right-0 top-0 h-1/2 w-1/2 bg-red-100/30"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-green-100/40"
                  aria-hidden="true"
                />

                {slide.matrix.points.map((point) => {
                  const left = `${point.xPercent}%`;
                  const bottom = `${point.yPercent}%`;

                  return (
                    <div
                      key={point.id}
                      className="absolute -translate-x-1/2 translate-y-1/2"
                      style={{ left, bottom }}
                    >
                      <span
                        className="block h-[16px] w-[16px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(34,34,34,0.16)]"
                        style={{ backgroundColor: point.color }}
                      />
                    </div>
                  );
                })}
              </div>

              <div
                className="absolute text-[21px] font-semibold tracking-[0.08em] text-[#F3F3F3]"
                style={{
                  left: MATRIX_CANVAS.graphLeft + matrixGraph.width,
                  top: MATRIX_CANVAS.graphTop + matrixGraph.height + 2,
                  transform: "translateX(-100%)",
                  lineHeight: 1,
                }}
              >
                {slide.matrix.xAxisLabel}
              </div>
              <div
                className="absolute text-[21px] font-semibold tracking-[0.08em] text-[#F3F3F3]"
                style={{
                  left: MATRIX_CANVAS.graphLeft - 30,
                  top: MATRIX_CANVAS.graphTop + 2,
                  transform: "translateX(-100%) rotate(-90deg)",
                  transformOrigin: "top right",
                  lineHeight: 1,
                }}
              >
                {slide.matrix.yAxisLabel}
              </div>
              <div
                className="absolute text-[19px] font-semibold tracking-[0.02em] text-red-500"
                style={{
                  left: MATRIX_CANVAS.graphLeft + (matrixGraph.width * 0.75),
                  top: MATRIX_CANVAS.graphTop + (matrixGraph.height * 0.25),
                  transform: "translate(-50%, -50%)",
                }}
              >
                {slide.matrix.criticalZoneLabel}
              </div>
              <div
                className="absolute text-[19px] font-semibold tracking-[0.02em] text-green-500"
                style={{
                  left: MATRIX_CANVAS.graphLeft + (matrixGraph.width * 0.25),
                  top: MATRIX_CANVAS.graphTop + (matrixGraph.height * 0.75),
                  transform: "translate(-50%, -50%)",
                }}
              >
                {slide.matrix.safeZoneLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
