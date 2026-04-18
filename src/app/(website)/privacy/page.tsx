import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/privacy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/privacy-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy | Samira Cloud",
  description:
    "Read the Privacy Policy of Samira Cloud and learn how we collect, use, store, and protect your personal information in accordance with Qatar Law No. 13 of 2016 concerning Personal Data Privacy Protection.",
  keywords: [
    "Privacy Policy Samira Cloud",
    "Qatar privacy policy",
    "Qatar data protection law",
    "Law No 13 of 2016 Qatar",
    "personal data privacy Qatar",
    "business privacy policy Qatar",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy Policy | Samira Cloud",
    description:
      "Learn how Samira Cloud handles personal data and protects privacy under Qatar’s Personal Data Privacy Protection Law.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Samira Cloud",
    description:
      "Privacy Policy for Samira Cloud based on Qatar data privacy regulations.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <PrivacyClient />;
}