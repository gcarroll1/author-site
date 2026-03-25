"use client";

// app/great-bookie-robbery-50th-anniversary/page.tsx

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function EventPage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";

  const [form, setForm] = useState({
    name: "",
    email: "",
    seats: 1,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Scroll to top on success
  useEffect(() => {
    if (sent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append(
        "message",
        `Event booking for 21 April 2026\nSeats: ${form.seats}`
      );
      formData.append("hp", "");

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.redirected) {
        window.location.href = res.url;
        return;
      }

      setError("Something failed. Try again.");
    } catch {
      setError("Something failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="bg-black px-6 py-20 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold">
          50 Years. 11 Minutes. One Room.
        </h1>

        <p className="mb-3 text-sm text-gray-400">
          Held inside the original robbery site.
        </p>

        <p className="mb-6 text-lg">
          April 21, 1976.
          <br />
          Six men walk into the Victoria Club.
          <br />
          In eleven minutes, Melbourne changes.
          <br />
          <br />
          Fifty years later, the story returns to the same ground.
        </p>

        {!sent && (
          <a
            href="#booking"
            className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Reserve Your Seat
          </a>
        )}
      </section>

      {/* 🔥 SUCCESS MESSAGE — MOVED TO TOP */}
      {sent && (
        <section className="bg-green-50 px-6 py-10 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold text-green-800">
              Your place is reserved.
            </h2>
            <p className="text-green-700">
              We will confirm your seat by email.
              <br />
              See you on April 21.
            </p>
          </div>
        </section>
      )}

      {/* DETAILS */}
      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16">
        <h2 className="text-2xl font-bold">What Happens in the Room</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>The robbery, told minute by minute at 12:07pm</li>
          <li>Original floor plans and archival photographs</li>
          <li>What was taken, what was lost, what followed</li>
          <li>Reading from 11 Minutes</li>
          <li>Book signing</li>
        </ul>

        <h2 className="text-2xl font-bold">The Location</h2>

        <p>
          Site of the original Victoria Club:
          <br />
          Red Spice Road Restaurant - 141 Queen Street, Melbourne
          <br />
          The same ground. The same room.
          <br />
          Different faces. Same story.
        </p>

        <h2 className="text-2xl font-bold">The Day</h2>

        <p>
          Tuesday, April 21, 2026
          <br />
          11:30am – 1:30pm
          <br />
          12:07pm — the moment it began
        </p>

        <p className="font-semibold text-red-600">
          Limited seats. One sitting.
        </p>
      </section>

      {/* 🔥 BOOKING — HIDDEN AFTER SUBMIT */}
      {!sent && (
        <section id="booking" className="bg-gray-100 px-6 py-16 text-center">
          <div className="mx-auto max-w-md">
            <h2 className="mb-6 text-3xl font-bold">Be in the Room</h2>

            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                className="w-full rounded-lg border p-3"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                className="w-full rounded-lg border p-3"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <input
                type="number"
                min="1"
                max="6"
                value={form.seats}
                className="w-full rounded-lg border p-3"
                onChange={(e) =>
                  setForm({ ...form, seats: Number(e.target.value) })
                }
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Reserve Now"}
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
