import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SlideHeadingProps = {
  title: ReactNode;
  subtitle?: string;
  rightSlot?: ReactNode;
  centered?: boolean;
};

export function SlideHeading({ title, subtitle, rightSlot, centered }: SlideHeadingProps) {
  return (
    <div className={`flex ${centered ? "flex-col items-center text-center" : "items-end justify-between"}`}>
      <div className="space-y-2">
        <h2 className="h2-display">{title}</h2>
        {subtitle ? <p className="p-large text-white">{subtitle}</p> : null}
      </div>
      {rightSlot ? <div>{rightSlot}</div> : null}
    </div>
  );
}

type WhyCareListProps = {
  items: string[];
};

export function WhyCareList({ items }: WhyCareListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-finox-gray">
          <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type NumberedRowsProps = {
  items: string[];
};

export function NumberedRows({ items }: NumberedRowsProps) {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-6 border-b border-finox-slate/20 pb-4">
          <span className="font-mono text-sm text-finox-gray">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-xl">{item}</span>
        </div>
      ))}
    </div>
  );
}

type BuildStepCardsProps = {
  items: string[];
};

export function BuildStepCards({ items }: BuildStepCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={item} className="flex flex-col justify-between rounded-3xl border border-finox-slate p-8">
          <span className="mb-4 text-xs uppercase tracking-widest text-finox-gray">Step {index + 1}</span>
          <p className="text-xl leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}
