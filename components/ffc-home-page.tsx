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
import { siteConfig, packages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features
const experienceFeatures = [
  {
    icon: Clock,
    title: "3 Mesmerizing Hours",
    description: "Three magical hours designed to create unforgettable memories"
  },
  {
    icon: Gift,
    title: "Cake & Champagne",
    description: "Complimentary cake & non-alcoholic champagne (₹500)"
  },
  {
    icon: Camera,
    title: "Photo-Ready Setup",
    description: "Instagram-worthy decorations for your special moments"
  },
  {
    icon: Music,
    title: "Romantic Music",
    description: "Soft background melodies to set the perfect mood"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is the location of HIVY?",
    answer: "HIVY is located in Surat, Gujarat—your premier spot for candlelight dinners and romantic celebrations."
  },
  {
    question: "How do I book a candlelight dinner or event?",
    answer: `WhatsApp ${siteConfig.phone} or call directly—share your occasion (anniversary, proposal), date, and guest count for instant confirmation and custom quotes.`
  },
  {
    question: "What are the starting prices for packages?",
    answer: "Our celebration packages include premium setup, mocktails, flowers, and decor. Contact us for current pricing and custom quotes."
  },
  {
    question: "Can we book for marriage proposals or engagements?",
    answer: "Absolutely—our proposal setups feature heart arches, fairy lights, and champagne for unforgettable 'yes' moments in Surat."
  },
  {
    question: "What occasions do you host?",
    answer: "Anniversary celebrations, birthday surprises, proposals, last candlelight dinners before marriage, engagements, pre-wedding shoots, and pregnancy announcements."
  },
  {
    question: "What time slots are available?",
    answer: "Evenings 6 PM–11 PM; weekends book fast—advance booking recommended for Surat's romantic peak hours."
  },
  {
    question: "Can we customize decorations and menu?",
    answer: "Fully customizable—balloons, cakes, themed backdrops, vegan mocktails for your anniversary or pregnancy announcement."
  },
  {
    question: "Is HIVY suitable for small groups or couples only?",
    answer: "Perfect for 2-3 people; intimate couple setups or family celebrations with complete privacy."
  },
  {
    question: "Is your venue private and couple-friendly?",
    answer: "Yes, absolutely! Our venue is exclusively for couples. You'll have complete privacy with no other guests during your booking slot. It's a safe, comfortable, and romantic space."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability. No Refund Policy Applicable."
  }
];

// Gallery items data - placeholder for now (images need to be added)
const galleryItems = [
  // Featured Images from packages
  { type: 'image', src: '/packages/tent-of-romance/images/12.png', alt: 'Tent of Romance Setup Surat', title: 'Tent of Romance', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/packages/fairy-tale-proposals/2.png', alt: 'Fairy Tale Proposals Surat', title: 'Fairy Tale Proposals', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/28.png', alt: 'Swing of Love Setup Surat', title: 'Swing of LOVE', featured: false },
  { type: 'video', src: '/videos/InShot_20250111_162317353.mp4', alt: 'Romantic celebration video Surat', title: 'Celebration Moments', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/46.png', alt: 'BoHo Chic Setup Surat', title: 'BoHo Chic', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/62.png', alt: 'Twin Heart Setup Surat', title: 'TwinHeart', featured: false },
  { type: 'video', src: '/videos/InShot_20250217_151234749.mp4', alt: 'Anniversary celebration video Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/13.png', alt: 'Romantic tent decoration Surat', title: 'Romantic Décor', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/3.png', alt: 'Fairy tale setup decoration Surat', title: 'Magical Setup', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/29.png', alt: 'Swing setup Surat', title: 'Swing Décor', featured: false },
  { type: 'video', src: '/videos/VID_20251027_181020858.mp4', alt: 'Rooftop celebration reel Surat', title: 'Rooftop Vibes', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/47.png', alt: 'Bohemian ambiance cafe Surat', title: 'Boho Ambiance', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/14.png', alt: 'Couple celebration Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/4.png', alt: 'Evening romantic celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VID_20251120_191425995.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/30.png', alt: 'Romantic swing setup Surat', title: 'Love Swing', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/48.png', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'video', src: '/videos/VID_20251121_210202081.mp4', alt: 'Romantic moments reel Surat', title: 'Romantic Reel', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/15.png', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/5.png', alt: 'Fairy tale celebration Surat', title: 'Fairy Tale', featured: false },
  { type: 'video', src: '/videos/Black and White Collage Love Instagram Story_20251216_193952_0000.mp4', alt: 'Anniversary dinner video Surat', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/31.png', alt: 'Surprise party Surat', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/49.png', alt: 'Romantic dinner date Surat', title: 'Dinner Date', featured: false },
  { type: 'video', src: '/videos/AQMDtltfDyiUPs-9Tr526ge47AAU7ggt4oQbeh84YLSpNx1jCUyeE9TCB1AMaEICPcMw4CEVHKukZQAlQY5hb__rRs5TpTuxbug5yA8.mp4', alt: 'Birthday surprise video Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/16.png', alt: 'Valentine setup Surat', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/6.png', alt: 'Valentine dinner Surat', title: 'Valentine Dinner', featured: false },
  { type: 'video', src: '/videos/AQNQec1KPnBvx-zrxCocMhtjjQS03bldv1cruUOwlpUkuok_31_J9WgZ6bFf7EAdNCPfxlO1zqxgOeX6nqHZFzcWqwK9tTMgRL_Kq5o.mp4', alt: 'Valentine celebration video Surat', title: 'Valentine Video', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/32.png', alt: 'Valentine romantic setup Surat', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/50.png', alt: 'Birthday surprise for girlfriend Surat', title: 'Girlfriend Surprise', featured: false },
  { type: 'video', src: '/videos/AQNoQjiBHpKRIkLzSYZj4-MJfr4wZKfP_4prtmlhZ38OjsZhQ57uV4T4iA2DmgR7_rn2vbTM-fv0CfNa_EFxl1PeHwX7CqIeoFNOlw4.mp4', alt: 'Baby moments video Surat', title: 'Special Moments', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/17.png', alt: 'Birthday surprise for boyfriend Surat', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/7.png', alt: 'Birthday room decoration Surat', title: 'Room Decoration', featured: false },
  { type: 'video', src: '/videos/AQPv7qZR0Ny5r-JyihzC7aON0523lToDrQEm5ThW7FPgqTAka8XPqwmwoWvGJ_7H0_XfTJtUYZPaBVSP1W4Qn2Vzrc4jLeJAK28U1LM.mp4', alt: 'Pre-wedding couple video Surat', title: 'Pre-Wedding Video', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/33.png', alt: 'Couple birthday party Surat', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/51.png', alt: 'Surprise date Surat', title: 'Surprise Date', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/18.png', alt: 'Couple moment Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/63.png', alt: 'Twin heart decoration Surat', title: 'Twin Heart Décor', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/34.png', alt: 'Pre-wedding photoshoot Surat', title: 'Pre-Wedding Photo', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/52.png', alt: 'Baby shower decoration Surat', title: 'Baby Shower', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/19.png', alt: 'Baby moments celebration Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/8.png', alt: 'Candlelight dinner for couples Surat', title: 'Couple Dinner', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/35.png', alt: 'Rooftop dinner Surat', title: 'Rooftop Dinner', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/53.png', alt: 'Private dining Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/20.png', alt: 'Romantic venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/64.png', alt: 'Celebration venue Surat', title: 'Celebration Venue', featured: false },
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
          <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
            <ImageIcon className="h-4 w-4 mr-2" /> Our Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Magical Moments at HIVY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the romantic experiences we create for couples. Every setup is designed to make your moments unforgettable.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-stone-1000 hover:bg-yellow-800 text-white' 
              : 'border-yellow-200 text-yellow-900 hover:bg-stone-100'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-stone-1000 hover:bg-yellow-800 text-white' 
              : 'border-yellow-200 text-yellow-900 hover:bg-stone-100'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-stone-1000 hover:bg-yellow-800 text-white' 
              : 'border-yellow-200 text-yellow-900 hover:bg-stone-100'}
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
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-yellow-800 ml-1" fill="currentColor" />
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
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-stone-1000 to-stone-500 hover:from-yellow-800 hover:to-yellow-700 text-white px-8 py-6 text-lg">
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
          <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
            Our Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Celebration Ideas & Inspiration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and ideas to help you plan the perfect celebration in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-stone-200">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-stone-1000 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-800 transition-colors">
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
            <Button className="bg-gradient-to-r from-stone-1000 to-stone-500 hover:from-yellow-800 hover:to-yellow-700 text-white px-8 py-6 text-lg">
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
    { src: '/images/hero/slider1.png', alt: 'Romantic Candlelight Dinner Setup at HIVY - Place for Celebrations Surat' },
    { src: '/images/hero/slider2.png', alt: 'Rooftop Celebration Setup with Fairy Lights Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-800 via-stone-500 to-yellow-900 text-white overflow-hidden">
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
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
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
                Premium romantic celebration venue for couples. Birthday surprises, candlelight dinners, anniversaries, proposals & more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-yellow-800 hover:bg-stone-100 text-lg px-8 py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
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
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-stone-100 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Perfect For Every Celebration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate candlelight dinners to grand proposals, we create magical moments for every special occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-stone-200 group">
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

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-stone-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              Our Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Our Romantic Celebration Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              6 unique romantic setups designed to make your celebration unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-stone-200 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-yellow-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 group-hover:text-yellow-800 transition-colors line-clamp-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-base md:text-xl font-bold text-yellow-800">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-900 hover:to-yellow-800 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              What You Get
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-800" />
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
              <Badge className="mb-4 bg-stone-1000/20 text-yellow-300 border-stone-1000/30">
                Our Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Curated Café-Style Delicacies
              </h2>
              <p className="text-gray-300 mb-8">
                Crafted for Romantic Dates & Private Celebrations
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-stone-1000 hover:bg-yellow-800 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/about/menu.webp" 
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
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              <MapPin className="h-4 w-4 mr-2" /> Areas We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Serving All of Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring romantic celebrations to couples across all areas of Surat
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-yellow-800 hover:text-white transition-colors border border-stone-300"
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

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions
            </h2>
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
      <section className="py-20 bg-gradient-to-r from-yellow-800 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your romantic celebration today and let us make your special moments truly magical
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
