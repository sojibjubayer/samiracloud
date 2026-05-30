import type { Metadata } from "next";
import Script from "next/script";
import ProjectsClient from "./ProjectsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/projects";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/projects-og.webp`;
const LOGO = `${SITE_URL}/logo.png`;

const pageTitle =
  "Projects & Case Studies | Web Development, CRM & Business Software Qatar";

const pageDescription =
  "Explore Samira Cloud projects in Qatar including business websites, restaurant websites, Immigration CRM systems, QR attendance software, Google Business Profile setup, and custom business dashboards.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Samira Cloud projects",
    "web development projects Qatar",
    "website design portfolio Qatar",
    "business website Qatar",
    "restaurant website Qatar",
    "CRM system Qatar",
    "Immigration CRM Qatar",
    "attendance system Qatar",
    "QR attendance system Qatar",
    "Google Business Profile Qatar",
    "Google Maps business listing Qatar",
    "business software Qatar",
    "software company Doha",
    "web development company Qatar",
    "digital solutions Qatar",
    "custom dashboard Qatar",
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
        alt: "Samira Cloud Projects and Case Studies in Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Samira Cloud Qatar",
    description:
      "Explore websites, CRM systems, QR attendance systems, Google Business Profile setup, and business software projects by Samira Cloud in Qatar.",
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

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#collection-page`,
        url: PAGE_URL,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en-QA",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          name: "Samira Cloud",
          url: SITE_URL,
        },
        about: {
          "@id": `${SITE_URL}#organization`,
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Samira Cloud Project Showcase",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "CreativeWork",
                name: "Restaurant Website & Digital Menu",
                description:
                  "Premium restaurant website and digital menu project for food businesses in Qatar.",
                url: "https://restro.samiracloud.com",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "Google Business Profile Setup",
                description:
                  "Google Business Profile setup and Google Maps listing optimization for local businesses in Qatar.",
                url: `${SITE_URL}/contact`,
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "SoftwareApplication",
                name: "Immigration CRM System",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web-based",
                description:
                  "Immigration CRM system for managing visa leads, clients, documents, payments, follow-ups, and reports.",
                url: `${SITE_URL}/services/immigration-crm-qatar`,
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "SoftwareApplication",
                name: "QR Attendance System",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web-based",
                description:
                  "QR attendance software for staff check-in, check-out, break tracking, and admin reports.",
                url: `${SITE_URL}/services/attendance-systems`,
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "CreativeWork",
                name: "Corporate Business Website",
                description:
                  "Business website design and development project for professional companies in Qatar.",
                url: `${SITE_URL}/services/web-development`,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: "Samira Cloud",
        url: SITE_URL,
        inLanguage: "en-QA",
        publisher: {
          "@id": `${SITE_URL}#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Samira Cloud",
        url: SITE_URL,
        logo: LOGO,
        image: OG_IMAGE,
        description:
          "Samira Cloud provides web development, Google Business Profile setup, Immigration CRM systems, QR attendance systems, and custom business software for companies in Qatar.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Doha",
          addressCountry: "QA",
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
          {
            "@type": "City",
            name: "Lusail",
          },
          {
            "@type": "City",
            name: "Al Wakrah",
          },
          {
            "@type": "City",
            name: "Al Rayyan",
          },
        ],
        knowsAbout: [
          "Web Development Qatar",
          "Restaurant Website Qatar",
          "Google Business Profile Setup Qatar",
          "Google Maps Business Listing Qatar",
          "Immigration CRM Qatar",
          "CRM Software Qatar",
          "QR Attendance System Qatar",
          "Business Software Qatar",
          "Custom Dashboard Development",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProjectsClient />
    </>
  );
}