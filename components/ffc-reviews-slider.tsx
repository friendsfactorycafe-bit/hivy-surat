'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Reviews data
const reviews = [
  {
    name: "Yoma Patel",
    initial: "Y",
    color: "bg-yellow-600",
    date: "1 month ago",
    review: "Cutest set up and amazing food service."
  },
  {
    name: "Krishn Sharma",
    initial: "K",
    color: "bg-stone-600",
    date: "2 months ago",
    review: "Best candlelight dinner experience in Surat! The decoration was stunning and staff was very helpful. Proposed here and she said YES! 💍"
  },
  {
    name: "Priya Shah",
    initial: "P",
    color: "bg-pink-500",
    date: "2 months ago",
    review: "My husband surprised me here for our anniversary. The private setup was magical! Highly recommend for couples! ❤️"
  },
  {
    name: "Rahul Desai",
    initial: "R",
    color: "bg-red-500",
    date: "3 months ago",
    review: "Best place for couples in Surat! Booked for my wife's birthday and the team made it so special. Glass house setup was Instagram-perfect!"
  },
  {
    name: "Devanshi",
    initial: "D",
    color: "bg-cyan-500",
    date: "3 weeks ago",
    review: "Such a great time!!!! Thanks to my hubby and the team of friends factory cafe!!!"
  },
  {
    name: "Vraj Patel",
    initial: "V",
    color: "bg-green-500",
    date: "1 month ago",
    review: "The place was calm and peace, food was awesome, will be back soon 🍽️"
  },
];

// Google icon SVG component
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface FFCReviewsSliderProps {
  showTitle?: boolean;
  compact?: boolean;
}

export default function FFCReviewsSlider({ showTitle = true, compact = false }: FFCReviewsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = compact ? 280 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-12 ${compact ? 'bg-stone-50' : 'bg-stone-100'}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-stone-200 text-yellow-900 border-stone-300">
              <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" /> Google Reviews
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold">5.0</span>
              <span className="text-gray-500 text-sm">• 1256 reviews</span>
            </div>
          </div>
        )}

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Reviews Container - Shows 3 cards */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory mx-6 md:mx-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className={`flex-shrink-0 snap-start border-gray-200 bg-white ${compact ? 'w-[260px]' : 'w-[280px] md:w-[320px]'}`}
              >
                <CardContent className={compact ? 'p-4' : 'p-5'}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${compact ? 'w-8 h-8 text-sm' : 'w-10 h-10'} rounded-full ${review.color} flex items-center justify-center text-white font-semibold`}>
                      {review.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${compact ? 'text-xs' : 'text-sm'} truncate`}>{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <GoogleIcon />
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`${compact ? 'h-3 w-3' : 'h-4 w-4'} fill-yellow-400 text-yellow-400`} />
                    ))}
                    <span className="ml-2 text-green-500 text-sm">✓</span>
                  </div>
                  <p className={`text-gray-600 ${compact ? 'text-xs line-clamp-3' : 'text-sm line-clamp-4'} leading-relaxed`}>
                    {review.review}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review on Google link */}
        <div className="flex justify-center mt-4">
          <a 
            href="https://www.google.com/maps/place/HIVY+-+Place+For+Celebration/@21.1895149,72.7828283,17z/data=!4m8!3m7!1s0x3be04d4fc7b5dbb9:0xb1aa92785a2443b8!8m2!3d21.1895149!4d72.7854032!9m1!1b1!16s%2Fg%2F11y3glr3jq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-700 hover:text-yellow-800 font-medium text-sm"
          >
            <GoogleIcon />
            Review Us on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
