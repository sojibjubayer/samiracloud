import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Web Development Company in Qatar | Samira Cloud",
  description:
    "Samira Cloud builds modern business websites in Qatar with fast performance, premium design, and SEO-ready structure.",
  path: "/services/web-development-qatar",
});

const features = [
  "Business Websites for Qatar Companies",
  "Landing Pages with High Conversion",
  "Mobile-First Modern Design",
  "SEO-Ready Structure",
  "Fast Loading Performance",
  "Scalable Web Platforms",
];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1D3A] text-white">
        {/* Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Web Development Company in Qatar
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Samira Cloud builds modern, fast, and SEO-optimized websites for
              businesses in Qatar. We help companies in Doha grow with premium
              digital solutions and high-performance web platforms.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Get a Quote
              </Link>

              <Link
                href="/demos"
                className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10"
              >
                View Demo
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Website Development Services in Qatar
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl">
          We design and develop high-quality websites tailored for businesses in
          Qatar, focusing on performance, design, and SEO from day one.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition"
            >
              <p className="font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Samira Cloud
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                Premium Design
              </h3>
              <p className="mt-2 text-slate-600">
                Clean, modern UI that builds trust and reflects your brand.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                SEO Focused
              </h3>
              <p className="mt-2 text-slate-600">
                Built with proper structure, headings, and performance for Google ranking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                Business Driven
              </h3>
              <p className="mt-2 text-slate-600">
                Designed to generate leads and convert visitors into clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT SEO BLOCK */}
      <section className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Professional Web Development in Doha, Qatar
        </h2>

        <p className="mt-6 text-slate-600 leading-relaxed">
          If you are looking for a reliable web development company in Qatar,
          Samira Cloud provides complete solutions for businesses of all sizes.
          From corporate websites to service-based platforms, we ensure your
          website is fast, secure, and optimized for search engines.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Our team focuses on building websites that not only look premium but
          also perform exceptionally well in terms of speed, usability, and
          conversion. Whether you are a startup or an established business in
          Doha, we help you build a strong online presence.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1D3A] text-white py-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Build Your Website?
        </h2>

        <p className="mt-4 text-slate-300">
          Let’s create a modern website that grows your business in Qatar.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}