import Image from "next/image";

const BannerSections = () => {
  return (
    <section className="relative w-full overflow-visible py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main framed screenshot */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-visible rounded-3xl bg-[linear-gradient(180deg,#0b0b10,rgba(10,11,18,0.6))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

            {/* === Decorative SVGs — positioned ON the white bezel border === */}

            {/* Orange triangle — top-left corner of bezel */}
            <div
              className="pointer-events-none absolute z-20 hidden md:block"
              style={{ top: "0px", left: "0px" }}
            >
              <Image
                src="/images/left-top-corner.svg"
                alt=""
                width={62}
                height={64}
                aria-hidden="true"
              />
            </div>

            {/* Pink swirl — top-center of bezel */}
            <div
              className="pointer-events-none absolute z-20 hidden md:block"
              style={{ top: "6px", left: "50%", transform: "translateX(-50%)" }}
            >
              <Image
                src="/images/top-center.svg"
                alt=""
                width={42}
                height={42}
                aria-hidden="true"
              />
            </div>

            {/* Purple triangle — bottom-left of bezel */}
            <div
              className="pointer-events-none absolute z-20 hidden md:block"
              style={{ bottom: "40px", left: "4px" }}
            >
              <Image
                src="/images/left-bottom.svg"
                alt=""
                width={62}
                height={64}
                aria-hidden="true"
              />
            </div>

            {/* Yellow swirl — bottom-right of bezel */}
            <div
              className="pointer-events-none absolute z-20 hidden md:block"
              style={{ bottom: "40px", right: "12px" }}
            >
              <Image
                src="/images/right-bottom.svg"
                alt=""
                width={46}
                height={57}
                aria-hidden="true"
              />
            </div>

            {/* Outer bezel effect */}
            <div className="rounded-2xl border-2 border-white/70 p-6 bg-black/40 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-xl bg-black">
                {/* Screenshot */}
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/banner.png"
                    alt="Dashboard preview"
                    fill
                    sizes="(min-width: 1280px) 80rem, (min-width: 768px) 60rem, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSections;
