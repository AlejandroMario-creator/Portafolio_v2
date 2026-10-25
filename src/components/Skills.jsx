import { skillGroups } from "../data/portfolio.js";
import TechIcon from "./TechIcon.jsx";

export default function Skills() {
  return (
    <section id="habilidades" className="section-rule scroll-mt-24">
      <div className="site-width py-20 md:py-28">
        <div className="mb-12">
          <p className="eyebrow">02 <span>/</span> Herramientas de trabajo</p>
          <h2 className="section-title mt-3">Tecnología con propósito.</h2>
        </div>
        <div className="skill-index">
          {skillGroups.map(({ title, skills }, index) => (
            <article key={title} className="skill-row">
              <div className="skill-row-heading">
                <span className="skill-category-index">0{index + 1} <i>/</i> CAPA</span>
                <h3>{title}</h3>
              </div>
              <ul className="skill-row-tools">
                {skills.map((skill) => (
                  <li key={skill} className="skill-tag">
                    <TechIcon name={skill} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <span className="skill-row-number" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}