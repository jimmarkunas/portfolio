import { permanentRedirect } from "next/navigation"

type SearchParams = Record<string, string | string[] | undefined>

function buildRedirectQuery(searchParams: SearchParams): string {
  const query = new URLSearchParams()

  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item))
      return
    }

    if (typeof value === "string") {
      query.append(key, value)
    }
  })

  const queryString = query.toString()
  return queryString.length > 0 ? `?${queryString}` : ""
}

export default function InterviewsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const query = buildRedirectQuery(searchParams)
  permanentRedirect(`/interview${query}`)
}
