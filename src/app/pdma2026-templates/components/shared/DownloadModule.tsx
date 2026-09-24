"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import type { EndCardTemplateContent } from "../../templateTypes";
import { createQrMatrix } from "./qrMatrix";

const QUIET_ZONE = 4;

/** QR code rendered natively (SVG modules) from the given value. */
export function NativeQrCode({ value, label }: { value: string; label: string }) {
  const matrix = useMemo(() => createQrMatrix(value), [value]);
  const size = matrix.length + QUIET_ZONE * 2;
  const path = useMemo(() => matrix.flatMap((row, y) => row.map((dark, x) => (dark ? `M${x + QUIET_ZONE} ${y + QUIET_ZONE}h1v1h-1z` : ""))).join(""), [matrix]);
  return <svg className="pdmat-qr" viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" role="img" aria-label={label} data-qr-value={value}>
    <rect width={size} height={size} fill="#ffffff" />
    <path d={path} fill="#090909" />
  </svg>;
}

/** End Card download module: native QR + kit copy + native round CTA, all bound to one URL. */
export function DownloadModule({ download }: { download: EndCardTemplateContent["download"] }) {
  const { url, eyebrow, title, description, teamPrompt, actions, ctaLabel, qrAriaLabel } = download;
  return <section className="pdmat-download" aria-label={title}>
    <a className="pdmat-download__qr" href={url} target="_blank" rel="noreferrer" aria-label={qrAriaLabel}>
      <NativeQrCode value={url} label={qrAriaLabel} />
    </a>
    <i className="pdmat-download__divider" aria-hidden="true" />
    <div className="pdmat-download__copy">
      <p className="pdmat-download__eyebrow">{eyebrow}</p>
      <h2 className="pdmat-download__title">{title}</h2>
      <p className="pdmat-download__description">{description}</p>
      <p className="pdmat-download__prompt">{teamPrompt}</p>
      <ul className="pdmat-download__actions">{actions.map((action) => <li key={action}>{action}</li>)}</ul>
    </div>
    <a className="pdmat-download__cta" href={url} target="_blank" rel="noreferrer">
      <ArrowRight aria-hidden="true" size={34} strokeWidth={2} />
      <span>{ctaLabel}</span>
    </a>
  </section>;
}
