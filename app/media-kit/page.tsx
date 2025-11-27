"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function MediaKitPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD for SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://gregorymcarroll.com/" },
          { name: "Media Kit", url: "https://gregorymcarroll.com/media-kit" },
        ]}
      />

      {/* Hero / Banner */}
      <section className="relative bg-black">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/crew_background.png"
            alt="11 Minutes crew walking through fog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-orange-400 uppercase mb-2">
              Media Kit
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              11 MINUTES
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4">
              A Crime Novel of Melbourne’s 1976 Great Bookie Robbery
            </h2>
            <p className="text-neutral-100 max-w-xl mb-6">
              Press resources, background notes, and contact details for
              interviews and coverage of{" "}
              <span className="italic">11 Minutes</span>, a gritty Australian
              noir novel inspired by Melbourne&apos;s most audacious armed
              robbery.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/docs/11-Minutes-Media-Kit-A4-Noir.pdf"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
              >
                Download Media Kit (PDF)
              </a>
              <a
                href="/docs/11-Minutes-Press-Sheet-A4-Noir.pdf"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-neutral-400 text-neutral-100 font-semibold hover:bg-neutral-900 transition"
              >
                Download 1-Page Press Sheet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-black text-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
          {/* LEFT COLUMN */}
          <section className="space-y-6">
            {/* Book overview */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-3">
                Book Overview
              </h3>
              <p className="mb-3 font-semibold">
                Six men. Eleven minutes. The perfect crime — and the decade of
                violence that followed.
              </p>
              <p className="mb-3">
                On 21 April 1976, a crew of masked gunmen robbed Melbourne’s
                Victoria Club in broad daylight, escaping with what would now be
                worth $80 million. No one was convicted. The money was never
                recovered. Within ten years, every man was dead.
              </p>
              <p className="mb-3">
                <span className="italic">11 Minutes</span> is a gritty
                Australian noir novel that retells the heist and its aftermath
                through the eyes of those who lived it — thieves, wives, cops,
                and the younger brother who had to identify one of the bodies.
              </p>
              <p>
                It&apos;s a story about power, loyalty, and the illusion of
                control in a city where everyone has something to lose.
              </p>
            </div>

            {/* Media angles */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-3">
                Media Angles &amp; Story Hooks
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>
                  <span className="font-semibold">
                    50th anniversary of the Great Bookie Robbery (April 2026)
                  </span>{" "}
                  — revisiting an unsolved heist that still fascinates
                  Melbourne.
                </li>
                <li>
                  <span className="font-semibold">
                    Author as younger brother of one of the real men
                  </span>{" "}
                  — personal, lived connection to the underworld.
                </li>
                <li>
                  <span className="font-semibold">
                    Melbourne&apos;s gangland history
                  </span>{" "}
                  — Painters &amp; Dockers waterfront wars, crooked cops, and
                  union violence.
                </li>
                <li>
                  <span className="font-semibold">Australian noir revival</span>{" "}
                  — in the tradition of George V. Higgins, Andrew Nette, Peter
                  Temple.
                </li>
                <li>
                  <span className="font-semibold">
                    Women in the underworld
                  </span>{" "}
                  — the wives and families navigating the fallout.
                </li>
              </ul>
            </div>

            {/* Praise */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6 space-y-4">
              <h3 className="text-2xl font-bold text-orange-400 mb-1">
                Early Praise
              </h3>
              <blockquote className="italic">
                “A quietly devastating tale of crime, loyalty, and consequence –
                11 Minutes captures the uneasy truths of Melbourne’s
                underworld.”
                <span className="block mt-2 text-orange-400 font-semibold">
                  — Mark Q., ex-Melbourne bookie
                </span>
              </blockquote>
              <blockquote className="italic">
                “A great read for those who appreciate a crime novel with depth,
                historical resonance, and a distinctly Australian voice.”
                <span className="block mt-2 text-orange-400 font-semibold">
                  — Michelle B., ex Kings Cross bar worker
                </span>
              </blockquote>
              <blockquote className="italic">
                “Your writing is perfect for this ‘vintage crime’ genre – it’s a
                fun ride, so easy to get into the characters that I found myself
                rooting for them.”
                <span className="block mt-2 text-orange-400 font-semibold">
                  — Katrina M., school registrar
                </span>
              </blockquote>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">
            {/* Book details */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6 text-sm">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                Book Details
              </h3>
              <dl className="space-y-1">
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold">Title</dt>
                  <dd className="text-right">
                    11 Minutes – A Crime Novel of Melbourne’s 1976 Great Bookie
                    Robbery
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold">Author</dt>
                  <dd className="text-right">Gregory M Carroll</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold">Series</dt>
                  <dd className="text-right">The Eleven (Book 1)</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold">Genre</dt>
                  <dd className="text-right">
                    Australian noir / crime fiction / historical crime
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold">Length</dt>
                  <dd className="text-right">362 pages</dd>
                </div>
              </dl>

              <h4 className="text-lg font-semibold text-orange-300 mt-4 mb-1">
                ISBNs
              </h4>
              <ul className="space-y-1">
                <li>Print (Ingram): 9781764222600</li>
                <li>eBook (Ingram/Apple): 9781764222617</li>
                <li>KDP Paperback: 9781764222613</li>
                <li>Kindle: 9781764222624</li>
              </ul>

              <h4 className="text-lg font-semibold text-orange-300 mt-4 mb-1">
                Publication &amp; Pricing
              </h4>
              <p>Publication date: 1 December 2025</p>
              <p>RRP: AU$34.99 (print), AU$11.99 (ebook)</p>
            </div>

            {/* Author bio */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6 text-sm">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                About the Author
              </h3>
              <p className="mb-3">
                Gregory M Carroll is not just the author of{" "}
                <span className="italic">11 Minutes</span> — he lived it. Born
                and raised in the same tough Melbourne world as his characters,
                he is the younger brother of Ian “Fingers” Carroll, one of the
                real men linked to the heist.
              </p>
              <p className="mb-3">
                Ian was Greg’s brother, his best man, and the man whose body he
                had to identify. Now retired and based on the Gold Coast,
                Carroll writes Australian noir grounded in lived experience,
                exploring loyalty, greed, and the quiet decay that follows a
                life of crime.
              </p>
              <p>
                <span className="italic">11 Minutes</span> is the first novel in
                his planned series <span className="italic">The Eleven</span>,
                tracing the rise and fall of Melbourne&apos;s underworld from
                the 1950s to the 1990s.
              </p>

              <div className="mt-4 space-y-1 text-sm text-neutral-200">
                <p>
                  <span className="font-semibold">Media contact:</span>{" "}
                  <a
                    href="mailto:gregory@gregorymcarroll.com"
                    className="underline hover:text-orange-300"
                  >
                    gregory@gregorymcarroll.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Press phone:</span> +61 3 7048
                  4801
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <Link
                    href="/"
                    className="underline hover:text-orange-300"
                  >
                    gregorymcarroll.com
                  </Link>
                </p>
              </div>
            </div>

            {/* Structure / chapters */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6 text-sm">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                Parts &amp; Key Chapters
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Prologue</span> – the body in
                  the morgue.
                </li>
                <li>
                  <span className="font-semibold">
                    Part I – The Crime of the Century (21 April 1976)
                  </span>{" "}
                  — The Arrival, The Heist, The Crime Scene, The Getaway.
                </li>
                <li>
                  <span className="font-semibold">
                    Part II – Where It Began (1958–1974)
                  </span>{" "}
                  — Raymond “Chuck” Bennett, Ian “Fingers” Carroll, On the
                  Waterfront, Painter and Docker Wives, Waterfront Wars.
                </li>
                <li>
                  <span className="font-semibold">
                    Part III – The Making of a Legend (1972–1976)
                  </span>{" "}
                  — At Her Majesty’s Pleasure, The Crew, Team Building, Putting
                  the Job Together.
                </li>
                <li>
                  <span className="font-semibold">
                    Part IV – The Aftermath (1976–1977)
                  </span>{" "}
                  — The Life of Riley, Vultures Circling, First Cracks,
                  Crossroads.
                </li>
                <li>
                  <span className="font-semibold">
                    Part V – Retribution (1976–1983)
                  </span>{" "}
                  — The Les Kane Murder, The Death of Ray Bennett, The Murder of
                  Brian Kane, The Death of Ian Carroll, Epilogue &amp;
                  Chronology.
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Media Kit" },
          ]}
        />
      </main>
    </>
  );
}
