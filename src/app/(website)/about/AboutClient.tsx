"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Workflow,
  LayoutDashboard,
  QrCode,
  Globe,
  BriefcaseBusiness,
  Palette,
} from "lucide-react";

const VALUES = [
  {
    title: "Business-First Thinking",
    desc: "We build around real workflow, real teams, and real operational needs instead of generic templates.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Premium Execution",
    desc: "From design quality to system structure, every part of the experience is made to feel polished and clear.",
    icon: Sparkles,
  },
  {
    title: "Operational Simplicity",
    desc: "We help businesses reduce manual work through smarter digital structure and custom internal tools.",
    icon: Workflow,
  },
  {
    title: "Reliable Foundations",
    desc: "We focus on practical, scalable, and secure digital solutions that businesses can grow with confidently.",
    icon: ShieldCheck,
  },
];

const PILLARS = [
  {
    title: "Web Development",
    desc: "Responsive business websites built for visibility, trust, and lead generation in the Qatar market.",
    icon: Globe,
  },
  {
    title: "CRM Systems",
    desc: "Custom platforms for lead handling, follow-ups, and workflow management.",
    icon: LayoutDashboard,
  },
  {
    title: "QR Attendance",
    desc: "Modern staff attendance solutions with QR check-in and admin visibility.",
    icon: QrCode,
  },
  {
    title: "Digital Branding",
    desc: "Premium online presence and modern brand positioning for business growth.",
    icon: Palette,
  },
];

export default function AboutClient() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Dynamic Background Blurs */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-208 w-full overflow-hidden">
        <div className="absolute -left-20 -top-32 h-136 w-136 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute left-[5%] top-0 h-96 w-[24rem] rounded-full bg-pink-500/5 blur-[110px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pb-20 pt-32 md:pt-40 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                  Digital Systems Partner • Doha
                </span>
              </div>

              <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl xl:text-7xl xl:leading-[1.05]">
                Building digital systems that help businesses{" "}
                <span className="bg-linear-to-r from-blue-400 via-blue-200 to-pink-500 bg-clip-text text-transparent">
                  operate better
                </span>
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Samira Cloud is a Doha-based digital partner focused on premium
                websites, custom CRM systems, and branding solutions for modern businesses in Qatar.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-95"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/8"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Right Side Info Cards - Improved Responsiveness */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Premium business websites",
                "Custom CRM platforms",
                "QR-based attendance",
                "Digital branding",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/3 p-5 transition-colors hover:border-blue-500/40"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">
                    {item}
                  </p>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-white/5 py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What makes Samira Cloud different
              </h2>
              <div className="mt-6 h-1 w-24 rounded-full bg-linear-to-r from-blue-600 to-pink-500" />
              
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-400">
                <p>
                  We do not just build pages. We build digital
                  systems that support how a business actually works day to day.
                </p>
                <p>
                  Our goal is to help businesses in Qatar move with more
                  structure, better presentation, and stronger operational
                  confidence.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 transition-colors hover:text-white"
                >
                  Discuss Your Project
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {VALUES.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-4xl border border-white/8 bg-white/2 p-8 transition-all duration-300 hover:bg-white/5"
                >
                  <item.icon className="mb-6 h-6 w-6 text-blue-500 group-hover:text-pink-500 transition-colors" />
                  <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="border-y border-white/5 bg-white/1 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Core Expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solutions for modern business operations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((item) => (
              <div
                key={item.title}
                className="group rounded-4xl border border-white/8 bg-white/3 p-8 transition duration-300 hover:-translate-y-1 hover:border-pink-500/20"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-white/4 p-3 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-b from-white/5 to-transparent p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to upgrade your digital infrastructure?
                </h2>
                <p className="mt-5 text-lg text-slate-400">
                  Join forward-thinking businesses in Doha using custom systems to scale operations and improve customer trust.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-transparent px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/5"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}