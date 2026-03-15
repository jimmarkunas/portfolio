import SectionEyebrow from "./SectionEyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
   <div className={`flex flex-col items-start gap-5 ${className}`}>
      {eyebrow ? <SectionEyebrow label={eyebrow} /> : null}

      <h2 className="type-h3 max-w-[15ch] text-ink">
        {title}
      </h2>

      {description ? (
        <p className="type-p3 max-w-[44rem] text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
