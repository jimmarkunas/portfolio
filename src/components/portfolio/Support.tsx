import type { LucideIcon } from 'lucide-react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

type IconGridItem = {
  label: string;
  Icon: LucideIcon;
};

export function IconGrid({ items }: { items: IconGridItem[] }) {
  return (
    <div>
      <h4 className={t.type.h5}>Icon grid</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-[8px] border px-4 py-3"
            style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
          >
            <item.Icon className="h-4 w-4" style={{ color: t.color.accent }} />
            <span className={t.type.small} style={{ color: t.color.ink }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResponsiveSpecimens() {
  const specimens = [
    { title: 'Desktop', spec: '12 columns / 24px gutter / 48px margin' },
    { title: 'Tablet', spec: '8 columns / 20px gutter / 32px margin' },
    { title: 'Mobile', spec: '4 columns / 16px gutter / 20px margin' },
  ];

  return (
    <div>
      <h4 className={t.type.h5}>Responsive specimens</h4>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {specimens.map((specimen) => (
          <div key={specimen.title} className="rounded-[10px] border p-4" style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}>
            <p className={t.type.eyebrow} style={{ color: t.color.accent }}>
              {specimen.title}
            </p>
            <p className={`${t.type.small} mt-2`} style={{ color: t.color.ink }}>
              {specimen.spec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GradientShadowSpecimen() {
  return (
    <div>
      <h4 className={t.type.h5}>Gray gradient and shadow specimen</h4>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div
          className="rounded-[12px] border p-5"
          style={{
            borderColor: t.color.border,
            background: `linear-gradient(180deg, ${t.color.bg} 0%, ${t.color.soft} 100%)`,
          }}
        >
          <p className={t.type.small} style={{ color: t.color.ink }}>
            Optional neutral gradient for calm section lift.
          </p>
        </div>
        <div className="rounded-[12px] border p-5" style={{ borderColor: t.color.border, backgroundColor: t.color.bg, boxShadow: t.shadow.soft }}>
          <p className={t.type.small} style={{ color: t.color.ink }}>
            Soft shadow only where separation is needed.
          </p>
        </div>
      </div>
    </div>
  );
}
