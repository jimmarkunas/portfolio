import { B, MAGENTA, MUTED, Stage, T, WHITE } from "../pdmaPrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";

export function Slide07() {
  const g = pdmaGeometry.slide07;
  const rows = [["ACQUIRE", "LABOR", "FASTER"], ["CONVERT", "COST-TO-SERVE", "SIMPLER"], ["RETAIN", "REWORK", "SCALABLE"], ["EXPAND", "WASTE", "LESS MANUAL"]];
  const cols = [["INCREASE REVENUE", "Does it help us grow top-line value?"], ["DECREASE COST", "Does it remove meaningful cost\nfrom the system?"], ["STREAMLINE OPERATIONS", "Does it make work materially\neasier to run?"]];
  return <Stage>
    <B geometry={g.matrix} bg="#121518" border="1px solid #3a3f44" radius={14}/><B geometry={g.decisionColumn} bg="#15181b" border="1px solid #3a3f44" radius={14}/><B geometry={g.highlightColumn} bg="rgba(36,14,29,.92)" border={`1px solid ${MAGENTA}`}/>
    <T geometry={g.decisionRule.label} weight={600} color={MAGENTA}>DECISION RULE</T><B geometry={g.decisionRule.rule} bg={MUTED}/><T geometry={g.decisionRule.copy} weight={800}>PICK ONE{"\n"}PRIMARY{"\n"}VALUE DRIVER.</T><B geometry={g.decisionRule.supportingRule} bg={MUTED}/><T geometry={g.decisionRule.supportingCopy} color={MUTED}>Use this scorecard to{"\n"}evaluate your concept.{"\n"}A strong product should{"\n"}clearly map to one{"\n"}primary value driver.</T>
    {g.columnDividers.map((x) => <B key={x} x={x} y={g.matrix.y} w={1} h={g.matrix.height} bg="#3a3f44"/>)}{g.rowDividers.map((y) => <B key={y} x={g.columnDividers[0]} y={y} w={1514} h={1} bg="#3a3f44"/>)}
    {cols.map(([title, desc], i) => { const c = g.columnHeading[i]; return <div key={title}><T geometry={c} weight={800} color={i === 0 ? MAGENTA : WHITE}>{title}</T><T x={c.x} y={g.columnBody.y} w={g.columnBody.width} size={g.columnBody.size} line={g.columnBody.line}>{desc}</T></div>; })}
    {rows.map((row, rowIndex) => row.map((label, columnIndex) => { const x = g.row.x[columnIndex], y = g.row.y + rowIndex * g.row.pitch, dot = g.selector.x[columnIndex]; return <div key={label}><T x={x} y={y} w={g.row.width} size={g.row.size} weight={600} line={g.row.line} tracking={g.row.tracking}>{label}</T><div style={{ position:"absolute", left:dot, top:y + g.selector.yOffset, width:g.selector.size, height:g.selector.size, borderRadius:"50%", border:`1.5px solid ${rowIndex === 0 && columnIndex === 0 ? MAGENTA : "#7a7d85"}`, boxSizing:"border-box" }}>{rowIndex === 0 && columnIndex === 0 && <B x={g.selector.innerX} y={g.selector.innerY} w={g.selector.innerSize} h={g.selector.innerSize} bg={MAGENTA} radius={99}/>}</div></div>; }))}
    <B geometry={g.takeawayRule} bg="#3a3f44"/><B geometry={g.takeawayAccent} bg={MAGENTA}/><T geometry={g.takeaway} weight={600}>IF YOU CAN&apos;T IDENTIFY ONE OF THESE OUTCOMES, YOU DON&apos;T HAVE A PRODUCT.</T>
  </Stage>;
}
