"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      // Transparente no topo; fundo preto/80 + blur somente após 80px de rolagem.
      ScrollTrigger.create({
        start: 80,
        end: "max",
        toggleClass: { targets: headerRef.current, className: "nav-solid" },
      });

      gsap.from("[data-nav-item]", {
        opacity: 0,
        y: -12,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.2,
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-[background-color,backdrop-filter,border-color] duration-500 [&.nav-solid]:border-white/5 [&.nav-solid]:bg-black/80 [&.nav-solid]:backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-10">
        <a
          href="#inicio"
          data-nav-item
          aria-label="Gaia Tattoo, Piercing & Bar — início"
          className="font-display text-2xl tracking-[0.18em] text-paper"
        >
          GAIA
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-nav-item
              className="group relative py-1 text-[11px] font-light uppercase tracking-[0.28em] text-paper/70 transition-colors hover:text-paper"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsappHero}
            target="_blank"
            rel="noopener noreferrer"
            data-nav-item
            id="nav-whatsapp"
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[11px] font-light uppercase tracking-[0.24em] text-paper backdrop-blur-sm transition-colors hover:border-white/60 sm:inline-flex"
          >
            Orçamento
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <button
            type="button"
            id="nav-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-paper backdrop-blur-sm md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col justify-between bg-black/95 px-6 pb-10 pt-8 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display flex items-baseline gap-4 border-b border-white/5 py-4 text-4xl uppercase tracking-wide text-paper"
            >
              <span className="text-xs font-light tracking-widest text-gold">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={BRAND.whatsappHero}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 py-4 text-xs uppercase tracking-[0.28em] text-paper"
        >
          Pedir orçamento no WhatsApp
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </header>
  );
}
