type TagChipProps = {
  label: string;
  variant?: "default" | "inverse";
  className?: string;
};

export default function TagChip({
  label,
  variant = "default",
  className = "",
}: TagChipProps) {
  const styles =
    variant === "inverse"
      ? "bg-[var(--color-chip-inverse-bg)] text-[var(--color-chip-inverse-text)] border border-transparent"
      : "bg-[var(--color-chip-bg)] text-[var(--color-chip-text)] border border-[var(--color-chip-border)]";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-chip px-4 py-2 type-p5 font-medium ${styles} ${className}`}
    >
      {label}
    </span>
  );
}
