import Link from "next/link";

export const metadata = { title: "Advance Readers — Thank You" };

export default function AdvanceReadersSuccessPage() {
  return (
    <section className="max-w-xl card">
      <h1 className="text-2xl font-semibold mb-2">Thanks — request received</h1>
      <p className="text-neutral-300">We’ll reply via email with availability and next steps.</p>
      <div className="flex gap-3 mt-4">
        <Link className="btn" href="/crime-novel">Back to Book</Link>
        <Link className="btn" href="/reviews">See Reviews</Link>
      </div>
    </section>
  );
}
