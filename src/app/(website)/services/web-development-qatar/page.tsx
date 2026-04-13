import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Web Development Company in Qatar | Samira Cloud",
  description:
    "Samira Cloud offers professional web development services in Qatar with modern design, fast performance, and strong SEO structure.",
  path: "/services/web-development-qatar",
});

export default function WebDevelopmentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Web Development Company in Qatar
      </h1>
      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Professional Website Development in Qatar
          </h2>
          <p>
            We build fast, modern, and mobile-friendly websites for businesses in Doha and across Qatar.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Why Choose Samira Cloud
          </h2>
          <p>
            Our websites are structured for speed, SEO, and business conversion from the start.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            What We Build
          </h2>
          <p>
            Company websites, landing pages, service websites, and scalable digital platforms.
          </p>
        </section>
      </div>
    </main>
  );
}