import { B, MAGENTA, MUTED, Stage, T, WHITE } from "../pdmaSlidePrimitives";

export function Slide07() {
  const rows = [["ACQUIRE", "LABOR", "FASTER"], ["CONVERT", "COST-TO-SERVE", "SIMPLER"], ["RETAIN", "REWORK", "SCALABLE"], ["EXPAND", "WASTE", "LESS MANUAL"]];
  const cols = [["INCREASE REVENUE", "Does it help us grow top-line value?"], ["DECREASE COST", "Does it remove meaningful cost\nfrom the system?"], ["STREAMLINE OPERATIONS", "Does it make work materially\neasier to run?"]];
  return <Stage>
    <B x={60} y={380} w={1800} h={392} bg="#121518" border="1px solid #3a3f44" radius={14}/><B x={60} y={380} w={286} h={392} bg="#15181b" border="1px solid #3a3f44" radius={14}/><B x={346} y={380} w={504.667} h={392} bg="rgba(36,14,29,.92)" border={`1px solid ${MAGENTA}`}/>
    <T x={86} y={406} w={180} size={15} weight={600} color={MAGENTA} line={20} tracking={3}>DECISION RULE</T><B x={86} y={443} w={44} h={2} bg={MUTED}/><T x={86} y={468} w={190} size={31} weight={800} line={32}>PICK ONE{"\n"}PRIMARY{"\n"}VALUE DRIVER.</T><B x={86} y={590} w={44} h={2} bg={MUTED}/><T x={86} y={594} w={180} size={15} color={MUTED} line={20}>Use this scorecard to{"\n"}evaluate your concept.{"\n"}A strong product should{"\n"}clearly map to one{"\n"}primary value driver.</T>
    {[346, 850.67, 1355.33].map((x) => <B key={x} x={x} y={380} w={1} h={392} bg="#3a3f44"/>)}{[508, 574, 640, 706].map((y) => <B key={y} x={346} y={y} w={1514} h={1} bg="#3a3f44"/>)}
    {cols.map(([title, desc], i) => { const x = [440, 946.67, 1455.33][i]; return <div key={title}><T x={x} y={405} w={360} size={i === 2 ? 24 : 25} weight={800} color={i === 0 ? MAGENTA : WHITE} line={32}>{title}</T><T x={x} y={447} w={345} size={18} line={23}>{desc}</T></div>; })}
    {rows.map((row, rowIndex) => row.map((label, columnIndex) => { const x = [366, 870.67, 1375.33][columnIndex], y = 529 + rowIndex * 66, dot = [640.67, 1147.33, 1652][columnIndex]; return <div key={label}><T x={x} y={y} w={220} size={16} weight={600} line={22} tracking={1.8}>{label}</T><div style={{ position:"absolute", left:dot, top:y - 2, width:24, height:24, borderRadius:"50%", border:`1.5px solid ${rowIndex === 0 && columnIndex === 0 ? MAGENTA : "#7a7d85"}`, boxSizing:"border-box" }}>{rowIndex === 0 && columnIndex === 0 && <B x={6} y={6} w={10} h={10} bg={MAGENTA} radius={99}/>}</div></div>; }))}
    <B x={60} y={830} w={1800} h={2} bg="#3a3f44"/><B x={64} y={865} w={3} h={46} bg={MAGENTA}/><T x={92} y={862} w={1660} size={27} weight={600} line={38}>IF YOU CAN&apos;T IDENTIFY ONE OF THESE OUTCOMES, YOU DON&apos;T HAVE A PRODUCT.</T>
  </Stage>;
}
