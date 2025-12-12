'use client';
import GalleryFigure from "@/components/GalleryFigure";

const KW = [
  "australian crime novel true story",
  "melbourne gangland history",
  "1970s organised crime australia",
  "australian noir thriller",
  "true crime fiction australian heist",
  "books like underbelly true crime",
  "gritty crime novel based on true events",
  "11 Minutes",
  "A Crime novel",
  "Gregory M Carroll",
];

const altFor = (base: string) => `${base} — ${KW[0]}, Melbourne 1976 crime gangs`;

export default function NoteSection({
  no,
  children,
  images = [],
  partIndex,
  links = [],
}: {
  no: number | string;
  children: React.ReactNode;
  images?: string[];
  partIndex: number;
  links?: string[];
}) {
  const n = Number.isFinite(Number(no)) ? Number(no) : 1;
  const bg = n % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900";

  return (
    <section
      className={`${bg} ring-1 ring-neutral-700/40 rounded-xl p-4 md:p-6 mt-6 flex flex-col md:flex-row md:items-start md:gap-6`}
    >
      <div className="flex-1">
        <p className="leading-relaxed">
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
