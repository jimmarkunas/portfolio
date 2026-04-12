import { GA_MEASUREMENT_ID, gaEnabled } from "@/lib/analytics"

export function GoogleAnalytics() {
  if (!gaEnabled) {
    return null
  }

  const gaInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`.trim()

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script id="ga4-init" dangerouslySetInnerHTML={{ __html: gaInitScript }} />
    </>
  )
}
