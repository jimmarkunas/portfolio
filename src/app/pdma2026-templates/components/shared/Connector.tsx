import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

type ConnectorKind = "glyph" | "rail" | "flow";

/**
 * Flow-native connector cell. It lives in its own grid/flex cell between the two endpoints
 * it joins; dots are positioned inside this bounded connector cell only.
 */
export function Connector({ kind, startDot = false, endDot = false, arrow = false, className = "" }: { kind: ConnectorKind; startDot?: boolean; endDot?: boolean; arrow?: boolean; className?: string }) {
  if (kind === "glyph") return <span className={`pdmat-connector pdmat-connector--glyph ${className}`.trim()} aria-hidden="true">→</span>;
  if (kind === "rail") return <span className={`pdmat-connector pdmat-connector--rail ${className}`.trim()} aria-hidden="true"><i /><ArrowRight size={26} strokeWidth={2} /><i /></span>;
  return <span className={`pdmat-connector pdmat-connector--flow${arrow ? " has-arrow" : ""} ${className}`.trim()} aria-hidden="true">
    {startDot && <b className="pdmat-connector__dot pdmat-connector__dot--start" />}
    <i />
    {arrow && <ArrowRight className="pdmat-connector__arrow" size={30} strokeWidth={2} />}
    {endDot && <b className="pdmat-connector__dot pdmat-connector__dot--end" />}
  </span>;
}

/**
 * Straight fan connector between a bank of equal-height rows and a single port column.
 * `from`/`to` are percentages of the connector cell height; lines stay straight.
 */
export function FanConnector({ side, from, to, className = "" }: { side: "into-right" | "out-of-left"; from: readonly number[]; to: readonly number[]; className?: string }) {
  const bankX = side === "into-right" ? 0 : 100;
  const portX = side === "into-right" ? 100 : 0;
  return <span className={`pdmat-fan pdmat-fan--${side} ${className}`.trim()} aria-hidden="true">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      {from.map((y, index) => <line key={`${y}-${index}`} x1={bankX} y1={y} x2={portX} y2={to[index]} vectorEffect="non-scaling-stroke" />)}
    </svg>
    {from.map((y, index) => <b key={`bank-${index}`} className="pdmat-fan__dot pdmat-fan__dot--bank" style={{ "--dot-y": `${y}%` } as CSSProperties} />)}
    {[...new Set(to)].map((y) => <b key={`port-${y}`} className="pdmat-fan__dot pdmat-fan__dot--port" style={{ "--dot-y": `${y}%` } as CSSProperties} />)}
  </span>;
}
