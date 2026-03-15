import type { ReactNode } from 'react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

export function PortfolioPageScaffold({ children }: { children: ReactNode }) {
  return (
    <main
      className="min-h-screen bg-white px-5 py-8 md:px-8 md:py-10 xl:px-12 xl:py-12"
      style={{ fontFamily: t.font.primary, color: t.color.ink }}
    >
      <div className="mx-auto w-full max-w-[1380px]">{children}</div>
    </main>
  );
}

export function InventorySection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[12px] border px-5 py-6 md:px-8 md:py-8 xl:px-8 xl:py-8" style={{ borderColor: t.color.border }}>
      <div className="max-w-[70ch]">
        <h3 className={t.type.h4}>{title}</h3>
        <p className={`${t.type.body} mt-3`} style={{ color: t.color.muted }}>
          {description}
        </p>
      </div>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}
