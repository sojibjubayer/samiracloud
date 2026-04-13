import type { Metadata } from "next";
import Link from "next/link";
import { demos } from "@/data/demos";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Demo Projects | Samira Cloud",
  description:
    "Explore demo software projects by Samira Cloud, including restaurant systems, consultant CRM, and shop mini CRM.",
  path: "/demos",
});

export default function DemosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">
        Demo Projects
      </h1>
      <p className="mb-10 max-w-3xl text-slate-600">
        Practical systems designed for real business use in Qatar.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo) => (
          <article
            key={demo.slug}
            className="rounded-3xl border border-slate-200 p-6"
          >
            <p className="mb-2 text-sm font-medium text-pink-600">{demo.category}</p>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              {demo.title}
            </h2>
            <p className="mb-4 text-sm leading-6 text-slate-600">
              {demo.shortDescription}
            </p>
            <Link
              href={`/demos/${demo.slug}`}
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