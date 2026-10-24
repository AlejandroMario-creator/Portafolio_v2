import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section id="proyectos" className="section-rule scroll-mt-24">
      <div className="site-width py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">03 / Trabajo seleccionado</p>
            <h2 className="section-title mt-3">Proyectos</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">Proyectos de ejemplo. Sustituye contenido y enlaces por tu trabajo real.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group flex min-h-72 flex-col border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-mint">{project.number}</span>
                <span className="text-slate-600 transition group-hover:text-mint" aria-hidden="true">↗</span>
              </div>
              <h3 className="mt-8 font-display text-xl text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map((tech) => <li key={tech} className="font-mono text-[11px] text-slate-500">{tech}</li>)}
              </ul>
              <div className="mt-6 flex gap-5 border-t border-white/[0.08] pt-4 text-xs">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-mint">GitHub ↗</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-mint">Demo ↗</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}