import Link from "next/link";

export const metadata = {
  title: "Advance Readers — 11 Minutes",
  description:
    "Request an ARC of 11 Minutes. Reviewers commit to posting a review by early December 2025.",
};

export default function AdvanceReadersPage() {
  return (
    <section className="grid gap-8 max-w-3xl">
      <div className="card">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Advance Readers</h1>

        <p className="text-neutral-300">
          The link below will take you to the StoryOrigin site which manages ARC download
          requests. You will need to register your email to request a digital copy of{" "}
          <em>11 Minutes</em>.
        </p>

        <ul className="mt-4 list-disc pl-6 text-neutral-300">
          <li>
            Select <strong>EPUB</strong> for an Apple&nbsp;Books version.
          </li>
        </ul>

        <p className="mt-4">
          Please commit to posting your review in <strong>early December 2025</strong>.
        </p>

        <div className="mt-6 p-4 border border-neutral-700 bg-neutral-900 rounded-xl">
          <h2 className="text-lg font-semibold text-orange-400 mb-2">
            Need help downloading your ARC?
          </h2>
          <p className="text-neutral-300">
            Due to legal requirements, the process to download a free ARC ebook is a little
            involved. I’ve put together a short PDF guide that walks you through each step of
            the process.
          </p>
          <p className="mt-2">
            <Link
              href="/docs/getting-arc-instructions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 underline hover:text-orange-300"
            >
              📄 Download the step-by-step ARC Instructions (PDF)
            </Link>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="https://storyoriginapp.com/reviewcopies/77322a26-c0d0-11f0-a0ff-f3fa4b0f0355"
          className="card"
        >
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl h-full">
            <h3 className="font-semibold text-lg mb-1">Advance Reader (ARC)</h3>
            <p className="text-sm text-neutral-300">Register for an advance copy.</p>
          </div>
        </Link>

        <Link href="/reviews" className="card">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl h-full">
            <h3 className="font-semibold text-lg mb-1">Write a Review</h3>
            <p className="text-sm text-neutral-300">Submit your review.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
