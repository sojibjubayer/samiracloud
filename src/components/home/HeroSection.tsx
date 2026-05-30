import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const highlights = [
  "Built for Qatar businesses",
  "Mobile responsive by default",
  "SEO-focused digital structure",
];

const heroStats = [
  {
    label: "Websites",
    value: "SEO Ready",
  },
  {
    label: "CRM",
    value: "Custom Built",
  },
  {
    label: "Google Maps",
    value: "Local Setup",
  },
  {
    label: "Attendance",
    value: "QR System",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] pb-14 pt-28 text-white sm:pb-18 sm:pt-24 lg:pb-24 lg:pt-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-152 w-152 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />

        <svg className="h-full w-full opacity-20">
          <pattern
            id="hero-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300 backdrop-blur-md sm:px-4 sm:text-[11px]">
            <Sparkles size={14} className="shrink-0 text-cyan-300" />
            <span className="truncate">Business Digital Services in Qatar</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.1]">
            Business Software & <br className="hidden sm:block" />
            <span className="text-blue-500">Web Development</span> Services in{" "}
            <span className="bg-linear-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Qatar
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg md:leading-8">
            Grow your business with professional websites, Google Business
            Profile setup, Immigration CRM systems, and staff attendance
            software built for companies in Doha and across Qatar.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl sm:w-auto sm:text-sm"
              >
                <CheckCircle2 size={15} className="shrink-0 text-blue-400" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row sm:items-center">
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
        </div>
      </div>

      <div className="relative left-1/2 mt-10 w-screen max-w-375 -translate-x-1/2 px-4 sm:mt-12 sm:px-6 lg:mt-14 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 p-2 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:rounded-4xl sm:p-3">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.35rem] sm:aspect-video sm:rounded-3xl lg:aspect-[16/7.8]">
              <Image
                src="/images/samira-cloud-digital-services-hero.webp"
                alt="Samira Cloud digital services hero showing website, Google Business Profile, Immigration CRM, and QR attendance solutions in Qatar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 94vw, 1500px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#020617]/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/4 p-3 text-center backdrop-blur-xl sm:p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <footer className="mt-10 border-t border-white/5 pt-6 sm:mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <span className="w-full text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 sm:w-auto sm:text-left">
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
              ),
            )}
          </div>
        </footer>
      </div>
    </section>
  );
}
