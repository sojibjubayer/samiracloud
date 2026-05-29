import type { Metadata } from "next";
import Script from "next/script";
import AboutClient from "./AboutClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/about-og.webp`;
const LOGO = `${SITE_URL}/logo.png`;

const pageTitle =
  "About Samira Cloud | Web Development Company in Qatar";

const pageDescription =
  "Learn about Samira Cloud, a Qatar-based digital solutions company providing web development, Google Business Profile setup, Immigration CRM systems, QR attendance systems, and custom business software in Doha.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: pageTitle,

  description: pageDescription,

  keywords: [
    "About Samira Cloud",
    "Samira Cloud Qatar",
    "web development company in Qatar",
    "website development company in Doha",
    "web design Qatar",
    "business website development Qatar",
    "Google Business Profile setup Qatar",
    "Google Maps business listing Qatar",
    "CRM software Qatar",
    "Immigration CRM Qatar",
    "QR attendance system Qatar",
    "custom business software Qatar",
    "digital solutions company Qatar",
    "digital agency Doha",
    "business automation Qatar",
    "admin dashboard development Qatar",
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
        alt: "About Samira Cloud - Digital Solutions Company in Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Samira Cloud builds websites, Google Business Profile setup, CRM systems, QR attendance systems, and custom digital solutions for businesses in Qatar.",
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
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#about-page`,
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
          "Samira Cloud is a Qatar-based digital solutions company offering web development, Google Business Profile setup, Immigration CRM systems, QR attendance systems, admin dashboards, and custom business software.",
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
          "Website Design Doha",
          "Google Business Profile Setup",
          "Google Maps Business Listing",
          "CRM Software Qatar",
          "Immigration CRM Qatar",
          "QR Attendance System Qatar",
          "Business Automation",
          "Custom Business Software",
          "Admin Dashboard Development",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development in Qatar",
              serviceType: "Business Website Development",
              url: `${SITE_URL}/services/web-development`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Business Profile Setup in Qatar",
              serviceType: "Local Business Profile Setup",
              url: `${SITE_URL}/contact`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Immigration CRM System in Qatar",
              serviceType: "Custom CRM Software Development",
              url: `${SITE_URL}/services/immigration-crm-qatar`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "QR Attendance System in Qatar",
              serviceType: "Staff Attendance Software",
              url: `${SITE_URL}/services/attendance-systems`,
            },
          },
        ],
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