import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-5 pb-28 pt-16 md:px-10 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-[90rem]">
        <p
          aria-hidden="true"
          className="font-display select-none text-[clamp(5rem,26vw,24rem)] uppercase leading-[0.8] tracking-tight text-white/[0.04]"
        >
          Gaia
        </p>
        <div className="mt-10 flex flex-col gap-4 text-[11px] font-light uppercase tracking-[0.22em] text-mute md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {BRAND.name}</p>
          <p>
            {BRAND.addressLine1} · Rio do Sul - SC
          </p>
          <p>+18 · Beba com moderação</p>
        </div>
      </div>
    </footer>
  );
}
