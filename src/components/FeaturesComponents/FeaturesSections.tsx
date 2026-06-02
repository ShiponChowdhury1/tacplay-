/** @format */

import Image from "next/image";
import {
  BarChart3,
  BellRing,
  CalendarClock,
  Users,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const iconConfigs = [
  { icon: MapPinned, iconClassName: "bg-emerald-500/15 text-emerald-400" },
  { icon: CalendarClock, iconClassName: "bg-fuchsia-500/15 text-fuchsia-400" },
  { icon: BellRing, iconClassName: "bg-blue-500/15 text-blue-400" },
  { icon: Users, iconClassName: "bg-orange-500/15 text-orange-400" },
  { icon: BarChart3, iconClassName: "bg-violet-500/15 text-violet-400" },
  { icon: ShieldCheck, iconClassName: "bg-rose-500/15 text-rose-400" },
];

const FeaturesSections = ({ dict }: { dict: any }) => {
  const features = dict.items.map((item: any, index: number) => ({
    ...item,
    ...iconConfigs[index],
  }));

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,47,88,0.35)_0%,rgba(4,5,15,0.88)_46%,#04050f_76%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <MotionReveal>
          <SectionHeading
            title={dict.title}
            description={dict.description}
            className="max-w-4xl text-center"
            descriptionClassName="max-w-3xl mx-auto"
          />
        </MotionReveal>



        <MotionStagger className="mt-12 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center w-full">
          {/* Left Column */}
          <div className="flex w-full max-w-[420px] flex-col gap-6 md:w-1/3 md:max-w-[413.33px]">
            <MotionStaggerItem className="w-full">
              <FeatureCard {...features[0]} />
            </MotionStaggerItem>
            <MotionStaggerItem className="w-full">
              <FeatureCard {...features[2]} />
            </MotionStaggerItem>
          </div>

          {/* Middle Column */}
          <div className="flex w-full max-w-[420px] flex-col gap-6 md:w-1/3 md:max-w-[413.33px]">
            <MotionStaggerItem className="w-full">
              <div 
                className="relative w-full overflow-hidden"
                style={{
                  height: "420px",
                  borderRadius: "32px",
                  background: "#100F17"
                }}
              >
                <Image
                  src="/images/iPhone14-pro.png"
                  alt="TacPlay mobile app preview"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </MotionStaggerItem>
            <MotionStaggerItem className="w-full">
              <FeatureCard {...features[4]} customHeight="245px" />
            </MotionStaggerItem>
          </div>

          {/* Right Column */}
          <div className="flex w-full max-w-[420px] flex-col gap-6 md:w-1/3 md:max-w-[413.33px]">
            <MotionStaggerItem className="w-full">
              <FeatureCard {...features[1]} />
            </MotionStaggerItem>
            <MotionStaggerItem className="w-full">
              <FeatureCard {...features[3]} />
            </MotionStaggerItem>
          </div>
        </MotionStagger>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName: string;
  wide?: boolean;
  customHeight?: string;
};

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconClassName,
  wide = false,
  customHeight = "305px",
}: FeatureCardProps) => {
  return (
    <article
      className="group flex flex-col w-full overflow-hidden rounded-[24px] border border-[#1E1C2B] transition-transform duration-200 hover:-translate-y-1"
      style={{
        height: customHeight,
        background: "#100F17",
        paddingTop: "24px",
        paddingRight: "16px",
        paddingBottom: "24px",
        paddingLeft: "18px",
      }}
    >
      <div
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconClassName}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3
        className={`mt-4 font-semibold tracking-tight text-white ${
          wide ? "text-xl sm:text-[1.4rem]" : "text-lg sm:text-[1.2rem]"
        }`}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#a7abc6] sm:text-[14px]">
        {description}
      </p>
     
    </article>
  );
};

export default FeaturesSections;