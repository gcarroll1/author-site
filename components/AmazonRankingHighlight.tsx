// components/AmazonRankingHighlight.tsx
import Image from "next/image";

export function AmazonRankingHighlight() {
  return (
    <section className="mt-12">
      <h2 className="text-center text-xs md:text-sm font-medium tracking-[0.25em] text-[#c4b094] uppercase">
        Amazon Hot New Releases
      </h2>

      <p className="mt-2 text-center text-lg md:text-2xl font-semibold text-white">
        #3 in Heist Thrillers
        <span className="mt-1 block text-xs md:text-sm font-normal text-[#c4b094]">
          As of 6 December 2025
        </span>
      </p>

      {/* Wrapper needs overflow-visible so the bubble can hang outside */}
      <div className="relative mx-auto mt-6 max-w-3xl overflow-visible">
        {/* Base screenshot */}
        <div className="overflow-hidden rounded-xl border border-[#c4b094]/70 bg-black/40 px-2 py-3 sm:px-4 sm:py-4">
          <div className="relative w-full">
            <Image
              src="/images/Amazon-Hot-New-Releases.png"
              alt="Amazon Hot New Releases chart showing 11 Minutes at #3 in Heist Thrillers"
              width={900}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Zoom bubble – responsive sizing so it doesn't swamp mobile */}
        <div
          className="
            pointer-events-none
            hidden sm:block          /* hide on very tiny screens; show from sm up */

            absolute
            right-[-4%]
            bottom-[-6%]

            h-28 w-28                /* small on mobiles (sm) */
            sm:h-64 sm:w-64
            md:h-80 md:w-80          /* larger on tablets */
            lg:h-80 lg:w-80          /* largest on desktop */

            rounded-full
            border-4 border-[#c4b094]
            bg-black
            shadow-xl shadow-black/60
          "
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/Amazon-Hot-New-Releases_zoom.png"
              alt="Zoomed view of 11 Minutes at #3 in Amazon Heist Thrillers"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
