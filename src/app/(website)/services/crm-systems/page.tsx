import type { Metadata } from "next";
import Script from "next/script";
import CrmsystemsClient from "./CrmsystemsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/services/crm-systems";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-image.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CRM Systems in Qatar | Custom CRM Software Development in Doha",
  description:
    "Custom CRM systems in Qatar for lead management, follow-ups, sales tracking, customer service, and reporting. Responsive, scalable CRM software for businesses in Doha and across Qatar.",
  keywords: [
    "CRM systems Qatar",
    "CRM software Qatar",
    "CRM development Qatar",
    "custom CRM Qatar",
    "CRM systems Doha",
    "sales CRM Qatar",
    "lead management system Qatar",
    "customer management software Qatar",
    "business automation Qatar",
    "CRM for small business Qatar",
    "service CRM Qatar",
    "CRM company Doha",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "CRM Systems in Qatar | Custom CRM Software Development in Doha",
    description:
      "Build a custom CRM system for your business in Qatar. Manage leads, customers, follow-ups, team workflows, and reports from one platform.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "CRM Systems in Qatar by Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Systems in Qatar | Custom CRM Software Development in Doha",
    description:
      "Custom CRM software in Qatar for lead tracking, sales automation, customer management, and reporting.",
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    q: "What is a CRM system?",
    a: "A CRM system helps your business manage leads, customers, follow-ups, communication history, and reporting from one place.",
  },
  {
    q: "Do you build custom CRM systems in Qatar?",
    a: "Yes. We build custom CRM platforms for businesses in Doha and across Qatar based on your workflow, team roles, and reporting needs.",
  },
  {
    q: "Can the CRM work on mobile and desktop?",
    a: "Yes. The CRM interface is fully responsive and designed to work across desktop, tablet, and mobile devices.",
  },
  {
    q: "Can you integrate WhatsApp or web forms?",
    a: "Yes. We can connect your CRM with website forms, WhatsApp enquiry flows, and internal follow-up processes.",
  },
  {
    q: "Is this suitable for small businesses in Qatar?",
    a: "Yes. We can build lean CRM systems for small teams as well as larger multi-user platforms with permissions and reporting.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "CRM Systems in Qatar",
        serviceType: "Custom CRM Software Development",
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
          "Custom CRM systems in Qatar for lead management, customer tracking, sales automation, reporting, and business workflow management.",
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
        id="crm-systems-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CrmsystemsClient />
    </>
  );
}