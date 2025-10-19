export default function BookBanner() {
  return (
    <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800 py-4 px-6 rounded-xl mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/crew_background.png')" }}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4">
        <img
          src="/images/book-cover.jpg"
          alt="11 Minutes - book cover"
          className="w-[100px] h-auto rounded-md shadow"
          width={100}
          height={150}
          loading="lazy"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold drop-shadow-sm">
            Read the story behind Australia's most daring heist <em>11 Minutes</em> by Gregory M Carroll
          </h2>
          <a
            href="https://www.amazon.com.au/dp/B0FV1QD25H"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}