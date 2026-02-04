'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 via-stone-500 to-yellow-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY - Place for Celebrations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's Premier Destination for Candlelight Dinners & Romantic Celebrations
          </p>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Love Stories Unfold Naturally
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY - Place for Celebrations</strong> in Surat's Gotri area, we understand the chaos of modern life leaves little room for romance. Couples crave intimate moments to express love, but finding the right venue—a place blending privacy, beauty, and magic—remains elusive.
                </p>
                <p>
                  That's why we transformed a stunning <strong>venue into Surat's premier destination for candlelight dinners</strong>, complete with fairy lights, floral arches, and personalized decorations. Our romantic romantic cafe offers the perfect escape for couples seeking a private celebration venue in Surat.
                </p>
                <p>
                  From heartfelt <strong>birthday surprises</strong> and <strong>anniversary celebrations</strong> to unforgettable <strong>marriage proposals</strong>, engagement reveals, <strong>pre-wedding shoots</strong>, pregnancy announcements, and last candlelight dinners before marriage, we've hosted <strong>500+ magical evenings</strong>.
                </p>
                <p className="font-medium text-yellow-900">
                  Our mission: Create spaces where love stories unfold naturally.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-900 hover:to-yellow-800 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/30.png"
                  alt="HIVY - Place for Celebrations Surat - Romantic Swing of Love Setup for Candlelight Dinner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Magical Evenings</p>
                  <p className="text-sm opacity-90">Creating memories since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Magical Evenings" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Unique Setups" },
              { icon: Clock, number: "5+", label: "Years of Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-yellow-800" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-yellow-800">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/35.png"
                  alt="HIVY - Place for Celebrations Team - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Glowing Smile</p>
                  <p className="text-sm opacity-90">Our passionate team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Behind Every Glowing Smile
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY - Place for Celebrations</strong>. Committed to crafting unforgettable experiences, our dedicated staff is here to ensure that every detail of your visit is perfect.
                </p>
                <p>
                  From our talented chefs who bring culinary dreams to life, to our attentive servers who anticipate your every need, each member of our team is dedicated to creating moments of joy and romance for you and your loved one.
                </p>
                <p>
                  Whether you're planning a <strong>candlelight dinner in Surat</strong>, a <strong>birthday surprise for your girlfriend</strong>, an <strong>anniversary celebration</strong>, or a <strong>romantic proposal</strong>, our team handles everything from setup to cleanup so you can focus on love.
                </p>
                <p className="font-medium text-yellow-900">
                  Join us and let us make your evening truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                What Sets Us Apart in Surat
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Prime Gotri Venue Location</h3>
                    <p className="text-gray-600">Breathtaking city views, private setups away from crowds on Sevasi-Canal Road. The best romantic cafe in Surat for couples seeking privacy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Custom Celebration Packages</h3>
                    <p className="text-gray-600">Starting ₹4700, including mocktails, cakes, photographer, and themed decor for birthday surprises, anniversary celebrations, proposals, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pan-India Appeal, Local Heart</h3>
                    <p className="text-gray-600">Serving Surat couples while inspiring visitors with our Instagram-famous romantic setups and pre-wedding photoshoot venues.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Experience Guaranteed</h3>
                    <p className="text-gray-600">From setup to cleanup, our team handles everything so you focus on love. Couple-friendly cafe with complete privacy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/40.png"
                  alt="Why Choose HIVY - Place for Celebrations - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Your Memory?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your candlelight dinner package today and surprise your partner with memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-900 hover:to-yellow-800 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-yellow-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-yellow-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-yellow-800 hover:text-yellow-900 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-yellow-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-yellow-800 hover:text-yellow-900">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
