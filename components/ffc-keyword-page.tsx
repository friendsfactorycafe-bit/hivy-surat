'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { ServiceCategory, ServiceKeyword, getVisiblePackages, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateKeywordPageContent } from '@/lib/ffc-unique-content';

interface KeywordPageProps {
  service: ServiceCategory;
  keyword: ServiceKeyword;
}

export default function FFCKeywordPage({ service, keyword }: KeywordPageProps) {
  // Get related packages
  const relatedPackages = getVisiblePackages().slice(0, 4);

  // Get related keywords (excluding current)
  const relatedKeywords = service.keywords.filter(k => k.slug !== keyword.slug).slice(0, 6);

  // Generate unique content for this keyword page
  const uniqueContent = generateKeywordPageContent(service, keyword);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-stone-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-yellow-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-yellow-800">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href={`/services/${service.slug}`} className="text-gray-500 hover:text-yellow-800">{service.name}</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-yellow-800 font-medium">{keyword.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 via-stone-500 to-yellow-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {service.emoji} HIVY - Place for Celebrations
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Create magical {keyword.title.toLowerCase()} moments at HIVY - Place for Celebrations. Premium romantic celebration venue with stunning setups and unforgettable experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={keyword.title} 
                  className="bg-white text-yellow-800 hover:bg-stone-100 text-lg px-8 py-6" 
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
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[7rem]">{service.emoji}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} at HIVY - Place for Celebrations
                </h2>
                
                {/* Introduction - from generated content */}
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {uniqueContent.introduction}
                </div>

                <div className="bg-stone-100 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-yellow-800" />
                    What's Included
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "3 Mesmerizing Hours of Private Celebration",
                      "Welcome Drink & Celebration Cake",
                      "Romantic Decorations & Setup",
                      "Candle-Lit Ambiance",
                      "Soft Romantic Music",
                      "Photo-Ready Backdrop",
                      "Delicious Café-Style Food",
                      "Panoramic City Views"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-yellow-800 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic content sections */}
                {uniqueContent.sections.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                <h3 className="text-xl font-bold mb-4">
                  Why Choose HIVY - Place for Celebrations?
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {uniqueContent.whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-800 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-800" />
                    Available Time Slots
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Lunch</p>
                      <p className="text-gray-600 text-sm">12:00 PM - 3:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Evening</p>
                      <p className="text-gray-600 text-sm">4:00 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Dinner</p>
                      <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Late Night</p>
                      <p className="text-gray-600 text-sm">10:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-stone-100 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">💬 What Couples Say</h3>
                  <div className="text-gray-600 italic whitespace-pre-line">
                    {uniqueContent.testimonialContent}
                  </div>
                </div>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} Packages
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-stone-200 group">
                        <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center">
                          <span className="text-5xl">{pkg.emoji}</span>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-yellow-800 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-yellow-800">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button variant="outline" className="border-yellow-800 text-yellow-800 hover:bg-stone-100">
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
                <FFCBookingForm pageTitle={keyword.title} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant response on WhatsApp
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

      {/* Related Keywords */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Related {service.name} Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedKeywords.map((kw) => (
              <Link 
                key={kw.slug}
                href={`/services/${service.slug}/${kw.slug}`}
              >
                <Card className="border-stone-200 hover:border-yellow-200 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-yellow-800 transition-colors flex items-center justify-between">
                      {kw.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-800" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-2xl font-bold mb-4 font-serif">
              {keyword.title} Across Surat
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {suratAreas.slice(0, 12).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-stone-100 rounded-full text-gray-700 hover:bg-yellow-800 hover:text-white transition-colors border border-stone-300 text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs about {keyword.title}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-800 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready for Your {keyword.title}?
          </h2>
          <p className="text-white/90 mb-8 whitespace-pre-line">
            {uniqueContent.closingCta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton 
              pageTitle={keyword.title} 
              className="bg-white text-yellow-800 hover:bg-stone-100 text-lg px-8 py-6" 
            />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${keyword.title} Gallery`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
