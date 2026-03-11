import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { SEO_CONFIG } from "@/lib/seo-config";

function getAllRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) return ["/"];

  const routes: string[] = ["/"];
  const ignoreDirs = new Set([
    "api",
    "_components",
    "_lib",
    "admin",
    "node_modules",
  ]);

  function scanDir(dir: string, basePath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;

      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name)) continue;

        const dirPath = path.join(dir, entry.name);
        const routePath = `${basePath}/${entry.name}`;

        const hasPage =
          fs.existsSync(path.join(dirPath, "page.tsx")) ||
          fs.existsSync(path.join(dirPath, "page.js")) ||
          fs.existsSync(path.join(dirPath, "page.jsx")) ||
          fs.existsSync(path.join(dirPath, "page.mdx"));

        if (hasPage && !entry.name.startsWith("[")) {
          routes.push(routePath);
        }

        scanDir(dirPath, routePath);
      }
    }
  }

  scanDir(appDir, "");
  return [...new Set(routes)].sort();
}

// Generate multiple sitemaps, each with max 100 URLs
// Next.js will auto-create /sitemap.xml as the index pointing to /sitemap/0.xml, /sitemap/1.xml, etc.
export async function generateSitemaps() {
  const allRoutes = getAllRoutes();
  const maxPerSitemap = SEO_CONFIG.maxUrlsPerSitemap;
  const totalSitemaps = Math.ceil(allRoutes.length / maxPerSitemap);

  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;
  const allRoutes = getAllRoutes();
  const maxPerSitemap = SEO_CONFIG.maxUrlsPerSitemap;
  const lastModified = new Date();

  // Slice routes for this sitemap chunk
  const start = id * maxPerSitemap;
  const end = start + maxPerSitemap;
  const chunk = allRoutes.slice(start, end);

  const highPriorityPaths = new Set(["/"]);
  const mediumPriorityKeywords = ["about", "contact", "services", "service", "packages", "book-now", "menu"];
  const servicePrefixes = ["candlelight", "birthday", "anniversary", "proposal", "pre-wedding", "baby", "valentine"];

  return chunk.map((route) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (highPriorityPaths.has(route)) {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (mediumPriorityKeywords.some((kw) => route.toLowerCase().includes(kw))) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (servicePrefixes.some((kw) => route.toLowerCase().includes(kw))) {
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
