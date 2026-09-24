import type { ReactNode } from "react";
import { Connector } from "./Connector";

export type FlowRailStep = { key: string; number?: string; circle: ReactNode; title: string; body?: string; emphasis?: boolean };

/**
 * Horizontal step rail. Each step (and its outgoing connector) is a subgrid of the rail,
 * so every circle shares one row and every connector cell centers on that circle axis.
 * Step copy sits beneath, centered on its circle.
 */
export function FlowRail({ steps, variant, className = "" }: { steps: readonly FlowRailStep[]; variant: "process" | "rail"; className?: string }) {
  return <ol className={`pdmat-rail pdmat-rail--${variant} pdmat-rail--${steps.length}-steps ${className}`.trim()}>
    {steps.map((step, index) => <li key={step.key} className={`pdmat-rail__step${step.emphasis ? " is-emphasis" : ""}`}>
      {step.number && <span className="pdmat-rail__number">{step.number}</span>}
      <span className="pdmat-rail__circle">{step.circle}</span>
      <span className="pdmat-rail__copy"><strong className="pdmat-rail__title">{step.title}</strong>{step.body && <span className="pdmat-rail__body">{step.body}</span>}</span>
      {index < steps.length - 1 && <span className="pdmat-rail__connector"><Connector kind={variant === "rail" ? "rail" : "glyph"} /></span>}
    </li>)}
  </ol>;
}
