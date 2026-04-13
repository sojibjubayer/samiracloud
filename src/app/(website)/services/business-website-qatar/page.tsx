import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Business Website Design Qatar | Samira Cloud",
  description:
    "Professional business website design and development in Qatar for brands and local companies.",
  path: "/services/business-website-qatar",
});

export default function BusinessWebsitePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">
        Business Website Design in Qatar
      </h1>
      <p className="text-slate-700">
        Launch a polished and search-friendly online presence for your company with Samira Cloud.
      </p>
    </main>
  );
}