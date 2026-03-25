// components/TopBanner.tsx

"use client";

import EventBanner from "@/components/EventBanner";
import BookBanner from "@/components/BookBanner";

const EVENT_DATE = new Date("2026-04-21T13:30:00");

export default function TopBanner() {
  const now = new Date();

  if (now <= EVENT_DATE) {
    return <EventBanner />;
  }

  return <BookBanner />;
}
