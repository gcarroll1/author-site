import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "11 Million — The Great Bookie Robbery Money",
  description: "11 Million is an Australian crime thriller by Gregory M Carroll, imagining what happened to the missing Great Bookie Robbery money after Melbourne's 1976 Victoria Club robbery.",
  alternates: { canonical: "/books/11-million" },
  openGraph: {
    title: "11 Million — The Great Bookie Robbery Money",
    description: "Millions vanished in eleven minutes. The money was never found. 11 Million imagines what happened next.",
    images: ["/images/books/11-million-cover.png"],
  },
};

const AMAZON = "https://www.amazon.com.au/dp/B0HBMKLTCK";
const APPLE = "https://books.apple.com/us/book/id6797129446";
const GOODREADS = "https://www.goodreads.com/book/show/255927441-11-million";

export default function ElevenMillionPage() {
  const bookLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "11 Million",
    alternateName: "11 Million — The Great Bookie Robbery Money",
    author: { "@type": "Person", name: "Gregory M Carroll" },
    genre: ["Australian crime thriller", "Historical crime fiction", "Australian noir"],
    description: "An Australian crime thriller imagining what happened to the missing Great Bookie Robbery money.",
    image: "https://gregorymcarroll.com/images/books/11-million-cover.png",
    datePublished: "2026-10-13",
    offers: [
      { "@type": "Offer", availability: "https://schema.org/PreOrder", url: AMAZON },
      { "@type": "Offer", availability: "https://schema.org/PreOrder", url: APPLE },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookLd) }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://gregorymcarroll.com/" },
        { name: "Books", url: "https://gregorymcarroll.com/books" },
        { name: "11 Million", url: "https://gregorymcarroll.com/books/11-million" },
      ]} />

      <div className="grid gap-10 lg:grid-cols-[360px,1fr] lg:items-start">
        <aside className="lg:sticky lg:top-24">
          <img src="/images/books/11-million-cover.png" alt="11 Million — The Great Bookie Robbery Money cover" className="mx-auto w-full max-w-sm rounded-lg shadow-2xl" />
          <div className="mt-6 grid gap-3">
            <a className="btn w-full" href={AMAZON} target="_blank" rel="noopener noreferrer">Pre-order on Amazon Australia</a>
            <a className="btn-secondary w-full" href={APPLE} target="_blank" rel="noopener noreferrer">Pre-order on Apple Books</a>
            <a className="btn-secondary w-full" href={GOODREADS} target="_blank" rel="noopener noreferrer">Add or review on Goodreads</a>
          </div>
          <p className="mt-4 text-center text-sm text-neutral-400">Publishing 13 October 2026</p>
        </aside>

        <main>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">Available for pre-order</p>
          <h1 className="mt-2 text-5xl font-extrabold md:text-7xl">11 Million</h1>
          <h2 className="mt-2 text-2xl font-bold text-neutral-300 md:text-3xl">The Great Bookie Robbery Money</h2>
          <p className="mt-6 text-2xl font-bold leading-snug">Millions vanished in eleven minutes.</p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-300">
            <p>In April 1976, six armed men walked into Melbourne&apos;s Victoria Club and pulled off Australia&apos;s most infamous unsolved robbery. Millions in untraceable bookie cash vanished in eleven minutes.</p>
            <p>The men were never convicted. The money was never found.</p>
            <p><strong className="text-white"><em>11 Million</em> imagines what happened next.</strong></p>
            <p>After the robbery crew begins to die, the stolen fortune becomes more dangerous than the crime itself. Hidden in barrels, washed through Manila, shifted through Hong Kong, and protected by men who know how to make money disappear, the Great Bookie Robbery cash draws criminals, bankers, taxmen, investigators, and intelligence operatives into its orbit.</p>
            <p>Greg Carroll is a software developer, not a gangster. When his brother is murdered and the Australian Taxation Office moves against the family, he is dragged into a world he was never built to survive. Around him, old loyalties collapse. Raelene Carroll is stripped of everything. Vinnie Mikkelsen, the last surviving link to the original crew, tries to leave the past behind. Ronald Cole, a predator with many names, believes the money is his by right. And the Costigan Royal Commission is beginning to follow the paper trail no criminal thought could be found.</p>
            <p>From Melbourne&apos;s docks and country safe houses to Manila bars, Hong Kong banks, Greek islands, and the shadow world of Cold War finance, <em>11 Million</em> turns one of Australia&apos;s greatest criminal mysteries into a tense international crime thriller.</p>
          </div>

          <div className="my-10 border-y border-neutral-800 py-8 text-center">
            <p className="text-xl font-semibold">Part heist aftermath. Part conspiracy. Part family tragedy.</p>
            <p className="mt-4 text-2xl font-extrabold text-amber-500">What happened to the Great Bookie Robbery money?</p>
          </div>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
            <h2 className="text-3xl font-bold">A crime novel built from real history</h2>
            <p className="mt-4 leading-relaxed text-neutral-300">
              This is not true crime. It is crime fiction shaped by public events, underworld rumour, family history, and the unresolved legacy of Melbourne&apos;s 1976 Victoria Club robbery. Written for readers of Australian noir, historical crime fiction, underworld thrillers, and international conspiracy novels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href={AMAZON} target="_blank" rel="noopener noreferrer">Amazon pre-order</a>
              <a className="btn-secondary" href={APPLE} target="_blank" rel="noopener noreferrer">Apple Books pre-order</a>
              <a className="btn-secondary" href={GOODREADS} target="_blank" rel="noopener noreferrer">Add a Goodreads review</a>
              <Link className="btn-secondary" href="/great-bookie-robbery">Read the true-crime background</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
