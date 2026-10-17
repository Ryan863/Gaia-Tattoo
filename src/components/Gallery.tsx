"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  "Biossegurança em cada procedimento",
  "Ambiente intimista e acolhedor",
  "Inclusivo, com personalidade única",
];

export default function Gallery() {
  return (
    <Reveal
      as="section"
      id="galeria"
      aria-labelledby="galeria-title"
      className="bg-stone-950 px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-12 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p data-reveal className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-gold md:text-xs">
              O espaço
            </p>
            <h2
              id="galeria-title"
              data-reveal
              className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-paper md:text-8xl"
            >
              Onde a arte
              <br />
              <span className="text-paper/40">encontra a mesa.</span>
            </h2>
          </div>
          <ul data-reveal className="flex flex-col gap-3 md:col-span-5 md:items-end">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-light text-mute">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-gold/50 text-gold">
                  <Check className="h-3 w-3" strokeWidth={2} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </header>

        {/* Grid técnico assimétrico */}
        <div className="grid auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[16rem] md:grid-cols-12 md:gap-4">
          <figure data-reveal className="group relative col-span-2 row-span-2 overflow-hidden md:col-span-8 md:row-span-2">
            <Image
              src="/assets/hero-desktop.png"
              alt="Estúdio de tatuagem do Gaia com duas estações de trabalho, mesa de sinuca e bar ao fundo"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-[70%_50%] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Estúdio · Convivência
            </figcaption>
          </figure>

          <figure data-reveal className="group relative col-span-1 row-span-2 overflow-hidden md:col-span-4 md:row-span-2">
            <Image
              src="/assets/hero-mobile.png"
              alt="Tatuagem em andamento com o bar iluminado em âmbar ao fundo"
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Sessão ao vivo
            </figcaption>
          </figure>

          <figure data-reveal className="group relative col-span-1 overflow-hidden md:col-span-4">
            <Image
              src="/assets/piercing.jpg"
              alt="Joias de piercing premium organizadas em bandeja"
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Joias
            </figcaption>
          </figure>

          <figure data-reveal className="group relative col-span-2 overflow-hidden md:col-span-8">
            <Image
              src="/assets/sinuca.jpg"
              alt="Amigos jogando sinuca em frente ao palco de música ao vivo"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Sinuca · Karaokê · Shows
            </figcaption>
          </figure>

          <figure data-reveal className="group relative col-span-2 overflow-hidden md:col-span-4">
            <Image
              src="/assets/bar.jpg"
              alt="Cerveja gelada, caipirinha e shot azul sobre o balcão rústico do bar"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-[50%_65%] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Bar · Disco Voador
            </figcaption>
          </figure>

          <figure data-reveal className="group relative col-span-2 overflow-hidden md:col-span-8">
            <Image
              src="/assets/tattoo.jpg"
              alt="Detalhe de tatuagem em blackwork sendo executada com luvas pretas"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-[50%_55%] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-[10px] uppercase tracking-[0.3em] text-paper/80">
              Blackwork · Detalhe
            </figcaption>
          </figure>
        </div>
      </div>
    </Reveal>
  );
}
