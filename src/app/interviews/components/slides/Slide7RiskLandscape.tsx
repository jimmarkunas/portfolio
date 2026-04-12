"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useAdaptiveDiagramMotion } from "@/components/case-study/useAdaptiveDiagramMotion";
import type { InterviewsContent } from "@/content/interviews";

interface Slide7RiskLandscapeProps {
  slide: InterviewsContent["slides"]["riskLandscape"];
}

interface Size {
  width: number;
  height: number;
}

interface AnimatedMatrixPoint {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

interface AxisPaddlePositions {
  x: number;
  y: number;
}

interface AxisPaddleTarget {
  position: number;
  secondsToImpact: number;
}

interface PaddleTargets {
  x: AxisPaddleTarget;
  y: AxisPaddleTarget;
}

interface PaddleStepResult {
  position: number;
  velocity: number;
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
const ANIMATION_SPEED_MULTIPLIER = 0.75;
const MATRIX_POINT_DIAMETER = 16;
const PONG_SPEED = 18 * ANIMATION_SPEED_MULTIPLIER;
const PONG_DOT_COLOR = "#447ACB";
const X_PADDLE_WIDTH = 72;
const X_PADDLE_HEIGHT = 10;
const Y_PADDLE_WIDTH = 10;
const Y_PADDLE_HEIGHT = 72;
const PADDLE_PATROL_SPEED = 42 * ANIMATION_SPEED_MULTIPLIER;
const PADDLE_MAX_SPEED = 180 * ANIMATION_SPEED_MULTIPLIER;
const PADDLE_IMMINENT_SNAP_SECONDS = 0.075;
const PADDLE_MIN_DELTA = 0.02;

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

function createAnimatedPoints(
  points: InterviewsContent["slides"]["riskLandscape"]["matrix"]["points"],
): AnimatedMatrixPoint[] {
  return points.map((point, index) => {
    const angle = ((index * 67) + 35) * (Math.PI / 180);
    return {
      id: point.id,
      x: point.xPercent,
      y: point.yPercent,
      vx: Math.cos(angle) * PONG_SPEED,
      vy: Math.sin(angle) * PONG_SPEED,
      color: PONG_DOT_COLOR,
    };
  });
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// Reflect a 1D position across min/max bounds to match wall-bounce motion.
function reflectPositionInBounds(
  start: number,
  velocity: number,
  deltaSeconds: number,
  min: number,
  max: number,
): number {
  const span = max - min;
  if (span <= 0) return min;

  const period = span * 2;
  const raw = (start - min) + (velocity * deltaSeconds);
  const wrapped = ((raw % period) + period) % period;

  if (wrapped <= span) {
    return min + wrapped;
  }

  return max - (wrapped - span);
}

function getPaddleTargets(
  points: AnimatedMatrixPoint[],
  current: AxisPaddlePositions,
  bounds: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minXPaddle: number;
    maxXPaddle: number;
    minYPaddle: number;
    maxYPaddle: number;
  },
): PaddleTargets {
  let nextX = current.x;
  let nextY = current.y;

  let soonestLeftHit = Number.POSITIVE_INFINITY;
  let soonestBottomHit = Number.POSITIVE_INFINITY;

  for (const point of points) {
    if (point.vx < 0) {
      const secondsToLeft = (point.x - bounds.minX) / -point.vx;
      if (secondsToLeft >= 0 && secondsToLeft < soonestLeftHit) {
        const predictedY = reflectPositionInBounds(
          point.y,
          point.vy,
          secondsToLeft,
          bounds.minY,
          bounds.maxY,
        );

        soonestLeftHit = secondsToLeft;
        nextY = clamp(predictedY, bounds.minYPaddle, bounds.maxYPaddle);
      }
    }

    if (point.vy < 0) {
      const secondsToBottom = (point.y - bounds.minY) / -point.vy;
      if (secondsToBottom >= 0 && secondsToBottom < soonestBottomHit) {
        const predictedX = reflectPositionInBounds(
          point.x,
          point.vx,
          secondsToBottom,
          bounds.minX,
          bounds.maxX,
        );

        soonestBottomHit = secondsToBottom;
        nextX = clamp(predictedX, bounds.minXPaddle, bounds.maxXPaddle);
      }
    }
  }

  return {
    x: {
      position: nextX,
      secondsToImpact: soonestBottomHit,
    },
    y: {
      position: nextY,
      secondsToImpact: soonestLeftHit,
    },
  };
}

function movePaddleTowardTarget(
  current: number,
  target: number,
  secondsToImpact: number,
  deltaSeconds: number,
  min: number,
  max: number,
  currentVelocity: number,
): PaddleStepResult {
  const clampedTarget = clamp(target, min, max);
  const distance = clampedTarget - current;
  const hasTarget = Number.isFinite(secondsToImpact);

  let nextVelocity = currentVelocity;

  if (hasTarget) {
    const targetDirection = Math.abs(distance) <= PADDLE_MIN_DELTA
      ? Math.sign(nextVelocity) || 1
      : Math.sign(distance);

    const requiredSpeed = Math.abs(distance) / Math.max(secondsToImpact, deltaSeconds);
    const trackingSpeed = clamp(requiredSpeed + 14, PADDLE_PATROL_SPEED, PADDLE_MAX_SPEED);

    if (secondsToImpact <= PADDLE_IMMINENT_SNAP_SECONDS) {
      return {
        position: clampedTarget,
        velocity: targetDirection * PADDLE_PATROL_SPEED,
      };
    }

    nextVelocity = targetDirection * trackingSpeed;
  } else {
    const patrolDirection = Math.sign(nextVelocity) || 1;
    const patrolSpeed = Math.max(Math.abs(nextVelocity), PADDLE_PATROL_SPEED);
    nextVelocity = patrolDirection * patrolSpeed;
  }

  let nextPosition = current + (nextVelocity * deltaSeconds);

  if (nextPosition <= min) {
    nextPosition = min;
    nextVelocity = Math.abs(nextVelocity);
  } else if (nextPosition >= max) {
    nextPosition = max;
    nextVelocity = -Math.abs(nextVelocity);
  }

  return {
    position: nextPosition,
    velocity: nextVelocity,
  };
}

export default function Slide7RiskLandscape({ slide }: Slide7RiskLandscapeProps) {
  const columnsFrame = useFrameSize<HTMLDivElement>();
  const matrixFrame = useFrameSize<HTMLDivElement>();
  const { shouldReduceMotion } = useAdaptiveDiagramMotion();

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

  const baseMatrixPoints = useMemo(
    () => createAnimatedPoints(slide.matrix.points),
    [slide.matrix.points],
  );

  const pointsRef = useRef<AnimatedMatrixPoint[]>(baseMatrixPoints);
  const paddlePositionsRef = useRef<AxisPaddlePositions>({ x: 50, y: 50 });
  const xPaddleVelocityRef = useRef(-PADDLE_PATROL_SPEED);
  const yPaddleVelocityRef = useRef(PADDLE_PATROL_SPEED);
  const [animatedPoints, setAnimatedPoints] = useState<AnimatedMatrixPoint[]>(baseMatrixPoints);
  const [paddlePositions, setPaddlePositions] = useState<AxisPaddlePositions>({ x: 50, y: 50 });

  useEffect(() => {
    pointsRef.current = baseMatrixPoints;
    paddlePositionsRef.current = { x: 50, y: 50 };
    xPaddleVelocityRef.current = -PADDLE_PATROL_SPEED;
    yPaddleVelocityRef.current = PADDLE_PATROL_SPEED;
    setAnimatedPoints(baseMatrixPoints);
    setPaddlePositions({ x: 50, y: 50 });
  }, [baseMatrixPoints]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let animationFrameId = 0;
    let lastTimestamp = performance.now();

    const radiusXPct = ((MATRIX_POINT_DIAMETER / 2) / matrixGraph.width) * 100;
    const radiusYPct = ((MATRIX_POINT_DIAMETER / 2) / matrixGraph.height) * 100;
    const minX = radiusXPct;
    const maxX = 100 - radiusXPct;
    const minY = radiusYPct;
    const maxY = 100 - radiusYPct;
    const xPaddleHalfPct = ((X_PADDLE_WIDTH / 2) / matrixGraph.width) * 100;
    const yPaddleHalfPct = ((Y_PADDLE_HEIGHT / 2) / matrixGraph.height) * 100;
    const minXPaddle = xPaddleHalfPct;
    const maxXPaddle = 100 - xPaddleHalfPct;
    const minYPaddle = yPaddleHalfPct;
    const maxYPaddle = 100 - yPaddleHalfPct;

    const animate = (timestamp: number) => {
      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.033);
      lastTimestamp = timestamp;

      const nextPoints = pointsRef.current.map((point) => {
        let nextX = point.x + (point.vx * deltaSeconds);
        let nextY = point.y + (point.vy * deltaSeconds);
        let nextVx = point.vx;
        let nextVy = point.vy;

        if (nextX <= minX) {
          nextX = minX;
          nextVx = Math.abs(nextVx);
        } else if (nextX >= maxX) {
          nextX = maxX;
          nextVx = -Math.abs(nextVx);
        }

        if (nextY <= minY) {
          nextY = minY;
          nextVy = Math.abs(nextVy);
        } else if (nextY >= maxY) {
          nextY = maxY;
          nextVy = -Math.abs(nextVy);
        }

        return {
          ...point,
          x: nextX,
          y: nextY,
          vx: nextVx,
          vy: nextVy,
        };
      });

      pointsRef.current = nextPoints;
      setAnimatedPoints(nextPoints);

      const paddleTargets = getPaddleTargets(nextPoints, paddlePositionsRef.current, {
        minX,
        maxX,
        minY,
        maxY,
        minXPaddle,
        maxXPaddle,
        minYPaddle,
        maxYPaddle,
      });

      const xStep = movePaddleTowardTarget(
          paddlePositionsRef.current.x,
          paddleTargets.x.position,
          paddleTargets.x.secondsToImpact,
          deltaSeconds,
          minXPaddle,
          maxXPaddle,
          xPaddleVelocityRef.current,
        );

      const yStep = movePaddleTowardTarget(
          paddlePositionsRef.current.y,
          paddleTargets.y.position,
          paddleTargets.y.secondsToImpact,
          deltaSeconds,
          minYPaddle,
          maxYPaddle,
          yPaddleVelocityRef.current,
        );

      const nextPaddles: AxisPaddlePositions = {
        x: xStep.position,
        y: yStep.position,
      };

      xPaddleVelocityRef.current = xStep.velocity;
      yPaddleVelocityRef.current = yStep.velocity;
      paddlePositionsRef.current = nextPaddles;
      setPaddlePositions(nextPaddles);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [matrixGraph.height, matrixGraph.width, shouldReduceMotion]);

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

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute rounded-full bg-[#F3F3F3] shadow-[0_0_14px_rgba(243,243,243,0.24)]"
                  style={{
                    left: 0,
                    bottom: `${shouldReduceMotion ? 50 : paddlePositions.y}%`,
                    width: Y_PADDLE_WIDTH,
                    height: Y_PADDLE_HEIGHT,
                    transform: "translate(-50%, 50%)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute rounded-full bg-[#F3F3F3] shadow-[0_0_14px_rgba(243,243,243,0.24)]"
                  style={{
                    left: `${shouldReduceMotion ? 50 : paddlePositions.x}%`,
                    bottom: 0,
                    width: X_PADDLE_WIDTH,
                    height: X_PADDLE_HEIGHT,
                    transform: "translate(-50%, 50%)",
                  }}
                />

                {(shouldReduceMotion ? baseMatrixPoints : animatedPoints).map((point) => {
                  const left = `${point.x}%`;
                  const bottom = `${point.y}%`;

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
