import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-1 text-sm font-medium text-pink-600">
            Qatar Based Web IT & Digital Solution
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Smart Websites, CRM Systems, and Digital Solutions for Businesses in Qatar
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Samira Cloud builds SEO-ready websites, consultant CRM systems, restaurant systems,
            and mini business tools designed for real business growth in Doha and across Qatar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Services
            </Link>
            <Link
              href="/demos"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800"
            >
              View Demo Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}