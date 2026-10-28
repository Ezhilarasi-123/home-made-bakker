import React from 'react';
import { Heart, Sparkles, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#261A16] text-[#E5D7D0] pt-16 pb-12 border-t border-[#3D2C26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2C26]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E26D5C] to-[#C84B31] flex items-center justify-center text-white font-serif-display font-bold text-lg shadow-md">
                H
              </div>
              <span className="font-serif-display font-bold text-xl text-white tracking-wide">
                HOME MADE BAKKER
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB0A8] leading-relaxed max-w-sm">
              Authentic homemade cakes, gooey walnut brownies, gourmet cupcakes, and customized celebration cakes handcrafted with pure ingredients in Ammankovil, Sivagiri, Erode.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DDA15E]">
              <Sparkles className="w-4 h-4" />
              <span>Baked Fresh on Pre-Order • 100% Eggless Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-[#E26D5C] transition-colors">
                  Fresh Menu & Pricing
                </a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-[#E26D5C] transition-colors">
                  Custom Cake Builder
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E26D5C] transition-colors">
                  Bakery Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E26D5C] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E26D5C] transition-colors">
                  Contact & Sivagiri Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Bakery Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#BDB0A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E26D5C] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello HOME MADE BAKKER!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 77084 40767
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DDA15E] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A8C84]">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} HOME MADE BAKKER. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E26D5C] fill-[#E26D5C] inline" />
            <span>by {BUSINESS_INFO.bakerName} in Sivagiri.</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3D2C26] hover:bg-[#E26D5C] text-[#E5D7D0] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
