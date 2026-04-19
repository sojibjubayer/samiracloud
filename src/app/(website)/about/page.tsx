import type { Metadata } from "next";
import Script from "next/script";
import AboutClient from "./AboutClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/about-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About Samira Cloud | Digital Systems & Branding in Qatar",
  description:
    "Learn about Samira Cloud, a Doha-based digital partner providing premium web development, CRM systems, QR attendance systems, and digital branding solutions for businesses in Qatar.",
  keywords: [
    "About Samira Cloud",
    "digital systems Qatar",
    "web development Qatar",
    "CRM systems Qatar",
    "QR attendance systems Qatar",
    "digital branding Qatar",
    "Doha digital agency",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About Samira Cloud | Digital Systems & Branding in Qatar",
    description:
      "Samira Cloud builds premium websites, CRM systems, QR attendance platforms, and digital branding solutions for businesses in Qatar.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samira Cloud | Digital Systems & Branding in Qatar",
    description:
      "Discover Samira Cloud’s approach to premium websites, business systems, and digital branding in Qatar.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: PAGE_URL,
        name: "About Samira Cloud",
        description:
          "About page for Samira Cloud, a digital systems and branding partner in Doha, Qatar.",
      },
      {
        "@type": "Organization",
        name: "Samira Cloud",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Doha",
          addressCountry: "QA",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}