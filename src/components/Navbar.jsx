import { useState } from "react";
import { profile } from "../data/portfolio.js";

const links = [
  ["Sobre mí", "sobre-mi"],
  ["Habilidades", "habilidades"],
  ["Proyectos", "proyectos"],
  ["Contacto", "contacto"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
      <nav className="site-width flex h-[72px] items-center justify-between" aria-label="Navegación principal">
        <a className="flex items-center gap-3" href="#inicio" aria-label={`${profile.name}, inicio`}>
          <span className="brand-mark">{profile.initials}<span>/</span></span>
          <span className="flex flex-col">
            <span className="font-display text-sm font-semibold text-white">{profile.name}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">Ingeniería de sistemas</span>
          </span>
        </a>
        <button
          type="button"
          className="rounded px-3 py-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-mint md:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
        <div
          id="site-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-b border-white/10 bg-ink px-6 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-slate-400 transition hover:text-mint md:py-0"
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}