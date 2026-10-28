import React, { useState } from 'react';
import { Sparkles, Calendar, Heart, MessageCircle, Check, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/products';

export default function CustomCakeOrder() {
  const [flavor, setFlavor] = useState('chocolate-truffle');
  const [weight, setWeight] = useState(1);
  const [isEggless, setIsEggless] = useState(true);
  const [occasion, setOccasion] = useState('Birthday');
  const [customMessage, setCustomMessage] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const flavors = [
    { id: 'chocolate-truffle', name: 'Belgian Chocolate Truffle', basePrice: 650 },
    { id: 'rasmalai-fusion', name: 'Royal Rasmalai Cardamom', basePrice: 750 },
    { id: 'red-velvet', name: 'Red Velvet Cream Cheese', basePrice: 700 },
    { id: 'butterscotch', name: 'Butterscotch Crunchy Caramel', basePrice: 580 },
    { id: 'fresh-fruit', name: 'Vanilla Bean & Fresh Fruit', basePrice: 620 },
    { id: 'black-forest', name: 'Classic Black Forest Cherries', basePrice: 550 },
  ];

  const selectedFlavorObj = flavors.find((f) => f.id === flavor) || flavors[0];
  
  // Calculate estimated price based on flavor basePrice and weight
  const estimatedPrice = Math.round(selectedFlavorObj.basePrice * weight);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E26D5C', '#DDA15E', '#723D46', '#25D366'],
      });
    } catch {
      // ignore
    }

    // Build formatted WhatsApp message
    const message = `🎂 *NEW CUSTOM CAKE INQUIRY - HOME MADE BAKKER* 🎂
------------------------------------------
👤 *Customer Name:* ${customerName || 'Customer'}
🍰 *Flavor:* ${selectedFlavorObj.name}
⚖️ *Weight:* ${weight} kg
🌱 *Dietary:* ${isEggless ? '100% Eggless (Pure Veg)' : 'Regular (With Eggs)'}
🎉 *Occasion:* ${occasion}
✍️ *Message on Cake:* "${customMessage || 'None specified'}"
📅 *Required Date:* ${deliveryDate || 'As soon as possible'}
📝 *Special Notes:* ${specialInstructions || 'None'}
💰 *Estimated Price:* ~₹${estimatedPrice}
📍 *Delivery / Pickup:* Sivagiri / Ammankovil
------------------------------------------
Please confirm availability and share design customization options!`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="custom-order" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#FFFDF9] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E26D5C]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E26D5C]" />
            <span>Bespoke Celebration Cakes</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F221E] mb-4">
            Custom Cake Order Builder
          </h2>
          <p className="text-sm sm:text-base text-[#6B554E]">
            Planning a birthday, anniversary, or special milestone in Sivagiri or Erode? Design your custom dream cake below to get an instant quote and message us directly on WhatsApp!
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#F0E6DE] overflow-hidden p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Select Flavor */}
            <div>
              <label className="block text-sm font-bold text-[#2F221E] mb-3">
                1. Select Cake Flavor
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flavors.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFlavor(f.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      flavor === f.id
                        ? 'border-[#E26D5C] bg-[#FCEFEA] shadow-sm ring-2 ring-[#E26D5C]/30'
                        : 'border-[#E8DCD2] bg-[#FFFDF9] hover:border-[#E26D5C]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#2F221E]">{f.name}</span>
                      {flavor === f.id && <Check className="w-3.5 h-3.5 text-[#E26D5C]" />}
                    </div>
                    <span className="text-[11px] text-[#8D6B62]">from ₹{f.basePrice}/kg</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Weight */}
            <div>
              <label className="block text-sm font-bold text-[#2F221E] mb-3">
                2. Select Cake Weight
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[0.5, 1, 1.5, 2, 3].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setWeight(w)}
                    className={`py-3 px-4 rounded-xl border text-center transition-all cursor-pointer ${
                      weight === w
                        ? 'bg-[#E26D5C] text-white border-[#E26D5C] shadow-md shadow-[#E26D5C]/25'
                        : 'bg-white text-[#523D35] border-[#E8DCD2] hover:bg-[#F3E8E1]'
                    }`}
                  >
                    <span className="text-sm font-bold block">{w} kg</span>
                    <span className="text-[10px] opacity-80 block">
                      {w === 0.5 ? '4-6 slices' : w === 1 ? '8-10 slices' : w === 1.5 ? '12-15 slices' : w === 2 ? '16-20 slices' : 'Party tier'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Dietary Preference & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Eggless toggle */}
              <div>
                <label className="block text-sm font-bold text-[#2F221E] mb-2">
                  3. Dietary Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEggless(true)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isEggless
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm'
                        : 'bg-white text-[#523D35] border-[#E8DCD2] hover:bg-[#F3E8E1]'
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span>100% Eggless (Veg)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEggless(false)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      !isEggless
                        ? 'bg-[#723D46] text-white border-[#723D46] shadow-sm'
                        : 'bg-white text-[#523D35] border-[#E8DCD2] hover:bg-[#F3E8E1]'
                    }`}
                  >
                    <span>Regular (With Eggs)</span>
                  </button>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-sm font-bold text-[#2F221E] mb-2">
                  4. Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8DCD2] text-sm text-[#2F221E] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
                >
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Wedding Anniversary</option>
                  <option value="Baby Shower">Baby Shower / Naming Ceremony</option>
                  <option value="Engagement">Engagement / Wedding</option>
                  <option value="Housewarming">Housewarming (Grihapravesham)</option>
                  <option value="Custom Event">Other Special Celebration</option>
                </select>
              </div>
            </div>

            {/* Step 4: Customer Details & Custom Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#2F221E] mb-2">
                  5. Your Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8DCD2] text-sm text-[#2F221E] placeholder-[#9C7F77] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#2F221E] mb-2">
                  6. Delivery / Celebration Date
                </label>
                <input
                  type="date"
                  required
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8DCD2] text-sm text-[#2F221E] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
                />
              </div>
            </div>

            {/* Text on Cake */}
            <div>
              <label className="block text-sm font-bold text-[#2F221E] mb-2">
                7. Text To Write on Cake
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder='e.g., "Happy 1st Birthday Aadhira ❤️" or "Happy 25th Anniversary Amma & Appa"'
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8DCD2] text-sm text-[#2F221E] placeholder-[#9C7F77] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-bold text-[#2F221E] mb-2">
                8. Theme, Color or Special Customization Notes (Optional)
              </label>
              <textarea
                rows="2"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Mention theme (e.g. pastel rosettes, superhero, gold foil, less sugar, etc.) or reference photo details."
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E8DCD2] text-sm text-[#2F221E] placeholder-[#9C7F77] focus:outline-none focus:ring-2 focus:ring-[#E26D5C]/40 focus:border-[#E26D5C]"
              />
            </div>

            {/* Estimated Price & Submit Button */}
            <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F0E6DE] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#8D6B62] block">
                  Estimated Total
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#2F221E]">
                    ₹{estimatedPrice}
                  </span>
                  <span className="text-xs text-[#8D6B62]">
                    ({weight} kg • {selectedFlavorObj.name})
                  </span>
                </div>
                <p className="text-[11px] text-[#7A645D] mt-1">
                  * Final quote may vary slightly based on intricate fondant / tier figurines.
                </p>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-lg shadow-[#25D366]/30 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Custom Cake Order on WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
