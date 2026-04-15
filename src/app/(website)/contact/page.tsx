import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Samira Cloud | Digital Systems & Web Development Qatar",
  description: "Reach out to Samira Cloud for premium web development, bespoke CRM systems, and digital automation solutions in Doha, Qatar. Let's build your digital legacy.",
  alternates: {
    canonical: "https://samiracloud.com/contact",
  },
  openGraph: {
    title: "Contact Samira Cloud Qatar",
    description: "Ready to scale your business? Contact us for custom digital systems in Doha.",
    url: "https://samiracloud.com/contact",
    siteName: "Samira Cloud",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}