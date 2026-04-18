"use client";

import Link from "next/link";
import {
  Check,
  ArrowRight,
  Monitor,
  Smartphone,
  Search,
  Zap,
  BadgeCheck,
  MessageCircle,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
  Globe,
  Sparkles,
  Stethoscope,
  Dumbbell,
  Brush,
  Building2,
} from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "299",
    subtitle: "For small businesses and startups",
    pages: "Up to 5 Pages",
    featured: false,
    features: [
      "Responsive design",
      "Up to 5 pages",
      "WhatsApp integration",
      "Contact form setup",
      "Google Maps section",
      "Basic SEO setup",
      "Fast loading layout",
      "Clean business design",
    ],
  },
  {
    name: "Professional",
    price: "499",
    subtitle: "For growing brands and service businesses",
    pages: "Up to 10 Pages",
    featured: true,
    features: [
      "Premium responsive design",
      "Up to 10 pages",
      "Lead capture sections",
      "Service or portfolio showcase",
      "WhatsApp + inquiry forms",
      "SEO-friendly structure",
      "Speed optimization",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "999",
    subtitle: "For established businesses needing full presence",
    pages: "Custom Multi-page",
    featured: false,
    features: [
      "Custom multi-page website",
      "Premium SaaS-style UI",
      "Advanced animations",
      "Conversion-focused sections",
      "Content management ready",
      "Advanced SEO structure",
      "Launch support",
      "Scalable future-ready setup",
    ],
  },
];

const niches = [
  {
    icon: <Building2 size={20} />,
    name: "Corporate Office",
    desc: "Professional branding, service pages, and stronger business credibility.",
  },
{
    icon: <Stethoscope size={20} />,
    name: "Medical Clinic",
    desc: "Doctor profiles, treatment pages, and appointment request systems.",
  },
  {
    icon: <UtensilsCrossed size={20} />,
    name: "Restaurant",
    desc: "Digital menus, table bookings, delivery info, and WhatsApp orders.",
  },
  {
    icon: <ShoppingBag size={20} />,
    name: "Local Shop",
    desc: "Product showcase, Google Maps, customer inquiries, and catalog display.",
  },
    {
    icon: <Globe size={20} />,
    name: "Travel / Immigration Agency",
    desc: "Visa services, travel packages, consultation bookings, and lead generation for faster client conversions.",
  },
    {
    icon: <Dumbbell size={20} />,
    name: "Gym & Fitness Center",
    desc: "Membership plans, trainer profiles, and lead capture for new clients.",
  },
  {
    icon: <Brush size={20} />,
    name: "Beauty Salon",
    desc: "Appointment booking, service pricing, and Instagram/WhatsApp integration.",
  },
  {
    icon: <MessageCircle size={20} />,
    name: "Cleaning Service",
    desc: "Service packages, booking forms, and lead generation.",
  },

];

const highlights = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Fully Responsive",
    text: "Designed for mobile, tablet, laptop, and desktop screens.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "SEO Friendly",
    text: "Structured to support better search visibility and local ranking.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast Loading",
    text: "Modern layout and clean structure for better performance.",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Premium UI",
    text: "Professional business-focused design that builds trust.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Your Business",
    text: "We learn your services, audience, and goals before planning the website layout.",
  },
  {
    number: "02",
    title: "Plan The Structure",
    text: "We organize the pages, sections, and content flow for clarity and conversion.",
  },
  {
    number: "03",
    title: "Design & Develop",
    text: "Your website is built with responsive design, polished sections, and strong visual presentation.",
  },
  {
    number: "04",
    title: "Review & Launch",
    text: "We refine the final details, test responsiveness, and prepare everything for launch.",
  },
];

const deliverables = [
  "Modern responsive business website",
  "Professional service page structure",
  "WhatsApp integration",
  "Contact and inquiry forms",
  "Google Maps section",
  "Fast-loading design",
  "SEO-ready layout",
  "Conversion-focused sections",
];

export default function WebDevelopmentClient() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_35%,#fff4fa_100%)] text-slate-900">
      <section className="relative overflow-hidden px-4 pt-28 pb-12 sm:px-6 md:px-10 md:pt-28 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(236,72,153,0.15),transparent_28%)]" />
        <div className="absolute top-10 right-0 h-64 w-64 rounded-full bg-pink-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Web Development Services
              </span>

              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Premium websites built to
                <span className="bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  grow your business
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
                We design and develop responsive, SEO-friendly, premium business
                websites for brands that want more trust, better visibility, and
                more leads from mobile and desktop users.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 to-pink-500 px-8 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition-all hover:-translate-y-0.5"
                >
                  Start My Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="https://wa.me/+97471204020"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-8 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-white"
                >
                  <MessageCircle size={18} className="text-green-500" />
                  WhatsApp Inquiry
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-linear-to-br from-blue-100 to-pink-100 p-2 text-blue-700">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-blue-100/60 backdrop-blur-xl">
              <div className="rounded-3xl border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 sm:p-6">
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Starting from</p>
                    <h2 className="mt-1 text-4xl font-black text-slate-950 sm:text-5xl">
                      299 QAR
                    </h2>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600">
                    Mobile + SEO Ready
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-pink-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200/50 transition hover:opacity-95"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Best for these businesses
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Website solutions for high-demand business niches.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We build websites for businesses that need better visibility,
            stronger branding, and more customer inquiries online.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {niches.map((niche) => (
            <div
              key={niche.name}
              className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-blue-700">
                {niche.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {niche.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {niche.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Pricing
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Simple packages for different business stages.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Clear pricing, premium design, and responsive delivery for mobile,
              tablet, and desktop screens.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-[30px] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  pkg.featured
                    ? "border-pink-200 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_42%,#fff2f8_100%)] shadow-pink-100/70"
                    : "border-white/70 bg-white/85"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-6 inline-flex rounded-full bg-linear-to-r from-blue-600 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-950">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {pkg.featured ? (
                    <BadgeCheck className="text-pink-500" size={24} />
                  ) : (
                    <div className="rounded-xl bg-slate-100 p-2 text-slate-500">
                      <Check size={18} />
                    </div>
                  )}
                </div>

                <div className="mb-3 flex items-end gap-2">
                  <span className="text-4xl font-black tracking-tight text-slate-950">
                    {pkg.price}
                  </span>
                  <span className="pb-1 text-sm font-bold text-slate-400">
                    QAR
                  </span>
                </div>

                <p className="mb-8 text-sm font-bold text-blue-700">
                  {pkg.pages}
                </p>

                <ul className="flex-1 space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-medium text-slate-600"
                    >
                      <span className="mt-0.5 inline-flex rounded-full bg-blue-50 p-1 text-blue-700">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    pkg.featured
                      ? "bg-linear-to-r from-blue-600 to-pink-500 text-white shadow-lg shadow-pink-200 hover:opacity-95"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  Order {pkg.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Our process
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A simple workflow from idea to launch.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We keep the process clean, focused, and business-oriented so your
              website looks premium and performs well across every device.
            </p>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-pink-100 text-sm font-black text-blue-700">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:px-10 md:pb-20">
        <div className="grid gap-6 rounded-4xl border border-white/70 bg-[linear-gradient(135deg,#dbeafe_0%,#ffffff_45%,#fdf2f8_100%)] p-6 shadow-xl shadow-blue-100/60 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Ready to launch?
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Let’s build a website that feels premium on every screen.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Perfect for restaurants, shops, clinics, salons, gyms, agencies,
              and service-based businesses that need stronger online presence.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-pink-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}