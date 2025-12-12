import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookBanner from "@/components/BookBanner";

export const metadata = {
  title: "Author — Gregory M Carroll | 11 Minutes",
  description:
    "About Gregory M Carroll, author of 11 Minutes — an Australian noir crime novel inspired by Melbourne’s 1976 Great Bookie Robbery.",
};

export default function Page() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Author", url: "https://gregorymcarroll.com/about" },
  ];

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gregory M Carroll",
    jobTitle: "Author",
    nationality: "Australian",
    description:
      "Author of 11 Minutes, an Australian noir crime novel inspired by Melbourne’s 1976 Great Bookie Robbery.",
  };

  return (
    <>
      {/* SEO: Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* SEO: Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={crumbs} />

      {/* Visible breadcrumbs */}
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Author" }]} />

      {/* Book banner */}
      <BookBanner />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* PAGE TITLE */}
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 mb-3">
            Gregory M Carroll
          </h1>
          <p className="text-lg md:text-xl text-neutral-300">
            Author of <em>11 Minutes</em>
          </p>
        </header>

        {/* MAIN AUTHOR SECTION */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,280px),minmax(0,1fr)] items-start">
          {/* LEFT: AUTHOR PHOTO */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/author.jpg"
              alt="Gregory M Carroll"
              className="w-56 sm:w-64 lg:w-72 max-w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* RIGHT: STORY PANELS */}
          <div className="space-y-10">
            {/* Panel 1: Why this book */}
            <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] mb-4 uppercase">
                Why I Wrote 11 Minutes
              </h2>

              <div className="prose prose-invert max-w-none text-sm md:text-base">
                <p>
                  I am not just the author of <em>11 Minutes</em>. I lived in the
                  shadow of the men who carried out Melbourne’s 1976 Great Bookie
                  Robbery. I grew up in the same hard world. I knew the people.
                  I saw what the violence, the money, and the silence did to
                  families.
                </p>

                <p>
                  Ian Carroll was my brother. He was my best man — and later, I
                  was the one who identified his body. That experience never
                  leaves you. It doesn’t fade into history. It stays close.
                </p>

                <p>
                  This novel exists because the public story of the robbery
                  ends at the heist. The real story begins after — when paranoia
                  replaces loyalty, when greed fractures friendships, and when
                  the consequences arrive quietly, one by one.
                </p>
              </div>
            </section>

            {/* Panel 2: What kind of book this is */}
            <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-lg md:text-xl font-bold mb-4">
                What This Story Is — and Isn’t
              </h2>

              <div className="prose prose-invert max-w-none text-sm md:text-base">
                <p>
                  <em>11 Minutes</em> is not straight true crime. Facts can tell
                  you what happened — dates, names, headlines. A novel can take
                  you somewhere else entirely.
                </p>

                <p>
                  This book reaches past police reports and courtrooms into the
                  quiet moments: the fear that doesn’t make the papers, the
                  slow unravelling of trust, the weight of choices made when no
                  one is watching.
                </p>

                <p>
                  I wrote this story to explore not just the crime, but the
                  cost. What destroys criminal empires is rarely the police.
                  It’s what happens inside — ambition, silence, loyalty turned
                  brittle.
                </p>
              </div>
            </section>

            {/* Panel 3: Life beyond the crime world */}
            <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-lg md:text-xl font-bold mb-4">
                Life Beyond the Story
              </h2>

              <div className="prose prose-invert max-w-none text-sm md:text-base">
                <p>
                  Escaping that world took work. Night school. Long hours.
                  Distance. I moved into the early days of computing and
                  eventually built two global technology companies.
                </p>

                <p>
                  I later earned a Master’s degree in Artificial Intelligence
                  and wrote two award-recognised business books —
                  <em>21st Century Enterprise Risk Management</em> and{" "}
                  <em>Risk Intelligence</em>, the latter a quarter-finalist for
                  the international BookLife Prize.
                </p>

                <p>
                  That background shaped how I approached <em>11 Minutes</em>.
                  I am interested in systems — how organisations fail, how
                  pressure exposes weak points, and how risk compounds over
                  time. Criminal crews are no different.
                </p>

                <p>
                  I now write from the Gold Coast, Australia, bringing lived
                  experience, discipline, and clarity to stories rooted in
                  real consequences.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* BUSINESS BOOKS */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            Other Books by Gregory M Carroll
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex gap-4 items-start border border-neutral-800 rounded-lg p-4">
              <img
                src="/images/Risk%20Intelligence.jpg"
                alt="Risk Intelligence"
                className="w-24 sm:w-28 h-auto rounded-md shadow"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Risk Intelligence
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 mb-3">
                  BookLife Prize quarter-finalist.
                </p>
                <a
                  className="btn"
                  href="https://store.bookbaby.com/book/risk-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View at BookBaby
                </a>
              </div>
            </article>

            <article className="flex gap-4 items-start border border-neutral-800 rounded-lg p-4">
              <img
                src="/images/Mastering%2021st%20Century%20Enterprise%20Risk%20Management.jpg"
                alt="Mastering 21st Century Enterprise Risk Management"
                className="w-24 sm:w-28 h-auto rounded-md shadow"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Mastering 21st Century Enterprise Risk Management
                </h3>
                <a
                  className="btn mt-3"
                  href="https://store.bookbaby.com/bookshop/book?bookURL=Mastering-21st-Century-Enterprise-Risk-Management-2nd-Edition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View at BookBaby
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-wrap gap-3">
          <Link className="btn" href="/crime-novel">
            Read about 11 Minutes
          </Link>
          <Link className="btn" href="/contact">
            Contact
          </Link>
        </section>
      </main>
    </>
  );
}
