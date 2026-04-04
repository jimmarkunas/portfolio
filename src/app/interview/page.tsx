import { Suspense } from "react"

import { InterviewDeck } from "@/components/interview/InterviewDeck"

export default function InterviewPage() {
  return (
    <Suspense fallback={<div aria-hidden="true" className="fixed inset-0 bg-[#090d15]" />}>
      <InterviewDeck />
    </Suspense>
  )
}
