type SectionEyebrowProps = {
  label: string;
  className?: string;
};

export default function SectionEyebrow({
  label,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-chip border border-borderSubtle bg-surface px-3 py-2.5 ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      <span className="type-p5 font-medium uppercase tracking-[0.08em] text-ink">{label}</span>
    </div>
  );
}
