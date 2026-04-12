import type { Slide5LegendLayout } from "./slide5Diagram.types";

interface DiagramLegendProps {
  legend: Slide5LegendLayout;
  labels: Record<"waterfall" | "agile", string>;
}

export default function DiagramLegend({ legend, labels }: DiagramLegendProps) {
  return (
    <div className="relative z-30 inline-flex flex-col" style={{ gap: legend.rowGap }}>
      {legend.items.map((item) => {
        const isWaterfall = item.theme === "waterfall";

        return (
          <div
            key={item.id}
            className="flex items-center"
            style={{ height: legend.itemSize }}
          >
            <div
              className="h-full w-full rounded-[2px] border"
              style={{
                width: legend.itemSize,
                minWidth: legend.itemSize,
                borderColor: "#F3F3F3",
                backgroundColor: isWaterfall ? "#F3F3F3" : "#222222",
              }}
            />
            <span
              className="text-sm font-medium text-white"
              style={{ marginLeft: legend.labelOffsetX - legend.itemSize }}
            >
              {labels[item.labelKey]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
