import type { ReactNode } from "react"

import type { Tip } from "./useModal"

export interface DiagramIntegration {
  key: string
  label: string
  icon: ReactNode
}

export interface DiagramCard {
  eyebrow?: string
  title: string
  subtitle: string
  integrations: [DiagramIntegration, DiagramIntegration, DiagramIntegration]
  logoDesktop: ReactNode
  logoMobile: ReactNode
}

export interface DiagramApiLayer {
  title: string
  subtitle: string
}

export interface DiagramData {
  contentful: DiagramCard
  bcUS: DiagramCard
  bcUK: DiagramCard
  bcMY: DiagramCard
  adobe: DiagramCard
  oracle: DiagramCard
  sendgrid: DiagramCard
  apiLayer: DiagramApiLayer
  tooltips: Record<string, Tip>
}
