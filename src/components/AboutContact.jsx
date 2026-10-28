import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function AboutContact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How much in advance should I place an order?',
      a: 'For standard cakes, brownies, and cupcakes, we recommend ordering 4 to 8 hours in advance. For customized designer cakes, please order 24 to 48 hours in advance so we can prepare your custom topper and decorations with utmost care.',
    },
    {
      q: 'Do you offer 100% eggless cakes in Sivagiri?',
      a: 'Yes! Almost all of our cakes, brownies, and cupcakes can be prepared 100% eggless without compromising on moisture, fluffiness, and authentic bakery flavor.',
    },
    {
      q: 'How does delivery work in Sivagiri and Erode?',
      a: 'We offer safe doorstep delivery throughout Sivagiri, Ammankovil, and surrounding areas. You can also choose direct pickup from our home bakery in Ammankovil, Sivagiri.',
    },
    {
      q: 'Which payment modes do you accept?',
      a: 'We accept Google Pay, PhonePe, Paytm, direct UPI transfer, and Cash on Delivery upon receiving your fresh order.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5ED] scroll-mt-20 border-t border-[#F0E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E26D5C]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Baker</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F221E] mb-6">
              Baked from the Heart in Ammankovil, Sivagiri
            </h2>
            <p className="text-base text-[#6B554E] leading-relaxed mb-4">
              <strong className="text-[#2F221E]">HOME MADE BAKKER</strong> was founded by <strong>{BUSINESS_INFO.bakerName}</strong> with a simple vision: to bring authentic, high-quality, melt-in-the-mouth homemade baking to our community in Sivagiri, Erode, at truly affordable prices.
            </p>
            <p className="text-sm sm:text-base text-[#6B554E] leading-relaxed mb-6">
              Unlike commercial industrial bakeries that rely on artificial premixes, vegetable fats, and flavor syrups, every single batter in our bakery is mixed from scratch using pure butter, high-grade cocoa, fresh farm dairy, and aromatic spices.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EBDCD2]">
              <div>
                <span className="text-2xl font-serif-display font-extrabold text-[#E26D5C]">100%</span>
                <p className="text-xs text-[#8D6B62]">Fresh & Homemade</p>
              </div>
              <div>
                <span className="text-2xl font-serif-display font-extrabold text-[#BC6C25]">₹320+</span>
                <p className="text-xs text-[#8D6B62]">Affordable Treats</p>
              </div>
              <div>
                <span className="text-2xl font-serif-display font-extrabold text-[#2D6A4F]">Eggless</span>
                <p className="text-xs text-[#8D6B62]">Options Available</p>
              </div>
            </div>
          </div>

          {/* Contact Highlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#F0E6DE]">
              <h3 className="font-serif-display font-bold text-2xl text-[#2F221E] mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE]">
                  <div className="w-10 h-10 rounded-xl bg-[#E26D5C]/10 text-[#E26D5C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#8D6B62] uppercase">Bakery Location</h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#2F221E] leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        'Ammankovil, Sivagiri, Erode, Tamil Nadu'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E26D5C] mt-1 hover:underline"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE]">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#1E7E34] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-[#8D6B62] uppercase">Call & WhatsApp</h4>
                    <p className="text-sm font-bold text-[#2F221E]">
                      {BUSINESS_INFO.phoneDisplay}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                          'Hello HOME MADE BAKKER! I would like to inquire about ordering cakes.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-[#1E7E34] hover:underline"
                      >
                        WhatsApp Chat
                      </a>
                      <span className="text-[#C5B4AC]">•</span>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-[11px] font-semibold text-[#E26D5C] hover:underline"
                      >
                        Direct Call
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE]">
                  <div className="w-10 h-10 rounded-xl bg-[#BC6C25]/10 text-[#BC6C25] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#8D6B62] uppercase">Email</h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#2F221E] hover:text-[#E26D5C] transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE]">
                  <div className="w-10 h-10 rounded-xl bg-[#723D46]/10 text-[#723D46] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#8D6B62] uppercase">Baking Hours</h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#2F221E]">
                      {BUSINESS_INFO.hours}
                    </p>
                    <p className="text-[11px] text-[#8D6B62]">Baking 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-[#EBDCD2]">
          <h3 className="font-serif-display font-bold text-2xl text-[#2F221E] text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#F0E6DE] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#2F221E] hover:text-[#E26D5C] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#E26D5C] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8D6B62] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6B554E] leading-relaxed border-t border-[#FAF2EC] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
