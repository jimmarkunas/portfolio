import type { Slide6NodeLayout } from "./slide6Diagram.types";

interface JiraDiagramCardProps {
  node: Slide6NodeLayout;
  typeLabel: string;
  bodyLabel: string;
}

const DOT_COLORS = {
  blue: "#477ACB",
  dark: "#222222",
  red: "#FF0000",
} as const;

export default function JiraDiagramCard({ node, typeLabel, bodyLabel }: JiraDiagramCardProps) {
  const isDark = node.theme === "dark";

  return (
    <div
      className={`absolute z-20 inline-flex flex-col items-center justify-center overflow-hidden rounded-[10px] border p-2.5 text-center transition-colors duration-150 ${
        isDark
          ? "bg-[#222222] border-[#F3F3F3] text-white"
          : "bg-[#F3F3F3] border-[#222222] text-[#222222]"
      }`}
      style={{
        left: node.x,
        top: node.y,
        width: node.w,
        height: node.h,
      }}
    >
      <div className="flex h-6 w-full items-center justify-center gap-3">
        <span
          aria-hidden="true"
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: DOT_COLORS[node.dotTone] }}
        />
        <span className="text-base font-bold">{typeLabel}</span>
      </div>
      <div className="mt-2 flex w-full flex-col items-center justify-center">
        <p className="w-full text-center text-sm font-medium leading-tight">
          {bodyLabel}
        </p>
      </div>
    </div>
  );
}
