"use client"
import { useState, useEffect } from "react"

export interface Tip {
  title: string
  body: string
  label?: string
}

export function useModal() {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  useEffect(() => {
    const close = () => setActiveKey(null)
    document.addEventListener("pointerdown", close)
    return () => document.removeEventListener("pointerdown", close)
  }, [])

  const open = (key: string) => setActiveKey(key)
  const close = () => setActiveKey(null)
  const toggle = (key: string) => setActiveKey(prev => prev === key ? null : key)

  return { activeKey, open, close, toggle }
}
