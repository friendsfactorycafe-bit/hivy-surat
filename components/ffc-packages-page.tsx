'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();

  // JSON-LD Schema for packages listing
  const packagesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "HIVY Romantic Celebration Packages",
        "description": "5 unique romantic celebration setups at HIVY Surat",
        "numberOfItems": visiblePackages.length,
        "itemListElement": visiblePackages.map((pkg, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": pkg.name,
            "description": pkg.shortDescription,
            "url": `https://hivy.co.in/packages/${pkg.slug}`,
            "image": `https://hivy.co.in${pkg.thumbnail}`,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": pkg.price,
              "availability": "https://schema.org/InStock"
            }
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hivy.co.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Packages",
            "item": "https://hivy.co.in/packages"
          }
        ]
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning romantic setups designed to make your celebration unforgettable
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                      quality={90}
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-amber-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-2 sm:p-3 md:p-4">
                    <h2 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold mb-0.5 md:mb-1 group-hover:text-amber-800 transition-colors leading-tight">
                      {pkg.name} <span className="hidden sm:inline">{pkg.emoji}</span>
                    </h2>
                    <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-1 md:mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-amber-800">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Package</h2>
            <p className="text-gray-600">All our packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your evening" },
              { icon: "🍰", title: "Celebration Cake", desc: "Complimentary cake included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies throughout" },
              { icon: "🕯️", title: "Candle Setup", desc: "Warm candlelight ambiance" },
              { icon: "🎈", title: "Decorations", desc: "Beautiful thematic decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
