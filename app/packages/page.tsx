import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Our Packages | HIVY - Place for Celebrations Surat',
  description: 'Explore 5 unique romantic celebration packages at HIVY - Place for Celebrations Surat. From private setups to bohemian experiences. Starting from ₹5,100.',
  keywords: 'romantic packages surat, celebration packages, birthday surprise packages, candlelight dinner packages, hivy packages surat',
  alternates: {
    canonical: 'https://hivy.co.in/packages',
  },
  openGraph: {
    title: 'Our Packages | HIVY - Place for Celebrations Surat',
    description: 'Explore 5 unique romantic celebration packages at HIVY - Place for Celebrations Surat. Starting from ₹5,100.',
    url: 'https://hivy.co.in/packages',
    type: 'website',
    locale: 'en_IN',
    siteName: 'HIVY - Place for Celebrations',
  },
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
