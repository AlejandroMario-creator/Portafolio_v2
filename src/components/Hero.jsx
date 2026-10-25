import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="inicio" className="site-width relative grid min-h-[calc(92svh-72px)] scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-24">
      <div className="hero-copy animate-rise">
        <p className="hero-kicker mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-mint">
          <span className="h-px w-8 bg-mint" /> {profile.university} <span className="hero-kicker-divider">/</span> {profile.cycle}
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.5rem]">
          {profile.name.split(" ")[0]}<br />
          <span className="hero-name-accent">{profile.name.split(" ").slice(1).join(" ")}</span><span className="text-mint">.</span>
        </h1>
        <p className="hero-role mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">{profile.role}</p>
        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↗</span></a>
          <a className="button-secondary" href="/CV.pdf" download>Descargar CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="hero-art animate-rise">
        <svg className="hero-scene" viewBox="0 0 600 500" role="img" aria-labelledby="hero-art-title hero-art-description">
          <title id="hero-art-title">El universo de trabajo de {profile.name}</title>
          <desc id="hero-art-description">Ilustración animada de una aplicación web en desarrollo, con capas de interfaz, lógica y datos.</desc>
          <defs>
            <linearGradient id="scene-screen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#29263a" />
              <stop offset="1" stopColor="#111620" />
            </linearGradient>
            <linearGradient id="scene-accent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffcd91" />
              <stop offset="1" stopColor="#f07854" />
            </linearGradient>
            <linearGradient id="scene-chart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2a06b" stopOpacity=".85" />
              <stop offset="1" stopColor="#f2a06b" stopOpacity=".05" />
            </linearGradient>
            <radialGradient id="scene-halo">
              <stop offset="0" stopColor="#eb825c" stopOpacity=".31" />
              <stop offset="1" stopColor="#eb825c" stopOpacity="0" />
            </radialGradient>
            <filter id="scene-shadow" x="-.3" y="-.3" width="1.8" height="1.8">
              <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
              <feOffset dy="18" />
              <feComponentTransfer><feFuncA type="linear" slope=".32" /></feComponentTransfer>
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <pattern id="scene-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0v24" fill="none" stroke="#f1c0a4" strokeOpacity=".09" strokeWidth="1" />
            </pattern>
          </defs>

          <ellipse className="scene-halo" cx="305" cy="253" rx="258" ry="215" fill="url(#scene-halo)" />
          <ellipse className="scene-orbit" cx="300" cy="250" rx="245" ry="183" transform="rotate(-19 300 250)" />
          <ellipse className="scene-orbit scene-orbit-back" cx="300" cy="250" rx="205" ry="228" transform="rotate(34 300 250)" />
          <circle className="scene-orbit-dot scene-dot-one" cx="83" cy="140" r="5" />
          <circle className="scene-orbit-dot scene-dot-two" cx="506" cy="358" r="4" />
          <circle className="scene-orbit-dot scene-dot-three" cx="434" cy="51" r="3" />
          <text x="38" y="79" className="scene-overline">MAR / 09</text>
          <text x="449" y="438" className="scene-overline scene-overline-end">BUILDING WITH INTENTION</text>

          <g className="scene-dashboard" filter="url(#scene-shadow)" transform="rotate(-7 300 244)">
            <rect x="103" y="92" width="400" height="291" rx="15" fill="#090d13" stroke="#f2a06b" strokeOpacity=".62" strokeWidth="1.5" />
            <rect x="108" y="97" width="390" height="281" rx="11" fill="url(#scene-screen)" />
            <path d="M108 132h390" stroke="#fff" strokeOpacity=".09" />
            <circle cx="128" cy="114" r="4" fill="#f07854" />
            <circle cx="143" cy="114" r="4" fill="#f2c57a" />
            <circle cx="158" cy="114" r="4" fill="#9bc68b" />
            <text x="182" y="118" className="scene-file">mario / portfolio</text>
            <rect x="123" y="151" width="78" height="210" rx="4" fill="#0c1119" />
            <circle cx="145" cy="176" r="12" fill="#f2a06b" fillOpacity=".2" stroke="#f2a06b" strokeOpacity=".7" />
            <text x="138" y="180" className="scene-logo">{profile.initials}</text>
            <path d="M135 207h47M135 221h37M135 235h42M135 275h40M135 289h33M135 303h44M135 337h35" className="scene-sidebar-line" />
            <circle cx="129" cy="207" r="2" fill="#f2a06b" />
            <circle cx="129" cy="275" r="2" fill="#9296b5" />
            <circle cx="129" cy="337" r="2" fill="#9296b5" />

            <text x="220" y="161" className="scene-kicker">PERSONAL DEV SPACE</text>
            <text x="220" y="185" className="scene-heading">De la idea</text>
            <text x="220" y="208" className="scene-heading scene-heading-accent">a una solución.</text>
            <rect x="411" y="151" width="68" height="25" rx="12" fill="#f2a06b" fillOpacity=".13" stroke="#f2a06b" strokeOpacity=".4" />
            <circle cx="424" cy="163" r="3" fill="#a5d69c" />
            <text x="432" y="167" className="scene-status">EN PROCESO</text>

            <rect x="218" y="225" width="123" height="61" rx="6" fill="#fff" fillOpacity=".045" stroke="#fff" strokeOpacity=".08" />
            <text x="230" y="241" className="scene-card-label">CAPAS CONECTADAS</text>
            <path d="M234 265h22m8 0h22m8 0h22" className="scene-flow-line" />
            <circle cx="234" cy="265" r="7" className="scene-flow-node" />
            <circle cx="264" cy="265" r="7" className="scene-flow-node scene-flow-node-hot" />
            <circle cx="294" cy="265" r="7" className="scene-flow-node" />
            <circle cx="324" cy="265" r="7" className="scene-flow-node" />
            <text x="230" y="268" className="scene-node-label">UI</text>
            <text x="258" y="268" className="scene-node-label">API</text>
            <text x="289" y="268" className="scene-node-label">DB</text>
            <text x="319" y="268" className="scene-node-label">+</text>

            <rect x="352" y="225" width="127" height="136" rx="6" fill="#fff" fillOpacity=".045" stroke="#fff" strokeOpacity=".08" />
            <text x="365" y="243" className="scene-card-label">FLUJO DEL SISTEMA</text>
            <path d="M365 331h101M365 308h101M365 285h101M365 262h101" className="scene-chart-grid" />
            <path d="M369 325 386 314 401 321 419 287 435 298 451 270 467 278v57H369Z" fill="url(#scene-chart)" className="scene-chart-fill" />
            <path d="m369 325 17-11 15 7 18-34 16 11 16-28 16 8" className="scene-chart-line" />
            <circle cx="467" cy="278" r="4" fill="#ffbd89" className="scene-chart-point" />

            <rect x="218" y="299" width="123" height="62" rx="6" fill="#10131b" stroke="#fff" strokeOpacity=".08" />
            <text x="231" y="317" className="scene-code-muted">const</text>
            <text x="263" y="317" className="scene-code-white">idea</text>
            <text x="285" y="317" className="scene-code-muted">=</text>
            <text x="297" y="317" className="scene-code-orange">{"{"}</text>
            <text x="231" y="334" className="scene-code-white">diseño</text>
            <text x="268" y="334" className="scene-code-muted">+</text>
            <text x="280" y="334" className="scene-code-white">lógica</text>
            <text x="231" y="351" className="scene-code-mint">return impacto;</text>
          </g>

          <g className="scene-chip scene-chip-react" transform="translate(12 224)">
            <rect width="104" height="44" rx="8" />
            <circle cx="20" cy="22" r="10" className="scene-chip-icon" />
            <text x="37" y="26">REACT</text>
          </g>
          <g className="scene-chip scene-chip-api" transform="translate(468 219)">
            <rect width="99" height="44" rx="8" />
            <path d="M15 22h13m-5-5 5 5-5 5" className="scene-chip-arrow" />
            <text x="39" y="26">API REST</text>
          </g>
          <g className="scene-chip scene-chip-db" transform="translate(410 382)">
            <rect width="104" height="44" rx="8" />
            <ellipse cx="21" cy="16" rx="8" ry="3" className="scene-db-icon" />
            <path d="M13 16v12c0 4 16 4 16 0V16m-16 6c0 4 16 4 16 0" className="scene-db-icon" />
            <text x="39" y="26">POSTGRES</text>
          </g>

          <g className="scene-sticker">
            <circle cx="490" cy="115" r="35" fill="#f2a06b" />
            <circle cx="490" cy="115" r="30" fill="none" stroke="#17121a" strokeOpacity=".3" strokeDasharray="2 4" />
            <text x="490" y="113" className="scene-sticker-main" textAnchor="middle">{profile.initials}</text>
            <text x="490" y="125" className="scene-sticker-sub" textAnchor="middle">UPN · IX</text>
          </g>
          <path className="scene-spark" d="m82 316 5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
          <path className="scene-spark scene-spark-small" d="m524 206 3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
        </svg>
      </div>
      <div className="hero-index" aria-hidden="true">
        <span>PORTAFOLIO PERSONAL</span>
        <span>INGENIERÍA <i>/</i> WEB</span>
        <span>{profile.university.toUpperCase()} <i>/</i> {profile.cycle.toUpperCase()}</span>
      </div>
    </section>
  );
}