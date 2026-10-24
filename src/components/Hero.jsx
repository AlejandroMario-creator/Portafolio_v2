import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="inicio" className="site-width relative grid min-h-[calc(92svh-72px)] scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-24">
      <div className="hero-copy animate-rise">
        <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-mint">
          <span className="h-px w-8 bg-mint" /> Portafolio · Ingeniería & web
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.5rem]">
          {profile.name.split(" ")[0]}<br />
          <span className="hero-name-accent">{profile.name.split(" ").slice(1).join(" ")}</span><span className="text-mint">.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">{profile.role}</p>
        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
          En 9no ciclo, convirtiendo ideas en productos web claros y escalables con criterio de ingeniería.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
          <a className="button-secondary" href="/CV.pdf" download>Descargar CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="hero-art animate-rise" aria-label="Ilustración abstracta de desarrollo web" role="img">
        <div className="hero-orbit hero-orbit-outer" />
        <div className="hero-orbit hero-orbit-inner" />
        <div className="hero-orbit-core"><span>{profile.initials}</span></div>
        <span className="hero-spark hero-spark-one" />
        <span className="hero-spark hero-spark-two" />
        <div className="hero-float-card hero-float-top">
          <span className="hero-card-dot" />
          <span>IDEAS <span className="text-mint">→</span> PRODUCTO</span>
        </div>
        <div className="hero-code-card">
          <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-mint/70" />
            <span className="ml-auto font-mono text-[9px] text-slate-500">producto.jsx</span>
          </div>
          <div className="space-y-3 px-5 py-5 font-mono text-[11px] sm:text-xs">
            <p><span className="text-violet-300">const</span> <span className="text-sky-200">producto</span> <span className="text-slate-500">=</span> <span className="text-amber-200">{"{"}</span></p>
            <p className="pl-4 text-slate-400">diseño: <span className="text-mint">"intencional"</span>,</p>
            <p className="pl-4 text-slate-400">código: <span className="text-mint">"escalable"</span>,</p>
            <p className="pl-4 text-slate-400">impacto: <span className="text-mint">true</span></p>
            <p><span className="text-amber-200">{"}"}</span><span className="text-slate-500">;</span></p>
          </div>
          <div className="hero-code-progress"><span /></div>
        </div>
        <div className="hero-float-card hero-float-bottom">
          <span className="font-mono text-[10px] text-slate-500">ENFOQUE</span>
          <span className="text-sm text-white">Construir <span className="text-mint">mejor.</span></span>
        </div>
      </div>
    </section>
  );
}