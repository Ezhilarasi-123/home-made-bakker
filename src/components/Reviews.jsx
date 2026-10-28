import React from 'react';
import { Star, MessageCircle, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/products';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#FFFDF9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E26D5C]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Love</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F221E] mb-4">
            Words From Our Happy Customers
          </h2>
          <p className="text-sm sm:text-base text-[#6B554E]">
            Real feedback from dessert lovers across Sivagiri, Erode, and nearby villages who trust HOME MADE BAKKER for their family celebrations.
          </p>

          {/* Overall Rating Banner */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-2xl bg-white border border-[#E8DCD2] shadow-sm">
            <div className="flex items-center text-[#DDA15E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#DDA15E]" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#2F221E]">4.9 out of 5</span>
            <span className="text-xs text-[#8D6B62] border-l border-[#E8DCD2] pl-3">
              150+ Satisfied Celebrations
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DE] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Stars */}
                  <div className="flex items-center text-[#DDA15E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DDA15E]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#9C7F77]">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#46322A] leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F5ECE5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E26D5C] to-[#BC6C25] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2F221E] flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" title="Verified customer" />
                    </h4>
                    <span className="text-xs text-[#8D6B62]">{review.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#8D6B62] block">Ordered</span>
                  <span className="text-xs font-semibold text-[#E26D5C]">
                    {review.cakeOrdered}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to write a review on WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
              'Hello HOME MADE BAKKER! I would like to share my feedback on the cake I ordered.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#523D35] hover:text-[#E26D5C] font-semibold text-xs sm:text-sm border border-[#E8DCD2] shadow-sm hover:border-[#E26D5C]/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Have you ordered from us? Share your review on WhatsApp!</span>
          </a>
        </div>

      </div>
    </section>
  );
}
