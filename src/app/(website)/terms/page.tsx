import type { Metadata } from "next";
import TermsClient from "./TermsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/terms";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/terms-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Terms of Service | Samira Cloud",
  description:
    "Read the Terms of Service for Samira Cloud regarding website usage, service agreements, payments, responsibilities, and business operations in Qatar.",
  keywords: [
    "Terms of Service Samira Cloud",
    "Qatar business terms",
    "website terms and conditions Qatar",
    "service agreement Qatar",
    "Samira Cloud legal terms",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Terms of Service | Samira Cloud",
    description:
      "Understand the service terms, responsibilities, and usage conditions for working with Samira Cloud in Qatar.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Terms of Service - Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Samira Cloud",
    description:
      "Terms of Service for Samira Cloud business services in Qatar.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TermsClient />;
}