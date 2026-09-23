import { Brain, ClipboardCheck, Database, Layers3, Network, UserRound, UsersRound, BarChart3 } from "lucide-react";
import { PdmaSlide } from "./PdmaSlideBody";
import { pdmaAssets } from "../pdmaAssets";
import { pdmaGeometry } from "../pdmaGeometry";
import { slide06Inventory, slide06Owners } from "../content/slide-content";
import { B, Img, MAGENTA, MUTED, T, WHITE } from "./pdmaPrimitives";

const inventoryIcons = [Layers3, Database, UsersRound, Network];
const ownerIcons = [UserRound, ClipboardCheck, BarChart3];

type ConnectorGeometry = { cardX: number; cardY: number; portX: number; portY: number; elbowX: number; bend?: number };

function connectorPath(c: ConnectorGeometry, side: "left" | "right") {
  const dir = side === "left" ? 1 : -1;
  const bend = c.bend ?? 32;
  return [`M ${c.cardX} ${c.cardY}`, `H ${c.elbowX}`, `C ${c.elbowX + dir * bend} ${c.cardY}, ${c.elbowX + dir * bend} ${c.portY}, ${c.portX} ${c.portY}`].join(" ");
}

export function Slide06() {
  const g = pdmaGeometry.slide06;
  return <PdmaSlide surfaceClassName="pdma-s06-exact" bodyClassName="pdma-slide-body-06" surfaceStyle={{ background: "#090909", color: WHITE }}>
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#090909" }}>
      <T geometry={g.headings.inventory} weight={700} color={MAGENTA}>DO THE INVENTORY</T><T geometry={g.headings.automation} weight={700} color={MAGENTA} align="center">AUTOMATION</T><T geometry={g.headings.owners} weight={700} color={MAGENTA} align="left">NAME THE OWNERS</T>
      <Img src={pdmaAssets.slide06.ring} geometry={g.ring} fit="contain" />
      <svg viewBox="0 0 1920 1080" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
        {g.connectors.left.map((c, i) => <path key={`l${i}`} d={connectorPath(c, "left")} fill="none" stroke="#d6d8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />)}
        {g.connectors.right.map((c, i) => <path key={`r${i}`} d={connectorPath(c, "right")} fill="none" stroke="#d6d8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />)}
        {g.connectors.left.map((c, i) => <g key={`ld${i}`}><circle cx={c.cardX} cy={c.cardY} r="5" fill={MAGENTA} /><circle cx={c.portX} cy={c.portY} r="5" fill={MAGENTA} /></g>)}
        {g.connectors.right.map((c, i) => <g key={`rd${i}`}><circle cx={c.cardX} cy={c.cardY} r="5" fill={MAGENTA} /><circle cx={c.portX} cy={c.portY} r="5" fill={MAGENTA} /></g>)}
      </svg>
      {slide06Inventory.map(([title, body], i) => { const Icon = inventoryIcons[i]; const y = g.inventoryCards.y + i * g.inventoryCards.pitch; return <div key={title} style={{ position: "absolute", left: g.inventoryCards.x, top: y, width: g.inventoryCards.width, height: g.inventoryCards.height, boxSizing: "border-box", background: "rgba(18,21,24,.88)", border: "1px solid #44464a", borderRadius: g.card.radius, zIndex: 2 }}><Icon size={g.card.icon.size} color={WHITE} strokeWidth={1.8} style={{ position: "absolute", left: g.card.icon.x, top: g.card.icon.y }} aria-hidden /><T x={g.card.title.x} y={g.card.title.y} w={g.card.title.width} size={g.card.title.size} weight={700} tracking={g.card.title.tracking}>{title}</T><T x={g.card.body.x} y={g.card.body.y} w={g.card.body.width} size={g.card.body.size} line={g.card.body.line} color={MUTED}>{body}</T></div>; })}
      {slide06Owners.map(([title, body], i) => { const Icon = ownerIcons[i]; const y = g.ownerCards.y + i * g.ownerCards.pitch; return <div key={title} style={{ position: "absolute", left: g.ownerCards.x, top: y, width: g.ownerCards.width, height: g.ownerCards.height, boxSizing: "border-box", background: "rgba(31,3,20,.82)", border: "1px solid rgba(255,47,174,.8)", borderRadius: g.card.radius, zIndex: 2 }}><Icon size={g.ownerCard.icon.size} color={MAGENTA} strokeWidth={1.8} style={{ position: "absolute", left: g.ownerCard.icon.x, top: g.ownerCard.icon.y }} aria-hidden /><T x={g.ownerCard.title.x} y={g.ownerCard.title.y} w={g.ownerCard.title.width} size={g.ownerCard.title.size} weight={700} color={MAGENTA} tracking={g.ownerCard.title.tracking}>{title}</T><T x={g.ownerCard.body.x} y={g.ownerCard.body.y} w={g.ownerCard.body.width} size={g.ownerCard.body.size} line={g.ownerCard.body.line}>{body}</T></div>; })}
      <div style={{ position: "absolute", left: g.core.x - 140, top: g.core.y, width: 280, height: 220, zIndex: 2, textAlign: "center" }}>
        <div style={{ position: "absolute", left: 90, top: 0, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,47,174,.14) 0%, rgba(255,47,174,.04) 52%, transparent 72%)" }} />
        <Brain size={g.core.iconSize} color={MAGENTA} strokeWidth={1.2} aria-hidden style={{ position: "absolute", left: 90, top: 0 }} />
        <T x={80} y={108} w={120} size={60} weight={800} align="center">AI</T>
      </div>
      <T geometry={g.awareness} weight={600} color={WHITE} align="center" tracking={g.awareness.tracking}>MORE AWARENESS <span style={{ color: MAGENTA }}>→</span> BETTER AUTONOMY</T>
    </div>
  </PdmaSlide>;
}
