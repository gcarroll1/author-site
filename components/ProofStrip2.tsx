// components/ProofStrip2.tsx

import Image from "next/image";
import Link from "next/link";

export default function ProofStrip2() {
  return (
    <section className="mt-0">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Silvester */}
        <div className="rounded-xl border border-[#c4b094]/40 bg-black/40 p-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b094]">
            11 MINUTES
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            <b><i>“A cracking read and a cunning blend of inside information, fact and imagination.”</i></b>
          </p>

          <p className="mt-0 text-right text-xs text-[#c4b094]">
            — Featured by John Silvester, The Age
          </p>
	  <br/>
            <Image
              src="/images/The-Age-11-Minutes-the-great-bookie-robbery.png"
              alt="The Age 6-Dec-25 How gang pulled off heist of century"
              width={225}
              height={119}
              className="h-auto rounded block mx-auto shadow-xl"
            />

            <Link
              href="https://edition.theage.com.au/shortcode/THE965/edition/bb140e08-98b0-3c56-276d-76f14aebacec?page=4ec43ee8-dc16-fd23-82ae-e5755ee2bfdb&"
              className="text-sm font-medium text-white underline underline-offset-4 hover:text-[#c4b094]"
            >
              Read more
            </Link>

        </div>




        {/* Star rating */}
        <div className="rounded-xl border border-[#c4b094]/40 bg-black/40 p-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c4b094]">
            11 MILLION
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Strong early reader response
          </h3>

          <div className="mt-4 text-2xl tracking-[0.2em] text-[#c4b094]">
            ★★★★★
          </div>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            <b><i>“A propulsive read… with a sense of journey, moral dilemmas, escape, and the whiff of desperation and retribution.”</i></b>
          </p>
          <p className="mt-0 text-right text-xs text-[#c4b094]">
            — Andrew Rule, Life & Crimes podcast
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            <b><i>“Wow!! That was one wild ride. I genuinely loved it.”</i></b>
          </p>

          <p className="mt-0 text-right text-xs text-[#c4b094]">
            — Tony Jones, 9 NEWS presenter
          </p>

        </div>
      </div>
    </section>
  );
}