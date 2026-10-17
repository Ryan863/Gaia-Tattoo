"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ChevronDown, MessageSquare } from "lucide-react";
import { BRAND, HOURS } from "@/lib/data";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-bg]", { opacity: 0, scale: 1.12, duration: 2.2, ease: "power2.out" })
          .from("[data-hero-eyebrow]", { opacity: 0, y: 24, duration: 0.8 }, 0.4)
          .from("[data-hero-line]", { yPercent: 110, duration: 1.1, stagger: 0.14 }, 0.55)
          .from("[data-hero-sub]", { opacity: 0, y: 24, duration: 0.8 }, 1.2)
          .from("[data-hero-cta]", { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 }, 1.4)
          .from("[data-hero-corner]", { opacity: 0, duration: 1, stagger: 0.12 }, 1.7);

        gsap.to("[data-hero-scroll]", {
          y: 8,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      aria-label="Gaia Tattoo, Piercing & Bar"
      className="relative isolate flex min-h-svh w-screen items-end overflow-hidden bg-ink md:items-center"
    >
      {/* Background full-bleed 100vw — mobile 9:16 / desktop cinematográfico */}
      <div data-hero-bg className="absolute inset-0 -z-20">
        <picture>
          <source media="(min-width: 768px)" srcSet="/assets/hero-desktop.png" />
          <img
            src="/assets/hero-mobile.png"
            alt="Estúdio Gaia: tatuador trabalhando em primeiro plano, com bar iluminado e mesa de sinuca ao fundo"
            fetchPriority="high"
            decoding="async"
            className="hero-drift h-full w-full object-cover object-[50%_100%] md:object-[60%_50%]"
          />
        </picture>
      </div>

      {/* Mobile: terço superior escurecido + base para leitura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 via-35% to-transparent md:hidden" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-ink via-ink/75 to-transparent md:hidden" />
      {/* Desktop: máscara escura à esquerda para os títulos */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-ink via-ink/85 via-35% to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-gradient-to-t from-stone-950 to-transparent md:block" />
      <div className="grain absolute inset-0 -z-10" />

      {/* Cantos técnicos editoriais */}
      <p
        data-hero-corner
        className="absolute right-5 top-24 hidden text-right text-[10px] font-light uppercase leading-relaxed tracking-[0.3em] text-paper/50 md:right-10 md:top-28 md:block"
      >
        Est. Rio do Sul
        <br />
        SC — Brasil
      </p>
      <p
        data-hero-corner
        className="absolute bottom-8 right-5 hidden text-right text-[10px] font-light uppercase leading-relaxed tracking-[0.3em] text-paper/50 md:right-10 md:block"
      >
        {HOURS[0].day}
        <br />
        {HOURS[0].time}
      </p>

      <div className="mx-auto w-full max-w-[90rem] px-5 pb-28 pt-32 md:px-10 md:pb-0 md:pt-24">
        <p
          data-hero-eyebrow
          className="mb-6 text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] text-gold md:mb-8 md:text-xs"
        >
          Rio do Sul - SC <span className="mx-2 text-paper/30">|</span> Estúdio, Bar &amp; Entretenimento
        </p>

        <h1 className="font-display text-[clamp(3.25rem,13.5vw,5.5rem)] uppercase leading-[0.92] tracking-tight text-paper md:max-w-[52rem] md:text-[clamp(4.5rem,9vw,9.5rem)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-hero-line className="block">Arte na pele.</span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-hero-line className="block text-paper/90">
              Cultura na <span className="text-gold">noite.</span>
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-6 max-w-md text-sm font-light leading-relaxed text-mute md:mt-8 md:max-w-lg md:text-base"
        >
          O ponto de encontro da cena alternativa em Rio do Sul. Combinamos
          estúdio completo de tattoo e piercing com a energia única de bar,
          bilhar, karaokê e música ao vivo.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
          <a
            data-hero-cta
            id="hero-whatsapp"
            href={BRAND.whatsappHero}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-paper px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink transition-all hover:bg-gold"
          >
            <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
            Pedir orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            data-hero-cta
            id="hero-espaco"
            href="#galeria"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-light uppercase tracking-[0.24em] text-paper backdrop-blur-sm transition-colors hover:border-white/60"
          >
            Conhecer o espaço
          </a>
        </div>
      </div>

      <a
        href="#experiencias"
        aria-label="Rolar para baixo"
        data-hero-scroll
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-paper/60 md:block"
      >
        <ChevronDown className="h-5 w-5" strokeWidth={1.25} />
      </a>
    </section>
  );
}
