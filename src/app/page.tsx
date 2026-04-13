import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import DemoSection from "@/components/home/DemoSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Samira Cloud | Web & Digital Solutions in Qatar",
  description:
    "Samira Cloud builds websites, CRM systems, and digital solutions in Qatar. Explore SEO-ready business websites and demo software systems.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <DemoSection />
      <CTASection />
    </main>
  );
}