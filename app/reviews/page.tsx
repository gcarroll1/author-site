import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookBanner from "@/components/BookBanner";
import { AmazonButton, StarRatingInput } from "./review-client"; // client-only bits

export const metadata = {
  title: "Write a Review | 11 Minutes",
  description: "Submit your review.",
};

const AMAZON_URL =
  "https://www.amazon.com.au/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B0FV1QD25H";

export default function Page() {
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://gregorymcarroll.com/" },
          { name: "Reviews", url: "https://gregorymcarroll.com/reviews" },
        ]}
      />

      <BookBanner />

      {/* Layout like crime-novel page */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-[300px,1fr] gap-8 items-start">
        {/* LEFT — book cover; sticky on desktop, scroll on mobile */}
        <div className="flex flex-col items-center md:items-start static md:sticky md:top-6 self-start">
          <img
            src="/images/11_Minutes_ebook_cover_4w.jpg"
            alt="11 Minutes book cover"
            className="w-72 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT — intro + thank-you + form */}
        <div className="flex flex-col space-y-8">
          <header>
            <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
              Write a Review
            </h1>
            <p className="text-lg leading-relaxed">
              Share your thoughts — we showcase selected reviews.
            </p>
          </header>

          {/* Thank-you block with Amazon button (client controls date gating) */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
            <p className="text-lg leading-relaxed">
              I thank you reader, for sharing this journey with me. I would love
              to hear your thoughts, good or bad. Please consider leaving a
              review below and/or <strong>after 1-Dec-2025</strong> at the
              Amazon book site at:
              <br />
              <span className="break-all">{AMAZON_URL}</span>
            </p>
            <AmazonButton href={AMAZON_URL} goLiveIso="2025-12-01T00:00:00+10:00" />
          </div>

          {/* Review form */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <form method="POST" action="/api/reviews" className="grid gap-3 max-w-xl">
              {/* Name / Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-300">Name (optional)</span>
                  <input className="input" name="name" placeholder="Your name" />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-300">Email (optional)</span>
                  <input className="input" name="email" type="email" placeholder="you@example.com" />
                </label>
              </div>

              {/* Location (optional) */}
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Location (optional)</span>
                <input className="input" name="location" placeholder="City, Country" />
              </label>

              {/* Star rating (1–5) — client widget writes numeric hidden input */}
              <div className="grid gap-2">
                <span className="text-sm text-neutral-300">Your rating</span>
                <StarRatingInput name="rating" />
                <p className="text-xs text-neutral-400">
                  Click a star to select 1–5. (Optional, but appreciated!)
                </p>
              </div>

              {/* Review text */}
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Your review</span>
                <textarea
                  className="input min-h-[160px]"
                  name="review"
                  placeholder="Write your review…"
                  required
                />
              </label>

              {/* Submit */}
              <div className="flex items-center gap-3">
                <button className="btn" type="submit">Submit Review</button>
                <Link href="/" className="text-sm underline underline-offset-4 hover:text-neutral-200">
                  Cancel
                </Link>
              </div>

              {/* Honeypot */}
              <input type="text" name="hp" tabIndex={-1} aria-hidden="true" className="hidden" />
            </form>
          </div>
          
        </div>
      </div>

      {/* Breadcrumbs UI */}
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />
    </>
  );
}
