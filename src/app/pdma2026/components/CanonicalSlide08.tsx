import type { LucideIcon } from "lucide-react";
import { Eye, FileText, GitBranch, Settings, Zap } from "lucide-react";
import { pdmaAssets } from "../pdmaAssets";
import { slide08Stages } from "../content/slide-content";
import { pdmaGeometry } from "../pdmaGeometry";
import { B, Img, MAGENTA, MUTED, Stage, T, WHITE } from "./pdmaPrimitives";

const stageIcons: LucideIcon[] = [Eye, FileText, Settings, GitBranch, Zap];

function AuthorityNode({ active, Icon }: { active: boolean; Icon: LucideIcon }) {
  const color = active ? MAGENTA : WHITE;
  return <div style={{ width: 78, height: 78, borderRadius: "50%", border: `3px solid ${color}`, background: "#090909", display: "grid", placeItems: "center", boxSizing: "border-box" }}>
    <Icon size={36} strokeWidth={2.1} color={color} aria-hidden />
  </div>;
}

export function Slide08() {
  const g = pdmaGeometry.slide08;
  return <Stage background="#050505">
    <Img src={`${pdmaAssets.slide08Root}/slide-08-planet-horizon.png`} geometry={g.planet} fit="contain" />
    <Img src={`${pdmaAssets.slide08Root}/slide-08-authority-arc.png`} geometry={g.arc} fit="contain" />
    {slide08Stages.map((stage, index) => {
      const sg = g.stages[index];
      const Icon = stageIcons[index];
      return <div key={stage.n} style={{ position: "absolute", left: g.stageNodes[index].x, top: g.stageNodes[index].y, width: 78, zIndex: 2 }}>
        <T geometry={sg.number} weight={600} color={stage.active ? MAGENTA : MUTED} align="center">{stage.n}</T>
        <AuthorityNode active={stage.active} Icon={Icon} />
        <T geometry={sg.title} weight={700} color={WHITE}>{stage.title}</T>
        <T geometry={sg.body}>{stage.body}</T>
      </div>;
    })}
    <T geometry={g.autonomy} weight={600} tracking={g.autonomy.tracking}>MORE AUTONOMY</T><T x={g.autonomyArrow.x} y={g.autonomyArrow.y} size={g.autonomyArrow.size} color={MAGENTA}>→</T>
    <T geometry={g.consequence} weight={600} tracking={g.consequence.tracking}>MORE CONSEQUENCE</T><T x={g.consequenceArrow.x} y={g.consequenceArrow.y} size={g.consequenceArrow.size} color={MAGENTA}>→</T><T geometry={g.productDesign} weight={600} tracking={g.productDesign.tracking}>MORE PRODUCT DESIGN</T>
    <B geometry={g.takeawayAccent} bg={MAGENTA} /><T geometry={g.takeaway} weight={700}>THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.</T>
  </Stage>;
}
