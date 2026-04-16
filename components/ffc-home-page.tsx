'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig, getVisiblePackages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features
const experienceFeatures = [
  {
    icon: Clock,
    title: "3-Hour Private Booking",
    description: "Enjoy three exclusive hours at Our venue for your candlelight dinner or celebration"
  },
  {
    icon: Gift,
    title: "Celebration Cake Included",
    description: "Complimentary birthday/anniversary cake & non-alcoholic champagne with every package"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy Setup",
    description: "Professional balloon decorations, fairy lights & romantic photo-ready ambiance"
  },
  {
    icon: Music,
    title: "Romantic Ambiance",
    description: "Soft romantic music, candlelight setting & complete privacy for couples"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is HIVY and where is it located in Surat?",
    answer: "HIVY is Surat's premier couples-only private celebration venue—the best spot for candlelight dinners, romantic private dining, birthday surprises, and anniversary celebrations in Surat, Gujarat."
  },
  {
    question: "How do I book a candlelight dinner or birthday surprise at HIVY?",
    answer: `Simply WhatsApp ${siteConfig.phone} or call directly. Share your occasion (candlelight dinner, birthday surprise, anniversary celebration, proposal), preferred date, and number of guests. We'll confirm your booking instantly with a custom quote for your romantic celebration.`
  },
  {
    question: "What are the prices for candlelight dinner packages in Surat?",
    answer: "Our romantic celebration packages start from affordable rates and include premium private setup, mojito welcome drink, decorations, unlimited cold drinks, and gourmet dining. Contact us for current pricing on candlelight dinner packages, birthday surprise setups, and anniversary celebration deals."
  },
  {
    question: "Can I book HIVY for a marriage proposal or engagement?",
    answer: "Absolutely! HIVY is Surat's most popular proposal venue. Our romantic proposal setups feature heart arches, fairy lights, rose petals, and champagne—perfect for creating an unforgettable 'yes' moment. We've hosted 500+ successful proposals and engagements."
  },
  {
    question: "What occasions can I celebrate at HIVY Surat?",
    answer: "We specialize in candlelight dinners, birthday surprises (for boyfriend, girlfriend, husband, wife), anniversary celebrations (1st, 10th, 25th), marriage proposals, engagement parties, Valentine's Day dinners, pre-wedding shoots, pregnancy announcements, and romantic date nights."
  },
  {
    question: "What are the time slots available for candlelight dinner booking?",
    answer: "Our romantic celebration time slots are from 6 PM to 11 PM. Weekend slots for candlelight dinners and birthday surprises book fast—we recommend advance booking to secure your preferred date at Surat's best romantic restaurant."
  },
  {
    question: "Can I customize the decorations for my birthday surprise or anniversary?",
    answer: "Yes! All our celebration packages are fully customizable. Choose from balloon decorations, flower arrangements, themed backdrops, personalized messages, cakes, and more for your birthday room decoration, anniversary setup, or proposal arrangement."
  },
  {
    question: "Is HIVY a venue for couples only?",
    answer: "Yes, HIVY is 100% private and exclusively for couples. You'll have complete privacy during your booking slot—no other guests. It's the safest, most romantic, and couple-friendly celebration venue in Surat with a 4.9★ rating."
  },
  {
    question: "What areas in Surat does HIVY serve for romantic celebrations?",
    answer: "We welcome couples from all Surat areas including Vesu, Adajan, Athwa, Piplod, City Light, Althan, Varachha, Pal, Dumas Road, and more. HIVY is centrally located as the best candlelight dinner restaurant serving all of Surat."
  },
  {
    question: "What is the cancellation and rescheduling policy?",
    answer: "Rescheduling must be informed at least one day prior. Your candlelight dinner or birthday surprise booking can be rescheduled within one month, subject to availability. Please note: No Refund Policy Applicable."
  }
];

// Gallery items data - Optimized for faster loading (reduced to 16 items)
const galleryItems = [
  // Featured Images from packages
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Swing of Love Setup Surat', title: 'Swing of LOVE', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/hivy-images/5700/2.webp', alt: 'BoHo Chic Setup Surat', title: 'BoHo Chic', featured: false },
  { type: 'image', src: '/hivy-images/6300/2.webp', alt: 'Fairy Tale Proposals Surat', title: 'Fairy Tale Proposals', featured: false },
  { type: 'video', src: '/videos/InShot_20250111_162317353.mp4', alt: 'Romantic celebration video Surat', title: 'Celebration Moments', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Tent of Romance Setup Surat', title: 'Tent of Romance', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Swing setup Surat', title: 'Swing Décor', featured: false },
  { type: 'video', src: '/videos/InShot_20250217_151234749.mp4', alt: 'Anniversary celebration video Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/hivy-images/5700/3.webp', alt: 'Bohemian ambiance cafe Surat', title: 'Boho Ambiance', featured: false },
  { type: 'image', src: '/hivy-images/6300/3.webp', alt: 'Fairy tale setup decoration Surat', title: 'Magical Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/3.webp', alt: 'Romantic tent decoration Surat', title: 'Romantic Décor', featured: false },
  { type: 'video', src: '/videos/VID_20251027_181020858.mp4', alt: 'romantic celebration reel Surat', title: 'Romantic Vibes', featured: false },
  { type: 'image', src: '/hivy-images/5100/4.webp', alt: 'Romantic swing setup Surat', title: 'Love Swing', featured: false },
  { type: 'image', src: '/hivy-images/5700/4.webp', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/hivy-images/6300/4.webp', alt: 'Evening romantic celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VID_20251120_191425995.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 via-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
            <ImageIcon className="h-4 w-4 mr-2" /> Romantic Celebration Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Candlelight Dinners & Celebrations at HIVY Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real moments from birthday surprises, anniversary dinners, marriage proposals & romantic date nights at Surat's best couples-only celebration venue.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-amber-900 hover:bg-amber-800 text-white' 
              : 'border-amber-200 text-amber-900 hover:bg-amber-50'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-amber-900 hover:bg-amber-800 text-white' 
              : 'border-amber-200 text-amber-900 hover:bg-amber-50'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-amber-900 hover:bg-amber-800 text-white' 
              : 'border-amber-200 text-amber-900 hover:bg-amber-50'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover bg-stone-200"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onLoadedData={(e) => { e.currentTarget.currentTime = 0.5; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-amber-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour" prefetch={false}>
            <Button className="bg-gradient-to-r from-amber-900 to-amber-700 hover:from-amber-800 hover:to-amber-700 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
            Romantic Celebration Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Birthday Surprise & Anniversary Ideas in Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and romantic date ideas to help you plan the perfect candlelight dinner, birthday surprise, or proposal in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} prefetch={false}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-stone-200">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-amber-900 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-amber-900 to-amber-700 hover:from-amber-800 hover:to-amber-700 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero/slider2.webp', alt: 'romantic celebration Setup with Fairy Lights Surat' },
    { src: '/images/hero/slider1.webp', alt: 'Romantic Candlelight Dinner Setup at HIVY - Place for Celebrations Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // FAQ Schema (FAQPage structured data)
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HIVY - Place for Celebrations | Best Romantic Venue in Surat",
    "url": "https://hivy.co.in",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".faq-section", ".services-heading"]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://hivy.co.in/#business"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* Speakable Schema for Voice Assistants & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-10 md:py-28 relative">
          {/* MOBILE LAYOUT: Form-first, compact hero */}
          <div className="lg:hidden">
            {/* Compact Hero Text for Mobile */}
            <div className="text-center mb-5">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight font-serif">
                HIVY - Place for Celebrations
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-3">
                {siteConfig.tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full">
                  <Shield className="h-3 w-3" /> 100% Private
                </span>
                <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full">
                  <Star className="h-3 w-3" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full">
                  <Users className="h-3 w-3" /> 3000+ Couples
                </span>
              </div>
            </div>

            {/* Booking Form Immediately Visible on Mobile */}
            <div>
              <FFCBookingForm variant="hero" />
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3 mt-4">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white py-5 text-sm">
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  WhatsApp
                </Button>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex-1">
                <Button size="lg" className="w-full bg-white/20 hover:bg-white/30 text-white py-5 text-sm border border-white/30">
                  <Phone className="h-4 w-4 mr-1.5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* DESKTOP LAYOUT: Side-by-side text + form */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in Surat
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                HIVY - Place for Celebrations
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Surat's premier venue for romantic candlelight dinners, birthday surprises, anniversary celebrations, marriage proposals & intimate date nights. 100% private, couples-only experience.
              </p>
              
              <div className="flex flex-row gap-4">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-6">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4 text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form - Desktop */}
            <div>
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section - Mobile Optimized with Full Thumbnails */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-stone-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-3 md:mb-4 bg-amber-100 text-amber-900 border-amber-200">
              Candlelight Dinner & Celebration Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 font-serif">
              Romantic Celebration Packages in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              5 unique private setups for candlelight dinners, birthday surprises, anniversary celebrations & proposals
            </p>
          </div>
          
          {/* Mobile: Vertical scroll with large thumbnails */}
          <div className="md:hidden space-y-4">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`} prefetch={false}>
                <Card className="overflow-hidden border-amber-100 group active:scale-[0.98] transition-transform">
                  <div className="flex gap-0">
                    {/* Large thumbnail on left */}
                    <div className="relative w-[42%] min-h-[140px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={pkg.thumbnail}
                        alt={`${pkg.name} - Romantic celebration package Surat`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="45vw"
                        quality={75}
                        loading="lazy"
                      />
                      <Badge className="absolute top-2 left-2 bg-amber-800/90 text-white text-[10px] px-1.5 py-0.5">
                        Setup {index + 1}
                      </Badge>
                    </div>
                    {/* Details on right */}
                    <CardContent className="p-3 flex flex-col justify-center flex-1">
                      <h3 className="font-bold text-sm mb-1 text-gray-900 leading-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-500 text-[11px] line-clamp-2 mb-2 leading-snug">
                        {pkg.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-amber-800">
                          {formatPrice(pkg.price)}
                        </p>
                        <span className="text-[11px] text-amber-700 font-semibold flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-full">
                          Book <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Desktop/Tablet: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`} prefetch={false}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-amber-100 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={`${pkg.name} - Best romantic package Surat`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1200px) 33vw, 400px"
                      quality={75}
                      loading="lazy"
                    />
                    <Badge className="absolute top-2 left-2 bg-amber-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-amber-800 transition-colors leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {pkg.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-amber-800">
                        {formatPrice(pkg.price)}
                      </p>
                      <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
              Romantic Celebration Services in Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Perfect For Every Romantic Celebration in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate candlelight dinners to grand marriage proposals, surprise birthday parties to anniversary celebrations—we create magical moments for couples at Our venue in Surat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-amber-100 group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
              Why Couples Choose HIVY Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Romantic Date Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every couple deserves a private, romantic celebration. Our packages include everything for an unforgettable candlelight dinner or birthday surprise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-900/20 text-amber-300 border-amber-900/30">
                Romantic Dinner Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Gourmet Cuisine for Candlelight Dinners
              </h2>
              <p className="text-gray-300 mb-8">
                Curated café-style delicacies crafted for romantic date nights, anniversary dinners & special celebrations in Surat
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mojito Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing mojito welcome drink to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges, nachos & rich cheesy sauce</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/Food hivy.webp" 
                  alt="HIVY - Place for Celebrations Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
              <MapPin className="h-4 w-4 mr-2" /> Candlelight Dinner & Celebrations Near You
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Best Romantic Restaurant Serving All Areas in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for a candlelight dinner near Vesu, birthday surprise venue in Adajan, or anniversary restaurant in Athwa—we serve couples from all areas of Surat
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                prefetch={false}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-amber-800 hover:text-white transition-colors border border-stone-300"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <FFCReviewsSlider />

      {/* Gallery Section */}
      <GallerySection />

      {/* Rich SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 font-serif text-center">
                HIVY — Surat's Premier Romantic Celebration Venue for Couples
              </h2>
              
              <p className="text-gray-600 mb-6">
                Surat, the Diamond City of India, is a city that knows how to celebrate. From grand weddings to intimate gatherings, the people of Surat understand that every milestone deserves recognition. Yet for years, couples looking for truly private romantic celebrations faced a gap — restaurants felt public, hotels were impersonal, and home celebrations lacked the wow factor. HIVY - Place for Celebrations was born to fill this gap, offering Surat's couples a dedicated space where romance, privacy, and memorable experiences come together seamlessly.
              </p>

              <p className="text-gray-600 mb-6">
                Located on the 2nd Floor of The Boulevard, near Pratham Circle on Galleria Street in Adajan, our venue has quickly become the most trusted name for romantic celebrations in Surat. Whether couples are looking for a candlelight dinner to reignite the spark, a birthday surprise that leaves their partner speechless, an anniversary celebration that honours their journey, or a proposal setting that guarantees a "yes" — HIVY delivers experiences that exceed expectations every single time.
              </p>

              <h3 className="text-2xl font-bold mb-4 font-serif">What Makes HIVY Different from Restaurants & Hotels</h3>
              <p className="text-gray-600 mb-6">
                The fundamental difference lies in exclusivity. When you book a celebration at HIVY, the entire setup is exclusively yours. Unlike restaurants where other diners surround you, or hotels where event spaces feel corporate, our venue provides a genuinely private romantic experience. No strangers at the next table, no background noise from other parties, and no rushing to vacate for the next booking. Your three-hour celebration window is yours to enjoy at your own pace.
              </p>
              <p className="text-gray-600 mb-6">
                Our setups are not simply tables and chairs with candles thrown in. Each of our six unique celebration packages represents a distinct aesthetic vision — from the bohemian warmth of our Tent of Romance to the elegant sophistication of our Swing of Love. These setups are designed by our creative team, tested through thousands of celebrations, and continuously enhanced based on couple feedback and current trends.
              </p>

              <h3 className="text-2xl font-bold mb-4 font-serif">The HIVY Experience — From Booking to Goodbye</h3>
              <p className="text-gray-600 mb-6">
                Every HIVY celebration follows a thoughtful journey. It begins when you contact us — typically via WhatsApp, which allows for quick, conversational planning. Our team understands your occasion, recommends suitable packages, discusses any personalisation requests, and confirms your preferred date and time slot. We offer four daily slots — Lunch (12-3 PM), Evening (4-7 PM), Dinner (7-10 PM), and Late Night (10 PM-1 AM) — ensuring flexibility for every schedule.
              </p>
              <p className="text-gray-600 mb-6">
                On celebration day, our team begins setup preparation three hours before your arrival. Every balloon is placed, every candle is positioned, every flower is arranged, and your personalised touches are incorporated. When you and your partner arrive, you walk into a fully realised romantic setting with soft music already playing and drinks ready to be served. The next three hours unfold with delicious food, meaningful conversations, photograph-worthy moments, and the kind of undivided togetherness that modern life rarely allows.
              </p>

              <h3 className="text-2xl font-bold mb-4 font-serif">Celebrations We Specialise In</h3>
              <p className="text-gray-600 mb-6">
                Our most popular celebrations include birthday surprises (where we coordinate with the planning partner to maintain the element of surprise), candlelight dinners (perfect for date nights and special occasions), anniversary celebrations (from 1st to 50th), marriage proposals (with ring reveal coordination), surprise dates (for keeping the romance alive), and pre-wedding photoshoots (with multiple setup options in one venue). We also host baby announcement parties, gender reveals, Valentine's Week celebrations, and any occasion where love needs to be celebrated.
              </p>

              <h3 className="text-2xl font-bold mb-4 font-serif">Trusted by Over 3,000 Surat Couples</h3>
              <p className="text-gray-600 mb-6">
                Numbers speak volumes, but the stories behind them speak louder. Over 3,000 couples from across Surat — from Adajan, Vesu, and Athwa to Varachha, Althan, and Pal — have celebrated their special moments with us. Many return for multiple occasions, turning HIVY into their go-to celebration venue. Our 4.9-star rating on Google, built entirely on genuine reviews, reflects the consistency of experiences we deliver. We invite you to read those reviews and see why Surat's couples trust HIVY for their most important moments.
              </p>
              <p className="text-gray-600 mb-6">
                Whether today is a birthday, an anniversary, a proposal day, or simply a day you want to make special for someone you love — HIVY - Place for Celebrations is ready to turn your vision into a beautiful reality. Contact us at {siteConfig.phone} to begin planning your celebration.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">
            Why HIVY is Surat's Most Trusted Celebration Venue
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="hero-description">
              In a city known for its entrepreneurial spirit and warm hospitality, Surat has witnessed a remarkable transformation in how couples celebrate their special moments. At the forefront of this evolution stands HIVY - Place for Celebrations, a venue that has redefined what romantic celebrations mean for modern couples. Situated at the prestigious The Boulevard complex in Adajan, HIVY has emerged as the undisputed leader in private celebration experiences, earning the trust of thousands of couples who seek something extraordinary beyond the ordinary restaurant dinner or hotel booking.
            </p>
            <p className="hero-description">
              What truly sets HIVY apart from every other celebration option in Surat is our unwavering commitment to creating exclusive, private experiences. When couples step into our venue, they enter a world designed solely for them — no other diners, no shared spaces, no compromises. This philosophy of absolute privacy has resonated deeply with Surat couples who value intimate moments away from the public eye. Our 4.9-star Google rating, built on hundreds of genuine reviews from couples across the city, stands as testament to the consistent excellence we deliver for every single celebration.
            </p>

            <h3 className="text-2xl font-semibold text-amber-700">The Complete Private Celebration Experience</h3>
            <p className="hero-description">
              A celebration at HIVY is not merely an event — it is a carefully orchestrated experience that engages all senses and creates lasting memories. From the moment you enquire about a booking, our dedicated team works to understand your vision, your preferences, and the story you want to tell through your celebration. Whether you are planning a candlelight dinner for your partner, a surprise birthday celebration that will leave them speechless, or an anniversary dinner that honours your journey together, every element is customised to reflect your unique relationship.
            </p>
            <p className="hero-description">
              Our three-hour private booking ensures you never feel rushed. Unlike restaurants where servers hover impatiently or hotels where the next event is being set up in an adjacent room, HIVY gives you complete ownership of your celebration time. You can linger over conversations, take unlimited photographs, enjoy multiple courses at your own pace, and savour every moment without watching the clock. This unhurried intimacy is what couples remember long after the celebration ends.
            </p>
            <p className="hero-description">
              The setup quality at HIVY represents the pinnacle of celebration aesthetics in Surat. Our six signature packages — including the ethereal Swing of Love, the bohemian-inspired BoHo Chic, the majestic Fairy Tale setup, and the intimate Tent of Romance — are not merely decorations but complete transformations of space. Premium balloons, fairy lights, rose petals, candles, customised backdrops, and thoughtful touches like personalised name boards and flower arrangements create Instagram-worthy settings that photography simply cannot capture fully. You must experience it to understand why our couples call it magical.
            </p>

            <h3 className="text-2xl font-semibold text-amber-700">Why Surat Couples Choose HIVY</h3>
            <p className="hero-description">
              The reasons couples from Vesu, Adajan, Athwa, Piplod, City Light, Varachha, Althan, Pal, and every corner of Surat choose HIVY are both practical and emotional. Practically, we offer transparent pricing with no hidden costs, flexible time slots from noon to late night, comprehensive packages that include food delicious multi-course meals and beverages, complimentary celebration cakes, professional photography assistance, and customisation options for any special request. Emotionally, we provide something far more valuable — the confidence that your celebration will be perfect.
            </p>
            <p className="hero-description">
              Many of our couples are celebrating major milestones — first anniversaries that mark a year of married life, decade anniversaries that reflect enduring love, milestone birthdays that deserve grand gestures, or proposals where one partner has spent months planning the perfect moment. These occasions carry profound emotional significance, and the stakes are high. Couples choose HIVY because they know we understand this weight and we deliver accordingly. Our team comprises celebration specialists who have coordinated thousands of romantic events and who anticipate needs before they are expressed.
            </p>
            <p className="hero-description">
              Word-of-mouth recommendations drive much of our business, and this speaks volumes. When a couple has an exceptional experience, they tell friends, family, and colleagues. Those recommendations carry credibility that no advertisement can match. Walk into any gathering in Surat and mention romantic celebrations, and chances are someone will enthusiastically share their HIVY experience. This organic growth through genuine satisfaction remains our proudest achievement.
            </p>

            <h3 className="text-2xl font-semibold text-amber-700">Our Commitment to Privacy & Excellence</h3>
            <p className="hero-description">
              Privacy is not merely a feature at HIVY — it is our foundational principle. We understand that romantic moments are deeply personal, and couples deserve a space where they can be completely themselves without self-consciousness or external distractions. Our venue design, booking system, and operational protocols all prioritise this privacy. Only one couple occupies our celebration space at any given time, and our staff is trained to be present when needed but invisible otherwise.
            </p>
            <p className="hero-description">
              Excellence, similarly, is embedded in every aspect of our operations. The ingredients in our kitchen are fresh and premium. The decorations are new and meticulously arranged. The music playlists are carefully curated for romantic ambiance. The lighting is professionally designed to create warmth without harshness. The serving temperature of food is precisely maintained. These details might seem minor individually, but collectively they create an experience that feels effortlessly perfect — though considerable effort goes into achieving that effortlessness.
            </p>
            <p className="hero-description">
              Our quality commitment extends to continuous improvement. After every celebration, we reflect on feedback both given and implied. We update our setups seasonally to incorporate new design trends. We train our staff regularly to enhance service quality. We upgrade our equipment and technology to match evolving couple expectations. This pursuit of excellence has no finish line — we simply keep getting better.
            </p>

            <h3 className="text-2xl font-semibold text-amber-700">Perfect For Every Romantic Occasion</h3>
            <p className="hero-description">
              The versatility of HIVY celebrations covers virtually every romantic occasion couples wish to mark. Candlelight dinners remain our most popular offering — perfect for reigniting romance, celebrating monthly anniversaries, or simply reminding your partner that love needs no special reason. Birthday celebrations transform into unforgettable surprises when coordinated with our team, who excel at maintaining secrecy while orchestrating dramatic reveals. Anniversary celebrations, from the first to the golden jubilee, receive the reverence they deserve with setups that honour the years of commitment.
            </p>
            <p className="hero-description">
              Marriage proposals at HIVY carry exceptional success rates — not that we take credit for the love, but our settings undoubtedly enhance the magic of that life-changing question. We work closely with proposing partners to plan ring reveal moments, coordinate photography, arrange post-proposal champagne toasts, and even organise surprise appearances by family or friends if desired. The joy of a successful HIVY proposal energises our entire team.
            </p>
            <p className="hero-description">
              Beyond these marquee occasions, we celebrate Valentine's Day with themed setups throughout February, host pre-wedding couple shoots that provide stunning backdrops, facilitate baby announcement celebrations where couples share pregnancy news, and create surprise date nights that keep long-term relationships fresh and exciting. Whatever your reason for celebrating love, HIVY has a setting, a package, and a team ready to make it exceptional. Contact us today and discover why over three thousand Surat couples consider HIVY their trusted celebration partner.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
              FAQ - Candlelight Dinner & Celebrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Common Questions About Romantic Celebrations in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking candlelight dinners, birthday surprises & anniversary celebrations at HIVY
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Book Your Candlelight Dinner or Birthday Surprise Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create unforgettable romantic memories at Surat's best private celebration venue. Perfect for anniversaries, proposals, date nights & special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
