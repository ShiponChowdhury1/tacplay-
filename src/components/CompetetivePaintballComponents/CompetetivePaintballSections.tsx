/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const styleConfigs = [
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)]",
    faded: true,
    avatar: "DV"
  },
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(9,10,17,0.98)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]",
    faded: false,
    avatar: "CL"
  },
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)]",
    faded: true,
    avatar: "JL"
  },
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(246,210,160,1)_0%,rgba(137,82,28,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(8,9,15,0.98)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.28)]",
    faded: true,
    avatar: "MG"
  },
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(9,10,17,0.98)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]",
    faded: false,
    avatar: "EB"
  },
  {
    avatarTone: "bg-[linear-gradient(135deg,rgba(246,210,160,1)_0%,rgba(137,82,28,1)_100%)]",
    cardTone: "border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)]",
    faded: true,
    avatar: "AV"
  }
];

const CompetetivePaintballSections = ({ dict }: { dict: any }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const testimonials = (dict.testimonials || []).map((t: any, idx: number) => ({
    ...t,
    ...styleConfigs[idx % styleConfigs.length],
  }));

  const getCardState = (index: number) => {
    const total = testimonials.length;
    if (total === 0) return "";
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === 0) {
      return "-translate-y-4 scale-[1.02] rotate-0 border-white/20 opacity-100 brightness-100 shadow-[0_28px_80px_rgba(0,0,0,0.38)]";
    }

    if (relativeIndex === 1) {
      return "translate-y-2 rotate-[7deg] scale-[0.98] opacity-70 brightness-[0.82] saturate-[0.85]";
    }

    if (relativeIndex === total - 1) {
      return "translate-y-2 -rotate-[7deg] scale-[0.98] opacity-70 brightness-[0.82] saturate-[0.85]";
    }

    return "translate-y-4 scale-[0.96] opacity-35 brightness-[0.72] saturate-[0.75]";
  };

  useEffect(() => {
    if (!hasInteracted || testimonials.length === 0) {
      return;
    }

    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, hasInteracted, testimonials.length]);

  const goToPrevious = () => {
    if (testimonials.length === 0) return;
    setHasInteracted(true);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    if (testimonials.length === 0) return;
    setHasInteracted(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-x-hidden overflow-y-visible py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,21,42,0.38)_0%,rgba(4,5,15,0.95)_46%,#04050f_80%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <MotionReveal className="max-w-4xl">
            <SectionHeading
              title={dict.title}
              description={dict.description}
              className="mx-0 max-w-4xl text-left"
              descriptionClassName="max-w-3xl"
            />
          </MotionReveal>

          <MotionReveal delay={0.08} className="lg:pt-10">
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={goToPrevious}
                className="inline-flex cursor-pointer h-12 w-12 items-center justify-center rounded-full bg-[#c90f18] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors hover:bg-[#df141f]"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={goToNext}
                className="inline-flex cursor-pointer h-12 w-12 items-center justify-center rounded-full bg-[#c90f18] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors hover:bg-[#df141f]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </MotionReveal>
        </div>

        <MotionStagger className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible pb-8 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-6 lg:pt-6">
          {testimonials.map((testimonial: any, index: number) => (
            <MotionStaggerItem
              key={`${testimonial.name}-${testimonial.location}`}
              className="flex-none snap-center basis-[82%] px-2 sm:basis-[70%] sm:px-3 md:basis-[52%] lg:basis-[40%] xl:basis-[32%]"
            >
              <article
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className={`relative h-full overflow-hidden rounded-4xl border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 sm:p-6 lg:transform-gpu ${testimonial.cardTone} ${testimonial.faded ? "opacity-75" : ""} ${getCardState(index)}`}
              >
                <Quote className="h-14 w-14 text-white/10" />
                <p
                  className={`mt-6 text-sm leading-7 ${testimonial.faded ? "text-white/55" : "text-white/92"} sm:text-[15px]`}
                >
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] ${testimonial.avatarTone}`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#7f82a4]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.1} className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#c90f18] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(201,15,24,0.28)] transition-transform hover:-translate-y-0.5"
          >
            {dict.share_experience}
          </button>
        </MotionReveal>
      </div>
    </section>
  );
};

export default CompetetivePaintballSections;
