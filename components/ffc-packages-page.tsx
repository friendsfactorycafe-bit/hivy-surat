'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

const packagesFaqs = [
  { question: "What packages does HIVY offer for celebrations?", answer: "HIVY offers 5 unique celebration packages: Tent of Romance (₹6500), Fairy Tale Proposals (₹6300), BoHo Chic (₹5700), Swing of LOVE (₹5100), and Elite Group Setup (₹5400). Each package includes 3 hours private venue, decorations, cake, and dining." },
  { question: "Which HIVY package is best for proposals?", answer: "Tent of Romance (₹6500) and Fairy Tale Proposals (₹6300) are most popular for proposals. Both offer romantic private settings with stunning decorations perfect for asking the big question." },
  { question: "Do all packages include cake?", answer: "Yes, all HIVY packages include a complimentary celebration cake. Premium cake upgrades are available at additional cost for custom designs or larger sizes." },
  { question: "Can I customize any package?", answer: "Absolutely! Every package is fully customizable. You can add extra decorations, change color schemes, include personalized messages, and incorporate special elements to match your celebration vision." },
  { question: "How long is each package booking?", answer: "All packages include 3 hours of exclusive venue access. Extended time can be arranged based on availability for an additional charge." },
  { question: "What's included in the dining experience?", answer: "Each package includes a multi-course dining experience with welcome drinks, appetizers, main courses, and dessert. Menu preferences and dietary requirements can be accommodated." },
  { question: "Which package is best for anniversaries?", answer: "All packages work beautifully for anniversaries. Tent of Romance offers intimacy, BoHo Chic provides warm ambiance, and Swing of LOVE creates a playful romantic atmosphere." },
  { question: "Is photography included in packages?", answer: "Photography is available as an add-on for ₹2700, including 10-15 edited photos and a 30-45 second reel with same-day delivery." },
  { question: "How do I choose between packages?", answer: "Consider your occasion, aesthetic preferences, and budget. Our team is happy to share photos and videos of each setup to help you decide. Contact us on WhatsApp for personalized recommendations." },
  { question: "Can I book any package for a birthday celebration?", answer: "Yes! All packages are perfect for birthdays. We customize decorations with birthday balloons, personalized messages, and birthday-specific touches for any package you choose." }
];

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

  const packagesFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packagesFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesFaqJsonLd) }}
      />
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
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-0.5 md:mb-1 group-hover:text-amber-800 transition-colors leading-tight">
                      {pkg.name} <span className="hidden sm:inline">{pkg.emoji}</span>
                    </h2>
                    <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-1 md:mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-base sm:text-lg md:text-xl font-bold text-amber-800">
                      {formatPrice(pkg.price)}
                    </p>
                    {/* View Details */}
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] sm:text-xs text-amber-700 font-medium flex items-center gap-1 hover:text-amber-900">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
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

      {/* SEO Content Section */}
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">Complete Guide to HIVY's Celebration Packages</h2>
          <div className="prose prose-lg prose-amber max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-amber-900 mt-6">Why Private Venue Celebrations Are Trending in Surat</h3>
            <p>
              The way Surat celebrates special moments has evolved dramatically. Couples and families increasingly prefer private venue celebrations over traditional restaurant gatherings for deeply personal reasons. At HIVY, we've witnessed this shift firsthand, with hundreds of celebrations happening in our exclusive private spaces every month. Privacy allows genuine emotional expressions without the discomfort of public attention, whether it's a heartfelt proposal, an intimate anniversary dinner, or a surprise birthday reveal. The trend reflects a growing desire for meaningful experiences over generic celebrations, where every decoration, every song, and every moment is curated specifically for you.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">What Distinguishes Each HIVY Package Aesthetically</h3>
            <p>
              Each of our five celebration packages offers a distinct visual identity and atmosphere. The Tent of Romance creates an intimate cocoon with draped fabrics, twinkling fairy lights, and lush decorations that envelope couples in luxury. Fairy Tale Proposals transports you into a storybook setting with grand archways, cascading flowers, and dramatic lighting perfect for life's biggest questions. BoHo Chic brings contemporary warmth with macramé accents, earthy textures, and bohemian elegance that photographs beautifully. Swing of LOVE features our signature decorated swing setup surrounded by romantic elements, creating playful yet intimate vibes. The Elite Group Setup offers sophisticated arrangements that accommodate small gatherings while maintaining HIVY's signature romantic touch.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">How HIVY Packages Compare to Traditional Restaurants</h3>
            <p>
              Restaurant celebrations come with inherent limitations: crowded environments, time restrictions, standard decorations, and constant interruptions from staff and other guests. HIVY packages transform this experience entirely. You receive three hours of completely private venue access with no strangers walking past your table, no rushed service to accommodate the next reservation, and no generic "Happy Anniversary" sign that's been used a hundred times before. Every decoration is freshly set up for your celebration, every playlist is curated to your preferences, and our team focuses exclusively on making your experience perfect.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">The Booking to Celebration Journey</h3>
            <p>
              Booking a HIVY package is designed to be seamless. You start by browsing our five packages online or through WhatsApp, selecting the aesthetic that resonates with your occasion. Once you choose a package and date, our team confirms availability and discusses any customizations you desire. We collect necessary details including dietary preferences, personalization requests, and timing preferences. On celebration day, our team sets up your entire experience before your arrival, from decorations to dining arrangements. You simply walk in with your partner or guests and step into a fully prepared celebration space. The three-hour session includes welcome drinks, romantic ambiance, your selected dining experience, celebration cake, and background music throughout.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Understanding Your 3-Hour Exclusive Access</h3>
            <p>
              The three hours included in every package provide ample time for a complete celebration experience. Typically, the first thirty minutes involve arriving, taking photos with the setup, and settling in with welcome drinks. The next ninety minutes cover your dining experience: appetizers, main courses, and conversations without any rush. The remaining hour is perfect for cake cutting, more photos, music enjoyment, and simply being present with each other in a beautiful setting. Many couples tell us this uninterrupted quality time is worth more than any material gift.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">The HIVY Dining Experience Explained</h3>
            <p>
              Food at HIVY isn't an afterthought—it's integral to your celebration. Each package includes a thoughtfully composed multi-course meal starting with welcome drinks and appetizers, followed by main courses from both Indian and Continental cuisines, and culminating in dessert alongside your celebration cake. We accommodate vegetarian preferences, spice tolerances, and dietary restrictions with advance notice. The dining experience is served at your comfort pace, not rushed or delayed, allowing conversations and celebration to flow naturally around your meal.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Customization Possibilities for Every Package</h3>
            <p>
              While each package comes with beautiful standard inclusions, the real magic happens through customization. You can add extra balloon arrangements, rose petal pathways, personalized banners with names and messages, photo frames featuring your relationship memories, LED letter lights spelling meaningful words, and color theme adjustments to match preferences. Birthday celebrations get birthday-specific decorations, anniversaries receive romantic touches, and proposals get the dramatic reveal elements that make the moment perfect. Our team welcomes creative requests and works to incorporate personal touches that make celebrations uniquely yours.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Choosing the Right Package: Expert Tips</h3>
            <p>
              Start by considering your primary celebration goal. Proposals lean toward Tent of Romance or Fairy Tale for maximum romantic impact. Anniversaries work beautifully across all packages but particularly shine in BoHo Chic's warm ambiance or Tent of Romance's intimate setting. Birthdays often gravitate toward Swing of LOVE for its playful energy or Fairy Tale for whimsical touches. Group celebrations suit Elite Group Setup's accommodating layout. Budget also guides decisions, with Swing of LOVE offering excellent value at ₹5,100 while Tent of Romance delivers premium luxury at ₹6,500. We're always available on WhatsApp to share photos and videos of each setup to help you visualize the perfect choice.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Occasions Each Package Suits Best</h3>
            <p>
              Tent of Romance excels at proposals, honeymoon celebrations, significant anniversaries, and milestone birthdays where maximum romance is desired. Fairy Tale Proposals is designed specifically for engagement moments but also works wonderfully for first anniversaries and romantic birthdays. BoHo Chic attracts couples who appreciate contemporary aesthetics, making it perfect for Instagram-savvy celebrations, casual anniversaries, and artistic personalities. Swing of LOVE brings energetic romance suitable for younger couples, playful celebrations, and those who want unique photo opportunities. Elite Group Setup broadens possibilities to include engagement announcements, double dates, small birthday parties with close friends, and any celebration where sharing joy with a few loved ones enhances the experience.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Why HIVY Packages Are Worth the Investment</h3>
            <p>
              When you calculate the cost of replicating a HIVY experience independently—private venue rental, professional decoration, flower arrangements, candles, dining catering, cake, music setup, and coordination efforts—our packages represent remarkable value. Beyond the tangible elements, you're investing in stress-free celebration. There's no running around Surat collecting decorations, no coordinating multiple vendors, no worrying whether everything will come together. You book, you arrive, you celebrate. The memories created in these three hours often become relationship milestones that couples reference for years. For proposals, the "yes" happens in a setting designed to maximize that magical moment. For anniversaries, you reconnect in an atmosphere that honors your journey together. HIVY packages don't just provide a service—they create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {packagesFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-amber-200 px-6">
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

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
