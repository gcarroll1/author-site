import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50th Anniversary Edition Pre-Order | 11 Minutes",
  description:
    "Pre-order your signed 50th Anniversary Edition copy of 11 Minutes for collection at the Red Spice Road event on 21 April 2026.",
  robots: {
    index: false,
    follow: false,
  },
};

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/9B6aEX2zL4Sra7id0N3Je00";

export default function AnniversaryEditionPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left column */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-amber-300">
              Event attendee pre-order only
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              50th Anniversary Edition
              <span className="block text-amber-300">Signed Event Pre-Order</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
              Pre-order your copy of <em>11 Minutes</em> for collection at the
              Red Spice Road 50th Anniversary event on <strong>21 April 2026</strong>.
              Copies will be personally signed by Gregory M Carroll on the day.
            </p>

            <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
              <p className="text-base font-semibold text-red-200">
                Pre-orders close 10 April 2026
              </p>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                The final print order will be placed immediately after the cut-off.
                No extra anniversary copies are guaranteed to be available at the event.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  What you receive
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-200">
                  <li>• One copy of <em>11 Minutes</em></li>
                  <li>• 50th Anniversary event edition sticker / insert</li>
                  <li>• Personal signature by the author</li>
                  <li>• Collection at Red Spice Road on 21 April 2026</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Important
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-200">
                  <li>• Available only to event ticket holders</li>
                  <li>• No shipping is included</li>
                  <li>• Books must be collected at the event</li>
                  <li>• Please use the same name/email as your ticket booking</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-4 text-base font-semibold text-neutral-950 transition hover:bg-amber-300"
              >
                Pre-Order Your Copy
              </Link>

              <Link
                href="/event"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 px-6 py-4 text-base font-semibold text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-900"
              >
                Back to Event Page
              </Link>
            </div>

            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Payment is processed securely by Stripe. After payment, please retain
              your confirmation email as proof of pre-order.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:pl-6">
            <div className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="border-b border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-8">
                <div className="mx-auto flex aspect-[0.7] max-w-[320px] items-end rounded-[1.5rem] border border-neutral-700 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,#18181b_0%,#09090b_100%)] p-6 shadow-2xl">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                      Gregory M Carroll
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
                      11 Minutes
                    </h2>
                    <p className="mt-3 max-w-[14rem] text-sm leading-6 text-neutral-300">
                      A crime novel of Melbourne’s Great Bookie Robbery
                    </p>
                    <div className="mt-6 inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                      50th Anniversary Edition
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  About the book
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-200">
                  <strong>Six men. Eleven minutes. The perfect crime.</strong>
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Melbourne, 1976. A gang of armed robbers storms the Victoria Club in broad daylight
                  and vanishes with what would now be worth $80 million. No one is convicted.
                  The money is never recovered. Within ten years, every man is dead.
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  <em>11 Minutes</em> is a sharp, fast-paced crime novel inspired by true events,
                  written by someone who knew the men involved, including his own brother.
                </p>

                <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
                  <p className="text-sm font-semibold text-neutral-100">
                    Collection details
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-400">
                    Red Spice Road<br />
                    Tuesday 21 April 2026<br />
                    Collect before or after the presentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14 rounded-[2rem] border border-neutral-800 bg-neutral-900/60 p-8">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Before you order
          </h2>

          <div className="mt-5 grid gap-4 text-sm leading-7 text-neutral-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5">
              <p className="font-semibold text-neutral-100">1. Hold an event ticket</p>
              <p className="mt-2">
                This pre-order page is for confirmed attendees of the anniversary event.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5">
              <p className="font-semibold text-neutral-100">2. Use your booking details</p>
              <p className="mt-2">
                Please order using the same name and email address used for your event ticket.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5">
              <p className="font-semibold text-neutral-100">3. Collect on the day</p>
              <p className="mt-2">
                Books are for event collection only and will not be posted after purchase.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}