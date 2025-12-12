// components/AmazonRankingHighlight.tsx
import Image from "next/image";

export function AmazonRankingHighlight() {
  return (
    <section className="mt-12">
      <h2 className="text-center text-xs md:text-sm font-medium tracking-[0.25em] text-[#c4b094] uppercase">
        Amazon Best Sellers
      </h2>

      <p className="mt-2 text-center text-lg md:text-2xl font-semibold text-white">
        Top 10 in Heist Thrillers
        <span className="mt-1 block text-xs md:text-sm font-normal text-[#c4b094]">
          Screenshot captured 6 December 2025
        </span>
      </p>

      <div className="relative mx-auto mt-6 max-w-5xl overflow-visible">
        <div className="overflow-hidden rounded-xl border border-[#c4b094]/70 bg-black/40 px-2 py-3 sm:px-4 sm:py-4">
          <div className="relative w-full">
            <Image
              src="/images/Amazon-Best-Sellers-List.png"
              alt="Amazon Best Sellers list showing 11 Minutes in the Top 10 for Heist Thrillers"
              width={1400}
              height={720}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <p className="mt-3 text-center text-xs md:text-sm text-neutral-300">
          Appearing alongside established crime and thriller authors in the Amazon Heist
          Thrillers category.
        </p>
      </div>
    </section>
  );
}
