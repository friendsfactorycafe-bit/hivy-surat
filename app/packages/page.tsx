import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Our Packages | HIVY - Place for Celebrations Surat',
  description: 'Explore 5 unique romantic celebration packages at HIVY - Place for Celebrations Surat. From rooftop setups to bohemian experiences. Starting from ₹5,100.',
  keywords: 'romantic packages surat, celebration packages, birthday surprise packages, candlelight dinner packages, hivy packages surat',
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
