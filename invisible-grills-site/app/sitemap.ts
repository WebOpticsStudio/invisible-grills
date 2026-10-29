import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const staticRoutes = [
  "",
  "/services",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }));
}
