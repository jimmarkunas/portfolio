"use client"

import { useState } from "react"

import { agentsContent } from "@/content/site"

type Status = "DEFINED" | "PARTIAL" | "UNCLEAR"

const statuses: readonly Status[] = ["DEFINED", "PARTIAL", "UNCLEAR"]

function getResult(selectedStatuses: Record<string, Status>) {
  const answers = Object.values(selectedStatuses)

  if (answers.length < agentsContent.questions.length) {
    return { title: "INCOMPLETE", description: "Complete all six controls to check production readiness." }
  }

  if (answers.includes("UNCLEAR")) {
    return { title: "NO GO", description: "At least one control is unclear. Resolve every unclear control before production." }
  }

  if (answers.includes("PARTIAL")) {
    return { title: "GO WITH CONDITIONS", description: "Complete the partial controls and document the conditions before production." }
  }

  return { title: "GO", description: "All six A.G.E.N.T.S. controls are defined for production readiness." }
}

export function ProductionReadinessCheck() {
  const [selectedStatuses, setSelectedStatuses] = useState<Record<string, Status>>({})
  const result = getResult(selectedStatuses)

  return (
    <section aria-labelledby="production-readiness-check" className="border-t border-black/10 pt-8 md:pt-10">
      <h2 id="production-readiness-check" className="type-h3 max-w-[760px] text-[#2A2A2A]">
        A.G.E.N.T.S. Production Readiness Check
      </h2>
      <p className="type-p3 mt-4 max-w-[800px] text-[#555555]">
        Rate each control based on how clearly it is defined for the agent you are preparing to put into production.
      </p>

      <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
        {agentsContent.questions.map(([letter, name, question, description]) => (
          <fieldset key={letter} className="py-5">
            <legend className="type-p2 text-[#2A2A2A]">
              <span className="mr-3 text-[#447ACB]">{letter}</span>
              {name}: {question}
            </legend>
            <p className="type-p3 mt-2 max-w-[760px] text-[#555555]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2" aria-label={`${name} status`}>
              {statuses.map((status) => {
                const selected = selectedStatuses[letter] === status

                return (
                  <button
                    key={status}
                    type="button"
                    aria-pressed={selected}
                    className={`min-h-[44px] rounded-full border px-4 type-p4 transition-colors ${
                      selected
                        ? "border-[#447ACB] bg-[#447ACB] text-white"
                        : "border-black/15 bg-white text-[#2A2A2A] hover:border-[#447ACB]"
                    }`}
                    onClick={() => setSelectedStatuses((current) => ({ ...current, [letter]: status }))}
                  >
                    {status}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-6 rounded-[10px] bg-[#ECECEC] px-5 py-5 md:px-7" role="status" aria-live="polite">
        <p className="type-p2 text-[#2A2A2A]">Result: {result.title}</p>
        <p className="type-p3 mt-2 text-[#555555]">{result.description}</p>
        <button
          type="button"
          className="mt-4 min-h-[44px] rounded-full border border-black/20 bg-white px-4 type-p4 text-[#2A2A2A] hover:border-[#447ACB]"
          onClick={() => setSelectedStatuses({})}
        >
          Reset
        </button>
      </div>
    </section>
  )
}
