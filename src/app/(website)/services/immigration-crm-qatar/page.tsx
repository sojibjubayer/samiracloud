import type { Metadata } from "next";
import Script from "next/script";
import CrmsystemsClient from "./CrmsystemsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/immigration-crm-qatar";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-image-immigration-crm-qatar.webp`;

const pageTitle =
  "Immigration CRM Qatar | Visa Consultancy CRM System in Doha";

const pageDescription =
  "Custom Immigration CRM system in Qatar for visa consultants and immigration agencies. Manage leads, clients, documents, visa status, payments, refunds, follow-ups, consultant assignments, and reports from one CRM platform.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Immigration CRM Qatar",
    "Qatar Immigration CRM system",
    "Immigration CRM system",
    "Immigration Consultancy CRM System Qatar",
    "Visa Consultancy CRM Qatar",
    "Visa Management Software Qatar",
    "CRM for immigration consultants Qatar",
    "Immigration CRM software Doha",
    "Visa application tracking software Qatar",
    "Immigration lead management system Qatar",
    "Visa agency CRM Qatar",
    "CRM for visa consultants Doha",
    "Immigration agency management system Qatar",
    "Student visa CRM Qatar",
    "Work visa processing CRM Qatar",
    "Custom CRM development Qatar",
    "CRM software Qatar",
    "CRM software Doha",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Immigration CRM System in Qatar by Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
};

const faqs = [
  {
    q: "What is an Immigration CRM system?",
    a: "An Immigration CRM system helps visa consultants and immigration agencies manage leads, clients, documents, visa application status, payments, refunds, follow-ups, consultant assignments, and reports from one platform.",
  },
  {
    q: "Do you build Immigration CRM systems in Qatar?",
    a: "Yes. Samira Cloud builds custom Immigration CRM systems in Qatar for visa consultants, immigration agencies, student visa consultants, work permit agencies, recruitment agencies, and travel companies.",
  },
  {
    q: "Can the CRM track visa application status?",
    a: "Yes. The CRM can track visa stages such as New Lead, Documents Pending, Assessment, Submitted, Under Process, Approved, Rejected, Visa Issued, or Refunded.",
  },
  {
    q: "Can the CRM manage client documents?",
    a: "Yes. The CRM can manage passport copies, Qatar ID, photos, certificates, offer letters, visa forms, payment files, and other immigration-related documents.",
  },
  {
    q: "Can the CRM track payments and refunds?",
    a: "Yes. The Immigration CRM can track total amount, paid amount, due amount, deductions, refunds, refund history, receipts, and client payment status.",
  },
  {
    q: "Is the Immigration CRM mobile responsive?",
    a: "Yes. The Immigration CRM dashboard can be built fully responsive for desktop, tablet, and mobile users.",
  },
];

export default function ImmigrationCrmQatarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en-QA",
        isPartOf: {
          "@type": "WebSite",
          name: "Samira Cloud",
          url: SITE_URL,
        },
        about: {
          "@id": `${PAGE_URL}#software`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE_URL}#software`,
        name: "Immigration CRM Qatar",
        alternateName: [
          "Qatar Immigration CRM System",
          "Visa Consultancy CRM Qatar",
          "Immigration Consultancy CRM System Qatar",
          "Visa Management Software Qatar",
        ],
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        url: PAGE_URL,
        image: OG_IMAGE,
        description:
          "Custom Immigration CRM system in Qatar for visa consultants and immigration agencies to manage leads, clients, documents, visa status, payments, refunds, consultant workflow, and reports.",
        featureList: [
          "Immigration lead management",
          "Visa application tracking",
          "Client document management",
          "Payment and refund tracking",
          "Consultant assignment",
          "Follow-up reminders",
          "Visa status pipeline",
          "Reporting dashboard",
        ],
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "Samira Cloud",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Qatar",
          },
          {
            "@type": "City",
            name: "Doha",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Immigration CRM Software Development in Qatar",
        serviceType: "Custom CRM Software Development",
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "Samira Cloud",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "Qatar",
        },
        url: PAGE_URL,
        description:
          "Custom CRM development for immigration consultancies, visa agencies, student visa consultants, recruitment agencies, and travel companies in Qatar.",
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
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
        "@id": `${SITE_URL}#organization`,
        name: "Samira Cloud",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
    ],
  };

  return (
    <>
      <Script
        id="immigration-crm-qatar-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CrmsystemsClient />
    </>
  );
}