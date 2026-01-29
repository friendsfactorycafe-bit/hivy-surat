/**
 * SERVICE CATEGORY PAGE
 * Dynamic page for each service category at /services/[slug]
 * - /services/birthday-surprise
 * - /services/anniversary-celebration
 * - /services/proposal
 * - /services/candlelight-dinner
 * - /services/surprise-date
 * - /services/pre-wedding-shoot
 * - /services/baby-moments
 * - /services/valentines-week
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, Clock, MapPin, Phone, Star, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FFCHeader, FFCFooter } from "@/components/ffc-layout";
import { FFCWhatsAppFloat, FFCBookNowButton } from "@/components/ffc-booking-form";
import { 
  serviceCategories, 
  getServiceBySlug, 
  packages,
  siteConfig,
  ServiceCategory
} from "@/lib/ffc-config";

// Generate static params for all service categories
export async function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} surat`,
      `${service.name.toLowerCase()} near me`,
      `best ${service.name.toLowerCase()} surat`,
      `romantic ${service.name.toLowerCase()}`,
      ...service.keywords.slice(0, 5).map(k => k.slug.replace(/-/g, ' '))
    ],
    alternates: {
      canonical: `https://hivy.co.in/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://hivy.co.in/services/${service.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

// Get recommended packages based on service
function getRecommendedPackages(service: ServiceCategory) {
  // Map service categories to relevant packages
  const packageMapping: Record<string, string[]> = {
    "birthday-surprise": ["tent-of-romance", "fairy-tale-proposals", "swing-of-love"],
    "anniversary-celebration": ["tent-of-romance", "boho-chic", "twin-heart"],
    "proposal": ["fairy-tale-proposals", "tent-of-romance", "the-elite-group-setup"],
    "candlelight-dinner": ["tent-of-romance", "swing-of-love", "boho-chic"],
    "surprise-date": ["swing-of-love", "twin-heart", "boho-chic"],
    "pre-wedding-shoot": ["fairy-tale-proposals", "boho-chic", "the-elite-group-setup"],
    "baby-moments": ["boho-chic", "the-elite-group-setup", "swing-of-love"],
    "valentines-week": ["tent-of-romance", "fairy-tale-proposals", "swing-of-love"],
  };
  
  const recommendedSlugs = packageMapping[service.slug] || packages.slice(0, 3).map(p => p.slug);
  return packages.filter(pkg => recommendedSlugs.includes(pkg.slug));
}

// Main page component
export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }
  
  const recommendedPackages = getRecommendedPackages(service);
  
  // Service-specific content
  const serviceContent: Record<string, { intro: string; benefits: string[]; perfectFor: string[] }> = {
    "birthday-surprise": {
      intro: "Make your loved one's birthday truly unforgettable with our magical birthday surprise setups. From romantic candlelit celebrations to stunning balloon decorations, we create moments that last a lifetime.",
      benefits: [
        "Private romantic setup with complete privacy",
        "Beautiful balloon & flower decorations",
        "Complimentary celebration cake (select packages)",
        "Customizable themes & messages",
        "Professional photography available",
        "Background music of your choice"
      ],
      perfectFor: ["Birthday Surprise for Boyfriend", "Birthday Surprise for Girlfriend", "Birthday Surprise for Husband", "Birthday Surprise for Wife", "Milestone Birthday Celebrations"]
    },
    "anniversary-celebration": {
      intro: "Celebrate your love journey with an elegant anniversary dinner at HIVY. Whether it's your first or your 25th, we make every anniversary special with intimate setups, romantic ambiance, and heartfelt moments.",
      benefits: [
        "Romantic candlelight dinner setup",
        "Rose petal decorations & arrangements",
        "Special anniversary decorations",
        "Private intimate venue",
        "Multi-course gourmet menu",
        "Memory lane photo display options"
      ],
      perfectFor: ["First Anniversary", "Silver Jubilee (25th)", "Golden Anniversary", "Wedding Anniversary", "Dating Anniversary"]
    },
    "proposal": {
      intro: "Pop the question in the most romantic way at Surat's premier proposal venue. Our stunning setups with fairy lights, rose petals, and intimate ambiance create the perfect moment for your 'Will you marry me?'",
      benefits: [
        "Stunning fairy tale proposal setups",
        "Ring presentation arrangements",
        "Rose petal heart decorations",
        "Complete privacy for the moment",
        "Hidden photographer options",
        "Customizable proposal themes"
      ],
      perfectFor: ["Marriage Proposal", "Engagement Proposal", "Propose Day Special", "Surprise Proposal", "Ring Ceremony"]
    },
    "candlelight-dinner": {
      intro: "Experience the magic of dining under soft candlelight at HIVY. Our romantic candlelight dinner setups create an intimate atmosphere perfect for date nights, special occasions, or just because you want to celebrate your love.",
      benefits: [
        "Romantic candlelit ambiance",
        "Private dining experience",
        "Delicious multi-course menu",
        "Soft romantic music",
        "Beautiful table settings",
        "Indoor & rooftop options"
      ],
      perfectFor: ["Date Night", "Romantic Dinner", "Special Occasions", "Valentine's Day", "Just Because Moments"]
    },
    "surprise-date": {
      intro: "Transform ordinary dates into extraordinary memories with our surprise date setups. Whether you want to surprise your partner or plan a unique date experience, we create magical moments that strengthen your bond.",
      benefits: [
        "Unique themed decorations",
        "Surprise element coordination",
        "Romantic setup with flowers",
        "Private celebration space",
        "Food & beverages included",
        "Personalized touches available"
      ],
      perfectFor: ["Surprise for Partner", "Monthly Date Plans", "Rekindling Romance", "Special Milestones", "Just Because Dates"]
    },
    "pre-wedding-shoot": {
      intro: "Capture your love story with stunning pre-wedding photos at HIVY. Our beautifully decorated spaces provide the perfect backdrop for romantic photoshoots that you'll cherish forever.",
      benefits: [
        "Multiple themed setups available",
        "Indoor & outdoor backdrops",
        "Fairy lights & decorations",
        "Professional lighting options",
        "Props & accessories available",
        "Flexible timing slots"
      ],
      perfectFor: ["Pre-Wedding Photoshoot", "Engagement Photos", "Couple Photoshoot", "Save the Date Shoots", "Anniversary Photos"]
    },
    "baby-moments": {
      intro: "Celebrate the joy of pregnancy and new beginnings at HIVY. From pregnancy announcements to baby showers, we create beautiful celebration spaces for these precious moments.",
      benefits: [
        "Beautiful decoration setups",
        "Gender reveal arrangements",
        "Baby shower decorations",
        "Photography-ready backdrops",
        "Private celebration space",
        "Customizable themes"
      ],
      perfectFor: ["Pregnancy Announcement", "Baby Shower", "Gender Reveal", "Maternity Photoshoot", "Godh Bharai"]
    },
    "valentines-week": {
      intro: "Celebrate Valentine's Week 2026 at HIVY with romantic experiences from Rose Day to Valentine's Day. Each day of Valentine's Week deserves a special celebration, and we're here to make it magical.",
      benefits: [
        "Special Valentine's decorations",
        "Rose Day romantic setups",
        "Propose Day arrangements",
        "Candlelight dinner packages",
        "Limited period special offers",
        "Priority booking for Feb 7-14"
      ],
      perfectFor: ["Rose Day", "Propose Day", "Chocolate Day", "Valentine's Day", "Valentine's Week Complete"]
    }
  };
  
  const content = serviceContent[service.slug] || {
    intro: service.description,
    benefits: ["Private celebration space", "Beautiful decorations", "Romantic ambiance", "Food & beverages", "Photography options", "Personalized experience"],
    perfectFor: service.keywords.slice(0, 5).map(k => k.title)
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-amber-600">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 via-stone-600 to-yellow-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <span className="text-2xl mr-2">{service.emoji}</span> {service.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              {service.name} in Surat
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" className="bg-white text-yellow-800 hover:bg-yellow-50 font-semibold">
                  View Our Packages <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <FFCBookNowButton 
                pageTitle={service.name} 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Why Choose HIVY for {service.name}?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We create magical celebration experiences that you'll cherish forever
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Packages */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-800 text-white">
              <Sparkles className="h-4 w-4 mr-2" /> Recommended Setups
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Perfect Packages for {service.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our specially curated setups designed for your celebration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recommendedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-800 text-white font-bold">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-800 transition-colors">
                      {pkg.emoji} {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {pkg.shortDescription}
                    </p>
                    <div className="flex items-center text-yellow-800 font-medium">
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-yellow-800 hover:bg-yellow-900 text-white">
                View All 6 Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              {service.name} Experiences We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of {service.name.toLowerCase()} services in Surat
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {service.keywords.map((keyword) => (
              <Link key={keyword.slug} href={`/${keyword.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 hover:border-yellow-800 border-2 border-transparent">
                  <CardContent className="p-4 text-center">
                    <span className="text-3xl mb-2 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm text-gray-800 hover:text-yellow-800 transition-colors">
                      {keyword.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Perfect For
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our {service.name.toLowerCase()} setups are ideal for
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {content.perfectFor.map((item, index) => (
              <Badge key={index} className="bg-white/10 text-white border-white/20 px-4 py-2 text-base">
                <Heart className="h-4 w-4 mr-2 text-red-400" /> {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">
                  Visit HIVY for Your {service.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in Adajan, Surat, we're easily accessible from all parts of the city. Book your {service.name.toLowerCase()} celebration today!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-yellow-800 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{siteConfig.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-yellow-800" />
                    <a href={`tel:${siteConfig.phone}`} className="text-gray-700 hover:text-yellow-800 font-medium">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-yellow-800" />
                    <p className="text-gray-700">Open Daily: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Quick Booking</h3>
                <p className="text-gray-600 mb-6">
                  Ready to book your {service.name.toLowerCase()}? Contact us now for instant confirmation!
                </p>
                <div className="space-y-4">
                  <Link href="/packages" className="block">
                    <Button className="w-full bg-yellow-800 hover:bg-yellow-900 text-white" size="lg">
                      Browse Packages
                    </Button>
                  </Link>
                  <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm interested in ${service.name} at HIVY.`} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema would go here */}

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
