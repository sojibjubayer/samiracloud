import Link from "next/link";
import { demos } from "@/data/demos";

export default function DemoSection() {
  return (
    <section className="relative bg-slate-950 py-24 sm:py-32">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-pink-900/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-pink-500">
              Interactive Prototypes
            </h2>
            <h3 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Strategic <span className="text-blue-500">Concepts</span>
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              High-fidelity explorations for specialized industries, from bespoke 
              hospitality systems to precision consultancy platforms.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="h-px w-24 bg-linear-to-r from-blue-600 to-transparent" />
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.slug}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:bg-white/8 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]"
            >
              <div>
                {/* Category Tag */}
                <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pink-400">
                  {demo.category}
                </div>
                
                <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {demo.title}
                </h4>
                
                <p className="mt-4 text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                  {demo.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-10">
                <Link
                  href={`/demos/${demo.slug}`}
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:pr-8 active:scale-95"
                >
                  <span className="relative z-10">Launch Concept</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                  {/* Subtle hover fill for button */}
                  <div className="absolute inset-0 -translate-x-full bg-blue-50 transition-transform duration-300 group-hover/btn:translate-x-0" />
                </Link>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-blue-600/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}