import Link from "next/link";
import { SEO_CONFIG } from "@/lib/seo-config";
import { serviceCategories, suratAreas, type ServiceCategory } from "@/lib/ffc-config";

interface InternalLink {
  href: string;
  label: string;
}

// Auto-generate related service links for a given service category
export function getRelatedServiceLinks(currentSlug: string, currentServiceSlug?: string): InternalLink[] {
  const links: InternalLink[] = [];

  // Add top service category pages
  const topServices = [
    { href: "/candlelight-dinner-for-couples-surat", label: "Candlelight Dinner for Couples" },
    { href: "/birthday-surprise-for-boyfriend-surat", label: "Birthday Surprise for Boyfriend" },
    { href: "/birthday-surprise-for-girlfriend-surat", label: "Birthday Surprise for Girlfriend" },
    { href: "/anniversary-dinner-surat", label: "Anniversary Dinner" },
    { href: "/proposal-setup-surat", label: "Proposal Setup" },
    { href: "/pre-wedding-photoshoot-surat", label: "Pre-Wedding Photoshoot" },
    { href: "/baby-shower-venue-surat", label: "Baby Shower Venue" },
    { href: "/valentines-day-celebration-surat", label: "Valentine's Day Celebration" },
  ];

  // Add links from same service category (same niche)
  if (currentServiceSlug) {
    const service = serviceCategories.find(s => s.slug === currentServiceSlug);
    if (service) {
      service.keywords
        .filter(k => k.slug !== currentSlug)
        .slice(0, 6)
        .forEach(k => links.push({ href: `/${k.slug}`, label: k.title }));
    }
  }

  // Add top services not already included
  topServices
    .filter(s => s.href !== `/${currentSlug}` && !links.some(l => l.href === s.href))
    .slice(0, 4)
    .forEach(s => links.push(s));

  // Add homepage and book-now
  links.push({ href: "/", label: "HIVY Home" });
  links.push({ href: "/book-now", label: "Book Now" });

  return links;
}

// Auto-generate nearby area links for a given area
export function getNearbyAreaLinks(currentSlug: string): InternalLink[] {
  const areaGroups: Record<string, string[]> = {
    "adajan-surat": ["vesu-surat", "pal-surat", "city-light-surat", "piplod-surat", "ghod-dod-road-surat"],
    "vesu-surat": ["adajan-surat", "piplod-surat", "city-light-surat", "althan-surat", "dumas-road-surat"],
    "city-light-surat": ["vesu-surat", "piplod-surat", "adajan-surat", "new-city-light-surat", "parle-point-surat"],
    "piplod-surat": ["vesu-surat", "city-light-surat", "adajan-surat", "athwa-surat", "ghod-dod-road-surat"],
    "athwa-surat": ["piplod-surat", "nanpura-surat", "ghod-dod-road-surat", "majura-gate-surat", "gopipura-surat"],
    "pal-surat": ["adajan-surat", "bhatar-surat", "althan-surat", "bamroli-surat", "kapodra-surat"],
  };

  const nearbySlug = areaGroups[currentSlug];
  const nearbyAreas = nearbySlug
    ? suratAreas.filter(a => nearbySlug.includes(a.slug))
    : suratAreas.filter(a => a.slug !== currentSlug).slice(0, 5);

  const links: InternalLink[] = nearbyAreas.map(a => ({
    href: `/${a.slug}`,
    label: `Celebrations in ${a.name}`,
  }));

  // Add top service pages
  links.push({ href: "/candlelight-dinner-for-couples-surat", label: "Candlelight Dinner" });
  links.push({ href: "/birthday-surprise-for-boyfriend-surat", label: "Birthday Surprise" });
  links.push({ href: "/", label: "HIVY Home" });
  links.push({ href: "/book-now", label: "Book Now" });

  return links;
}

export function RelatedServices({ links }: { links: InternalLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-8 border-t border-amber-200 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-amber-900">
        Related Celebration Services in {SEO_CONFIG.location}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-amber-700 hover:text-amber-900 hover:underline text-sm p-2 rounded-lg hover:bg-amber-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AreaLinks({ currentSlug }: { currentSlug?: string }) {
  const areas = currentSlug
    ? suratAreas.filter(a => a.slug !== currentSlug).slice(0, 12)
    : suratAreas.slice(0, 12);

  return (
    <section className="py-8 border-t border-amber-200 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-amber-900">
        Celebrations Across Surat
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/${area.slug}`}
            className="text-amber-700 hover:text-amber-900 hover:underline text-sm p-2 rounded-lg hover:bg-amber-50 transition-colors"
          >
            Celebrations in {area.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FooterSEOLinks({ links }: { links: InternalLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="py-6 border-t border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">
        Popular Celebration Services
      </h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function BreadcrumbNav({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-amber-700">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-amber-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-amber-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
