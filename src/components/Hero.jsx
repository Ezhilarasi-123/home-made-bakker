import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Heart, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Hero({ onOpenCustomOrder, onExploreMenu }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#FFFDF9]">
      {/* Decorative background blur blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FCD5CE]/40 via-[#F8EDEB]/50 to-[#E26D5C]/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-48 -right-24 w-80 h-80 bg-[#DDA15E]/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E26D5C]/10 border border-[#E26D5C]/20 text-[#C84B31] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E26D5C]" />
              <span>100% Homemade With Pure Love • Sivagiri & Erode</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2F221E] tracking-tight leading-[1.15] mb-6">
              Freshly Baked Cakes & Desserts,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E26D5C] via-[#BC6C25] to-[#723D46]">
                Crafted for Every Sweet Moment.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#6B554E] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Welcome to <strong className="text-[#2F221E]">HOME MADE BAKKER</strong> in Ammankovil, Sivagiri. We bake decadent chocolate cakes, royal Rasmalai fusion delights, gooey walnut brownies, and customized celebration cakes—using pure butter, premium cocoa, and zero chemical preservatives.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#menu"
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E26D5C] to-[#C84B31] text-white font-semibold text-base shadow-lg shadow-[#E26D5C]/30 hover:shadow-xl hover:brightness-105 active:scale-98 transition-all"
              >
                <span>Explore Fresh Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#custom-order"
                onClick={onOpenCustomOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#523D35] hover:text-[#E26D5C] font-semibold text-base border border-[#E8D9CD] shadow-sm hover:border-[#E26D5C]/40 hover:bg-[#FFF9F5] transition-all"
              >
                <span>Customize Your Cake</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello HOME MADE BAKKER! I would like to order a fresh homemade cake today.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366]/10 text-[#17722C] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#EFE4DC]">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#E26D5C]/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#E26D5C]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2F221E]">100% Homemade</h4>
                  <p className="text-[11px] text-[#7A645D]">No preservatives</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#DDA15E]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#BC6C25]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2F221E]">Eggless Options</h4>
                  <p className="text-[11px] text-[#7A645D]">Available on request</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#723D46]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#723D46]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2F221E]">Baked Fresh</h4>
                  <p className="text-[11px] text-[#7A645D]">Made upon order</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#1E7E34]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2F221E]">Pocket Friendly</h4>
                  <p className="text-[11px] text-[#7A645D]">Affordable INR rates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E26D5C]/30 via-[#DDA15E]/20 to-[#723D46]/20 rounded-3xl blur-xl opacity-75" />
              
              {/* Main Card Container */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-[#F0E6DE] overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src="/images/hero-cake.jpg"
                    alt="Artisanal Belgian Chocolate Truffle Cake by HOME MADE BAKKER"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Price & Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#E26D5C] text-[11px] font-bold tracking-wide uppercase shadow">
                        Signature Cake
                      </span>
                      <h3 className="font-serif-display text-lg sm:text-xl font-bold mt-1 text-white drop-shadow">
                        Belgian Chocolate Truffle
                      </h3>
                      <p className="text-xs text-white/90">Starting from only ₹380</p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[#2F221E] shadow-lg text-right">
                      <span className="text-[10px] uppercase font-bold text-[#8D6B62] block">Rating</span>
                      <span className="text-sm font-extrabold text-[#BC6C25]">⭐ 4.9 / 5</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Feature bar */}
                <div className="mt-4 px-2 py-1 flex items-center justify-between text-xs text-[#523D35]">
                  <span className="font-medium">📍 Ammankovil, Sivagiri</span>
                  <span className="font-semibold text-[#E26D5C]">Doorstep Delivery in Sivagiri</span>
                </div>
              </div>

              {/* Floating review chip */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#F0E6DE] animate-float max-w-xs">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E26D5C] to-[#BC6C25] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  K
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[#DDA15E] text-xs">
                    ★★★★★
                  </div>
                  <p className="text-xs font-semibold text-[#2F221E] line-clamp-1">
                    "Softest cake ever in Sivagiri!"
                  </p>
                  <p className="text-[10px] text-[#8D6B62]">Kavitha R., Sivagiri</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
