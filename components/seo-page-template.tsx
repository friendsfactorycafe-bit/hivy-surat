import { BreadcrumbSchema, LocalBusinessSchema, ServiceSchema, FAQSchema } from "@/components/seo-schemas";
import { BreadcrumbNav, RelatedServices, AreaLinks, getRelatedServiceLinks, getNearbyAreaLinks } from "@/components/internal-links";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";

interface SEOPageProps {
  serviceName: string;
  serviceSlug: string;
  serviceCategory?: string;
  description: string;
  keywords?: string[];
  area?: string;
  faqs?: { question: string; answer: string }[];
  relatedLinks?: { href: string; label: string }[];
  children: React.ReactNode;
}

export function SEOPageTemplate({
  serviceName,
  serviceSlug,
  serviceCategory,
  description,
  area,
  faqs = [],
  relatedLinks,
  children,
}: SEOPageProps) {
  const breadcrumbItems = [
    { name: "Home", url: SEO_CONFIG.siteUrl },
    {
      name: serviceName,
      url: `${SEO_CONFIG.siteUrl}/${serviceSlug}`,
    },
  ];

  // Auto-generate related links if not provided
  const autoLinks = relatedLinks && relatedLinks.length > 0
    ? relatedLinks
    : area
      ? getNearbyAreaLinks(serviceSlug)
      : getRelatedServiceLinks(serviceSlug, serviceCategory);

  // Default FAQs for HIVY if none provided
  const defaultFaqs = faqs.length > 0 ? faqs : [
    {
      question: `What is ${serviceName} at HIVY?`,
      answer: `${serviceName} at HIVY - Place for Celebrations includes a fully private, decorated tent setup with fairy lights, candles, rose petals, multi-course vegetarian dinner, cake, and personal hosting. Located in Adajan-Pal, Surat.`,
    },
    {
      question: `How much does ${serviceName} cost at HIVY?`,
      answer: `HIVY offers celebration packages starting from ₹5,100 (Swing of Love) to ₹6,500 (Tent of Romance). All packages include decorations, dinner, cake, and photography-friendly lighting.`,
    },
    {
      question: "How do I book at HIVY?",
      answer: "You can book via WhatsApp at +91 9727027278, call between 11 AM-11 PM, or visit https://hivy.co.in/book-now. A 50% advance deposit confirms your booking.",
    },
    {
      question: "Is HIVY a restaurant?",
      answer: "No, HIVY is a celebration venue offering fully private, pre-decorated tent setups with dining experiences — not a restaurant with open seating. Every booking is a private celebration.",
    },
    {
      question: "Is the food vegetarian at HIVY?",
      answer: "Yes, HIVY is a 100% pure vegetarian venue. Jain food options are also available on request.",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        serviceName={`${serviceName} - ${SEO_CONFIG.siteName}`}
        description={description}
        areaServed={area || SEO_CONFIG.location}
      />
      <ServiceSchema
        name={serviceName}
        description={description}
        area={area}
        slug={serviceSlug}
      />
      <FAQSchema faqs={defaultFaqs} />

      <BreadcrumbNav
        items={[{ label: serviceName }]}
      />

      <main>{children}</main>

      {/* CTA Section */}
      <section className="py-8 text-center bg-amber-50 rounded-lg my-8 px-4">
        <h2 className="text-2xl font-semibold text-amber-900 mb-3">
          Book Your {serviceName} at HIVY
        </h2>
        <p className="text-amber-700 mb-4">
          Call or WhatsApp us to reserve your private celebration experience
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/919727027278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            WhatsApp Us
          </Link>
          <Link
            href="tel:+919727027278"
            className="inline-flex items-center gap-2 bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-medium"
          >
            Call +91 9727027278
          </Link>
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 border-2 border-amber-800 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-800 hover:text-white transition-colors font-medium"
          >
            Book Now
          </Link>
        </div>
      </section>

      {autoLinks.length > 0 && (
        <RelatedServices links={autoLinks} />
      )}

      {!area && <AreaLinks currentSlug={serviceSlug} />}
    </>
  );
}
