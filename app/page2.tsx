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

      <section
        aria-labelledby="home-hero-title"
        className="relative isolate flex min-h-[540px] flex-col justify-between overflow-hidden rounded-2xl bg-[#e9d9aa] px-5 py-6 text-[#102b4f] sm:px-8 md:min-h-[480px] md:px-10 md:py-7"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-[position:61%_center] md:bg-[length:90%_auto] md:bg-[position:right_top] md:bg-no-repeat"
          style={{ backgroundImage: "url('/images/Clifftop5.png')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff9e8]/95 via-[#fff9e8]/75 via-[35%] to-transparent to-[65%] md:bg-gradient-to-r md:from-[#fff9e8]/90 md:via-[#fff9e8]/70 md:via-[45%] md:to-transparent md:to-[75%]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#071e38]/80 to-transparent" />

        <div className="max-w-[690px]">
          <h1 id="home-hero-title" className="text-[clamp(2.25rem,5vw,3.5rem)] font-black uppercase leading-[0.98] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)]">
            <span>Coming </span>
            <span className="whitespace-nowrap text-[#bd1020]">13 October</span>
          </h1>
          <blockquote className="mt-4 max-w-[590px] font-serif text-[clamp(1.3rem,2.3vw,1.65rem)] italic leading-[1.14] md:mt-5">
            <p>“Wow! That was one wild ride. I genuinely loved it.”</p>
            <footer className="mt-2 text-[0.7em] not-italic">— Tony Jones, 9News</footer>
          </blockquote>
        </div>

        <div className="relative z-10 flex flex-col items-start gap-2 md:absolute md:left-[10%] md:top-[41%]">
          <Link
            href="/books/11-million"
            aria-label="View 11 Million"
            className="relative block h-[119px] w-[105px] overflow-hidden transition hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-[127px] sm:w-[112px] lg:h-[175px] lg:w-[154px]"
          >
            <img
              src="/images/11-million-3d-cover.png"
              alt="11 Million book cover"
              className="absolute -top-[26px] left-0 h-auto w-full drop-shadow-2xl sm:-top-[28px] lg:-top-[38px]"
            />
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0c2c50] px-6 py-2 text-base font-extrabold uppercase tracking-wide text-white shadow-xl transition hover:bg-[#16436f] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg"
            href="/books/11-million"
          >
            Pre-order 11 Million
          </Link>

        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
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
