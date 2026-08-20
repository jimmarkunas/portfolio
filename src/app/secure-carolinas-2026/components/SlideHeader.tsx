import React from 'react';

interface SlideHeaderProps {
  actLabel: string;
  title: string;
  subtitle?: string;
  extraBadge?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  actLabel,
  title,
  subtitle,
  extraBadge,
}) => {
  return (
    <header className="mb-4 lg:mb-6 space-y-2 select-none">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E4E4E7] rounded-full text-xs font-medium text-[#3F3F46] tracking-wider uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B71CA] animate-pulse" />
          <span className="font-mono text-[11px] font-semibold text-[#18181B]">{actLabel}</span>
        </div>
        {extraBadge && (
          <span className="text-[11px] font-mono font-medium text-[#71717A] tracking-wider uppercase px-2.5 py-0.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded-md">
            {extraBadge}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h2 className="sc26-type-h1">{title}</h2>
        {subtitle && <p className="sc26-type-p1 max-w-4xl text-[#52525B]">{subtitle}</p>}
      </div>
    </header>
  );
};
