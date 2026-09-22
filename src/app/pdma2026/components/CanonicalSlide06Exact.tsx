import type { ReactNode } from "react";
import { PdmaSlideCanvas } from "../PdmaPresentationShell";
import { pdmaAssets } from "../pdmaAssets";
import { B, Img } from "./pdmaSlidePrimitives";

const WHITE = "#f2f2f2";
const MAGENTA = "#ff2fae";
const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";
const T = ({ x, y, w, size, weight = 400, color = WHITE, line = "normal", tracking, children }: { x:number; y:number; w?:number; size:number; weight?:number; color?:string; line?:number|string; tracking?:number; children:ReactNode }) => <div style={{ position:"absolute", left:x, top:y, width:w, margin:0, fontFamily:FONT, fontSize:size, fontWeight:weight, color, lineHeight:typeof line === "number" ? `${line}px` : line, letterSpacing:tracking, whiteSpace:"pre-wrap" }}>{children}</div>;

const inventory = [
  ["SYSTEMS","What applications and\nplatforms are involved?","icon-systems.svg",27,24,34.74,36.54],
  ["DATA","What information does the\nproduct depend on?","icon-data.svg",37.53,29.13,27.54,36.54],
  ["PEOPLE","Who uses, owns, or\nsupports the workflow?","icon-people.svg",28.62,29.22,48.97,36.19],
  ["DEPENDENCIES","What breaks if one\npart fails?","icon-dependencies.svg",32.13,28.23,39.24,40.15],
] as const;

const owners = [
  ["SYSTEM OWNER","Who owns the system\nthe agent touches?","icon-system-owner.svg",37.63,43.93,29.34,35.37],
  ["DECISION OWNER","Who owns the authority\nbeing delegated?","icon-decision-owner.svg",28,37,48.6,48.6],
  ["OUTCOME OWNER","Who is accountable\nfor the result?","icon-outcome-owner.svg",34.93,43.93,34.74,34.74],
] as const;

export function Slide06() {
  return <PdmaSlideCanvas><div style={{ position:"absolute", inset:0, width:1920, height:1080, overflow:"hidden", background:"#090909", color:WHITE, fontFamily:FONT }}>
    <div style={{ position:"absolute", left:0, top:76, width:1920, height:909, overflow:"hidden", background:"#040405" }}>
      {/* These files are already Figma-rendered node exports; do not apply node opacity a second time. */}
      <Img src={pdmaAssets.slide06.nebula} x={-120} y={0} w={980} h={909} fit="cover" />
      <Img src={pdmaAssets.slide06.planet} x={-590} y={-20} w={1020} h={1020} />
      <Img src={pdmaAssets.slide06.secondaryMoon} x={370} y={350} w={128} h={128} />
      <Img src={pdmaAssets.slide06.smallMoon} x={468} y={470} w={44} h={44} />
      <Img src={pdmaAssets.slide06.rings} x={1020} y={-18} w={820} h={340} fit="cover" />

      <T x={58} y={338} w={230} size={17} weight={500} color="#94969e" line={29} tracking={6}>MORE{"\n"}AWARENESS{"\n"}BETTER{"\n"}AUTONOMY</T>
      <B x={58} y={468} w={48} h={3} bg={MAGENTA} />


      <T x={598} y={288} w={400} size={17} weight={600} color={MAGENTA} tracking={5}>DO THE INVENTORY</T>
      <T x={1415} y={288} w={360} size={17} weight={600} color={MAGENTA} tracking={5}>NAME THE OWNERS</T>

      {/* Exact Figma connector export: frame y=374/h=366 with -0.27% vertical inset => rendered y≈373/h=368. */}
      <Img src={pdmaAssets.slide06.connectors} x={1118} y={373} w={291} h={368} />
      <B x={1277} y={513} w={28} h={28} bg="rgba(255,47,174,.2)" radius={99} />
      <B x={1285} y={521} w={14} h={14} bg="#f2f2f2" border={`3px solid ${MAGENTA}`} radius={99} />

      {inventory.map(([title, body, icon, ix, iy, iw, ih], i) => <div key={title} style={{ position:"absolute", left:598, top:322 + i * 122, width:520, height:104, boxSizing:"border-box", background:"rgba(14,17,20,.88)", border:"1.5px solid rgba(255,47,174,.65)", borderRadius:12 }}>
        <Img src={`/pdma2026/slide-06/${icon}`} x={ix} y={iy} w={iw} h={ih} />
        <T x={137} y={18} w={310} size={22} weight={700} tracking={1.5}>{title}</T>
        <T x={137} y={48} w={315} size={18} line={25}>{body}</T>
        <T x={462} y={32} w={45} size={34} color={MAGENTA}>→</T>
        <B x={514} y={47} w={10} h={10} bg="#f2f2f2" border={`2px solid ${MAGENTA}`} radius={99} />
      </div>)}

      {owners.map(([title, body, icon, ix, iy, iw, ih], i) => <div key={title} style={{ position:"absolute", left:1415, top:322 + i * 152, width:430, height:140, boxSizing:"border-box", background:"rgba(31,3,20,.86)", border:"1.5px solid rgba(255,47,174,.8)", borderRadius:12 }}>
        <Img src={`/pdma2026/slide-06/${icon}`} x={ix} y={iy} w={iw} h={ih} />
        <T x={135} y={25} w={245} size={20} weight={700} color={MAGENTA} tracking={1.2}>{title}</T>
        <B x={135} y={58} w={210} h={1.5} bg="rgba(255,47,174,.55)" />
        <T x={135} y={73} w={240} size={18} line={25}>{body}</T>
        <B x={-6} y={65} w={10} h={10} bg="#f2f2f2" border={`2px solid ${MAGENTA}`} radius={99} />
      </div>)}

      <B x={48} y={820} w={1820} h={1.5} bg="rgba(92,94,102,.9)" />
      <B x={48} y={850} w={3} h={44} bg={MAGENTA} />
      <T x={78} y={850} w={1320} size={26} weight={700}>AUTOMATION CHANGES EXECUTION. IT DOES NOT ERASE OWNERSHIP.</T>
    </div>
  </div></PdmaSlideCanvas>;
}
