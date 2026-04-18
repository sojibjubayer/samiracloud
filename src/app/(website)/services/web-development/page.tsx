import type { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/services/web-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Web Development Services in Qatar | Responsive Business Websites",
  description:
    "Professional web development services in Qatar with responsive design, SEO-friendly structure, fast performance, and premium business website packages starting from 299 QAR.",
  keywords: [
    "web development Qatar",
    "website design Qatar",
    "responsive website development",
    "SEO friendly website Qatar",
    "business website Qatar",
    "Next.js web development",
    "website packages Qatar",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Web Development Services in Qatar | Responsive Business Websites",
    description:
      "Premium multi-page business websites with responsive layouts, SEO-ready structure, and fast performance.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Web Development Services in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Qatar",
    description:
      "Responsive, SEO-friendly business websites with packages from 299 QAR.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    serviceType: "Business Website Design and Development",
    provider: {
      "@type": "Organization",
      name: "Samira Cloud",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Qatar",
    },
    url: PAGE_URL,
    description:
      "Responsive, SEO-friendly web development services for businesses in Qatar.",
    offers: [
      {
        "@type": "Offer",
        name: "Basic Web Development Package",
        priceCurrency: "QAR",
        price: "299",
      },
      {
        "@type": "Offer",
        name: "Standard Web Development Package",
        priceCurrency: "QAR",
        price: "499",
      },
      {
        "@type": "Offer",
        name: "Premium Web Development Package",
        priceCurrency: "QAR",
        price: "999",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <WebDevelopmentClient />
    </>
  );
}