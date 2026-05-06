import * as React from 'react';
import { Globe } from 'lucide-react';

type NylVelocityChartProps = {
  className?: string;
};

const BAR_HEIGHTS = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function NylVelocityChart({ className }: NylVelocityChartProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col overflow-hidden bg-[#222222] p-6 shadow-sm md:p-8',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 mb-6 flex items-start justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF]">
              Deployment Velocity Report
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tighter text-white">
            Global Site Launch Metrics
          </h2>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-row justify-between md:w-1/3 md:flex-col md:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF]">
              Avg. Launch Time
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-light tracking-tighter text-white">6</span>
              <span className="text-xl font-light tracking-tighter text-white">Months</span>
            </div>
          </div>

          <div className="border-l border-white/10 pl-4 md:border-l-0 md:border-t md:pl-0 md:pt-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF]">
              Total Scale
            </p>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-white" />
              <span className="text-lg font-medium tracking-tight text-white">12,000 Sites</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-sm bg-[#2A2F36] p-4">
            <div className="flex h-full items-end gap-1">
              {BAR_HEIGHTS.map((height, index) => (
                <div
                  key={index}
                  className={cn('flex-1 rounded-t-[1px]', index === 11 ? 'bg-[#F3F4F6]' : 'bg-[#6B7280]')}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-2 flex justify-between">
              <span className="text-[8px] uppercase tracking-widest text-[#9CA3AF]">Month 01</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-white">Month 06</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[10px] leading-tight text-[#9CA3AF]">
              Data aggregated across enterprise-level content management systems.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 opacity-10" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-white">
          <path d="M100 0 L100 100 L0 100 Z" />
        </svg>
      </div>
    </div>
  );
}
