"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
      ),
    []
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % galleryImages.length : null
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="galeria" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-green-dark sm:text-4xl">
            Galería
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-terracotta" />
          <p className="mt-4 text-lg text-brown">
            Un vistazo a nuestros platillos favoritos
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute right-4 top-4 text-3xl text-white/80 transition-colors hover:text-white"
            aria-label="Cerrar"
          >
            &times;
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-4xl text-white/80 transition-colors hover:text-white"
            aria-label="Anterior"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={galleryImages[lightboxIndex].width}
              height={galleryImages[lightboxIndex].height}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
            <p className="mt-2 text-center text-sm text-white/70">
              {galleryImages[lightboxIndex].alt}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-4xl text-white/80 transition-colors hover:text-white"
            aria-label="Siguiente"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
