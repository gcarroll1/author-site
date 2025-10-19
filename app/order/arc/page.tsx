export const metadata = {
  title: "Advance Readers — 11 Minutes",
  description:
    "Request an ARC of 11 Minutes. Reviewers commit to posting a review by 31 Oct 2025.",
};

export default function AdvanceReadersPage() {
  return (
    <section className="grid gap-8 max-w-3xl">
      <div className="card">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Advance Readers</h1>
        <p className="text-neutral-300">
          If you actively review ARCs (crime fiction or true crime), request a digital copy of <em>11 Minutes</em>.
          Please commit to posting your review by <strong>31 Oct 2025</strong>.
        </p>
      </div>

      <form className="card grid gap-4" action="/api/advance-readers" method="POST">
        <div className="grid gap-1">
          <label className="text-sm text-neutral-300" htmlFor="name">Full Name</label>
          <input className="input" id="name" name="name" required />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-neutral-300" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-neutral-300" htmlFor="platform">Review Platform</label>
          <input className="input" id="platform" name="platform" placeholder="Goodreads, Amazon, Blog URL, etc." />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-neutral-300" htmlFor="message">Message (optional)</label>
          <textarea className="input min-h-[120px]" id="message" name="message" />
        </div>
        <button className="btn" type="submit">Request ARC</button>
        <p className="text-xs text-neutral-500">We’ll reply via email with availability and next steps.</p>
      </form>
    </section>
  );
}
