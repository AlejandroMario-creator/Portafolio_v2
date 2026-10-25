import { profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="sobre-mi" className="section-rule scroll-mt-24">
      <div className="site-width grid gap-8 py-20 md:grid-cols-[0.72fr_1.28fr] md:py-28">
        <div>
          <p className="eyebrow">01 <span>/</span> Fuera del código</p>
          <h2 className="section-title mt-3">Entender antes de construir.</h2>
        </div>
        <div className="about-panel">
          <p className="about-panel-label">MI FORMA DE TRABAJAR</p>
          <div className="about-copy max-w-3xl space-y-5 text-base leading-8 text-slate-400">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}