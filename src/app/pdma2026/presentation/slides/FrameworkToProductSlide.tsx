import { TemplateSlide } from "@/app/pdma2026-templates/components/TemplateSlide";
import type { FrameworkToProductContent } from "../presentationTypes";

export function FrameworkToProductSlide({ content }: { content: FrameworkToProductContent }) {
  const { framework, requirements } = content;
  return <TemplateSlide kind={content.kind} title={content.chrome.title}>
    <section className="pdmat-template pdmat-framework">
      <article className="pdmat-framework__panel pdmat-framework__panel--framework">
        <h2>{framework.heading}</h2>
        <ol>{framework.rows.map((row) => <li key={row.letter}><b>{row.letter}</b><span>{row.label}</span></li>)}</ol>
      </article>
      <span className="pdmat-framework__lane" aria-hidden="true"><i /><b /></span>
      <article className="pdmat-framework__panel pdmat-framework__panel--requirements">
        <h2>{requirements.heading}</h2>
        <ol>{requirements.rows.map((row) => <li key={row.letter}><b>{row.letter}</b><span aria-hidden="true">→</span><p>{row.requirement}</p></li>)}</ol>
      </article>
    </section>
  </TemplateSlide>;
}
