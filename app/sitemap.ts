import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import { getAllExpandedKeywordSlugs } from "@/lib/expanded-keywords";
import {
  suratAreas,
  serviceCategories,
  getAllBlogPosts,
  packages,
} from "@/lib/ffc-config";

/**
 * Data-driven route collection — no filesystem scanning.
 * Works reliably on Vercel serverless/edge runtimes.
 */
function getAllRoutes(): string[] {
  const routes: string[] = ["/"];

  // Static pages
  [
    "/about",
    "/blog",
    "/book-now",
    "/contact",
    "/menu",
    "/packages",
    "/privacy-policy",
    "/services",
    "/terms-conditions",
    "/virtual-tour",
    "/services/valentines-week",
  ].forEach((r) => routes.push(r));

  // Package pages
  packages.forEach((pkg) => routes.push(`/packages/${pkg.slug}`));

  // Service category pages
  serviceCategories.forEach((svc) => {
    routes.push(`/services/${svc.slug}`);
  });

  // Blog posts
  getAllBlogPosts().forEach((post) => routes.push(`/blog/${post.slug}`));

  // Area pages
  suratAreas.forEach((area) => routes.push(`/${area.slug}`));

  // Original keyword pages (from service categories)
  serviceCategories.forEach((svc) => {
    svc.keywords.forEach((kw) => routes.push(`/${kw.slug}`));
  });

  // Expanded keyword pages (3000+)
  getAllExpandedKeywordSlugs().forEach((slug) => routes.push(`/${slug}`));

  return [...new Set(routes)].sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;
  const allRoutes = getAllRoutes();
  const lastModified = new Date();

  const highPriorityPaths = new Set(["/"]);
  const mediumPriorityKeywords = [
    "about",
    "contact",
    "services",
    "service",
    "packages",
    "book-now",
    "menu",
  ];
  const servicePrefixes = [
    "candlelight",
    "birthday",
    "anniversary",
    "proposal",
    "pre-wedding",
    "baby",
    "valentine",
  ];

  return allRoutes.map((route) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (highPriorityPaths.has(route)) {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (
      mediumPriorityKeywords.some((kw) => route.toLowerCase().includes(kw))
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      servicePrefixes.some((kw) => route.toLowerCase().includes(kw))
    ) {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route.split("/").length <= 2) {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
