import { skillGroups } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="habilidades" className="section-rule scroll-mt-24">
      <div className="site-width py-20 md:py-28">
        <div className="mb-12">
          <p className="eyebrow">02 / Herramientas</p>
          <h2 className="section-title mt-3">Habilidades</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map(({ title, skills }, index) => (
            <div key={title} className="border-t border-white/15 pt-5">
              <p className="font-mono text-xs text-mint">0{index + 1}</p>
              <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
              <ul className="mt-5 space-y-3">
                {skills.map((skill) => <li key={skill} className="text-sm text-slate-400">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}