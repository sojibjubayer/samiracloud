"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  BarChart3,
  Users,
  Workflow,
  ShieldCheck,
  PhoneCall,
  MapPin,
  Clock3,
  Database,
} from "lucide-react";


const features = [
  "Lead capture and enquiry tracking",
  "Sales pipeline and deal stage management",
  "Follow-up reminders and task automation",
  "Customer profile and communication history",
  "Quotation and invoice workflow support",
  "Role-based staff access and dashboards",
  "Reports for leads, sales, and team performance",
  "WhatsApp, email, and contact form integration",
];

const industries = [
  "Consultancy firms",
  "Visa and immigration businesses",
  "Real estate agencies",
  "Trading and services companies",
  "Healthcare and clinics",
  "Education and training centers",
  "Field sales teams",
  "Maintenance and support businesses",
];

const faqs = [
  {
    q: "What is a CRM system?",
    a: "A CRM system helps your business manage leads, customers, follow-ups, communication history, and reporting from one place.",
  },
  {
    q: "Do you build custom CRM systems in Qatar?",
    a: "Yes. We build custom CRM platforms for businesses in Doha and across Qatar based on your workflow, team roles, and reporting needs.",
  },
  {
    q: "Can the CRM work on mobile and desktop?",
    a: "Yes. The CRM interface is fully responsive and designed to work across desktop, tablet, and mobile devices.",
  },
  {
    q: "Can you integrate WhatsApp or web forms?",
    a: "Yes. We can connect your CRM with website forms, WhatsApp enquiry flows, and internal follow-up processes.",
  },
  {
    q: "Is this suitable for small businesses in Qatar?",
    a: "Yes. We can build lean CRM systems for small teams as well as larger multi-user platforms with permissions and reporting.",
  },
];

export default function CrmsystemsClient() {

  return (
    <>

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(236,72,153,0.14),transparent_30%),linear-gradient(to_bottom,#eff6ff,white)]">
          <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                  CRM Software Development in Qatar
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Custom CRM Systems for Businesses in Qatar
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Manage leads, customers, follow-ups, staff workflows, and
                  reports from one smart platform. We build modern CRM systems
                  in Qatar for businesses that want better control, faster
                  response times, and stronger sales operations.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Get CRM Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Explore Other Services
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    "Doha-focused business workflows",
                    "Fully responsive admin panels",
                    "Scalable custom CRM architecture",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                    >
                      <p className="text-sm font-medium text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-100">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: <Users className="h-5 w-5 text-blue-600" />,
                        title: "Lead Management",
                        text: "Track enquiries, sources, assignments, and follow-ups in one place.",
                      },
                      {
                        icon: <Workflow className="h-5 w-5 text-pink-600" />,
                        title: "Sales Workflow",
                        text: "Move prospects through clear deal stages with reminders and status updates.",
                      },
                      {
                        icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
                        title: "Reporting Dashboard",
                        text: "View performance, lead conversion, and team activity with live reports.",
                      },
                      {
                        icon: <ShieldCheck className="h-5 w-5 text-pink-600" />,
                        title: "Role Permissions",
                        text: "Control access for admins, sales staff, support teams, and managers.",
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="mb-3 inline-flex rounded-xl bg-white p-3 shadow-sm">
                          {card.icon}
                        </div>
                        <h2 className="text-base font-semibold text-slate-900">
                          {card.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-blue-200 bg-white px-4 py-3 shadow-lg sm:block">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-slate-500">Centralized Data</p>
                      <p className="text-sm font-semibold text-slate-900">
                        Leads, Clients, Tasks, Reports
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 top-8 hidden rounded-2xl border border-pink-200 bg-white px-4 py-3 shadow-lg lg:block">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-pink-600" />
                    <div>
                      <p className="text-xs text-slate-500">Faster Response</p>
                      <p className="text-sm font-semibold text-slate-900">
                        Better Follow-up Flow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why businesses need CRM
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Stop losing leads in WhatsApp chats, notebooks, and spreadsheets
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A proper CRM system gives your business one structured place to
              manage enquiries, assign work, monitor team activity, and close
              more deals consistently.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Missed Follow-ups",
                text: "Never forget callbacks, renewals, or pending enquiries again.",
              },
              {
                title: "Scattered Customer Data",
                text: "Store customer history, tasks, notes, and status in one system.",
              },
              {
                title: "Weak Team Visibility",
                text: "See who is handling leads, which deals are active, and what needs action.",
              },
              {
                title: "No Clear Reporting",
                text: "Measure growth using lead reports, pipeline reports, and staff dashboards.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  What’s included
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built for sales, service, and customer operations
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Your CRM can be tailored for enquiry handling, internal task
                  flow, customer lifecycle management, and performance tracking.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                      <span className="text-sm leading-6 text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-2xl font-semibold text-white">
                  Ideal for businesses across Qatar
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We design CRM systems for different operational models, from
                  sales-focused companies to service-driven businesses.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-slate-200"
                    >
                      {industry}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-blue-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Service Coverage
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Doha, Al Rayyan, Lusail, Al Wakrah and businesses
                        serving clients across Qatar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How we build your CRM system
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We review your current workflow, enquiry sources, users, and business goals.",
              },
              {
                step: "02",
                title: "Planning",
                text: "We define modules, lead stages, forms, reports, and staff permissions.",
              },
              {
                step: "03",
                title: "Development",
                text: "We build a responsive CRM interface with secure role-based access.",
              },
              {
                step: "04",
                title: "Launch & Support",
                text: "We test, deploy, and refine the CRM based on real business usage.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-700">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                FAQs
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                CRM Systems Qatar — Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-4xl bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Ready to streamline your business?
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Get a custom CRM system designed for your Qatar business
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Build a CRM platform that helps your team manage leads,
                  customers, tasks, service requests, and reporting with less
                  manual work and better visibility.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
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
    </>
  );
}