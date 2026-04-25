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
  themeColor: "#92400E", // Warm Stone for HIVY
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
    "candlelight dinner surat",
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
        url: "/images/og-image.webp",
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
    images: ["/images/twitter-image.webp"],
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
      "telephone": "+91 9727027278",
      "email": "hello@hivy.co.in",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://hivy.co.in/images/og-image.webp"
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
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya S."
          },
          "reviewBody": "Amazing experience! The romantic setup was perfect for our anniversary celebration. Highly recommend HIVY for couples."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul M."
          },
          "reviewBody": "Best place in Surat for birthday surprises. The team went above and beyond to make my wife's birthday special."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha P."
          },
          "reviewBody": "Perfect candlelight dinner experience. The ambiance, food, and service were all top-notch."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
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
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Proposal Planning",
              "description": "Romantic proposal setups with 'Marry Me' neon signs, rose petals, and ring presentation"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pre-Wedding Photoshoot",
              "description": "Romantic pre-wedding and engagement photoshoot venue with themed backdrops"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Baby Shower & Gender Reveal",
              "description": "Baby shower celebrations, gender reveal parties, and godh bharai events"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Valentine's Day Celebration",
              "description": "Special Valentine's Week celebrations including Rose Day, Propose Day, and Valentine's Day"
            },
            "priceCurrency": "INR"
          }
        ]
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Swing of Love Package",
          "price": "5100",
          "priceCurrency": "INR",
          "description": "Romantic swing setup with fairy lights, flower garlands, rose petals, 3-course dinner, mocktails, cake, and professional photography",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Elite Group Setup Package",
          "price": "5400",
          "priceCurrency": "INR",
          "description": "Custom group celebration setup with themed decorations, food, cake, and photography for small groups",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "BoHo Chic Package",
          "price": "5700",
          "priceCurrency": "INR",
          "description": "Bohemian-themed celebration with macramé drapes, rustic candles, boho decorations, 3-course dinner, and photography",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Fairy Tale Proposals Package",
          "price": "6300",
          "priceCurrency": "INR",
          "description": "Premium proposal and celebration setup with rose petal pathway, Marry Me neon sign, floral arches, dinner, and photography",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Tent of Romance Package",
          "price": "6500",
          "priceCurrency": "INR",
          "description": "Most premium tent experience with luxury decorations, gourmet dinner, designer cake, and professional photography",
          "availability": "https://schema.org/InStock"
        }
      ],
      "knowsAbout": [
        "Romantic celebrations",
        "Candlelight dinners in Surat",
        "Birthday surprise planning",
        "Anniversary celebrations",
        "Proposal planning",
        "Pre-wedding photoshoots",
        "Baby shower venues in Surat",
        "Valentine's Day celebrations",
        "Couple date night experiences",
        "Private dining experiences",
        "Romantic venue decoration",
        "Gender reveal party planning"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Surat",
        "containedInPlace": {
          "@type": "State",
          "name": "Gujarat",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        }
      },
      "slogan": "Your Celebration, Our Passion",
      "foundingDate": "2023",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 5,
        "maxValue": 15
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 9727027278",
          "contactType": "reservations",
          "areaServed": "Surat",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91 9727027278",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hivy_placeforcelebration/",
        "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/"
      ],
      "knowsAbout": [
        "Romantic celebration venue management",
        "Candlelight dinner setup and service",
        "Birthday surprise event planning",
        "Anniversary celebration planning",
        "Marriage proposal coordination",
        "Pre-wedding photography venue",
        "Baby shower and gender reveal events",
        "Valentine's Day celebration planning",
        "Private dining experience curation",
        "Romantic tent decoration and theming"
      ],
      "description": "HIVY is Surat's premier romantic celebration venue offering private candlelight dinners, birthday surprises, anniversary celebrations, proposals, pre-wedding shoots, and baby shower experiences since 2023."
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
        {/* Preconnect to external domains for faster DNS resolution */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager - Single source of truth for analytics */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSXMHLQF');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1463182795375744');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSXMHLQF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1463182795375744&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
