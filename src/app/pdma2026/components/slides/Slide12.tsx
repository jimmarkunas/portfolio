import { B, MAGENTA, Stage } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";

const framework = [["A", "Authority"], ["G", "Guardrails"], ["E", "Evidence"], ["N", "Network & Integrations"], ["T", "Transfer & Escalation"], ["S", "Success & Accountability"]] as const;
const requirements = [["A", "The agent may recommend a retention intervention, but cannot publish or launch it."], ["G", "Recommendations must stay within approved product surfaces and business rules."], ["E", "Keep a clear record of the recommendation, the inputs that drove it, and the final decision."], ["N", "Agent has read/write access to Salesforce, but cannot change customer payment data."], ["T", "CS Lead approval is required before an agent can update a customer’s payment data."], ["S", "Measure retention lift, recommendation accuracy, false-positive rate, and human override rate."]] as const;
const panelText = { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" };

function FrameworkPanel() {
  const g = pdmaGeometry.slide12.frameworkPanel;
  return <article style={{ width: "100%", height: "auto", minHeight: 560, boxSizing: "border-box", padding: "32px 27px", display: "flex", flexDirection: "column", background: "#101114", border: "2px solid #3e4147", borderRadius: 12, color: "#f2f2f5", ...panelText }}>
    <div style={{ fontSize: 40, lineHeight: "50px", fontWeight: 600, color: "#f2f2f5", whiteSpace: "nowrap" }}>A.G.E.N.T.S FRAMEWORK</div>
    <div style={{ marginTop: 40, flex: 1, display: "grid", gridTemplateRows: "repeat(6, minmax(58px, 1fr))" }}>{framework.map(([letter, label], i) => <div key={letter} style={{ minHeight: 58, boxSizing: "border-box", display: "grid", gridTemplateColumns: "65px 1fr", columnGap: 32, alignItems: "center", borderBottom: i === framework.length - 1 ? undefined : "1px solid #35383d" }}><div style={{ fontSize: 58, lineHeight: "65px", fontWeight: 700 }}>{letter}</div><div style={{ fontSize: 40, lineHeight: "49px" }}>{label}</div></div>)}</div>
  </article>;
}

function RequirementsPanel() {
  const g = pdmaGeometry.slide12.requirementsPanel;
  return <article style={{ width: "100%", height: "auto", minHeight: 670, boxSizing: "border-box", padding: "32px 27px", display: "flex", flexDirection: "column", background: "#17181c", border: `2px solid ${MAGENTA}`, borderRadius: 12, color: "#f2f2f5", ...panelText }}>
    <div style={{ fontSize: 40, lineHeight: "50px", fontWeight: 600, whiteSpace: "nowrap" }}>PRODUCT REQUIREMENTS</div>
    <div style={{ marginTop: 40, flex: 1, display: "grid", gridTemplateRows: "repeat(6, minmax(86px, 1fr))" }}>{requirements.map(([letter, copy], i) => <div key={letter} style={{ minHeight: 86, boxSizing: "border-box", display: "grid", gridTemplateColumns: "25px 20px 1fr", columnGap: 13, alignItems: "center", borderBottom: i === requirements.length - 1 ? undefined : "1px solid rgba(242,242,245,.28)" }}><div style={{ color: MAGENTA, fontSize: 27, lineHeight: "32px", fontWeight: 700 }}>{letter}</div><div style={{ fontSize: 20, lineHeight: "25px" }}>→</div><div style={{ fontSize: 20, lineHeight: "25px" }}>{copy}</div></div>)}</div>
  </article>;
}

function TransformationLane() {
  return <svg aria-hidden="true" width="96" height="100%" viewBox="0 0 96 535" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}><path d="M 0 267.5 H 72" fill="none" stroke={MAGENTA} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" /><svg x="58" y="258.5" width="18" height="18" viewBox="0 0 18 18" preserveAspectRatio="none"><path d="M 2 2 L 16 9 L 2 16 Z" fill={MAGENTA} /></svg></svg>;
}

export function Slide12() {
  const g = pdmaGeometry.slide12;
  return <Stage><B x={0} y={0} w={1920} h={1080} bg="#090909" /><B x={0} y={330} w={1920} h={670} bg="#0a0b0d" /><div style={{ position: "absolute", left: g.body.x, top: g.body.y, width: g.body.width, height: g.body.height, display: "grid", gridTemplateColumns: "minmax(520px, 0.95fr) 96px minmax(560px, 1.05fr)", columnGap: 40, alignItems: "stretch" }}><FrameworkPanel /><TransformationLane /><RequirementsPanel /></div></Stage>;
}
