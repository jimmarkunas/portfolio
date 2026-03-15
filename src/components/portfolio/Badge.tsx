import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import type { CSSProperties, ReactNode } from 'react';

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

export function Badge({ children, active = false }: { children: ReactNode; active?: boolean }) {
  const style: CssVarStyle = {
    '--badge-border': active ? t.color.accent : t.color.border,
    '--badge-bg': active ? t.color.soft : t.color.bg,
    '--badge-text': active ? t.color.accentHover : t.color.ink,
    '--badge-hover-border': t.color.borderStrong,
    borderColor: active ? t.color.accent : t.color.border,
    backgroundColor: active ? t.color.soft : t.color.bg,
    color: active ? t.color.accentHover : t.color.ink,
  };

  return (
    <span
      className={`${t.type.small} inline-flex items-center gap-2 rounded-[999px] border px-3 py-2 leading-none transition-colors duration-200 hover:[border-color:var(--badge-hover-border)]`}
      style={style}
    >
      {children}
    </span>
  );
}
