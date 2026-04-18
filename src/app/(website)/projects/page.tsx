import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Live Demos | Digital Systems & CRM Solutions | Samira Cloud Qatar",
  description: "Explore live demonstrations of our Restaurant Management systems, Consultant CRMs, and Digital Attendance tools engineered for the Qatari market.",
  alternates: {
    canonical: "https://samiracloud.com/demos",
  },
};

export default function Page() {
  return <ProjectsClient />;
} 