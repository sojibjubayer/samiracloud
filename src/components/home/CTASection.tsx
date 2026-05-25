"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  DatabaseZap,
  MapPinned,
  MessageCircle,
  QrCode,
  Sparkles,
  Zap,
} from "lucide-react";

export default function CTASection() {
  const services = [
    {
      title: "Web Development",
      description: "Premium business websites and landing pages.",
      icon: Code2,
    },
    {
      title: "Google Business Profile",
      description: "Local visibility, profile setup, and SEO support.",
      icon: MapPinned,
    },
    {
      title: "QR Attendance System",
      description: "Smart attendance tracking for teams and offices.",
      icon: QrCode,
    },
    {
      title: "CRM System",
      description: "Custom client, lead, payment, and workflow systems.",
      icon: DatabaseZap,
    },
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 py-14 sm:py-20 lg:py-28"
      aria-label="Samira Cloud Call to Action"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[110px]" />
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem]">
          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative grid w-full gap-9 px-4 py-8 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-16 xl:px-16 xl:py-20">
            {/* Left content */}
            <div className="w-full min-w-0 text-center lg:text-left">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-pink-300 sm:px-4 sm:text-[10px]">
                <Zap size={12} className="shrink-0" />
                <span className="truncate">Digital Systems for Qatar Businesses</span>
              </div>

              <h2 className="mx-auto max-w-3xl text-[30px] font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl">
                Ready to build a smarter{" "}
                <span className="bg-linear-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
                  digital business system?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:mx-0">
                From premium websites and Google Business Profile setup to
                QR-based attendance systems and custom CRM platforms — Samira
                Cloud helps businesses in Qatar operate faster, look more
                professional, and manage work with confidence.
              </p>

              {/* Service badges */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-2xl">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-left transition hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-pink-300 ring-1 ring-white/10">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-black text-white">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Main CTA buttons */}
              <div className="mt-8 grid w-full gap-3 sm:mx-auto sm:max-w-md lg:mx-0 lg:flex lg:max-w-none">
                <Link
                  href="/contact"
                  className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-pink-500 to-violet-600 px-5 text-center text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-pink-950/30 transition hover:-translate-y-0.5 active:scale-95 sm:h-14 sm:text-xs lg:w-auto lg:px-7"
                >
                  Get Free Consultation
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="https://wa.me/97471294020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-center text-[11px] font-black uppercase tracking-widest text-slate-950 transition hover:-translate-y-0.5 active:scale-95 sm:h-14 sm:text-xs lg:w-auto lg:px-7"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            {/* Right card */}
            <div className="w-full min-w-0">
              <div className="mx-auto w-full max-w-md rounded-[1.5rem] border border-white/10 bg-slate-900/85 p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-6 lg:ml-auto">
                <div className="mb-5 flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                      Start Now
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                      Tell us what you want to build
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-pink-500 text-white sm:h-12 sm:w-12">
                    <Sparkles size={21} />
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="https://wa.me/97471294020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-green-400/30 hover:bg-green-400/10 sm:p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-300 sm:h-11 sm:w-11">
                        <MessageCircle size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                          WhatsApp
                        </p>
                        <p className="truncate text-sm font-black text-white sm:text-base">
                          +974 7129 4020
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="group flex w-full min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-pink-400/30 hover:bg-pink-400/10 sm:p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-400/10 text-pink-300 sm:h-11 sm:w-11">
                        <BadgeCheck size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                          Project Request
                        </p>
                        <p className="truncate text-sm font-black text-white sm:text-base">
                          Request a Quote
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                </div>

                <div className="mt-4 rounded-2xl border border-blue-400/15 bg-blue-400/10 p-4">
                  <div className="flex gap-3">
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />
                    <p className="text-sm leading-6 text-slate-300">
                      Ideal for companies that need a professional website,
                      stronger local presence, staff attendance tracking, or a
                      custom CRM to manage daily operations.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-2xl font-black text-white">4</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">
                      Core services
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-2xl font-black text-white">Qatar</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">
                      Business focused
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="h-1 w-full bg-linear-to-r from-pink-500 via-violet-500 to-blue-500" />
        </div>
      </div>
    </section>
  );
}