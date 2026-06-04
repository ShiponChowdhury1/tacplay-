import Link from "next/link";
import React from "react";
import { getDictionary } from "@/lib/dictionaries";
import CookiePreferencesWidget from "./CookiePreferencesWidget";

type Props = {
  params: Promise<{ locale: string }>;
};

const CookieSettings = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            {dict.cookie_policy.back}
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">{dict.cookie_policy.title}</h1>
          <p className="text-secondary">{dict.cookie_policy.lastUpdated}</p>
          <p className="mt-1 text-secondary">{dict.cookie_policy.company}</p>
          <p className="text-secondary">{dict.cookie_policy.website}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">

          {/* Intro */}
          <section>
            <p>
              {dict.cookie_policy.intro_text1}
            </p>
            <p className="mt-4">
              {dict.cookie_policy.intro_text2}
            </p>
            <p className="mt-4">{dict.cookie_policy.intro_comply}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.intro_item1}</li>
              <li>{dict.cookie_policy.intro_item2}</li>
            </ul>
            <p className="mt-4">
              {dict.cookie_policy.intro_agree}
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section1}</h2>
            <p>
              {dict.cookie_policy.section1_text1}
            </p>
            <p className="mt-4">
              {dict.cookie_policy.section1_text2}
            </p>
            <p className="mt-4">{dict.cookie_policy.section1_help}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section1_help1}</li>
              <li>{dict.cookie_policy.section1_help2}</li>
              <li>{dict.cookie_policy.section1_help3}</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section2}</h2>
            <p>
              {dict.cookie_policy.section2_text}
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section3}</h2>
            <div className="space-y-5">

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.cookie_policy.section3_1}</h3>
                <p>{dict.cookie_policy.section3_1_text}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_1_item1}</li>
                  <li>{dict.cookie_policy.section3_1_item2}</li>
                  <li>{dict.cookie_policy.section3_1_item3}</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.cookie_policy.section3_2}</h3>
                <p>{dict.cookie_policy.section3_2_text}</p>
                <p className="mt-4">{dict.cookie_policy.section3_2_examples}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_2_item1}</li>
                  <li>{dict.cookie_policy.section3_2_item2}</li>
                  <li>{dict.cookie_policy.section3_2_item3}</li>
                </ul>
                <p className="mt-4">{dict.cookie_policy.section3_2_tools}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_2_tool1}</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.cookie_policy.section3_3}</h3>
                <p>{dict.cookie_policy.section3_3_text}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_3_item1}</li>
                  <li>{dict.cookie_policy.section3_3_item2}</li>
                  <li>{dict.cookie_policy.section3_3_item3}</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{dict.cookie_policy.section3_4}</h3>
                <p>{dict.cookie_policy.section3_4_text}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_4_item1}</li>
                  <li>{dict.cookie_policy.section3_4_item2}</li>
                </ul>
                <p className="mt-4">{dict.cookie_policy.section3_4_processed}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_4_processor1}</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {dict.cookie_policy.section3_5} <span className="text-secondary/70 font-normal">{dict.cookie_policy.section3_5_note}</span>
                </h3>
                <p>{dict.cookie_policy.section3_5_text}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  <li>{dict.cookie_policy.section3_5_item1}</li>
                  <li>{dict.cookie_policy.section3_5_item2}</li>
                </ul>
                <p className="mt-4">{dict.cookie_policy.section3_5_consent}</p>
              </div>

            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section4}</h2>
            <p>{dict.cookie_policy.section4_text}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section4_item1}</li>
              <li>{dict.cookie_policy.section4_item2}</li>
              <li>{dict.cookie_policy.section4_item3}</li>
              <li>{dict.cookie_policy.section4_item4}</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section5}</h2>
            <p>{dict.cookie_policy.section5_text}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section5_item1}</li>
              <li>{dict.cookie_policy.section5_item2}</li>
            </ul>
            <p className="mt-4">{dict.cookie_policy.section5_withdraw}</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section6}</h2>
            <p>{dict.cookie_policy.section6_text}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section6_item1}</li>
              <li>{dict.cookie_policy.section6_item2}</li>
            </ul>
          </section>

          {/* 7 — Managing preferences + interactive widget */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{dict.cookie_policy.section7}</h2>
            <p>
              {dict.cookie_policy.section7_text1}
            </p>
            <p className="mt-4">{dict.cookie_policy.section7_text2}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section7_item1}</li>
              <li>{dict.cookie_policy.section7_item2}</li>
              <li>{dict.cookie_policy.section7_item3}</li>
            </ul>
            <p className="mt-4">{dict.cookie_policy.section7_note}</p>

            <h3 className="mt-8 mb-4 text-lg font-semibold text-white">{dict.cookie_policy.section7_browser_title}</h3>
            <p>
              {dict.cookie_policy.section7_browser_text}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section7_browser_item1}</li>
              <li>{dict.cookie_policy.section7_browser_item2}</li>
              <li>{dict.cookie_policy.section7_browser_item3}</li>
              <li>{dict.cookie_policy.section7_browser_item4}</li>
              <li>{dict.cookie_policy.section7_browser_item5}</li>
              <li>{dict.cookie_policy.section7_browser_item6}</li>
            </ul>
            <p className="mt-4">
              {dict.cookie_policy.section7_optout_text}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section7_optout_item1}</li>
              <li>{dict.cookie_policy.section7_optout_item2}</li>
              <li>{dict.cookie_policy.section7_optout_item3}</li>
            </ul>

            {/* Interactive Cookie Preference widget */}
            <CookiePreferencesWidget dict={dict.cookie_policy} />
          </section>

          {/* 8 — Other tracking technologies */}
          <section className="space-y-4 border-t border-background/60 pt-8">
            <h2 className="text-2xl font-bold text-white">{dict.cookie_policy.section8}</h2>
            <p>
              {dict.cookie_policy.section8_text1}
            </p>
            <p>
              {dict.cookie_policy.section8_text2}
            </p>

            <h3 className="text-lg font-semibold text-white">{dict.cookie_policy.section8_flash_title}</h3>
            <p>
              {dict.cookie_policy.section8_flash_text1}
            </p>
            <p>
              {dict.cookie_policy.section8_flash_text2}
            </p>
          </section>

          {/* 9 — Targeted advertising */}
          <section className="space-y-4 border-t border-background/60 pt-8">
            <h2 className="text-2xl font-bold text-white">{dict.cookie_policy.section9}</h2>
            <p>
              {dict.cookie_policy.section9_text1}
            </p>
            <p>
              {dict.cookie_policy.section9_text2}
            </p>
          </section>

          {/* 10 — Third-party cookies */}
          <section className="space-y-4 border-t border-background/60 pt-8">
            <h2 className="text-2xl font-bold text-white">{dict.cookie_policy.section10}</h2>
            <p>{dict.cookie_policy.section10_text1}</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section10_item1}</li>
              <li>{dict.cookie_policy.section10_item2}</li>
            </ul>
            <p>{dict.cookie_policy.section10_text2}</p>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">{dict.cookie_policy.section10_gdpr_title}</h3>
              <p>
                {dict.cookie_policy.section10_gdpr_text_part1}{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  {dict.cookie_policy.section10_gdpr_text_link}
                </Link>
                .
              </p>
            </div>
          </section>

          {/* 11 — Updates */}
          <section className="space-y-4 border-t border-background/60 pt-8">
            <h2 className="text-2xl font-bold text-white">{dict.cookie_policy.section11}</h2>
            <p>
              {dict.cookie_policy.section11_text1}
            </p>
            <p>{dict.cookie_policy.section11_text2}</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>{dict.cookie_policy.section11_item1}</li>
              <li>{dict.cookie_policy.section11_item2}</li>
            </ul>
          </section>

          {/* 12 — Contact */}
          <section className="space-y-4 border-t border-background/60 pt-8">
            <h2 className="text-2xl font-bold text-white">{dict.cookie_policy.section12}</h2>
            <p>
              {dict.cookie_policy.section12_text}
            </p>
            <div className="rounded-lg border border-background/60 bg-background/40 p-6 space-y-1">
              <p className="font-semibold text-white">{dict.cookie_policy.section12_company}</p>
              <p>{dict.cookie_policy.section12_address_line1}</p>
              <p>{dict.cookie_policy.section12_address_line2}</p>
              <p>{dict.cookie_policy.section12_phone}</p>
              <p>
                {dict.cookie_policy.section12_email_label}:{" "}
                <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">
                  info@tacplay.eu
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default CookieSettings;