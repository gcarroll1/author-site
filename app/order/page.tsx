import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import { AmazonRankingHighlight } from "@/components/AmazonRankingHighlight";

export const metadata = {
  title: "Order | 11 Minutes",
  description:
    "Order 11 Minutes in Australia or internationally, and leave a review.",
};

export default function Page() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "Order", url: "https://gregorymcarroll.com/order" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Order" },
        ]}
      />

      <article className="prose prose-invert max-w-none">
      <div className="relative flex items-center gap-4">
        <img
          src="/images/book-cover.jpg"
          alt="11 Minutes A Crime Novel of Melbourne's 1976 Great Bookie Robbery - book cover"
          className="w-[100px] h-auto rounded-md shadow"
          width={100}
          height={150}
          loading="lazy"
        />
	<div>
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
          Order 11 Minutes
        </h1>
        <p className="text-neutral-300 mb-8">
          Find your preferred store below to order{" "}
          <em>11 Minutes – A Crime Novel of Melbourne&apos;s 1976 Great Bookie
          Robbery</em> in Australia or internationally. You can also leave a
          review once you&apos;ve read the book.
        </p>
        </div>
      </div>

      {/* NEW AMAZON HOT NEW RELEASES IMAGE */}
      <AmazonRankingHighlight />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Australia section */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">In Australia</h2>
            <p className="text-neutral-300 mb-4 text-sm">
              Australian readers can order the paperback from local booksellers
              or the ebook from major platforms.
            </p>

            <div className="space-y-4">
              {/* Amazon AU */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/amazon.png"
                  alt="Amazon paperback"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Amazon – Paperback
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Order the Australian paperback edition from Amazon (local printer).
                  </p>
                </div>
                <Link
                  href="https://www.amazon.com.au/11-MINUTES-Melbournes-Bookie-Robbery/dp/1764222636"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>

              {/* fishpond */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/fishpond.png"
                  alt="fishpond online store"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Fishpond.com.au – Paperback
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Purchase the paperback via Fishpond (cheapest online price).
                  </p>
                </div>
                <Link
                  href="https://www.fishpond.com.au/Books/11-Minutes-Gregory-M-Carroll/9781764222600"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>

              {/* Booktopia */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/Booktopia.jpg"
                  alt="Booktopia"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Booktopia – Paperback
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Purchase the paperback via Booktopia.
                  </p>
                </div>
                <Link
                  href="https://www.booktopia.com.au/11-minutes-gregory-m-carroll/book/9781764222600.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>

              {/* Apple Books */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/Apple-books.png"
                  alt="Apple Books"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Apple Books – Ebook
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Read the ebook edition on Apple Books.
                  </p>
                </div>
                <Link
                  href="https://books.apple.com/au/book/11-minutes/id6755410297"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>

              {/* Amazon AU – Ebook */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/amazon.png"
                  alt="Amazon Australia"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Amazon Australia – Kindle
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Find the Kindle edition on Amazon Australia.
                  </p>
                </div>
                <Link
                  href="https://www.amazon.com.au/s?k=11+Minutes+Gregory+M+Carroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>
            </div>
          </section>

          {/* Brick & Mortar + International (right column) */}
          <section>
            {/* Brick & Mortar Stockists */}
            <h2 className="text-2xl font-semibold mb-3">Brick & Mortar Stockists</h2>
            <p className="text-neutral-300 mb-4 text-sm">
              These independent bookshops currently stock <em>11 Minutes</em>. 
              More stores will be added as they come on board.
            </p>

            <div className="space-y-4">
              {/* Abbeys Bookshop – Sydney */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/abbeys.png"
                  alt="Abbeys Bookshop Sydney"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Abbeys Bookshop – Sydney</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    131 York Street, Sydney NSW 2000<br />
                    Phone: <b>(02) 9264 3111</b>
                  </p>
                </div>
              </div>

              {/* Hill of Content – Melbourne */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/hill-of-content.png"
                  alt="Hill of Content – Melbourne"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Hill of Content – Melbourne CBD</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    32 Bourke St, Melbourne VIC 3000<br />
                    Phone: <b>(03) 9662 9472</b>
                  </p>
                </div>
              </div>
            </div>

            {/* International section */}
            <h2 className="text-2xl font-semibold mb-3 mt-8">International</h2>
            <p className="text-neutral-300 mb-4 text-sm">
              International readers can order via Amazon in their region.
            </p>

            <div className="space-y-4">
              {/* Amazon US */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/amazon.png"
                  alt="Amazon US"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Amazon US</h3>
                  <p className="text-xs text-neutral-300">
                    Order from Amazon in the United States.
                  </p>
                </div>
                <Link
                  href="https://www.amazon.com/11-Minutes-Melbournes-Bookie-Robbery/dp/1764222601"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>

              {/* Amazon UK */}
              <div className="not-prose flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <img
                  src="/images/stores/amazon.png"
                  alt="Amazon UK"
                  className="w-20 h-auto rounded-sm hidden sm:block"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Amazon UK</h3>
                  <p className="text-xs text-neutral-300">
                    Order from Amazon in the United Kingdom.
                  </p>
                </div>
                <Link
                  href="https://www.amazon.co.uk/11-MINUTES-Melbournes-Bookie-Robbery/dp/1764222636"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="inline-block bg-amber-600 hover:bg-amber-700 !text-white hover:!text-white px-5 py-2 rounded-lg font-medium transition text-xs sm:text-sm"
                >
                  Buy
                </Link>
              </div>
            </div>
          </section>
        </div>

      </article>
    </>
  );
}
