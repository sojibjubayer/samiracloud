import Link from "next/link";
import { demos } from "@/data/demos";

export default function DemoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">
          Demo Projects
        </h2>
        <p className="max-w-2xl text-slate-600">
          Explore practical systems for restaurants, consultants, and small shops.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo) => (
          <article
            key={demo.slug}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="mb-2 text-sm font-medium text-pink-600">{demo.category}</p>
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {demo.title}
            </h3>
            <p className="mb-5 text-sm leading-6 text-slate-600">
              {demo.shortDescription}
            </p>
            <Link
              href={`/demos/${demo.slug}`}
              className="text-sm font-semibold text-blue-600"
            >
              View demo →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}