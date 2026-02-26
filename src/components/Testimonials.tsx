"use client";

import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/data/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < count ? 0 : 1.5}
          className={`h-5 w-5 ${
            i < count ? "text-gold" : "text-gold/30"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );

  const goPrev = useCallback(
    () =>
      setCurrent(
        (c) => (c - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  useEffect(() => {
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [goNext]);

  const t = testimonials[current];

  return (
    <section
      id="testimonios"
      className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-green-dark sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-terracotta" />
        </div>

        <div className="relative mt-12">
          {/* Testimonial card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
            <svg
              className="h-10 w-10 text-terracotta/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <p className="mt-4 text-lg leading-relaxed text-brown italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-green-dark">
                  {t.name}
                </p>
                <Stars count={t.rating} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream transition-colors hover:bg-terracotta-dark"
              aria-label="Testimonio anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === current
                      ? "w-8 bg-terracotta"
                      : "w-2.5 bg-terracotta/30"
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream transition-colors hover:bg-terracotta-dark"
              aria-label="Siguiente testimonio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
