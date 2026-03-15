import fs from 'fs';
import path from 'path';

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  company: string;
  role: string;
  industry: string;
  status: string;
  featured: boolean;
  order: number;
  summary: string;
  metrics: CaseStudyMetric[];
};

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

export type CaseStudyDocument = {
  frontmatter: CaseStudyFrontmatter;
  sections: CaseStudySection[];
};

const CASE_STUDY_DIR = path.join(process.cwd(), 'src/content/case-studies');

function parseScalar(rawValue: string): string | number | boolean {
  const trimmed = rawValue.trim();
  const withoutQuotes = trimmed.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');

  if (withoutQuotes === 'true') {
    return true;
  }

  if (withoutQuotes === 'false') {
    return false;
  }

  if (/^-?\d+(\.\d+)?$/.test(withoutQuotes)) {
    return Number(withoutQuotes);
  }

  return withoutQuotes;
}

function parseFrontmatter(frontmatterRaw: string): CaseStudyFrontmatter {
  const data: Record<string, unknown> = {};
  const lines = frontmatterRaw.split('\n');
  let lineIdx = 0;

  while (lineIdx < lines.length) {
    const line = lines[lineIdx];

    if (!line.trim()) {
      lineIdx += 1;
      continue;
    }

    if (line.startsWith('metrics:')) {
      const metrics: CaseStudyMetric[] = [];
      lineIdx += 1;

      while (lineIdx < lines.length && /^  /.test(lines[lineIdx])) {
        if (lines[lineIdx].startsWith('  - ')) {
          const metric: CaseStudyMetric = { value: '', label: '' };
          const firstPair = lines[lineIdx].replace('  - ', '').trim();

          if (firstPair) {
            const [key, ...valueParts] = firstPair.split(':');
            metric[key.trim() as 'value' | 'label'] = String(parseScalar(valueParts.join(':')));
          }

          lineIdx += 1;

          while (lineIdx < lines.length && lines[lineIdx].startsWith('    ')) {
            const nested = lines[lineIdx].trim();
            const [key, ...valueParts] = nested.split(':');
            metric[key.trim() as 'value' | 'label'] = String(parseScalar(valueParts.join(':')));
            lineIdx += 1;
          }

          metrics.push(metric);
          continue;
        }

        lineIdx += 1;
      }

      data.metrics = metrics;
      continue;
    }

    const match = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);

    if (match) {
      const [, key, value] = match;
      data[key] = parseScalar(value);
    }

    lineIdx += 1;
  }

  return {
    title: String(data.title ?? ''),
    slug: String(data.slug ?? ''),
    company: String(data.company ?? ''),
    role: String(data.role ?? ''),
    industry: String(data.industry ?? ''),
    status: String(data.status ?? ''),
    featured: Boolean(data.featured ?? false),
    order: Number(data.order ?? 0),
    summary: String(data.summary ?? ''),
    metrics: (data.metrics as CaseStudyMetric[] | undefined) ?? [],
  };
}

function parseSections(markdownBody: string): CaseStudySection[] {
  const sections: CaseStudySection[] = [];
  const sectionPattern = /^##\s+(.+)\n([\s\S]*?)(?=^##\s+|$)/gm;

  let match = sectionPattern.exec(markdownBody);
  while (match) {
    const heading = match[1].trim();
    const sectionBody = match[2].trim();
    const bullets = sectionBody
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- '))
      .map((line) => line.replace(/^- /, '').trim());

    const paragraphSource = sectionBody
      .split('\n')
      .filter((line) => !line.trim().startsWith('- '))
      .join('\n')
      .trim();

    const paragraphs = paragraphSource
      ? paragraphSource
          .split(/\n{2,}/)
          .map((block) => block.replace(/\n/g, ' ').trim())
          .filter(Boolean)
      : [];

    sections.push({ heading, paragraphs, bullets });
    match = sectionPattern.exec(markdownBody);
  }

  return sections;
}

export function getCaseStudyBySlug(slug: string): CaseStudyDocument {
  const filePath = path.join(CASE_STUDY_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (!match) {
    throw new Error(`Invalid case study format for ${slug}.mdx`);
  }

  const [, frontmatterRaw, markdownBody] = match;
  const frontmatter = parseFrontmatter(frontmatterRaw);
  const sections = parseSections(markdownBody);

  return { frontmatter, sections };
}
