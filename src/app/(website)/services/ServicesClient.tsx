"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  QrCode,
  Workflow,
  BarChart3,
  Layers3,
  PhoneCall,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

const primaryServices = [
  {
    title: "Web Development",
    href: "/services/web-development",
    status: "Available",
    cta: "View Details",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    description:
      "Premium business websites built for branding, visibility, speed, SEO, and lead generation.",
    points: [
      "Responsive premium UI",
      "SEO-friendly structure",
      "Fast page performance",
      "WhatsApp & contact integration",
    ],
  },
  {
    title: "Google Business Profile Setup",
    href: "/contact",
    status: "Available",
    cta: "Get Setup",
    icon: <MapPin className="h-6 w-6 text-pink-600" />,
    description:
      "Google Business Profile setup and optimization to help your business appear on Google Search and Maps in Qatar.",
    points: [
      "Google Maps listing setup",
      "Business profile optimization",
      "Photos, services & contact setup",
      "Local visibility improvement",
    ],
  },
  {
    title: "Immigration CRM Systems",
    href: "/services/immigration-crm-qatar",
    status: "Available",
    cta: "View Details",
    icon: <LayoutDashboard className="h-6 w-6 text-blue-600" />,
    description:
      "Custom CRM platforms for visa leads, client records, document tracking, payments, follow-ups, and reporting.",
    points: [
      "Lead & client management",
      "Visa status workflow",
      "Document tracking",
      "Payment & refund reports",
    ],
  },
  {
    title: "QR Attendance Systems",
    href: "/services/attendance-systems",
    status: "Available",
    cta: "View Details",
    icon: <QrCode className="h-6 w-6 text-pink-600" />,
    description:
      "QR-based attendance solution for staff check-in, check-out, break monitoring, and admin reports.",
    points: [
      "QR attendance marking",
      "Break time tracking",
      "Monthly reporting",
      "Mobile-friendly access",
    ],
  },
];

const extendedServices = [
  {
    title: "Business Automation",
    icon: <Workflow className="h-6 w-6 text-pink-600" />,
    description:
      "Custom workflow systems to simplify repetitive business processes and reduce manual operational work.",
  },
  {
    title: "Admin Dashboards",
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    description:
      "Centralized dashboards for internal monitoring, staff operations, reports, and business visibility.",
  },
  {
    title: "Custom Internal Systems",
    icon: <Layers3 className="h-6 w-6 text-pink-600" />,
    description:
      "Tailored internal tools built around your exact workflow, business model, and team structure.",
  },
];

const whyChooseUs = [
  {
    icon: <Sparkles className="h-5 w-5 text-blue-600" />,
    title: "Premium Look & Feel",
    text: "Modern interfaces designed to feel polished, clean, and high-value.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-pink-600" />,
    title: "Business-First Thinking",
    text: "Every system is built around real usage, not just visual design.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-blue-600" />,
    title: "Scalable Solutions",
    text: "Start small, then expand into deeper systems as your business grows.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5 text-pink-600" />,
    title: "Built for Operations",
    text: "Useful for daily business work, team management, and internal efficiency.",
  },
];

const faqs = [
  {
    q: "What services does Samira Cloud offer?",
    a: "Samira Cloud provides web development, Google Business Profile setup, CRM systems, QR attendance systems, admin dashboards, business automation solutions, and custom internal business tools.",
  },
  {
    q: "Do you provide Google Business Profile setup in Qatar?",
    a: "Yes. We help businesses in Qatar set up and optimize their Google Business Profile so customers can find them on Google Search and Google Maps.",
  },
  {
    q: "Do all services have separate detail pages?",
    a: "Not always. Some services already have dedicated detail pages, while others are offered as tailored custom solutions based on business requirements.",
  },
  {
    q: "Can you build a custom system for my business workflow?",
    a: "Yes. We can design and build custom internal systems based on your operational needs, staff process, and business goals.",
  },
  {
    q: "Are these services suitable for businesses in Qatar?",
    a: "Yes. Our services are designed for companies in Doha and across Qatar, with responsive modern interfaces and practical business use in mind.",
  },
];

export default function ServicesClient() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_right,rgba(236,72,153,0.14),transparent_28%),linear-gradient(to_bottom,#f8fbff,white)]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:text-sm">
              Business Digital Services in Qatar
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Modern Digital Services for Growing Businesses
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              From premium websites and Google Business Profile setup to
              internal business systems, Samira Cloud delivers practical digital
              solutions designed to improve visibility, operations, customer
              handling, and daily workflow management.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/services/immigration-crm-qatar"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                Immigration CRM Qatar
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Premium business websites",
              "Google Business Profile setup",
              "Immigration CRM platforms",
              "QR-based attendance systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur"
              >
                <p className="text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Core services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Explore our main solution areas
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              These are the main digital solutions businesses usually start
              with. Each one is built to support real operations, improve local
              visibility, and create a stronger online presence.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {primaryServices.map((service) => (
            <div
              key={service.title}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-sky-400 to-pink-500" />

              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="inline-flex rounded-2xl bg-slate-50 p-3">
                  {service.icon}
                </div>

                <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                  {service.status}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-sm leading-6 text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={service.href}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended Services */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Additional capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More tailored solutions for internal operations
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Some services are delivered as custom-built solutions based on the
              exact workflow, reporting, automation, and management needs of
              your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {extendedServices.map((service) => (
              <div
                key={service.title}
                className="flex min-h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex w-fit rounded-2xl bg-slate-50 p-3">
                  {service.icon}
                </div>

                <div className="mb-3 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Custom Solution
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-blue-600"
                  >
                    Discuss Your Requirements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Why businesses choose us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Practical systems with a premium experience
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              We focus on combining clear business logic with polished,
              responsive design, so the final product feels strong both visually
              and operationally.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Built for real business workflows",
                "Responsive on mobile, tablet, and desktop",
                "Designed to grow with your operations",
                "Modern premium visual direction",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm leading-6 text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-slate-50 p-3">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Services — Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-[34px] bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Need a tailored business solution?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s plan the right service for your business
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Whether you need a website, Google Business Profile setup, CRM,
                QR attendance system, or a custom internal business tool, Samira
                Cloud can help you shape a solution around your real workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Request a Quote
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}