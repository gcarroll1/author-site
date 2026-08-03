import Link from "next/link";

export const metadata = {
  title: "The Great Bookie Robbery Crime Novels",
  description: "Explore 11 Minutes and 11 Million, Gregory M Carroll's Australian crime novels inspired by the Great Bookie Robbery.",
};

export default function BooksPage() {
  return (
    <section>
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">Gregory M Carroll crime novels</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">The Great Bookie Robbery novels</h1>
        <p className="mt-6 text-xl leading-relaxed text-neutral-300">
          One robbery. Two stories. <em>11 Minutes</em> follows the men who carried out Australia&apos;s most audacious unsolved heist. <em>11 Million</em> imagines what happened to the money after they began to die.
        </p>
      </header>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <BookPanel title="11 Million" subtitle="The Great Bookie Robbery Money" image="/images/books/11-million-cover.png" href="/books/11-million" label="Pre-order now">
          An international Australian crime thriller moving from Melbourne to Manila, Hong Kong, Greece, and the shadow world of Cold War finance.
        </BookPanel>
        <BookPanel title="11 Minutes" subtitle="A Crime Novel of Melbourne's 1976 Great Bookie Robbery" image="/images/11_Minutes_ebook_cover_4w.jpg" href="/books/11-minutes" label="Available now">
          The rise and fall of the crew behind the Victoria Club robbery, told with insider authenticity and grounded in Melbourne underworld history.
        </BookPanel>
      </div>
    </section>
  );
}

function BookPanel({ title, subtitle, image, href, label, children }: { title: string; subtitle: string; image: string; href: string; label: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <img src={image} alt={`${title} book cover`} className="mx-auto h-[360px] w-auto rounded-lg shadow-2xl" />
      <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-amber-500">{label}</p>
      <h2 className="mt-2 text-3xl font-extrabold">{title}</h2>
      <p className="mt-1 font-semibold text-neutral-300">{subtitle}</p>
      <p className="mt-4 leading-relaxed text-neutral-300">{children}</p>
      <Link className="btn mt-6" href={href}>View {title}</Link>
    </article>
  );
}
