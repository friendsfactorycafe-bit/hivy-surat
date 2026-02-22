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

      {/* Contact Info SEO Section */}
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Getting in Touch with HIVY</h2>
          <div className="prose prose-lg prose-amber max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-amber-900 mt-6">Multiple Ways to Contact HIVY</h3>
            <p>
              At HIVY, we understand that convenience matters when you're planning a special celebration. That's why we offer multiple contact channels to suit your preference. You can reach us via WhatsApp for instant messaging and quick responses, call our dedicated booking number to speak directly with our celebration coordinators, or fill out the online booking form on this page to have us call you back. WhatsApp is our most popular contact method because it allows us to share photos of setups, send menu options, and answer your questions in real time. Phone calls are ideal when you want to discuss elaborate customizations or have detailed questions about packages. The online form works well for those who prefer structured communication and want to provide all details upfront.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Operating Hours and Response Times</h3>
            <p>
              Our booking team is available daily from 10 AM to 10 PM to assist with all your celebration queries. During these hours, WhatsApp messages typically receive responses within five to fifteen minutes, ensuring you're never left waiting long for important information. Phone calls are answered promptly, and if we miss a call during busy periods, we return calls within thirty minutes. For booking form submissions, our team reaches out within one hour during operating hours. Even outside our active hours, you can send messages and submit forms, and we will respond first thing the next morning. Our commitment is to make the booking process as smooth and responsive as possible.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Location Overview — Near VR Mall, Dumas Road, Surat</h3>
            <p>
              HIVY - Place for Celebrations is located in a prime location near VR Mall on Dumas Road in Surat's well-connected Adajan area. This central location makes us easily accessible from all major neighborhoods including Vesu, City Light, Althan, Pal, Athwa, Varachha, Katargam, Udhna, and beyond. The drive from most parts of Surat takes between 15 to 30 minutes depending on traffic. Our venue is set back from the main road for privacy yet remains easy to find with Google Maps navigation. Search for "HIVY - Place For Celebration" on Google Maps for turn-by-turn directions directly to our entrance.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">What to Expect After Contacting Us</h3>
            <p>
              Once you reach out to HIVY, our celebration coordinators take over to guide you through every step. We begin by understanding your occasion, whether it's a romantic candlelight dinner, birthday celebration, anniversary, proposal, or any other special event. Based on your requirements, we recommend packages that fit your vision and budget. We answer all your questions about decorations, food, timing, and customizations. After you select your package and preferred time slot, we walk you through the booking confirmation process. Throughout this journey, our team remains available to address any concerns, make adjustments, and ensure you feel confident about your upcoming celebration.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Booking Process from Inquiry to Confirmation</h3>
            <p>
              The booking journey at HIVY is designed to be straightforward and stress-free. It begins with your initial inquiry where you share your preferred date, occasion type, and any specific requirements. Our team checks availability and presents suitable package options with pricing. Once you choose your package and time slot, we proceed to booking confirmation which requires a small advance payment. After confirmation, you receive a digital booking confirmation with all details documented. In the days leading up to your celebration, we coordinate any final customizations, confirm arrival timing, and ensure every detail is in place. On the day of your celebration, our team prepares everything before your arrival, so you walk into a perfectly prepared romantic setting.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Payment Methods and Advance Requirements</h3>
            <p>
              Securing your celebration at HIVY requires a nominal advance payment that typically ranges from ₹500 to ₹1,000 depending on the package. This advance locks in your date and time slot, ensuring your celebration is confirmed on our calendar. We accept multiple payment methods for your convenience: UPI payments through Google Pay, PhonePe, and Paytm are the quickest options. Bank transfers are available for those who prefer traditional banking. Credit and debit cards are accepted at the venue. Cash payments are also welcome. The remaining balance is due on the day of your celebration, giving you flexibility in managing your payment timing.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Visit and Venue Tour Information</h3>
            <p>
              We encourage prospective couples to visit HIVY before booking to see our setups and experience the ambiance firsthand. Venue visits are particularly valuable if you're planning a proposal or elaborate customization and want to visualize the space. Walk-in visits are welcome during weekday afternoons when our setups are available for preview. We recommend calling ahead to ensure a coordinator is available to show you around and discuss your specific requirements. During your visit, you can see our different themed setups, understand spacing and seating arrangements, and get a feel for the romantic atmosphere that awaits you and your partner.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Rescheduling and Cancellation Policies</h3>
            <p>
              We understand that plans can change, and our policies are designed to be fair and accommodating. Rescheduling your celebration is free when you inform us at least 24 hours before your booked slot. The new date must fall within one month of your original booking and is subject to availability. Our team works with you to find an alternative date that suits your schedule. Please note that we maintain a no-refund policy on bookings, as significant preparation begins once a celebration is confirmed. However, the free rescheduling option ensures that you never lose the value of your booking due to unexpected changes in plans.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Why Customers Love Our Responsive Service</h3>
            <p>
              Customer satisfaction at HIVY begins with responsive, attentive service from your first inquiry. Our booking team is trained to listen carefully, offer helpful suggestions, and address concerns promptly. Couples consistently appreciate our quick WhatsApp responses that keep conversations flowing without delays. They value the detailed information we provide about packages, timing, and customizations. Most importantly, they love that our team genuinely cares about making their celebration special. The personal attention continues from booking through to your celebration day, where our on-ground staff ensures every element is perfect. This responsive approach has earned us hundreds of positive reviews and returning customers.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Our Commitment to Customer Satisfaction</h3>
            <p>
              At HIVY, every celebration we host represents a couple's special moment, and we treat it with the respect and attention it deserves. Our commitment extends beyond beautiful decorations and delicious food. It encompasses the entire experience from your first message to your final goodbye. We listen to your vision and work to exceed your expectations. We handle unexpected situations gracefully and find solutions quickly. We follow up after celebrations to ensure satisfaction and gather feedback for continuous improvement. This dedication to customer satisfaction is why couples trust HIVY with their most meaningful occasions and recommend us to friends and family.
            </p>
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
