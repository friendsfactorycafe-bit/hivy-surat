/**
 * HIVY - PLACE FOR CELEBRATIONS - SEO OPTIMIZED ROBOTS.TXT
 * Domain: hivy.co.in
 * 
 * Configuration for search engine & AI crawlers:
 * - Allow all public pages including service keywords & area pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 * - Optimized for maximum SEO + AI visibility (ChatGPT, Gemini, Claude, Perplexity)
 * 
 * Total Indexable Pages: ~204
 * - Homepage, 9 Static pages, 8 Service categories
 * - 116 Service keyword pages
 * - 40 Surat area pages  
 * - 5 Package pages
 * - 25 Blog posts
 * 
 * Last Updated: February 2026
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hivy.co.in";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: [
          "/",
          // Static pages
          "/about",
          "/contact",
          "/menu",
          "/virtual-tour",
          "/privacy-policy",
          "/terms-conditions",
          // Package pages
          "/packages",
          "/packages/*",
          // Service pages
          "/services",
          "/services/*",
          // Blog pages
          "/blog",
          "/blog/*",
          // AI & discovery files
          "/llms.txt",
          "/.well-known/*",
          // Service keyword pages (birthday, anniversary, proposal, etc.)
          "/birthday-*",
          "/anniversary-*",
          "/proposal-*",
          "/candlelight-*",
          "/surprise-*",
          "/pre-wedding-*",
          "/pregnancy-*",
          "/baby-*",
          "/valentines-*",
          "/romantic-*",
          "/couple-*",
          "/dinner-*",
          "/engagement-*",
          "/maternity-*",
          "/gender-reveal-*",
          "/godh-bharai-*",
          "/rose-day-*",
          "/propose-day-*",
          "/chocolate-day-*",
          "/teddy-day-*",
          "/promise-day-*",
          "/hug-day-*",
          "/kiss-day-*",
          "/marriage-*",
          "/private-*",
          "/intimate-*",
          "/special-*",
          "/unique-*",
          "/midnight-*",
          "/best-*",
          "/outdoor-*",
          "/indoor-*",
          "/night-*",
          "/first-*",
          "/10th-*",
          "/25th-*",
          "/wedding-*",
          "/expecting-*",
          // Surat area pages
          "/adajan-surat",
          "/athwa-surat",
          "/vesu-surat",
          "/piplod-surat",
          "/city-light-surat",
          "/pal-surat",
          "/ghod-dod-road-surat",
          "/ring-road-surat",
          "/vip-road-surat",
          "/dumas-road-surat",
          "/katargam-surat",
          "/varachha-surat",
          "/udhna-surat",
          "/pandesara-surat",
          "/sachin-surat",
          "/sarthana-surat",
          "/magdalla-surat",
          "/althan-surat",
          "/bhatar-surat",
          "/rander-surat",
          "/jahangirpura-surat",
          "/hajira-surat",
          "/olpad-surat",
          "/kadodara-surat",
          "/kim-surat",
          "/amroli-surat",
          "/limbayat-surat",
          "/kapodra-surat",
          "/bamroli-surat",
          "/parvat-patiya-surat",
          "/majura-gate-surat",
          "/nanpura-surat",
          "/gopipura-surat",
          "/begumpura-surat",
          "/mahidharpura-surat",
          "/sagrampura-surat",
          "/dindoli-surat",
          "/mota-varachha-surat",
          "/new-city-light-surat",
          "/parle-point-surat",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/leads/",
        ],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/packages/", "/public/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Yandex crawler
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // DuckDuckGo crawler
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Facebook crawler for social sharing
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        // Twitter crawler for cards
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        // LinkedIn crawler
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        // WhatsApp crawler for link previews
        userAgent: "WhatsApp",
        allow: "/",
      },
      {
        // Instagram crawler
        userAgent: "Instagram",
        allow: "/",
      },
      {
        // Pinterest crawler
        userAgent: "Pinterestbot",
        allow: "/",
      },
      // ========== AI CRAWLERS - ALLOW FOR AI VISIBILITY ==========
      {
        // OpenAI GPTBot (used to train and power ChatGPT)
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // OpenAI ChatGPT user-initiated browsing
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Google AI / Gemini training crawler
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Anthropic AI / Claude crawler
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Anthropic ClaudeBot
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Perplexity AI crawler
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Cohere AI crawler
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Common Crawl (used by many AI models)
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // ByteDance / TikTok AI crawler
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // You.com AI search engine
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Apple extended crawler (Siri, Apple Intelligence)
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Meta AI crawler
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Amazon Alexa crawler
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
