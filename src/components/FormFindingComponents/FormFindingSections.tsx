/** @format */

import Image from "next/image";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const FormFindingSections = ({ dict }: { dict: any }) => {
  // Split localized steps into left and right steps
  const leftSteps = dict.steps.slice(0, 2).map((step: any, index: number) => ({
    ...step,
    number: String(index + 1),
  }));
  const rightSteps = dict.steps.slice(2, 4).map((step: any, index: number) => ({
    ...step,
    number: String(index + 3),
  }));

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title={dict.title}
            description={dict.description}
            className="max-w-4xl text-center"
            descriptionClassName="max-w-4xl mx-auto"
          />
        </MotionReveal>

        <div className="relative mt-16 md:mt-32">
          <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)_minmax(0,1fr)] md:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)_minmax(0,1fr)] xl:gap-8">
            <div className="relative grid gap-6 md:pr-4 xl:pr-8">
              <Image
                src="/images/left-line.png"
                alt=""
                width={120}
                height={600}
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-44 hidden  h-100 w-auto md:block xl:h-70"
              />
              {leftSteps.map((step: any, index: number) => (
                <MotionStaggerItem key={step.number}>
                  <article
                    className={`relative md:mr-14 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.26)] sm:p-6 ${index === 0 ? "md:mt-6" : "md:mt-1"}`}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#c90f18] text-base font-semibold text-white ">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.5rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
                      {step.description}
                    </p>

                   
                  </article>
                </MotionStaggerItem>
              ))}
            </div>

            <MotionStaggerItem className="hidden md:block md:order-0">
              <div className="relative mx-auto flex items-center justify-center sm:max-w-[24rem] lg:min-h-160 lg:max-w-[24rem]">
                
                <div className="relative w-full overflow-hidden ">
                  <Image
                    src="/images/form-finding-phone.png"
                    alt="TacPlay mobile app discover screen"
                    width={1900}
                    height={1700}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </MotionStaggerItem>

            <div className="relative grid gap-6 md:pl-4 xl:pl-8">
              <Image
                src="/images/right-line.png"
                alt=""
                width={120}
                height={600}
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 top-44 hidden h-100 w-auto md:block xl:h-70"
              />
              {rightSteps.map((step: any, index: number) => (
                <MotionStaggerItem key={step.number}>
                  <article
                    className={`relative md:ml-14 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.26)] sm:p-6 ${index === 0 ? "md:mt-1" : "md:mt-6"}`}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#c90f18] text-base font-semibold text-white ">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.5rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
                      {step.description}
                    </p>

                   
                  </article>
                </MotionStaggerItem>
              ))}
            </div>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
};

export default FormFindingSections;
