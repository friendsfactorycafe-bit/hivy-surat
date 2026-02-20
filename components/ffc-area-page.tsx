'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { AreaConfig, getVisiblePackages, serviceCategories, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateAreaPageContent } from '@/lib/ffc-unique-content';

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Get nearby areas (excluding current)
  const nearbyAreas = suratAreas.filter(a => a.slug !== area.slug).slice(0, 8);

  // Generate unique rich content for this area
  const uniqueContent = generateAreaPageContent(area);

  // JSON-LD Structured Data for area page
  const areaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://hivy.co.in/${area.slug}#business`,
        "name": `HIVY - Place for Celebrations - ${area.name}`,
        "description": `Premium romantic celebration venue serving ${area.name}, Surat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals & more.`,
        "url": `https://hivy.co.in/${area.slug}`,
        "telephone": "+91-9727027278",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "252/253, 2nd Floor, The Boulevard, Near Pratham Circle",
          "addressLocality": `${area.name}, Surat`,
          "addressRegion": "Gujarat",
          "postalCode": "394510",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.1702",
          "longitude": "72.8311"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5"
        },
        "areaServed": {
          "@type": "Place",
          "name": `${area.name}, Surat, Gujarat`
        }
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
            "name": "Areas",
            "item": "https://hivy.co.in/areas"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": area.name,
            "item": `https://hivy.co.in/${area.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": uniqueContent.faqContent.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd) }}
      />
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-stone-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-amber-800">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-800 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/slider2.webp"
            alt={`Romantic celebration venue near ${area.name} Surat`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Surat
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Romantic Celebrations in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                HIVY - Place for Celebrations brings premium romantic celebration experiences to couples in {area.name}, Surat. Book birthday surprises, candlelight dinners, anniversaries & more!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm pageTitle={`${area.name} Area Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Our Services in {area.name}
            </h2>
            <p className="text-gray-600">
              All celebration services available for couples in {area.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-amber-100 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-amber-800 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      in {area.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Romantic Celebrations Near {area.name}
                </h2>
                
                {/* Rich Introduction */}
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {uniqueContent.introduction}
                </div>

                {/* Dynamic Content Sections */}
                {uniqueContent.sections.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-amber-800" />
                    What We Offer in {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {uniqueContent.servicesList.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-800 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Tips */}
                <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    Local Tips for {area.name} Visitors
                  </h3>
                  <ul className="space-y-3">
                    {uniqueContent.localTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-amber-800 font-bold">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonials */}
                <div className="bg-stone-100 rounded-xl p-6 mb-8 border border-stone-200">
                  <h3 className="text-xl font-bold mb-4">💬 What {area.name} Couples Say</h3>
                  <div className="text-gray-600 italic whitespace-pre-line">
                    {uniqueContent.testimonialContent}
                  </div>
                </div>

                {/* Nearby Areas Info */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Serving Couples Across Surat</h3>
                  <p className="text-gray-600">{uniqueContent.nearbyAreas}</p>
                </div>

                {/* Closing CTA */}
                <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white rounded-xl p-6 mb-8">
                  <div className="whitespace-pre-line">
                    {uniqueContent.closingCta}
                  </div>
                </div>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Popular Packages for {area.name} Couples
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {getVisiblePackages().slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group bg-white overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                          <Image
                            src={pkg.thumbnail}
                            alt={pkg.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-amber-800 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-amber-800">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-amber-800 hover:bg-amber-900">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Also Serving Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-amber-50 rounded-full text-gray-700 hover:bg-amber-800 hover:text-white transition-colors border border-stone-300"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-amber-800 rounded-full text-white hover:bg-amber-900 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Celebrations in {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {uniqueContent.faqContent.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-stone-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`Celebrations in ${area.name}`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
