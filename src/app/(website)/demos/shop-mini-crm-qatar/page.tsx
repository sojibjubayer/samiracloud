import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Shop Mini CRM Qatar | Samira Cloud",
  description:
    "A mini CRM demo for shops in Qatar to manage customers, notes, inventory basics, and daily sales flow.",
  path: "/demos/shop-mini-crm-qatar",
});

export default function ShopMiniCRMDemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Shop Mini CRM Qatar
      </h1>
      <p className="text-slate-700">
        A lightweight retail system for small shops that need clean customer and operations tracking.
      </p>
    </main>
  );
}