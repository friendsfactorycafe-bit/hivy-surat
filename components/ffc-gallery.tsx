'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items with keyword-rich names
export const galleryItems: GalleryItem[] = [
  // Featured Images
  { type: 'image', src: '/images/gallery/private venue-romantic-setup-surat-1.jpg', alt: 'Romantic private setup in Surat', title: 'Romantic private venue', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/romantic-candlelight-dinner-surat-1.jpg', alt: 'Candlelight dinner in Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-setup-surat-1.jpg', alt: 'Romantic dinner setup Surat', title: 'Evening Romance', featured: false },
  { type: 'video', src: '/videos/birthday-celebration-video-surat-1.mp4', alt: 'Birthday celebration video Surat', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-decoration-surat-1.jpg', alt: 'Birthday surprise decoration Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-celebration-surat-1.jpg', alt: 'Anniversary celebration Surat', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/videos/anniversary-celebration-video-surat-1.mp4', alt: 'Anniversary celebration video Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/images/gallery/romantic-table-decoration-surat-1.jpg', alt: 'Romantic table decoration Surat', title: 'Table Decor', featured: false },
  { type: 'image', src: '/images/gallery/birthday-balloon-decoration-surat-1.jpg', alt: 'Birthday balloon decoration Surat', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-dinner-setup-surat-1.jpg', alt: 'Anniversary dinner setup Surat', title: 'Anniversary Dinner', featured: false },
  { type: 'video', src: '/videos/private venue-celebration-reel-surat-1.mp4', alt: 'romantic celebration reel Surat', title: 'Romantic Vibes', featured: false },
  { type: 'image', src: '/images/gallery/romantic-ambiance-cafe-surat-1.jpg', alt: 'Romantic ambiance cafe Surat', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/couple-celebration-surat-1.jpg', alt: 'Couple celebration Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/evening-romantic-celebration-surat-1.jpg', alt: 'Evening romantic celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/birthday-reel-surat-1.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/images/gallery/glass-house-dinner-surat-1.jpg', alt: 'Glass house dinner Surat', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/night-romantic-setup-surat-1.jpg', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'video', src: '/videos/romantic-moments-reel-surat-1.mp4', alt: 'Romantic moments reel Surat', title: 'Romantic Reel', featured: false },
  { type: 'image', src: '/images/gallery/proposal-setup-surat-1.jpg', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/images/gallery/day-celebration-surat-1.jpg', alt: 'Day celebration Surat', title: 'Day Celebration', featured: false },
  { type: 'video', src: '/videos/anniversary-dinner-video-surat-1.mp4', alt: 'Anniversary dinner video Surat', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/images/gallery/surprise-party-surat-1.jpg', alt: 'Surprise party Surat', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/images/gallery/romantic-dinner-date-surat-1.jpg', alt: 'Romantic dinner date Surat', title: 'Dinner Date', featured: false },
  { type: 'video', src: '/videos/birthday-surprise-video-surat-1.mp4', alt: 'Birthday surprise video Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/valentines-day-celebration-surat-1.jpg', alt: 'Valentines day celebration Surat', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/images/gallery/valentines-dinner-surat-1.jpg', alt: 'Valentines dinner Surat', title: 'Valentine Dinner', featured: false },
  { type: 'video', src: '/videos/valentines-celebration-video-surat-1.mp4', alt: 'Valentines celebration video Surat', title: 'Valentine Video', featured: false },
  { type: 'image', src: '/images/gallery/valentines-romantic-setup-surat-1.jpg', alt: 'Valentines romantic setup Surat', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-girlfriend-surat-1.jpg', alt: 'Birthday surprise for girlfriend Surat', title: 'Girlfriend Surprise', featured: false },
  { type: 'video', src: '/videos/baby-moments-video-surat-1.mp4', alt: 'Baby moments video Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-boyfriend-surat-1.jpg', alt: 'Birthday surprise for boyfriend Surat', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/birthday-room-decoration-surat-1.jpg', alt: 'Birthday room decoration Surat', title: 'Room Decoration', featured: false },
  { type: 'video', src: '/videos/pre-wedding-couple-video-surat-1.mp4', alt: 'Pre-wedding couple video Surat', title: 'Pre-Wedding Video', featured: false },
  { type: 'image', src: '/images/gallery/couple-birthday-party-surat-1.jpg', alt: 'Couple birthday party Surat', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/images/gallery/surprise-date-surat-1.jpg', alt: 'Surprise date Surat', title: 'Surprise Date', featured: false },
  { type: 'video', src: '/videos/pre-wedding-shoot-video-surat-1.mp4', alt: 'Pre-wedding shoot video Surat', title: 'Pre-Wedding Shoot', featured: false },
  { type: 'image', src: '/images/gallery/couple-moment-surat-1.jpg', alt: 'Couple moment Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-photoshoot-surat-1.jpg', alt: 'Pre-wedding photoshoot Surat', title: 'Pre-Wedding Photo', featured: false },
  { type: 'video', src: '/videos/romantic-dinner-video-surat-1.mp4', alt: 'Romantic dinner video Surat', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-shoot-surat-1.jpg', alt: 'Pre-wedding shoot Surat', title: 'Photo Shoot', featured: false },
  { type: 'image', src: '/images/gallery/baby-shower-decoration-surat-1.jpg', alt: 'Baby shower decoration Surat', title: 'Baby Shower', featured: false },
  { type: 'video', src: '/videos/proposal-video-surat-1.mp4', alt: 'Proposal video Surat', title: 'Proposal Video', featured: false },
  { type: 'image', src: '/images/gallery/baby-moments-celebration-surat-1.jpg', alt: 'Baby moments celebration Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-for-couples-surat-1.jpg', alt: 'Candlelight dinner for couples Surat', title: 'Couple Dinner', featured: false },
  { type: 'video', src: '/videos/couple-celebration-video-surat-1.mp4', alt: 'Couple celebration video Surat', title: 'Celebration Video', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-surat-1.jpg', alt: 'candlelight dinner Surat', title: 'candlelight dinner', featured: false },
  { type: 'image', src: '/images/gallery/private-dining-surat-1.jpg', alt: 'Private dining Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/images/gallery/romantic-venue-surat-1.jpg', alt: 'Romantic venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/images/gallery/celebration-venue-surat-1.jpg', alt: 'Celebration venue Surat', title: 'Celebration Venue', featured: false },
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-stone-100 via-white to-stone-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-stone-200 text-yellow-900 border-stone-300">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Surat
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-stone-1000 hover:bg-yellow-800 text-white' 
                : 'border-yellow-200 text-yellow-900 hover:bg-stone-100'}
            >
              All ({photoCount + videoCount})
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
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
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
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-yellow-800 ml-1" fill="currentColor" />
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
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
