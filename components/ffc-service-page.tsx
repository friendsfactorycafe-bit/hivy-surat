'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { ServiceCategory, getVisiblePackages, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateServicePageContent } from '@/lib/ffc-unique-content';

interface ServicePageProps {
  service: ServiceCategory;
}

export default function FFCServicePage({ service }: ServicePageProps) {
  // Get related packages
  const relatedPackages = getVisiblePackages().slice(0, 4);

  // Generate unique rich content for this service
  const serviceContent = generateServicePageContent(service);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-stone-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-amber-800">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-800 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/slider2.webp"
            alt={`${service.name} at HIVY Surat`}
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
                {service.emoji} {service.name}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                {service.name} in Surat
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9 Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
              </div>
            </div>
            
            {/* Booking Form */}
            <div>
              <FFCBookingForm pageTitle={`${service.name} Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Why Choose HIVY - Place for Celebrations for {service.name}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🔒", title: "100% Private", desc: "Exclusive booking for couples" },
              { emoji: "🌙", title: "Stunning Setup", desc: "elegant indoor options" },
              { emoji: "🍽️", title: "Delicious Food", desc: "Curated café-style menu" },
              { emoji: "📸", title: "Photo-Ready", desc: "Instagram-worthy décor" },
            ].map((item, index) => (
              <Card key={index} className="border-stone-200 text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages for this Service */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Packages
            </h2>
            <p className="text-gray-600">Choose from our romantic celebration packages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-amber-800 transition-colors line-clamp-1">
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
          
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button className="bg-amber-800 hover:bg-amber-900">
                View All Packages <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rich Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-600 mb-8 whitespace-pre-line">
                {serviceContent.introduction}
              </div>

              {serviceContent.sections.map((section, idx) => (
                <div key={idx} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 font-serif">{section.heading}</h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* What's Included */}
              <div className="bg-stone-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">✨ What Every {service.name} Package Includes</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {serviceContent.inclusions.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-amber-800 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
                <h3 className="text-xl font-bold mb-4">💬 What Couples Say About Our {service.name}</h3>
                <div className="text-gray-600 italic whitespace-pre-line">
                  {serviceContent.testimonials}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Keywords/Related Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Popular {service.name} Services
            </h2>
            <p className="text-gray-600">Explore our specialized {service.name.toLowerCase()} services in Surat</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.keywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/services/${service.slug}/${keyword.slug}`}
                className="block"
              >
                <Card className="border-amber-100 hover:border-amber-200 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-amber-800 transition-colors flex items-center justify-between">
                      {keyword.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-amber-800" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Across Surat
            </h2>
            <p className="text-gray-600">We serve all areas of Surat</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {suratAreas.slice(0, 15).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-amber-800 hover:text-white transition-colors border border-stone-300 text-sm"
              >
                {service.name} in {area.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-amber-800 rounded-full text-white hover:bg-amber-900 transition-colors text-sm"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">
                Book Your {service.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to create unforgettable memories? Fill out the form and our team will contact you shortly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-amber-800" />
                  <span>No commitment booking request</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-amber-800" />
                  <span>Quick WhatsApp confirmation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-amber-800" />
                  <span>Flexible rescheduling available</span>
                </div>
              </div>
            </div>
            
            <div>
              <FFCBookingForm pageTitle={`${service.name} Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO & AI visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": serviceContent.faqs.map((faq: { question: string; answer: string }) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        }) }}
      />

      {/* HowTo Schema for AI visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": `How to Book ${service.name} at HIVY in Surat`,
          "description": `Step-by-step guide to book a ${service.name.toLowerCase()} experience at HIVY – Place for Celebrations, Surat's best romantic celebration venue.`,
          "totalTime": "PT10M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": "5100"
          },
          "step": [
            {
              "@type": "HowToStep",
              "position": 1,
              "name": "Choose Your Package",
              "text": `Browse HIVY's celebration packages starting from ₹5,100 to ₹6,500. Select a package that matches your ${service.name.toLowerCase()} needs — Swing of Love, Elite Group Setup, BoHo Chic, Fairy Tale Proposals, or Tent of Romance.`,
              "url": "https://hivy.co.in/packages"
            },
            {
              "@type": "HowToStep",
              "position": 2,
              "name": "Contact HIVY to Book",
              "text": "WhatsApp or call +91 9727027278 with your preferred date, time slot, and package choice. Our team responds within 30 minutes during operating hours (11 AM – 11 PM).",
              "url": "https://hivy.co.in/contact"
            },
            {
              "@type": "HowToStep",
              "position": 3,
              "name": "Confirm with Advance Deposit",
              "text": "Pay a 50% advance deposit via UPI (GPay/PhonePe), bank transfer, or cash to confirm your booking. You'll receive a confirmation message with all details."
            },
            {
              "@type": "HowToStep",
              "position": 4,
              "name": "Share Your Customisation Requests",
              "text": `Tell us about any special requests for your ${service.name.toLowerCase()} — personalised banners, specific flowers, cake flavour preferences, Jain food requirements, or custom decorations.`
            },
            {
              "@type": "HowToStep",
              "position": 5,
              "name": "Arrive and Celebrate",
              "text": `Arrive at HIVY, Adajan-Pal, Surat at your booked time. Your private ${service.name.toLowerCase()} tent will be fully prepared with decorations, dining setup, and your personal host ready to welcome you.`
            }
          ]
        }) }}
      />

      {/* FAQ Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} FAQs
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {serviceContent.faqs.map((faq, index) => (
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
      <FFCGalleryCompact title={`${service.name} Gallery`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
