import type { CaseStudyExperienceRow } from "@/content/case-studies/types"

export function normalizePressFilename(value: string): string {
  return decodeURIComponent(value)
    .replace(/\.[^.]+$/, "")
    .replace(/_compressed$/i, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
}

export function findRecognitionArticle(
  rows: CaseStudyExperienceRow[],
  filename: string,
): CaseStudyExperienceRow | undefined {
  const decoded = decodeURIComponent(filename)
  const normalizedFilename = normalizePressFilename(filename)

  return rows.find((row) => {
    const slug = row.file?.split("/").pop()?.replace(/\.[^.]+$/, "")
    if (!slug) return false

    return slug === decoded || slug === filename || normalizePressFilename(slug) === normalizedFilename
  })
}
