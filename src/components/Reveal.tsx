"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
  /** Segundos entre elementos filhos `[data-reveal]` */
  stagger?: number;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * Wrapper que revela todos os descendentes `[data-reveal]` com
 * opacity 0 → 1 e y 24 → 0 (0.8s) ao entrar na viewport.
 * Respeita prefers-reduced-motion e limpa tudo via useGSAP/scope.
 */
export default function Reveal({
  children,
  className,
  as = "div",
  stagger = 0.12,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(items, { opacity: 0, y: 24 });
        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger,
              overwrite: true,
            }),
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  const Tag = as as "div";
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
