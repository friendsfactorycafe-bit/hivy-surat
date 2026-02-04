import { Metadata } from 'next';
import FFCVirtualTourPage from '@/components/ffc-virtual-tour-page';

export const metadata: Metadata = {
  title: 'Virtual Tour | HIVY - Place for Celebrations Surat',
  description: 'Take a virtual tour of HIVY - Place for Celebrations Surat. Explore our romantic private setups, glass houses, and beautiful celebration spaces.',
  keywords: 'virtual tour friends factory cafe, romantic venue tour surat, couple cafe photos, celebration venue gallery',
};

export default function VirtualTourPage() {
  return <FFCVirtualTourPage />;
}
