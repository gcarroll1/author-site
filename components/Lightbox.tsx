'use client';
import { useState, useCallback } from 'react';
export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState<string | null>(null);
  const show = useCallback((src: string, altText: string) => { setSrc(src); setAlt(altText); setOpen(true); }, []);
  const hide = useCallback(() => { setOpen(false); setSrc(null); setAlt(null); }, []);
  if (typeof window !== 'undefined') { (window as any).__openLightbox = show; }
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center" onClick={hide}>
      <img src={src || ''} alt={alt || ''} className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-lg" />
    </div>
  );
}