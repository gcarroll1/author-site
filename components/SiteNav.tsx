"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const items = [
  { href: "/", label: "Home" },
  { href: "/crime-novel", label: "Crime Novel" },
  { href: "/great-bookie-robbery", label: "True Crime" },
  { href: "/about", label: "Author" },
  { href: "/contact", label: "Contact" },
  { href: "/order", label: "Order" },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-neutral-900">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="text-lg font-bold">
          11 Minutes
        </Link>
        <ul className="ml-auto flex flex-wrap gap-3 text-sm">
          {items.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href as Route}
                  className={`px-3 py-1 rounded-lg transition ${
                    active
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-900"
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
