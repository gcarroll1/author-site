'use client';
export default function GalleryFigure({ thumb, full, alt, caption }: { thumb: string; full: string; alt: string; caption: string }) {
  return (
    <figure className="cursor-zoom-in">
      <button
        type="button"
        onClick={() => (window as any).__openLightbox?.(full, alt)}
        className="block w-full"
        aria-label={alt}
        title="Click to enlarge"
      >
        <img
          src={thumb}
          alt={alt}
          className="rounded-lg hover:scale-105 transition-transform max-w-[300px] md:max-w-[400px] w-auto h-auto mx-auto"
          loading="lazy"
        />
      </button>
      <figcaption className="text-xs text-neutral-400 mt-1 text-center">{caption}</figcaption>
    </figure>
  );
}