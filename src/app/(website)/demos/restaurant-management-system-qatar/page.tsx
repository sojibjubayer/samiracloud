import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Restaurant Management System Qatar | Samira Cloud",
  description:
    "Demo restaurant management system in Qatar with order handling, menu management, and business overview.",
  path: "/demos/restaurant-management-system-qatar",
});

export default function RestaurantDemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Restaurant Management System Qatar
      </h1>
      <p className="text-slate-700">
        A demo solution for restaurants that need better menu, order, table, and daily operation control.
      </p>
    </main>
  );
}