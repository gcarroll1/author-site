import Link from "next/link";

export const metadata = { title: "Review Submitted — Thank You" };

export default function ReviewSuccessPage() {
  return (
    <section className="max-w-xl card">
      <h1 className="text-2xl font-semibold mb-2">Thanks for your review</h1>
      <p className="text-neutral-300">Your review was sent to the author and may be published after moderation.</p>
      <div className="flex gap-3 mt-4">
        <Link className="btn" href="/crime-novel">Back to Book</Link>
        <Link className="btn" href="/great-bookie-robbery">Explore Gallery</Link>
      </div>
    </section>
  );
}
