/**
 * HIVY - PLACE FOR CELEBRATIONS - SEO OPTIMIZED SITEMAP
 * Domain: hivy.co.in
 * 
 * Total Pages: Comprehensive sitemap including:
 * - 1 Homepage (priority 1.0)
 * - 9 Static pages (priority 0.7-0.9)
 * - 8 Service category pages (priority 0.9)
 * - 6 Package detail pages (priority 0.85)
 * - 113 Service keyword pages (priority 0.8)
 * - 40 Surat area pages (priority 0.7)
 * - 25 Blog posts (priority 0.6)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";
import { 
  serviceCategories, 
  packages,
  suratAreas,
  blogPosts
} from "@/lib/ffc-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hivy.co.in";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // ==================== HOME PAGE ====================
  // Highest priority - main landing page
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // ==================== STATIC PAGES ====================
  // Core pages with regular updates
  const staticPages = [
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/menu', priority: 0.8, freq: 'weekly' as const },
    { path: '/packages', priority: 0.9, freq: 'weekly' as const },
    { path: '/services', priority: 0.9, freq: 'weekly' as const },
    { path: '/virtual-tour', priority: 0.7, freq: 'monthly' as const },
    { path: '/blog', priority: 0.8, freq: 'weekly' as const },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' as const },
    { path: '/terms-conditions', priority: 0.3, freq: 'yearly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== SERVICE CATEGORY PAGES ====================
  // 8 main service categories - high priority
  serviceCategories.forEach((service) => {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // ==================== SERVICE KEYWORD PAGES ====================
  // Individual service keyword pages (e.g., birthday-surprise-for-boyfriend-surat)
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      entries.push({
        url: `${baseUrl}/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });
  
  // ==================== PACKAGE DETAIL PAGES ====================
  // Setup packages - high priority for conversions
  packages.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // ==================== SURAT AREA PAGES ====================
  // Local SEO pages for different areas in Surat
  suratAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/${area.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });
  
  // ==================== BLOG POSTS ====================
  // Blog content pages
  blogPosts.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });
  
  return entries;
}
