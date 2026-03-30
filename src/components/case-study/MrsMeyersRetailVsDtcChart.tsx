"use client"
import { motion } from "framer-motion";

type Row = { label: string; value: number; dtc?: boolean };

const data: Row[] = [
  { label: "Amazon", value: 12_000_000 },
  { label: "Target", value: 9_000_000 },
  { label: "Walmart", value: 7_000_000 },
  { label: "Grocery / Drug", value: 6_000_000 },
  { label: "Other Retail", value: 4_000_000 },
  { label: "DTC", value: 0, dtc: true },
];

const c = {
  ink: "#222222",
  sub: "#4B5154",
  muted: "#7B7B7B",
  white: "#FFFFFF",
  gray: "#F3F3F3",
  border: "#E5E7EB",
  accent: "#447ACB",
};

const money = (n: number) => `$${Math.round(n / 1_000_000)}M`;

export default function MrsMeyersRetailVsDtcChart() {
  const max = Math.max(...data.map((d) => d.value), 1);
  const chartX = 145;
  const chartY = 88;
  const chartW = 390;
  const rowH = 26;
  const gap = 10;
  const ticks = [0, 3_000_000, 6_000_000, 9_000_000, 12_000_000];
  const chartBottom = chartY + (data.length - 1) * (rowH + gap) + rowH;
  const dividerY = 308;
  const noteY = 332;

  return (
    <div className="w-full max-w-[620px]">
      <svg
        viewBox="0 0 620 349"
        className="h-auto w-full"
        role="img"
        aria-label="Mrs. Meyers retail versus DTC sales chart"
      >
        <rect x="1" y="1" width="618" height="347" rx="22" fill={c.ink} stroke={c.ink} />

        <line x1="24" y1="26" x2="24" y2="58" stroke={c.accent} strokeWidth="2" />
        <text x="36" y="38" fill={c.white} fontSize="18" fontWeight="400" fontFamily="Inter, sans-serif">
          Mrs. Meyers retail sales vs DTC
        </text>
        <text x="36" y="58" fill={c.white} fontSize="10" fontFamily="Inter, sans-serif">
          Illustrative pre-ecommerce snapshot
        </text>

        {ticks.slice(1).map((v) => {
          const x = chartX + (v / max) * chartW;
          return <line key={v} x1={x} y1={chartY - 6} x2={x} y2={chartBottom} stroke="#3A3A3A" strokeDasharray="4 4" />;
        })}

        {data.map((d, i) => {
          const y = chartY + i * (rowH + gap);
          const w = (d.value / max) * chartW;
          const pillW = 132;
          const pillX = chartX + chartW / 2 - pillW / 2;

          return (
            <g key={d.label}>
              <text x="26" y={y + 17} fill={c.white} fontSize="11" fontFamily="Inter, sans-serif">
                {d.label}
              </text>

              <rect x={chartX} y={y} width={chartW} height={rowH} rx="13" fill="#3A3A3A" stroke="#3A3A3A" />

              {d.dtc ? (
                <g>
                  <rect x={pillX} y={y + 4} width={pillW} height="18" rx="9" fill="#3A3A3A" stroke="#555555" />
                  <text x={pillX + pillW / 2} y={y + 16} textAnchor="middle" fill={c.white} fontSize="9" fontFamily="Inter, sans-serif">
                    No owned DTC channel
                  </text>
                </g>
              ) : (
                <>
                  <motion.rect
                    initial={{ width: 0 }}
                    animate={{ width: w }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease: "easeOut" }}
                    x={chartX}
                    y={y}
                    height={rowH}
                    rx="13"
                    fill="#D4D4D4"
                  />
                  <text x={chartX + w + 8} y={y + 17} fill={c.white} fontSize="10" fontFamily="Inter, sans-serif">
                    {money(d.value)}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {ticks.map((v) => {
          const x = chartX + (v / max) * chartW;
          return (
            <text
              key={v}
              x={x}
              y="76"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="9"
              fontFamily="Inter, sans-serif"
            >
              {v === 0 ? "0" : money(v)}
            </text>
          );
        })}

        <line x1="24" y1={dividerY} x2="596" y2={dividerY} stroke="#3A3A3A" />
        <circle cx="30" cy={noteY - 3} r="4" fill={c.accent} />
        <text x="40" y={noteY} fill="#FFFFFF" fontSize="10" fontFamily="Inter, sans-serif">
          Retail sales were meaningful across major channels, but DTC was at zero.
        </text>
      </svg>
    </div>
  );
}
