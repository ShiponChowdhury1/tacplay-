/** @format */

import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

const PrivacyPolicy = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            {dict.privacy_policy.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{dict.privacy_policy.title}</h1>
          <p className="text-secondary">{dict.privacy_policy.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section1}</h2>
            <p>{dict.privacy_policy.section1_text}</p>
            <p className="mt-4">{dict.privacy_policy.section1_commitment}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section1_item1}</li>
              <li>{dict.privacy_policy.section1_item2}</li>
            </ul>
            <p className="mt-4">{dict.privacy_policy.section1_agree}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section2}</h2>
            <p>{dict.privacy_policy.section2_text}</p>
            <div className="mt-4 rounded-lg border border-background/60 bg-background/40 p-6">
              <p className="font-semibold text-white">{dict.privacy_policy.section2_company}</p>
              <p>{dict.privacy_policy.section2_address}</p>
              <p>
                {dict.privacy_policy.section2_email_label}: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section3}</h2>
            <p>{dict.privacy_policy.section3_text}</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section3_1}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section3_1_item1}</li>
                  <li>{dict.privacy_policy.section3_1_item2}</li>
                  <li>{dict.privacy_policy.section3_1_item3}</li>
                  <li>{dict.privacy_policy.section3_1_item4}</li>
                  <li>{dict.privacy_policy.section3_1_item5}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section3_2}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section3_2_item1}</li>
                  <li>{dict.privacy_policy.section3_2_item2}</li>
                  <li>{dict.privacy_policy.section3_2_item3}</li>
                  <li>{dict.privacy_policy.section3_2_item4}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section3_3}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section3_3_item1}</li>
                  <li>{dict.privacy_policy.section3_3_item2}</li>
                </ul>
                <p className="mt-4 font-semibold text-white">{dict.privacy_policy.section3_3_important}</p>
                <p>{dict.privacy_policy.section3_3_note1}</p>
                <p>{dict.privacy_policy.section3_3_note2}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section3_4}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section3_4_item1}</li>
                  <li>{dict.privacy_policy.section3_4_item2}</li>
                  <li>{dict.privacy_policy.section3_4_item3}</li>
                  <li>{dict.privacy_policy.section3_4_item4}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section3_5}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section3_5_item1}</li>
                  <li>{dict.privacy_policy.section3_5_item2}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section4}</h2>
            <p>{dict.privacy_policy.section4_text}</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section4_1}</h3>
                <p>{dict.privacy_policy.section4_1_text}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section4_1_item1}</li>
                  <li>{dict.privacy_policy.section4_1_item2}</li>
                  <li>{dict.privacy_policy.section4_1_item3}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section4_2}</h3>
                <p>{dict.privacy_policy.section4_2_text}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section4_2_item1}</li>
                  <li>{dict.privacy_policy.section4_2_item2}</li>
                  <li>{dict.privacy_policy.section4_2_item3}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section4_3}</h3>
                <p>{dict.privacy_policy.section4_3_text}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section4_3_item1}</li>
                  <li>{dict.privacy_policy.section4_3_item2}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section4_4}</h3>
                <p>{dict.privacy_policy.section4_4_text}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section4_4_item1}</li>
                  <li>{dict.privacy_policy.section4_4_item2}</li>
                </ul>
                <p className="mt-4">{dict.privacy_policy.section4_4_withdraw}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section5}</h2>
            <p>{dict.privacy_policy.section5_text}</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section5_1}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section5_1_item1}</li>
                  <li>{dict.privacy_policy.section5_1_item2}</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section5_2}</h3>
                <p>{dict.privacy_policy.section5_2_text}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>{dict.privacy_policy.section5_2_item1}</li>
                  <li>{dict.privacy_policy.section5_2_item2}</li>
                  <li>{dict.privacy_policy.section5_2_item3}</li>
                </ul>
                <p className="mt-4">{dict.privacy_policy.section5_2_note}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.privacy_policy.section5_3}</h3>
                <p>{dict.privacy_policy.section5_3_text}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section6}</h2>
            <p>{dict.privacy_policy.section6_text}</p>
            <p className="mt-4">{dict.privacy_policy.section6_safeguards}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section6_item1}</li>
              <li>{dict.privacy_policy.section6_item2}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section7}</h2>
            <p>{dict.privacy_policy.section7_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section7_item1}</li>
              <li>{dict.privacy_policy.section7_item2}</li>
              <li>{dict.privacy_policy.section7_item3}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section8}</h2>
            <p>{dict.privacy_policy.section8_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section8_item1}</li>
              <li>{dict.privacy_policy.section8_item2}</li>
              <li>{dict.privacy_policy.section8_item3}</li>
              <li>{dict.privacy_policy.section8_item4}</li>
              <li>{dict.privacy_policy.section8_item5}</li>
              <li>{dict.privacy_policy.section8_item6}</li>
              <li>{dict.privacy_policy.section8_item7}</li>
            </ul>
            <p className="mt-4">
              {dict.privacy_policy.section8_contact} <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section9}</h2>
            <p>{dict.privacy_policy.section9_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section9_item1}</li>
              <li>{dict.privacy_policy.section9_item2}</li>
              <li>{dict.privacy_policy.section9_item3}</li>
            </ul>
            <p className="mt-4">{dict.privacy_policy.section9_manage}</p>
            <p className="mt-2">{dict.privacy_policy.section9_note}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section10}</h2>
            <p>{dict.privacy_policy.section10_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section10_item1}</li>
              <li>{dict.privacy_policy.section10_item2}</li>
              <li>{dict.privacy_policy.section10_item3}</li>
              <li>{dict.privacy_policy.section10_item4}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section11}</h2>
            <p>{dict.privacy_policy.section11_text}</p>
            <p className="mt-4">{dict.privacy_policy.section11_note}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section12}</h2>
            <p>{dict.privacy_policy.section12_text}</p>
            <p className="mt-4">{dict.privacy_policy.section12_note}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section13}</h2>
            <p>{dict.privacy_policy.section13_text}</p>
            <p className="mt-4">{dict.privacy_policy.section13_notify}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.privacy_policy.section13_item1}</li>
              <li>{dict.privacy_policy.section13_item2}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.privacy_policy.section14}</h2>
            <p>{dict.privacy_policy.section14_text}</p>
            <p className="mt-4">
              {dict.privacy_policy.section14_email_label}: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
            </p>
            <p className="mt-4">{dict.privacy_policy.section14_complaint}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
