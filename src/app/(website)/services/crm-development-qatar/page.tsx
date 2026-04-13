import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "CRM Development Qatar | Samira Cloud",
  description:
    "Custom CRM development in Qatar for consultants, sales teams, and service businesses.",
  path: "/services/crm-development-qatar",
});

export default function CRMDevelopmentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        CRM Development in Qatar
      </h1>
      <p className="text-slate-700">
        We build practical CRM systems for lead tracking, customer records, tasks, and business workflow.
      </p>
    </main>
  );
}