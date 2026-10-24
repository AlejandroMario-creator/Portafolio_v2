import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="inicio" className="site-width grid min-h-[calc(88svh-72px)] scroll-mt-24 items-center gap-16 py-24 lg:grid-cols-[1fr_0.72fr]">
      <div className="animate-rise">
        <p className="mb-7 flex items-center gap-3 text-sm text-mint">
          <span className="h-px w-8 bg-mint" /> Hola, soy
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.04] text-white sm:text-7xl">
          {profile.name}<span className="text-mint">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">{profile.role}</p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          En 9no ciclo, convirtiendo ideas en productos web claros y escalables con criterio de ingeniería.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
          <a className="button-secondary" href="/CV.pdf" download>Descargar CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="relative hidden min-h-72 border-l border-white/10 pl-8 lg:flex lg:flex-col lg:justify-center">
        <span className="absolute left-[-1px] top-0 h-16 w-px bg-mint" />
        <p className="font-mono text-xs uppercase text-slate-500">Enfoque actual</p>
        <p className="mt-5 max-w-sm font-display text-3xl leading-snug text-slate-200">Construir bien. <span className="text-slate-500">Resolver mejor.</span></p>
        <div className="mt-10 grid max-w-sm grid-cols-2 gap-y-5 text-sm">
          <span className="text-slate-500">Especialidad</span><span className="text-slate-200">Desarrollo web</span>
          <span className="text-slate-500">Formación</span><span className="text-slate-200">9no ciclo</span>
          <span className="text-slate-500">Interés</span><span className="text-slate-200">Software escalable</span>
        </div>
      </div>
    </section>
  );
}