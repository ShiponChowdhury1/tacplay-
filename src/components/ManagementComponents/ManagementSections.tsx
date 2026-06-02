/** @format */

"use client";

import Image from "next/image";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const sessionPerformanceData = [
  { name: "Active Sessions", value: 42, fill: "#c80e18" },
  { name: "Queued Sessions", value: 26, fill: "#f3cf06" },
];

const ManagementSections = ({ dict }: { dict: any }) => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,25,58,0.45)_0%,rgba(6,8,20,0.96)_44%,#05060e_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-208 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,30,45,0.18)_0%,rgba(232,30,45,0.03)_38%,rgba(6,8,20,0)_72%)] blur-3xl"
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

        <MotionStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-12 lg:gap-5">
          <MotionStaggerItem className="lg:col-span-7">
            <div
              className="relative rounded-[1.7rem] p-[1.5px] overflow-hidden h-full"
              style={{
                background:
                  "linear-gradient(116.34deg, #FF3131 2.32%, rgba(12, 12, 12, 0.2) 50.85%, #FF3131 95.78%)",
              }}
            >
              <article className="group p-4 md:p-8 h-full overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[linear-gradient(180deg,rgba(11,14,28,0.98)_0%,rgba(7,9,19,0.98)_100%)] shadow-[0_20px_56px_rgba(0,0,0,0.5)]">
                <div className="relative p-2 rounded-xl bg-black border-t border-l border-r border-gray-700 aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/paintball-management-1.svg"
                    alt={dict.card1_title}
                    width={2000}
                    height={3000}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(8,10,19,0)_0%,rgba(8,10,19,0.9)_100%)]" />
                </div>
                <div className="text-center ">
                  <h3 className="text-xl md:text-2xl font-semibold text-white sm:text-[1.7rem]">
                    {dict.card1_title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-5 text-[#8f95b7] sm:text-[15px]">
                    {dict.card1_desc}
                  </p>
                </div>
              </article>
            </div>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-5">
            <div
              className="relative rounded-[1.7rem] p-[1.5px] overflow-hidden h-full"
              style={{
                background:
                  "linear-gradient(116.34deg, #FF3131 2.32%, rgba(12, 12, 12, 0.2) 50.85%, #FF3131 95.78%)",
              }}
            >
              <article className="h-full overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[linear-gradient(180deg,rgba(12,15,30,0.98)_0%,rgba(8,9,18,0.98)_100%)] pt-4 shadow-[0_20px_56px_rgba(0,0,0,0.5)] sm:pt-5">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white sm:text-[1.7rem]">
                    {dict.card2_title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-5 text-[#8f95b7] sm:text-[15px]">
                    {dict.card2_desc}
                  </p>
                </div>

                <div className="mt-22 ml-8 md:ml-16 overflow-hidden rounded-[1.2rem]  bg-[#0a0d1b] ">
                  <Image
                    src="/images/paintball-management-2.png"
                    alt={dict.card2_title}
                    width={9000}
                    height={9000}
                    className="object-cover object-center"
                  />
                </div>
              </article>
            </div>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-4">
            <div
              className="relative rounded-[1.7rem] p-[1.5px] overflow-hidden h-full"
              style={{
                background:
                  "linear-gradient(116.34deg, #FF3131 2.32%, rgba(12, 12, 12, 0.2) 50.85%, #FF3131 95.78%)",
              }}
            >
              <article className="h-full overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[linear-gradient(180deg,rgba(12,15,30,0.98)_0%,rgba(8,9,18,0.98)_100%)] p-4 shadow-[0_20px_56px_rgba(0,0,0,0.5)] sm:p-5">
                <h3 className="text-center text-xl md:text-2xl font-semibold leading-tight text-white sm:text-[1.7rem]">
                  {dict.card3_title}
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-5 text-[#8f95b7] sm:text-[15px]">
                  {dict.card3_desc}
                </p>

                <div className="relative mt-8 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={sessionPerformanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        cornerRadius={12}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        stroke="none"
                      >
                        {sessionPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold leading-none text-white sm:text-5xl">
                      68
                    </p>
                    <p className="mt-2 text-lg font-medium leading-none text-white sm:text-xl">
                      {dict.sessions}
                    </p>
                  </div>

                  <div className="absolute bottom-[20%] left-[8%] rounded-full border-2 border-[#f3cf06]/40 bg-[#f3cf06] px-3 py-1.5 text-center sm:px-4 sm:py-2">
                    <p className="text-[12px] font-bold leading-none text-[#161616] sm:text-[13px]">
                      2,568
                    </p>
                  </div>

                  <div className="absolute right-[8%] top-[28%] rounded-full border-2 border-[#d01925]/40 bg-[#ffffff] px-3 py-1.5 text-center sm:px-4 sm:py-2">
                    <p className="text-[12px] font-bold leading-none text-[#d01925] sm:text-[13px]">
                      2,568
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-8">
            <div
              className="relative rounded-[1.7rem] p-[1.5px] overflow-hidden h-full"
              style={{
                background:
                  "linear-gradient(116.34deg, #FF3131 2.32%, rgba(12, 12, 12, 0.2) 50.85%, #FF3131 95.78%)",
              }}
            >
              <article className="group pt-4 md:pt-6 h-full overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[linear-gradient(180deg,rgba(11,14,28,0.98)_0%,rgba(7,9,19,0.98)_100%)] shadow-[0_20px_56px_rgba(0,0,0,0.5)]">
                <div className="relative  aspect-video max-h-95 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/paintball-management3.png"
                    alt={dict.card4_title}
                    fill
                    sizes="(max-width: 600px) 100vw, 66vw"
                    className="max-h-94 object-center transition duration-700 "
                  />
                </div>

                <div className="pb-4 md:pb-6 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white sm:text-[1.7rem]">
                    {dict.card4_title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-5 text-[#8f95b7] sm:text-[15px]">
                    {dict.card4_desc}
                  </p>
                </div>
              </article>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  );
};

export default ManagementSections;
