import type { Metadata } from "next";
import RestaurantMarketingClient from "./RestaurantMarketingClient";

export const metadata: Metadata = {
  title:
    "Restaurant Website Design Qatar | Google Business Setup & WhatsApp Orders",
  description:
    "Get a professional restaurant website in Qatar with online menu, WhatsApp ordering, Google Business Profile setup, QR menu, SEO, and mobile-first design for Doha restaurants.",
  keywords: [
    "restaurant website design Qatar",
    "restaurant website design Doha",
    "restaurant website development Qatar",
    "restaurant marketing Qatar",
    "Google Business Profile setup Qatar",
    "Google My Business restaurant Qatar",
    "online ordering website Qatar",
    "restaurant WhatsApp ordering Qatar",
    "QR menu Qatar",
    "digital menu Qatar",
    "restaurant SEO Qatar",
    "cafe website design Qatar",
    "food business marketing Qatar",
    "restaurant booking website Doha",
  ],
  alternates: {
    canonical: "https://restro.samiracloud.com",
  },
  openGraph: {
    title:
      "Restaurant Website Design Qatar | Google Setup & WhatsApp Order System",
    description:
      "Complete online presence for restaurants in Qatar: website, Google Business Profile, QR menu, WhatsApp order button, SEO, and mobile-first design.",
    url: "https://restro.samiracloud.com",
    siteName: "Samira Cloud Restro",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Design Qatar | Samira Cloud Restro",
    description:
      "Professional restaurant website + Google Business setup for Qatar restaurants, cafés, and food businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <RestaurantMarketingClient />;
}