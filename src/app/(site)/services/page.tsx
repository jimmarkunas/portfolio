import { permanentRedirect } from "next/navigation"

import { siteRoutes } from "@/content/site"

export default function ServicesPage() {
  permanentRedirect(siteRoutes.contact)
}
