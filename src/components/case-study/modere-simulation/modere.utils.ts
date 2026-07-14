import { siteCta } from "@/content/site";

export const BOOK_CALL_LABEL = siteCta.bookCallLabel;

export const OUTCOME_ACTION_BUTTON_CLASS =
  "inline-flex min-h-12 items-center gap-2 border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-white";

export const OUTCOME_PRIMARY_LINK_CLASS =
  "inline-flex min-h-12 items-center gap-2 border border-white bg-white px-5 text-sm font-medium text-black transition-colors";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatRevenue(value: number) {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }

  return `$${Math.round(value / 1_000_000)}M`;
}
