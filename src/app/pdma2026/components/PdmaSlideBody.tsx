import type { ReactNode } from "react";

/**
 * Boundary for imported slide-body work. Presentation chrome is deliberately
 * rendered outside this component by PdmaPresentationShell.
 */
export function PdmaSlideBody({ className, children }: { className: string; children: ReactNode }) {
  return <div className={`pdma-slide-body ${className}`} data-responsive-slide-body>{children}</div>;
}
