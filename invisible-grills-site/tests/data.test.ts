import { describe, expect, it } from "vitest";
import { generalFaqs } from "@/data/faqs";
import { serviceCategories } from "@/lib/validation";
import sitemap, { staticRoutes } from "@/app/sitemap";

describe("content data", () => {
  it("has valid FAQ items with questions and answers", () => {
    expect(generalFaqs.length).toBeGreaterThan(0);
    for (const faq of generalFaqs) {
      expect(faq.q.length).toBeGreaterThan(5);
      expect(faq.a.length).toBeGreaterThan(10);
    }
  });

  it("has unique service categories in validation", () => {
    const values = serviceCategories.map((s) => s.value);
    const labels = serviceCategories.map((s) => s.label);
    expect(new Set(values).size).toBe(serviceCategories.length);
    expect(new Set(labels).size).toBe(serviceCategories.length);
  });

  it("lists all static routes in the sitemap", () => {
    const map = sitemap();
    expect(map).toHaveLength(staticRoutes.length);
    for (const route of staticRoutes) {
      expect(map.some((entry) => entry.url.endsWith(route))).toBe(true);
    }
  });
});
