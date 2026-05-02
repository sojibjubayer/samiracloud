"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
      aria-label="Final Call to Action"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-152 w-full -translate-x-1/2 -translate-y-1/2 bg-blue-600/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/3 px-6 py-16 shadow-2xl sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-pink-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-pink-400">
                <Zap size={12} className="fill-pink-500/20" />
                Available for Businesses in Qatar
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Ready to grow your business{" "}
              <span className="bg-linear-to-r from-blue-400 via-blue-100 to-pink-400 bg-clip-text text-transparent">
                with smarter digital systems?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              From Google Business Profile setup and local SEO to premium
              websites, custom CRM platforms, QR-based attendance systems, and
              internal business tools, we create modern solutions that help
              companies grow faster and operate smarter in Qatar.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                "Google Business Profile",
                "Web Development",
                "CRM Systems",
                "QR Attendance",
                "Business Automation",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold tracking-wide text-slate-300"
                >
                  <Sparkles size={12} className="text-pink-400" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/services/google-business-profile"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-pink-500 to-violet-600 px-8 text-center text-xs font-black uppercase tracking-widest text-white transition-all hover:scale-[1.02] active:scale-95 sm:w-auto sm:px-10 sm:text-sm"
              >
                <span className="relative z-10">
                  Google Profile – 199 QAR
                </span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/contact"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-8 text-center text-xs font-black uppercase tracking-widest text-slate-950 transition-all hover:scale-[1.02] active:scale-95 sm:w-auto sm:px-10 sm:text-sm"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 -z-10 opacity-[0.04] mask-[radial-gradient(ellipse_at_center,white,transparent)]">
            <svg className="h-full w-full" fill="none" aria-hidden="true">
              <defs>
                <pattern
                  id="cta-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0 40V0.5H40" stroke="white" strokeWidth="1" />
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