import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function UsePolicy({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            {dict.use_policy.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{dict.use_policy.title}</h1>
          <p className="text-secondary">{dict.use_policy.lastUpdated}</p>
        </div>

        <div className="space-y-10 text-secondary">
          {/* Introduction */}
          <section>
            <p>
              {dict.use_policy.intro_text1}{" "}
              <a href="https://tacplay.eu/terms" className="text-primary hover:underline">
                https://tacplay.eu/terms
              </a>.
            </p>
            <p className="mt-4">
              {dict.use_policy.intro_text2}
            </p>
            <p className="mt-4">
              {dict.use_policy.intro_text3}
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section1}</h2>
            <p>
              {dict.use_policy.section1_text}
            </p>
          </section>

          {/* Use of the Services */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section2}</h2>
            <p>{dict.use_policy.section2_text}</p>

            <p className="mt-4 font-semibold text-white">{dict.use_policy.section2_note}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.use_policy.section2_item1}</li>
              <li>{dict.use_policy.section2_item2}</li>
              <li>{dict.use_policy.section2_item3}</li>
              <li>{dict.use_policy.section2_item4}</li>
              <li>{dict.use_policy.section2_item5}</li>
              <li>{dict.use_policy.section2_item6}</li>
              <li>{dict.use_policy.section2_item7}</li>
              <li>{dict.use_policy.section2_item8}</li>
              <li>{dict.use_policy.section2_item9}</li>
              <li>{dict.use_policy.section2_item10}</li>
              <li>{dict.use_policy.section2_item11}</li>
              <li>{dict.use_policy.section2_item12}</li>
              <li>{dict.use_policy.section2_item13}</li>
              <li>{dict.use_policy.section2_item14}</li>
              <li>{dict.use_policy.section2_item15}</li>
              <li>{dict.use_policy.section2_item16}</li>
              <li>{dict.use_policy.section2_item17}</li>
              <li>{dict.use_policy.section2_item18}</li>
            </ul>
          </section>

          {/* AI Products */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section3}</h2>
            <p>{dict.use_policy.section3_text}</p>
          </section>

          {/* Community Guidelines */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section4}</h2>
            <p>{dict.use_policy.section4_text}</p>

            <p className="mt-6 font-semibold text-white">{dict.use_policy.section4_val_title}</p>
            <p>{dict.use_policy.section4_val_text}</p>

            <p className="mt-6 font-semibold text-white">{dict.use_policy.section4_cond_title}</p>
            <p>{dict.use_policy.section4_cond_text}</p>

            <p className="mt-6 font-semibold text-white">{dict.use_policy.section4_play_title}</p>
            <p>{dict.use_policy.section4_play_text}</p>

            <p className="mt-4 text-sm text-secondary/70">
              {dict.use_policy.section4_rules_note}
            </p>
          </section>

          {/* Contributions */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section5}</h2>
            <p>{dict.use_policy.section5_text}</p>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section6}</h2>
            <p>{dict.use_policy.section6_text}</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.use_policy.section7}</h2>
            <p>
              {dict.use_policy.section7_email_label}: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
            </p>
          </section>

          <div className="pt-12 border-t border-white/10 text-center text-xs text-secondary/60">
            {dict.use_policy.copyright}
          </div>
        </div>
      </div>
    </main>
  );
}