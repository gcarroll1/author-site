// app/event/anniversary-edition

import Image from "next/image";
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

export default function AnniversaryEditionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE – COPY */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            50th Anniversary Edition<br />
            <span className="text-amber-400">Pre-Order Your Signed Copy</span>
          </h1>

          <p className="text-lg mb-6 text-gray-300">
            Secure your personally signed copy of <strong>11 Minutes</strong>, 
            prepared exclusively for attendees of the 50th Anniversary event.
          </p>

          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-5 mb-6">
            <p className="text-xl font-semibold mb-2">
              Special Event Price: <span className="text-amber-400">$30</span>
            </p>
            <p className="text-sm text-gray-400">
              (Limited to event attendees only)
            </p>
          </div>

          <ul className="mb-8 space-y-2 text-gray-300">
            <li>• Personally signed by the author</li>
            <li>• 50th Anniversary Edition sticker</li>
            <li>• Collect at the event (no shipping required)</li>
          </ul>

          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-8">
            <p className="font-semibold text-red-300">
              Orders close 10 April 2026
            </p>
            <p className="text-sm text-red-200">
              No books will be available for pre-order after this date.
            </p>
          </div>

          {/* CTA BUTTON */}
          <a
            href="https://buy.stripe.com/9B6aEX2zL4Sra7id0N3Je00"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Pre-Order Now
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Secure payment via Stripe. You will receive confirmation by email.
          </p>

          {/* BACK LINK (optional but useful) */}
          <div className="mt-6">
            <Link href="/event" className="text-sm text-gray-400 underline">
              ← Back to Event Details
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – BOOK COVER */}
        <div className="flex justify-center">
          <Image
            src="/images/11 Minutes - 50th Anniversary Edition Cover.jpg"
            alt="11 Minutes 50th Anniversary Edition"
            width={420}
            height={650}
            className="rounded-lg shadow-2xl"
            priority
          />
        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="max-w-3xl mx-auto mt-16 text-center text-gray-400 text-sm">
        <p>
          Books will be available for collection at the event. Please bring your
          order confirmation email.
        </p>
      </div>
    </main>
  );
}