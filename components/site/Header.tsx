"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CTA_URL, NAV_LINKS } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" aria-label="Woofi — voltar ao topo">
          <Logo priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-all hover:scale-[1.03] hover:bg-ink-soft sm:inline-flex"
          >
            Cadastre sua Agência
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-paper lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {open ? (
        <nav
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-brand px-5 py-3.5 text-center font-semibold text-white"
              >
                Cadastre sua Agência
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
