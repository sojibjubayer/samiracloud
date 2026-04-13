import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Consultant CRM Qatar | Samira Cloud",
  description:
    "A consultant CRM demo in Qatar for lead management, follow-up tracking, and client workflow.",
  path: "/demos/consultant-crm-qatar",
});

export default function ConsultantCRMDemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Consultant CRM Qatar
      </h1>
      <p className="text-slate-700">
        A CRM demo focused on lead handling, consultant workflow, and better client management.
      </p>
    </main>
  );
}