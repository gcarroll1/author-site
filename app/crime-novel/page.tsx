"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookBanner from "@/components/BookBanner";

export default function Page() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "11 Minutes",
            author: {
              "@type": "Person",
              name: "Gregory M Carroll",
            },
            genre: "Australian noir crime novel",
            description:
              "11 Minutes is a gripping Australian true crime fiction novel inspired by the Great Bookie Robbery of 1976.",
          }),
        }}
      />

      {/* Breadcrumb JSON-LD for SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://example.com/" },
          { name: "Crime Novel", url: "https://example.com/crime-novel" },
        ]}
      />

      <BookBanner />

      {/* Page content */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-[300px,1fr] gap-8 items-start">
        {/* LEFT COLUMN — Book Cover */}
        <div className="flex flex-col items-center md:items-start static md:sticky md:top-6 self-start">
          <img
            src="/images/11_Minutes_ebook_cover_4w.jpg"
            alt="11 Minutes book cover"
            className="w-72 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT COLUMN — All text panels */}
        <div className="flex flex-col space-y-8">
          <header>
            <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
              11 Minutes: A Crime Novel of Melbourne's 1976 Great Bookie Robbery
            </h1>
            <p className="text-lg leading-relaxed">
              by <strong>Gregory M Carroll</strong>
            </p>
          </header>

          {/* About 11 Minutes panel */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-3">About 11 Minutes</h2>
            <p className="text-lg leading-relaxed">
              <strong>11 Minutes</strong> is gripping Australian true crime
              fiction that immerses you in Melbourne&apos;s gritty waterfront
              underworld. Through alternating POVs, author Gregory M Carroll
              deconstructs the Great Bookie Robbery of April 21, 1976.
            </p>
          </div>

          {/* Reviewer quotes */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-6">
            <h2 className="text-2xl font-bold mb-3">
              What Reviewers have said about 11 Minutes
            </h2>

            <blockquote className="text-xl italic text-neutral-100">
              “A promising read for those who appreciate a crime novel with
              depth, historical resonance, and a distinctly Australian voice”
              <span className="block mt-2 text-orange-500 font-semibold">
                - Michelle B, ex Kings Cross bar worker
              </span>
            </blockquote>

            <blockquote className="text-xl italic text-neutral-100">
              “A quietly devastating tale of crime, loyalty, and consequence —
              11 Minutes captures the uneasy truths of Melbourne’s underworld.”
              <span className="block mt-2 text-orange-500 font-semibold">
                - Mark Q, ex Melbourne bookie
              </span>
            </blockquote>

            <blockquote className="text-xl italic text-neutral-100">
              “Your writing is perfect for this ‘vintage crime’ genre, it is a
              fun ride, so easy to get into the characters, so much so that I
              found myself rooting for them!!”
              <span className="block mt-2 text-orange-500 font-semibold">
                - Katrina M, School Registrar
              </span>
            </blockquote>
          </div>

          {/* Synopsis panel */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-3">
              S&nbsp;y&nbsp;n&nbsp;o&nbsp;p&nbsp;s&nbsp;i&nbsp;s
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              The novel opens by plunging into a raw, industrial 1970s Melbourne.
              Six men pull off the biggest heist in Australian history. The
              Great Bookie Robbery. In just eleven minutes, they rob the bookies
              of $80 million in today’s money. No one is convicted. The money
              never recovered. Yet within a decade, every man was dead.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Ray ‘Chuck’ Bennett and Ian ‘Fingers’ Carroll aren’t just thieves.
              They’re products of the docks, raised on violence, shaped by the
              Painters and Dockers Waterfront Wars that left 40 dead. That sets
              the psychological and moral framework that propels their
              ambitions.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              The crew transitions from street-level thieves to men who command
              respect and fear. The plan — brilliant. Conceived in Pentridge,
              developed in the UK, training meticulous. Robbing the bookies
              after a long weekend of races of all their untraceable cash. The
              perfect crime.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              For a short time, they enjoy the Life of Riley. However, it’s not
              just the police looking for them. The Kane brothers, Australia’s
              Krays, and Sydney Toecutters want a share. Meanwhile, the seeds of
              internal fracture are sown, the once-tight bonds begin to unravel.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              In the aftermath, greed and paranoia take hold. Mistakes during
              the heist set off a chain reaction. As the body count rises, Ray
              and Ian struggle to maintain control. Their wives wrestle with
              love, fear, and the inescapable pull of the crime.
            </p>
            <p className="leading-relaxed text-lg">
              With enemies on all sides, one thing becomes clear; no one truly
              gets away. The stolen fortune disappears without a trace, so too
              do the men who took it. In the end, 11 Minutes isn’t about the
              heist. It’s about what came after. The price of power. The weight
              of greed. The illusion of control.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href="/order/preorder">
              Pre-Order
            </Link>
            <Link className="btn" href="/order/arc">
              Advance Reader
            </Link>
            <Link className="btn" href="/reviews">
              Add a Review
            </Link>
          </div>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Crime Novel" },
        ]}
      />
    </>
  );
}
