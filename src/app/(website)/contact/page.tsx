import type { Metadata } from "next";
import Script from "next/script";
import ContactClient from "./ContactClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/contact-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contact Samira Cloud | Web Development, CRM & Business Systems Qatar",
  description:
    "Contact Samira Cloud for premium web development, custom CRM systems, QR attendance systems, and digital branding solutions in Doha, Qatar.",
  keywords: [
    "Contact Samira Cloud",
    "Web Development Qatar",
    "CRM Systems Doha",
    "QR Attendance System Qatar",
    "Digital Branding Qatar",
    "Business Systems Qatar",
    "Doha digital solutions",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Samira Cloud | Digital Systems & Branding Qatar",
    description:
      "Get in touch with Samira Cloud for websites, CRM systems, QR attendance platforms, and premium digital solutions in Qatar.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Samira Cloud | Digital Systems & Branding Qatar",
    description:
      "Talk to Samira Cloud about your next website, CRM, QR attendance system, or business automation project.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const whatsappNumber = "+97471294020";
  const emailAddress = "hello@samiracloud.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Samira Cloud",
      telephone: whatsappNumber,
      email: emailAddress,
      url: PAGE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Doha",
        addressCountry: "QA",
      },
    },
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}