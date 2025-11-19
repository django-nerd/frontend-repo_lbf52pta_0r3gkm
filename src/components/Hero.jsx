import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-slate-950" aria-label="MedLink Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/30 px-3 py-1 text-xs font-medium mb-4">Healthcare • AI • Access</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">Your connected health hub</h1>
            <p className="mt-4 text-lg text-slate-200 max-w-xl">Book care, manage records, learn with multimedia guides, check medicines, and use AI tools to assess risk and symptoms — all in one trusted platform.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 transition-colors">Get care now</a>
              <a href="#ai" className="inline-flex items-center gap-2 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 text-white px-5 py-3 transition-colors">Try AI tools</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  );
}
