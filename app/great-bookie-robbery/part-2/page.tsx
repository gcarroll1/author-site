import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import GalleryFigure from "@/components/GalleryFigure";

/**
 * Pattern / template notes:
 * - <h1> uses big orange styling (text-4xl, text-orange-500, font-extrabold)
 * - <h2> uses big blue styling (text-2xl, text-blue-400, font-bold)
 * - Each note uses the responsive wrapper:
 *     <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
 *       <div className="flex-1"> ...note text & links... </div>
 *       <div className="mt-4 md:mt-0 md:w-1/3"> ...images (GalleryFigure)... </div>
 *     </section>
 *   → On phones: image stacks under text; on desktop: sits to the right.
 */

export const metadata = {
  title: "Great Bookie Robbery – Part II – Where It Began | Gregory M Carroll",
  description:
    "Factual notes and images for Part II – Where It Began (1958–1974): Painters & Dockers, Raymond ‘Chuck’ Bennett, Ian ‘Fingers’ Carroll, and the waterfront wars.",
};

const KW = [
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
];

// Simple helper to build alt text consistently
const altFor = (base: string) => `${base} — ${KW[0]}, Melbourne 1976 crime gangs`;

// Reusable note section component for the pattern
function NoteSection({
  no,
  children,
  images = [],
  partIndex = 2,
  links = [],
}: {
  no: number | string;
  children: React.ReactNode; // note text
  images?: string[];         // basenames (no extension)
  partIndex?: number;
  links?: string[];          // external hrefs
}) {
  return (
    <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
      <div className="flex-1">
        <p>
          <strong>Note {no}:</strong> {children}
        </p>
        {links.length > 0 && (
          <div className="mt-2 text-sm text-neutral-300 flex flex-col gap-1">
            {links.map((u) => (
              <a
                key={u}
                className="underline underline-offset-4"
                href={u}
                target="_blank"
                rel="noopener noreferrer"
              >
                {u}
              </a>
            ))}
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="mt-4 md:mt-0 md:w-1/3">
          <div className="grid grid-cols-1 gap-4">
            {images.map((base) => (
              <GalleryFigure
                key={base}
                thumb={`/gallery/part-${partIndex}/thumbs/${base}.webp`}
                full={`/gallery/part-${partIndex}/full/${base}.jpg`}
                alt={altFor(base)}
                caption={base}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: "https://example.com/" },
    { name: "Great Bookie Robbery", url: "https://example.com/great-bookie-robbery" },
    { name: "Part II – Where It Began", url: "https://example.com/great-bookie-robbery/part-2" },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Great Bookie Robbery — Part II – Where It Began",
    about: KW,
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
          { name: "Part II – Where It Began" },
        ]}
      />

      <article className="prose prose-invert max-w-none">
        {/* H1 — bigger & orange */}
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
          1958 – 1974 - Part II – Where It Began
        </h1>

        {/* H2 — bigger, bold & blue */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 5: Raymond ‘Chuck’ Bennett
        </h2>
        <p className="text-sm italic">
          Welcome to the Docks, Ray’s Initiation to Violence, Brody’s Lessons, Sending a Message
        </p>

        <NoteSection no={13} images={["Raymond Patrick Chuck young"]}>
          Ray Patrick Chuck was born on 23 July 1948 in Chiltern, country Victoria. His family moved
          to Melbourne while he was still young. He began working on the docks at the age of 14.
        </NoteSection>

        <NoteSection no={14} images={["PortOfMelbourne_wharfs"]}>
          Frederick William “The Frog” Harrison was a well-known underworld standover man and a Painter
          and Docker. Though he did not invent ghosting, he was responsible for transforming it from petty
          theft into a highly organised scheme within the Painters and Dockers Union.
        </NoteSection>

        <NoteSection no={15} images={["Painters and Dockers Union badge"]}>
          Ghosting was exposed during the Costigan Royal Commission into the Painters and Dockers Union.
          At its peak, twice as many people were drawing pay as were actually employed. One of Ray’s first
          jobs involved both creating ghost worker records and clocking on and off for them.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 6: Ian ‘Fingers’ Carroll
        </h2>
        <p className="text-sm italic">Turana Boys Home, Leo’s Boxing Gym, Ray Meets Ian, First Job</p>

        <NoteSection no={16} images={["Ian Carroll family with author"]}>
          Ian Carroll was convicted of larceny in 1961, at the age of 14, and was sent to Turana Boys Home.
          He served 18 months’ detention. He often referred to it as the best school he ever attended.
        </NoteSection>

        <NoteSection
          no={17}
          images={["Turana Boys Home today"]}
          links={[
            "https://littleslawyers.com.au/news/abuse-law-institutions-turana-youth-training-centre-vic/",
          ]}
        >
          Turana Boys Home was closed down in 1964 after it was revealed that widespread physical and sexual
          abuse was occurring. The 2015 Victorian Royal Commission into Institutional Responses to Child Sexual
          Abuse found there had been ‘horrific and cruel physical and sexual abuse’.
        </NoteSection>

        <NoteSection no={18} images={["Leo Berrys Gym orig"]}>
          Ian Carroll was a registered amateur boxer, competing in both Golden Gloves events and on TV Ringside.
        </NoteSection>

        <NoteSection no={19} images={["Ian Revell Carroll 19"]}>
          Ian Revell Carroll, card carrier 2085, joined the Painters and Dockers Union at the age of 17.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 7: On the Waterfront
        </h2>
        <p className="text-sm italic">
          Union Factions, Death of Freddy “The Frog”, Laurie Prendergast, Paddy Saves Ian
        </p>

        <NoteSection
          no={20}
          images={["Billy Tex Longley"]}
          links={[
            "https://www.abc.net.au/rn/features/inbedwithphillip/episodes/206-billy-the-texan-longley",
          ]}
        >
          Billy 'The Texan' Longley, former standover man on the Melbourne waterfront during the 1960s and 1970s, was
          one of the most feared of the hard men of the notorious Federated Ship Painters and Dockers Union. In 1971,
          he was nominated for President of the Victorian branch of the Painters and Dockers Union but lost the election
          to Arthur Morris at the height of the Waterfront War. Longley said of himself: “I regard myself as a reserved
          person and I don’t go around looking for trouble, believe it or not, but if trouble comes to me, I think I turn
          into an entirely different person altogether.”
        </NoteSection>

        <NoteSection no={21} images={["Pat Shannon"]}>
          Both Bill ‘Tex’ Longley and Pat Shannon were senior figures in the Painters and Dockers Union and had extensive
          criminal records, including armed robbery. During the Costigan Royal Commission, police estimated that 70% of
          Melbourne’s top criminals had ties to the union.
        </NoteSection>

        <NoteSection
          no={22}
          images={["Freddy the Frog Harrison"]}
          links={["https://www.findagrave.com/memorial/63410902/frederick_william-harrison"]}
        >
          Frederick William Harrison (Freddy the Frog) was shot in the face with a shotgun at 13 South Wharf during
          daylight hours on a workday. Despite dozens of co-workers being present, all claimed to have seen nothing.
          Although this story maintains the myth of Freddy being Ray’s first mentor, that was not the case. Freddy died
          in 1958, when Ray was only 10 and not yet working on the docks. Just another case of journalistic licence that
          permeates the Great Bookie Robbery. However, the account of Freddy’s death in the story is accurate.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 8: A Criminal Life
        </h2>
        <p className="text-sm italic">A Calling for Armed Robbery, MSS Robbery</p>

        <NoteSection
          no={23}
          images={["MSS Robbery 1970"]}
          links={[
            "https://www.theage.com.au/national/victoria/from-the-archives-1970-250-000-stolen-in-daring-south-melbourne-heist-20190606-p51v9j.html",
          ]}
        >
          The South Melbourne MSS armoured van depot was robbed of $289,233 on Thursday, June 11, 1970, by men
          impersonating police officers. There was no such person as Creasy.
        </NoteSection>

        <NoteSection no={24} images={["Normie Lee Dim Sim factorybw"]}>
          Norman Lee’s family operated a dim sim and spring roll factory in Melbourne’s northern suburbs. It has long
          been rumoured that bodies were disposed of through the factory.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 9: Painter and Docker Wives
        </h2>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 10: The Dirty Blue Line
        </h2>
        <p className="text-sm italic">
          Brian “Skull” Murphy, Death of Neil Collingburn, The Cover-up, Longley Backs Murphy
        </p>

        <NoteSection
          no={25}
          images={["50 Police to face Charges - Beach Inquiry Age 13-Oct-76"]}
          links={["https://catalogue.nla.gov.au/catalog/6858122"]}
        >
          The Beach Inquiry into police corruption recommended that charges be laid against 55 officers from the Armed
          Robbery and Consorting squads.
        </NoteSection>

        <NoteSection
          no={26}
          images={["Brian Murphy and Carl Stillman at Neil Collingburn Manslaughter trial"]}
          links={[
            "https://www.theage.com.au/national/victoria/the-life-of-brian-saint-or-sinner-20230426-p5d3d0.html",
          ]}
        >
          Brian Murphy has stated multiple times that Ray Chuck threatened to “blow his head off” after Murphy
          allegedly threw Chuck’s son during a house search. Murphy denied the claim. It’s a matter of whom to
          believe, Gail or Murphy.
        </NoteSection>

        <NoteSection
          no={27}
          images={["Neil Collingburn Age 10-Jun-1971"]}
          links={["https://trove.nla.gov.au/newspaper/article/110666129"]}
        >
          In March 1971, Neil Collingburn and Ian Carroll were detained by Detective Murphy and Constable Stillman.
          The following day, Neil died at St Vincent’s Hospital from multiple injuries allegedly sustained while being
          questioned at Russell Street police headquarters. Ian Carroll was hospitalised for three weeks. In an
          interview in 2008 at Murphy’s home, Murphy produced the missing morgue photos for the journalist.
        </NoteSection>

        <NoteSection
          no={28}
          images={["Rose&Crown by pastportproject 7-Sep-2015"]}
          links={[
            "https://www.dailytelegraph.com.au/news/underworld-figure-billy-the-texan-longley-farewelled-at-funeral/news-story/d083e36f153511b486f3d362dc75b05d",
          ]}
        >
          The Rose and Crown Hotel in Port Melbourne, now simply The Rose, was Billy Longley’s unofficial place of
          business. It was there, he reportedly shot three other dockers in the mid-1960s.
        </NoteSection>

        <NoteSection
          no={29}
          links={[
            "https://www.news.com.au/national/victoria/billy-the-texan-longley-infamous-melbourne-crime-figure-dies-aged-88/news-story/b1ed2e76ceab2d307bed00477b9e18f1",
          ]}
        >
          Detective Brian “Skull” Murphy had known Longley since the 1960s and kept in touch until his death. When
          Murphy was charged with the murder of Painter and Docker Neil Collingburn in 1971, it was Longley who became
          his protector. He went to the Painters and Dockers and ordered them to: “Leave Murphy’s family and his home
          alone,” Murphy revealed later.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 11: Waterfront Wars
        </h2>
        <p className="text-sm italic">
          Ray Changes Sides, The Eve of War, First Shots, Open Hostilities, Taking a Toll
        </p>

        <NoteSection
          no={30}
          images={["Painters and Dockers office Lorimer St South Melbourne The Bulletin 11-Mar-1980"]}
          links={[
            "https://nla.gov.au/nla.obj-1328839869/view?sectionId=nla.obj-1488819008&partId=nla.obj-1328851579#page/n20/mode/1up",
          ]}
        >
          Nov 6, 1971, Robert Crotty, a known associate of Tex Longley, had the back of his head caved in with a brick
          outside a South Melbourne hotel. He suffered major brain damage requiring him to be institutionalised until
          his death. The Bulletin. Vol. 094 No. 4792 (5 Feb 1972).
        </NoteSection>

        <NoteSection
          no={31}
          images={["Waterfront war Car shot up on election day"]}
        >
          During the Costigan Royal Commission, police claimed that between 30 and 40 Painters and Dockers were murdered
          between 1970 and 1974, the period known as the Waterfront War. In a 1980 interview with The Bulletin, Tex
          Longley put the figure closer to 60. (The Bulletin, March 11, 1980). The reason for the uncertainty in the
          numbers is that the bodies of many of the missing were never found.
        </NoteSection>

        <NoteSection
          no={32}
          links={["https://www.facebook.com/photo.php?fbid=2019817678055606"]}
        >
          April 21, 1973, 10-year-old Nicholas (Nickie) Kolovrat was killed by a stray bullet at the Moonee Valley Hotel.
          His father and another bystander were also injured. The target, Lawrence Chamings, was also killed in the attack.
        </NoteSection>

        <NoteSection no={33} images={["Stub nose 38"]}>
          It is a myth that old-time crims respected the sanctity of the home and family. Ian Carroll was shot twice during
          the Painter and Dockers Wars. Tex Longley’s home was bombed twice. It was more good luck that other family
          members were not harmed.
        </NoteSection>

        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">
          Chapter 14: Change of Management
        </h2>
        <p className="text-sm italic">Peace Negotiations, Pat Shannon’s Murder, Ian – Union Secretary</p>

        <NoteSection no={34} images={["Shannon dead at Druids"]}>
          Pat Shannon was shot dead in the Druids Hotel on October 17, 1973. Tex Longley was convicted of the murder but
          maintained until his death that he was framed.
        </NoteSection>

        <NoteSection no={35} images={["James Bazley Age 12-Nov-2011"]}>
          Ian Carroll was initially appointed Union Secretary and was later elected to the post in 1974.
        </NoteSection>

        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery/part-1">← Part 1</a>
          <a className="btn" href="/great-bookie-robbery/part-3">Next: Part 3</a>
        </div>
      </article>
    </>
  );
}
