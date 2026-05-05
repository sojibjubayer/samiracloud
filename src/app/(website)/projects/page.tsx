import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Projects & Case Studies | Samira Cloud Qatar",
  description:
    "Explore real projects by Samira Cloud including websites, CRM systems, QR attendance software, and Google Business Profile setups for businesses in Qatar.",

  keywords: [
    "web development Qatar",
    "CRM system Qatar",
    "attendance system Qatar",
    "Google Business Profile Qatar",
    "software company Doha",
  ],

  openGraph: {
    title: "Projects & Case Studies | Samira Cloud Qatar",
    description:
      "Websites, CRM dashboards, attendance systems, and Google Business Profile solutions built for businesses in Qatar.",
    url: "https://yourdomain.com/projects",
    siteName: "Samira Cloud",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Samira Cloud Qatar",
    description:
      "Real business solutions including websites, CRM systems, and attendance tools in Qatar.",
  },
};

export default function Page() {
  return <ProjectsClient />;
}