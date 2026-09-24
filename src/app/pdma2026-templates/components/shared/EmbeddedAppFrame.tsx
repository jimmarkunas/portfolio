"use client";

import type { KeyboardEvent, ReactNode } from "react";

/**
 * Reusable device/window frame for any live embedded app. The app is a real React child.
 * Key events stay inside the app so typing never triggers deck navigation shortcuts.
 */
export function EmbeddedAppFrame({ label, children }: { label: string; children: ReactNode }) {
  const isolateKeys = (event: KeyboardEvent<HTMLDivElement>) => event.stopPropagation();
  return <section className="pdmat-app-frame" aria-label={label}>
    <div className="pdmat-app-frame__bar" aria-hidden="true"><i /><i /><i /></div>
    <div className="pdmat-app-frame__viewport" onKeyDown={isolateKeys}>{children}</div>
  </section>;
}
