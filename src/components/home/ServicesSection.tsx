import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">
          Our Services in Qatar
        </h2>
        <p className="max-w-2xl text-slate-600">
          We create business websites, CRM systems, and custom digital solutions with strong SEO foundations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mb-5 text-sm leading-6 text-slate-600">
              {service.shortDescription}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="text-sm font-semibold text-blue-600"
            >
              Learn more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}