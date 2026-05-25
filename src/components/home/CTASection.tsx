"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

export default function CTASection() {
  const services = [
    "Google Business Profile",
    "Premium Website",
    "Custom CRM",
    "QR Attendance",
    "Business Automation",
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32"
      aria-label="Final Call to Action"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem]">
          {/* Grid background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[36px_36px]" />
          </div>

          <div className="relative grid gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-16 xl:px-16 xl:py-20">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-pink-300">
                <Zap size={13} />
                Digital Growth Partner in Qatar
              </div>

              <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl lg:leading-[1.05]">
                Grow your business with{" "}
                <span className="bg-linear-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
                  smarter digital systems.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
                From Google Business Profile setup and local SEO to premium
                websites, CRM platforms, QR attendance systems, and internal
                business tools — Samira Cloud helps businesses in Qatar operate
                better and grow with confidence.
              </p>

              {/* Service chips */}
              <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {services.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-slate-200 shadow-sm"
                  >
                    <Sparkles size={12} className="text-pink-300" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 grid gap-3 sm:flex sm:justify-center lg:justify-start">
                <Link
                  href="/services/google-business-profile"
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-pink-500 to-violet-600 px-6 text-center text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-pink-950/30 transition hover:-translate-y-0.5 active:scale-95 sm:px-8"
                >
                  <span className="relative z-10">Google Profile — 199 QAR</span>
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white px-6 text-center text-xs font-black uppercase tracking-widest text-slate-950 transition hover:-translate-y-0.5 active:scale-95 sm:px-8"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Right premium contact card */}
            <div className="relative">
              <div className="mx-auto max-w-md rounded-4xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                      Quick Contact
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Let’s discuss your project
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-pink-500 text-white">
                    <MessageCircle size={22} />
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="https://wa.me/97471294020"
                    target="_blank"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/4 p-4 transition hover:border-green-400/30 hover:bg-green-400/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-300">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                          WhatsApp
                        </p>
                        <p className="text-base font-black text-white">
                          +974 7129 4020
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>

                  <Link
                    href="mailto:hello@samiracloud.com"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/4 p-4 transition hover:border-pink-400/30 hover:bg-pink-400/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-400/10 text-pink-300">
                        <BadgeCheck size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                          Business Email
                        </p>
                        <p className="truncate text-base font-black text-white">
                          hello@samiracloud.com
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                </div>

                <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/10 p-4">
                  <p className="text-sm leading-6 text-slate-300">
                    Perfect for small businesses, agencies, consultants,
                    restaurants, service companies, and growing teams in Qatar.
                  </p>
                </div>
              </div>

              {/* Decorative floating badge - hidden on small screens to avoid overlap */}
              <div className="pointer-events-none absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl lg:block">
                Fast Setup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}