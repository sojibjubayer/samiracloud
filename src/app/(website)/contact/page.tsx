import type { Metadata } from "next";
import Script from "next/script";
import ContactClient from "./ContactClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/contact-og.webp`;
const LOGO = `${SITE_URL}/logo.png`;

const whatsappNumber = "+97471294020";
const emailAddress = "hello@samiracloud.com";

const pageTitle =
  "Contact Samira Cloud | Web Development & CRM Software Qatar";

const pageDescription =
  "Contact Samira Cloud in Qatar for web development, Google Business Profile setup, Immigration CRM systems, QR attendance systems, and custom business software in Doha.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Contact Samira Cloud",
    "web development Qatar",
    "web development company Qatar",
    "website design Doha",
    "business website Qatar",
    "Google Business Profile setup Qatar",
    "Google Maps business listing Qatar",
    "CRM software Qatar",
    "Immigration CRM Qatar",
    "QR attendance system Qatar",
    "custom business software Qatar",
    "business automation Qatar",
    "admin dashboard development Qatar",
    "digital solutions company Qatar",
    "Doha web development",
    "Doha digital agency",
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
        alt: "Contact Samira Cloud - Web Development and Business Software Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Talk to Samira Cloud about web development, Google Business Profile setup, Immigration CRM, QR attendance systems, and business software in Qatar.",
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
        "@type": "ContactPage",
        "@id": `${PAGE_URL}#contact-page`,
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
        email: emailAddress,
        telephone: whatsappNumber,
        description:
          "Samira Cloud provides web development, Google Business Profile setup, Immigration CRM systems, QR attendance systems, admin dashboards, and custom business software for companies in Qatar.",
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
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: whatsappNumber,
            email: emailAddress,
            contactType: "customer service",
            areaServed: "QA",
            availableLanguage: ["English"],
          },
        ],
        knowsAbout: [
          "Web Development Qatar",
          "Website Design Doha",
          "Google Business Profile Setup Qatar",
          "CRM Software Qatar",
          "Immigration CRM Qatar",
          "QR Attendance System Qatar",
          "Business Automation Qatar",
          "Custom Business Software Qatar",
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
              serviceType: "Google Maps and Local Business Listing Setup",
              url: PAGE_URL,
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
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}#local-business`,
        name: "Samira Cloud",
        url: SITE_URL,
        image: OG_IMAGE,
        logo: LOGO,
        telephone: whatsappNumber,
        email: emailAddress,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Doha",
          addressCountry: "QA",
        },
        areaServed: {
          "@type": "Country",
          name: "Qatar",
        },
      },
    ],
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