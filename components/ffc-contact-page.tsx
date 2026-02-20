'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCContactPage() {
  const contactFaqs = [
    { question: "What is the best way to book a celebration at HIVY?", answer: "The fastest way is to call +91 9727027278 or send a WhatsApp message. You can also fill out the booking form on our website. Our team typically confirms availability within 15 minutes during operating hours." },
    { question: "What are HIVY's operating hours for bookings?", answer: "Our booking team is available daily from 10 AM to 10 PM. Celebration slots run from 11 AM to 11 PM with three session windows: Lunch (12-5 PM), Evening (4-9 PM), and Dinner (7-11 PM)." },
    { question: "How far in advance should I book at HIVY?", answer: "We recommend booking 3-5 days ahead for weekday slots and 7-10 days for weekends. For special dates like Valentine's Day, New Year's Eve, and festival periods, book at least 2 weeks in advance as slots sell out quickly." },
    { question: "Is there a booking deposit required?", answer: "Yes, a small advance payment of ₹500-₹1,000 secures your slot. The remaining balance is due on the day of celebration. We accept UPI (Google Pay, PhonePe), bank transfer, credit/debit cards, and cash." },
    { question: "Can I reschedule my booking at HIVY?", answer: "Yes, rescheduling is free if informed at least 24 hours before your booked slot. The new date must fall within one month of the original booking, subject to availability. Call +91 9727027278 to reschedule." },
    { question: "What is HIVY's refund policy?", answer: "Please note that a no-refund policy applies to all bookings. However, free rescheduling is available with 24 hours notice. We encourage couples to confirm their dates before booking." },
    { question: "How do I reach HIVY from different parts of Surat?", answer: "HIVY is located near Pratham Circle, Green City Road, Adajan. From Vesu, Adajan, City Light, or Althan, the drive is 15-25 minutes. From Varachha, Katargam, or Udhna, allow 20-30 minutes. Search 'HIVY Place for Celebrations' on Google Maps for turn-by-turn navigation." },
    { question: "Is parking available at HIVY?", answer: "Yes, ample free parking is available for both cars and two-wheelers right at the venue entrance. There is no need for street parking or walking long distances." },
    { question: "Can I visit HIVY before booking to see the setups?", answer: "Absolutely! Walk-in venue previews are available on weekday afternoons. Call +91 9727027278 to schedule a tour. You can view the tent setups, meet the team, and choose the perfect package." },
    { question: "What information do I need to provide when booking?", answer: "Please share: your name, contact number, occasion type (birthday, anniversary, proposal, etc.), preferred date and time slot, preferred package, and any special customisation requests. Our team handles everything from there." },
  ];

  const contactFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-950 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you! Book your celebration or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-amber-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">We're available for calls and booking inquiries</p>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-xl font-bold text-amber-800 hover:text-amber-900"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Quick responses via WhatsApp</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-amber-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-amber-800 hover:text-amber-900"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-amber-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-amber-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">🌙 Dinner (Indoor)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-900 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Celebration
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                How to Reach HIVY — Surat's Best Private Celebration Venue for Couples
              </h2>
              <p>
                Finding the perfect <strong>candlelight dinner venue in Surat</strong> is only half the journey — getting there stress-free matters just as much, especially when you're planning a surprise. HIVY - Place for Celebrations is located near Pratham Circle on Green City Road in Adajan, one of Surat's most well-connected residential areas. Whether you're driving from <strong>Vesu, Adajan, City Light, Althan, or Pal</strong>, you'll find us within a comfortable 15-to-25-minute drive, with clearly marked road signs and full Google Maps navigation support.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Step-by-Step Driving Directions from Key Surat Locations
              </h3>
              <p>
                <strong>From VR Surat Mall / Dumas Road:</strong> Take the Surat–Dumas Road towards Citylight, continue on Ring Road past Althan Circle, and follow the Adajan exit towards Green City Road. Total distance: approximately 14 km, or about 25 minutes in moderate traffic.
              </p>
              <p>
                <strong>From Adajan / Rander:</strong> Head towards Green City Road near Pratham Circle. The journey is around 5 km and typically takes 10-15 minutes.
              </p>
              <p>
                <strong>From Varachha / Katargam:</strong> Use the Varachha Main Road to connect with the Surat Ring Road, then take the Adajan / Green City Road exit. Distance is roughly 12 km, approximately 22 minutes.
              </p>
              <p>
                <strong>From Udhna / Surat Railway Station:</strong> Follow Ring Road westbound past Puna Kumbharia, then exit at Adajan. About 16 km, or 30 minutes. If you're arriving by train and planning a surprise, our team can coordinate the timing so decorations are ready exactly when you walk in.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What to Expect When You Arrive at HIVY
              </h3>
              <p>
                The venue is set back from the main road for added privacy, with dedicated parking space for cars and two-wheelers. If you're bringing your partner blindfolded for a surprise — a very common request — our team will be waiting at the entrance to guide you both safely to your pre-decorated tent. First-time visitors often tell us the moment they step past the entrance and see the glowing fairy lights through the curtains, any nervousness immediately turns into excitement.
              </p>
              <p>
                Your private celebration tent is prepared at least 30 minutes before your arrival. The decoration team checks every candle placement, every balloon arch, every rose petal trail, and every photograph prop. By the time you walk in, the space looks exactly like the images you saw on our website — many couples say it looks even better in person because photos cannot capture the warm glow and the subtle floral scent that fills each tent.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Booking Your Celebration — Phone, WhatsApp, or Online
              </h3>
              <p>
                We offer three convenient ways to book your <strong>romantic dinner date in Surat</strong>, <strong>birthday surprise party</strong>, <strong>anniversary celebration</strong>, or <strong>proposal setup</strong>:
              </p>
              <ul className="space-y-3 my-4">
                <li><strong>Phone Call:</strong> Dial <a href={`tel:${siteConfig.phone}`} className="text-amber-800 font-bold hover:underline">{siteConfig.phone}</a> to speak with our celebration coordinator. We'll help you choose the right package, select a time slot, and discuss any special customisation requests.</li>
                <li><strong>WhatsApp:</strong> Send a message to <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">our WhatsApp</a> with your preferred date, occasion, and any specific wishes. Most enquiries receive a response within 15 minutes during operating hours.</li>
                <li><strong>Online Form:</strong> Fill out the booking form on this page with your name, contact number, occasion, preferred date, and package choice. Our team will call you back within an hour to confirm availability and finalise details.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Available Time Slots and How to Choose the Best One
              </h3>
              <p>
                HIVY operates three main session windows: <strong>Lunch (12 PM–5 PM)</strong>, <strong>Evening (4 PM–9 PM)</strong>, and <strong>Dinner (7 PM–11 PM)</strong>. Each booking gets a private 3-hour slot within the chosen window. The evening and dinner slots are the most popular for <strong>candlelight dinner dates</strong> and <strong>surprise proposals</strong> because the natural light fading outside creates a dramatic contrast with the glowing candles and fairy lights inside.
              </p>
              <p>
                For <strong>birthday celebrations</strong> and <strong>baby shower events</strong>, the lunch slot works wonderfully — natural daylight floods through the glass elements of certain setups, creating stunning photographs without flash. If you're planning a <strong>pre-wedding photoshoot</strong>, we recommend the late-afternoon slot (4 PM–7 PM) for the golden-hour lighting that our outdoor-adjacent spaces catch beautifully.
              </p>
              <p>
                Weekends — especially Friday and Saturday evenings — fill up quickly, so we recommend booking at least 3–5 days in advance. Weekday slots are easier to secure and offer the same full experience at no additional cost. Special dates like <strong>Valentine's Day, Propose Day, Rose Day</strong>, and New Year's Eve should be booked at least two weeks ahead.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Frequently Asked Questions About Contacting HIVY
              </h3>
              <div className="space-y-4 mt-4">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Can I visit HIVY before booking to see the setups?</p>
                  <p className="mt-1 text-gray-600">Yes — we welcome walk-in visits during non-peak hours (typically weekday afternoons). Call ahead to ensure a setup is available for preview. We'll show you the available tent styles and help you choose one that matches your occasion.</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Is there a booking deposit?</p>
                  <p className="mt-1 text-gray-600">A small advance payment (typically ₹500–₹1,000) secures your slot. The remaining amount is due on the day of the celebration. We accept UPI, bank transfer, and cash.</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">What if I need to reschedule?</p>
                  <p className="mt-1 text-gray-600">Rescheduling is free if informed at least 24 hours before your slot. The new date must fall within one month of the original booking, subject to availability.</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-amber-900 mb-2">
                  Have questions? We're one call away.
                </p>
                <p className="text-gray-600">
                  Reach us at <a href={`tel:${siteConfig.phone}`} className="text-amber-800 font-bold hover:underline">{siteConfig.phone}</a> — available daily from 10 AM to 10 PM.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit HIVY - Place for Celebrations in Surat</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0665549872024!2d72.78282829999999!3d21.1895149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4fc7b5dbb9%3A0xb1aa92785a2443b8!2sHIVY%20-%20Place%20For%20Celebration!5e0!3m2!1sen!2sin!4v1769339702912!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HIVY - Place for Celebrations Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/HIVY-Place-For-Celebration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-amber-800 hover:bg-amber-900">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Contact & Booking FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, index) => (
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

      {/* Google Reviews Section */}
      <FFCReviewsSlider />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
