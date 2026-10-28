import React from 'react';
import { Heart, Sparkles, Truck, CheckCircle2, ShieldCheck, Smile } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Heart,
      title: '100% Homemade Quality',
      description:
        'Every cake, brownie, and dessert is baked fresh right in our home kitchen in Ammankovil. Zero premixes, zero artificial preservatives.',
      color: 'text-[#E26D5C]',
      bg: 'bg-[#E26D5C]/10',
    },
    {
      icon: Sparkles,
      title: 'Affordable INR Pricing',
      description:
        'Premium artisanal quality without the high hotel markups. Delicious cupcakes from ₹280 and signature cakes starting at only ₹380.',
      color: 'text-[#BC6C25]',
      bg: 'bg-[#BC6C25]/10',
    },
    {
      icon: ShieldCheck,
      title: '100% Eggless On Demand',
      description:
        'Pure vegetarian? We offer eggless baking for all our cakes, brownies, and cupcakes without compromising on fluffiness and taste.',
      color: 'text-[#2D6A4F]',
      bg: 'bg-[#2D6A4F]/10',
    },
    {
      icon: Truck,
      title: 'Sivagiri & Erode Delivery',
      description:
        'Carefully packed and delivered fresh to your doorstep across Sivagiri, Ammankovil, Modakkurichi, and nearby areas, or pick up directly.',
      color: 'text-[#723D46]',
      bg: 'bg-[#723D46]/10',
    },
  ];

  return (
    <section className="py-14 bg-white border-y border-[#F3E8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF9] border border-[#F0E6DE] hover:border-[#E26D5C]/30 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center shrink-0 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-lg text-[#2F221E] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B554E] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
