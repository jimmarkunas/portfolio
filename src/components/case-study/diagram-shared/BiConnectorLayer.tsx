import { BI_CONNECTOR_PATHS } from "@/components/case-study/diagram-config/bi-commerce.config"
import { TOKENS } from "@/components/case-study/bi-commerce-ecosystem.constants"

export function BiConnectorLayer() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 875"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {BI_CONNECTOR_PATHS.map((path) => (
        <path key={path} d={path} stroke={TOKENS.line} strokeWidth="2" />
      ))}
    </svg>
  )
}
