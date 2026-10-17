"use client";

import { EXPERIENCES } from "@/lib/data";
import Reveal from "./Reveal";

export default function ExperienceBar() {
  return (
    <Reveal
      as="section"
      id="experiencias"
      aria-label="Experiências do Gaia"
      className="border-y border-white/5 bg-stone-950"
    >
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 md:grid-cols-4">
        {EXPERIENCES.map((e, i) => (
          <li
            key={e.top}
            data-reveal
            className={`flex flex-col gap-1 px-5 py-8 md:px-10 md:py-12 ${
              i % 2 === 1 ? "border-l border-white/5" : ""
            } ${i > 1 ? "border-t border-white/5 md:border-t-0" : ""} ${
              i > 0 ? "md:border-l md:border-white/5" : ""
            }`}
          >
            <span className="text-[10px] font-light tracking-[0.3em] text-gold">
              0{i + 1}
            </span>
            <span className="font-display text-xl uppercase leading-tight tracking-wide text-paper md:text-2xl">
              {e.top}
            </span>
            <span className="text-xs font-light tracking-wide text-mute md:text-sm">
              {e.bottom}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
