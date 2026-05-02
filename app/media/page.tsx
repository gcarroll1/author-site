import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";

const newsUrl = "https://www.9now.com.au/9news-melbourne/season-2026/episode-116";

export const metadata = {
  title: "Media & Press | Gregory M Carroll | 11 Minutes",
  description:
    "Media coverage, press resources, and event information for Gregory M Carroll, author of 11 Minutes.",
};

export default function MediaPage() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Media", url: "https://gregorymcarroll.com/media" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Media" }]} />

      <article className="prose prose-invert max-w-none">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
          Media &amp; Press
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl">
          Gregory M Carroll is the author of <em>11 Minutes</em>, a crime novel
          of Melbourne&rsquo;s 1976 Great Bookie Robbery, written from lived
          proximity to the world that produced it.
        </p>

        <section className="not-prose mt-8 rounded-xl border border-amber-600/50 bg-amber-600/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            TV Coverage
          </p>
          <h2 className="mt-1 text-2xl font-bold text-neutral-100">
            Featured on 9 News Melbourne
          </h2>
          <p className="mt-2 text-neutral-300">
            Channel 9 filmed Gregory M Carroll&rsquo;s 50th anniversary presentation
            at the original Great Bookie Robbery site for its Melbourne news
            bulletin.
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4"
          >
            Watch the 9Now Segment
          </a>
          <p className="mt-3 text-xs text-neutral-400">
            9Now is free to watch, but you will need to register for a 9Now
            account. No subscription is required.
          </p>
        </section>

        <section className="not-prose mt-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Print
            </p>
            <h2 className="mt-1 text-xl font-bold text-neutral-100">
              The Age — John Silvester
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Weekend crime coverage helped introduce <em>11 Minutes</em> to a
              wider Melbourne audience and reinforced the book&rsquo;s true-crime
              roots.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Live Event
            </p>
            <h2 className="mt-1 text-xl font-bold text-neutral-100">
              Sold-out 50th Anniversary Event
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Held on 21 April 2026 at the former Victoria Club site, 50 years
              to the day after the Great Bookie Robbery.
            </p>
            <Link href="/event" className="btn mt-4">
              View Event Recap
            </Link>
          </div>
        </section>

        <section className="not-prose mt-8 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-2xl font-bold text-neutral-100">
            Speaking &amp; Interview Topics
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
            <p>• The 1976 Great Bookie Robbery and why it still grips Melbourne.</p>
            <p>• The line between true crime, fiction, memory, and family history.</p>
            <p>• The Painters and Dockers, the waterfront wars, and the old underworld.</p>
            <p>• Writing crime from the inside without pretending the damage was clean.</p>
          </div>
        </section>

        <div className="not-prose mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn">
            Contact Gregory
          </Link>
          <Link href="/order" className="btn">
            Order the Book
          </Link>
          <Link href="/great-bookie-robbery" className="btn">
            True Crime Archive
          </Link>
        </div>
      </article>
    </>
  );
}
