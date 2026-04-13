import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Samira Cloud",
  description:
    "Contact Samira Cloud for web development, CRM systems, and digital solutions in Qatar.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">Contact Samira Cloud</h1>
      <p className="text-slate-700">
        Let’s discuss your website, CRM, or digital system needs in Qatar.
      </p>
    </main>
  );
}