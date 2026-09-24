/** Magenta-accented closing statement. Optional aside sits at the far end of the same band. */
export function TakeawayBand({ text, aside, tone = "plain", className = "" }: { text: string; aside?: string; tone?: "plain" | "boxed"; className?: string }) {
  return <div className={`pdmat-takeaway pdmat-takeaway--${tone} ${className}`.trim()}>
    <i className="pdmat-takeaway__accent" aria-hidden="true" />
    <p className="pdmat-takeaway__text">{text}</p>
    {aside && <p className="pdmat-takeaway__aside">{aside}</p>}
  </div>;
}
