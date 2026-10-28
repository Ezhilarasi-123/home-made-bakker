import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
          'Hello HOME MADE BAKKER! I would like to order fresh cakes/brownies today.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat with HOME MADE BAKKER on WhatsApp"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-200 border-2 border-[#25D366]" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-bold hidden sm:inline tracking-wide">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
}
