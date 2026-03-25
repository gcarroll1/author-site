// =========================
// 1. components/EventBanner.tsx
// =========================

import Link from "next/link";

export default function EventBanner() {
  return (
    <div className="w-full bg-black text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-sm tracking-widest text-gray-400">
          50 YEARS. 11 MINUTES. ONE ROOM.
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          The Great Bookie Robbery
          <br />
          Live Reading & Presentation
        </h1>

        <p className="text-lg text-gray-300">
          📍 Original Victoria Club site (now Red Spice Road)
          <br />
          🗓 Tuesday 21 April 2026
          <br />
          ⏰ 11:30am – 1:30pm
          <br />
          🎯 12:07pm live play-by-play
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            //href="/great-bookie-robbery-50th-anniversary"
            href="/event"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Book Your Seat
          </Link>

          <p className="text-sm text-gray-400">
            Limited to 60 seats – expected to fill
          </p>
        </div>
      </div>
    </div>
  );
}

