// components/AmazonRankingHighlight.tsx

import Image from "next/image";

export function AmazonRankingHighlight() {
  return (
    <section className="mt-6">
      <h2 className="text-center text-[10px] md:text-xs font-medium tracking-[0.2em] text-[#c4b094] uppercase">
        Amazon Best Sellers
      </h2>

      <p className="mt-1 text-center text-base md:text-lg font-semibold text-white">
        Top 10 in Heist Thrillers
        <span className="mt-1 block text-[10px] md:text-xs font-normal text-[#c4b094]">
          Screenshot captured 6 December 2025
        </span>
      </p>

      <div className="relative mx-auto mt-4 max-w-3xl">
        <div className="overflow-hidden rounded-lg border border-[#c4b094]/60 bg-black/30 px-2 py-2">
          <Image
            src="/images/Amazon-Best-Sellers-List.png"
            alt="Amazon Best Sellers list showing 11 Minutes in the Top 10 for Heist Thrillers"
            width={700}
            height={360}
            className="mx-auto max-w-2xl h-auto object-contain"
            priority
          />
        </div>

        <p className="mt-2 text-center text-[11px] md:text-xs text-neutral-400">
          Appearing alongside established crime and thriller authors in the Amazon Heist Thrillers category.
        </p>
      </div>
    </section>
  );
}
