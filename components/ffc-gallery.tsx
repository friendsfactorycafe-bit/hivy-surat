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

// SEO-friendly gallery items mapped to real venue photos & videos
export const galleryItems: GalleryItem[] = [
  // Featured Image
  { type: 'image', src: '/packages/tent-of-romance/images/12.webp', alt: 'Romantic private tent setup in Surat', title: 'Romantic Private Venue', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/packages/tent-of-romance/images/13.webp', alt: 'Candlelight dinner tent decoration Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/46.webp', alt: 'Romantic dinner setup Surat', title: 'Evening Romance', featured: false },
  { type: 'video', src: '/videos/20231212_214324_IMG_1322.mp4', alt: 'Birthday celebration video Surat', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/28.webp', alt: 'Birthday surprise decoration Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Anniversary celebration Surat', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/videos/20231212_214630_IMG_1328.mp4', alt: 'Anniversary celebration video Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/47.webp', alt: 'Romantic table decoration Surat', title: 'Table Decor', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/2.webp', alt: 'Birthday balloon decoration Surat', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/15.webp', alt: 'Anniversary dinner setup Surat', title: 'Anniversary Dinner', featured: false },
  { type: 'video', src: '/videos/InShot_20250111_162317353.mp4', alt: 'Romantic celebration reel Surat', title: 'Romantic Vibes', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/29.webp', alt: 'Romantic ambiance cafe Surat', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/62.webp', alt: 'Couple celebration Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/48.webp', alt: 'Evening romantic celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VID_20251027_181020858.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/hivy-images/5700/Cover.webp', alt: 'Glass house dinner Surat', title: 'Glass House', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/16.webp', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'video', src: '/videos/InShot_20250217_151234749.mp4', alt: 'Romantic moments reel Surat', title: 'Romantic Reel', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/3.webp', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/49.webp', alt: 'Day celebration Surat', title: 'Day Celebration', featured: false },
  { type: 'video', src: '/videos/VID_20251120_191425995.mp4', alt: 'Anniversary dinner video Surat', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/30.webp', alt: 'Surprise party Surat', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/63.webp', alt: 'Romantic dinner date Surat', title: 'Dinner Date', featured: false },
  { type: 'video', src: '/videos/VID_20251121_210202081.mp4', alt: 'Birthday surprise video Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/hivy-images/5400/2.webp', alt: 'Valentines day celebration Surat', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/50.webp', alt: 'Valentines dinner Surat', title: 'Valentine Dinner', featured: false },
  { type: 'video', src: '/videos/20231220_165535_a459ad97-40ec-4fc0-8741-e6d11286c492.mp4', alt: 'Valentines celebration video Surat', title: 'Valentine Video', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/4.webp', alt: 'Valentines romantic setup Surat', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/31.webp', alt: 'Birthday surprise for girlfriend Surat', title: 'Girlfriend Surprise', featured: false },
  { type: 'video', src: '/videos/20241108_170507_f93c7cf5-f786-456a-baeb-54af2f03872c.mp4', alt: 'Baby moments video Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/64.webp', alt: 'Birthday surprise for boyfriend Surat', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/hivy-images/6300/Cover.webp', alt: 'Birthday room decoration Surat', title: 'Room Decoration', featured: false },
  { type: 'video', src: '/videos/20231212_215029_1a70c04cb5664a19a68df3f08b9e46f4.mp4', alt: 'Pre-wedding couple video Surat', title: 'Pre-Wedding Video', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/51.webp', alt: 'Couple birthday party Surat', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/65.webp', alt: 'Surprise date Surat', title: 'Surprise Date', featured: false },
  { type: 'video', src: '/videos/virtual-tour.mp4', alt: 'Pre-wedding shoot video Surat', title: 'Virtual Tour', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/32.webp', alt: 'Couple moment Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/5.webp', alt: 'Pre-wedding photoshoot Surat', title: 'Pre-Wedding Photo', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/66.webp', alt: 'Romantic dinner Surat', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/33.webp', alt: 'Pre-wedding shoot Surat', title: 'Photo Shoot', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/52.webp', alt: 'Baby shower decoration Surat', title: 'Baby Shower', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/6.webp', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Baby moments celebration Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/67.webp', alt: 'Candlelight dinner for couples Surat', title: 'Couple Dinner', featured: false },
  { type: 'image', src: '/packages/swing-of-love/images/34.webp', alt: 'Couple celebration Surat', title: 'Celebration Setup', featured: false },
  { type: 'image', src: '/packages/boho-chic/images/53.webp', alt: 'Candlelight dinner Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/packages/tent-of-romance/images/68.webp', alt: 'Private dining Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/packages/fairy-tale-proposals/7.webp', alt: 'Romantic venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Celebration venue Surat', title: 'Celebration Venue', featured: false },
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
          <Badge className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
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
                ? 'bg-amber-900 hover:bg-amber-800 text-white' 
                : 'border-amber-200 text-amber-900 hover:bg-amber-50'}
            >
              All ({photoCount + videoCount})
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
                    preload="metadata"
                    poster={galleryItems.find(g => g.type === 'image')?.src}
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onLoadedData={(e) => { e.currentTarget.currentTime = 0.5; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-amber-800 ml-1" fill="currentColor" />
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
