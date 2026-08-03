"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const items = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/books/11-million", label: "11 Million" },
  { href: "/books/11-minutes", label: "11 Minutes" },
  { href: "/great-bookie-robbery", label: "True Crime" },
  { href: "/event", label: "50 Anniversary" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order" },
  { href: "/reviews", label: "Reviews" },
  { href: "/media-kit", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-wide">
          Gregory M Carroll
        </Link>
        <ul className="ml-auto flex flex-wrap justify-end gap-1 text-sm md:gap-2">
          {items.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <li key={item.href}>
                <Link
                  href={item.href as Route}
                  className={`rounded-lg px-2 py-1.5 font-medium transition md:px-3 ${
                    active
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
