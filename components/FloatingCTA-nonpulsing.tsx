// =========================
// 5. Optional Floating CTA
// =========================

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();

  if (pathname === "/great-bookie-robbery-50th-anniversary") {
    return null;
  }

  return (
    <Link
      href="/great-bookie-robbery-50th-anniversary"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition transform hover:bg-red-700 hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
    >
      Reserve Seat
    </Link>
  );
}
