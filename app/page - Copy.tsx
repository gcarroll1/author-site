import BookBanner from "@/components/BookBanner";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";

export const metadata = {
  title: "11 Minutes — Home | Gregory M Carroll",
  description: "Melbourne noir crime novel based on the Great Bookie Robbery.",
};

export default function Page() {
  const crumbs = [{ name: "Home", url: "https://gregorymcarroll.com/" }];
  const articleLd = {"@context":"https://schema.org","@type":"WebPage","name":"Home — 11 Minutes"};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <BreadcrumbJsonLd items={crumbs} />
      <BookBanner />
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Six men. Eleven minutes. The perfect crime.</h1>
          <p className="text-lg leading-relaxed">
            Melbourne, 1976. A gang of armed men robs the Victoria Club in broad daylight, vanishing with the
            equivalent of  million. No one is convicted. Within a decade, every man is dead.
          </p>
          <p className="mt-3">
            Told in sharp, fast prose, <em>11 Minutes</em> is a gritty crime novel based on real eventsâ€”written by someone who knew the men involved.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn" href="/crime-novel">Read about the Crime Novel</Link>
            <Link className="btn" href="/great-bookie-robbery">Explore True Crime</Link>
            <Link className="btn" href="/order">Order</Link>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-2">About 11 Minutes</h2>
          <p className="text-sm leading-relaxed">
            11 Minutes is gripping Australian true crime fiction that immerses you in Melbourneâ€™s gritty waterfront
            underworld. Through alternating POVs, author Gregory M Carroll deconstructs the Great Bookie Robbery of
            April 21, 1976.
          </p>
        </div>
      </section>
    </>
  );
}