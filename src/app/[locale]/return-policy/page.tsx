/** @format */

import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ReturnPolicy({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 mb-6 inline-block"
          >
            {dict.return_policy.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{dict.return_policy.title}</h1>
          <p className="text-secondary">{dict.return_policy.lastUpdated}</p>
        </div>

        <div className="space-y-10 text-secondary">
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">{dict.return_policy.refunds_title}</h2>

            <p className="mb-6">
              {dict.return_policy.refunds_text1}
            </p>

            <p className="mb-6">
              {dict.return_policy.refunds_text2}
            </p>

            <p className="mb-6">
              {dict.return_policy.refunds_text3_part1} <strong>{dict.return_policy.refunds_text3_bold}</strong>{" "}
              {dict.return_policy.refunds_text3_part2}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.return_policy.questions_title}</h2>
            <p>
              {dict.return_policy.questions_text}
            </p>
            <p className="mt-4">
              {dict.return_policy.questions_email_label}:{" "}
              <a
                href="mailto:info@tacplay.eu"
                className="text-primary hover:underline"
              >
                info@tacplay.eu
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
