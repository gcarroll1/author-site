import Link from "next/link";
type Crumb = { name: string; href?: string };
import type { Route } from "next";
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {c.href ? (
              <Link href={c.href as Route} className="hover:text-neutral-200 underline underline-offset-4">
                {c.name}
              </Link>
            ) : (
              <span className="text-neutral-300">{c.name}</span>
            )}
            {i < items.length - 1 && <span className="px-1">-</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}