import { ChevronRight, Home } from 'lucide-react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import type { CSSProperties } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

export function Breadcrumbs({ items, currentLabel }: { items: BreadcrumbItem[]; currentLabel: string }) {
  const linkStyle: CssVarStyle = {
    '--crumb-hover': t.color.accent,
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[14px]" style={{ color: t.color.muted }}>
      <a
        aria-label="Home"
        className="inline-flex items-center transition-colors duration-200 hover:[color:var(--crumb-hover)]"
        href="/"
        style={linkStyle}
      >
        <Home className="h-4 w-4" />
      </a>
      <ChevronRight className="h-4 w-4" />
      {items.map((item) => (
        <div key={item.label} className="inline-flex items-center gap-2">
          {item.href ? (
            <a className="transition-colors duration-200 hover:[color:var(--crumb-hover)]" href={item.href} style={linkStyle}>
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          <ChevronRight className="h-4 w-4" />
        </div>
      ))}
      <span style={{ color: t.color.ink }}>{currentLabel}</span>
    </nav>
  );
}
