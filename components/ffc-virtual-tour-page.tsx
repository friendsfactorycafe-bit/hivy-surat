'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages } from '@/lib/ffc-config';

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tourFaqs = [
    { question: "Can I visit HIVY in person before booking?", answer: "Yes! Walk-in venue previews are available on weekday afternoons. Call +91 9727027278 to schedule a tour. You can see all tent setups, choose your preferred style, and discuss customisations face-to-face with our team." },
    { question: "Are the photos and videos on this page from the actual venue?", answer: "Absolutely. Every photo and video on this page is shot at HIVY — Place for Celebrations in actual celebration conditions. We never use stock images, studio lighting tricks, or AI-generated content. What you see is exactly what you'll experience." },
    { question: "How many different celebration setups does HIVY offer?", answer: "We offer 5 unique celebration tent setups: Swing of Love, BoHo Chic, Fairy Tale Proposals, Tent of Romance, and Elite Group Setup. Each has a completely different aesthetic, decor style, and atmosphere." },
    { question: "What is the Swing of Love setup like?", answer: "The Swing of Love features a decorated two-seater swing, cascading fairy lights, flower garlands, and a floor covered in rose petals. It's our most romantic option, ideal for proposals, anniversary dinners, and intimate candlelight date nights." },
    { question: "Which setup is best for proposals?", answer: "The Fairy Tale Proposals and Swing of Love setups are most popular for proposals. Both feature dramatic romantic elements like rose petal pathways, neon 'Marry Me' signs, and professional photography-friendly lighting. Our team helps coordinate the surprise perfectly." },
    { question: "Are the tent setups indoor or outdoor?", answer: "All setups are indoor/covered structures, fully protected from weather. Rain, heat, or cold, your celebration remains perfect regardless. The enclosed design also ensures complete privacy from outside view." },
    { question: "Can I request a customised decoration theme not shown in the virtual tour?", answer: "Absolutely! The setups shown here are our standard configurations. You can request custom colour themes, additional props, neon signs, specific flowers, personalised banners, and more. Share your vision and we'll make it happen." },
    { question: "How big are the celebration spaces?", answer: "Each tent setup comfortably accommodates a couple's celebration including dining table, decorations, and movement space. The Royal Celebration setup is our largest, suitable for small groups of up to 4 guests." },
    { question: "Is the venue well-lit for phone photography?", answer: "Yes! Our setups are designed with photography in mind. The fairy lights, candles, and ambient lighting create beautiful photos even with a smartphone camera. Professional photographers particularly love our venue for the versatile lighting options." },
    { question: "What does the venue look like from outside?", answer: "From outside, HIVY has a discreet, elegant entrance at The Boulevard, near Pratham Circle, Adajan. The real magic is inside — once you pass the flower-lined entrance walkway, the celebration tents and their glowing ambiance create a completely different world." },
  ];

  const tourFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tourFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our romantic celebration spaces before you book
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of HIVY - Place for Celebrations</p>
            </div>
            
            {/* Vertical Video */}
            <div 
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                <source src="/videos/InShot_20250111_162317353.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-amber-800" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 text-amber-800 ml-1" fill="currentColor" />
                  )}
                </button>
                
                {!isPlaying && (
                  <p className="text-white text-sm mt-4 font-medium drop-shadow-lg">Tap to play</p>
                )}
              </div>

              {/* Mute Button - Bottom Right */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Setups Gallery</h2>
            <p className="text-gray-600">Explore our 5 unique celebration spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisiblePackages().map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-amber-800 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Explore HIVY's Celebration Spaces — A Complete Virtual Walkthrough
              </h2>
              <p>
                Before you commit to any celebration venue in Surat, you deserve to see exactly what you're booking. That's why we created this virtual tour — a detailed look at every corner of <strong>HIVY - Place for Celebrations</strong>, so you can explore our romantic setups, picture your partner's reaction, and choose the perfect package without any guesswork. From the fairy-lit entrance corridor to the individual tent interiors, this page gives you the closest experience to being here in person.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Entrance — Where the Magic Begins
              </h3>
              <p>
                The moment you arrive at HIVY near Pratham Circle and approach the entrance, the outside world begins to fade. Our entrance is deliberately designed to transition you from the noise of Surat traffic into a realm of soft lighting and anticipation. Pathway lights guide you along a flower-lined walkway, and the faint sound of instrumental music builds the mood even before you reach the main venue area. For surprise celebrations, this pathway is especially powerful — a blindfolded partner can sense the shift in atmosphere through the fragrance of fresh flowers and the crunch of decorative gravel underfoot.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Individual Tent Setups — Your Private World
              </h3>
              <p>
                HIVY's signature feature is our collection of individually decorated celebration tents, each with its own personality. Unlike a shared banquet hall or a restaurant table sectioned off by curtains, our tents are fully enclosed, self-contained, and styled from floor to ceiling for your specific occasion. Here's what you'll find inside each setup:
              </p>
              <ul className="space-y-3 my-4">
                <li><strong>Swing of Love</strong> — Our most romantic option, featuring a decorated two-seater swing, cascading fairy lights, flower garlands, and a floor covered in rose petals. Ideal for <strong>proposals, anniversary dinners</strong>, and deeply intimate <strong>candlelight date nights</strong>.</li>
                <li><strong>BoHo Chic</strong> — A bohemian-inspired tent with macramé drapes, rustic candles, and warm earthy tones. Perfect for couples who love an artsy, free-spirited vibe with the comfort of indoor privacy. Popular for <strong>pre-wedding photoshoots</strong> and <strong>engagement celebrations</strong>.</li>
                <li><strong>Fairy Tale Proposals</strong> — Our premium proposal setup with rose petal pathways, neon 'Marry Me' signs, floral arches, and dramatic lighting. Frequently chosen for <strong>milestone anniversary parties</strong> and <strong>birthday surprises</strong>.</li>
                <li><strong>Tent of Romance</strong> — A ceiling of twinkling LED lights creates the illusion of dining under a night sky. Combined with candles at every level and sheer fabric drapes, this tent delivers maximum dreamlike atmosphere. First-choice for <strong>surprise candlelight dinners</strong>.</li>
                <li><strong>Elite Group Setup</strong> — Our most spacious setup, designed for small group celebrations. Custom colour themes, premium balloon arches, and seating for up to 4 guests. Ideal for <strong>baby showers</strong>, <strong>pregnancy announcements</strong>, and group celebrations.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Decoration Details — What the Camera Captures vs. What You Feel
              </h3>
              <p>
                Photographs can show you the colours, the arrangement, the scale of each setup. But they cannot convey the warmth of 200 real candles glowing at waist height, the gentle flicker reflecting off your partner's eyes, or the <strong>subtle jasmine and rose fragrance</strong> that our decoration team infuses into every tent. They cannot capture the hush that falls when the external speakers play your chosen song, or the way the tent walls muffle the outside world until all that exists is you, your partner, and the glow.
              </p>
              <p>
                That said, our video and gallery above give you the best possible digital preview. We film in actual celebration conditions — real lighting (not studio lights), real decorations (not post-production enhancement), and real food styling (not props). What you see in this virtual tour is precisely what you'll encounter on the day of your booking. We never use stock images or AI-generated previews.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Photo Zones — Because Every Moment Deserves a Frame
              </h3>
              <p>
                Beyond the celebration tents, HIVY features dedicated <strong>photo zones</strong> that couples can use during their 3-hour session. These include a floral arch backdrop (ideal for engagement announcements), a fairy-light curtain wall (perfect for candid portraits), and a rustic "Love" marquee signboard that has become one of the most tagged spots on Instagram from Surat celebration venues. Our in-house or partnered photographers know every angle of every zone — they'll guide you to the best spots and the best poses so your album looks effortless and stunning.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why a Virtual Tour Matters Before Booking
              </h3>
              <p>
                We encourage every potential guest to explore this page thoroughly because choosing a celebration venue is an emotional investment. You're not just selecting a table — you're selecting the backdrop for a memory that will be revisited in photographs, in conversations, and in your heart for years. Our virtual tour helps you:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Match setup to occasion</strong> — A proposal deserves a different aesthetic than a birthday party. Seeing each tent's personality helps you choose correctly.</li>
                <li><strong>Manage expectations</strong> — You'll know exactly what the space looks like, how large it is, and what's included, eliminating any "it looked different online" disappointment.</li>
                <li><strong>Plan surprises better</strong> — If you're arranging a surprise, you can show this page to a trusted friend for their opinion without spoiling the setup for your partner.</li>
                <li><strong>Inspire custom requests</strong> — Seeing our standard setups often sparks ideas: "Can we add a neon sign here?" or "Could you replace the roses with sunflowers?" Absolutely — and this tour helps you visualise where those changes fit.</li>
              </ol>
              <p>
                After watching the video and browsing the gallery above, if you'd like to schedule a physical walk-through of our venue before your celebration date, simply call us at <a href="tel:+919727027278" className="text-amber-800 font-bold hover:underline">+91 9727027278</a>. Walk-in previews are free and available on weekday afternoons.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-900 font-serif">Frequently Asked Questions About Our Venue</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {tourFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-lg border border-amber-200 px-4">
                <AccordionTrigger className="text-left font-semibold text-amber-900 hover:text-amber-700">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
