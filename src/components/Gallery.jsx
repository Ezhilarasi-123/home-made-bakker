import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/products';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-20 border-t border-[#F0E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E26D5C]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Showcase</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F221E] mb-4">
            Our Sweet Creations Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6B554E]">
            A glimpse into the cakes, brownies, cupcakes, and dessert cups baked right in our kitchen in Ammankovil, Sivagiri.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-[#FFF8F0] border border-[#F0E6DE] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#2F221E] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#DDA15E] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-lg font-bold text-white drop-shadow">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full screen view */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E26D5C] block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif-display text-xl font-bold text-[#2F221E]">
                    {selectedImage.title}
                  </h3>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello HOME MADE BAKKER! I saw the "${selectedImage.title}" in your gallery and would like to order something similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order This Design</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
