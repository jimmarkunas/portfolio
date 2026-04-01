"use client"

import { useState, useRef } from "react"

const EMAILJS_SERVICE_ID = "service_izfv466"
const EMAILJS_TEMPLATE_ID = "template_jttfdsq"
const EMAILJS_PUBLIC_KEY = "qjUSm5iSVeKkQJcYS"
const SUBMIT_COOLDOWN_MS = 30_000
const LAST_SUBMIT_KEY = "contact_last_submit_at"

type State = "idle" | "sending" | "success" | "error"

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-base text-[#111111] placeholder-[#111111]/70 shadow-[0_1px_2px_rgba(16,24,40,0.05)] outline-none transition-colors focus:border-[#447ACB] focus:ring-1 focus:ring-[#447ACB]"

const labelClass = "block text-base text-slate-700 mb-3"

export function ContactForm() {
  const [state, setState] = useState<State>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [agreed, setAgreed] = useState(false)
  const honeypotRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (honeypotRef.current?.value) return

    const now = Date.now()
    const last = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0)
    if (last && now - last < SUBMIT_COOLDOWN_MS) {
      setErrorMsg("Please wait 30 seconds before sending another message.")
      setState("error")
      return
    }

    const form = e.currentTarget
    const fname = (form.elements.namedItem("fname") as HTMLInputElement).value
    const lname = (form.elements.namedItem("lname") as HTMLInputElement).value
    const femail = (form.elements.namedItem("femail") as HTMLInputElement).value
    const fphone = (form.elements.namedItem("fphone") as HTMLInputElement).value
    const fmessage = (form.elements.namedItem("fmessage") as HTMLTextAreaElement).value

    setState("sending")
    setErrorMsg("")

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: `${fname} ${lname}`.trim(),
            from_email: femail,
            phone: fphone,
            message: fmessage,
            reply_to: femail,
          },
        }),
      })

      if (!res.ok) throw new Error(`Status ${res.status}`)

      localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()))
      setState("success")
    } catch (err) {
      console.error("EmailJS error:", err)
      setErrorMsg("Something went wrong — please email jim@jimmarkunas.com directly.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 py-20 text-center shadow-sm">
        <div className="mb-4 text-5xl">✅</div>
        <p className="mb-2 text-xl font-semibold text-[#111111]">Message sent!</p>
        <p className="text-base text-[#7B7B7B]">I&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full rounded-2xl bg-white p-10 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-6">
        {/* First / Last */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fname" className={labelClass}>First name</label>
            <input id="fname" name="fname" type="text" required placeholder="First name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lname" className={labelClass}>Last name</label>
            <input id="lname" name="lname" type="text" placeholder="Last name" className={inputClass} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="femail" className={labelClass}>Email</label>
          <input id="femail" name="femail" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="fphone" className={labelClass}>Phone number</label>
          <input id="fphone" name="fphone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="fmessage" className={labelClass}>Message</label>
          <textarea
            id="fmessage"
            name="fmessage"
            required
            rows={5}
            placeholder="Leave us a message..."
            className={`${inputClass} resize-y`}
            style={{ minHeight: 120 }}
          />
        </div>

        {/* Privacy checkbox */}
        <label className="flex cursor-pointer items-start gap-3">
          <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="peer sr-only"
            />
            <div className="h-5 w-5 rounded-[5.5px] border border-[#D0D5DD] bg-white peer-checked:border-[#447ACB] peer-checked:bg-[#447ACB] transition-colors" />
            {agreed && (
              <svg className="pointer-events-none absolute inset-0 h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 10l3.5 3.5L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-base text-slate-600">
            You agree to our friendly{" "}
            <span className="font-medium text-[#111111] underline">privacy policy</span>.
          </span>
        </label>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" && (
        <p className="rounded-xl border border-red-400/30 bg-red-500/8 px-4 py-3 text-sm text-red-400 text-center">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2B2B2B] px-6 py-3.5 text-xl text-white transition-colors hover:bg-[#111111] disabled:opacity-60"
      >
        <span>{state === "sending" ? "Sending…" : "Submit"}</span>
        {state === "sending" ? (
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.0003 5V15C20.0003 15.552 19.5533 16 19.0003 16C18.4473 16 18.0003 15.552 18.0003 15V7.41406L6.70731 18.707C6.51231 18.902 6.25628 19 6.00028 19C5.74428 19 5.48825 18.902 5.29325 18.707C4.90225 18.316 4.90225 17.684 5.29325 17.293L16.5862 6H9.00028C8.44728 6 8.00028 5.552 8.00028 5C8.00028 4.448 8.44728 4 9.00028 4L19.0003 4C19.1303 4 19.2604 4.0269 19.3824 4.0769C19.6274 4.1779 19.8224 4.37292 19.9234 4.61792C19.9744 4.73992 20.0003 4.87 20.0003 5Z" fill="white"/>
          </svg>
        )}
      </button>
    </form>
  )
}
