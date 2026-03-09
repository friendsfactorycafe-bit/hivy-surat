'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

export default function FFCMenuPage() {
  const menuFaqs = [
    { question: "Is the food at HIVY vegetarian?", answer: "Yes, HIVY is a 100% pure vegetarian café. Every item on our menu is freshly prepared on-site using premium ingredients. No non-vegetarian items are served or prepared in our kitchen." },
    { question: "Are Jain food options available at HIVY?", answer: "Absolutely. We accommodate Jain dietary preferences (no onion, no garlic) at no additional charge. Simply mention your Jain requirement while booking and our kitchen team will prepare your entire meal accordingly." },
    { question: "What food is included in each celebration package?", answer: "Every package includes a full dinner menu: mojito welcome drink, cheese fondue (with cheese balls, wedges, nachos & rich cheesy sauce), paneer tortilla, peri peri fries with mac & cheese, tangy loaf with cheesy garlic sauce, unlimited cold drinks, dessert with chocolate bite, and mineral water. Plus complimentary cake and optional champagne." },
    { question: "Can I choose specific dishes or customise the menu?", answer: "While our menu is curated for the romantic celebration experience, we accommodate dietary restrictions and specific preferences. If you have allergies, spice preferences, or special requests, let us know while booking." },
    { question: "Is a celebration cake included in the package?", answer: "Select packages include a complimentary celebration cake. You can choose from chocolate, butterscotch, red velvet, or vanilla flavours. For packages without cake, one can be added for ₹500. You may also bring your own cake." },
    { question: "What mocktails and beverages are served?", answer: "Each package includes premium mocktails such as Virgin Mojito, Rose Sharbat Spritzer, and Mango Tango. Fresh lime soda, cold coffee, and bottled water are also available. Non-alcoholic fruit champagne can be added for ₹500." },
    { question: "How is the food served during the 3-hour celebration?", answer: "Food is served in courses timed to match the celebration arc: mojito welcome drink and light starters in the first 30 minutes, main course during the middle section, and desserts with cake-cutting towards the final hour. Unlimited cold drinks and mineral water are available throughout. Timing is flexible to your pace." },
    { question: "Are there any hidden food charges beyond the package price?", answer: "No hidden charges whatsoever. The package price includes all food, drinks, cake (in applicable packages), and service. What you see on our website is exactly what you pay. No service tax or additional fees." },
    { question: "Can I bring outside food or cake to HIVY?", answer: "You can bring your own cake at no extra charge. For outside food, we recommend using our curated menu for the best experience, but small personal items like chocolates or special treats are welcome." },
    { question: "What if I have food allergies or dietary restrictions?", answer: "Please inform us about any allergies or dietary restrictions while booking. Our kitchen team will ensure your meal is safe and accommodating. Common accommodations include gluten-free adjustments, reduced spice, and nut-free preparations." },
  ];

  const menuFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": menuFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-900/20 text-amber-300 border-amber-900/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Café-Style Delicacies Crafted for Romantic Dates & Private Celebrations
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to complement the romantic ambiance</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your romantic evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-stone-200 bg-stone-100">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-amber-800 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Experience</h2>
            <p className="text-gray-600">What makes your celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Trending Tent Setup for romantic evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-800" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-amber-800 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                The HIVY Dining Philosophy — Why Our Food Is Part of the Memory
              </h2>
              <p>
                At most celebration venues, the food is an afterthought — a buffet tray or a generic set menu that exists merely to fill a gap between the décor reveal and the cake cutting. At <strong>HIVY - Place for Celebrations</strong> in Surat, we take the opposite approach. Our café-style menu is specifically crafted by experienced chefs who understand that a romantic meal is not just about taste — it's about pacing, presentation, and the emotional arc of the evening.
              </p>
              <p>
                Every dish on our menu has been tested across hundreds of celebrations. We observe which starters make couples lean in and share conversation, which main courses earn a contented silence mid-bite, and which desserts trigger the instinct to reach for a phone camera before the first spoon. That feedback loop — served, observed, refined — is what makes HIVY's <strong>candlelight dinner menu in Surat</strong> genuinely different from a restaurant order.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                How a Three-Course Romantic Meal Unfolds at HIVY
              </h3>
              <p>
                Your three-hour celebration is divided into natural phases, and the food arrives in sync with each one. In the first thirty minutes, while you're settling into the ambiance — absorbing the fairy lights, the candle glow, the personalised décor — our team serves light <strong>starters and mocktails</strong>. These are intentionally finger-friendly or small-plate items that encourage conversation rather than requiring your full attention at the plate.
              </p>
              <p>
                As the evening deepens and you move into the heart of your celebration — whether it's a <strong>birthday surprise reveal</strong>, an <strong>anniversary toast</strong>, or a quiet <strong>date night for couples</strong> — the main course arrives. Our signature dishes like Paneer Tikka Masala Bowl, Creamy Pasta Alfredo, Loaded Nachos, and Margherita Pizza are designed to be flavourful yet not overly heavy, so the romantic mood isn't broken by post-meal sluggishness. Portions are generous but elegant, plated individually rather than served family-style, because this is your private celebration and every detail should feel personal.
              </p>
              <p>
                The final act is dessert — and this is where HIVY truly shines. A custom celebration cake (flavour of your choice) takes centre stage, paired with our Molten Chocolate Lava Cake, Exotic Fruit Platter, or the signature Brownie Sizzler. Many couples tell us the dessert phase is when the evening's emotions peak: the balloon pop with a hidden message, the ring reveal inside a rose box, or simply the perfect photograph with frosting on both noses.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Ingredient Standards and Dietary Considerations
              </h3>
              <p>
                HIVY is a <strong>pure vegetarian celebration café</strong> — every item on our menu is 100% vegetarian and prepared fresh on-site. We source premium ingredients from trusted local suppliers in Surat: artisan cheese for our pizzas, farm-fresh vegetables for the salads, imported Belgian chocolate for the lava cakes, and seasonal fruits for the platters. No pre-packaged, reheated, or frozen items ever reach your table.
              </p>
              <p>
                If you or your partner have specific dietary needs — Jain preferences (no onion/garlic), reduced spice, or specific allergen concerns — simply mention it while booking. Our kitchen team customises the menu at no additional charge. We've happily accommodated requests ranging from sugar-free cakes for health-conscious celebrations to extra-spicy dishes for couples who like their food as fiery as their love story.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Beverages That Set the Mood
              </h3>
              <p>
                Every HIVY package includes a selection of <strong>premium mocktails</strong> designed to complement the celebration mood. Our signature Virgin Mojito, Rose Sharbat Spritzer, and Mango Tango are the most frequently ordered — refreshing, visually stunning (served in decorated glasses with fruit garnishes), and perfect for toasting. For couples who prefer non-flavoured drinks, we offer sparkling water, fresh lime soda, and classic cold coffee.
              </p>
              <p>
                The beverages are served at two points during the evening: once with the starters as a mojito welcome drink, and again with unlimited cold drinks available throughout. A raised glass paired with fairy-light reflections and your partner's smile creates one of the most photographed moments of any HIVY celebration.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What's Included in Every Package — No Hidden Costs
              </h3>
              <p>
                Transparency is core to how we operate. When you choose a HIVY celebration package (starting from <strong>₹4,700</strong>), the menu component is fully inclusive. That means:
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-800 mt-0.5 flex-shrink-0" /> Full three-course meal for two (starters, mains, desserts)</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-800 mt-0.5 flex-shrink-0" /> Custom celebration cake (chocolate, butterscotch, red velvet, or vanilla)</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-800 mt-0.5 flex-shrink-0" /> Two premium mocktails per person</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-800 mt-0.5 flex-shrink-0" /> Bottled water and palate cleansers between courses</li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-amber-800 mt-0.5 flex-shrink-0" /> Personalised menu card on the table (on request)</li>
              </ul>
              <p>
                There are no service charges, no GST surprises, and no "per plate" minimums. The price listed on our website is the price you pay. Period.
              </p>

              <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-amber-900 mb-2">
                  Craving a special dining experience?
                </p>
                <p className="text-gray-600">
                  Call <a href={`tel:${siteConfig.phone}`} className="text-amber-800 font-bold hover:underline">{siteConfig.phone}</a> to discuss menu customisations for your celebration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Dining & Menu FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {menuFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-stone-200 px-6">
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
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-white text-amber-800 hover:bg-amber-50" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
