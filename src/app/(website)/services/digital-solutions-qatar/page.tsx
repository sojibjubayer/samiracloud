import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Digital Solutions Qatar | Samira Cloud",
  description:
    "Smart digital solutions in Qatar for operations, workflow management, and internal business systems.",
  path: "/services/digital-solutions-qatar",
});

export default function DigitalSolutionsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Digital Solutions in Qatar
      </h1>
      <p className="text-slate-700">
        We create tailored digital tools for businesses that need faster workflow and better organization.
      </p>
    </main>
  );
}