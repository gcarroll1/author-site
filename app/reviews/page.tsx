export const metadata = { title: "Write a Review | 11 Minutes", description: "Submit your review." };
export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Write a Review</h1>
      <p>Share your thoughts - we showcase selected reviews.</p>
      <form method="POST" action="/api/reviews" className="grid gap-3 max-w-lg">
        <input className="input" placeholder="Name (optional)" />
        <textarea className="input min-h-[160px]" placeholder="Your review" required />
        <button className="btn" type="submit">Submit</button>
      <input type="text" name="hp" tabIndex={-1} aria-hidden="true" className="hidden" />
</form>
    </article>
  );
}