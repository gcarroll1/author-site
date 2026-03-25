export const metadata = {
  title: "Order received | 50th Anniversary Edition",
  description: "Your 50th Anniversary Edition reservation has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnniversaryEditionSuccessPage() {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8">
      <h1 className="text-3xl font-extrabold text-neutral-100">Thank you</h1>
      <p className="mt-4 text-lg text-neutral-300">
        Your request for a 50th Anniversary Edition copy of <em>11 Minutes</em> has been received.
      </p>
      <p className="mt-3 text-neutral-300">
        Your book will be held for you and delivered at the function on 21 April 2026.
      </p>
    </section>
  );
}
