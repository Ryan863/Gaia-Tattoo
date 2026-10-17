"use client";

import { ArrowUpRight, ChevronUp, Clock, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react";
import { BRAND, HOURS, NAV_LINKS } from "@/lib/data";
import { Facebook, Instagram } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070606] text-paper">
      {/* Glow e granulação sutis de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-[48rem] rounded-full bg-gold/5 blur-[120px]" />
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Pre-Footer Banner Editorial */}
      <div className="relative border-b border-white/5 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold mb-6">
              <Sparkles className="h-3 w-3" />
              <span>Sua próxima parada em Rio do Sul</span>
            </div>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Arte permanente.
              <br />
              <span className="text-paper/40">Noites memoráveis.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-mute sm:text-base">
              Seja para tirar a tattoo dos sonhos do papel, colocar uma joia com máxima biossegurança ou juntar a galera para tomar uma cerveja trincando com sinuca e karaokê.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              id="footer-cta-whatsapp"
              href={BRAND.whatsappHero}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-paper px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink transition-all hover:bg-gold shadow-lg"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              <span>Orçar no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              id="footer-cta-maps"
              href={BRAND.mapsRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-light uppercase tracking-[0.24em] text-paper backdrop-blur-sm transition-colors hover:border-white/60"
            >
              <span>Como Chegar</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Grid de Navegação e Informações */}
      <div className="relative mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          
          {/* Coluna 1: Marca & Manifesto */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex flex-col">
              <span className="font-display text-4xl tracking-[0.16em] text-paper">
                GAIA
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-gold -mt-1 font-medium">
                Tattoo, Piercing &amp; Bar
              </span>
            </div>

            <p className="text-sm font-light leading-relaxed text-mute">
              O ponto de encontro da arte, da música e da cena alternativa em Rio do Sul. Estúdio autoral com biossegurança rigorosa e o bar mais descontraído da cidade.
            </p>

            {/* Status de Funcionamento */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-light tracking-wide text-paper/90">
                Terça a Sábado: 14h às 02h
              </span>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${BRAND.instagramHandle}`}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-light tracking-wide text-paper/80 transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
              >
                <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>{BRAND.instagramHandle}</span>
              </a>

              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Gaia"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-paper/80 transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:pl-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-paper/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#experiencias"
                  className="inline-block text-paper/70 transition-colors hover:text-gold"
                >
                  Experiências
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              O que temos
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs font-light text-paper/70">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Tatuagens Autorais &amp; Sob Medida</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Piercing &amp; Joias em Ouro e Titânio</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Cerveja Trincando &amp; Caipirinhas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Famoso Shot &quot;Disco Voador&quot;</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Mesa de Sinuca / Bilhar Oficial</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>Karaokê &amp; Noites com Música ao Vivo</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Onde Estamos & Contato */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              Visite o Gaia
            </h3>

            <div className="flex flex-col gap-4 text-xs font-light leading-relaxed text-paper/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <address className="not-italic">
                  {BRAND.addressLine1}
                  <br />
                  {BRAND.addressLine2}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <a href={BRAND.whatsappHero} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    {BRAND.whatsappDisplay} (WhatsApp)
                  </a>
                  <a href={`tel:${BRAND.phoneTel}`} className="hover:text-gold transition-colors text-mute">
                    {BRAND.phoneDisplay} (Fixo)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span>{HOURS[0].day}: {HOURS[0].time}</span>
                  <span className="text-mute">{HOURS[1].day}: {HOURS[1].time}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tipografia de Marca Gigante em Fundo */}
        <div className="relative mt-20 pt-8 select-none overflow-hidden text-center">
          <p
            aria-hidden="true"
            className="font-display text-[clamp(4.5rem,22vw,19rem)] uppercase leading-[0.78] tracking-tighter text-white/[0.03]"
          >
            GAIA TATTOO
          </p>
        </div>

        {/* Linha Inferior com Copyright e Botão Voltar ao Topo */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] font-light tracking-[0.2em] text-mute sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-paper/40 uppercase tracking-widest">
              +18 · Beba com moderação
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Voltar ao início da página"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-widest text-paper/70 transition-all hover:border-gold/50 hover:text-gold"
            >
              <span>Topo</span>
              <ChevronUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
