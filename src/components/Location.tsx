"use client";

import { Clock, MapPin, Navigation, Phone, MessageSquare } from "lucide-react";
import { BRAND, HOURS } from "@/lib/data";
import { Facebook, Instagram } from "./Icons";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <Reveal
      as="section"
      id="contato"
      aria-labelledby="contato-title"
      className="bg-stone-950 px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p data-reveal className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-gold md:text-xs">
            Venha nos visitar
          </p>
          <h2
            id="contato-title"
            data-reveal
            className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-paper md:text-7xl"
          >
            Abrimos
            <br />
            <span className="text-paper/40">quando a noite acorda.</span>
          </h2>

          <dl className="mt-12 flex flex-col gap-8">
            <div data-reveal className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="flex-1">
                <dt className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-mute">Horário</dt>
                {HOURS.map((h) => (
                  <dd
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 border-b border-white/5 py-3 text-sm font-light"
                  >
                    <span className="text-paper/80">{h.day}</span>
                    <span className={h.open ? "text-paper" : "text-mute"}>{h.time}</span>
                  </dd>
                ))}
              </div>
            </div>

            <div data-reveal className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <dt className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-mute">Endereço</dt>
                <dd>
                  <address className="text-sm font-light not-italic leading-relaxed text-paper/80">
                    {BRAND.addressLine1}
                    <br />
                    {BRAND.addressLine2}
                  </address>
                </dd>
              </div>
            </div>

            <div data-reveal className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <dt className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-mute">Contato</dt>
                <dd className="flex flex-col gap-1 text-sm font-light text-paper/80">
                  <a href={BRAND.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    WhatsApp {BRAND.whatsappDisplay}
                  </a>
                  <a href={`tel:${BRAND.phoneTel}`} className="hover:text-gold">
                    Fixo {BRAND.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              id="location-route"
              href={BRAND.mapsRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-paper px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.75} />
              Traçar rota
            </a>
            <a
              id="location-whatsapp"
              href={BRAND.whatsappHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-light uppercase tracking-[0.24em] text-paper backdrop-blur-sm transition-colors hover:border-white/60"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>

          <div data-reveal className="mt-8 flex items-center gap-3">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${BRAND.instagramHandle}`}
              id="social-instagram"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-light tracking-wide text-paper/80 transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              {BRAND.instagramHandle}
            </a>
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Gaia"
              id="social-facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-paper/80 transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div data-reveal className="md:col-span-7">
          <div className="relative h-[24rem] overflow-hidden rounded-sm border border-white/5 md:h-full md:min-h-[34rem]">
            <iframe
              title="Mapa: Gaia Tattoo, Piercing & Bar — R. Pres. Kennedy, 383, Rio do Sul"
              src={BRAND.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 opacity-80 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_hue-rotate(180deg)]"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
