import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [customerName, setCustomerName] = useState('');
  const [deliveryType, setDeliveryType] = useState('doorstep');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [cakeMessage, setCakeMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }

    // Format itemized order list
    const itemsListText = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* x ${item.quantity} = ₹${
            item.price * item.quantity
          } (${item.unit})`
      )
      .join('\n');

    const orderMessage = `🍰 *NEW BAKERY ORDER - HOME MADE BAKKER* 🍰
------------------------------------------
👤 *Customer Name:* ${customerName || 'Customer'}
🚚 *Order Type:* ${
      deliveryType === 'pickup'
        ? 'Self-Pickup at Ammankovil'
        : 'Doorstep Delivery in Sivagiri / Erode'
    }
📍 *Delivery Address:* ${
      deliveryType === 'pickup'
        ? 'Pickup at Ammankovil, Sivagiri'
        : deliveryAddress || 'Address to be shared'
    }
📅 *Preferred Date:* ${deliveryDate || 'As soon as possible'}
✍️ *Message on Cake / Notes:* "${cakeMessage || 'None'}"

🛍️ *ORDER ITEMS:*
${itemsListText}

💰 *TOTAL AMOUNT:* ₹${subtotal}
------------------------------------------
Please confirm availability and share payment details (UPI/GPay/Cash on delivery)!`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
      orderMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* Header */}
          <div className="p-5 border-b border-[#F0E6DE] flex items-center justify-between bg-[#FFFDF9]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E26D5C]/10 text-[#E26D5C] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[#2F221E]">
                  Your Sweet Basket
                </h3>
                <span className="text-xs text-[#8D6B62]">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#8D6B62] hover:bg-[#F3E8E1] transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 p-5 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF8F0] flex items-center justify-center text-3xl">
                  🧁
                </div>
                <h4 className="font-serif-display font-bold text-lg text-[#2F221E] mb-1">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#7A645D] mb-6">
                  Add fresh homemade cakes, brownies, or cupcakes from our menu to start your order!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#E26D5C] text-white text-xs font-semibold shadow hover:bg-[#C84B31] transition-all cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Items List */}
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE] items-center justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#FFF8F0]"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-display font-bold text-xs sm:text-sm text-[#2F221E] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#8D6B62]">{item.unit}</p>
                      <p className="text-xs font-bold text-[#2F221E] mt-0.5">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-white border border-[#E8DCD2] flex items-center justify-center text-[#523D35] hover:border-[#E26D5C] cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="text-xs font-bold text-[#2F221E] w-5 text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-white border border-[#E8DCD2] flex items-center justify-center text-[#523D35] hover:border-[#E26D5C] cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-[#C5B4AC] hover:text-red-500 ml-1 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Delivery & Personalization Form */}
                <div className="pt-4 border-t border-[#F0E6DE] space-y-3">
                  <h4 className="text-xs font-bold text-[#2F221E] uppercase tracking-wider">
                    Delivery & Order Details
                  </h4>

                  {/* Customer Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#6B554E] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Priya M."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8DCD2] focus:outline-none focus:ring-1 focus:ring-[#E26D5C]"
                    />
                  </div>

                  {/* Delivery or Pickup */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#6B554E] mb-1">
                      Order Method
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryType('doorstep')}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                          deliveryType === 'doorstep'
                            ? 'bg-[#E26D5C] text-white border-[#E26D5C]'
                            : 'bg-white text-[#523D35] border-[#E8DCD2]'
                        }`}
                      >
                        Doorstep Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryType('pickup')}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                          deliveryType === 'pickup'
                            ? 'bg-[#E26D5C] text-white border-[#E26D5C]'
                            : 'bg-white text-[#523D35] border-[#E8DCD2]'
                        }`}
                      >
                        Ammankovil Pickup
                      </button>
                    </div>
                  </div>

                  {/* Address (if doorstep delivery) */}
                  {deliveryType === 'doorstep' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6B554E] mb-1">
                        Delivery Address in Sivagiri / Erode
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Street, Landmark, Sivagiri..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8DCD2] focus:outline-none focus:ring-1 focus:ring-[#E26D5C]"
                      />
                    </div>
                  )}

                  {/* Date */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#6B554E] mb-1">
                      Preferred Date & Time
                    </label>
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8DCD2] focus:outline-none focus:ring-1 focus:ring-[#E26D5C]"
                    />
                  </div>

                  {/* Custom Message on Cake */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#6B554E] mb-1">
                      Message on Cake / Special Requests
                    </label>
                    <input
                      type="text"
                      value={cakeMessage}
                      onChange={(e) => setCakeMessage(e.target.value)}
                      placeholder='e.g. "Happy Birthday Appa", 100% Eggless'
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8DCD2] focus:outline-none focus:ring-1 focus:ring-[#E26D5C]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#F0E6DE] bg-[#FFFDF9] space-y-4">
              <div className="space-y-1.5 text-xs text-[#6B554E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2F221E]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery in Sivagiri</span>
                  <span className="text-[#2D6A4F] font-semibold">
                    {deliveryType === 'pickup' ? 'Free Self-Pickup' : 'Confirmed on WhatsApp'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#2F221E] pt-2 border-t border-[#E8DCD2]">
                  <span>Total Amount</span>
                  <span className="text-[#E26D5C]">₹{subtotal}</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold shadow-lg shadow-[#25D366]/30 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Place Order via WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-[#8D6B62]">
                Your order is sent directly to <strong>{BUSINESS_INFO.phoneDisplay}</strong> with instant confirmation!
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
