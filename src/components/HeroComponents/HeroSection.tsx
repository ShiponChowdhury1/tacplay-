/** @format */

import Image from "next/image";
import { FaApple } from "react-icons/fa";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import googlePlay from "../../../public/images/playstore-icon.svg";

const HeroSection = ({ dict }: { dict: any }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full pb-0 pt-8 sm:pt-12 lg:pt-16"
    >
      {/* Background gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 ">
        {/* Base brand background */}
        <div className="absolute inset-0 bg-[#E86869] mx-4 md:mx-6 rounded-b-2xl" />

        {/* Downward curved black gradient */}
        <div className="absolute inset-x-0 top-0 h-[112%] bg-[radial-gradient(ellipse_120%_95%_at_50%_0%,rgba(4,5,15,1)_0%,rgba(4,5,15,0.98)_38%,rgba(4,5,15,0.88)_54%,rgba(4,5,15,0.62)_70%,rgba(4,5,15,0.24)_86%,rgba(4,5,15,0)_100%)]" />

        {/* Extra top depth for the near-black hero start */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-[linear-gradient(to_bottom,rgba(2,3,10,0.9)_0%,rgba(2,3,10,0.45)_58%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <MotionReveal delay={0.04} className="mt-6">
            <div className="max-w-6xl gap-2 md:gap-4 text-balance text-lg sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-semibold leading-[1.05] tracking-tight text-white">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {dict.title_part1}{" "}
                <Image
                  src="/images/hero-name1.png"
                  alt="Paintball"
                  width={320}
                  height={320}
                  priority
                  className="h-10 w-22 md:h-18 md:w-44 lg:h-30 lg:w-52"
                />{" "}
                {dict.title_part2}
              </div>
              {dict.title_part3}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="mt-5 max-w-2xl">
            <p className="text-sm leading-relaxed text-[#a7abc6] sm:text-base lg:text-lg">
              {dict.subtitle}
            </p>
          </MotionReveal>

          <MotionReveal
            delay={0.14}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Image
              src="/images/heading-up.png"
              alt="Players icon"
              width={500}
              height={500}
              className="h-6 w-90 md:h-8 md:w-80 lg:h-10 lg:w-150"
            />
          </MotionReveal>

          <MotionStagger
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            stagger={0.08}
            delayChildren={0.08}
          >
            <MotionStaggerItem>
              <a
                href="#"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#171b31] sm:w-40"
                aria-label="Download on the App Store"
              >
                <FaApple className="h-5 w-5" />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] text-white/70">{dict.download_on}</span>
                  <span className="text-xs font-semibold">{dict.app_store}</span>
                </span>
              </a>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <a
                href="#"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#171b31] sm:w-40"
                aria-label="Get it on Google Play"
              >
                <Image
                  src={googlePlay}
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] text-white/70">{dict.get_it_on}</span>
                  <span className="text-xs font-semibold">{dict.google_play}</span>
                </span>
              </a>
            </MotionStaggerItem>
          </MotionStagger>

          {/* Phone mockups — wide to match 3-phone spread */}
          <MotionReveal
            delay={0.18}
            className="relative mt-12 w-full max-w-4xl lg:mt-16"
          >
            <div className="overflow-hidden w-full">
              <Image
                src="/images/hero-banner.png"
                alt="TacPlay dashboard preview"
                width={1800}
                height={1860}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
