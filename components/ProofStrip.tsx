// components/ProofStrip.tsx

import Image from "next/image";
import Link from "next/link";

export default function ProofStrip() {
  return (
    <section className="mt-2">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Silvester */}
        <div className="rounded-xl border border-[#c4b094]/40 bg-black/40 p-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b094]">
            Media
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            <b><i>“A cracking read and a cunning blend of inside information, fact and imagination.”</i></b>
          </p>

          <p className="mt-3 text-xs text-[#c4b094]">
            Featured by John Silvester, The Age
          </p>

          <div className="mt-4 overflow-hidden rounded-lg border border-[#c4b094]/50 bg-black/30 p-2">
            <Image
              src="/images/The-Age-11-Minutes-the-great-bookie-robbery.png"
              alt="The Age 6-Dec-25 How gang pulled off heist of century"
              width={450}
              height={238}
              className="h-auto rounded shadow-xl"
            />

            <Link
              href="https://edition.theage.com.au/shortcode/THE965/edition/bb140e08-98b0-3c56-276d-76f14aebacec?page=4ec43ee8-dc16-fd23-82ae-e5755ee2bfdb&"
              className="text-sm font-medium text-white underline underline-offset-4 hover:text-[#c4b094]"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* Amazon ranking */}
        <div className="rounded-xl border border-[#c4b094]/40 bg-black/40 p-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b094]">
            Amazon
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Top 10 in Heist Thrillers
          </h3>

          <div className="mt-4 overflow-hidden rounded-lg border border-[#c4b094]/50 bg-black/30 p-2">
            <Image
              src="/images/Amazon-Best-Sellers-List.png"
              alt="Amazon Best Sellers list showing 11 Minutes in the Top 10 for Heist Thrillers"
              width={1400}
              height={720}
              className="mx-auto h-auto w-full max-w-xs object-contain"
              priority
            />
          </div>

          <p className="mt-3 text-xs text-neutral-400">
            Screenshot captured 6 December 2025
          </p>
        </div>

        {/* Star rating */}
        <div className="rounded-xl border border-[#c4b094]/40 bg-black/40 p-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b094]">
            Readers
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Strong early reader response
          </h3>

          <div className="mt-4 text-2xl tracking-[0.2em] text-[#c4b094]">
            ★★★★★
          </div>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            “A gripping Melbourne crime story. Hard, fast, and sharply told.”
          </p>

          <p className="mt-3 text-xs text-neutral-400">
            Reader review
          </p>
        </div>
      </div>
    </section>
  );
}