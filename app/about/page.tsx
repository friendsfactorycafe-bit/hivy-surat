import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | HIVY - Place for Celebrations Surat',
  description: 'Learn about HIVY - Place for Celebrations - Surat\'s premier romantic celebration venue for couples. Our story, mission, and commitment to creating unforgettable moments.',
  keywords: 'about friends factory cafe, romantic cafe surat, couple cafe story, celebration venue surat',
  alternates: {
    canonical: 'https://hivy.co.in/about',
  },
  openGraph: {
    title: 'About Us | HIVY - Place for Celebrations Surat',
    description: 'Learn about HIVY - Place for Celebrations - Surat\'s premier romantic celebration venue for couples.',
    url: 'https://hivy.co.in/about',
    type: 'website',
    locale: 'en_IN',
    siteName: 'HIVY - Place for Celebrations',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About HIVY - Place for Celebrations',
        description: 'Learn about HIVY - Place for Celebrations - Surat\'s premier romantic celebration venue for couples.',
        url: 'https://hivy.co.in/about',
        mainEntity: {
          '@type': 'LocalBusiness',
          name: 'HIVY - Place for Celebrations',
          description: 'Surat\'s premier destination for candlelight dinners, birthday surprises, anniversary celebrations & romantic experiences for couples.',
          url: 'https://hivy.co.in',
          telephone: '+91-9727027278',
          email: 'hivycelebrations@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '411-412, Platinum Point, Near Zampa Bazaar, Gotri Main Road',
            addressLocality: 'Surat',
            addressRegion: 'Gujarat',
            postalCode: '395007',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 21.2047,
            longitude: 72.8421,
          },
          priceRange: '₹₹',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500',
            bestRating: '5',
          },
          foundingDate: '2022',
          numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-20' },
          knowsAbout: [
            'Candlelight Dinner',
            'Birthday Surprise',
            'Anniversary Celebration',
            'Romantic Proposal',
            'Pre-Wedding Photoshoot',
            'Baby Shower',
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hivy.co.in' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://hivy.co.in/about' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <FFCAboutPage />
    </>
  );
}
