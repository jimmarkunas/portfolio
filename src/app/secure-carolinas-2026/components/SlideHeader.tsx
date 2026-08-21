import React from 'react';
import { EyebrowPill } from '@/components/EyebrowPill';

interface SlideHeaderProps {
  actLabel: string;
  title: string;
  subtitle?: string;
  extraBadge?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  actLabel,
  title,
  subtitle,
  extraBadge,
  logoSrc = '/images/logo/ujcg-logo-blue.png',
  logoAlt = 'Jim Markunas logo',
}) => {
  return (
    <header className="select-none pb-[2px]">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-4">
            <img
              src={logoSrc}
              alt={logoAlt}
              aria-hidden="true"
              className="h-16 w-16 shrink-0"
            />
            <h2 className="min-w-0 sc26-type-h1">{title}</h2>
          </div>
          {subtitle && <p className="mt-2 w-full max-w-none pl-20 sc26-type-p1 text-[#52525B]">{subtitle}</p>}
        </div>
        {extraBadge && (
          <EyebrowPill
            className="shrink-0"
            labelClassName="leading-none"
            labelStyle={{ fontSize: "18px", letterSpacing: "0.18em" }}
          >
            {extraBadge}
          </EyebrowPill>
        )}
      </div>
    </header>
  );
};
