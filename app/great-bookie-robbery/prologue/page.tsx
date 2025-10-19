// app/great-bookie-robbery/prologue/page.tsx
import BookBanner from "@/components/BookBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Lightbox from "@/components/Lightbox";
import GalleryFigure from "@/components/GalleryFigure";

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

const altFor = (base: string) => `${base} — ${KW[0]}, Melbourne 1976 crime gangs`;

export const metadata = {
  title: "Great Bookie Robbery – Prologue | Gregory M Carroll",
  description:
    "Prologue — the scene, the crew, and the moment Melbourne’s Victoria Club was stormed. Factual preface to 11 Minutes.",
};

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: "https://example.com/" },
    { name: "Great Bookie Robbery", url: "https://example.com/great-bookie-robbery" },
    { name: "Prologue", url: "https://example.com/great-bookie-robbery/prologue" },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Great Bookie Robbery — Prologue",
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
          { name: "Prologue" },
        ]}
      />

      <article className="prose prose-invert max-w-none">
        {/* H1 — big + orange */}
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
          Prologue — About events
        </h1>

        {/* Opening scene */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              It happened just after midday, the Wednesday following the Easter long weekend. Six
              masked men appeared out of nowhere, bursting into the Settling Room of Melbourne’s
              Victoria Club. Dressed identically in overalls, faces hidden behind balaclavas, they
              moved like a military unit, armed with heavy weapons: machine guns, Tommy guns,
              automatic assault rifles.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <div className="grid grid-cols-1 gap-4">
              <GalleryFigure
                thumb="/gallery/prologue/thumbs/Victoria Club exterior today.webp"
                full="/gallery/prologue/full/Victoria Club exterior today.jpg"
                alt={altFor("Victoria Club exterior today")}
                caption="Victoria Club exterior today"
              />
              <GalleryFigure
                thumb="/gallery/prologue/thumbs/Age Headline 22-Apr-1976.webp"
                full="/gallery/prologue/full/Age Headline 22-Apr-1976.jpg"
                alt={altFor("Age Headline 22-Apr-1976")}
                caption="Age Headline 22-Apr-1976"
              />
              <GalleryFigure
                thumb="/gallery/prologue/thumbs/Steets of 1970s inner Melbourne.webp"
                full="/gallery/prologue/full/Steets of 1970s inner Melbourne.jpg"
                alt={altFor("Streets of 1970s inner Melbourne")}
                caption="Steets of 1970s inner Melbourne"
              />
            </div>
          </div>
        </section>

        {/* H2 — big + bold + blue */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-3">The crew</h2>
        <p className="text-sm italic">
          In the Melbourne underworld, a gang is called a crew. And the crew that carried out this
          robbery was a who’s who of Melbourne’s armed robbers.
        </p>

        {/* Crew member: Ray “Chuck” Bennett */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Raymond “Chuck” Bennett</strong>, the General — the leader and mastermind.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Ray Chuck Bennett.webp"
              full="/gallery/prologue/full/Ray Chuck Bennett.jpg"
              alt={altFor("Ray Chuck Bennett")}
              caption="Ray Chuck Bennett"
            />
          </div>
        </section>

        {/* Ian “Fingers” Carroll */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Ian “Fingers” Carroll</strong> — Bennett’s right-hand man and confidant.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Ian Fingers Carroll.webp"
              full="/gallery/prologue/full/Ian Fingers Carroll.jpg"
              alt={altFor("Ian Fingers Carroll")}
              caption="Ian Fingers Carroll"
            />
          </div>
        </section>

        {/* Normie Lee */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Normie Lee</strong>, the Accountant — his family ran a dim sim and spring
              roll factory.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Normie Lee.webp"
              full="/gallery/prologue/full/Normie Lee.jpg"
              alt={altFor("Normie Lee")}
              caption="Normie Lee"
            />
          </div>
        </section>

        {/* Vinnie Mikkelsen */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Vinnie Mikkelsen</strong> — the hardest man in town, and Carroll’s long-time
              protector.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Vinnie Mikkelsen identikit.webp"
              full="/gallery/prologue/full/Vinnie Mikkelsen identikit.jpg"
              alt={altFor("Vinnie Mikkelsen identikit")}
              caption="Vinnie Mikkelsen identikit"
            />
          </div>
        </section>

        {/* Laurie Prendergast */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Laurie Prendergast</strong> — a young, likeable larrikin and Bennett’s
              protégé.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Laurie Prendergast.webp"
              full="/gallery/prologue/full/Laurie Prendergast.jpg"
              alt={altFor("Laurie Prendergast")}
              caption="Laurie Prendergast"
            />
          </div>
        </section>

        {/* Tony McNamara */}
        <section className="mt-6 flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p>
              <strong>Tony McNamara</strong> — the weak link.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <GalleryFigure
              thumb="/gallery/prologue/thumbs/Tony McNamara identikit.webp"
              full="/gallery/prologue/full/Tony McNamara identikit.jpg"
              alt={altFor("Tony McNamara identikit")}
              caption="Tony McNamara identikit"
            />
          </div>
        </section>

        {/* Closing paragraph */}
        <section className="mt-8">
          <p>
            Yes, the culprits were known to the police. They just could not prove it. In fact, the
            Victorian Police Commissioner later referred to them as “the greatest team of armed
            robbers ever assembled.” They were all tied to the Painters and Dockers Union, which
            controlled Melbourne’s waterfront and most of its crime.
          </p>
        </section>

        <div className="mt-10 flex gap-3">
          <a className="btn" href="/great-bookie-robbery">Back to Landing</a>
          <a className="btn" href="/great-bookie-robbery/part-1">Next: Part 1</a>
        </div>
      </article>
    </>
  );
}
