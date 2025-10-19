import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import NoteSection from "@/components/NoteSection";

export const metadata = {
  title: "Great Bookie Robbery – Part I – The Crime of the Century | Gregory M Carroll",
  description:
    "Part I – The Crime of the Century: Factual notes and images for the arrival, 11 minutes, the crime scene, and the getaway.",
};

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: "https://example.com/" },
    { name: "Great Bookie Robbery", url: "https://example.com/great-bookie-robbery" },
    { name: "Part I – The Crime of the Century", url: "https://example.com/great-bookie-robbery/part-1" },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Great Bookie Robbery — Part I – The Crime of the Century",
    about: [
      "Great Bookie Robbery",
      "Australian noir heist novel",
      "Melbourne 1976 crime gangs",
      "True crime unsolved",
      "Ray Chuck Bennett",
      "Ian Carroll",
      "Painters and Dockers waterfront wars",
      "11 Minutes",
      "A Crime novel",
      "Gregory M Carroll",
    ],
    author: { "@type": "Person", name: "Gregory M Carroll" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BookBanner />
      <Lightbox />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Great Bookie Robbery", href: "/great-bookie-robbery" },
          { name: "Part I – The Crime of the Century" },
        ]}
      />

      <article className="prose prose-invert max-w-none">
        {/* H1 — big & orange */}
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
          21 April 1976 — Part I – The Crime of the Century
        </h1>

        {/* Chapter 1 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 1: The Arrival
        </h2>

        <NoteSection
          no={1}
          images={["Queen Street 1980"]}
          partIndex={1}
          links={[]}
        >
          The Mayne Nickless armoured van delivering the bookies’ cash ran twenty minutes late that
          day. That morning, further up, Queen Street’s eastern side was being dug up. Southbound
          traffic jammed from end to end.
        </NoteSection>

        <NoteSection
          no={2}
          images={["131 queen street dining room view"]}
          partIndex={1}
          links={[]}
        >
          The ground floor of the Victoria Club, at 131-141 Queen St, Melbourne, was high to cater
          for a mezzanine and the large height of the stained glass windows to Queen Street. This
          meant its second floor, which housed the Settling Room, was equivalent to the third floor
          of the neighbouring buildings.
        </NoteSection>

        <NoteSection
          no={3}
          images={["cashbox2"]}
          partIndex={1}
          links={[]}
        >
          Eight metal cash boxes were delivered by Mayne Nickless that morning. Each was 24 by 20 by
          18 inches (600 x 500 x 450). They contained a total of 118 calico cash bags, each labelled
          with its bookie’s details.
        </NoteSection>

        <NoteSection
          no={4}
          images={["victoria-club-1976"]}
          partIndex={1}
          links={[]}
        >
          The building next door was under renovation at that time. A study of floor plans revealed
          an access door had been struck through the dividing wall during a previous renovation. It
          had subsequently been painted over on the Victoria Club side.
        </NoteSection>

        {/* Chapter 2 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 2: 11 Minutes
        </h2>

        <NoteSection
          no={5}
          images={["Ambrose Palmer 1937"]}
          partIndex={1}
          links={[]}
        >
          Ambrose Harold Palmer (1910–1990) was a champion boxer, trainer, and VFL footballer. He
          won Australian titles in the middleweight, light-heavyweight, and heavyweight divisions and
          played 83 games for Footscray. Renowned for his intelligence and discipline, he trained
          world boxing champion Johnny Famechon and coached the 1956 Olympic boxing team. Awarded an
          MBE in 1971, he died on his 80th birthday in 1990, remembered as a Footscray local hero and
          doyen of Australian boxing.
        </NoteSection>

        <NoteSection
          no={6}
          images={["The Settling Room cage"]}
          partIndex={1}
          links={[]}
        >
          Such was the crew’s discipline, a bundle of $15,000 lying on one of the tables was left
          untouched.
        </NoteSection>

        <NoteSection
          no={7}
          images={["Settlement floor plan"]}
          partIndex={1}
          links={[]}
        >
          The robbery of the Victoria Club, home of the Australian Jockey Club (AJC), occurred just
          after midday on Wednesday, April 21, 1976. It was the first banking day after Easter, as
          Easter Tuesday was a bank holiday in Melbourne. Over the long weekend, there were five race
          meetings at four racecourses on the Saturday, Monday, and Tuesday. With banks closed until
          Wednesday, bookmakers loaded their Mayne Nickless bags. Enough to cover losses from
          Saturday. Enough to start again on Monday. Tuesday too, if needed.
        </NoteSection>

        {/* Chapter 3 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 3: The Crime Scene
        </h2>

        <NoteSection
          no={8}
          images={["Victoria Club ground floor windows today"]}
          partIndex={1}
          links={[]}
        >
          Because of the high ground floor and mezzanine, there were eighty-six steps from the ground
          to the second floor.
        </NoteSection>

        <NoteSection
          no={9}
          images={["Police display weapons used in the Great Bookie Robbery"]}
          partIndex={1}
          links={[]}
        >
          Police recovered high-powered weapons, including Thompson and Owen submachine guns, as well
          as an M16 automatic assault rifle. It is believed these were left behind because they were
          too hard to conceal when leaving the building and may have prompted police to search the
          rest of the building.
        </NoteSection>

        <NoteSection
          no={10}
          images={["Victoria Club entrance - The Age on April 22, 1976"]}
          partIndex={1}
          links={[]}
        >
          At the crime scene, police recovered 118 cash bags, even though the bookies claimed only
          $1.387 million was stolen. That, they claimed, was the total takings for 116 bookies over
          all 5 race meetings that long weekend. The money deposited into the armoured van consisted
          mainly of high-denomination notes, $20 and $50 bills. A roll of $1,000 can easily fit in
          one hand. Based on the bookies' claim, this meant each calico bag contained only about
          $10,000, or ten rolls of cash, i.e. nearly empty. Exaggerated claims by journalists that
          the real amount stolen was $15 million were based on the assumption that each calico sack
          was full, i.e., containing $100,000. If that had been the case, each mail sack would have
          weighed approximately 50 kilograms, a weight even a young, fit wharfie would find hard to
          carry up two floors/four flights of stairs.
        </NoteSection>

        <NoteSection
          no={11}
          images={["Bookie Race bag on display at 131 Queen Street"]}
          partIndex={1}
          links={[]}
        >
          In racing slang, a ‘monkey’ refers to a $500 bet, and a ‘gorilla’ to a $1,000 bet (a large
          monkey). Bookies paid turnover tax on the total amount wagered, regardless of whether the
          bets were won or lost. Operating two race bags with separate ticket sets was common
          practice.
        </NoteSection>

        {/* Chapter 4 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 4: The Getaway
        </h2>

        <NoteSection
          no={12}
          images={["Back exit from Victoria club into laneway"]}
          partIndex={1}
          links={[]}
        >
          The back stairs of the Victoria Club opened onto a rear laneway. From there, the crew made
          their way around the corner onto Queen Street. Witnesses questioned by police would not
          have seen anyone leaving either the Victoria Club or the neighbouring building.
        </NoteSection>

        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery/prologue">Back to Prologue</a>
          <a className="btn" href="/great-bookie-robbery/part-2">Next: Part 2</a>
        </div>
      </article>
    </>
  );
}
