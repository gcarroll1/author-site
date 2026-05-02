import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

function OutboundButton({ href, label, variant = "secondary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 text-sm font-medium transition"
      : "inline-flex items-center justify-center rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/60 px-5 py-2.5 text-sm font-medium transition";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
    </a>
  );
}

export default function BookBanner() {
  const ageUrl =
    "https://edition.theage.com.au/shortcode/THE965/edition/bb140e08-98b0-3c56-276d-76f14aebacec?page=4ec43ee8-dc16-fd23-82ae-e5755ee2bfdb&";

  const nineNowUrl =
    "https://www.9now.com.au/9news-melbourne/season-2026/episode-116";

  return (
    <div className="relative overflow-hidden border border-neutral-800 rounded-xl mb-3 bg-neutral-950">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_right] opacity-45"
        style={{ backgroundImage: "url('/images/age-banner-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/80" />

      <div className="relative px-3 py-2 md:px-4 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* The Age feature */}
          <section className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6 flex flex-col md:flex-row gap-5 items-center md:items-start">

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs tracking-[0.25em] uppercase text-amber-200 mb-1">
                As featured in
              </p>
              <p
                className="text-2xl md:text-2xl font-semibold text-white leading-tight"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                THE AGE
              </p>
              <p className="mt-1 text-base md:text-lg text-neutral-100">
                Weekend <i>Naked City</i> crime feature by John Silvester
              </p>
              <div className="shrink-0 w-full md:w-[220px] lg:w-[250px]">
                <Image
                  src="/images/The-Age-11-Minutes-the-great-bookie-robbery.png"
                  alt="The Age Weekend Naked City Crime Feature by John Silvester"
                  width={450}
                  height={238}
                  className="w-full h-auto rounded shadow-xl"
                  priority
                />
              </div>
              <p className="mt-3 text-xs md:text-sm text-neutral-200">
                <b><i>“A cracking read and a cunning blend of inside information, fact and imagination.”</i></b>
                <b>&nbsp;— John Silvester</b>
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-start">
                <OutboundButton href={ageUrl} label="Read The Age Feature" />
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 text-sm font-medium transition"
                >
                  Order 11 Minutes
                </Link>
              </div>
            </div>
          </section>

          {/* 9Now feature */}
          <section className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-amber-200 mb-1">
                Seen on TV
              </p>
              <p className="text-2xl md:text-2xl font-semibold text-white leading-tight">
                9 News Melbourne
              </p>
              <p className="mt-2 text-base md:text-lg text-neutral-100">
                The 50th anniversary of the Great Bookie Robbery, filmed at the original crime scene.
              </p>
              <p className="mt-2 text-xs md:text-sm text-neutral-200">
                Watch the 9Now bulletin segment covering Gregory M Carroll’s anniversary presentation and the story behind <b><i>11 Minutes</i></b>.
              </p>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <OutboundButton href={nineNowUrl} label="Watch on 9Now" variant="primary" />
              <Link
                href="/media-kit"
                className="inline-flex items-center justify-center rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/60 px-5 py-2.5 text-sm font-medium transition"
              >
                Media & Press
              </Link>

            </div>
              <p className="mt-2 text-xs md:text-sm text-neutral-300">
                To view on 9Now, you will need to register for a free account. No subscription is required.
              </p>
          </section>
        </div>
      </div>
    </div>
  );
}
