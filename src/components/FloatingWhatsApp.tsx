"use client";

import { MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      id="floating-whatsapp"
      href={BRAND.whatsappHero}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento ou agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 md:bottom-8 md:right-8"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-gold/60" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-ink/90 text-gold shadow-2xl backdrop-blur-md transition-colors hover:border-gold hover:bg-gold hover:text-ink">
        <MessageSquare className="h-6 w-6" strokeWidth={1.5} />
      </span>
    </a>
  );
}
