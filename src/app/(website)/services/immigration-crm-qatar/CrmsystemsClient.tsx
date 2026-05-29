"use client";

import { useState } from "react";
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
  FileText,
  CreditCard,
  Globe2,
  UserCheck,
  SearchCheck,
  FolderCheck,
  RefreshCcw,
  ChevronDown,
} from "lucide-react";

const features = [
  "Immigration lead capture and enquiry tracking",
  "Visa application status management",
  "Client profile, passport, and Qatar ID record management",
  "Document checklist and file tracking",
  "Consultant assignment and follow-up reminders",
  "Payment, due amount, and refund tracking",
  "Country-wise visa processing reports",
  "Student visa, work visa, and visit visa workflow",
  "WhatsApp, email, and website form integration",
  "Role-based admin, consultant, and staff dashboards",
];

const industries = [
  "Immigration Consultancies",
  "Visa Consultancy Offices",
  "Student Visa Consultants",
  "Work Permit Agencies",
  "Travel Agencies",
  "Recruitment Agencies",
  "Education Consultants",
  "Business Setup Consultants",
];

const processSteps = [
  {
    step: "01",
    title: "Workflow Review",
    text: "We review your current visa consultancy process, lead sources, client stages, document flow, payment tracking, and consultant workflow.",
  },
  {
    step: "02",
    title: "CRM Planning",
    text: "We plan modules for leads, clients, visa status, documents, payments, refunds, consultants, reports, and admin permissions.",
  },
  {
    step: "03",
    title: "CRM Development",
    text: "We build a mobile-responsive Immigration CRM dashboard based on your real Qatar consultancy workflow.",
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "We test, launch, and improve the CRM after real staff usage so your team can manage cases more smoothly.",
  },
];

const faqs = [
  {
    q: "What is an Immigration Consultancy CRM System?",
    a: "An Immigration Consultancy CRM System helps visa consultants manage leads, clients, documents, payments, refunds, visa processing, follow-ups, consultant assignments, and reporting from one centralized platform.",
  },
  {
    q: "Do you build Immigration CRM systems in Qatar?",
    a: "Yes. We develop custom Immigration CRM software in Qatar for immigration consultants, student consultants, recruitment agencies, travel agencies, and visa processing companies.",
  },
  {
    q: "Can the CRM track visa application status?",
    a: "Yes. Applications can move through stages such as New Lead, Documents Pending, Assessment, Submitted, Under Process, Approved, Rejected, Visa Issued, or Refunded.",
  },
  {
    q: "Can I manage client documents in the CRM?",
    a: "Yes. You can manage passport copies, Qatar ID, photos, education certificates, experience letters, offer letters, visa documents, payment files, and other client records.",
  },
  {
    q: "Can the CRM track payments and refunds?",
    a: "Yes. The CRM can track total amount, paid amount, due amount, deductions, refunds, refund history, receipts, and client payment status.",
  },
  {
    q: "Is the Immigration CRM mobile responsive?",
    a: "Yes. The CRM is designed to work smoothly on desktop, tablet, and mobile devices for admins, consultants, and staff.",
  },
];

export default function CrmsystemsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-white text-slate-900 mt-10">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-linear(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-linear(circle_at_right,rgba(236,72,153,0.14),transparent_30%),linear-linear(to_bottom,#eff6ff,white)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:text-sm">
                Immigration CRM Software Development in Qatar
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Immigration Consultancy CRM System in Qatar
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Custom Immigration CRM Software in Qatar for visa consultants,
                immigration agencies, student consultants, recruitment agencies,
                and travel companies. Manage leads, clients, documents, visa
                status, payments, refunds, follow-ups, consultant performance,
                and reports from one secure CRM platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Get Immigration CRM Consultation
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
                  "Visa agency workflow",
                  "Mobile responsive dashboard",
                  "Lead to visa status tracking",
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
              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-100 sm:p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: <Users className="h-5 w-5 text-blue-600" />,
                      title: "Lead Management",
                      text: "Track immigration enquiries, lead sources, consultant assignments, and follow-ups.",
                    },
                    {
                      icon: <Workflow className="h-5 w-5 text-pink-600" />,
                      title: "Visa Pipeline",
                      text: "Move clients through stages like documents pending, submitted, processing, and approved.",
                    },
                    {
                      icon: <FileText className="h-5 w-5 text-blue-600" />,
                      title: "Document Tracking",
                      text: "Manage passport, Qatar ID, photos, certificates, offer letters, and visa documents.",
                    },
                    {
                      icon: <CreditCard className="h-5 w-5 text-pink-600" />,
                      title: "Payment Records",
                      text: "Track paid amount, due amount, refunds, receipts, and client balances.",
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
                      Leads, Clients, Visas, Payments
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-pink-200 bg-white px-4 py-3 shadow-lg lg:block">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-pink-600" />
                  <div>
                    <p className="text-xs text-slate-500">Fast Follow-up</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Better Visa Client Flow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SEO Content */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Immigration CRM Qatar
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Visa Consultancy CRM Software for Immigration Agencies in Qatar
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Samira Cloud builds custom Immigration Consultancy CRM Systems in
            Qatar for agencies that manage visa applications, student visa
            enquiries, work permit clients, visit visa cases, recruitment
            candidates, document collection, payments, refunds, and consultant
            follow-ups.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Instead of using spreadsheets, notebooks, and scattered WhatsApp
            chats, your team can manage the full immigration process from first
            enquiry to visa decision inside one organized CRM system.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <SearchCheck className="h-5 w-5 text-blue-600" />,
              title: "Lead Tracking",
              text: "Capture enquiries from website forms, WhatsApp, calls, ads, and walk-in clients.",
            },
            {
              icon: <UserCheck className="h-5 w-5 text-pink-600" />,
              title: "Consultant Flow",
              text: "Assign leads to consultants and monitor follow-ups, notes, and client progress.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
              title: "Secure Records",
              text: "Keep client profiles, passport data, visa documents, and payment details organized.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-pink-600" />,
              title: "Reports",
              text: "View lead conversion, consultant performance, pending cases, and payments.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-slate-50 p-3">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Why visa consultancies need CRM
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Stop losing immigration leads, documents, payments, and follow-ups
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Immigration businesses in Qatar handle many client details every
              day. Without a proper CRM, leads can be missed, documents can be
              scattered, payment records can become confusing, and consultants
              may not have clear visibility on pending cases.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Missed Visa Leads",
                text: "Track every enquiry from WhatsApp, calls, ads, website forms, and walk-in clients.",
              },
              {
                title: "Scattered Documents",
                text: "Keep passports, Qatar IDs, certificates, photos, and visa files organized by client.",
              },
              {
                title: "Weak Follow-up Control",
                text: "Assign consultants, set reminders, and monitor communication history.",
              },
              {
                title: "Payment Confusion",
                text: "Track total amount, paid amount, due amount, deductions, and refund history.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">
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

      {/* Features */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                What’s included
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for immigration, visa, and consultancy operations
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Your CRM can be tailored for immigration lead management, visa
                processing workflow, client document tracking, consultant
                performance, payment records, refund history, and application
                reporting.
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

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
              <h3 className="text-2xl font-semibold text-white">
                Ideal for immigration businesses in Qatar
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                We design CRM systems for visa, immigration, recruitment,
                education, and consultancy businesses that need better client
                tracking and faster operations.
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
                      Doha, Al Rayyan, Lusail, Al Wakrah, Msheireb, and
                      immigration businesses serving clients across Qatar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 text-pink-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Visa Categories
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Work visa, student visa, visit visa, business visa,
                      Schengen visa, Canada visa, UK visa, Australia visa, and
                      other destination-based visa services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Modules */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            CRM modules
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Everything your immigration team needs in one dashboard
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              title: "Lead & Client Module",
              text: "Manage new leads, converted clients, consultant ownership, notes, follow-ups, and enquiry sources.",
            },
            {
              icon: <FolderCheck className="h-5 w-5 text-pink-600" />,
              title: "Document Module",
              text: "Create country-wise document checklists and track missing, received, submitted, and approved documents.",
            },
            {
              icon: <Workflow className="h-5 w-5 text-blue-600" />,
              title: "Visa Status Pipeline",
              text: "Move applications through clear stages from enquiry to visa issued, rejected, withdrawn, or refunded.",
            },
            {
              icon: <CreditCard className="h-5 w-5 text-pink-600" />,
              title: "Payment & Refund Module",
              text: "Track total amount, paid amount, due amount, deductions, previous refund date, and next refund date.",
            },
            {
              icon: <RefreshCcw className="h-5 w-5 text-blue-600" />,
              title: "Follow-up Module",
              text: "Schedule callbacks, reminders, client updates, consultant tasks, and pending action alerts.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-pink-600" />,
              title: "Reports Module",
              text: "View consultant performance, lead conversion, active cases, pending payments, refunds, and country-wise reports.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-slate-50 p-3">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How we build your Immigration CRM system
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-700">
                  {item.step}
                </span>

                <h3 className="mt-3 text-xl font-semibold text-slate-950">
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

      {/* FAQ Collapse */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Immigration CRM Qatar — Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Common questions about our Immigration CRM system for visa
            consultants, immigration agencies, and consultancy businesses in
            Qatar.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-950 sm:text-lg">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-4xl bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Ready to build your CRM?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Get a custom Immigration CRM system designed for your Qatar
                consultancy
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Build a CRM platform that helps your immigration team manage
                leads, clients, documents, visa status, payments, refunds, and
                reports with better control and less manual work.
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}