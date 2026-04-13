import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-4xl bg-slate-900 px-8 py-12 text-white">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold">
            Need a custom website or business system in Qatar?
          </h2>
          <p className="text-sm leading-6 text-slate-300">
            We design and develop SEO-friendly websites, smart dashboards, and CRM systems that help businesses grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Contact Samira Cloud
          </Link>
        </div>
      </div>
    </section>
  );
}