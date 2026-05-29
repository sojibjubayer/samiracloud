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
  MapPin,
  CheckCircle2,
  PhoneCall,
  Layers3,
  Cpu,
  Building2,
} from "lucide-react";

const values = [
  {
    title: "Business-First Thinking",
    desc: "We design websites and systems around real business workflows, customer handling, and daily operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Premium Execution",
    desc: "Every page, dashboard, and interface is built with a clean, polished, and professional digital experience.",
    icon: Sparkles,
  },
  {
    title: "Operational Simplicity",
    desc: "Our goal is to reduce manual work and help your team manage tasks, leads, reports, and customers more easily.",
    icon: Workflow,
  },
  {
    title: "Scalable Foundations",
    desc: "We build digital solutions that can start small and grow with your business requirements over time.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Web Development",
    desc: "Responsive business websites built for visibility, trust, SEO, and lead generation in Qatar.",
    icon: Globe,
  },
  {
    title: "Google Business Profile",
    desc: "Google Search and Maps profile setup to help local customers discover and contact your business.",
    icon: MapPin,
  },
  {
    title: "Immigration CRM",
    desc: "CRM systems for visa leads, client records, document tracking, payments, follow-ups, and reports.",
    icon: LayoutDashboard,
  },
  {
    title: "QR Attendance",
    desc: "QR-based attendance systems for staff check-in, check-out, break tracking, and monthly reports.",
    icon: QrCode,
  },
];

const highlights = [
  "Doha-based digital service support",
  "Mobile responsive design by default",
  "Built for real business operations",
  "Clean UI with practical workflow logic",
];

const capabilities = [
  {
    title: "Business Websites",
    text: "Premium websites for service companies, consultancies, restaurants, and growing businesses.",
  },
  {
    title: "Internal Dashboards",
    text: "Admin panels and dashboards for managing staff, leads, reports, and business activity.",
  },
  {
    title: "Custom CRM Systems",
    text: "Lead management, client tracking, role-based access, payment records, and reporting tools.",
  },
  {
    title: "Local Visibility",
    text: "Google Business Profile setup and digital structure to support better local discovery.",
  },
];

export default function AboutClient() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300 backdrop-blur sm:text-sm">
                Digital Systems Partner in Qatar
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                We build digital solutions that help businesses{" "}
                <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
                  work smarter
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Samira Cloud is a Qatar-based digital service provider focused
                on premium websites, Google Business Profile setup, custom CRM
                systems, QR attendance platforms, and internal business tools
                for modern companies.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/4 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/8 sm:w-auto"
                >
                  Start a Project
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/4 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <span className="text-sm leading-6 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="rounded-4xl border border-white/10 bg-white/4 p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-blue-400/40 hover:bg-white/5"
                      >
                        <div className="mb-4 inline-flex rounded-2xl bg-white/6 p-3 text-blue-300">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h2 className="text-base font-bold text-white">
                          {item.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-5">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <div>
                    <p className="text-sm font-bold text-white">
                      Built for Qatar businesses
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Supporting businesses in Doha, Lusail, Al Wakrah, Al
                      Rayyan, and companies serving customers across Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="border-b border-white/10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                About Samira Cloud
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                More than design — we focus on useful business systems
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
                <p>
                  We help businesses move from scattered manual work to cleaner,
                  more organized digital workflows. Whether it is a website,
                  CRM, attendance system, or local Google profile, our focus is
                  practical business improvement.
                </p>

                <p>
                  Every solution is planned around how your team works, how your
                  customers contact you, and how your business needs to grow.
                  The result is a digital setup that looks premium and supports
                  real operations.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/4 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/8"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-white/6"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-white/6 p-3 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white/2 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              What we help with
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Digital support for visibility, workflow, and growth
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
              Our services are designed for businesses that want a stronger
              online presence and better internal control without unnecessary
              complexity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6"
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Simple process, clear execution
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                We keep the process structured so your project can move from
                idea to launch with clear planning and practical delivery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "Understand",
                  text: "We review your business, service goals, workflow, and current challenges.",
                },
                {
                  step: "02",
                  title: "Plan",
                  text: "We define the page structure, system modules, user flow, and key functionality.",
                },
                {
                  step: "03",
                  title: "Build",
                  text: "We design and develop a responsive solution with clean UI and practical logic.",
                },
                {
                  step: "04",
                  title: "Improve",
                  text: "We refine the solution based on real business usage and future requirements.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6"
                >
                  <span className="text-sm font-black text-blue-300">
                    {item.step}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 sm:py-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Ready to upgrade your digital setup?
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let’s build the right digital solution for your business
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Whether you need a website, Google Business Profile setup,
                  Immigration CRM, QR attendance system, or custom internal
                  software, Samira Cloud can help you plan and build it.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Start a Project
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/3 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/8"
                >
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}