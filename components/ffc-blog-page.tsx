'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

export default function FFCBlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  const blogFaqs = [
    { question: "What topics does the HIVY blog cover?", answer: "Our blog covers candlelight dinner guides, birthday surprise ideas, anniversary celebration tips, proposal planning blueprints, pre-wedding photoshoot advice, baby shower themes, Valentine's Week day-by-day plans, and trending celebration ideas in Surat." },
    { question: "Can I implement HIVY's celebration ideas at home or other venues?", answer: "Absolutely! While our ideas are inspired by celebrations at HIVY, most tips are universally applicable. We share knowledge freely to help all Surat couples celebrate better, whether at our venue or elsewhere." },
    { question: "How often is the HIVY blog updated?", answer: "We publish new articles regularly, covering seasonal celebrations, trending ideas, and timeless romantic tips. Follow us on Instagram @hivy_placeforcelebration for real-time updates and new post announcements." },
    { question: "Are the celebration ideas tested at HIVY's venue?", answer: "Yes! Every tip and idea in our blog has been tested and executed in real celebrations at HIVY. When we recommend a balloon colour combination or a surprise timing, it's based on actual experience from 3,000+ celebrations." },
    { question: "Can I request a specific blog topic?", answer: "We welcome topic suggestions! Send us a message via WhatsApp at +91 9727027278 or through our contact form. If your suggestion helps other Surat couples too, we'll likely write about it." },
    { question: "Does HIVY offer celebration planning services beyond the venue?", answer: "Currently, we focus on providing the ultimate in-venue celebration experience. However, our blog offers extensive DIY guidance for at-home celebrations, outdoor events, and restaurant date ideas." },
    { question: "How can I book a celebration after reading a blog idea I like?", answer: "Simply call +91 9727027278, WhatsApp us, or fill out the booking form on our contact page. Mention the blog article or specific idea you liked, and our team will incorporate it into your celebration plan." },
    { question: "Are the blog photos from real HIVY celebrations?", answer: "Yes, all photos in our blog posts are from actual celebrations at HIVY. We never use stock images or AI-generated photos. What you see is exactly what our venue looks like during real events." },
    { question: "What is the most popular celebration trend in Surat right now?", answer: "Blindfold surprise entries are currently the most popular trend, followed by personalised neon signs, midnight celebrations, balloon pop reveals, and couple photoshoot add-ons. Read our trending ideas article for the full breakdown." },
    { question: "Can I share HIVY blog articles on social media?", answer: "We encourage sharing! All our articles are designed to be shareable. If a friend is planning a celebration, our blog guides can help them just as much as they help you." },
  ];

  const blogFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD Schema for blog listing
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "HIVY Blog - Celebration Ideas & Inspiration",
        "description": "Tips, guides, and romantic celebration ideas for couples in Surat",
        "url": "https://hivy.co.in/blog",
        "publisher": {
          "@type": "Organization",
          "name": "HIVY - Place for Celebrations"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": posts.slice(0, 10).map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://hivy.co.in/blog/${post.slug}`,
            "image": `https://hivy.co.in${post.coverImage}`,
            "datePublished": post.publishedAt
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "Blog",
            "item": "https://hivy.co.in/blog"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-amber-100 text-amber-900 mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Celebration Ideas & Inspiration
            </h1>
            <p className="text-lg text-gray-600">
              Discover tips, guides, and ideas for planning the perfect celebration in Surat. 
              From birthday surprises to romantic proposals, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-amber-50 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-amber-50 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Your Complete Guide to Romantic Celebrations in Surat — Tips, Ideas & Inspiration
              </h2>
              <p>
                Planning a celebration for someone you love is one of life's most exciting challenges. Whether you're searching for <strong>candlelight dinner ideas in Surat</strong>, hunting for the perfect <strong>birthday surprise for your boyfriend or girlfriend</strong>, brainstorming <strong>anniversary celebration plans</strong>, or gathering courage for a <strong>romantic proposal</strong>, the HIVY blog is designed to be your go-to resource. Every article is written by our celebration team — the same people who have orchestrated over 500 magical evenings at Surat's most trusted private celebration venue.
              </p>
              <p>
                What makes our blog different from generic lifestyle websites? <strong>Real experience.</strong> Every tip you read here has been tested in our venue. Every idea has been executed for real Surat couples. When we recommend a particular balloon colour combination for a birthday surprise, it's because we've seen how it looks under fairy lights in our tents. When we suggest timing your proposal during the dessert course, it's because we've watched dozens of successful proposals unfold that way — and we know exactly why it works.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What You'll Find in Our Articles
              </h3>
              <p>
                The HIVY blog covers an intentionally broad range of romantic and celebration topics relevant to <strong>couples in Surat and Gujarat</strong>. Here's a snapshot of the categories we explore:
              </p>
              <ul className="space-y-2 my-4">
                <li><strong>Candlelight Dinner Guides</strong> — How to plan the perfect candle-lit evening, what to wear, conversation starters for date nights, and why a private setting outperforms any restaurant experience.</li>
                <li><strong>Birthday Surprise Ideas</strong> — Creative ways to surprise a husband, wife, boyfriend, or girlfriend. We cover everything from blindfold reveals and balloon-pop messages to custom photo walls and surprise guest arrivals.</li>
                <li><strong>Anniversary Celebrations</strong> — From first-anniversary milestones to silver jubilee commemorations, our guides help you choose the right theme, gift, and venue setup for every year.</li>
                <li><strong>Proposal & Engagement Planning</strong> — Step-by-step blueprints for popping the question, including ring selection timelines, speech tips, photographer coordination, and post-proposal celebration ideas.</li>
                <li><strong>Pre-Wedding & Baby Moments</strong> — Photoshoot location tips, outfit coordination guides, pregnancy announcement ideas, baby shower themes, and gender reveal party concepts tailored to Indian traditions.</li>
                <li><strong>Valentine's Week Specials</strong> — Day-by-day celebration ideas for Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day, Kiss Day, and Valentine's Day itself.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why We Write — Helping Surat Couples Celebrate Better
              </h3>
              <p>
                Not every couple can visit HIVY for every occasion, and we understand that. Sometimes you just need a good idea — something to spark your creativity so you can surprise your partner at home, in a park, or at a completely different venue. Our blog exists to serve that need too. We share our knowledge freely because we believe that when celebrations anywhere in Surat become more thoughtful, the entire city's romance culture improves.
              </p>
              <p>
                Of course, if you read an idea you love and realise it would look spectacular inside one of our fairy-lit tents with a professional photographer capturing every moment, we're always just a <a href={`tel:${siteConfig.phone}`} className="text-amber-800 font-bold hover:underline">phone call</a> or <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp message</a> away. Many of our most memorable celebrations started as a blog article that a partner read at midnight and decided, "This is exactly what I want to do."
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Trending Celebration Ideas in Surat Right Now
              </h3>
              <p>
                Based on our recent bookings and the questions couples ask most frequently, here are the celebration trends dominating Surat in 2025:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Blindfold Surprise Entries</strong> — Partners are led blindfolded to a fully decorated setup, and the "big reveal" moment is captured on video. It's become the most-shared content on Instagram reels from HIVY.</li>
                <li><strong>Personalised Neon Signs</strong> — Custom LED neon messages ("Will You Marry Me?", "Happy 10th Anniversary", or even inside jokes) add a modern, Instagram-worthy element to traditional candlelight setups.</li>
                <li><strong>Midnight Celebrations</strong> — Booking a late-night slot (9 PM–12 AM) so the clock strikes midnight during the celebration is hugely popular for birthdays and anniversaries.</li>
                <li><strong>Balloon Pop Reveals</strong> — Gender reveals, proposal announcements, and surprise messages hidden inside oversized balloons — the pop creates a dramatic moment that guests remember forever.</li>
                <li><strong>Couple Photoshoot Add-ons</strong> — Instead of just a celebration, couples are adding 30-minute professional photoshoots to their packages, using HIVY's decorated setups as stunning backdrops.</li>
              </ol>
              <p>
                Dive into our articles below for detailed guides on each of these trends and many more. Every piece is crafted to give you actionable ideas you can implement immediately — whether at HIVY or anywhere else in Surat.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-900">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Blog & Celebration Ideas FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {blogFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-stone-50 rounded-lg border border-stone-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-800 to-amber-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Celebration?
          </h2>
          <p className="text-stone-200 mb-8 max-w-2xl mx-auto">
            Turn your special moments into unforgettable memories at HIVY - Place for Celebrations, 
            Surat's premier romantic celebration venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-800 hover:bg-amber-50"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-amber-900">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-800 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'short' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
