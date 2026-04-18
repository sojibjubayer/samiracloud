import type { Metadata } from "next";
import Script from "next/script";
import AttendancesystemClient from "./AttendancesystemClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samiracloud.com";

const PAGE_PATH = "/services/attendance-systems";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/attendance-og.webp`;

const faqs = [
  {
    q: "What is an attendance management system?",
    a: "An attendance management system helps businesses track staff check-in, check-out, breaks, working hours, and attendance reports from one centralized dashboard.",
  },
  {
    q: "Do you build attendance systems for businesses in Qatar?",
    a: "Yes. We build custom staff attendance systems for offices, agencies, and companies in Doha and across Qatar with admin dashboards and reporting features.",
  },
  {
    q: "Can the attendance system work on mobile devices?",
    a: "Yes. The system is fully responsive and designed for mobile, tablet, and desktop access so staff and admins can use it easily.",
  },
  {
    q: "Can admins view monthly reports?",
    a: "Yes. Admins can view monthly attendance summaries, staff-wise records, late entries, break tracking, and working-hour reports.",
  },
  {
    q: "Is the system suitable for small and large teams?",
    a: "Yes. We can build attendance systems for small offices, growing teams, and larger organizations with role-based access and reporting.",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Attendance Management System in Qatar | Staff Attendance Software",
  description:
    "Smart attendance management system in Qatar for staff check-in, check-out, break monitoring, admin dashboard, and monthly attendance reports. Mobile-friendly and fully responsive attendance software for offices and teams in Doha and across Qatar.",
  keywords: [
    "attendance management system Qatar",
    "staff attendance system Qatar",
    "attendance software Qatar",
    "employee attendance tracking Qatar",
    "attendance system Doha",
    "check in check out system Qatar",
    "office attendance software Qatar",
    "staff attendance software Doha",
    "attendance dashboard Qatar",
    "attendance reports system Qatar",
    "custom attendance software Qatar",
    "employee time tracking Qatar",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Attendance Management System in Qatar | Staff Attendance Software",
    description:
      "Track check-ins, check-outs, breaks, staff hours, and reports with a smart attendance management system for businesses in Qatar.",
    url: PAGE_URL,
    siteName: "Samira Cloud",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Attendance Management System in Qatar by Samira Cloud",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Management System in Qatar | Staff Attendance Software",
    description:
      "Custom attendance software in Qatar for check-in, check-out, break monitoring, dashboards, and monthly reports.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Attendance Management System in Qatar",
        serviceType: "Custom Attendance Software Development",
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
          "Custom attendance management system in Qatar for staff check-in, check-out, break monitoring, attendance dashboard, and reporting.",
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
        id="attendance-systems-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AttendancesystemClient />
    </>
  );
}