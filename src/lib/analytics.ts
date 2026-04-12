export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || ""
export const gaEnabled = Boolean(GA_MEASUREMENT_ID)

type EventParamValue = string | number | boolean | undefined

export type AnalyticsEventParams = {
  location?: EventParamValue
  label?: EventParamValue
  href?: EventParamValue
  page_path?: EventParamValue
  form_name?: EventParamValue
  error_type?: EventParamValue
}

const ALLOWED_PARAM_KEYS: Array<keyof AnalyticsEventParams> = [
  "location",
  "label",
  "href",
  "page_path",
  "form_name",
  "error_type",
]

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: [string, ...unknown[]]) => void
  }
}

function getGtag() {
  if (!gaEnabled || typeof window === "undefined") {
    return undefined
  }

  return typeof window.gtag === "function" ? window.gtag : undefined
}

function sanitizeParams(params?: AnalyticsEventParams) {
  const sanitized: Partial<AnalyticsEventParams> = {}

  if (!params) {
    return sanitized
  }

  for (const key of ALLOWED_PARAM_KEYS) {
    const value = params[key]
    if (value !== undefined) {
      sanitized[key] = value
    }
  }

  return sanitized
}

export function getCurrentPagePath() {
  if (typeof window === "undefined") {
    return ""
  }

  return `${window.location.pathname}${window.location.search}`
}

export function pageview(url: string) {
  const gtag = getGtag()
  if (!gtag) {
    return
  }

  gtag("event", "page_view", { page_path: url })
}

export function trackEvent(eventName: string, params?: AnalyticsEventParams) {
  const gtag = getGtag()
  if (!gtag) {
    return
  }

  const eventParams = sanitizeParams(params)
  if (!eventParams.page_path) {
    const pagePath = getCurrentPagePath()
    if (pagePath) {
      eventParams.page_path = pagePath
    }
  }

  gtag("event", eventName, eventParams)
}
