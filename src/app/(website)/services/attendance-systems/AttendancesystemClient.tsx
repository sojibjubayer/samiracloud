"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Clock3,
  Smartphone,
  ShieldCheck,
  BarChart3,
  QrCode,
  Users,
  CalendarDays,
  LayoutDashboard,
  Coffee,
  FileSpreadsheet,
  PhoneCall,
  MapPin,
  ScanLine,
} from "lucide-react";

const coreFeatures = [
  "QR code check-in and check-out",
  "Mobile-based attendance marking",
  "Break time monitoring",
  "Admin dashboard with live attendance status",
  "Monthly attendance reports",
  "Staff-wise daily attendance logs",
  "Working hour calculation",
  "Late entry and early exit tracking",
  "Role-based access for admins and staff",
  "Secure attendance validation flow",
  "Responsive design for mobile and desktop",
  "Simple attendance history and filtering",
];

const featureCards = [
  {
    icon: <QrCode className="h-5 w-5 text-blue-600" />,
    title: "QR Check-In / Check-Out",
    text: "Staff can scan a QR code to mark attendance quickly without manual entry or paper-based tracking.",
  },
  {
    icon: <Coffee className="h-5 w-5 text-pink-600" />,
    title: "Break Time Monitoring",
    text: "Track break-out and break-in times to monitor total break duration for every staff member.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5 text-blue-600" />,
    title: "Admin Dashboard",
    text: "Admins can monitor attendance activity, staff logs, late entries, and daily records from one place.",
  },
  {
    icon: <FileSpreadsheet className="h-5 w-5 text-pink-600" />,
    title: "Monthly Reports",
    text: "Generate monthly attendance reports for staff-wise summaries, working hours, and attendance history.",
  },
];

const benefits = [
  {
    title: "Faster attendance marking",
    text: "QR scanning makes daily check-in and check-out faster for staff and easier for management.",
  },
  {
    title: "Less manual work",
    text: "Reduce spreadsheet work, manual entry mistakes, and scattered attendance records.",
  },
  {
    title: "Better team visibility",
    text: "Know who is present, on break, late, or checked out with a simple live dashboard.",
  },
  {
    title: "Mobile-friendly workflow",
    text: "Use the full attendance flow from mobile, tablet, or desktop with a responsive interface.",
  },
];

const useCases = [
  "Corporate offices",
  "Consultancy firms",
  "Agencies and service companies",
  "Sales and field teams",
  "Support and admin teams",
  "Healthcare offices",
  "Education teams",
  "Small and medium businesses",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Review",
    text: "We understand your attendance flow, staff roles, reporting needs, and QR-based access process.",
  },
  {
    step: "02",
    title: "System Planning",
    text: "We define the QR scan flow, admin dashboard, reports, staff records, and permissions.",
  },
  {
    step: "03",
    title: "Development",
    text: "We build a responsive QR attendance system with clean staff and admin experiences.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    text: "We test attendance marking, logs, reports, and dashboard behavior before launch.",
  },
];

const faqs = [
  {
    q: "What is a QR-based attendance system?",
    a: "A QR-based attendance system allows staff to scan a QR code to mark check-in, check-out, and attendance activity using a mobile-friendly interface.",
  },
  {
    q: "Do you build QR attendance systems in Qatar?",
    a: "Yes. We build custom QR-based attendance systems for offices, agencies, and teams in Doha and across Qatar.",
  },
  {
    q: "Can staff mark attendance using mobile phones?",
    a: "Yes. Staff can scan the QR code using their phones and access the attendance flow through a responsive mobile-friendly interface.",
  },
  {
    q: "Can admins see reports and staff logs?",
    a: "Yes. Admins can review daily logs, monthly reports, check-in and check-out records, and break monitoring from the dashboard.",
  },
  {
    q: "Is the QR attendance system suitable for office teams?",
    a: "Yes. It is suitable for offices, agencies, and businesses that want a simple and modern way to manage staff attendance.",
  },
];

export default function AttendancesystemClient() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(236,72,153,0.14),transparent_30%),linear-gradient(to_bottom,#eff6ff,white)]">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-28 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                QR-Based Attendance System in Qatar
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Smart QR Attendance System for Offices and Teams
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Simple and secure QR-based attendance system for businesses in
                Qatar. Staff can scan a QR code to check in and check out, while
                admins monitor attendance, break times, staff logs, and monthly
                reports from one smart dashboard.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Get Attendance System
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/services/crm-systems"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore Other Services
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "QR scan based attendance flow",
                  "Mobile-friendly staff access",
                  "Smart admin reporting dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-100">
                <div className="grid gap-4 sm:grid-cols-2">
                  {featureCards.map((card) => (
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
                  <ScanLine className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-500">Quick Marking</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Scan QR, Mark Attendance
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-pink-200 bg-white px-4 py-3 shadow-lg lg:block">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-pink-600" />
                  <div>
                    <p className="text-xs text-slate-500">Live Visibility</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Staff Time & Break Tracking
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
            Why QR attendance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A smarter way to manage staff attendance
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            QR-based attendance systems help businesses reduce manual work,
            improve attendance accuracy, and give admins a better view of staff
            activity in real time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
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
                Core features
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for daily staff attendance operations
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                This QR attendance system is designed for businesses that need
                simple scan-based attendance marking, clean staff logs, and
                practical reporting tools.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {coreFeatures.map((feature) => (
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
                Ideal for teams across Qatar
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We build attendance systems for modern businesses that need
                reliable staff tracking with simple QR-based access.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <div className="flex items-start gap-3">
                    <Smartphone className="mt-0.5 h-5 w-5 text-blue-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Mobile-Friendly Access
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Staff can access the attendance flow easily from their
                        phones with a responsive interface.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-pink-500/10 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-pink-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Service Coverage
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Doha, Al Rayyan, Lusail, Al Wakrah and businesses across
                        Qatar.
                      </p>
                    </div>
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
            Included modules
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Everything needed for a practical attendance workflow
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              title: "Staff Records",
              text: "Manage daily staff attendance records with a clean history view and date-based tracking.",
            },
            {
              icon: <CalendarDays className="h-5 w-5 text-pink-600" />,
              title: "Date Filters",
              text: "Review attendance by selected date, monthly period, or staff-wise reporting views.",
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              title: "Attendance Reports",
              text: "Track total attendance, working hours, break duration, and individual activity summaries.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-pink-600" />,
              title: "Admin Control",
              text: "Use role-based access to separate admin monitoring from staff attendance flow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-slate-50 p-3">
                {item.icon}
              </div>
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How we build your QR attendance system
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
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

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">
              Perfect for office-based QR attendance flow
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Staff scan a QR code, mark attendance, and the system updates
              check-in or check-out records. Admins get one centralized view for
              attendance logs, break records, and monthly reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            QR Attendance System Qatar — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Ready to simplify attendance tracking?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Get a QR-based attendance system for your business in Qatar
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Launch a smart attendance solution with QR check-in, check-out,
                staff logs, break monitoring, and reporting designed for your
                office workflow.
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
  );
}