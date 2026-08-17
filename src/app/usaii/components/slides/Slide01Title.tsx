"use client";

import { Card, CenteredNode, CircleIcon, Eyebrow, ShortRule, SlideStage, icons, pxFont, pxH, pxW, pxX, pxY, usaii } from "../UsaiiSlidePrimitives";
import { UsaiiFixedStage } from "../UsaiiFixedStage";

const G = {
  eyebrow: { x: 78, y: 62 },
  eyebrowRule: { x: 78, y: 112, w: 120 },
  title: { x: 78, y: 265, w: 830, fontSize: 75, lineHeight: 1.12 },
  subtitle: { x: 78, y: 536, fontSize: 40 },
  nameRule: { x: 78, y: 631, w: 270 },
  name: { x: 78, y: 669, fontSize: 33 },
  diagram: {
    guardrails: { x: 1192, y: 100, w: 166, h: 190 },
    authority: { x: 952, y: 310, w: 152, h: 187 },
    agent: { x: 1174, y: 326, w: 204, h: 247 },
    evidence: { x: 1446, y: 310, w: 151, h: 187 },
    network: { x: 963, y: 584, w: 161, h: 182 },
    transfer: { x: 1201, y: 618, w: 151, h: 182 },
    success: { x: 1422, y: 586, w: 171, h: 182 },
  },
  pills: [78, 250, 421, 588, 746, 913],
} as const;

const pills = [
  [78, "Authority", icons.authority],
  [250, "Guardrails", icons.guardrails],
  [421, "Evidence", icons.evidence],
  [588, "Network", icons.network],
  [746, "Transfer", icons.transfer],
  [913, "Success", icons.success],
] as const;

const nodes = [
  { ...G.diagram.guardrails, title: "Guardrails", body: <>Policies, safety<br />and compliance</>, icon: icons.guardrails },
  { ...G.diagram.authority, title: "Authority", body: <>Accountable<br />and scoped</>, icon: icons.authority },
  { ...G.diagram.evidence, title: "Evidence", body: <>Grounded, cited<br />and auditable</>, icon: icons.evidence },
  { ...G.diagram.network, title: "Network", body: <>Connected systems<br />and data</>, icon: icons.network },
  { ...G.diagram.transfer, title: "Transfer", body: <>Handoffs with<br />context</>, icon: icons.transfer },
  { ...G.diagram.success, title: "Success", body: <>Outcomes measured<br />and improved</>, icon: icons.success },
];

export function Slide01Title() {
  return (
    <UsaiiFixedStage>
      <SlideStage>
      <Eyebrow />
      <ShortRule y={G.eyebrowRule.y} />

      <h1 className="absolute m-0 font-bold tracking-[-0.062em]" style={{ left: pxX(G.title.x), top: pxY(G.title.y), width: pxW(G.title.w), fontSize: pxFont(G.title.fontSize), lineHeight: G.title.lineHeight }}>
        <span className="block">How to Turn</span>
        <span className="block">AI Agents Into</span>
        <span className="block">Governed Digital Products</span>
      </h1>
      <div className="absolute text-[#6f747c] tracking-[-0.05em]" style={{ left: pxX(G.subtitle.x), top: pxY(G.subtitle.y), fontSize: pxFont(G.subtitle.fontSize), fontWeight: 400, lineHeight: 1.1 }}>Enterprise Agent Operating Model</div>
      <div className="absolute h-px bg-[#d8d8d6]" style={{ left: pxX(G.nameRule.x), top: pxY(G.nameRule.y), width: pxW(G.nameRule.w) }} />
      <div className="absolute tracking-[-0.04em]" style={{ left: pxX(G.name.x), top: pxY(G.name.y), fontSize: pxFont(G.name.fontSize), fontWeight: 400, lineHeight: 1.1 }}>Jim Markunas</div>

      <svg className="absolute z-0" style={{ inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1672 941" preserveAspectRatio="none">
        <path d="M1047 584V411C1047 265 1142 183 1275 183C1408 183 1501 265 1501 411V584" fill="none" stroke="#cfd4da" strokeDasharray="5 7" strokeWidth="1.5" />
        <path d="M1276 290V326M1104 411H1174M1378 411H1446M1276 573V618M1047 584V545H1174M1378 545H1507V586M1124 675H1201M1352 675H1422" fill="none" stroke="#c5cbd2" strokeWidth="1.6" />
        {[[1276,290],[1276,326],[1104,411],[1174,411],[1378,411],[1446,411],[1276,573],[1276,618],[1047,584],[1507,586]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill="#9ea5ae" />)}
      </svg>

      {nodes.map((n) => <CenteredNode key={n.title} {...n} />)}
      <Card {...G.diagram.agent}>
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: pxY(27) }}><CircleIcon icon={icons.agent} active size={76} /></div>
        <div className="absolute left-0 right-0 text-center font-semibold tracking-[-0.04em]" style={{ top: "56%", fontSize: pxFont(23) }}>AI Agent</div>
        <div className="absolute left-0 right-0 text-center leading-[1.25] text-[#6f747c]" style={{ top: "72%", fontSize: pxFont(20) }}>Purpose-built<br />and reliable</div>
      </Card>

      {pills.map(([, label, Icon], index) => {
        const x = G.pills[index];
        return (
        <div key={label} className="absolute z-10 flex items-center justify-center gap-[11px] rounded-full border bg-white/60" style={{ left: pxX(x), top: pxY(806), width: pxW(154), height: pxH(54), borderColor: usaii.line, fontSize: pxFont(17) }}>
          <Icon color={label === "Success" ? usaii.blue : "#3d434b"} strokeWidth={1.6} style={{ width: pxW(24), height: pxW(24) }} />
          <span>{label}</span>
        </div>
        );
      })}
      </SlideStage>
    </UsaiiFixedStage>
  );
}
