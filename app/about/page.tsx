// app/about/page.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookBanner from "@/components/BookBanner";

export const metadata = {
  title: "Author — Gregory M Carroll | 11 Minutes",
  description:
    "About Gregory M Carroll: author of 11 Minutes, Australian noir crime novel inspired by Melbourne’s 1976 Great Bookie Robbery.",
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
      "Author of 11 Minutes, an Australian noir crime novel inspired by the 1976 Great Bookie Robbery.",
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

      {/* Two-column layout (image left, text right) */}
      <div className="max-w-[1000px] mx-auto p-6 grid md:grid-cols-[320px,minmax(0,1fr)] gap-8 items-start">
        {/* LEFT: Author image and podcast interviews */}
        <div className="flex flex-col items-center md:items-start gap-6 self-start">
          <img
            src="/images/author.jpg"
            alt="Gregory M Carroll"
            className="w-56 h-auto mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <article className="w-full rounded-xl border border-neutral-700 bg-black/30 p-5 flex flex-col">
            <p className="text-xs tracking-[0.22em] uppercase text-orange-300 mb-2">Podcast interview</p>
            <h4 className="text-xl font-bold text-white mb-2">Andrew Rule — Life and Crimes</h4>
            <p className="text-sm text-neutral-200 flex-1">
              A two-part interview unpacking the robbery, the men behind it, and the lived history that shaped <span className="italic">11 Minutes</span>.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2">
              <a href="https://podcasts.apple.com/au/podcast/the-bookie-robbers-brother-part-1/id1260800644?i=1000745494694" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-orange-400/70 px-4 py-2 text-sm font-semibold text-orange-200 hover:bg-orange-500/10 transition">Part 1 — Apple Podcasts</a>
              <a href="https://open.spotify.com/episode/76Jeao9SKYXjrHsRJWOMXe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-neutral-500 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-white/10 transition">Part 1 — Spotify</a>
              <a href="https://podcasts.apple.com/au/podcast/the-bookie-robbers-brother-part-2/id1260800644?i=1000746399694" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-orange-400/70 px-4 py-2 text-sm font-semibold text-orange-200 hover:bg-orange-500/10 transition">Part 2 — Apple Podcasts</a>
              <a href="https://open.spotify.com/episode/1RIyS8TQgOY4K6J8Jvx4CM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-neutral-500 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-white/10 transition">Part 2 — Spotify</a>
            </div>
          </article>
        </div>

        {/* RIGHT: Content panels */}
        <div className="min-w-0 flex flex-col space-y-8">
          {/* Panel 1: Author’s Connection */}
          <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold tracking-widest mb-4">
              AUTHOR&rsquo;S CONNECTION TO 11 MINUTES
            </h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Gregory M. Carroll is not just the author of <em>11 Minutes</em>&mdash;he
                lived it. Born and raised in the same tough world as the men in his
                story, he was more than a witness. He was a brother. Ian Carroll was his
                blood, his best man, and the man whose body he had to identify.
              </p>
              <p>
                This book is not true crime. It&rsquo;s something deeper. Facts tell you
                what happened. A novel lets you feel it. <em>11 Minutes</em> reaches past
                police reports and courtrooms, into the quiet fears, the slow
                unraveling of loyalty, and the weight of choices made in the dark. It
                tells you not just what people did&mdash;but why.
              </p>
              <p>
                Greg escaped that world the hard way. Night school. Long hours. He broke
                into the early days of computing, and went on to build two global tech
                companies. Along the way, he earned a Master&rsquo;s in Artificial
                Intelligence and authored two award-winning books on risk and AI&mdash;
                <em>21st Century Enterprise Risk Management</em> and <em>Risk
                Intelligence</em>, the latter a quarterfinalist for the Booklife Prize.
                Now retired, he writes from the Gold Coast, Australia, bringing lived
                experience to the page with sharp insight and unflinching honesty. Just
                like the life that shaped it.
              </p>
            </div>
          </section>

          {/* Panel 2: More About the Author */}
          <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">MORE ABOUT THE AUTHOR</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                As an author and speaker, I have been sharing my expertise on the
                practical application of AI in risk management and business
                transformation for over five years. My book <em>Risk Intelligence</em>{" "}
                was a quarter finalist of the international Booklife Prize. I also
                developed an advanced PR3 RAG LLM for user query and analysis of
                airworthiness reports and regulations for the Australian Dept of Defence.
              </p>
              <p>
                With over 19 years of experience as a solutions architect at Fast Track
                (Aust) Pty Ltd, I led the development of an AI-based Governance, Risk &
                Compliance software package that was implemented at over 300 organizations
                across Australia. I also co-founded and developed a Transport Logistics
                software package sold to Linfox, TNT and BP Malaysia, making CMS Transport
                Systems the market leader in Australia. I hold a Master&apos;s degree in
                Artificial Intelligence from Torrens University Australia, a Certificate
                of Machine Learning from Stanford University, and a Grad Dip in Computer
                Simulation from Swinburne University of Technology. I am passionate about
                applying AI to solve complex problems and create value for businesses and
                society.
              </p>
            </div>
          </section>

          {/* Panel 3: Business Books */}
          <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-5">
              BUSINESS BOOKS BY GREGORY M CARROLL
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Book 1 */}
              <div className="flex gap-4 items-start border border-neutral-800 rounded-lg p-4">
                <img
                  src="/images/Risk%20Intelligence.jpg"
                  alt="Risk Intelligence"
                  className="w-28 h-auto rounded-md shadow"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Risk Intelligence</h3>
                  <p className="text-sm text-neutral-300 mb-3">
                    Booklife Prize quarterfinalist.
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
              </div>

              {/* Book 2 */}
              <div className="flex gap-4 items-start border border-neutral-800 rounded-lg p-4">
                <img
                  src="/images/Mastering%2021st%20Century%20Enterprise%20Risk%20Management.jpg"
                  alt="Mastering 21st Century Enterprise Risk Management"
                  className="w-28 h-auto rounded-md shadow"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
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
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href="/contact">
              Contact
            </Link>
            <Link className="btn" href="/crime-novel">
              Read about the Crime Novel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
