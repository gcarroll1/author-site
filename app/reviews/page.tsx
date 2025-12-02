import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Write a Review | 11 Minutes",
  description:
    "Leave a review for 11 Minutes on Goodreads, Dymocks, Booktopia, or Amazon.",
};

const REVIEW_SITES = [
  {
    name: "Goodreads",
    href: "https://www.goodreads.com/book/show/242768615-11-minutes",
    logoSrc: "/images/stores/goodreads.png", // optional logo
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
              "11 Minutes is a gripping Australian true crime fiction novel inspired by the Great Bookie Robbery of 1976.",
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={crumbs} />

      {/* Breadcrumbs UI (top, like order page) */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Reviews" },
        ]}
      />

    <article className="prose prose-invert max-w-none">

      {/* HERO TEXT + BANNER */}
      <div className="text-center mb-10">

        <div className="w-full flex justify-center mb-6">
          <img
            src="/images/reviews-stars-banner.png"
            alt="Five star reviews banner for 11 Minutes"
            className="w-4/5 h-auto mx-auto"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-orange-500 mt-2">
          Reviews &amp; Critical Response
        </h1>

        <p className="text-neutral-300 mt-2 max-w-2xl mx-auto">
          Early readers, crime reviewers, and literary judges weigh in on{" "}
          <em>11 Minutes – A Crime Novel of Melbourne&apos;s 1976 Great Bookie Robbery</em>.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT — 60/40 via 3/2 spans */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* LEFT COLUMN: PROFESSIONAL REVIEWS (3/5 ~ 60%) */}
        <section className="lg:col-span-3 space-y-10">
          <h2 className="text-2xl font-semibold mb-3">Professional Critiques</h2>

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
                  Alma Boucher — US Readers’ Favorite (5 Stars)
                </h3>
                <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-4">
                  “A gripping novel… brilliantly written, fast-paced, and impossible to put down.”
                </blockquote>

                <details className="mt-2">
                  <summary className="cursor-pointer text-sm text-amber-400">
                    Read full review
                  </summary>
                  <p className="text-neutral-300 text-sm mt-3">
                    Based on the infamous 1976 Great Bookie Robbery, Alma Boucher praises the
                    novel’s authenticity, vivid character portraits, and immersive pacing. She
                    highlights the dynamic interplay between the heist, the planning, and the
                    criminals’ intertwined lives, calling the book “impossible to put down.”
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
                  Philip Zozzaro — US Readers’ Favorite (5 Stars)
                </h3>
                <blockquote className="italic text-neutral-300 border-l-4 border-orange-500 pl-4 mb-4">
                  “An enthralling historical drama… a terrific story that will appeal to readers
                  of Goodfellas.”
                </blockquote>

                <details className="mt-2">
                  <summary className="cursor-pointer text-sm text-amber-400">
                    Read full review
                  </summary>
                  <p className="text-neutral-300 text-sm mt-3">
                    Zozzaro describes <em>11 Minutes</em> as a gripping dramatization of
                    Melbourne’s criminal underworld, noting the tension, shifting perspectives,
                    and gritty realism. Calling it “terrific historical drama,” he draws
                    comparisons to <em>Goodfellas</em> and <em>The Brink’s Heist</em>.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Third Readers’ Favorite — placeholder */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl opacity-80 hidden">
            <div className="flex gap-4">
              <img
                src="/images/readers-favorite-5star-seal.png"
                alt="Readers' Favorite Five Star Seal"
                className="w-16 h-16 flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  Third Readers’ Favorite Review — (Coming Soon)
                </h3>
                <blockquote className="italic text-neutral-400 border-l-4 border-neutral-600 pl-4">
                  “Full pull-quote to be added upon receipt of the third critique.”
                </blockquote>
              </div>
            </div>
          </div>

          {/* John Silvester — The Age */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl opacity-80 hidden">
            <div className="flex gap-4">
              <img
                src="/images/the-age-logo.png"
                alt="The Age logo"
                className="w-20 h-auto flex-shrink-0 object-contain"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  John Silvester — <em>The Age</em> (Pending Publication)
                </h3>
                <blockquote className="italic text-neutral-400 border-l-4 border-neutral-600 pl-4">
                  “Quote from Silvester’s column to be added following publication.”
                </blockquote>
              </div>
            </div>
          </div>

        </section>

        {/* RIGHT COLUMN — WRITE A REVIEW (2/5 ~ 40%) */}
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold mb-3">Where to Leave Your Review</h2>
          <p className="text-neutral-300 text-sm mb-4">
            Your reviews help new readers discover <em>11 Minutes</em>. Choose your favourite
            platform below.
          </p>

          <div className="space-y-4">
            {REVIEW_SITES.map((site) => (
              <div
                key={site.name}
                className="not-prose bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-2"
              >

                {/* LINE 1: Logo + Name + Button (right aligned) */}
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

                {/* LINE 2: Description + optional note */}
                <p className="text-xs text-neutral-300">{site.description}</p>
                {site.note && (
                  <p className="text-xs text-neutral-400">{site.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>

    </>
  );
}
