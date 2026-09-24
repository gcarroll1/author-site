import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Australian Crime Novels",
  description:
    "Discover 11 Million and 11 Minutes, Gregory M Carroll's Australian crime novels inspired by Melbourne's Great Bookie Robbery.",
};

const books = [
  {
    title: "11 Million",
    subtitle: "The Great Bookie Robbery Money",
    image: "/images/books/11-million-cover.png",
    href: "/books/11-million",
    status: "Pre-order now",
    copy: "The robbery lasted eleven minutes. The missing fortune has been killing men ever since.",
  },
  {
    title: "11 Minutes",
    subtitle: "A Crime Novel of Melbourne's 1976 Great Bookie Robbery",
    image: "/images/11_Minutes_ebook_cover_4w.jpg",
    href: "/books/11-minutes",
    status: "Available now",
    copy: "Six men. Eleven minutes. The perfect crime—and the violent legacy it left behind.",
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gregorymcarroll.com/" }]} />

      <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-12 md:px-12 md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
          Gregory M Carroll · Australian crime author
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          The robbery took eleven minutes. The consequences lasted a lifetime.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
          Two crime novels inspired by Melbourne&apos;s 1976 Great Bookie Robbery—one following the men who stole the money, the other imagining where the missing millions went.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn" href="/books/11-million">Pre-order 11 Million</Link>
          <Link className="btn-secondary" href="/great-bookie-robbery">Explore the true story</Link>
        </div>
      </section>

      <section className="py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">The books</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">The Great Bookie Robbery novels</h2>
          </div>
          <Link href="/books" className="text-amber-500 underline underline-offset-4 hover:text-amber-400">View both books</Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {books.map((book) => (
            <article key={book.title} className="grid gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:grid-cols-[180px,1fr]">
              <Link href={book.href} className="mx-auto sm:mx-0">
                <img src={book.image} alt={`${book.title} book cover`} className="w-44 rounded-lg shadow-2xl" />
              </Link>
              <div className="flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">{book.status}</p>
                <h3 className="mt-2 text-3xl font-extrabold">{book.title}</h3>
                <p className="mt-1 font-semibold text-neutral-300">{book.subtitle}</p>
                <p className="mt-4 leading-relaxed text-neutral-300">{book.copy}</p>
                <Link className="mt-6 inline-flex font-semibold text-amber-500 hover:text-amber-400" href={book.href}>Discover the book →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-t border-neutral-800 py-14 md:grid-cols-[1fr,280px] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">Beyond the novels</p>
          <h2 className="mt-2 text-3xl font-bold">The crime behind the fiction</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-300">
            Read the documented story of the Great Bookie Robbery, the Victoria Club heist, and the Melbourne underworld figures whose lives shaped the novels.
          </p>
          <Link className="btn mt-6" href="/great-bookie-robbery">Enter the true-crime archive</Link>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
          <img src="/images/author.jpg" alt="Australian crime author Gregory M Carroll" className="mb-4 w-full rounded-lg" />
          <p className="text-sm leading-relaxed text-neutral-300">
            Gregory M Carroll writes from lived experience, family history, and years of research into Melbourne&apos;s criminal past.
          </p>
          <Link href="/about" className="mt-3 inline-block font-semibold text-amber-500">About Gregory →</Link>
        </div>
      </section>
    </>
  );
}
