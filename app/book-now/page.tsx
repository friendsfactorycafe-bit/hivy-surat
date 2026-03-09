import { Metadata } from 'next';
import { BookNowLandingPage } from '@/components/book-now-landing-page';

export const metadata: Metadata = {
  title: 'Book Now | HIVY - Place for Celebrations | Surat',
  description: 'Book your private romantic celebration at HIVY, Surat. Choose from 5 dreamy setups starting at ₹5,100. Birthday surprises, candlelight dinners, proposals, anniversaries & more.',
};

export default function BookNowPage() {
  return <BookNowLandingPage />;
}
