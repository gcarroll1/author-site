// app/contact/page.tsx

export const metadata = {
  title: "Contact | Gregory M Carroll",
  description: "Contact Gregory M Carroll, read free samples of 11 Minutes and 11 Million, or follow his author page.",
};

const sampleLinks = [
  {
    title: "11 Minutes",
    description: "Start with the crime novel inspired by Melbourne’s Great Bookie Robbery.",
    href: "https://gregory-m-carroll.author-pages.com/landers/book-sample-11-minutes",
  },
  {
    title: "11 Million",
    description: "Follow the missing money across continents in the next book.",
    href: "https://gregory-m-carroll.author-pages.com/landers/book-sample-11-million-the-great-bookie-robbery-money-eleven-book-2",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-orange-500">Contact Gregory</h1>
        <p className="mt-3 text-neutral-300">
          Have a question about the books, an interview enquiry, or a story to share?
          I’d be glad to hear from you.
        </p>
      </header>

      <section aria-labelledby="email-heading" className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 id="email-heading" className="text-xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 text-neutral-300">For readers, bookshops and media enquiries, email me at:</p>
        <a
          className="mt-3 inline-block break-all font-semibold text-orange-300 underline underline-offset-4 hover:text-orange-200"
          href="mailto:gregory@gregorymcarroll.com"
        >
          gregory@gregorymcarroll.com
        </a>
      </section>

      <section aria-labelledby="samples-heading">
        <h2 id="samples-heading" className="text-2xl font-bold text-white">Read a free sample</h2>
        <p className="mt-2 text-neutral-300">
          Get the first two chapters of either book. Both sample pages subscribe you to the same mailing list.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {sampleLinks.map((book) => (
            <article key={book.title} className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-xl font-bold text-white">{book.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-neutral-300">{book.description}</p>
              <a
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-amber-700"
              >
                Get the {book.title} sample
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="follow-heading" className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 id="follow-heading" className="text-xl font-bold text-white">Follow the books</h2>
        <p className="mt-2 text-neutral-300">Follow my author page for book news and updates.</p>
        <a
          href="https://www.facebook.com/gregorymcarrollauthor/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-orange-400/70 px-5 py-3 font-semibold text-orange-200 transition hover:bg-orange-500/10"
        >
          Follow on Facebook
        </a>
      </section>
    </div>
  );
}
