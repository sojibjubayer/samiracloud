import type { Metadata } from "next";
import Script from "next/script";
import ServicesClient from "./ServicesClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/services";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/services-og.webp`;

const faqs = [
  {
    q: "What services does Samira Cloud offer?",
    a: "Samira Cloud offers web development, CRM systems, and QR-based attendance systems for businesses in Qatar.",
  },
  {
    q: "Do you build custom business systems?",
    a: "Yes. We create custom digital solutions tailored to each business workflow, goals, and operational needs.",
  },
  {
    q: "Are your services suitable for businesses in Qatar?",
    a: "Yes. Our services are designed for businesses in Doha and across Qatar, with responsive interfaces and modern business-focused features.",
  },
  {
    q: "Can I start with one service and expand later?",
    a: "Yes. Many businesses start with one service such as a website or CRM, then expand into more advanced internal systems later.",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Business Services in Qatar | Web Development, CRM & Attendance Systems",
  description:
    "Explore Samira Cloud business services in Qatar including web development, CRM systems, and QR-based attendance systems. Modern, responsive digital solutions for businesses in Doha and across Qatar.",
  keywords: [
    "business services Qatar",
    "digital services Qatar",
    "web development Qatar",
    "CRM systems Qatar",
    "attendance systems Qatar",
    "QR attendance system Qatar",
    "custom software Qatar",
    "business automation Qatar",
    "website development Doha",
    "CRM software Doha",
    "staff attendance system Doha",
    "Samira Cloud services",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Business Services in Qatar | Web Development, CRM & Attendance Systems",
    description:
      "Discover Samira Cloud services including web development, CRM systems, and QR-based attendance systems for businesses in Qatar.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Samira Cloud Services in Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Services in Qatar | Web Development, CRM & Attendance Systems",
    description:
      "Explore Samira Cloud services in Qatar for websites, CRM systems, and QR-based attendance solutions.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Services",
        url: PAGE_URL,
        description:
          "Service overview page for Samira Cloud including web development, CRM systems, and QR-based attendance systems in Qatar.",
      },
      {
        "@type": "ItemList",
        name: "Samira Cloud Services",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: `${SITE_URL}/services/web-development`,
            name: "Web Development",
          },
          {
            "@type": "ListItem",
            position: 2,
            url: `${SITE_URL}/services/crm-systems`,
            name: "CRM Systems",
          },
          {
            "@type": "ListItem",
            position: 3,
            url: `${SITE_URL}/services/attendance-systems`,
            name: "QR Attendance Systems",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "Organization",
        name: "Samira Cloud",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
    ],
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}