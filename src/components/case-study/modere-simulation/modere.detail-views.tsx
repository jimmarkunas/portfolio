import { CheckCircle2, ShieldAlert } from "lucide-react";

import {
  CONSOLE_LINES,
  CONSOLE_PREFIX,
  LEFT_ARCHITECTURE_NODES,
  RIGHT_ARCHITECTURE_NODES,
} from "./modere.data";
import type { HistoryItem } from "./modere.types";
import { cn } from "./modere.utils";

function PageNumber({ value, dark = false }: { value: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em]",
        dark ? "text-black/35" : "text-white/35",
      )}
    >
      {value}
    </div>
  );
}

function NodeCard({
  eyebrow,
  label,
  compact = false,
}: {
  eyebrow: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center border border-white/10 bg-[#141414] px-5 py-4",
        compact ? "min-h-[92px]" : "min-h-[108px]",
      )}
    >
      <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9CA3AF]">
        {eyebrow}
      </div>
      <div className="text-[16px] tracking-[-0.02em] md:text-[18px]">{label}</div>
    </div>
  );
}

export function ArchitectureView() {
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="relative flex-1 min-h-0 overflow-hidden border border-white/5 bg-white/[0.02] p-5 md:p-6">
        <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative h-full min-h-0">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line x1="20" y1="28" x2="45" y2="37" stroke="rgba(255,255,255,0.9)" strokeWidth="0.35" strokeDasharray="1.2 1.2" />
            <line x1="20" y1="68" x2="45" y2="43" stroke="rgba(255,255,255,0.9)" strokeWidth="0.35" strokeDasharray="1.2 1.2" />
            <line x1="60" y1="40" x2="79" y2="40" stroke="rgba(255,255,255,0.95)" strokeWidth="0.45" />
            <line x1="79" y1="20" x2="79" y2="80" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="20" x2="83" y2="20" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="50" x2="83" y2="50" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="80" x2="83" y2="80" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
          </svg>

          <div className="relative z-10 grid h-full min-h-0 grid-cols-1 gap-4 md:grid-cols-[220px_minmax(220px,1fr)_220px] md:gap-6">
            <div className="grid min-h-0 grid-rows-2 gap-4">
              {LEFT_ARCHITECTURE_NODES.map((node) => (
                <NodeCard key={node.label} eyebrow={node.eyebrow} label={node.label} />
              ))}
            </div>

            <div className="flex min-h-0 flex-col items-center justify-center gap-4">
              <div className="flex w-full max-w-[300px] min-h-[132px] flex-col justify-center border border-white/10 bg-[#141414] px-6 py-5">
                <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9CA3AF]">
                  The Nervous System
                </div>
                <div className="text-[18px] tracking-[-0.02em] md:text-[22px]">Next.js Engine</div>
              </div>

              <div className="flex w-full max-w-[300px] flex-col border border-white/10 bg-black/20 px-5 py-4">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#9CA3AF]">
                  Console Log
                </div>
                <div className="space-y-2 font-mono text-[10px] text-[#D1D5DB]">
                  {CONSOLE_LINES.map((line, index) => (
                    <div key={line} className={index === CONSOLE_LINES.length - 1 ? "text-white" : undefined}>
                      {CONSOLE_PREFIX} {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid min-h-0 grid-rows-3 gap-4">
              {RIGHT_ARCHITECTURE_NODES.map((node) => (
                <NodeCard key={node.label} eyebrow={node.eyebrow} label={node.label} compact />
              ))}
            </div>
          </div>
        </div>

        <PageNumber value="03" />
      </div>
    </div>
  );
}

export function AnalysisView({ history }: { history: HistoryItem[] }) {
  return (
    <div className="flex flex-1 min-h-0 flex-col overflow-hidden">
      <div className="grid h-full min-h-0 flex-1 auto-rows-fr gap-5 overflow-hidden md:grid-cols-3">
        {history.map((item, index) => (
          <div
            key={`${item.stepTitle}-${item.label}`}
            className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden border border-white/5 p-5 md:p-6"
          >
            <div className="min-h-0">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#9CA3AF]">
                  {item.stepTitle}
                </div>
                {item.isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-[#9CA3AF]" />
                ) : (
                  <ShieldAlert className="h-4 w-4 text-[#9CA3AF]" />
                )}
              </div>
              <div className="mb-3 text-[22px] leading-[1.2] tracking-[-0.02em] md:text-[24px]">
                &quot;{item.label}&quot;
              </div>
              <p className="text-[15px] font-normal italic leading-[1.45] tracking-[0] text-[#D1D5DB] md:text-[16px]">
                {item.politicsQuote}
              </p>
            </div>

            <div className="mt-6 border-t border-white/5 pt-5">
              <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9CA3AF]">Outcome</div>
              <div className="text-[16px] font-normal leading-[1.45] tracking-[0] text-white/90 md:text-[17px]">
                {item.outcome}
              </div>
              <PageNumber value={`J${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative hidden h-0 shrink-0 overflow-visible lg:block">
        <PageNumber value="04" />
      </div>
    </div>
  );
}
