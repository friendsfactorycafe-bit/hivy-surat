"use client";

import Script from "next/script";
import { SEO_CONFIG } from "@/lib/seo-config";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      strategy="afterInteractive"
    />
  );
}

export function LocalBusinessSchema({
  serviceName,
  description,
  areaServed,
}: {
  serviceName?: string;
  description?: string;
  areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: serviceName || SEO_CONFIG.siteName,
    description:
      description ||
      `${SEO_CONFIG.niche} in ${SEO_CONFIG.location}. Private candlelight dinners, birthday surprises, anniversary celebrations, proposals & more at ${SEO_CONFIG.siteName}.`,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    image: `${SEO_CONFIG.siteUrl}/images/og-image.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.locality,
      addressRegion: SEO_CONFIG.address.region,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.geo.latitude,
      longitude: SEO_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
    priceRange: SEO_CONFIG.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, GPay, PhonePe",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SEO_CONFIG.rating.value,
      reviewCount: SEO_CONFIG.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "City",
      name: areaServed || SEO_CONFIG.location,
      containedInPlace: {
        "@type": "State",
        name: SEO_CONFIG.state,
      },
    },
    sameAs: [SEO_CONFIG.social.instagram, SEO_CONFIG.social.facebook],
    servesCuisine: "Vegetarian",
    acceptsReservations: true,
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function ServiceSchema({
  name,
  description,
  area,
  slug,
}: {
  name: string;
  description: string;
  area?: string;
  slug?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: slug ? `${SEO_CONFIG.siteUrl}/${slug}` : SEO_CONFIG.siteUrl,
    provider: {
      "@type": "EntertainmentBusiness",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      telephone: SEO_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.address.street,
        addressLocality: SEO_CONFIG.address.locality,
        addressRegion: SEO_CONFIG.address.region,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.country,
      },
    },
    areaServed: {
      "@type": "City",
      name: area || SEO_CONFIG.location,
    },
    serviceType: SEO_CONFIG.niche,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "5100",
      highPrice: "6500",
      priceCurrency: "INR",
      offerCount: "5",
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  url,
}: {
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate: startDate || new Date().toISOString(),
    endDate: endDate || undefined,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: SEO_CONFIG.siteName,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.address.street,
        addressLocality: SEO_CONFIG.address.locality,
        addressRegion: SEO_CONFIG.address.region,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "5100",
      highPrice: "6500",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: url || `${SEO_CONFIG.siteUrl}/book-now`,
    },
  };

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_CONFIG.siteUrl}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
