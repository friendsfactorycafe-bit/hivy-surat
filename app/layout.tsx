import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#78716C", // Warm Stone for HIVY
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hivy.co.in"),
  title: {
    default: "HIVY - Place for Celebrations Surat | Best Romantic Celebration Venue | Candlelight Dinners & Birthday Surprises",
    template: "%s | HIVY - Place for Celebrations Surat",
  },
  description:
    "Best romantic celebration venue in Surat, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. Premium private experiences. Call now.",
  keywords: [
    "hivy surat",
    "hivy place for celebrations",
    "romantic cafe surat",
    "couples only cafe surat",
    "candlelight dinner surat",
    "birthday surprise surat",
    "anniversary celebration surat",
    "romantic proposal surat",
    "rooftop dinner surat",
    "private dining surat",
    "romantic restaurant surat",
    "date night surat",
    "pre-wedding photoshoot surat",
    "surprise party surat",
    "romantic venue gujarat",
    "birthday surprise for boyfriend surat",
    "birthday surprise for girlfriend surat",
    "candlelight dinner for couples surat",
    "romantic dinner surat",
    "proposal setup surat",
    "anniversary dinner surat",
    "valentines day surat"
  ],
  authors: [{ name: "HIVY - Place for Celebrations", url: "https://hivy.co.in" }],
  creator: "HIVY - Place for Celebrations",
  publisher: "HIVY - Place for Celebrations",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://hivy.co.in",
  },
  category: "Restaurant",
  classification: "Romantic Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hivy.co.in",
    siteName: "HIVY - Place for Celebrations",
    title: "HIVY - Place for Celebrations Surat | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Surat. Birthday surprises, candlelight dinners, anniversaries, proposals. Premium private experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIVY - Place for Celebrations - Best Romantic Celebrations in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIVY - Place for Celebrations Surat | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Surat. Birthday surprises, candlelight dinners, proposals & more!",
    images: ["/images/twitter-image.jpg"],
    creator: "@hivysurat",
    site: "@hivysurat",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat",
    "geo.position": "21.1702;72.8311",
    "ICBM": "21.1702, 72.8311",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://hivy.co.in/#business",
      "name": "HIVY - Place for Celebrations",
      "alternateName": "HIVY Surat",
      "description": "Best romantic celebration venue in Surat, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. Premium private experiences.",
      "url": "https://hivy.co.in",
      "telephone": "+91-9727027278",
      "email": "hello@hivy.co.in",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://hivy.co.in/images/og-image.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road",
        "addressLocality": "Adajan, Pal Gam, Surat",
        "addressRegion": "Gujarat",
        "postalCode": "394510",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.1702",
        "longitude": "72.8311"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hivy_placeforcelebration/",
        "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "100",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Surprise Package",
              "description": "Private birthday celebration with decorations, cake, and romantic setup"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Candlelight Dinner",
              "description": "Romantic candlelight dinner for couples with private setting"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversary Celebration",
              "description": "Special anniversary celebration with decorations and intimate dining"
            },
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://hivy.co.in/#website",
      "url": "https://hivy.co.in",
      "name": "HIVY - Place for Celebrations",
      "description": "Best romantic celebration venue in Surat",
      "publisher": {
        "@id": "https://hivy.co.in/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://hivy.co.in/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://hivy.co.in/#organization",
      "name": "HIVY - Place for Celebrations",
      "url": "https://hivy.co.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hivy.co.in/icon.svg",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9727027278",
        "contactType": "reservations",
        "areaServed": "Surat",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hivy.co.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://hivy.co.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://hivy.co.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://hivy.co.in/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11390931743"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11390931743');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
