import { motion } from "motion/react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import type {
  BulletInsightEntry,
  LegendEntry,
  MetricEntry,
  SequenceStepEntry,
} from "@/content/dshhacks2026";

export function DotGrid() {
  return (
    <div className="grid grid-cols-3 gap-1.5 opacity-20">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="h-2.5 w-2.5 rounded-full bg-white" />
      ))}
    </div>
  );
}

type SlideHeaderProps = {
  title: ReactNode;
  subtitle: string;
  rightSlot?: ReactNode;
};

export function SlideHeader({ title, subtitle, rightSlot }: SlideHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="space-y-4">
        <h2 className="h2-display text-white font-extrabold">{title}</h2>
        <p className="dshhacks-slide-subtitle font-light text-finox-gray">{subtitle}</p>
      </div>
      {rightSlot ?? <DotGrid />}
    </div>
  );
}

type HighlightedTitleProps = {
  title: string;
  highlight?: string;
  highlightClass: string;
};

export function HighlightedTitle({
  title,
  highlight,
  highlightClass,
}: HighlightedTitleProps) {
  if (!highlight || !title.includes(highlight)) {
    return <>{title}</>;
  }

  const parts = title.split(highlight);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${highlight}-${index}`}>
          {part}
          {index < parts.length - 1 ? <span className={highlightClass}>{highlight}</span> : null}
        </Fragment>
      ))}
    </>
  );
}

type InsightBulletsProps = {
  items: BulletInsightEntry[];
  toneClass: string;
};

export function InsightBullets({ items, toneClass }: InsightBulletsProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16 + index * 0.08 }}
          className="flex items-start gap-4"
        >
          <div className={`mt-3 h-2 w-2 shrink-0 rounded-full ${toneClass}`} />
          <div className="space-y-1">
            <h3 className="dshhacks-support-title font-bold text-white">{item.title}</h3>
            <p className="dshhacks-support-body text-finox-gray">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

type MetricGridProps = {
  metrics: MetricEntry[];
};

function metricClasses(tone: MetricEntry["tone"]) {
  if (tone === "red") {
    return {
      value: "text-red-400",
      border: "border-red-500/10",
      bg: "bg-white/5",
      label: "text-finox-gray",
    };
  }

  if (tone === "amber") {
    return {
      value: "text-white",
      border: "border-amber-500/20",
      bg: "bg-gradient-to-r from-amber-500/10 to-emerald-500/10",
      label: "text-emerald-400",
    };
  }

  if (tone === "emerald") {
    return {
      value: "text-white",
      border: "border-emerald-500/20",
      bg: "bg-gradient-to-r from-emerald-500/10 to-blue-500/10",
      label: "text-emerald-400",
    };
  }

  return {
    value: "text-white",
    border: "border-white/10",
    bg: "bg-white/5",
    label: "text-finox-gray",
  };
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {metrics.map((metric) => {
        const classes = metricClasses(metric.tone);
        const layoutClass = metric.featured ? "col-span-2 px-8 py-8" : "px-10 py-10";
        const valueClass = metric.featured ? "text-2xl md:text-3xl" : "text-6xl md:text-7xl";
        const labelClass = metric.featured
          ? "text-xs font-mono font-bold tracking-[0.2em] uppercase"
          : "text-base font-bold uppercase tracking-widest leading-normal";

        return (
          <div
            key={metric.id}
            className={`rounded-[32px] border text-center shadow-xl ${classes.bg} ${classes.border} ${layoutClass}`}
          >
            <div className="flex h-full flex-col items-center justify-center space-y-4">
              <span className={`font-extrabold tracking-tight ${classes.value} ${valueClass}`}>
                {metric.value}
              </span>
              <span className={`${labelClass} ${classes.label}`}>{metric.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type NumberedInsightsProps = {
  items: BulletInsightEntry[];
};

export function NumberedInsights({ items }: NumberedInsightsProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 + index * 0.08 }}
          className="space-y-2"
        >
          <h3 className="dshhacks-support-title flex items-center gap-3 font-extrabold text-white">
            <span className="font-mono text-lg font-normal text-finox-gray">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item.title}
          </h3>
          <p className="dshhacks-support-body max-w-3xl text-finox-gray">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

type SequenceStagesProps = {
  stages: SequenceStepEntry[];
};

function stageTone(index: number) {
  const tones = [
    "bg-red-500/10 border-red-500/30 text-red-400",
    "bg-amber-500/10 border-amber-500/30 text-amber-400",
    "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    "bg-blue-500/10 border-blue-500/30 text-blue-400",
    "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
  ];

  return tones[Math.min(index, tones.length - 1)];
}

export function SequenceStages({ stages }: SequenceStagesProps) {
  return (
    <div className="grid w-full gap-6 lg:grid-cols-5">
      {stages.map((stage, index) => (
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.1 }}
          className={`relative z-10 flex h-[300px] flex-col justify-between space-y-4 rounded-[24px] border p-8 text-center shadow-xl ${stageTone(index)}`}
        >
          <div className="space-y-2">
            <span className="font-mono text-sm font-bold tracking-widest opacity-60">
              STAGE {stage.step}
            </span>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">{stage.title}</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-90">{stage.description}</p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-white/40" style={{ width: `${(index + 1) * 20}%` }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

type LegendRowProps = {
  items: LegendEntry[];
};

function legendDotClass(tone: LegendEntry["tone"]) {
  if (tone === "amber") return "bg-amber-400";
  if (tone === "emerald") return "bg-emerald-400";
  if (tone === "indigo") return "bg-indigo-400";
  return "bg-red-400";
}

export function LegendRow({ items }: LegendRowProps) {
  return (
    <div className="flex justify-center gap-12 pt-8">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${legendDotClass(item.tone)}`} />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-finox-gray">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
