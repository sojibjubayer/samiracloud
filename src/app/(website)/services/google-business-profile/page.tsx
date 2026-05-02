import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "Google Business Profile Setup Qatar | Google Maps Listing Service from 199 QAR",
  description:
    "Google Business Profile setup in Qatar from 199 QAR. Get your business listed on Google Search and Maps with local SEO, profile optimization, reviews setup, WhatsApp and call leads.",
  keywords: [
    "Google Business Profile Qatar",
    "Google Maps listing Qatar",
    "Google business setup Qatar",
    "Local SEO Qatar",
    "Google My Business Qatar",
    "Google profile optimization Qatar",
    "business listing Qatar",
  ],
  alternates: {
    canonical: "/services/google-business-profile",
  },
  openGraph: {
    title:
      "Google Business Profile Setup in Qatar | Starting from 199 QAR",
    description:
      "Get your business listed on Google Search and Maps in Qatar with optimized Google Business Profile setup.",
    url: "/services/google-business-profile",
    type: "website",
  },
};

export default function GoogleBusinessProfilePage() {
  return <PageClient />;
}