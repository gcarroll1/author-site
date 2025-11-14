// app/layout.tsx
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://gregorymcarroll.com"),
  title: {
    default: "Gregory M Carroll",
    template: "%s | Gregory M Carroll",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-100">
        <SiteNav />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        {/* Author JSON-LD (site-wide) */}
        <Script
          id="author-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gregory M Carroll",
              url: "https://gregorymcarroll.com",
              image: "https://gregorymcarroll.com/images/author.jpg", // 
              sameAs: [
                "https://www.amazon.com/author/gregorymcarroll", // ← update
                "https://www.goodreads.com/author/show/175339915-gregory-m-carroll", // ← replace with your Goodreads author ID
                "https://www.facebook.com/gregorymcarrollauthor", // ← update
                "https://greatbookierobbery.com",
              ],
              jobTitle: "Author",
              knowsAbout: [
                "Crime fiction",
                "Australian history",
                "The Great Bookie Robbery"
              ],
              description:
                "Gregory M Carroll is an Australian author whose crime novels, including 11 Minutes – A Crime Novel of Melbourne’s 1976 Great Bookie Robbery, explore legacy, corruption, and moral erosion in the criminal underworld.",
            }),
          }}
        />
      </body>
    </html>
  );
}
