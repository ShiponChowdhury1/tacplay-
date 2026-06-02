/** @format */

import HeroSection from "@/components/HeroComponents/HeroSection";
import DownloadSections from "@/components/DownloadComponents/DownloadSections";
import FeaturesSections from "@/components/FeaturesComponents/FeaturesSections";
import ManagementSections from "@/components/ManagementComponents/ManagementSections";
import PowerFeatureSections from "@/components/PowerFeatureComponents/PowerFeatureSections";
import FormFindingSections from "@/components/FormFindingComponents/FormFindingSections";
import CompetetivePaintballSections from "@/components/CompetetivePaintballComponents/CompetetivePaintballSections";
import BannerSections from "@/components/BannerComponents/BannerSections";
import HowItWorksSections from "@/components/HowItWorksComponents/HowItWorksSections";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const dict = await getDictionary(locale);

  return (
    <main className="w-full overflow-x-clip">
      <HeroSection dict={dict.hero} />
      <FeaturesSections dict={dict.features} />
      <HowItWorksSections dict={dict.how_it_works} />
      <ManagementSections dict={dict.management} />
      <PowerFeatureSections dict={dict.power_features} />
      <FormFindingSections dict={dict.form_finding} />
      <BannerSections />  
      <CompetetivePaintballSections dict={dict.competitive} />
      <DownloadSections dict={dict.download} />
    </main>
  );
}
