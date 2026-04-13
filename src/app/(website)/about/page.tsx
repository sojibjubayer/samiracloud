import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Samira Cloud",
  description:
    "Learn more about Samira Cloud, a Qatar-based web and digital solutions company.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">About Samira Cloud</h1>
      <p className="text-slate-700">
        Samira Cloud is a Qatar-based web IT and digital solutions company focused on websites,
        CRM systems, and practical digital products for businesses.
      </p>
    </main>
  );
}