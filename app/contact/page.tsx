import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | HIVY - Place for Celebrations Surat',
  description: 'Get in touch with HIVY - Place for Celebrations Surat. Book your romantic celebration, ask questions, or visit us. Call +91 9727027278.',
  keywords: 'contact hivy place for celebrations, book celebration surat, romantic venue contact, couple cafe surat contact',
  alternates: {
    canonical: 'https://hivy.co.in/contact',
  },
  openGraph: {
    title: 'Contact Us | HIVY - Place for Celebrations Surat',
    description: 'Get in touch with HIVY - Place for Celebrations Surat. Book your romantic celebration, ask questions, or visit us.',
    url: 'https://hivy.co.in/contact',
    type: 'website',
    locale: 'en_IN',
    siteName: 'HIVY - Place for Celebrations',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: 'Contact HIVY - Place for Celebrations',
        description: 'Get in touch with HIVY - Place for Celebrations Surat. Book your romantic celebration, ask questions, or visit us.',
        url: 'https://hivy.co.in/contact',
        mainEntity: {
          '@type': 'LocalBusiness',
          name: 'HIVY - Place for Celebrations',
          url: 'https://hivy.co.in',
          telephone: '+91-9727027278',
          email: 'hello@hivy.co.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road',
            addressLocality: 'Adajan, Pal Gam, Surat',
            addressRegion: 'Gujarat',
            postalCode: '394510',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 21.1702,
            longitude: 72.8311,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '11:00',
              closes: '23:00',
            },
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-9727027278',
            contactType: 'reservations',
            areaServed: 'Surat',
            availableLanguage: ['English', 'Hindi', 'Gujarati'],
          },
          sameAs: [
            'https://www.instagram.com/hivy.co.in/',
            'https://www.facebook.com/hivy.co.in',
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hivy.co.in' },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://hivy.co.in/contact' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <FFCContactPage />
    </>
  );
}
