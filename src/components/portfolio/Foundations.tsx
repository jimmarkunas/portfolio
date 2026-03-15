import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

const colorTokens = [
  { name: 'Ink', value: t.color.ink },
  { name: 'Muted', value: t.color.muted },
  { name: 'Background', value: t.color.bg },
  { name: 'Soft', value: t.color.soft },
  { name: 'Subtle', value: t.color.subtle },
  { name: 'Border', value: t.color.border },
  { name: 'Border strong', value: t.color.borderStrong },
  { name: 'Accent', value: t.color.accent },
  { name: 'Accent hover', value: t.color.accentHover },
  { name: 'Inverse', value: t.color.inverse },
  { name: 'Inverse text', value: t.color.inverseText },
];

const typographyRows = [
  { token: 'H1', className: t.type.h1, sample: 'Editorial operator headline level one' },
  { token: 'H2', className: t.type.h2, sample: 'Second-level heading for section anchoring' },
  { token: 'H3', className: t.type.h3, sample: 'Third-level heading for modules' },
  { token: 'H4', className: t.type.h4, sample: 'Fourth-level heading for cards' },
  { token: 'H5', className: t.type.h5, sample: 'Fifth-level heading for compact content' },
  { token: 'H6', className: t.type.h6, sample: 'Sixth-level heading for list items and compact metadata titles' },
  { token: 'Body Large', className: t.type.bodyLarge, sample: 'Large body copy for high-impact summary lines.' },
  { token: 'Body', className: t.type.body, sample: 'Standard editorial body copy for readable narrative flow.' },
  { token: 'Small', className: t.type.small, sample: 'Small helper text for labels and metadata.' },
  { token: 'Eyebrow', className: t.type.eyebrow, sample: 'SYSTEM LABEL' },
  { token: 'Button / Link / Field', className: t.type.utility, sample: 'Utility text for controls' },
];

export function ColorTokenGrid() {
  return (
    <div>
      <h4 className={t.type.h5}>Color tokens</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {colorTokens.map((token) => (
          <div key={token.name} className="rounded-[8px] border p-3" style={{ borderColor: t.color.border }}>
            <div className="h-14 rounded-[6px] border" style={{ borderColor: t.color.border, backgroundColor: token.value }} />
            <div className={`${t.type.small} mt-3`} style={{ color: t.color.ink }}>
              {token.name}
            </div>
            <code className={t.type.eyebrow} style={{ color: t.color.muted }}>
              {token.value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TypographyScaleSpecimen() {
  return (
    <div>
      <h4 className={t.type.h5}>Typography scale</h4>
      <div className="mt-4 rounded-[10px] border p-4 md:p-5" style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}>
        <div className="space-y-4">
          {typographyRows.map((row) => (
            <div key={row.token} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: t.color.border }}>
              <div className={t.type.eyebrow} style={{ color: t.color.accent }}>
                {row.token}
              </div>
              <p className={`${row.className} mt-2`} style={{ color: t.color.ink }}>
                {row.sample}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LayoutSpecimen() {
  const layoutRows = [
    { device: 'Desktop', columns: t.layout.desktop.columns, gutter: t.layout.desktop.gutter, margin: t.layout.desktop.margin },
    { device: 'Tablet', columns: t.layout.tablet.columns, gutter: t.layout.tablet.gutter, margin: t.layout.tablet.margin },
    { device: 'Mobile', columns: t.layout.mobile.columns, gutter: t.layout.mobile.gutter, margin: t.layout.mobile.margin },
  ];

  return (
    <div>
      <h4 className={t.type.h5}>Layout rules</h4>
      <div className="mt-4 overflow-hidden rounded-[10px] border" style={{ borderColor: t.color.border }}>
        <table className="w-full border-collapse">
          <thead style={{ backgroundColor: t.color.soft }}>
            <tr>
              <th className={`px-4 py-3 text-left ${t.type.eyebrow}`} style={{ color: t.color.ink }}>
                Breakpoint
              </th>
              <th className={`px-4 py-3 text-left ${t.type.eyebrow}`} style={{ color: t.color.ink }}>
                Columns
              </th>
              <th className={`px-4 py-3 text-left ${t.type.eyebrow}`} style={{ color: t.color.ink }}>
                Gutter
              </th>
              <th className={`px-4 py-3 text-left ${t.type.eyebrow}`} style={{ color: t.color.ink }}>
                Margin
              </th>
            </tr>
          </thead>
          <tbody>
            {layoutRows.map((row) => (
              <tr key={row.device} className="border-t" style={{ borderColor: t.color.border }}>
                <td className={`${t.type.small} px-4 py-3`} style={{ color: t.color.ink }}>
                  {row.device}
                </td>
                <td className={`${t.type.small} px-4 py-3`} style={{ color: t.color.muted }}>
                  {row.columns}
                </td>
                <td className={`${t.type.small} px-4 py-3`} style={{ color: t.color.muted }}>
                  {row.gutter}px
                </td>
                <td className={`${t.type.small} px-4 py-3`} style={{ color: t.color.muted }}>
                  {row.margin}px
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
