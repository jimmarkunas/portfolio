import type { Metadata } from "next"
import { ServicesContactPage } from "@/components/services-contact/ServicesContactPage"

export const metadata: Metadata = {
  title: "Contact | Jim Markunas",
  description:
    "Get in touch with Jim Markunas. Available for product leadership, platform architecture, and transformation programs.",
}

export default function ContactPage() {
  return <ServicesContactPage entryPoint="contact" />
}
