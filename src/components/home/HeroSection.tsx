import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background Decor */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-160 w-220 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-[20rem] rounded-full bg-pink-500/5 blur-[100px]" />
        <svg className="h-full w-full opacity-20 gradient(ellipse_at_top,white,transparent_75%)]">
          <pattern
            id="hero-grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M50 0H0V50"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start">
          {/* Refined Badge: Honest & Professional */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md">
            <Sparkles size={14} className="text-pink-400" aria-hidden="true" />
            <span>Digital Solutions for Businesses in Qatar</span>
          </div>

          {/* Clean Heading with controlled line breaks */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Smart <span className="text-blue-500">Digital Solutions</span>{" "}
            <br />
            Built for{" "}
            <span className="bg-linear-to-r from-blue-400 via-pink-400 to-white bg-clip-text text-transparent">
              Qatar
            </span>
          </h1>

          {/* Natural Keyword Integration */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Helping businesses in Qatar grow through premium{" "}
            <span className="text-white font-medium text-opacity-90">
              Web Development
            </span>
            , custom{" "}
            <span className="text-white font-medium text-opacity-90">
              CRM Systems
            </span>
            , and modern{" "}
            <span className="text-white font-medium text-opacity-90">
              Attendance Systems
            </span>{" "}
            built for performance and business growth.
          </p>

          {/* Corrected Pricing List */}
          <ul
            className="mt-10 flex flex-wrap gap-4"
            aria-label="Service starting prices"
          >
            {[
              { name: "Web Development", price: "299" },
              { name: "CRM Systems", price: "999" },
              { name: "Attendance Systems", price: "399" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm"
              >
                <CheckCircle2
                  size={16}
                  className="text-blue-500"
                  aria-hidden="true"
                />
                <span>
                  {item.name}{" "}
                  <span className="ml-1 text-white">from {item.price} QAR</span>
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Group: Premium White & Glassy Secondary */}
{/* CTA Group: Refined for the "Samira Cloud" Premium Look */}
<div className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
  <Link
    href="/services"
    className="group relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-[0_15px_45px_rgba(37,99,235,0.35)] active:scale-[0.98] sm:w-auto"
  >
    <span className="relative z-10">Explore Services</span>

    <ArrowUpRight
      size={18}
      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>

  <Link
    href="/contact"
    className="group inline-flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/8 sm:w-auto"
  >
    <span className="transition-transform duration-300 group-hover:scale-[1.02]">
      Get Free Consultation
    </span>
  </Link>
</div>


          {/* Trust Footer */}
          <footer className="mt-20 w-full border-t border-white/5 pt-8">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Supporting businesses across
              </span>
              {["Doha", "Lusail", "Al Wakrah", "Msheireb"].map((city) => (
                <span
                  key={city}
                  className="text-xs font-extrabold tracking-widest text-slate-400/70 hover:text-blue-400 transition-colors"
                >
                  {city.toUpperCase()}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
