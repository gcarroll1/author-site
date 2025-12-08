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

      <BookBanner />

      {/* Heading + Two-column layout (image left, text right) */}
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 mb-6 text-center md:text-left">
          Gregory M Carroll — Author <i>11 Minutes</i>
        </h1>

        <div className="grid md:grid-cols-[320px,1fr] gap-8 items-start">
          {/* LEFT: Author image */}
          <div className="flex flex-col items-center md:items-start sticky top-6 self-start">
            <img
              src="/images/author.jpg"
              alt="Gregory M Carroll"
              className="w-72 h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* RIGHT: Content panels */}
          <div className="flex flex-col space-y-8">
            {/* Panel 1: Author’s Connection */}
            <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold tracking-widest mb-4">
                A&nbsp;U&nbsp;T&nbsp;H&nbsp;O&nbsp;R&nbsp;&rsquo;&nbsp;S&nbsp;&nbsp;C&nbsp;O&nbsp;N&nbsp;N&nbsp;E&nbsp;C&nbsp;T&nbsp;I&nbsp;O&nbsp;N&nbsp;&nbsp;T&nbsp;O&nbsp;&nbsp;1&nbsp;1&nbsp;&nbsp;M&nbsp;I&nbsp;N&nbsp;U&nbsp;T&nbsp;E&nbsp;S
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
                  (Aust) Pty Ltd, I led the development of an AI-based Governance, Risk &amp;
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

              <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </>
  );
}
