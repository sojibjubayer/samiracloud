"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function CTASection() {
  const services = [
    "Web Development",
    "Google Business Profile",
    "QR Attendance",
    "Immigration CRM System",
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 pt-20 pb-14 sm:py-20 lg:py-24"
      aria-label="Samira Cloud Call to Action"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 px-5 py-10 text-center shadow-2xl backdrop-blur-xl sm:rounded-[2.25rem] sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]" />
          </div>

          <div className="mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-pink-300 sm:px-4 sm:text-[10px]">
            <Sparkles size={13} className="shrink-0" />
            <span className="truncate">Samira Cloud Digital Solutions</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-[30px] font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to upgrade your business with a{" "}
            <span className="bg-linear-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
              smarter digital system?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We build premium websites, Google Business Profiles, QR attendance
            systems, and custom CRM solutions for businesses in Qatar.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {services.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold text-slate-300 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-9 grid w-full max-w-md gap-3 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-pink-500 to-violet-600 px-6 text-center text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-pink-950/30 transition hover:-translate-y-0.5 active:scale-95 sm:w-auto sm:px-8 sm:text-xs"
            >
              Get Free Consultation
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="https://wa.me/97471294020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 text-center text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-green-950/30 transition hover:-translate-y-0.5 hover:bg-green-400 active:scale-95 sm:w-auto sm:px-8 sm:text-xs"
              >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}