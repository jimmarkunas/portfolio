export function MetricValue({
  value,
  className = '',
}: {
  value: string;
  className?: string;
}) {
  const match = value.trim().match(/^([$€£¥])?(\d[\d.,]*)(.*)$/);

  if (!match) {
    return (
      <span className={className} style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
        {value}
      </span>
    );
  }

  const [, prefix = '', number, suffix = ''] = match;

  return (
    <span className={className} style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
      {prefix ? (
        <span className="mr-[0.03em] inline-block text-[0.78em] align-top leading-none">
          {prefix}
        </span>
      ) : null}
      <span>{number}</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}
