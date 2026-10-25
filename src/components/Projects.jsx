import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section id="proyectos" className="section-rule scroll-mt-24">
      <div className="site-width py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">03 <span>/</span> Arquitectura del proyecto</p>
            <h2 className="section-title mt-3">Proyectos destacados.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">{projects[0].context}</p>
        </div>
        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project.number} className="project-card group flex flex-col border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-mint/30 hover:bg-white/[0.035] sm:flex-row">
              <div
                className={`project-art${project.preview ? " project-art-preview" : ""}`}
                role="img"
                aria-label={project.preview ? `Vista previa de ${project.title}` : `Arquitectura de ${project.title}: ${project.architecture.join(", ")}`}
              >
                {project.preview ? (
                  <div className="project-preview">
                    <iframe src={project.preview} title={`Vista previa de ${project.title}`} loading="lazy" tabIndex="-1" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="project-architecture">
                    <p className="project-architecture-caption">MAPA DEL SISTEMA <span>/{project.number}</span></p>
                    <div className="project-architecture-flow">
                      {project.architecture.map((layer, index) => (
                        <div className="project-architecture-step" key={layer}>
                          <span className="project-architecture-number">0{index + 1}</span>
                          <span className="project-architecture-node">{layer}</span>
                          {index < project.architecture.length - 1 && <span className="project-architecture-connector" aria-hidden="true">↓</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="project-details flex flex-1 flex-col p-6 sm:p-7 lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-mint">{project.number} <span className="text-slate-600">/ PROYECTO</span></span>
                  <span className="text-slate-600 transition group-hover:text-mint" aria-hidden="true">↗</span>
                </div>
                <h3 className="mt-7 font-display text-xl text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
                {project.technologies.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => <li key={tech} className="border border-white/[0.08] px-2.5 py-1 font-mono text-[10px] text-slate-400">{tech}</li>)}
                  </ul>
                )}
                <div className="mt-6 flex gap-5 border-t border-white/[0.08] pt-4 text-xs">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-mint">GitHub ↗</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-mint">Demo ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}