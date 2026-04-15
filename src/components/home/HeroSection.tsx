import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroSection() { 
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* Premium Background Visuals - Consistency with Demo/CTA sections */}
      <div className="absolute top-0 left-1/2 -z-10 h-150 w-200 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-100 w-100 rounded-full bg-pink-600/10 blur-[120px]" />
      
      {/* Subtle Grid Pattern for Technical Feel */}
      <div className="absolute inset-0 -z-10 opacity-20 mask-[radial-gradient(ellipse_at_center,white,transparent)]">
        <svg className="h-full w-full" fill="none">
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0V60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Badge with Pink Accent */}
          <div className="mb-8 flex animate-fade-in items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 backdrop-blur-md">
            <Sparkles size={12} />
            <span>Premium Digital Systems in Qatar</span>
          </div>

          {/* SEO-Boosted Heading */}
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            Engineering <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          {/* Subtext with Local SEO Keywords */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Samira Cloud builds high-performance <span className="text-white">SEO-ready websites</span>, 
            bespoke <span className="text-white">CRM systems</span>, and automated business tools 
            tailored for the luxury and commercial sectors in <span className="text-blue-400 font-semibold">Doha, Qatar.</span>
          </p>

          {/* Buttons with Premium Interactions */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">
            <Link
              href="/services"
              className="group relative flex h-16 items-center gap-3 overflow-hidden rounded-2xl bg-white px-10 text-base font-black uppercase tracking-widest text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">Start Building</span>
              <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 -translate-x-full bg-blue-50 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>

            <Link
              href="/demos"
              className="group flex h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-10 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-blue-500/50"
            >
              Experience Demos
            </Link>
          </div>

          {/* Local Authority Indicators (SEO Signals) */}
          <div className="mt-20 w-full lg:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-white/5 pt-10 lg:justify-start">
              <p className="w-full text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 lg:w-auto">
                Supporting Enterprise in
              </p>
              <span className="text-xs font-black tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-default">DOHA</span>
              <span className="text-xs font-black tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-default">LUSAIL</span>
              <span className="text-xs font-black tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-default">AL WAKRAH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}