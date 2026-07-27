"use client"

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type DataPoint = {
  month: string;
  baseline: number;
  afterLaunch: number;
};

const data: DataPoint[] = [
  { month: 'Jun', baseline: 10.5, afterLaunch: 29.0 },
  { month: 'Jul', baseline: 12.5, afterLaunch: 43.5 },
  { month: 'Aug', baseline: 13.0, afterLaunch: 58.0 },
  { month: 'Sep', baseline: 20.0, afterLaunch: 72.5 },
  { month: 'Oct', baseline: 25.5, afterLaunch: 87.5 },
  { month: 'Nov', baseline: 30.0, afterLaunch: 97.5 },
];

const chartWidth = 1040;
const chartHeight = 585;

const margin = { top: 70, right: 44, bottom: 112, left: 170 };
const innerWidth = chartWidth - margin.left - margin.right;
const innerHeight = chartHeight - margin.top - margin.bottom;
const yMax = 120;
const ticks = [0, 20, 40, 60, 80, 100, 120];

function xForIndex(index: number) {
  if (data.length === 1) return margin.left + innerWidth / 2;
  return margin.left + (innerWidth / (data.length - 1)) * index;
}

function yForValue(value: number) {
  return margin.top + innerHeight - (value / yMax) * innerHeight;
}

function buildPath(values: number[]) {
  return values
    .map((value, index) => `${index === 0 ? 'M' : 'L'} ${xForIndex(index)} ${yForValue(value)}`)
    .join(' ');
}

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

function NewYorkLifeMark() {
  return <img src="/newyorklife/nyl-logo.svg" alt="New York Life" className="h-[46px] w-auto" />;
}

function LegendItem({ color, label, accent }: { color: string; label: string; accent?: string }) {
  return (
    <div className="type-p5 flex items-center gap-2 font-semibold text-[#666666]">
      <svg width="26" height="10" viewBox="0 0 26 10" aria-hidden="true">
        <line x1="2" y1="5" x2="24" y2="5" stroke={color} strokeWidth="2.25" strokeLinecap="round" />
        <circle cx="13" cy="5" r="3.2" fill={accent ?? color} />
      </svg>
      <span>{label}</span>
    </div>
  );
}

function AnimatedLine({
  d,
  stroke,
  inView,
  delay = 0,
  reduceMotion,
}: {
  d: string;
  stroke: string;
  inView: boolean;
  delay?: number;
  reduceMotion: boolean;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState<number | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  const dashStyle =
    !reduceMotion && length !== null
      ? {
          strokeDasharray: length,
          strokeDashoffset: inView ? 0 : length,
          transition: `stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
        }
      : {};

  return (
    <path
      ref={pathRef}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={dashStyle}
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const fadeTrans = (delay = 0) => ({ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay });

export default function NylRevenueAttributionChart() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: '-10% 0px' });
  const reduceMotion = !!useReducedMotion();

  const baselinePath = buildPath(data.map((d) => d.baseline));
  const afterLaunchPath = buildPath(data.map((d) => d.afterLaunch));

  const animate = inView && !reduceMotion ? 'visible' : reduceMotion ? 'visible' : 'hidden';

  return (
    <div ref={rootRef} className="w-full bg-[#F3F3F3] text-[#5b5b5b]">
      <div className="w-full border-y border-[#cfcfcf] bg-[#F3F3F3] px-[30px] pb-[12px] pt-[10px]">
        <div className="relative w-full">

          {/* Legend */}
          <motion.div
            className="absolute right-[6px] top-[2px] flex flex-col gap-[6px]"
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            transition={fadeTrans(0.6)}
          >
            <LegendItem color="#2d7dbf" label="2023 (Baseline)" />
            <LegendItem color="#183f6d" accent="#ea7a32" label="2024 (After CoreCMS Launch)" />
          </motion.div>

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="block h-auto w-full overflow-visible"
            style={{ overflow: 'visible' }}
            role="img"
            aria-label="CORECMS Launch: Revenue Attribution, Digital"
          >
            <title>CORECMS Launch: Revenue Attribution, Digital</title>
            <rect x="0" y="0" width={chartWidth} height={chartHeight} fill="#F3F3F3" />

            {/* Chart title */}
            <motion.text
              x={chartWidth / 2}
              y="56"
              textAnchor="middle"
              fill="#5f5f5f"
              fontSize="24"
              fontWeight="500"
              fontFamily="inherit"
              variants={fadeUp}
              initial="hidden"
              animate={animate}
              transition={fadeTrans(0)}
            >
              CORECMS Launch: Revenue Attribution, Digital
            </motion.text>

            {/* Grid lines + y-axis labels */}
            {ticks.map((tick, i) => {
              const y = yForValue(tick);
              return (
                <motion.g
                  key={tick}
                  variants={fadeUp}
                  initial="hidden"
                  animate={animate}
                  transition={fadeTrans(0.1 + i * 0.04)}
                >
                  <line x1={margin.left} y1={y} x2={chartWidth - margin.right} y2={y} stroke="#c9c9c9" strokeWidth="1" />
                  <text x={margin.left - 14} y={y + 6} textAnchor="end" fill="#5d5d5d" fontSize="14" fontWeight="700" fontFamily="inherit">
                    {formatCurrency(tick)}
                  </text>
                </motion.g>
              );
            })}

            {/* Y-axis title */}
            <g transform={`translate(16 ${margin.top + innerHeight / 2}) rotate(-90)`} aria-hidden="true">
              <motion.g
                variants={fadeUp}
                initial="hidden"
                animate={animate}
                transition={fadeTrans(0.15)}
              >
                <text textAnchor="middle" fill="#5d5d5d" fontSize="26" fontWeight="500" fontFamily="inherit">
                  Digital Lead Gen Attribution In Millions
                </text>
                <text y="36" textAnchor="middle" fill="#5d5d5d" fontSize="26" fontWeight="500" fontFamily="inherit">
                  ($USD)
                </text>
              </motion.g>
            </g>

            {/* X-axis labels */}
            {data.map((point, index) => (
              <motion.text
                key={point.month}
                x={xForIndex(index)}
                y={chartHeight - 72}
                textAnchor="middle"
                fill="#5d5d5d"
                fontSize="14"
                fontWeight="700"
                fontFamily="inherit"
                variants={fadeUp}
                initial="hidden"
                animate={animate}
                transition={fadeTrans(0.4 + index * 0.04)}
              >
                {point.month}
              </motion.text>
            ))}

            {/* Animated lines */}
            <AnimatedLine d={baselinePath} stroke="#4e8dd5" inView={inView} delay={0.3} reduceMotion={reduceMotion} />
            <AnimatedLine d={afterLaunchPath} stroke="#ea7a32" inView={inView} delay={0.5} reduceMotion={reduceMotion} />

            {/* Dots — fade in after lines */}
            {data.map((point, index) => (
              <motion.circle
                key={`baseline-${point.month}`}
                cx={xForIndex(index)}
                cy={yForValue(point.baseline)}
                r="4"
                fill="#1c6f9c"
                variants={fadeUp}
                initial="hidden"
                animate={animate}
                transition={fadeTrans(1.2 + index * 0.05)}
              />
            ))}
            {data.map((point, index) => (
              <motion.circle
                key={`after-${point.month}`}
                cx={xForIndex(index)}
                cy={yForValue(point.afterLaunch)}
                r="4"
                fill="#ea7a32"
                variants={fadeUp}
                initial="hidden"
                animate={animate}
                transition={fadeTrans(1.2 + index * 0.05)}
              />
            ))}
          </svg>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-[12px] border-t border-[#2f2f2f] pt-[12px]"
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          transition={fadeTrans(0.7)}
        >
          <div className="type-p5 flex items-center gap-5 font-semibold text-[#707070]">
            <NewYorkLifeMark />
            <p>©2024 New York Life. New York Life and all other marks are trademarks of New York Life Insurance Company</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
