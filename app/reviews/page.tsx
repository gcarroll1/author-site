import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { AmazonRankingHighlight } from "@/components/AmazonRankingHighlight";

export const metadata = {
  title: "Write a Review | 11 Minutes",
  description:
    "Leave a review for 11 Minutes on Goodreads, Dymocks, Booktopia, Amazon, or Google Reviews.",
};

const REVIEW_SITES = [
  {
    name: "Goodreads",
    href: "https://www.goodreads.com/book/show/242768615-11-minutes",
    logoSrc: "/images/stores/goodreads.png",
    logoAlt: "Goodreads",
    description: "Rate and review 11 Minutes on Goodreads.",
    note: "Note: You’ll need to join Goodreads (free) before you can post a review.",
  },
  {
    name: "Dymocks",
    href: "https://www.dymocks.com.au/11-minutes-by-gregory-m-carroll-9781764222600",
    logoSrc: "/images/stores/dymocks.png",
    logoAlt: "Dymocks",
    description: "Leave a review on the Dymocks book page.",
    note: "Note: Scroll down the page to find the “Write a Review” section.",
  },
  {
    name: "Booktopia",
    href: "https://www.booktopia.com.au/11-minutes-gregory-m-carroll/book/9781764222600.html",
    logoSrc: "/images/stores/Booktopia.jpg",
    logoAlt: "Booktopia",
    description: "Share your thoughts with other Booktopia readers.",
    note: "Note: Scroll down to find the “Write a Review” section.",
  },
  {
    name: "Amazon Australia",
    href: "https://www.amazon.com.au/review/create-review/edit?channel=glance-detail&asin=B0FV1QD25H",
    logoSrc: "/images/stores/amazon.png",
    logoAlt: "Amazon Australia",
    description: "Review the Kindle edition on Amazon Australia.",
    note: "Note: Amazon usually requires at least AU$50 in prior purchases to post a review.",
  },
  {
    name: "Google Reviews",
    href: "https://g.page/r/CbS421zofy6AEBM/review",
    logoSrc: "/images/stores/Google.png",
    logoAlt: "Google Reviews",
    description: "Review the paperback or ebook on Google.",
    note: "",
  },
];

export default function Page() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Reviews", url: "https://gregorymcarroll.com/reviews" },
  ];

  return (
    <>
      {/* JSON-LD: Book */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "11 Minutes",
            author: { "@type": "Person", name: "Gregory M Carroll" },
            genre: "Australian noir crime novel",
            description:
              "11 Minutes is a gritty Australian noir crime novel inspired by Melbourne’s 1976 Great Bookie Robbery.",
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={crumbs} />

      {/* Breadcrumbs UI */}
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />

      <article className="prose prose-invert max-w-none">
        {/* HERO */}
        <div className="text-center mb-10">
          {/* AMAZON HOT NEW RELEASES IMAGE */}
          <AmazonRankingHighlight />

          <h1 className="text-4xl font-extrabold text-orange-500 mt-2">
            Reviews &amp; Critical Response
          </h1>

          <p className="text-neutral-300 mt-2 max-w-3xl mx-auto">
            If you enjoyed <em>11 Minutes</em>, a review is the single best way to help
            new readers find the book. It doesn’t need to be long — even{" "}
            <strong>one sentence</strong> makes a difference.
          </p>

          <p className="text-neutral-400 mt-3 max-w-3xl mx-auto text-sm">
            Not sure what to write? Try:{" "}
            <em>
              “A fast, authentic Australian noir that shows what happens after the heist.”
            </em>{" "}
            or{" "}
            <em>
              “A gripping, lived-in crime story — impossible to put down.”
            </em>
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT COLUMN: PROFESSIONAL REVIEWS */}
          <section className="lg:col-span-3 space-y-10">
            <h2 className="text-2xl font-semibold mb-3">Professional Critiques</h2>

            <p className="text-neutral-300 text-sm -mt-3">
              A selection of early critical responses, including international crime reviewers
              and Australian media.
            </p>

            {/* John Silvester — The Age */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <div className="flex gap-4">
                <img
                  src="/images/the-age-logo.png"
                  alt="The Age logo"
                  className="w-20 h-auto flex-shrink-0 object-contain"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    John Silvester — <em>The Age</em> (Weekend Crime Feature, 6-Dec-2025)
                  </h3>
                  <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-0">
                    “It is a cracking read and a cunning blend of inside information, fact and
                    imagination.”
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Alma Boucher */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <div className="flex gap-4">
                <img
                  src="/images/readers-favorite-5star-seal.png"
                  alt="Readers' Favorite Five Star Seal"
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Alma Boucher — Readers’ Favorite (★★★★★)
                  </h3>
                  <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-4">
                    “A gripping novel… brilliantly written, fast-paced, and impossible to put
                    down.”
                  </blockquote>

                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-amber-400">
                      Read summary
                    </summary>
                    <p className="text-neutral-300 text-sm mt-3">
                      Boucher highlights the novel’s authenticity and momentum, praising the
                      character work and the way the story moves between the heist and the
                      pressure-cooker aftermath. Her verdict: gripping, vivid, and hard to stop
                      reading once you start.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Philip Zozzaro */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <div className="flex gap-4">
                <img
                  src="/images/readers-favorite-5star-seal.png"
                  alt="Readers' Favorite Five Star Seal"
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Philip Zozzaro — Readers’ Favorite (★★★★★)
                  </h3>
                  <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-4">
                    “An enthralling historical drama… a terrific story that will appeal to
                    readers of <em>Goodfellas</em>.”
                  </blockquote>

                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-amber-400">
                      Read summary
                    </summary>
                    <p className="text-neutral-300 text-sm mt-3">
                      Zozzaro calls <em>11 Minutes</em> an engrossing underworld drama with
                      strong period detail, shifting perspectives, and escalating tension — a
                      story driven as much by loyalty and fracture as by the robbery itself.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Inga Buccella */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <div className="flex gap-4">
                <img
                  src="/images/readers-favorite-5star-seal.png"
                  alt="Readers' Favorite Five Star Seal"
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Inga Buccella — Readers’ Favorite (★★★★★)
                  </h3>
                  <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-0">
                    “A gripping, eloquently written crime story full of grit and blood, but
                    also heart and soul… as compelling as <em>Peaky Blinders</em> or{" "}
                    <em>The Godfather</em>.”
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN — WRITE A REVIEW */}
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold mb-3">Where to Leave Your Review</h2>

            <p className="text-neutral-300 text-sm mb-4">
              Choose your favourite platform below. If you’re short on time, a quick rating
              plus one line is perfect.
            </p>

            <div className="space-y-4">
              {REVIEW_SITES.map((site) => (
                <div
                  key={site.name}
                  className="not-prose bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-2"
                >
                  {/* LINE 1: Logo + Name + Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={site.logoSrc}
                        alt={site.logoAlt}
                        className="w-14 h-auto rounded-sm"
                        loading="lazy"
                      />
                      <h3 className="font-semibold text-sm sm:text-base">{site.name}</h3>
                    </div>

                    <Link
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="inline-block bg-amber-600 hover:bg-amber-700 !text-white px-3 py-1.5 rounded-lg font-medium transition text-xs"
                    >
                      Write a Review
                    </Link>
                  </div>

                  {/* LINE 2 */}
                  <p className="text-xs text-neutral-300">{site.description}</p>
                  {site.note && <p className="text-xs text-neutral-400">{site.note}</p>}
                </div>
              ))}
            </div>

            {/* Small reassurance block */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 not-prose">
              <p className="text-xs text-neutral-300 mb-2">
                <strong>Thank you.</strong> Reviews are the engine of discoverability — they
                help libraries, bookstores, and new readers take a chance on a new author.
              </p>
              <p className="text-xs text-neutral-400 mb-0">
                If you’d like, you can also share the book with a friend who loves Australian
                crime fiction or true crime.
              </p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
