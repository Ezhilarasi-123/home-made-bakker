import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Phone, Menu, X, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Fresh Menu', href: '#menu' },
    { name: 'Custom Cake Order', href: '#custom-order' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm py-3'
            : 'bg-[#FFFDF9]/90 backdrop-blur-md py-4 border-b border-[#F0E6DE]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E26D5C] to-[#C84B31] flex items-center justify-center text-white shadow-md shadow-[#E26D5C]/30 group-hover:scale-105 transition-transform">
                <span className="font-serif-display font-bold text-xl">H</span>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-display font-bold text-lg sm:text-xl tracking-tight text-[#38221C] group-hover:text-[#E26D5C] transition-colors">
                    HOME MADE BAKKER
                  </span>
                  <Sparkles className="w-4 h-4 text-[#DDA15E] hidden sm:inline" />
                </div>
                <span className="text-[11px] font-medium tracking-wider uppercase text-[#8D6B62]">
                  Ammankovil • Sivagiri, Erode
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#523D35] hover:text-[#E26D5C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E26D5C] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: WhatsApp + Cart + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Quick CTA */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello HOME MADE BAKKER! I would like to inquire about ordering fresh homemade cakes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#25D366]/10 text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition-all duration-200 border border-[#25D366]/20"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E26D5C] to-[#C84B31] text-white font-medium text-sm shadow-md shadow-[#E26D5C]/25 hover:shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                aria-label={`Open shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden xs:inline text-xs font-semibold">Cart</span>
                {cartCount > 0 && (
                  <span className="flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold rounded-full bg-white text-[#C84B31] shadow">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#523D35] hover:bg-[#F3E9E2] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF9] border-b border-[#EADFD5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#46322A] hover:bg-[#FCEFEA] hover:text-[#E26D5C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-[#F0E6DE] flex flex-col gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello HOME MADE BAKKER! I would like to inquire about ordering cakes.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-sm font-semibold shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp: {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#F5ECE5] text-[#523D35] text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E26D5C]" />
                  Direct Call: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
