import { NextResponse } from "next/server"

const CONTACT_RECIPIENT_EMAIL = "jim@greatestpmever.com"
const DEFAULT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>"
const MAX_MESSAGE_LENGTH = 5_000

type ContactPayload = {
  fname?: string
  lname?: string
  femail?: string
  fmessage?: string
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  let body: ContactPayload

  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const fname = clean(body.fname)
  const lname = clean(body.lname)
  const email = clean(body.femail)
  const message = clean(body.fmessage)
  const senderName = `${fname} ${lname}`.trim() || "Website Contact"

  if (!email || !message) {
    return NextResponse.json({ error: "Email and message are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email jim@greatestpmever.com directly." },
      { status: 503 },
    )
  }

  const subject = `Portfolio contact form submission from ${senderName}`
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />")
  const escapedName = escapeHtml(senderName)
  const escapedEmail = escapeHtml(email)

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL,
      to: [CONTACT_RECIPIENT_EMAIL],
      reply_to: email,
      subject,
      text: [
        "New contact form submission",
        "",
        `Name: ${senderName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: [
        "<h2>New contact form submission</h2>",
        `<p><strong>Name:</strong> ${escapedName}</p>`,
        `<p><strong>Email:</strong> ${escapedEmail}</p>`,
        `<p><strong>Message:</strong><br />${escapedMessage}</p>`,
      ].join(""),
    }),
    cache: "no-store",
  })

  if (!resendResponse.ok) {
    const providerDetail = (await resendResponse.text()).slice(0, 500)
    console.error("Resend contact email failed:", resendResponse.status, providerDetail)
    return NextResponse.json(
      { error: "Unable to send message right now. Please email jim@greatestpmever.com directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
