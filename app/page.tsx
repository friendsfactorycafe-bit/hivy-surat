/**
 * MAIN PAGE - HIVY - PLACE FOR CELEBRATIONS SURAT
 * The main home page for HIVY - Surat
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for HIVY
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Best Candlelight Dinner & Romantic Celebration Venue in Surat`,
    description: `${siteConfig.tagline}. Surat's #1 couples-only celebration venue. Book candlelight dinners, birthday surprises, anniversary celebrations, marriage proposals, romantic date nights & private rooftop dining. 100% private venue with 4.9★ rating.`,
    keywords: [
      'hivy surat',
      'candlelight dinner surat',
      'romantic dinner surat',
      'birthday surprise surat',
      'anniversary celebration surat',
      'proposal setup surat',
      'couples only cafe surat',
      'rooftop dinner surat',
      'private dining surat',
      'romantic restaurant surat',
      'birthday party venues surat',
      'anniversary dinner surat',
      'romantic date surat',
      'surprise birthday party surat',
      'candlelight dinner for couples surat',
      'best romantic places surat',
      'private celebration venue surat',
      'romantic rooftop cafe surat',
      'couple friendly restaurants surat',
      'birthday room decoration surat',
      'marriage proposal venue surat',
      'romantic candlelight dinner near me',
      'best anniversary restaurant surat',
      'couple date night surat',
      'romantic places for couples surat',
      'birthday surprise for girlfriend surat',
      'birthday surprise for boyfriend surat',
      'engagement proposal surat',
      'valentine dinner surat',
      'romantic ambiance restaurant surat'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Romantic Celebrations`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}