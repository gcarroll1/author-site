"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookBanner from "@/components/BookBanner";
import BookJsonLd from "@/components/BookJsonLd";

export default function Page() {
  return (
    <>
      <BookJsonLd />
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
              "A gritty Australian noir crime novel inspired by Melbourne’s 1976 Great Bookie Robbery — six men, eleven minutes, and a heist whose aftermath destroyed everyone involved.",
          }),
        }}
      />

      {/* Breadcrumb JSON-LD for SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://gregorymcarroll.com/" },
          { name: "Crime Novel", url: "https://gregorymcarroll.com/crime-novel" },
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
            className="w-72 h-auto rounded-lg shadow-lg mb-4"
          />
          <Link
            className="btn"
            href="https://read.amazon.com.au/sample/B0FV1QD25H?clientId=share"
          >
            Read Sample
          </Link>
        </div>

        {/* RIGHT COLUMN — All text panels */}
        <div className="flex flex-col space-y-8">
          <header>
            <h1 className="text-5xl font-extrabold text-orange-500 mb-3">
              11 MINUTES
            </h1>
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              A Crime Novel of Melbourne’s 1976
              <br className="hidden md:block" />
              &nbsp;Great Bookie Robbery
            </h2>
            <p className="text-lg leading-relaxed">
              by <strong>Gregory M Carroll</strong>
            </p>
          </header>

          {/* About 11 Minutes panel — revised */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-3">About 11 Minutes</h2>

            <p>
              <strong>Six men. Eleven minutes. The perfect crime.</strong>
            </p>

            <p className="mt-1">
              <em>
                As featured in <strong>The Age</strong> – Weekend Crime Feature
                by John Silvester.
              </em>
            </p>

            <p>
              Melbourne, 1976 – a crew of masked gunmen storm the Victoria Club
              and vanish with what would now be worth $80 million. No one is
              convicted. The money is never recovered. Within a decade, every
              man is dead.
            </p>

            <p>
              <em>11 Minutes</em> is a{" "}
              <strong>gritty Australian noir crime novel</strong> inspired by
              the real-life <strong>Great Bookie Robbery</strong>. Told with
              sharp, fast prose and insider authenticity, it follows the rise
              and fall of the crew behind Australia’s most infamous armed heist.
              What begins as a perfect plan becomes a slow, unavoidable
              collapse.
            </p>

            <p>
              From the <strong>1970s Melbourne underworld</strong> to the
              shadowed world of crooked cops and violent unions, the story dives
              into the <strong>Painters and Dockers</strong> and the{" "}
              <strong>Waterfront Wars</strong> that left dozens dead. It’s a
              world of loyalty and betrayal, where silence has a price and no
              one truly walks away clean.
            </p>

            <p>
              Told through the eyes of Ian Carroll’s younger brother, author{" "}
              <strong>Gregory M Carroll</strong> exposes the true cost of
              ambition in the Australian underworld. He knew these men. He stood
              beside them. He buried one of them.
            </p>

            <p>
              For readers of <strong>George V. Higgins</strong>,{" "}
              <em>Don Winslow</em>, and <em>Peter Temple</em>, this is{" "}
              <strong>historical Australian crime fiction</strong> at its rawest
              — part <strong>Australian true crime</strong>, part moral
              reckoning, and wholly grounded in lived experience.
            </p>
          </div>

          {/* Reviewer quotes */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-6">
            <h2 className="text-2xl font-bold mb-3">
              What reviewers have said about <em>11 Minutes</em>
            </h2>

            <blockquote className="text-xl italic text-neutral-100">
              “It is a cracking read and a cunning blend of inside information,
              fact and imagination.”
              <span className="block mt-2 text-orange-500 font-semibold">
                — John Silvester, <em>The Age</em> (Weekend Crime Feature)
              </span>
            </blockquote>

            <blockquote className="text-xl italic text-neutral-100">
              “Brilliantly written and impossible to put down. Fast-paced,
              authentic, and gripping from the first page. I experienced
              everything through the robbers’ eyes and learned so much from the
              detailed, powerful storytelling.”
              <span className="block mt-2 text-orange-500 font-semibold">
                — Readers’ Favorite (Alma Boucher, ★★★★★)
              </span>
            </blockquote>

            <blockquote className="text-xl italic text-neutral-100">
              “11 Minutes is a sharp, tense, and deeply personal dive into one
              of Australia’s most daring crimes. Carroll brings not just
              research but heart, insight, and lived experience. A bold, honest,
              and haunting story — a masterful blend of suspense, history, and
              personal reckoning.”
              <span className="block mt-2 text-orange-500 font-semibold">
                — Goodreads (Katrina M, ★★★★★)
              </span>
            </blockquote>
          </div>

          {/* Synopsis panel */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-3">
              S&nbsp;y&nbsp;n&nbsp;o&nbsp;p&nbsp;s&nbsp;i&nbsp;s
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              The novel opens in a raw, industrial 1970s Melbourne. Six men
              pull off the biggest heist in Australian history – the Great
              Bookie Robbery. In just eleven minutes, they rob the bookies of
              the equivalent of $80 million in untraceable cash. No one is
              convicted. The money is never recovered. Yet within a decade,
              every man is dead.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Ray “Chuck” Bennett and Ian “Fingers” Carroll aren’t just thieves.
              They’re products of the docks, raised on violence and shaped by
              the Painters and Dockers Waterfront Wars that left forty dead. The
              world that forged them becomes the engine of their ambition – and
              the trap they can’t escape.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              The crew evolve from street-level operators to men who command
              fear and respect. The plan is brilliant: conceived in Pentridge,
              refined in the UK, executed with military precision. Strike after
              a long weekend of racing, when the Victoria Club’s counting room
              is full of cash. Hit fast. Disappear faster. The perfect crime.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              For a brief time, they live the Life of Riley. But it’s not just
              the police looking for them. The Kane brothers — Australia’s
              answer to the Krays — and Sydney’s Toecutters want their share.
              Pressure builds from the outside, while inside the crew, old
              wounds and buried resentments begin to surface.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              In the aftermath, greed and paranoia take hold. Small mistakes
              made during the heist set off a chain reaction of violence. As the
              body count rises, Ray and Ian fight to hold onto control. Their
              wives wrestle with love, fear, and the inescapable gravity of the
              life they are tied to.
            </p>
            <p className="leading-relaxed text-lg">
              With enemies circling and trust eroding from within, one truth
              becomes clear: no one truly gets away. The stolen fortune
              disappears without a trace, and so do the men who took it. In the
              end, <em>11 Minutes</em> isn’t about the heist. It’s about what
              came after — the price of power, the weight of greed, and the
              illusion of control.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href="/order">
              Where to Buy
            </Link>
            <Link className="btn" href="/reviews">
              Write a Review
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
