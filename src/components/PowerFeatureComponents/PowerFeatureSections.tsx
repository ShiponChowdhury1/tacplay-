/** @format */

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

interface GradientCardProps {
  percentage: string;
  title: string;
  description: string;
}

function GradientCard({ percentage, title, description }: GradientCardProps) {
  return (
    <div
      className="relative rounded-[24px] p-[1.5px] overflow-hidden h-full transition-transform duration-200 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(116.34deg, #FF3131 2.32%, rgba(12, 12, 12, 0.2) 50.85%, #FF3131 95.78%)",
      }}
    >
      {/* Inner card */}
      <div
        className="rounded-[22.5px] p-7 sm:p-8 h-full flex flex-col gap-5"
        style={{
          background: "#1E1C2B",
          minHeight: "320px",
        }}
      >
        {/* Percentage */}
        <p
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-none"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {percentage}
        </p>

        {/* Title */}
        <h3
          className="text-xl font-bold text-white leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-[#A0A0B0] leading-relaxed mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

const PowerFeatureSections = ({ dict }: { dict: any }) => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,21,42,0.4)_0%,rgba(4,5,15,0.94)_48%,#04050f_80%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title={dict.title}
            description={dict.description}
            className="max-w-4xl text-center"
            descriptionClassName="max-w-3xl mx-auto"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {dict.items.map((feature: any) => (
            <MotionStaggerItem key={feature.title} className="h-full">
              <GradientCard
                percentage={feature.percent}
                title={feature.title}
                description={feature.description}
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default PowerFeatureSections;
