"use client";

import Image from "next/image";
import { ArrowUpRight, Flame, Music, ShieldCheck, Sparkles, Wine } from "lucide-react";
import { BRAND } from "@/lib/data";
import Reveal from "./Reveal";

const SERVICES = [
  {
    id: "tattoo",
    icon: Sparkles,
    kicker: "01 — Estúdio",
    title: "Estúdio de Tattoo",
    text: "Sessões exclusivas, criações autorais com foco no detalhe e na autenticidade. Orçamentos sob medida para a sua ideia.",
    tags: ["Autoral", "Sob medida"],
    tagIcon: Flame,
    image: "/assets/tattoo.jpg",
    alt: "Tatuador de luvas pretas desenhando uma mandala em blackwork no antebraço",
    cta: "Orçar tatuagem",
  },
  {
    id: "piercing",
    icon: ShieldCheck,
    kicker: "02 — Estúdio",
    title: "Piercing & Joias",
    text: "Aplicação profissional, biossegurança e catálogo de joias de alta qualidade em ouro e titânio.",
    tags: ["Biossegurança", "Joias premium"],
    tagIcon: ShieldCheck,
    image: "/assets/piercing.jpg",
    alt: "Joias de piercing em ouro e titânio sobre bandeja de veludo preto",
    cta: "Agendar piercing",
  },
  {
    id: "bar",
    icon: Wine,
    kicker: "03 — Bar",
    title: "Bar & Entretenimento",
    text: "Cervejas trincando, drinks autorais (shot Disco Voador), sinuca, karaokê e música boa.",
    tags: ["Disco Voador", "Sinuca & karaokê"],
    tagIcon: Music,
    image: "/assets/bar.jpg",
    alt: "Balcão de bar com cerveja gelada, caipirinha e shot sob luz âmbar e neon",
    cta: "Reservar mesa",
  },
] as const;

export default function Services() {
  return (
    <Reveal
      as="section"
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-ink px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-14 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-gold md:text-xs">
              O que fazemos
            </p>
            <h2
              id="servicos-title"
              data-reveal
              className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-paper md:text-8xl"
            >
              Três focos.
              <br />
              <span className="text-paper/40">Uma casa.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-sm font-light leading-relaxed text-mute md:text-base">
            Do primeiro traço ao último brinde: tattoo, piercing e bar sob o
            mesmo teto, em um ambiente acolhedor e inclusivo.
          </p>
        </header>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/5 bg-white/5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              data-reveal
              className="group relative flex flex-col bg-stone-900 transition-colors duration-500 hover:bg-[#211e1b]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-80 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
                <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 text-gold backdrop-blur-sm">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-mute">{s.kicker}</p>
                <h3 className="font-display text-3xl uppercase tracking-wide text-paper md:text-4xl">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-mute">{s.text}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/70"
                    >
                      <s.tagIcon className="h-3 w-3 text-ember" strokeWidth={1.75} />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={BRAND.whatsappHero}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`servico-${s.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-paper transition-colors hover:text-gold"
                >
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
