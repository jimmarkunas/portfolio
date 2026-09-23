export const slide02Lists = {
  ai: [["icon-search.svg", "Search & synthesis"], ["icon-drafting.svg", "Drafting & analysis"], ["icon-monitoring.svg", "Monitoring & coordination"]],
  human: [["icon-ownership.svg", "Product ownership"], ["icon-tradeoffs.svg", "Priority & tradeoffs"], ["icon-authority.svg", "Authority & escalation"]],
} as const;

export const slide03Processes = {
  copilot: [["H", "HUMAN"], ["P", "PROMPT"], ["M", "MODEL"], ["O", "OUTPUT"]],
  agent: [["G", "GOAL"], ["A", "AGENT"], ["T", "TOOL / SYSTEM"], ["→", "ACTION"]],
} as const;

export const slide06Inventory = [["SYSTEMS", "What applications and\nplatforms are involved?", "icon-systems.svg"], ["DATA", "What information does the\nproduct depend on?", "icon-data.svg"], ["PEOPLE", "Who uses, owns, or\nsupports the workflow?", "icon-people.svg"], ["DEPENDENCIES", "What breaks if one\npart fails?", "icon-dependencies.svg"]] as const;
export const slide06Owners = [["SYSTEM OWNER", "Who owns the system\nthe agent touches?", "icon-system-owner.svg"], ["DECISION OWNER", "Who owns the authority\nbeing delegated?", "icon-decision-owner.svg"], ["OUTCOME OWNER", "Who is accountable\nfor the result?", "icon-outcome-owner.svg"]] as const;

export const slide08Stages = [{ n: "01", title: "OBSERVE", body: "AI sees the state\nof the product\nor process.", ellipse: "59d08.svg", icon: "91b4d.svg", active: false }, { n: "02", title: "RECOMMEND", body: "AI proposes what\nshould happen.", ellipse: "379c2.svg", icon: "d17aa.svg", active: false }, { n: "03", title: "PREPARE", body: "AI stages the action\nfor human review.", ellipse: "379c2.svg", icon: "9244f.svg", active: false }, { n: "04", title: "DECIDE", body: "AI chooses the action\nwithin defined rules.", ellipse: "d8145.svg", icon: "8b919.svg", active: true }, { n: "05", title: "EXECUTE", body: "AI acts within\ndefined limits.", ellipse: "ca1fd.svg", icon: "97008.svg", active: true }] as const;

export const slide11Cards = [["A", "AUTHORITY", "What may AI decide and do?", true], ["G", "GUARDRAILS", "What constraints must be built into the product?", false], ["E", "EVIDENCE", "What operational record must the product create?", false], ["N", "NETWORK & INTEGRATIONS", "What systems, data, and permissions may it touch?", false], ["T", "TRANSFER & ESCALATION", "When must a human intervene?", false], ["S", "SUCCESS & ACCOUNTABILITY", "What KPI defines success + which human owns the outcome?", false]] as const;

export const slide14Rows = [["01", "VALUE", "Increase revenue, decrease cost, or\nstreamline operations?", "66471.svg"], ["02", "AUTHORITY", "What may AI observe, recommend,\nprepare, decide, or execute?", "408a3.svg"], ["03", "A.G.E.N.T.S.", "Define controls, evidence, systems,\ntransfer, and success.", "a7ab0.svg"], ["04", "OUTPUT", "Generate a mini productization brief /\nbacklog-ready artifact.", "ea3ba0.svg"]] as const;
