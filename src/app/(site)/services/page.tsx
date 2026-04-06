import type { Metadata } from "next"
import { ServicesContactPage } from "@/components/services-contact/ServicesContactPage"

export const metadata: Metadata = {
  title: "Services | Jim Markunas",
  description:
    "Services by Jim Markunas: product leadership, platform architecture, and transformation programs.",
}

export default function ServicesPage() {
  return <ServicesContactPage entryPoint="services" />
}

