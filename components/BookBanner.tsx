import Link from "next/link";
import Image from "next/image";

function spotifyUriToWeb(url: string) {
  // Converts: spotify:episode:76Jeao9SKYXjrHsRJWOMXe
  // To:       https://open.spotify.com/episode/76Jeao9SKYXjrHsRJWOMXe
  if (url?.startsWith("spotify:episode:")) {
    const id = url.split("spotify:episode:")[1]?.trim();
    if (id) return `https://open.spotify.com/episode/${id}`;
  }
  return url;
}

type ButtonProps = {
  href: string;
  label: string;
  disabled?: boolean;
};

function OutboundButton({ href, label, disabled }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition border";
  const enabled =
    "text-white border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/60";
  const disabledCls =
    "text-neutral-400 border-neutral-700 bg-neutral-900/60 cursor-not-allowed";

  if (disabled) {
    return (
      <span
        className={`${base} ${disabledCls}`}
        aria-disabled="true"
        title="Coming soon"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${enabled}`}
    >
      {label}
    </a>
  );
}

export default function BookBanner() {
  // --- YOUR LINKS (update here later if needed) ---
  const ageUrl =
    "https://edition.theage.com.au/shortcode/THE965/edition/bb140e08-98b0-3c56-276d-76f14aebacec?page=4ec43ee8-dc16-fd23-82ae-e5755ee2bfdb&";

  const part1Apple =
    "https://podcasts.apple.com/au/podcast/the-bookie-robbers-brother-part-1/id1260800644?i=1000745494694";
  const part1Spotify = spotifyUriToWeb("spotify:episode:76Jeao9SKYXjrHsRJWOMXe");

  const part2Apple =
    "https://podcasts.apple.com/au/podcast/the-bookie-robbers-brother-part-2/id1260800644?i=1000746399694";
  const part2Spotify = spotifyUriToWeb("spotify:episode:76Jeao9SKYXjrHsRJWOMXe");

  // Part 2 not available yet (set to true next week when live)
  const part2Live = false;

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
      <div className="relative px-5 py-6 md:px-8 md:py-6 lg:px-12 lg:py-6">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
          {/* The Age image on the left */}
          <div className="shrink-0">
            <Image
              src="/images/The-Age-11-Minutes-the-great-bookie-robbery.png"
              alt="The Age Weekend Naked City Crime Feature by John Silvester"
              width={450}
              height={238}
              className="h-auto rounded shadow-xl"
              priority
            />
            <p className="mt-2 text-xs md:text-sm text-neutral-300 text-center">
              <b>
                The True Crime behind <i>11 MINUTES</i>
              </b>
            </p>
          </div>

          {/* Text + buttons on the right */}
          <div className="flex-1 w-full text-center md:text-left">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-amber-200 mb-1">
              As featured in
            </p>

            <p
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              THE AGE
            </p>

            <p className="mt-1 text-base md:text-xl text-neutral-100">
              Weekend <i>NAKED CITY</i> Crime Feature by John Silvester
            </p>

            <p className="mt-3 text-sm md:text-base text-neutral-200 max-w-xl">
              <b>
                <i>
                  “A cracking read and a cunning blend of inside information,
                  fact and imagination.”
                </i>
              </b>
              <b>&nbsp;&nbsp;&nbsp;-&nbsp;John Silvester, The Age</b>
            </p>

            {/* Primary CTAs */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-start">
              <Link
                href="/order"
                className="inline-block text-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
              >
                Order 11 Minutes
              </Link>

              <a
                href={ageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-transparent hover:bg-white/10 text-white border border-white/60 px-5 py-2.5 rounded-lg font-medium transition"
              >
                Read The Age Feature
              </a>
            </div>

            {/* Secondary stacked strip: Andrew Rule podcast */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-amber-200 mb-1">
                Also featured on
              </p>

              <p className="text-lg md:text-xl font-semibold text-white">
                Andrew Rule — <i>Life and Crimes</i>
              </p>

              <p className="mt-1 text-sm md:text-base text-neutral-200 max-w-2xl">
                A two-part interview unpacking the real story behind{" "}
                <b>
                  <i>11 Minutes</i>
                </b>
                .
              </p>

              {/* Podcast buttons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="text-sm font-semibold text-white mb-2">
                    Part 1
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <OutboundButton href={part1Apple} label="Apple Podcasts" />
                    <OutboundButton href={part1Spotify} label="Spotify" />
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="text-sm font-semibold text-white mb-2">
                    Part 2{" "}
                    {!part2Live && (
                      <span className="ml-2 text-xs font-normal text-neutral-400">
                        (coming soon)
                      </span>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <OutboundButton
                      href={part2Apple}
                      label="Apple Podcasts"
                      disabled={!part2Live}
                    />
                    <OutboundButton
                      href={part2Spotify}
                      label="Spotify"
                      disabled={!part2Live}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
