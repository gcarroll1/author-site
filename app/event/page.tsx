// app/event

import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const BOOKING_URL = "https://redspiceroad.com/whats-on/";

export const metadata = {
  title: "Event | The Great Bookie Robbery 50th Anniversary",
  description:
    "Live historical event with Gregory M. Carroll at the Victorian Club at Red Spice Road, Melbourne, on April 21.",
};

export default function EventPage() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Event", url: "https://gregorymcarroll.com/event" },
  ];

  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "The 50th Anniversary of the Great Bookie Robbery",
    description:
      "A live historical event hosted by Gregory M. Carroll, author of 11 Minutes.",
    startDate: "2026-04-21T11:30:00+10:00",
    endDate: "2026-04-21T13:30:00+10:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: ["https://gregorymcarroll.com/images/event-poster.png"],
    performer: {
      "@type": "Person",
      name: "Gregory M. Carroll",
    },
    location: {
      "@type": "Place",
      name: "Victorian Club at Red Spice Road",
      address: {
        "@type": "PostalAddress",
        streetAddress: "141 Queen St",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    offers: {
      "@type": "Offer",
      url: BOOKING_URL,
      price: "50",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
      />
      <BreadcrumbJsonLd items={crumbs} />

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,520px)] items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
            Live historical event
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-neutral-100">
            The 50th Anniversary of the Great Bookie Robbery
          </h1>
          <p className="mt-4 text-xl text-neutral-300">
            Fifty years. Eleven minutes. Same room.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <p className="text-lg font-semibold text-neutral-100">
              Tuesday, 21 April 2026
            </p>
            <p className="mt-1 text-neutral-300">11:30 AM to 1:30 PM AEST</p>
            <p className="mt-4 text-lg font-semibold text-neutral-100">
              Victorian Club at Red Spice Road
            </p>
            <p className="text-neutral-300">141 Queen St, Melbourne</p>
            <p className="mt-4 text-2xl font-extrabold text-amber-400">$50 Standard</p>
            <p className="text-neutral-400">Add-on: signed copy +$30</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Book tickets
              </a>
              <a
                href="/crime-novel"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-5 py-2 font-medium text-neutral-200 transition hover:bg-neutral-800"
              >
                About 11 Minutes
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-neutral-300">
            <p>
              Join Gregory M. Carroll, author of <em>11 Minutes</em>, for a live historical event marking the exact 50th anniversary of Melbourne&apos;s Great Bookie Robbery.
            </p>
            <p>
              Held in the original Victorian Club room, the event features a real-time retelling of the heist at 12:07 PM, archival crime-scene photographs and floor plans, and a sit-down lunch with drinks.
            </p>
            <p>
              Stand where it happened. Hear how it unfolded. Return to the room where eleven minutes entered Melbourne crime history.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-800 bg-black/40 p-6">
            <h2 className="text-2xl font-bold text-neutral-100">What&apos;s included</h2>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li>• The 12:07 PM marker — a real-time retelling of the heist</li>
              <li>• Archival gallery — 1976 crime-scene photographs and plans</li>
              <li>• Sit-down lunch with drinks</li>
              <li>• Optional signed copy add-on</li>
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/30">
            <img
              src="/images/event-poster.webp"
              alt="Poster for The 50th Anniversary of The Great Bookie Robbery live historical event"
              className="block h-auto w-full"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
