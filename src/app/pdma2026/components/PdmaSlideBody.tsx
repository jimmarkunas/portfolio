import type { CSSProperties, ReactNode } from "react";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";

export function PdmaSlideSurface({ className = "", style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return <div className={`pdma-slide-surface ${className}`.trim()} style={style}>{children}</div>;
}

/**
 * Boundary for imported slide-body work. Presentation chrome is deliberately
 * rendered outside this component by PdmaPresentationShell.
 */
export function PdmaSlideBody({ className, children }: { className: string; children: ReactNode }) {
  return <div className={`pdma-slide-body ${className}`} data-responsive-slide-body>{children}</div>;
}

export function PdmaSlide({ surfaceClassName = "", bodyClassName, surfaceStyle, children }: { surfaceClassName?: string; bodyClassName: string; surfaceStyle?: CSSProperties; children: ReactNode }) {
  return <PdmaSlideCanvas><PdmaSlideSurface className={surfaceClassName} style={surfaceStyle}><PdmaSlideBody className={bodyClassName}>{children}</PdmaSlideBody></PdmaSlideSurface></PdmaSlideCanvas>;
}
