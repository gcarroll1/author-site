import BookBanner from "@/components/BookBanner";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";

export const metadata = {
  title: "Gregory M Carroll — 11 Minutes | Home",
  description:
    "Gregory M Carroll — author of 11 MINUTES, a crime novel of Melbourne’s 1976 Great Bookie Robbery.",
};

export default function Page() {
  const crumbs = [{ name: "Home", url: "https://gregorymcarroll.com/" }];
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home — Gregory M Carroll",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <BreadcrumbJsonLd items={crumbs} />
      <BookBanner />

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          {/* Headings per your spec */}
          <h1 className="text-5xl font-extrabold text-orange-500 mb-2">
            Gregory M Carroll
          </h1>
          <h2 className="text-3xl font-bold text-neutral-100">11 Minutes</h2>
          <h3 className="text-xl font-semibold text-neutral-300 mb-6">
            A Crime Novel of Melbourne&rsquo;s 1976 Great Bookie Robbery
          </h3>

          {/* Keep the “Six men…” line as large + bold */}
          <p className="text-2xl font-bold mb-6">
            Six men. Eleven minutes. The perfect crime.
          </p>

          {/* Replace the existing body copy with your new text (entities to avoid encoding issues) */}
          <p className="text-lg leading-relaxed">
            <strong>11 MINUTES</strong> tells the untold story behind the Great
            Bookie Robbery&mdash;Australia&rsquo;s greatest armed heist. Six men
            stormed Melbourne&rsquo;s Victoria Club and vanished the equivalent
            of $80 million today. Although no one convicted, nor money
            recovered, but within a decade all were dead.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Told by one who knew them, this Australian noir crime novel blends
            meticulous research with cinematic prose. It explores loyalty,
            betrayal, and the human cost of ambition in Melbourne&rsquo;s gritty
            underworld.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            The crew&rsquo;s rise forged in the Painters &amp; Dockers
            Waterfront War left 40 dead. But after the robbery, enemies closed
            in. Not just the police Task Force, but Sydney&rsquo;s Toecutters
            and Australia&rsquo;s Krays, the Kanes. Everyone wants a piece. The
            old warning rang true: be careful what you wish for!
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This book is not true crime. It&apos;s something deeper. Facts tell
            you what happened. A novel lets you feel it. <strong>11 MINUTES</strong>{" "}
            reaches past police reports and courtrooms, into the quiet fears,
            the slow unravelling of loyalty, and the weight of choices made. It
            tells you not just what people did, but why.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn" href="/crime-novel">
              The Book
            </Link>
            <Link className="btn" href="https://read.amazon.com.au/sample/B0FV1QD25H?clientId=share">
              Read Sample
            </Link>
            <Link className="btn" href="/great-bookie-robbery">
              Explore True Crime
            </Link>
            <Link className="btn" href="/order">
              Order
            </Link>
          </div>
        </div>

        {/* Right panel: About the Author (replaces the previous panel) */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <h2 className="text-2xl font-bold mb-3">About the Author</h2>
          <img
              src="/images/author.jpg"
              alt="Gregory M Carroll"
              className="w-48 h-auto rounded-lg mb-4"
           />
          <p className="text-sm leading-relaxed">
            Gregory M. Carroll is not just the author of <em>11 Minutes</em> &mdash;
            he lived it. Born and raised in the same tough world as the men in
            his story, he was more than a witness. He was a brother. Ian Carroll
            was his brother, his best man, and the man whose body he had to
            identify. Now retired, he writes from the Gold Coast, Australia,
            bringing lived experience to the page with sharp insight and
            unflinching honesty. Just like the lives that shaped it.
          </p>
        </div>
      </section>
    </>
  );
}
