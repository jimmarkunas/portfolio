import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import type { CSSProperties } from 'react';

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

function buildPageWindow(currentPage: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, 'ellipsis', totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
}

export function Pagination({
  currentPage = 1,
  totalPages = 12,
}: {
  currentPage?: number;
  totalPages?: number;
}) {
  const pages = buildPageWindow(currentPage, totalPages);
  const hoverStyle: CssVarStyle = {
    '--pager-hover': t.color.soft,
  };

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-2">
      <a
        aria-disabled={currentPage === 1}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors duration-200 ${
          currentPage === 1 ? 'pointer-events-none opacity-60' : 'hover:[background-color:var(--pager-hover)]'
        }`}
        href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
        style={{ ...hoverStyle, borderColor: t.color.border, color: t.color.ink }}
      >
        <ChevronLeft className="h-4 w-4" />
      </a>

      {pages.map((entry, idx) =>
        entry === 'ellipsis' ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-[14px]" style={{ color: t.color.muted }}>
            ...
          </span>
        ) : (
          <a
            key={entry}
            aria-current={entry === currentPage ? 'page' : undefined}
            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-[8px] border px-3 text-[14px] transition-colors duration-200 ${
              entry === currentPage ? '' : 'hover:[background-color:var(--pager-hover)]'
            }`}
            href={`?page=${entry}`}
            style={{
              ...hoverStyle,
              borderColor: entry === currentPage ? t.color.accent : t.color.border,
              color: entry === currentPage ? t.color.accent : t.color.ink,
              backgroundColor: entry === currentPage ? t.color.soft : t.color.bg,
            }}
          >
            {entry}
          </a>
        ),
      )}

      <a
        aria-disabled={currentPage === totalPages}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors duration-200 ${
          currentPage === totalPages ? 'pointer-events-none opacity-60' : 'hover:[background-color:var(--pager-hover)]'
        }`}
        href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
        style={{ ...hoverStyle, borderColor: t.color.border, color: t.color.ink }}
      >
        <ChevronRight className="h-4 w-4" />
      </a>
    </nav>
  );
}
