import Link from "next/link";
import BookBanner from "@/components/BookBanner";

export const metadata = {
  title: "Great Bookie Robbery – Melbourne’s 1976 Crime Heist | Gregory M Carroll",
  description:
    "Explore the true story behind the Great Bookie Robbery of 1976—research notes and historical images that inspired the Australian noir heist novel 11 Minutes.",
  openGraph: {
    title: "Great Bookie Robbery – Melbourne’s 1976 Crime Heist",
    description:
      "Uncover the real events, places, and people behind the Great Bookie Robbery through research notes and historical images.",
    type: "website",
  },
};

export default function GBRLanding() {
  const parts = [
    { slug: "part-1", title: "Part I – The Crime of the Century" },
    { slug: "part-2", title: "Part II – Where It Began" },
    { slug: "part-3", title: "Part III – The Making of a Legend" },
    { slug: "part-4", title: "Part IV – The Aftermath" },
    { slug: "part-5", title: "Part V – Retribution" },
    { slug: "epilogue", title: "Epilogue – Final Notes" },
  ];

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Great Bookie Robbery – Research & Notes",
    url: "https://example.com/great-bookie-robbery",
    about: [
      "Great Bookie Robbery",
      "Melbourne 1976 crime gangs",
      "True crime unsolved",
      "Australian noir heist novel",
      "11 Minutes",
      "Gregory M Carroll",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <BookBanner />
      <section className="prose prose-invert max-w-none">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Great Bookie Robbery</h1>
        <p className="text-lg leading-relaxed">
          On 21 April 1976, six men carried out one of the most audacious heists in Australian history.
          The Great Bookie Robbery targeted the Victoria Club in Melbourne, stealing an estimated $15 million
          (≈ $80M today). No one was ever convicted. Within a decade, every man was dead.
        </p>
        <p>
          This archive combines factual notes and images used in writing <em>11 Minutes</em>, an Australian noir heist
          novel by Gregory M Carroll, touching on Ray “Chuck” Bennett, Ian Carroll, the Painters and Dockers waterfront wars,
          and the unsolved aftermath.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3 mt-10">
        {parts.map((p) => (
          <Link key={p.slug} href={`/great-bookie-robbery/${p.slug}`} className="card hover:bg-neutral-800 transition mb-3">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-neutral-400 text-sm mt-1">Explore factual notes, images, and references.</p>
          </Link>
        ))}
      </section>
    </>
  );
}
