/**
 * DYNAMIC [SLUG] PAGE
 * Handles all keyword and area pages for HIVY - Place for Celebrations
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

// Find keyword by slug
function findKeywordBySlug(slug: string): { keyword: ServiceKeyword; service: ServiceCategory } | undefined {
  const allKeywords = getAllKeywords();
  const found = allKeywords.find(k => k.slug === slug);
  if (found) {
    return { keyword: found.keyword, service: found.service };
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
  
  // Add all keyword pages from all services
  getAllKeywords().forEach(({ slug }) => {
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
    const areaDescription = `Book romantic celebrations, candlelight dinners, birthday surprises & anniversary parties in ${area.name}, Surat at HIVY - Place for Celebrations. venue with stunning setups. Call +91 74878 88730.`;
    
    return {
      title: areaTitle,
      description: areaDescription,
      keywords: [
        `romantic celebration ${area.name}`,
        `candlelight dinner ${area.name}`,
        `birthday surprise ${area.name}`,
        `friends factory cafe ${area.name}`,
        `couple cafe ${area.name} surat`,
        `anniversary dinner ${area.name}`,
        `romantic restaurant ${area.name}`,
        `private dining ${area.name}`
      ],
      alternates: {
        canonical: `https://hivy.com/areas/${area.slug}`,
      },
      openGraph: {
        title: areaTitle,
        description: `Premium romantic celebration services for couples in ${area.name}, Surat. Birthday surprises, candlelight dinners & more!`,
        url: `https://hivy.com/areas/${area.slug}`,
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
        `friends factory cafe ${keywordData.keyword.title.toLowerCase()}`,
        `best ${keywordData.keyword.title.toLowerCase()} surat`,
        `${keywordData.service.name.toLowerCase()} near me surat`
      ],
      alternates: {
        canonical: `https://hivy.com/${keywordData.keyword.slug}`,
      },
      openGraph: {
        title: keywordTitle,
        description: keywordDescription,
        url: `https://hivy.com/${keywordData.keyword.slug}`,
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
