import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Globe2,
  Code2,
  Users,
  Clock3,
} from "lucide-react";

const services = [
  { name: "Google Business Profile", price: "199", icon: Globe2 },
  { name: "Web Development", price: "299", icon: Code2 },
  { name: "Custom CRM System", price: "999", icon: Users },
  { name: "Staff Attendance & Payroll", price: "399", icon: Clock3 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-0 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

        <svg className="h-full w-full opacity-20">
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300 backdrop-blur-md sm:px-4 sm:text-[11px]">
            <Sparkles size={14} className="shrink-0 text-cyan-300" />
            <span className="truncate">Business Digital Services in Qatar</span>
          </div>

          <h1 className="text-[2.55rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Web Development &{" "}
            <span className="text-blue-500">Business Software</span>
            <br className="hidden sm:block" /> Services in{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Qatar
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg md:text-xl md:leading-8">
            Grow your business in Qatar with Google Business Profile setup,
            professional website development, custom CRM systems, and staff
            attendance & payroll software.
          </p>

          <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/20 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h2 className="text-sm font-bold leading-snug text-white sm:text-base">
                    {item.name}
                  </h2>

                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={15} className="shrink-0 text-blue-400" />
                    From{" "}
                    <span className="font-bold text-white">
                      {item.price} QAR
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98] sm:h-14 sm:w-auto sm:px-7 sm:text-sm"
            >
              Explore Services
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-13 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:h-14 sm:w-auto sm:px-7 sm:text-sm"
            >
              Free Consultation
            </Link>
          </div>

          <footer className="mt-14 border-t border-white/5 pt-6 sm:mt-16">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="w-full text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 sm:w-auto">
                Serving businesses in
              </span>

              {["Doha", "Lusail", "Al Wakrah", "Msheireb", "Qatar"].map(
                (city) => (
                  <span
                    key={city}
                    className="text-[11px] font-extrabold tracking-widest text-slate-400/70 transition-colors hover:text-blue-400 sm:text-xs"
                  >
                    {city.toUpperCase()}
                  </span>
                )
              )}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}