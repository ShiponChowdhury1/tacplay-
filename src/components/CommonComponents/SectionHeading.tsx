/** @format */

import { cn } from "@/lib/utils";
import { MotionReveal } from "./MotionReveal";
import Image from "next/image";

type SectionHeadingProps = {
  semiTitle?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionHeading = ({
  semiTitle,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) => {
  const isLeftAligned = className?.includes("text-left");

  return (
    <div className={cn("mx-auto max-w-4xl", className)}>
      {semiTitle && (
        <p className="text-[11px] font-semibold tracking-[0.18em] text-button-bg uppercase md:text-[13px]">
          {semiTitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-primary md:text-[40px]",
          semiTitle && "mt-1 md:mt-3",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 md:mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-lg md:text-xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
      <MotionReveal
        delay={0.14}
        className={cn(
          "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
          isLeftAligned ? "items-start" : "items-center justify-center"
        )}
      >
        <Image
          src="/images/heading-up.png"
          alt="Players icon"
          width={500}
          height={500}
          className="h-6 w-90 md:h-8 md:w-80 lg:h-8 lg:w-150"
        />
      </MotionReveal>
    </div>
  );
};

export default SectionHeading;
