import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroSection() { 
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white pt-32 pb-20 lg:pt-48">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-150 w-250 -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-50/50 to-pink-50/30 blur-3xl" />
      <div className="absolute top-20 right-10 -z-10 h-64 w-64 animate-pulse rounded-full bg-blue-100/20 blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Badge with Pink Accent */}
          <div className="mb-8 flex animate-fade-in items-center gap-2 rounded-full border border-pink-200/50 bg-pink-50/50 px-4 py-1.5 text-sm font-semibold text-pink-600 backdrop-blur-sm">
            <Sparkles size={14} />
            <span className="tracking-wide">Trusted Digital Partner in Qatar</span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Smart Websites & <br />
            <span className="bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Digital Growth 
            </span> Systems
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Samira Cloud engineers SEO-ready platforms, custom CRMs, and intelligent 
            business tools specifically crafted for the thriving market in <span className="font-semibold text-black">Doha and across Qatar.</span>
          </p>

          {/* Buttons with Hover Effects */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/services"
              className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
            >
              Explore Services
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/demos"
              className="rounded-2xl border border-gray-200 bg-white/50 px-8 py-4 text-base font-bold text-gray-900 backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-gray-50 active:scale-95"
            >
              View Demos
            </Link>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="mt-16 flex items-center gap-8 border-t border-gray-100 pt-8 grayscale opacity-70">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Powering growth in</p>
            <span className="text-sm font-bold text-gray-600">DOHA</span>
            <span className="text-sm font-bold text-gray-600">LUSAIL</span>
            <span className="text-sm font-bold text-gray-600">AL RAYYAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}