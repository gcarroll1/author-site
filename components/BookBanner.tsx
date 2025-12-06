import Link from "next/link";
import Image from "next/image";

export default function BookBanner() {
  return (
    <div className="relative overflow-hidden border border-neutral-800 rounded-xl mb-8 bg-neutral-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_right]"
        style={{ backgroundImage: "url('/images/age-banner-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/10" />

      {/* Content */}
      <div className="relative px-5 py-6 md:px-8 md:py-10 lg:px-12 lg:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
          {/* Book on the left */}
          <div className="shrink-0">
            <Image
              src="/images/11-minutes-cover.png"
              alt="11 Minutes book cover"
              width={140}
              height={210}
              className="w-28 md:w-32 lg:w-40 h-auto rounded shadow-xl"
            />
            <p className="mt-2 text-xs md:text-sm text-neutral-300 text-center">
              <b>#3 in Crime–Heists releases on Amazon</b>
            </p>
          </div>

          {/* Text + buttons on the right (takes ~2/3 width on desktop) */}
          <div className="flex-1 w-full text-center md:text-left">
            {/* Eye-catcher text (top third equivalent) */}
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-amber-200 mb-1">
              As featured in
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              THE AGE
            </p>
            <p className="mt-1 text-base md:text-xl text-neutral-100">
              Weekend <i>NAKED CITY</i> Crime Feature by John Silvester
            </p>

            {/* Optional supporting line (you can tweak or remove) */}
            <p className="mt-3 text-sm md:text-base text-neutral-200 max-w-xl">
              <b><i>A cracking read and a cunning blend of inside information, fact and imagination. </i></b>
	      <b>  - John Silvester, The Age</b>

            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-start">
              <Link
                href="/order"
                className="inline-block text-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
              >
                Order 11 Minutes
              </Link>

              <Link
                href="https://edition.theage.com.au/shortcode/THE965/edition/bb140e08-98b0-3c56-276d-76f14aebacec?page=4ec43ee8-dc16-fd23-82ae-e5755ee2bfdb&" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-transparent hover:bg-white/10 text-white border border-white/60 px-5 py-2.5 rounded-lg font-medium transition"
              >
                Read The Age Feature
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
