"use client";

import { useMemo, useState } from "react";

export function AmazonButton({
  href,
  goLiveIso, // e.g., "2025-12-01T00:00:00+10:00"
}: {
  href: string;
  goLiveIso: string;
}) {
  const canPostAmazon = useMemo(() => {
    const goLive = new Date(goLiveIso);
    return new Date() >= goLive;
  }, [goLiveIso]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${!canPostAmazon ? "pointer-events-none opacity-60" : ""}`}
      aria-disabled={!canPostAmazon}
      title={canPostAmazon ? "Open the Amazon review page" : "Amazon reviews open on 1 Dec 2025"}
    >
      {canPostAmazon ? "Leave a Review on Amazon" : "Amazon Reviews Open 1 Dec 2025"}
    </a>
  );
}

export function StarRatingInput({ name }: { name: string }) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex items-center gap-1 text-2xl select-none">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = (hover || rating) >= star;
        return (
          <button
            key={star}
            type="button"
            className="p-0.5"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
          >
            <span className={filled ? "text-yellow-400" : "text-neutral-500"}>★</span>
          </button>
        );
      })}
      {/* Hidden field that actually submits the numeric value */}
      <input type="hidden" name={name} value={rating || ""} />
    </div>
  );
}
