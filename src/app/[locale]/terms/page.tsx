/** @format */

import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { getTermsContent } from "@/lib/terms-content";

type Props = {
  params: Promise<{ locale: string }>;
};

type Section = {
  id: string;
  title: string;
  body: string;
};

function createSectionId(title: string) {
  return title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSections(text: string): Section[] {
  const firstIndex = text.indexOf("\n1. ");
  const startIndex = text.indexOf("\n1. ", firstIndex + 4);

  if (startIndex === -1) {
    return [];
  }

  const sectionText = text.slice(startIndex).trim();
  const lines = sectionText.split("\n");
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  for (const line of lines) {
    if (/^\d+\.\s/.test(line)) {
      if (currentSection) {
        sections.push(currentSection);
      }

      currentSection = {
        id: createSectionId(line),
        title: line.trim(),
        body: "",
      };
      continue;
    }

    if (!currentSection) {
      continue;
    }

    currentSection.body = currentSection.body
      ? `${currentSection.body}\n${line}`
      : line;
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

function splitParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const termsText = await getTermsContent(locale);

  const introText = termsText.split("TABLE OF CONTENTS")[0].trim();
  const termsSections = buildSections(termsText);

  return (
    <main className="min-h-screen bg-black text-secondary">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/"
            className="mb-6 inline-block text-primary transition-colors hover:text-primary/80"
          >
            {dict.terms_policy.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">
            {dict.terms_policy.title}
          </h1>
          <p className="text-secondary">{dict.terms_policy.lastUpdated}</p>
        </div>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 shadow-2xl shadow-black/20 sm:p-10">
          <div className="space-y-12 text-sm sm:text-base">
            <section className="space-y-4">
              {introText
                .split(/\n\s*\n/)
                .map((paragraph) => paragraph.trim())
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
            </section>

            <nav className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h2 className="mb-4 text-lg font-semibold text-white">
                {dict.terms_policy.tableOfContents}
              </h2>
              <ol className="grid gap-2 text-sm sm:grid-cols-2">
                {termsSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-block border-b border-transparent pb-0.5 text-secondary underline decoration-white/25 decoration-1 underline-offset-4 transition-colors hover:border-primary/40 hover:text-primary hover:decoration-primary"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-10">
              {termsSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-4"
                >
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {splitParagraphs(section.body).map((paragraph) => (
                      <p key={paragraph} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
