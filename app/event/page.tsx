import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";

const newsUrl = "https://www.9now.com.au/9news-melbourne/season-2026/episode-116";

const videoClips = [
  {
    title: "Introduction — returning to the Victoria Club room",
    description:
      "A short excerpt from the Channel 9 News coverage introducing the 50th anniversary reading at the original robbery site.",
    src: "/gallery/9News/great-bookie-robbery-50th-anniversary-gregory-carroll-introduction-9news.mp4",
    poster:
      "/gallery/9News/great-bookie-robbery-50th-anniversary-gregory-carroll-introduction-9news-poster.jpg",
  },
  {
    title: "Ian Carroll — the personal cost behind the story",
    description:
      "Gregory M Carroll reflects on the human consequence of the robbery and the death of his brother, Ian Carroll.",
    src: "/gallery/9News/great-bookie-robbery-ian-carroll-personal-cost-gregory-carroll-9news.mp4",
    poster:
      "/gallery/9News/great-bookie-robbery-ian-carroll-personal-cost-gregory-carroll-9news-poster.jpg",
  },
  {
    title: "Tony Jones closing — fifty years on",
    description:
      "Tony Jones closes the Channel 9 News report on the 50th anniversary of the Great Bookie Robbery.",
    src: "/gallery/9News/great-bookie-robbery-50-years-on-tony-jones-closing-9news.mp4",
    poster:
      "/gallery/9News/great-bookie-robbery-50-years-on-tony-jones-closing-9news-poster.jpg",
  },
];

const eventImages = [
  {
    src: "/gallery/9News/VictorianClub_Then_Now.png",
    alt: "The 50th anniversary Great Bookie Robbery at original site of the Victorian Club",
    caption: "Attendees entered though the same door as the original Victoria Club, fifty years to the day.",
  },
  {
    src: "/gallery/9News/gregory-carroll-presenting-great-bookie-robbery-50th-anniversary-red-spice-road.jpg",
    alt: "Gregory M Carroll presenting at the 50th anniversary Great Bookie Robbery event at Red Spice Road Melbourne",
    caption: "The reading of 11 Minutes returned the same room, fifty years to the day.",
  },
  {
    src: "/gallery/9News/gregory-carroll-tony-jones-channel-9-news-Victorian Club-layout.jpg",
    alt: "Gregory M Carroll speaking with Tony Jones from Channel 9 News after the Great Bookie Robbery anniversary presentation",
    caption: "Tony Jones and Channel 9 Melbourne covered the anniversary for the Sunday news bulletin.",
  },
  {
    src: "/gallery/9News/Gregory-Carroll-presenting-at-the-victorian-club.jpg",
    alt: "Gregory M Carroll presenting at the site of the victorian club on the 50th anniversary Great Bookie Robbery",
    caption: "Presenting at the site of the Victorian club on the 50th anniversary Great Bookie Robbery.",
  },
  {
    src: "/gallery/9News/gregory-carroll-signing-11-minutes-books-50th-anniversary-event.jpg",
    alt: "Gregory M Carroll signing copies of 11 Minutes after the 50th anniversary Great Bookie Robbery event",
    caption: "Signed copies of 11 Minutes were collected by readers after the presentation.",
  },
  {
    src: "/gallery/9News/11-minutes-book-cover-channel-9-news-great-bookie-robbery.jpg",
    alt: "11 Minutes book cover with Channel 9 News Great Bookie Robbery anniversary coverage reference",
    caption: "11 Minutes blends documented history, family memory, and noir fiction to examine what came after the heist.",
  },
];

export const metadata = {
  title: "50th Anniversary Event | Great Bookie Robbery | 11 Minutes",
  description:
    "A recap of Gregory M Carroll’s sold-out 50th anniversary Great Bookie Robbery event at the original Victoria Club site, including Channel 9 News coverage and event photographs.",
};

export default function EventPage() {
  const crumbs = [
    { name: "Home", url: "https://gregorymcarroll.com/" },
    { name: "50th Anniversary Event", url: "https://gregorymcarroll.com/event" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "50th Anniversary Event" }]} />

      <article className="prose prose-invert max-w-none">
        <p className="inline-flex rounded-full border border-amber-600/60 bg-amber-600/10 px-3 py-1 text-sm font-semibold text-amber-300 mb-4">
          Sold out — 21 April 2026 — original robbery site
        </p>

        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
          50 Years After the Great Bookie Robbery
        </h1>

        <p className="text-xl leading-relaxed text-neutral-200">
          21st April 1976 - 21st April 2026.
        </p>

        <p className="text-sm leading-relaxed text-neutral-200">
          At 12:07 pm, 50 years to the minute, the story returned to the room
          where it began.
        </p>

        <p className="text-sm leading-relaxed text-neutral-200">
          On 21 April 2026, Gregory M Carroll marked the 50th anniversary of
          the Great Bookie Robbery with a sold-out reading and presentation at
          Red Spice Road, inside the former Victoria Club site in Melbourne.
          The event was a quiet return to the room, the time, and the people
          behind one of Australia’s most enduring crime stories.
        </p>

        <p className="text-sm leading-relaxed text-neutral-200">
          The robbery took eleven minutes. The consequences lasted decades.
          The presentation did not celebrate the crime. It asked what remained:
          the families, the violence, the silence, and the cost carried by those
          left behind.
        </p>

        <section className="not-prose mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-3xl font-extrabold text-orange-500">50</p>
            <p className="mt-1 text-sm text-neutral-300">years to the day</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-3xl font-extrabold text-orange-500">12:07</p>
            <p className="mt-1 text-sm text-neutral-300">the time of the robbery</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-3xl font-extrabold text-orange-500">Sold out</p>
            <p className="mt-1 text-sm text-neutral-300">at the original location</p>
          </div>
        </section>

        <section className="not-prose mt-10 rounded-2xl border border-amber-600/40 bg-neutral-950 p-5 md:p-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Channel 9 News Melbourne
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-100">
              Broadcast coverage from the anniversary event
            </h2>
            <p className="mt-3 text-neutral-300">
              Tony Jones and Channel 9 Melbourne covered the 50th anniversary
              story for the Sunday 6 pm news bulletin. The short excerpts below
              are presented as a record of the event and its historical context.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {videoClips.map((clip) => (
              <figure
                key={clip.src}
                className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
              >
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  poster={clip.poster}
                  aria-label={clip.title}
                >
                  <source src={clip.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="p-4">
                  <h3 className="text-lg font-bold text-neutral-100">{clip.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {clip.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Watch on 9Now
            </a>
            <p className="text-xs leading-5 text-neutral-500">
              9Now availability may change. Short excerpts remain subject to
              Channel 9 copyright and are included here only to document the
              anniversary coverage.
            </p>
          </div>
        </section>

        <section className="not-prose mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Event gallery
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-100">
              The room, the readers, and the record
            </h2>
            <p className="mt-3 text-neutral-300">
              Images from the sold-out anniversary presentation at Red Spice
              Road, the former Victoria Club site. The gallery is included as a
              record of the day rather than a celebration of the crime.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {eventImages.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm leading-6 text-neutral-400">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <h2>The event is over. The story is not.</h2>
        <p>
          <em>11 Minutes</em> is the novel that grew from the facts, the scars,
          and the long silence around the Great Bookie Robbery. The anniversary
          event was not just a launch or a reading. It was a return to a room
          where history, family memory, and consequence still sit close together.
        </p>

        <p>
          For readers, the book offers a way into the documented history and the
          human cost behind the headlines: not simply how the robbery was done,
          but what followed when the money, the fear, and the myth took hold.
        </p>

        <div className="not-prose mt-6 flex flex-wrap gap-3">
          <Link href="/order" className="btn">
            Order 11 Minutes
          </Link>
          <Link href="/great-bookie-robbery" className="btn">
            Explore the True Crime Archive
          </Link>
          <Link href="/media-kit" className="btn">
            Media &amp; Press
          </Link>
        </div>
      </article>
    </>
  );
}
