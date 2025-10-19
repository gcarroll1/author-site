import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import NoteSection from "@/components/NoteSection";

export const metadata = {"title": "Great Bookie Robbery \u2013 1972 -1976\t\tPart III \u2013 The Making of a Legend | Gregory M Carroll", "description": "1972 -1976\t\tPart III \u2013 The Making of a Legend \u2014 factual notes and images related to the Great Bookie Robbery."};

export default function Page() {
  const breadcrumbs = [{"name": "Home", "url": "https://example.com/"}, {"name": "Great Bookie Robbery", "url": "https://example.com/great-bookie-robbery"}, {"name": "1972 -1976\t\tPart III \u2013 The Making of a Legend", "url": "https://example.com/great-bookie-robbery/part-3"}];
  const articleLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Great Bookie Robbery \u2014 1972 -1976\t\tPart III \u2013 The Making of a Legend", "about": ["Great Bookie Robbery", "Australian noir heist novel", "Melbourne 1976 crime gangs", "True crime unsolved", "Ray Chuck Bennett", "Ian Carroll", "Painters and Dockers waterfront wars", "11 Minutes", "A Crime novel", "Gregory M Carroll"], "author": {"@type": "Person", "name": "Gregory M Carroll"}};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BookBanner />
      <Lightbox />
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Great Bookie Robbery", href: "/great-bookie-robbery" },
        { name: "1972 -1976\t\tPart III \u2013 The Making of a Legend" }
      ]} />
      <article className="prose prose-invert max-w-none">
<h1 className="text-4xl font-extrabold text-orange-500 mb-6">1972 -1976		Part III – The Making of a Legend</h1>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 15:	At Her Majesty’s Pleasure</h2>

<p className="text-sm italic">The Kangaroo Gang, HMP Parkhurst, Genesis of the Plan</p>

<NoteSection
  no={"36"}
  images={["Kangaroo Gangs Brian OCallahan"]}
  partIndex={3}
  links={[]}
>
  The Kangaroo Gang was a group of Australians who committed jewellery ‘lifts’ (shoplifting) in the 1960s and early 1970s throughout the UK and Europe.
</NoteSection>

<NoteSection
  no={"37"}
  images={["Reggie Kray notorious London gangster"]}
  partIndex={3}
  links={[]}
>
  Reggie Kray was sent to Parkhurst in 1969 after being convicted of the brutal murder of villain Jack “The Hat” McVitie.
</NoteSection>

<NoteSection
  no={"38"}
  images={["HMP Parkhurst from Flickr"]}
  partIndex={3}
  links={["https://allthatsinteresting.com/kray-twins"]}
>
  Ray Chuck was imprisoned at HMP Parkhurst in 1972. Reggie Kray was also an inmate at the time. The Kray brothers were notorious figures in the London underworld.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 16:	Home Leave</h2>

<p className="text-sm italic">A Quick Visit to Oz, The Architect, The Third Day</p>

<NoteSection
  no={"39"}
  images={["1948 floor plan of the Victoria Club"]}
  partIndex={3}
  links={[]}
>
  The actual identity of the Architect is still unknown today. Some journalists believe it to have been Stanley Ernest James, a known friend and associate of Normie Lee. In fact, his wife was charged and acquitted along with Normie of possession of money from the Victoria Club. The author doubts this assertion. Stan, born in 1946, would have been too young to have the experience to plan the large scale robberies accredited to the Architect, as far back as 1970. Stan James died in 2024. The author leans towards the Scotland Yard theory that he was an Englishman living in Australia. His description in the story of being 57 and looking like Charles Bronson was their suspect.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 17:	I Still Call Australia Home</h2>

<p className="text-sm italic">Welcome home, Some Business Talk, Finalising the Crew</p>

<p className="text-sm italic">The Sixth Member</p>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 18:	Russell Cox</h2>

<p className="text-sm italic">Prison Visit, Long Bay Breakout, Infirmary</p>

<NoteSection
  no={"40"}
  images={["Melville Peter Schnitzerling AKA Russell Mad Dog Cox was to be the 6th member of the crew"]}
  partIndex={3}
  links={["https://www.onlineopinion.com.au/view.asp?article=2832"]}
>
  Melville Peter Schnitzerling, better known as Russell Cox, shot a guard during a failed escape from Long Bay Gaol on August 8, 1975, using a smuggled .25 Beretta pistol.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 19:	The Crew</h2>

<p className="text-sm italic">Bad News, First Get Together, The Briefing</p>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 20:	Team Building</h2>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 21:	Putting the Job Together</h2>

<p className="text-sm italic">Guns and Ammo, Planning and Preparation,</p>

<p className="text-sm italic">Dress Rehearsal</p>

<NoteSection
  no={"41"}
  images={["Melb docks unload pre containerization"]}
  partIndex={3}
  links={[]}
>
  While dock workers do need to know the full 11-character container number (4 letters and 6 or 7 numbers) for identification and tracking, they don&#x27;t typically say the whole thing out loud. Instead, they often refer to containers by the owner prefix (first 3 letters) and the last few digits of the serial number, e.g. OCLU-101563 becomes OCL-563.
</NoteSection>

<NoteSection
  no={"42"}
  images={["Automatic Weapons used in the Great Bookie Robbery"]}
  partIndex={3}
  links={[]}
>
  It was alleged during the Costigan Royal Commission that Ian Carroll frequently smuggled firearms into Australia from the United States using the containers from his car parts import business.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 22:	Another 11 Minutes</h2>

<p className="text-sm italic">April 21, 1976, Vivian’s Day, The Meet Up</p>

        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery/part-2">← Part 2</a>
          <a className="btn" href="/great-bookie-robbery/part-4">Next: Part 4</a>
        </div>

      </article>
    </>
  );
}