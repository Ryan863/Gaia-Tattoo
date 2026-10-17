"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { BRAND, FEATURED_REVIEWS, SHORT_REVIEWS, type Review } from "@/lib/data";
import Reveal from "./Reveal";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
      ))}
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  // Lista duplicada para loop contínuo (-50%); a cópia fica oculta para leitores de tela.
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[...items, ...items].map((r, i) => (
          <figure
            key={`${r.author}-${i}`}
            aria-hidden={i >= items.length}
            className="w-72 shrink-0 rounded-sm border border-white/5 bg-stone-900 p-5 md:w-80"
          >
            <blockquote className="text-sm font-light leading-relaxed text-paper/80">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-mute">
              — {r.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(SHORT_REVIEWS.length / 2);
  return (
    <Reveal
      as="section"
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="overflow-hidden bg-ink py-24 md:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <header className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-gold md:text-xs">
              Quem já passou por aqui
            </p>
            <h2
              id="avaliacoes-title"
              data-reveal
              className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-paper md:text-8xl"
            >
              A cidade
              <br />
              <span className="text-paper/40">fala por nós.</span>
            </h2>
          </div>
          <div data-reveal className="flex items-center gap-4">
            <Stars />
            <p className="text-xs font-light uppercase tracking-[0.25em] text-mute">
              Mais de +170 avaliações no Google
            </p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_REVIEWS.map((r) => (
            <figure
              key={r.author}
              data-reveal
              className="flex flex-col justify-between gap-8 rounded-sm border border-white/5 bg-stone-900 p-7 transition-colors duration-500 hover:border-gold/30 md:p-8"
            >
              <div className="flex flex-col gap-5">
                <Stars />
                <blockquote className="text-base font-light leading-relaxed text-paper/90">
                  “{r.text}”
                </blockquote>
              </div>
              <figcaption className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div data-reveal className="mt-4 flex flex-col gap-4">
        <MarqueeRow items={SHORT_REVIEWS.slice(0, half)} />
        <MarqueeRow items={SHORT_REVIEWS.slice(half)} reverse />
      </div>

      <div data-reveal className="mt-12 flex justify-center px-5 md:mt-16">
        <a
          id="reviews-maps"
          href={BRAND.mapsReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-light uppercase tracking-[0.24em] text-paper backdrop-blur-sm transition-colors hover:border-white/60"
        >
          Ver todas as avaliações no Google Maps
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Reveal>
  );
}
