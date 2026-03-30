"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Container } from "@/components/Container"
import type { CaseStudyExperienceRow } from "@/components/case-study/types"

const PDFJS_SCRIPT_SRC = "/pdfjs/pdf.min.js"
const PDFJS_WORKER_SRC = "/pdfjs/pdf.worker.min.js"

type RenderState = "idle" | "loading" | "rendered" | "error"

type Breadcrumb = { label: string; href: string }

type PressViewerProps = {
  rows: CaseStudyExperienceRow[]
  backHref: string
  breadcrumbs: Breadcrumb[]
}

function findArticle(rows: CaseStudyExperienceRow[], filename: string) {
  const normalize = (value: string) =>
    decodeURIComponent(value)
      .replace(/\.[^.]+$/, "")
      .replace(/_compressed$/i, "")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .toLowerCase()

  const decoded = decodeURIComponent(filename)
  const normalizedFilename = normalize(filename)
  return rows.find((row) => {
    const slug = row.file?.split("/").pop()?.replace(/\.[^.]+$/, "")
    if (!slug) return false

    return slug === decoded || slug === filename || normalize(slug) === normalizedFilename
  })
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).pdfjsLib) {
      resolve()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", () => reject(new Error("Script load error")), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Script load error"))
    document.head.appendChild(script)
  })
}

const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|avif)$/i
const PDF_EXTENSIONS = /\.pdf$/i

export function PressViewer({ rows, backHref, breadcrumbs }: PressViewerProps) {
  const params = useParams()
  const filename = typeof params.filename === "string" ? params.filename : ""
  const article = findArticle(rows, filename)
  const filePath = article?.file ?? null
  const encodedFilePath = filePath ? encodeURI(filePath) : null
  const isImage = filePath ? IMAGE_EXTENSIONS.test(filePath) : false
  const isPdf = filePath ? PDF_EXTENSIONS.test(filePath) : false

  const containerRef = useRef<HTMLDivElement>(null)
  const [renderState, setRenderState] = useState<RenderState>("idle")
  const [pageCount, setPageCount] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [useInlinePdfFallback, setUseInlinePdfFallback] = useState(false)
  const renderToken = useRef(0)

  async function renderPdf(zoomLevel: number) {
    if (!filePath || isImage || !containerRef.current || useInlinePdfFallback) return

    const token = ++renderToken.current
    setRenderState("loading")
    containerRef.current.innerHTML = ""

    try {
      await loadScript(PDFJS_SCRIPT_SRC)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfjsLib = (window as any).pdfjsLib
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC

      const pdf = await pdfjsLib.getDocument(encodeURI(filePath)).promise
      if (token !== renderToken.current) return

      setPageCount(pdf.numPages)

      const firstPage = await pdf.getPage(1)
      const unscaled = firstPage.getViewport({ scale: 1 })
      const containerWidth = containerRef.current.clientWidth || 800
      const baseScale = (containerWidth - 32) / unscaled.width
      const finalScale = baseScale * zoomLevel
      const dpr = window.devicePixelRatio || 1

      for (let i = 1; i <= pdf.numPages; i++) {
        if (token !== renderToken.current) return
        const page = i === 1 ? firstPage : await pdf.getPage(i)
        const viewport = page.getViewport({ scale: finalScale * dpr })

        const canvas = document.createElement("canvas")
        canvas.width = Math.floor(viewport.width)
        canvas.height = Math.floor(viewport.height)
        canvas.style.width = `${Math.floor(viewport.width / dpr)}px`
        canvas.style.height = `${Math.floor(viewport.height / dpr)}px`
        canvas.className = "block"

        const wrapper = document.createElement("div")
        wrapper.className = "flex flex-col items-center gap-2"

        const label = document.createElement("p")
        label.className = "text-xs text-black/40"
        label.textContent = `Page ${i} of ${pdf.numPages}`

        wrapper.appendChild(canvas)
        wrapper.appendChild(label)
        containerRef.current?.appendChild(wrapper)

        await page
          .render({
            canvasContext: canvas.getContext("2d", { alpha: false }),
            viewport,
          })
          .promise
      }

      if (token !== renderToken.current) return
      setRenderState("rendered")
    } catch (error) {
      console.error("[PDF Viewer] Failed to load PDF:", filePath, error)
      if (token === renderToken.current) {
        if (isPdf) {
          setUseInlinePdfFallback(true)
          setRenderState("rendered")
        } else {
          setRenderState("error")
        }
      }
    }
  }

  useEffect(() => {
    setUseInlinePdfFallback(false)
    if (isImage) {
      setRenderState("rendered")
      setPageCount(1)
      return
    }

    const containerWidth = containerRef.current?.clientWidth || 800
    const startZoom = containerWidth < 560 ? Math.round((560 / containerWidth) * 10) / 10 : 1
    setZoom(startZoom)
    renderPdf(startZoom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filePath, isImage])

  function handleZoom(delta: number) {
    const next = Math.min(2.5, Math.max(0.5, zoom + delta))
    setZoom(next)
    if (!isImage && !useInlinePdfFallback) renderPdf(next)
  }

  function handleFitWidth() {
    setZoom(1)
    if (!isImage && !useInlinePdfFallback) renderPdf(1)
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <header className="sticky top-0 z-10 border-b border-black/8 bg-white/90 backdrop-blur">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <nav className="hidden items-center gap-6 text-[14px] md:flex">
              <Link href="/" className="text-[#222222] hover:text-black">
                Jim Markunas
              </Link>
              {breadcrumbs.map((crumb) => (
                <Fragment key={crumb.href}>
                  <span className="text-[#222222]">›</span>
                  <Link href={crumb.href} className="text-[#222222] hover:text-black">
                    {crumb.label}
                  </Link>
                </Fragment>
              ))}
              <span className="text-[#222222]">›</span>
              <span className="max-w-[200px] truncate text-[#222222] underline underline-offset-4">
                {article?.company ?? filename}
              </span>
            </nav>
            <Link
              href={backHref}
              className="ml-auto rounded-full bg-[#222222] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#447ACB] transition-colors"
            >
              ← Back to Case Study
            </Link>
          </div>
        </Container>
      </header>

      <main className="mx-auto max-w-[1280px] px-5 py-10">
        {article ? (
          <div className="mb-8">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[#222222]">{article.dates}</p>
            <h1 className="mt-2 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#222222] md:text-[36px]">
              {article.company}
            </h1>
            <p className="mt-2 max-w-[680px] text-[16px] text-[#222222]">{article.summary}</p>
            <p className="mt-3 text-[14px] text-black/50">
              {article.source && article.dates ? `${article.source} · ${article.dates}` : article.source ?? article.dates}
              {(article.url || filePath) && (
                <>
                  {" · "}
                  <a
                    href={article.url ?? filePath ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#447ACB] underline underline-offset-4 hover:text-[#2d5fa8]"
                  >
                    View source ↗
                  </a>
                </>
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-[12px] text-[#222222]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <h1 className="text-[28px] font-semibold text-[#111111]">Article Viewer</h1>
          </div>
        )}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/8 bg-white px-4 py-3">
          {useInlinePdfFallback ? (
            <span className="text-[13px] text-black/55">Inline PDF viewer</span>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleZoom(-0.15)}
                className="rounded-lg border border-black/10 px-3 py-1.5 text-[13px] text-[#222222] hover:bg-[#F5F7FA] transition-colors"
              >
                Zoom Out
              </button>
              <button
                onClick={() => handleZoom(0.15)}
                className="rounded-lg border border-black/10 px-3 py-1.5 text-[13px] text-[#222222] hover:bg-[#F5F7FA] transition-colors"
              >
                Zoom In
              </button>
              <button
                onClick={handleFitWidth}
                className="rounded-lg border border-black/10 px-3 py-1.5 text-[13px] text-[#222222] hover:bg-[#F5F7FA] transition-colors"
              >
                Fit Width
              </button>
            </div>
          )}
          <span className="text-[13px] text-black/40">
            {renderState === "loading" && "Rendering…"}
            {renderState === "rendered" && useInlinePdfFallback && "Embedded"}
            {renderState === "rendered" && !isImage && !useInlinePdfFallback && `${pageCount} page${pageCount !== 1 ? "s" : ""} · ${Math.round(zoom * 100)}%`}
            {renderState === "rendered" && isImage && `${Math.round(zoom * 100)}%`}
            {renderState === "error" && "Failed to load"}
            {renderState === "idle" && "Loading…"}
          </span>
        </div>

        <div className="bg-white">
          {renderState === "error" && !useInlinePdfFallback && (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <p className="text-[15px] text-black/55">Could not render this document in the viewer.</p>
              {filePath && (
                <a
                  href={encodedFilePath ?? filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#222222] px-4 py-2 text-[13px] font-medium text-white hover:bg-black transition-colors"
                >
                  Open file directly
                </a>
              )}
            </div>
          )}
          {!filePath && <p className="py-16 text-center text-[15px] text-black/55">Article not found.</p>}
          {isImage && encodedFilePath && (
            <div className="flex justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={encodedFilePath} alt={article?.company ?? ""} style={{ width: `${zoom * 100}%`, maxWidth: "100%" }} className="block" />
            </div>
          )}
          {useInlinePdfFallback && encodedFilePath && (
            <div className="h-[78vh] min-h-[520px] w-full">
              <iframe
                src={encodedFilePath}
                title={article?.company ?? "PDF document"}
                className="h-full w-full border-0"
              />
            </div>
          )}
          <div ref={containerRef} className="flex flex-col gap-6" />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link href={backHref} className="text-[14px] text-black/55 hover:text-[#222222]">
            ← Back to Press &amp; Accolades
          </Link>
          {filePath && (
            <a href={encodedFilePath ?? filePath} target="_blank" rel="noopener noreferrer" className="text-[14px] text-black/55 hover:text-[#222222]">
              Open in new tab ↗
            </a>
          )}
        </div>
      </main>
    </div>
  )
}
