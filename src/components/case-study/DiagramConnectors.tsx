"use client"

import { C, DUR, DELAYS } from "./diagramUtils";

export function MobileConnector({ fid }: { fid: string }) {
  const H = 44;
  return (
    <svg width="100%" height={H} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <filter id={fid} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <line x1="50%" y1="0" x2="50%" y2={H} stroke={C.border} strokeWidth="1.5" />
      {DELAYS.map((delay, i) => (
        <circle key={i} cx="50%" r="4.5" fill={C.accent} filter={`url(#${fid})`} opacity="0">
          <animate attributeName="cy" from="0" to={H} dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
            dur={`${DUR}s`} begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export function MobileFanConnector({ fid }: { fid: string }) {
  const H = 56;
  const targets = ["16%", "50%", "84%"];
  return (
    <svg width="100%" height={H} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <filter id={fid} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {targets.map(tx => (
        <line key={tx} x1="50%" y1="0" x2={tx} y2={H} stroke={C.border} strokeWidth="1.5" />
      ))}
      {targets.map((tx, t) =>
        DELAYS.map((delay, i) => (
          <circle key={`${t}-${i}`} r="4.5" fill={C.accent} filter={`url(#${fid})`} opacity="0">
            <animate attributeName="cx" from="50%" to={tx}
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="cy" from="0" to={H}
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
              dur={`${DUR}s`} begin={`${delay + t * 0.15}s`} repeatCount="indefinite" />
          </circle>
        ))
      )}
    </svg>
  );
}
