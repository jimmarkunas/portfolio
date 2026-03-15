import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

export function SectionHeader({ label, title, meta }: { label: string; title: string; meta?: string }) {
  return (
    <div className="mb-8 md:mb-10 xl:mb-12">
      <span
        className={`${t.type.eyebrow} inline-flex items-center rounded-[999px] border px-4 py-3 leading-none`}
        style={{ color: t.color.ink, backgroundColor: t.color.soft, borderColor: t.color.border }}
      >
        {label}
      </span>
      <h2
        className="mt-6 w-full text-[34px] leading-[1.08] tracking-[-0.016em] md:text-[48px] xl:text-[64px]"
        style={{ color: t.color.ink, fontWeight: 350 }}
      >
        {title}
      </h2>
      {meta ? (
        <p className={`${t.type.body} mt-5 max-w-[60rem]`} style={{ color: t.color.muted }}>
          {meta}
        </p>
      ) : null}
    </div>
  );
}
