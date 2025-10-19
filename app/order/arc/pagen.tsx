export const metadata = { title: "Advance Reader Registration | 11 Minutes", description: "Apply for an ARC." };
export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Advance Reader Registration</h1>
      <p>Tell us a bit about you and your reading/reviewing platforms. We'll email if selected.</p>
      <form className="grid gap-3 max-w-lg">
        <input className="input" placeholder="Name" required />
        <input className="input" type="email" placeholder="Email" required />
        <textarea className="input min-h-[120px]" placeholder="Where do you review? (Goodreads, Amazon, blog, etc.)" />
        <button className="btn" type="submit">Submit</button>
      </form>
    </article>
  );
}