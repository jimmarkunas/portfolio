"use client"

import { createContext, useContext, type ReactNode } from "react"

export type CaseStudyRenderMode = "screen" | "print"

const CaseStudyRenderModeContext = createContext<CaseStudyRenderMode>("screen")

export function CaseStudyRenderModeProvider({ mode, children }: { mode: CaseStudyRenderMode; children: ReactNode }) {
  return <CaseStudyRenderModeContext.Provider value={mode}>{children}</CaseStudyRenderModeContext.Provider>
}

export function useCaseStudyRenderMode() {
  return useContext(CaseStudyRenderModeContext)
}
