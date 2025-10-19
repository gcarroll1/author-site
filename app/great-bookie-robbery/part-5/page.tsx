import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import NoteSection from "@/components/NoteSection";

export const metadata = {"title": "Great Bookie Robbery \u2013 1976 -1983\t\tPart V \u2013 Retribution | Gregory M Carroll", "description": "1976 -1983\t\tPart V \u2013 Retribution \u2014 factual notes and images related to the Great Bookie Robbery."};

export default function Page() {
  const breadcrumbs = [{"name": "Home", "url": "https://example.com/"}, {"name": "Great Bookie Robbery", "url": "https://example.com/great-bookie-robbery"}, {"name": "1976 -1983\t\tPart V \u2013 Retribution", "url": "https://example.com/great-bookie-robbery/part-5"}];
  const articleLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Great Bookie Robbery \u2014 1976 -1983\t\tPart V \u2013 Retribution", "about": ["Great Bookie Robbery", "Australian noir heist novel", "Melbourne 1976 crime gangs", "True crime unsolved", "Ray Chuck Bennett", "Ian Carroll", "Painters and Dockers waterfront wars", "11 Minutes", "A Crime novel", "Gregory M Carroll"], "author": {"@type": "Person", "name": "Gregory M Carroll"}};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BookBanner />
      <Lightbox />
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Great Bookie Robbery", href: "/great-bookie-robbery" },
        { name: "1976 -1983\t\tPart V \u2013 Retribution" }
      ]} />
      <article className="prose prose-invert max-w-none">
<h1 className="text-4xl font-extrabold text-orange-500 mb-6">1976 -1983		Part V – Retribution</h1>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 29:	The Seventh Circle of Hell</h2>

<p className="text-sm italic">Ambrose Talks, Boxer vs Streetfighter,</p>

<p className="text-sm italic">The Murder of Les Kane</p>

<NoteSection
  no={"52"}
  images={["Royal Oak hotel site of Vinnie and Brian Kanes fight"]}
  partIndex={5}
  links={[]}
>
  Les Kane was shot dead in his Wantirna home in October 1978 after returning home with his family. His wife and two children were in the second bedroom. His body was never found. His wife initially denied that he was dead.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 30:	The Les Kane Murder Trial</h2>

<p className="text-sm italic">Police Mark Tony, Les Kane Reported Dead, Roundup</p>

<p className="text-sm italic">On Trial, Silvers</p>

<NoteSection
  no={"53"}
  images={["Les Kane"]}
  partIndex={5}
  links={[]}
>
  Ray Chuck, Laurie Prendergast, and Vinnie Mikkelsen were charged with Les Kane’s murder but were later acquitted due to the lack of a body, as well as all having alibis from other Painters and Dockers.
</NoteSection>

<NoteSection
  no={"54"}
  images={["Silvers venue today"]}
  partIndex={5}
  links={[]}
>
  Silvers nightclub became a celebrity hotspot, frequented by the likes of Tom Jones, Rod Stewart, and other A-listers, until it was sold in 1990 and converted into an upscale restaurant. It is now a ‘rave’ venue for hire.
</NoteSection>

<NoteSection
  no={"55"}
  images={["Graham The Munster Kinniburgh"]}
  partIndex={5}
  links={["https://www.abc.net.au/news/2017-04-21/stephen-john-asling-sentenced-gangland-graham-kinniburgh/8460424"]}
>
  Graham &#x27;&#x27;The Munster&#x27;&#x27; Kinniburgh was one of Brian Kane&#x27;s best friends. The events at Silvers were reported by barrister Philip Dunn QC. &#x27;The Munster&#x27; was a well-known underworld hit man who went on to associate with colourful characters such as Alphonse Gangitano (shot dead in 1998) and Mick Gatto. Kinniburgh, in turn, was shot dead outside his home in 2003.
</NoteSection>

<NoteSection
  no={"56"}
  images={["The overhead bar Cox cut to escape Long Bay Katingal prison"]}
  partIndex={5}
  links={[]}
>
  On November 4, 1977, Russell Cox became the first man to escape from Katingal, the maximum-security unit of Long Bay Jail. The description of his escape in the story is accurate. He remained at large for 11 years.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 31:	Returns</h2>

<p className="text-sm italic">“Mad Dog” Cox Escapes, The Prodigal Returns,</p>

<p className="text-sm italic">Cox Returns</p>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 32:	The Death of Ray Bennett</h2>

<p className="text-sm italic">The Murder of Ray Bennett, Ray’s Funeral, Death of Tony McNamara</p>

<NoteSection
  no={"57"}
  images={["Melbourne Magistrates Courts where Ray Bennett was shot"]}
  partIndex={5}
  links={[]}
>
  Brian &quot;Murphy&quot; admitted to being near the Melbourne Magistrates&#x27; Court when Ray Bennett was shot, although he had no reason to be there. He said he was just passing by and witnessed the event, not involved in the shooting itself.
</NoteSection>

<NoteSection
  no={"58"}
  images={["Brian Kanes escape path after shooting Bennett"]}
  partIndex={5}
  links={[]}
>
  Raymond &quot;Chuck&quot; Bennett was shot and killed at the Melbourne Magistrates Court on November 12, 1979, while in police custody awaiting a court appearance. While the case remains officially open, Brian Murphy was adamant that Brian Kane was the shooter.
</NoteSection>

<NoteSection
  no={"59"}
  images={["Wharvies pub Bells Hotel in Woolloomooloo AKA Rockers"]}
  partIndex={5}
  links={[]}
>
  Jim Bazley died in Melbourne in 2018 at the age of 90. He served nine years for conspiracy to murder anti-drugs campaigner Donald Mackay, though not for the murder itself.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 33:	A Crew No More</h2>

<p className="text-sm italic">Vinnie Leaves, Last Man Standing, Laurie Withdraws,</p>

<p className="text-sm italic">The Death of Normie Lee</p>

<NoteSection
  no={"60"}
  images={["Costigan Royal Commission into the Painters and Dockers"]}
  partIndex={5}
  links={["https://henley.austlii.edu.au/au/other/cth/AURoyalC/1984/2.pdf"]}
>
  The following extract is from the ROYAL COMMISSION ON THE ACTIVITIES OF THE FEDERATED SHIP PAINTERS AND DOCKERS UNION. Commissioner: Mr Frank Costigan, Q.C. Final Report Vol 1 – 26-Oct-1984. “5.068. I have conducted an exhaustive investigation into the activities of Carroll and his associates. There is little point in identifying those associates in this part of my report. A summary of their activities appears as Volume 6. I say summary - an analysis has been conducted of the affairs of these people. That analysis is exhaustive and is the result of many hours of labour by members of my staff and in particular of senior assisting counsel. It contains, approximately 1165 pages and results from consideration of the evidence of 38 witnesses, 395 exhibits and 33053 pages of documents.”
</NoteSection>

<NoteSection
  no={"61"}
  images={["Ian Revell Carroll 1982", "Normie Lee was shot during holdup at Melbourne Airport", "A rare glimpse of Vinnie with author"]}
  partIndex={5}
  links={["https://www.youtube.com/watch?v=xn6ggBsYw1g"]}
>
  From a search of Ian Carroll’s records after his death, police now believe that Carroll, in six months alone, was instrumental in armed robberies committed in September 1981 on Nabisco ($89,836); November 1981 on VicRail ($248,404); 9 December 1981 on W. R. Grace ($111,404); and 15 February 1982 on CBA Bank ($139,400). Normie Lee was shot during a holdup attempt at Melbourne Airport in 1982. See Channel News report: Vinnie Mikklesen was notoriously camera shy, to the point he would remove film from people taking his photo and bribing wedding photographers to ensure he wasn’t in the background of any shot.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 34:	The Murder of Brian Kane</h2>

<p className="text-sm italic">Ian Goes It Alone, Cox Back Again,</p>

<p className="text-sm italic">The Murder of Brian Kane</p>

<NoteSection
  no={"62"}
  images={["Quarry Hotel where Brian Kane was killed"]}
  partIndex={5}
  links={["https://www.police.vic.gov.au/reward-brian-kane"]}
>
  Brian Kane was shot and killed at the Quarry Hotel on November 26, 1982, by two men wearing balaclavas. No one was ever charged. The case remains open.
</NoteSection>

<h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">Chapter 35:	The Death of Ian Carroll</h2>

<p className="text-sm italic">Mt Martha, The Death of Ian Carroll, Ian’s Funeral</p>

<p className="text-sm italic">The Capture of Russell Cox, Ian Carroll Murder Trial</p>

<NoteSection
  no={"63"}
  images={["Ian Carrolls Mt Martha house showing the Escort blocking his pickup"]}
  partIndex={5}
  links={[]}
>
  Ian Carroll was shot and killed by Russell Cox at his Mt Martha holiday house on January 3, 1983. Cox later claimed he returned weeks later and retrieved $1.2 million buried in a barrel under a shed floor.
</NoteSection>

<NoteSection
  no={"64"}
  images={["Cox arrest after failed holdup", "The many faces of Russell Mad Dog Cox"]}
  partIndex={5}
  links={[]}
>
  Russell Cox, 38, was arrested on July 22, 1988, when he and Raymond Denning attempted an armed robbery of an armoured car at Doncaster Shoppingtown. Russell Cox spent 11 years on the run due to his ability to constantly change his appearance.
</NoteSection>

<NoteSection
  no={"65"}
  images={["cox and dean 2004"]}
  partIndex={5}
  links={[]}
>
  Russell Cox was charged with the murder of Ian Carroll but acquitted on the grounds of self-defence.
</NoteSection>
        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery/part-4">← Part 4</a>
          <a className="btn" href="/great-bookie-robbery/epilogue">Next Epilogue</a>
        </div>
      </article>
    </>
  );
}