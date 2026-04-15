import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  // Title: Focused on "Growth" and "Automation"
  title: "Samira Cloud | Business Automation & Custom Web Solutions Qatar",
  
  // Description: Focused on local trust, reliability, and business results
  description: "Samira Cloud delivers high-speed business automation and premium web solutions in Doha. We engineer secure, growth-oriented digital systems designed for Qatari enterprise excellence and digital transformation.",
  
  keywords: [
    "Business Automation Doha",
    "Digital Transformation Qatar",
    "Custom Web Solutions Doha",
    "Management Systems Qatar",
    "Online Growth Strategy Doha",
    "Premium Web Design Qatar",
    "Enterprise Software Solutions Doha",
    "Local SEO Strategy Qatar",
    "Operational Efficiency Tools Doha"
  ],

  alternates: {
    canonical: "https://samiracloud.com/about",
  },

  openGraph: {
    title: "Samira Cloud | Engineering Business Growth in Qatar",
    description: "Architecting secure, high-speed business systems and automated workflows for the Doha corporate sector.",
    url: "https://samiracloud.com/about",
    siteName: "Samira Cloud",
    type: "website",
    locale: "en_QA", // Specifically targeting the Qatari region
  },
};

export default function AboutPage() {
  return <AboutClient />;
}