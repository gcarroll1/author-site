import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "50th Anniversary Edition Order | 11 Minutes",
  description:
    "Private order page for attendees to reserve the 50th Anniversary Edition for collection at the event.",
  robots: {
    index: false,
    follow: false,
  },
};

const ORDER_DEADLINE_ISO = "2026-04-14T23:59:59+10:00";
const DEADLINE_LABEL = "14 April 2026";

export default function AnniversaryEditionOrderPage({
  searchParams,
}: {
  searchParams?: { closed?: string; err?: string };
}) {
  const isClosed = new Date() > new Date(ORDER_DEADLINE_ISO) || searchParams?.closed === "1";

  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Event", url: "https://gregorymcarroll.com/event" },
    {
      name: "50th Anniversary Edition Order",
      url: "https://gregorymcarroll.com/event/anniversary-edition",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <section className="mx-auto grid max-w-3xl gap-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            Attendee order page
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-neutral-100 sm:text-4xl">
            Reserve your 50th Anniversary Edition
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            This page is for event attendees who would like a copy of the
            <em> 50th Anniversary Edition </em>
            of <em>11 Minutes</em> set aside for collection at the function on 21 April 2026.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8">
          <div>
            <h2 className="text-xl font-semibold text-neutral-100">How it works</h2>
            <p className="mt-3 text-neutral-300">
              Enter your name and email address below. Orders must be placed no later than
              <strong> {DEADLINE_LABEL}</strong>. Your copy will be held for you and delivered at the event.
            </p>
          </div>

          <ul className="grid gap-2 text-neutral-300">
            <li>• One reservation request per attendee.</li>
            <li>• Collection is at the function only.</li>
            <li>• Red Spice Road attendees will receive this link by email.</li>
          </ul>
        </div>

        {isClosed ? (
          <div className="rounded-2xl border border-amber-700/50 bg-amber-950/40 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-amber-300">Orders are now closed</h2>
            <p className="mt-3 text-neutral-200">
              The order deadline for the 50th Anniversary Edition passed on
              <strong> {DEADLINE_LABEL}</strong>.
            </p>
            <p className="mt-2 text-neutral-300">
              If you still need help, please reply to the event email or speak to staff at Red Spice Road.
            </p>
          </div>
        ) : (
          <form
            className="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8"
            action="/api/anniversary-edition-order"
            method="POST"
          >
            <div className="grid gap-1">
              <label className="text-sm text-neutral-300" htmlFor="name">
                Full name
              </label>
              <input className="input" id="name" name="name" required />
            </div>

            <div className="grid gap-1">
              <label className="text-sm text-neutral-300" htmlFor="email">
                Email address
              </label>
              <input className="input" id="email" name="email" type="email" required />
            </div>

            <input type="hidden" name="deadline" value={ORDER_DEADLINE_ISO} />
            <input
              type="hidden"
              name="notes"
              value="50th Anniversary Edition order for delivery at the 21 April 2026 event."
            />
            <input type="text" name="hp" tabIndex={-1} aria-hidden="true" className="hidden" />

            <button className="btn" type="submit">
              Reserve my copy
            </button>

            {searchParams?.err ? (
              <p className="text-sm text-red-300">Please enter a valid name and email address.</p>
            ) : null}

            <p className="text-xs text-neutral-500">
              By submitting this form, you are asking for a copy to be held for collection at the function.
            </p>
          </form>
        )}
      </section>
    </>
  );
}
