/** @format */

import Link from "next/link";
import React from "react";
import { getDictionary } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

const Owner = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="mb-6 inline-block text-primary hover:text-primary/80">
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{dict.owner_agreement.title}</h1>
          <p className="text-secondary">{dict.owner_agreement.lastUpdated}</p>
          <p className="mt-2 text-secondary">{dict.owner_agreement.company}</p>
          <p className="text-secondary">{dict.owner_agreement.address}</p>
          <p className="text-secondary">
            {dict.owner_agreement.email}: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
          </p>
        </div>

        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section1}</h2>
            <p>{dict.owner_agreement.section1_text}</p>
            <p className="mt-4">{dict.owner_agreement.section1_party1}</p>
            <p className="mt-4">and</p>
            <p className="mt-4">{dict.owner_agreement.section1_party2}</p>
            <p className="mt-4">{dict.owner_agreement.section1_agree}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section2}</h2>
            <p>{dict.owner_agreement.section2_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.owner_agreement.section2_item1}</li>
              <li>{dict.owner_agreement.section2_item2}</li>
              <li>{dict.owner_agreement.section2_item3}</li>
              <li>{dict.owner_agreement.section2_item4}</li>
            </ul>
            <p className="mt-4">{dict.owner_agreement.section2_footer}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section3}</h2>
            <p>{dict.owner_agreement.section3_text}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>{dict.owner_agreement.section3_item1}</li>
              <li>{dict.owner_agreement.section3_item2}</li>
              <li>{dict.owner_agreement.section3_item3}</li>
            </ul>
            <p className="mt-4">{dict.owner_agreement.section3_footer}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section4}</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section4_1}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.owner_agreement.section4_1_item1}</li>
                  <li>{dict.owner_agreement.section4_1_item2}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section4_2}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.owner_agreement.section4_2_item1}</li>
                  <li>{dict.owner_agreement.section4_2_item2}</li>
                  <li>{dict.owner_agreement.section4_2_item3}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section4_3}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.owner_agreement.section4_3_item1}</li>
                  <li>{dict.owner_agreement.section4_3_item2}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section4_4}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.owner_agreement.section4_4_item1}</li>
                  <li>{dict.owner_agreement.section4_4_item2}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section4_5}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dict.owner_agreement.section4_5_item1}</li>
                  <li>{dict.owner_agreement.section4_5_item2}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section5}</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section5_1}</h3>
                <p>{dict.owner_agreement.section5_1_items}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section5_2}</h3>
                <p>{dict.owner_agreement.section5_2_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section5_3}</h3>
                <p>{dict.owner_agreement.section5_3_text}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section6}</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section6_1}</h3>
                <p>{dict.owner_agreement.section6_1_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section6_2}</h3>
                <p>{dict.owner_agreement.section6_2_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section6_3}</h3>
                <p>{dict.owner_agreement.section6_3_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section6_4}</h3>
                <p>{dict.owner_agreement.section6_4_text}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section7}</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section7_1}</h3>
                <p>{dict.owner_agreement.section7_1_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section7_2}</h3>
                <p>{dict.owner_agreement.section7_2_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section7_3}</h3>
                <p>{dict.owner_agreement.section7_3_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section7_4}</h3>
                <p>{dict.owner_agreement.section7_4_text}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section8}</h2>
            <p>{dict.owner_agreement.section8_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section9}</h2>
            <p>{dict.owner_agreement.section9_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section10}</h2>
            <p>{dict.owner_agreement.section10_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section11}</h2>
            <p>{dict.owner_agreement.section11_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section12}</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section12_1}</h3>
                <p>{dict.owner_agreement.section12_1_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section12_2}</h3>
                <p>{dict.owner_agreement.section12_2_text}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.owner_agreement.section12_3}</h3>
                <p>{dict.owner_agreement.section12_3_text}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section13}</h2>
            <p>{dict.owner_agreement.section13_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section14}</h2>
            <p>{dict.owner_agreement.section14_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section15}</h2>
            <p>{dict.owner_agreement.section15_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section16}</h2>
            <p>{dict.owner_agreement.section16_text}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.owner_agreement.section17}</h2>
            <p>{dict.owner_agreement.section17_text}</p>
            <p className="mt-4">
              Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Owner;
