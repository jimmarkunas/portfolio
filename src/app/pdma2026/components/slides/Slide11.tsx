import { useLayoutEffect, useRef, useState } from "react";
import { pdmaAssets } from "../../pdmaAssets";
import { pdmaGeometry } from "../../pdmaGeometry";
import { slide11Cards } from "../../content/slide-content";
import { Img, MAGENTA, Stage } from "../pdmaPrimitives";

const S = pdmaAssets.slide11Root;
const white = "#f2f2f5";
const muted = "rgba(242,242,245,.78)";
type Rect = { x: number; y: number; width: number; height: number };
type Connector = { d: string; sx: number; sy: number; ex: number; ey: number };

function QuestionCard({ card, register }: { card: (typeof slide11Cards)[number]; register: (letter: string, node: HTMLElement | null) => void }) {
  const [letter, title, question, active] = card;
  return <article ref={(node) => register(letter, node)} style={{ position: "relative", zIndex: 1, width: "100%", height: 128, boxSizing: "border-box", display: "grid", gridTemplateColumns: "70px 2px 1fr", columnGap: 24, alignItems: "center", padding: "24px 28px", background: active ? "#130911" : "#0e0c0e", border: `1px solid rgba(184,23,115,${active ? 1 : .78})`, borderRadius: 14, color: white }}>
    <div style={{ fontSize: 50, lineHeight: "56px", fontWeight: 800, color: MAGENTA, textAlign: "center" }}>{letter}</div>
    <div style={{ width: 2, height: 64, background: "rgba(255,47,174,.65)" }} />
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}><div style={{ fontSize: 22, lineHeight: "27px", fontWeight: 600, letterSpacing: .6 }}>{title}</div><div style={{ marginTop: 11, color: muted, fontSize: 18, lineHeight: "25px" }}>{question}</div></div>
  </article>;
}

function Hub({ register }: { register: (node: HTMLDivElement | null) => void }) {
  return <div ref={register} style={{ position: "relative", zIndex: 1, width: 540, height: 540, justifySelf: "center", gridColumn: 3, gridRow: "1 / 4", alignSelf: "center" }}>
    <Img src={`${S}/6fbf9.svg`} x={0} y={0} w={540} h={540} style={{ position: "absolute", width: "100%", height: "100%" }} alt="" />
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: white }}>
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" style={{ marginBottom: 12 }}><rect x="5" y="3" width="18" height="22" rx="3" fill="none" stroke={MAGENTA} strokeWidth="2" /><path d="M9 9h10M9 14h10M9 19h7" stroke={MAGENTA} strokeWidth="2" strokeLinecap="round" /></svg>
      <div style={{ color: MAGENTA, fontSize: 48, lineHeight: "52px", fontWeight: 800 }}>1</div>
      <div style={{ marginTop: 12, fontSize: 28, lineHeight: "32px", fontWeight: 600 }}>PRODUCTIZATION<br />STANDARD</div>
      <div style={{ marginTop: 20, width: 70, height: 3, background: MAGENTA }} />
      <div style={{ marginTop: 22, fontSize: 16, lineHeight: "23px", fontWeight: 600, letterSpacing: 2 }}>SAME QUESTIONS.<br />SAFER PRODUCTS.<br />HIGHER CONFIDENCE.</div>
    </div>
  </div>;
}

function localRect(element: HTMLElement, root: HTMLElement): Rect {
  const rootRect = root.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  const scaleX = rootRect.width / root.offsetWidth;
  const scaleY = rootRect.height / root.offsetHeight;
  return { x: (rect.left - rootRect.left) / scaleX, y: (rect.top - rootRect.top) / scaleY, width: rect.width / scaleX, height: rect.height / scaleY };
}

function buildConnectors(root: HTMLElement, hubElement: HTMLElement, cards: Record<string, HTMLElement | null>): { width: number; height: number; paths: Connector[] } {
  const rootWidth = root.offsetWidth;
  const rootHeight = root.offsetHeight;
  const hub = localRect(hubElement, root);
  const cx = hub.x + hub.width / 2;
  const cy = hub.y + hub.height / 2;
  const radius = hub.width * (225 / 558);
  const paths: Connector[] = [];
  for (const letter of ["A", "G", "E"]) {
    const card = cards[letter];
    if (!card) continue;
    const r = localRect(card, root);
    const sx = r.x + r.width;
    const sy = r.y + r.height / 2;
    const dx = Math.sqrt(Math.max(0, radius * radius - (sy - cy) ** 2));
    const ex = cx - dx;
    const gap = ex - sx;
    paths.push({ sx, sy, ex, ey: sy, d: `M ${sx} ${sy} C ${sx + gap * .35} ${sy}, ${ex - gap * .35} ${sy}, ${ex} ${sy}` });
  }
  for (const letter of ["N", "T", "S"]) {
    const card = cards[letter];
    if (!card) continue;
    const r = localRect(card, root);
    const ex = r.x;
    const ey = r.y + r.height / 2;
    const dx = Math.sqrt(Math.max(0, radius * radius - (ey - cy) ** 2));
    const sx = cx + dx;
    const gap = ex - sx;
    paths.push({ sx, sy: ey, ex, ey, d: `M ${sx} ${ey} C ${sx + gap * .35} ${ey}, ${ex - gap * .35} ${ey}, ${ex} ${ey}` });
  }
  return { width: rootWidth, height: rootHeight, paths };
}

export function Slide11() {
  const g = pdmaGeometry.slide11;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Record<string, HTMLElement | null>>({});
  const [connector, setConnector] = useState<{ width: number; height: number; paths: Connector[] } | null>(null);
  const registerCard = (letter: string, node: HTMLElement | null) => { cardsRef.current[letter] = node; };

  useLayoutEffect(() => {
    const root = rootRef.current;
    const hub = hubRef.current;
    if (!root || !hub) return;
    let frame = 0;
    const measure = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => setConnector(buildConnectors(root, hub, cardsRef.current))); };
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(hub);
    Object.values(cardsRef.current).forEach((card) => card && observer.observe(card));
    measure();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return <Stage>
    <div ref={rootRef} style={{ position: "absolute", left: g.body.x, right: g.body.x, top: g.body.top, bottom: g.body.bottom, display: "flex", flexDirection: "column", color: white, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "440px 96px 540px 96px 440px", gridTemplateRows: "repeat(3, 160px)", columnGap: 0, rowGap: 30, alignItems: "center", justifyContent: "center", width: "100%", minHeight: g.agentSystem.minHeight }}>
        {connector && <svg aria-hidden="true" viewBox={`0 0 ${connector.width} ${connector.height}`} className="s11-connectors" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none", zIndex: 0 }}>{connector.paths.map((path) => <g key={`${path.sx}-${path.sy}`}><path d={path.d} fill="none" stroke="#B81773" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" /><circle cx={path.sx} cy={path.sy} r="5" fill="#090909" stroke={MAGENTA} strokeWidth="2" vectorEffect="non-scaling-stroke" /><circle cx={path.ex} cy={path.ey} r="5" fill="#090909" stroke={MAGENTA} strokeWidth="2" vectorEffect="non-scaling-stroke" /></g>)}</svg>}
        {slide11Cards.map((card, i) => <div key={card[0]} style={{ gridColumn: i < 3 ? 1 : 5, gridRow: (i % 3) + 1, minWidth: 0, display: "flex", alignItems: "center", zIndex: 1 }}><QuestionCard card={card} register={registerCard} /></div>)}
        <Hub register={(node) => { hubRef.current = node; }} />
      </div>
      <div style={{ minHeight: 64, marginTop: 32, padding: "0 20px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "210px 1fr", alignItems: "center", borderTop: "1px solid #44464a", borderBottom: "1px solid #44464a", fontSize: 18, lineHeight: "24px", fontWeight: 600 }}><div style={{ color: MAGENTA, letterSpacing: 2 }}>USE A.G.E.N.T.S. TO</div><div>write better requirements, define operating boundaries, and make production behavior explicit.</div></div>
      <div style={{ minHeight: 70, marginTop: 24, display: "flex", alignItems: "center" }}><div style={{ width: 4, height: 54, flex: "0 0 auto", background: MAGENTA }} /><div style={{ marginLeft: 28, fontSize: 30, lineHeight: "37px", fontWeight: 600 }}>6 QUESTIONS • 1 PRODUCTIZATION STANDARD</div></div>
    </div>
  </Stage>;
}
