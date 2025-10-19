import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import NoteSection from "@/components/NoteSection";

export const metadata = {"title": "Great Bookie Robbery \u2013 Epilogue | Gregory M Carroll", "description": "Epilogue \u2014 factual notes and images related to the Great Bookie Robbery."};

export default function Page() {
  const breadcrumbs = [{"name": "Home", "url": "https://example.com/"}, {"name": "Great Bookie Robbery", "url": "https://example.com/great-bookie-robbery"}, {"name": "Epilogue", "url": "https://example.com/great-bookie-robbery/epilogue"}];
  const articleLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Great Bookie Robbery \u2014 Epilogue", "about": ["Great Bookie Robbery", "Australian noir heist novel", "Melbourne 1976 crime gangs", "True crime unsolved", "Ray Chuck Bennett", "Ian Carroll", "Painters and Dockers waterfront wars", "11 Minutes", "A Crime novel", "Gregory M Carroll"], "author": {"@type": "Person", "name": "Gregory M Carroll"}};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BookBanner />
      <Lightbox />
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Great Bookie Robbery", href: "/great-bookie-robbery" },
        { name: "Epilogue" }
      ]} />
      <article className="prose prose-invert max-w-none">
<h1 className="text-4xl font-extrabold text-orange-500 mb-6">Epilogue</h1>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">The Fallout</h2>

<p className="text-sm italic">Note 66.	The Victoria Club has moved and been rebranded as the “Victorian Club” or “Vic Club”. It operates as a by-invitation-only club located at 180 Albert Road, South Melbourne.</p>

<p className="text-sm italic">Note 67.	The Final Report of the Costigan Royal Commission in 1984 recommended that the Painters and Dockers Union be deregistered. It was subsequently deregistered in 1993.</p>

<p className="text-sm italic"> image:Frank Costigan QC</p>

<p className="text-sm italic">Note 68.	In Summary:</p>

<p className="text-sm italic">•	Ray Bennett was shot in court in 1979.</p>

<p className="text-sm italic">•	Normie Lee was shot by police in 1982.</p>

<p className="text-sm italic">•	Ian Carroll was shot by Cox in 1983.</p>

<p className="text-sm italic">•	Tony McNamara died of a drug overdose.</p>

<p className="text-sm italic">•	Laurie Prendergast disappeared in 1985 and was declared dead in 2018.</p>

<p className="text-sm italic">•	No record exists of what happened to Vinnie.</p>
        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery">Back to Landing</a>
          <a className="btn" href="/great-bookie-robbery/part-5">← Part 5</a>
        </div>
      </article>
    </>
  );
}