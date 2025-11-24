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
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
          Write a Review
        </h1>

        <p className="text-neutral-300 mb-4">
          I thank you, reader, for sharing this journey with me. I would love to
          hear your thoughts, good or bad. Please consider leaving a review on
          one of the sites below — your words help other readers discover{" "}
          <em>11 Minutes – A Crime Novel of Melbourne&apos;s 1976 Great Bookie
          Robbery</em>.
        </p>

        {/* Book cover image */}
        <div className="not-prose flex justify-center mb-8">
          <img
            src="/images/11_Minutes_ebook_cover_4w.jpg"
            alt="11 Minutes book cover"
            className="w-72 h-auto rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Where to leave your review
        </h2>
        <p className="text-neutral-300 mb-6 text-sm">
          Choose whichever site you already use — or several. Each link will
          take you directly to the book’s page on that platform. Notes are
          included to make finding the review section easier.
        </p>

        <div className="space-y-4">
          {REVIEW_SITES.map((site) => (
            <div
              key={site.name}
              className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4"
            >
              {/* Optional logo – safe to remove the img if you don't have the file yet */}
              <img
                src={site.logoSrc}
                alt={site.logoAlt}
                className="w-20 h-auto rounded-sm hidden sm:block"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base">{site.name}</h3>
                <p className="text-xs text-neutral-300">
                  {site.description}
                </p>
                <p className="text-xs text-neutral-400 mt-1">{site.note}</p>
              </div>
              <Link
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
              >
                Write a review
              </Link>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
