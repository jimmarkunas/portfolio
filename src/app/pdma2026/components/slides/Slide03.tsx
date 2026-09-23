import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { PdmaSlideBody } from "../PdmaSlideBody";
import { pdmaGeometry } from "../../pdmaGeometry";
import { ImageLayer, asset } from "./slideShared";
import { slide03Processes } from "../../content/slide-content";

const { copilot, agent } = slide03Processes;
function Process({ items, accentIndex = -1 }: { items: readonly (readonly [string, string])[]; accentIndex?: number }) { return <div className="s03-process">{items.map(([glyph, label], index) => <div className={`s03-step ${index === accentIndex ? "is-accent" : ""}`} key={label}><div className="s03-step-circle">{glyph}</div><span>{label}</span>{index < items.length - 1 && <b>→</b>}</div>)}</div>; }

export function Slide03() {
  const g = pdmaGeometry.slide03;
  return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s03"><PdmaSlideBody className="pdma-slide-body-03"><ImageLayer className="s03-left" geometry={g.leftPlanet} src={asset("slide-03", "02283.png")} /><ImageLayer className="s03-right" geometry={g.rightPlanet} src={asset("slide-03", "44753.png")} delay={.2} /><section className="s03-panel s03-panel-copilot" style={{ top: g.panel.y, width: g.panel.width, height: g.panel.height, left: g.panel.copilotX }}><h2>C O P I L O T</h2><p className="s03-descriptor">A S S I S T S&nbsp;&nbsp; W I T H&nbsp;&nbsp; O U T P U T S</p><Process items={copilot} accentIndex={3}/><hr/><p className="s03-boundary-copy">Human remains the execution boundary.</p></section><section className="s03-panel s03-panel-agent" style={{ top: g.panel.y, width: g.panel.width, height: g.panel.height, left: g.panel.agentX }}><h2>A G E N T</h2><p className="s03-descriptor">A C T S&nbsp;&nbsp; I N&nbsp;&nbsp; T H E&nbsp;&nbsp; R E A L&nbsp;&nbsp; W O R L D</p><Process items={agent} accentIndex={1}/><hr/><p className="s03-boundary-copy">AI can now cross the execution boundary.</p><p className="s03-capabilities">READ&nbsp;&nbsp; • &nbsp;&nbsp;WRITE&nbsp;&nbsp; • &nbsp;&nbsp;SEND&nbsp;&nbsp; • &nbsp;&nbsp;SPEND</p></section><i className="s03-panel-divider" style={{ left: g.divider.x, top: g.divider.y, height: g.divider.height }}/><div className="s03-takeaway" style={{ left: g.takeaway.x, top: g.takeaway.y, width: g.takeaway.width, height: g.takeaway.height }}><i/><strong>WHEN AI BECOMES AN OPERATOR, AUTHORITY BECOMES A PRODUCT DECISION.</strong></div></PdmaSlideBody></div></PdmaSlideCanvas>;
}
