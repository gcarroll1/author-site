// components/BookJsonLd.tsx
import Script from "next/script";

export default function BookJsonLd() {
  return (
    <Script
      id="book-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "11 Minutes – A Crime Novel of Melbourne’s 1976 Great Bookie Robbery",
          alternateName: "11 Minutes",
          author: {
            "@type": "Person",
            name: "Gregory M Carroll",
            url: "https://gregorymcarroll.com",
          },
          url: "https://gregorymcarroll.com/crime-novel",
          inLanguage: "en-AU",
          genre: ["Crime fiction", "Historical crime"],
          bookFormat: "https://schema.org/Paperback",
          image: "https://gregorymcarroll.com/images/11_Minutes_ebook_cover_4w.jpg",
          isbn: "978-1-7642226-0-0",
          datePublished: "2025-12-01",
          publisher: {
            "@type": "Organization",
            name: "Self-published via IngramSpark & Amazon KDP",
          },
          description:
            "Fast-paced heist novel retelling the Melbourne 1976 Great Bookie Robbery true crime, by one who knew them. The Victoria Club robbed of $80 million in today's money. No one convicted, money never recovered, but in 10 years all were dead.",
          offers: [
            {
              "@type": "Offer",
              url: "https://gregorymcarroll.com/order/preorder",
              priceCurrency: "AUD",
              price: "29.99",
              availability: "https://schema.org/PreOrder",
              itemCondition: "https://schema.org/NewCondition",
              seller: {
                "@type": "Organization",
                name: "Gregory M Carroll",
              },
            },
          ],
          // Multiple editions linked under "workExample"
          workExample: [
            {
              "@type": "Book",
              name: "11 Minutes – Paperback (IngramSpark)",
              isbn: "978-1-7642226-0-0",
              bookFormat: "https://schema.org/Paperback",
              publisher: "IngramSpark",
              url: "https://gregorymcarroll.com/order/preorder",
            },
            {
              "@type": "Book",
              name: "11 Minutes – eBook (ePub)",
              isbn: "978-1-7642226-1-7",
              bookFormat: "https://schema.org/EBook",
              publisher: "IngramSpark",
              url: "https://gregorymcarroll.com/order/preorder",
            },
            {
              "@type": "Book",
              name: "11 Minutes – Kindle Edition",
              isbn: "978-1-7642226-2-4",
              bookFormat: "https://schema.org/EBook",
              publisher: "Amazon KDP",
              url: "https://www.amazon.com/dp/B0FV1QD25H", // ← replace when live
            },
            {
              "@type": "Book",
              name: "11 Minutes – Paperback (KDP)",
              isbn: "978-1-7642226-3-1",
              bookFormat: "https://schema.org/Paperback",
              publisher: "Amazon KDP",
              url: "https://www.amazon.com/dp/1764222636", // ← replace when live
            },
          ],
        }),
      }}
    />
  );
}
