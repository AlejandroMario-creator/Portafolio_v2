import { skillGroups } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="habilidades" className="section-rule scroll-mt-24">
      <div className="site-width py-20 md:py-28">
        <div className="mb-12">
          <p className="eyebrow">02 <span>/</span> Herramientas</p>
          <h2 className="section-title mt-3">Habilidades</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, skills }, index) => (
            <div key={title} className="skill-card group border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-mint/30 hover:bg-white/[0.04] sm:p-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-mint">0{index + 1}</p>
                <span className="skill-mark" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-base font-medium text-white">{title}</h3>
              <ul className="mt-5 space-y-3">
                {skills.map((skill) => <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400"><span className="h-1 w-1 rounded-full bg-mint/60" />{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}