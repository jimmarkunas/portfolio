import { ComponentPropsWithoutRef, ReactNode } from "react";

type CaseStudySectionProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "className">;

export default function CaseStudySection({
  children,
  className = "",
  ...props
}: CaseStudySectionProps) {
  return (
    <section className="border-b border-borderSubtle py-14 md:py-20" {...props}>
      <div className={`mx-auto max-w-[1336px] ${className}`}>
        {children}
      </div>
    </section>
  );
}
