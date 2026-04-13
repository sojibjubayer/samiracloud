import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/web-development-qatar",
    "/services/crm-development-qatar",
    "/services/business-website-qatar",
    "/services/digital-solutions-qatar",
    "/demos",
    "/demos/restaurant-management-system-qatar",
    "/demos/consultant-crm-qatar",
    "/demos/shop-mini-crm-qatar",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}