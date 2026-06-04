import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WebsiteDisclaimer({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const t = dict.disclaimer_policy;

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href={`/${locale}`} className="text-primary hover:text-primary/80 mb-6 inline-block">
            {t.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{t.title}</h1>
          <p className="text-secondary">{t.lastUpdated}</p>
        </div>

        <div className="space-y-10 text-secondary">
          {/* Website Disclaimer */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">{t.website_title}</h2>

            <p className="mb-6">
              {t.website_text1}{" "}
              <a href="https://www.tacplay.eu" className="text-primary hover:underline">
                {t.website_text1_site}
              </a>{" "}
              {t.website_text1_end}
            </p>

            <p className="mb-6">
              {t.website_text2}
            </p>

            <p className="mb-8 font-medium text-red-400">
              {t.website_text3}
            </p>
          </section>

          {/* Testimonials Disclaimer */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">{t.testimonials_title}</h2>

            <p className="mb-4">
              {t.testimonials_text1_part1}{" "}
              <strong>{t.testimonials_text1_bold}</strong>
            </p>

            <p className="mb-4">
              {t.testimonials_text2}
            </p>

            <p>
              {t.testimonials_text3}
            </p>
          </section>

          <div className="pt-10 border-t border-white/10 text-center text-xs text-secondary/60">
            {t.copyright}
          </div>
        </div>
      </div>
    </main>
  );
}