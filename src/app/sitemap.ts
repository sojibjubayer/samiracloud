import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://samiracloud.com",
      lastModified: new Date(),
    },
    {
      url: "https://samiracloud.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://samiracloud.com/demos",
      lastModified: new Date(),
    },
    {
      url: "https://samiracloud.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://samiracloud.com/contact",
      lastModified: new Date(),
    },
  ];
}