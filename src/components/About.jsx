export default function About() {
  return (
    <section id="sobre-mi" className="section-rule scroll-mt-24">
      <div className="site-width grid gap-8 py-20 md:grid-cols-[0.72fr_1.28fr] md:py-28">
        <div>
          <p className="eyebrow">01 / Perfil</p>
          <h2 className="section-title mt-3">Sobre mí</h2>
        </div>
        <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-400">
          <p>Soy estudiante de Ingeniería de Sistemas en la UPN, enfocado en desarrollo web. Me motiva entender cómo encajan las piezas de un producto, desde la experiencia de usuario hasta los datos y servicios que lo sostienen.</p>
          <p>Trabajo con atención al código limpio, la arquitectura de software y la mantenibilidad. Busco crear soluciones útiles hoy, preparadas para crecer mañana.</p>
        </div>
      </div>
    </section>
  );
}