import { profile } from "../data/portfolio.js";

export default function ContactFooter() {
  return (
    <>
      <section id="contacto" className="section-rule scroll-mt-24">
        <div className="site-width py-20 md:py-28">
          <div className="contact-panel grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-end md:p-14">
            <div>
              <p className="eyebrow">04 <span>/</span> Contacto</p>
              <h2 className="section-title mt-3">¿Tienes una idea en mente?</h2>
              <p className="max-w-sm text-base leading-7 text-slate-400">¿Tienes un proyecto o una oportunidad en mente? Escríbeme y hablemos.</p>
            </div>
            <a className="button-primary shrink-0" href={`mailto:${profile.email}`}>Enviar un correo <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/[0.07]">
        <div className="site-width flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex gap-5">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-mint">GitHub ↗</a>
            <a href={`mailto:${profile.email}`} className="hover:text-mint">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}