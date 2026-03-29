/**
 * DYNAMIC [SLUG] PAGE
 * Handles all keyword and area pages for HIVY - Place for Celebrations
 * ISR: Revalidates every 86400 seconds (24 hours) for keyword/area pages
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import FFCAreaPage from "@/components/ffc-area-page";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { 
  suratAreas, 
  getAreaBySlug, 
  serviceCategories,
  getServiceBySlug,
  ServiceKeyword,
  ServiceCategory
} from "@/lib/ffc-config";
import { 
  getExpandedKeywordBySlug, 
  getAllExpandedKeywordSlugs, 
  ExpandedKeyword 
} from "@/lib/expanded-keywords";

// ISR: Revalidate every 24 hours for keyword/area pages (content rarely changes)
export const revalidate = 86400;

// Get all keyword slugs from all service categories
function getAllKeywords(): { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] {
  const keywords: { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] = [];
  
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      keywords.push({
        slug: keyword.slug,
        keyword,
        service
      });
    });
  });
  
  return keywords;
}

// Find keyword by slug - checks both original and expanded keywords
function findKeywordBySlug(slug: string): { keyword: ServiceKeyword; service: ServiceCategory } | undefined {
  // First check original keywords
  const allKeywords = getAllKeywords();
  const found = allKeywords.find(k => k.slug === slug);
  if (found) {
    return { keyword: found.keyword, service: found.service };
  }
  
  // Then check expanded keywords - convert to ServiceKeyword format
  const expanded = getExpandedKeywordBySlug(slug);
  if (expanded) {
    const service = serviceCategories.find(s => s.slug === expanded.category);
    if (service) {
      const keyword: ServiceKeyword = {
        slug: expanded.slug,
        title: expanded.title,
        h1: expanded.h1,
        metaTitle: expanded.metaTitle,
        metaDescription: expanded.metaDescription,
      };
      return { keyword, service };
    }
    // Fallback: use first service category if category doesn't match
    const fallbackService = serviceCategories[0];
    const keyword: ServiceKeyword = {
      slug: expanded.slug,
      title: expanded.title,
      h1: expanded.h1,
      metaTitle: expanded.metaTitle,
      metaDescription: expanded.metaDescription,
    };
    return { keyword, service: fallbackService };
  }
  
  return undefined;
}

// Generate static params for all possible routes
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add all area pages
  suratAreas.forEach((area) => {
    params.push({ slug: area.slug });
  });
  
  // Add all original keyword pages from all services
  getAllKeywords().forEach(({ slug }) => {
    params.push({ slug });
  });
  
  // Add all expanded keyword pages
  getAllExpandedKeywordSlugs().forEach((slug) => {
    params.push({ slug });
  });
  
  return params;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    const areaTitle = `Romantic Celebration in ${area.name}, Surat | HIVY - Place for Celebrations`;
    const areaDescription = `Book romantic celebrations, candlelight dinners, birthday surprises & anniversary parties in ${area.name}, Surat at HIVY - Place for Celebrations. venue with stunning setups. Call +91 9727027278.`;
    
    return {
      title: areaTitle,
      description: areaDescription,
      keywords: [
        `romantic celebration ${area.name}`,
        `candlelight dinner ${area.name}`,
        `birthday surprise ${area.name}`,
        `hivy place for celebrations ${area.name}`,
        `couple cafe ${area.name} surat`,
        `anniversary dinner ${area.name}`,
        `romantic restaurant ${area.name}`,
        `private dining ${area.name}`
      ],
      alternates: {
        canonical: `https://hivy.co.in/${area.slug}`,
      },
      openGraph: {
        title: areaTitle,
        description: `Premium romantic celebration services for couples in ${area.name}, Surat. Birthday surprises, candlelight dinners & more!`,
        url: `https://hivy.co.in/${area.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "HIVY - Place for Celebrations",
      },
      twitter: {
        card: "summary_large_image",
        title: `Romantic Celebrations in ${area.name} | HIVY - Place for Celebrations`,
        description: `Book romantic celebrations in ${area.name}, Surat.`,
      },
    };
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    const keywordTitle = keywordData.keyword.metaTitle;
    const keywordDescription = keywordData.keyword.metaDescription;
    
    return {
      title: keywordTitle,
      description: keywordDescription,
      keywords: [
        keywordData.keyword.title.toLowerCase(),
        `${keywordData.keyword.title.toLowerCase()} surat`,
        `${keywordData.service.name.toLowerCase()} surat`,
        `hivy place for celebrations ${keywordData.keyword.title.toLowerCase()}`,
        `best ${keywordData.keyword.title.toLowerCase()} surat`,
        `${keywordData.service.name.toLowerCase()} near me surat`
      ],
      alternates: {
        canonical: `https://hivy.co.in/${keywordData.keyword.slug}`,
      },
      openGraph: {
        title: keywordTitle,
        description: keywordDescription,
        url: `https://hivy.co.in/${keywordData.keyword.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "HIVY - Place for Celebrations",
      },
      twitter: {
        card: "summary_large_image",
        title: keywordTitle,
        description: keywordDescription,
      },
    };
  }
  
  return {
    title: "Page Not Found",
  };
}

// Main page component
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    return <FFCAreaPage area={area} />;
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    return <FFCKeywordPage service={keywordData.service} keyword={keywordData.keyword} />;
  }
  
  // Not found
  notFound();
}
