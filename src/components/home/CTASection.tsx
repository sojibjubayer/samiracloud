"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section 
      className="relative bg-slate-950 py-24 sm:py-32"
      aria-label="Final Call to Action"
    >
      {/* 1. Atmospheric Isolation: Large, very faint glows that bleed out of the container */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-150 w-full -translate-x-1/2 -translate-y-1/2 bg-blue-600/3 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. Visual Weight: The 'Floating Glass' Container */}
        <div className="relative overflow-hidden rounded-[3rem] border border-white/8 bg-white/1 px-8 py-20 shadow-2xl sm:px-16 sm:py-24">
          
          {/* 3. Internal Glows: These stay inside the border to create depth */}
          <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-pink-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Eyebrow with specialized styling */}
            <div className="mb-8 flex justify-center">
              <span className="flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                <Zap size={12} className="fill-pink-500/20" />
                Available for Projects in Qatar
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl lg:leading-[1.1]">
              Ready to scale your <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-blue-400 via-blue-100 to-pink-400 bg-clip-text text-transparent">
                digital presence?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              From high-performance SEO foundations to bespoke digital systems, we build 
              the infrastructure that <span className="text-white">Qatar&apos;s leading businesses</span> deserve.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              {/* Premium Main Button */}
              <Link
                href="/contact"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-10 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:scale-[1.03] active:scale-95 sm:w-auto"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              {/* Secondary Capability Link */}
              <Link
                href="/services"
                className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                Our Capabilities 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 4. The 'Digital Texture': A very subtle grid mask */}
          <div className="absolute inset-0 -z-10 opacity-[0.04] mask-[radial-gradient(ellipse_at_center,white,transparent)]">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40V.5H40" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}