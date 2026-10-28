import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, MessageCircle, Star, Plus, Minus, Check } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';

export default function ProductCatalog({ cartItems, onAddToCart, onUpdateQuantity }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [egglessOnly, setEgglessOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Bakes' },
    { id: 'cakes', label: 'Signature Cakes' },
    { id: 'brownies', label: 'Fudgy Brownies' },
    { id: 'cupcakes', label: 'Gourmet Cupcakes' },
    { id: 'desserts', label: 'Dessert Jars' },
  ];

  // Filtering products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'cakes' && (product.category === 'cakes' || product.category === 'custom-cakes')) ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesEggless = egglessOnly ? product.isEgglessAvailable : true;

    return matchesCategory && matchesSearch && matchesEggless;
  });

  const getItemQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#FFFDF9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E26D5C]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freshly Baked Every Day</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F221E] mb-4">
            Our Handcrafted Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6B554E]">
            Pick your favorites from our freshly baked cakes, gooey walnut brownies, and delicate cupcakes. Affordable INR prices, eggless choices, and handcrafted goodness in Sivagiri.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F0E6DE]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E26D5C] text-white shadow-md shadow-[#E26D5C]/25'
                    : 'bg-white text-[#523D35] hover:bg-[#F3E8E1] border border-[#E8DCD2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box & Eggless Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8D6B62]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cakes, brownies..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#E8DCD2] text-xs sm:text-sm text-[#2F221E] placeholder-[#9C7F77] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
              />
            </div>

            {/* Eggless Toggle */}
            <button
              type="button"
              onClick={() => setEgglessOnly(!egglessOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                egglessOnly
                  ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm'
                  : 'bg-white text-[#2D6A4F] border-[#2D6A4F]/40 hover:bg-[#2D6A4F]/10'
              }`}
              title="Show 100% Eggless Options Only"
            >
              <div
                className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                  egglessOnly ? 'border-white bg-white' : 'border-[#2D6A4F]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    egglessOnly ? 'bg-[#2D6A4F]' : 'bg-[#2D6A4F]'
                  }`}
                />
              </div>
              <span className="whitespace-nowrap">Eggless Only</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E6DE] p-8 max-w-md mx-auto">
            <span className="text-4xl block mb-3">🧁</span>
            <h3 className="font-serif-display font-bold text-lg text-[#2F221E] mb-2">
              No matching items found
            </h3>
            <p className="text-xs sm:text-sm text-[#7A645D] mb-4">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setEgglessOnly(false);
              }}
              className="px-4 py-2 rounded-full bg-[#E26D5C] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const qty = getItemQuantity(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#F0E6DE] hover:border-[#E26D5C]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF8F0]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Badge (Bestseller, Chef Special, etc.) */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#E26D5C] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                          {product.badge}
                        </div>
                      )}

                      {/* Eggless badge */}
                      {product.isEgglessAvailable && (
                        <div
                          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-md border border-[#2D6A4F]/30"
                          title="100% Eggless available"
                        >
                          <div className="w-3.5 h-3.5 border-2 border-[#2D6A4F] flex items-center justify-center p-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      {/* Rating and category */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-medium text-[#8D6B62] uppercase tracking-wider text-[11px]">
                          {product.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-[#BC6C25] font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
                          <span>{product.rating}</span>
                          <span className="text-[#9C7F77] font-normal">({product.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-serif-display font-bold text-lg text-[#2F221E] group-hover:text-[#E26D5C] transition-colors mb-2 line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#6B554E] line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Unit / Weight note */}
                      <p className="text-[11px] font-medium text-[#8D6B62] mb-3">
                        Unit: <span className="text-[#2F221E]">{product.unit}</span>
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart / Quantity controls */}
                  <div className="p-5 pt-0 border-t border-[#F7EFE9] flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8D6B62] block">Price</span>
                      <span className="text-xl font-extrabold text-[#2F221E]">
                        ₹{product.price}
                      </span>
                    </div>

                    {/* Interactive Cart Button */}
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E26D5C] hover:bg-[#C84B31] text-white text-xs font-semibold shadow-md shadow-[#E26D5C]/25 active:scale-95 transition-all cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#FCEFEA] px-2 py-1 rounded-full border border-[#E26D5C]/30">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, qty - 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#E26D5C] shadow-sm hover:bg-[#E26D5C] hover:text-white transition-all cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#2F221E] min-w-4 text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, qty + 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#E26D5C] shadow-sm hover:bg-[#E26D5C] hover:text-white transition-all cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Direct WhatsApp Quick Order */}
                  <div className="px-5 pb-4">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello HOME MADE BAKKER! I would like to order "${product.name}" (₹${product.price}). Please share availability and delivery time for Sivagiri area.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white text-[11px] font-semibold transition-all border border-[#25D366]/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Direct WhatsApp Order</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
