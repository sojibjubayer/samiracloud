import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services | Samira Cloud",
  description:
    "Explore web development, business website, CRM development, and digital solutions services in Qatar.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">
        Web & Digital Services in Qatar
      </h1>
      <p className="mb-10 max-w-3xl text-slate-600">
        Samira Cloud helps companies in Qatar build better websites, smarter CRM systems,
        and custom digital tools for growth.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-3xl border border-slate-200 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mb-4 text-slate-600">{service.shortDescription}</p>
            <Link
              href={`/services/${service.slug}`}
              className="text-sm font-semibold text-blue-600"
            >
              Open page →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}