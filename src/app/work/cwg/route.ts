import { readFile } from "node:fs/promises"
import { join } from "node:path"

export async function GET() {
  const htmlPath = join(process.cwd(), "public", "founder", "cwg", "index.html")
  const html = await readFile(htmlPath, "utf8")

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  })
}
