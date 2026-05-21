const HERO_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1250664/2026-05-19/o25gciqaagoq/hero-smartwatch-banner.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden lg:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="SmartWatch Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-xl">
          <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Lançamento
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Smart<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Watch</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            Lançamentos com sistema de rastreamento de passos, batimento cardíaco, emparelhamento com seu celular, WhatsApp, notificações e muito mais.
          </p>
          <a
            href="#categorias"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110"
          >
            ACESSAR
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}