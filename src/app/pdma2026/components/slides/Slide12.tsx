import { B, MAGENTA, Stage, T } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";

const framework = [["A", "Authority"], ["G", "Guardrails"], ["E", "Evidence"], ["N", "Network & Integrations"], ["T", "Transfer & Escalation"], ["S", "Success & Accountability"]] as const;
const requirements = [["A", "The agent may recommend a\nretention intervention, but cannot\npublish or launch it."], ["G", "Recommendations must stay within\napproved product surfaces and\nbusiness rules."], ["E", "Keep a clear record of the recommendation,\nthe inputs that drove it, and the final\ndecision."], ["N", "Agent has read/write access to Salesforce,\nbut cannot change customer payment data."], ["T", "CS Lead approval is required before an agent\ncan update a customer’s payment data."], ["S", "Measure retention lift, recommendation\naccuracy, false-positive rate, and human\noverride rate."]] as const;

function FrameworkMonolith() {
  const g = pdmaGeometry.slide12.frameworkPanel;
  return <div style={{ position: "absolute", left: g.x, top: g.y, width: g.width, height: g.height, zIndex: 2, boxSizing: "border-box", padding: "26px 30px 0", background: "#101114", border: "2px solid #3e4147", borderRadius: 12, color: "#f2f2f5" }}>
      <T x={30} y={g.headingY} w={540} size={28} weight={600} color="#7a7d85"><span>A.G.E.N.T.S</span>{" "}<span>FRAMEWORK</span></T>
      {framework.map(([letter, label], i) => <div key={letter} style={{ position: "absolute", left: 26, top: g.rowStart + i * g.rowPitch, width: g.width - 52, height: g.rowPitch }}>
        <T x={0} y={0} w={34} size={28} weight={700}>{letter}</T>
        <T x={58} y={2} w={g.width - 120} size={20}>{label}</T>
        <B x={0} y={g.rowPitch - 1} w={g.width - 52} h={1} bg="#35383d" />
      </div>)}
  </div>;
}

function RequirementsMonolith() {
  const g = pdmaGeometry.slide12.requirementsPanel;
  return <div style={{ position: "absolute", left: g.x, top: g.y, width: g.width, height: g.height, zIndex: 2, boxSizing: "border-box", padding: "26px 30px 0", background: "#17181c", border: `2px solid ${MAGENTA}`, borderRadius: 12, color: "#f2f2f5" }}>
      <T x={30} y={g.headingY} w={580} size={24} weight={600}>PRODUCT REQUIREMENTS</T>
      <B x={22} y={g.headerRuleY} w={g.width - 44} h={1} bg="rgba(242,242,245,.45)" />
      {requirements.map(([letter, copy], i) => <div key={letter} style={{ position: "absolute", left: 28, top: g.rowStart + i * g.rowPitch, width: g.width - 56, height: g.rowPitch }}>
        <T x={0} y={6} w={34} size={28} weight={700} color={MAGENTA}>{letter}</T>
        <T x={58} y={5} w={38} size={24}>→</T>
        <T x={104} y={0} w={g.width - 170} size={17} line={19}>{copy}</T>
        <B x={0} y={g.rowPitch - 1} w={g.width - 56} h={1} bg="rgba(242,242,245,.28)" />
      </div>)}
  </div>;
}

function TransformationArrow() {
  const { arrow } = pdmaGeometry.slide12;
  return <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: 1920, height: 1080, pointerEvents: "none", zIndex: 3 }} viewBox="0 0 1920 1080">
    <line x1={arrow.x1} y1={arrow.y} x2={arrow.x2 - 24} y2={arrow.y} stroke={MAGENTA} strokeWidth="5" />
    <polygon points={`${arrow.x2 - 24},${arrow.y - 18} ${arrow.x2},${arrow.y} ${arrow.x2 - 24},${arrow.y + 18}`} fill={MAGENTA} />
  </svg>;
}

export function Slide12() {
  return <Stage>
    <B x={0} y={0} w={1920} h={1080} bg="#090909" />
    <B x={0} y={330} w={1920} h={670} bg="#0a0b0d" />
    <FrameworkMonolith />
    <RequirementsMonolith />
    <TransformationArrow />
  </Stage>;
}
