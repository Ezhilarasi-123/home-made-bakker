export const PRODUCTS = [
  {
    id: 'choc-truffle-cake',
    name: 'Belgian Chocolate Truffle Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 650,
    unit: '1 kg (₹380 for 0.5 kg)',
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isEgglessAvailable: true,
    image: '/images/chocolate-truffle.jpg',
    description: 'Rich layers of dark Dutch chocolate sponge, smothered with silky homemade chocolate ganache, fresh berry garnishes, and edible gold luster.',
    badge: 'Bestseller'
  },
  {
    id: 'rasmalai-tres-leches',
    name: 'Royal Rasmalai Fusion Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 750,
    unit: '1 kg (₹420 for 0.5 kg)',
    rating: 5.0,
    reviewsCount: 42,
    isBestseller: true,
    isEgglessAvailable: true,
    image: '/images/rasmalai-cake.jpg',
    description: 'Saffron and cardamom infused sponge soaked in rich sweetened milk, topped with crushed Iranian pistachios, almond slivers, and fragrant rose petals.',
    badge: 'Chef Special'
  },
  {
    id: 'fudgy-walnut-brownies',
    name: 'Classic Fudgy Walnut Brownies (Box of 4)',
    category: 'brownies',
    categoryLabel: 'Brownies',
    price: 320,
    unit: 'Box of 4 Large Squares',
    rating: 4.9,
    reviewsCount: 56,
    isBestseller: true,
    isEgglessAvailable: true,
    image: '/images/fudgy-brownies.jpg',
    description: 'Melt-in-the-mouth fudgy chocolate brownies made with pure dark chocolate, topped with roasted California walnuts and crinkled tops.',
    badge: 'Top Rated'
  },
  {
    id: 'artisan-cupcake-box',
    name: 'Gourmet Swirl Cupcake Box (4-Pack)',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    price: 280,
    unit: 'Box of 4 Assorted',
    rating: 4.8,
    reviewsCount: 29,
    isBestseller: false,
    isEgglessAvailable: true,
    image: '/images/artisan-cupcakes.jpg',
    description: 'Assortment of Red Velvet, Dutch Chocolate Ganache, Salted Butter Caramel, and Strawberries & Cream cupcakes with floral buttercream piping.',
    badge: 'Party Hit'
  },
  {
    id: 'custom-celebration-cake',
    name: 'Artisan Pastel Rosette Birthday Cake',
    category: 'custom-cakes',
    categoryLabel: 'Custom Cakes',
    price: 850,
    unit: '1 kg Designer Tier',
    rating: 5.0,
    reviewsCount: 31,
    isBestseller: true,
    isEgglessAvailable: true,
    image: '/images/custom-birthday-cake.jpg',
    description: 'Bespoke celebration cake layered with Madagascar vanilla bean cream, customized rosettes, macarons, and personalized cake topper.',
    badge: 'Celebrations'
  },
  {
    id: 'biscoff-cheesecake-cups',
    name: 'Lotus Biscoff Cheesecake Jars (Set of 2)',
    category: 'desserts',
    categoryLabel: 'Desserts',
    price: 340,
    unit: 'Set of 2 Glass Jars',
    rating: 4.9,
    reviewsCount: 24,
    isBestseller: false,
    isEgglessAvailable: true,
    image: '/images/biscoff-cheesecake.jpg',
    description: 'No-bake velvety cream cheese layered with buttery Lotus Biscoff biscuit crunch and warm caramelized spiced cookie butter spread.',
    badge: 'Trending'
  },
  {
    id: 'red-velvet-cream-cheese',
    name: 'Red Velvet Rosette Cake',
    category: 'cakes',
    categoryLabel: 'Cakes',
    price: 700,
    unit: '1 kg (₹390 for 0.5 kg)',
    rating: 4.9,
    reviewsCount: 27,
    isBestseller: false,
    isEgglessAvailable: true,
    image: '/images/custom-birthday-cake.jpg',
    description: 'Velvety crimson buttermilk sponge layered with tangy cream cheese frosting and fine red velvet crumbs.',
    badge: 'Signature'
  },
  {
    id: 'triple-chocolate-brownies',
    name: 'Triple Chocolate Chunk Brownies (Box of 6)',
    category: 'brownies',
    categoryLabel: 'Brownies',
    price: 450,
    unit: 'Box of 6 Squares',
    rating: 5.0,
    reviewsCount: 35,
    isBestseller: false,
    isEgglessAvailable: true,
    image: '/images/fudgy-brownies.jpg',
    description: 'Loaded with chunks of white, milk, and dark chocolate that melt into gooey puddles when warmed.',
    badge: 'Chocoholic'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Kavitha Ramasamy',
    location: 'Sivagiri',
    rating: 5,
    date: '2 days ago',
    comment: 'Ordered the Rasmalai cake for my daughter’s 5th birthday. Everyone in the family was amazed! So soft, not too sweet, and packed with pistachios and saffron flavor. Sivagiri has the best homemade bakery now!',
    cakeOrdered: 'Royal Rasmalai Fusion Cake'
  },
  {
    id: 2,
    name: 'Senthil Nathan',
    location: 'Erode',
    rating: 5,
    date: '1 week ago',
    comment: 'The chocolate brownies are pure magic! Warm them for 15 seconds in the microwave and they taste better than high-end Chennai cafes. Delivered carefully to our doorstep.',
    cakeOrdered: 'Fudgy Walnut Brownies'
  },
  {
    id: 3,
    name: 'Deepa Muthukumar',
    location: 'Ammankovil',
    rating: 5,
    date: '2 weeks ago',
    comment: '100% eggless Belgian chocolate truffle cake ordered for our anniversary. The design was exactly like the photo we shared. Ezhilarasi takes personal care of every order. Highly recommended!',
    cakeOrdered: 'Belgian Chocolate Truffle Cake'
  },
  {
    id: 4,
    name: 'Praveen Kumar',
    location: 'Modakkurichi / Erode',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Super affordable INR prices compared to commercial bakeries, and the quality is 10 times better. The Biscoff cheesecake jars were the highlight of our weekend get-together.',
    cakeOrdered: 'Lotus Biscoff Cheesecake Jars'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Two-Tier Floral Birthday Cake',
    category: 'Custom Cakes',
    image: '/images/custom-birthday-cake.jpg'
  },
  {
    id: 'gal-2',
    title: 'Double Chocolate Drip Cake',
    category: 'Signature Cakes',
    image: '/images/chocolate-truffle.jpg'
  },
  {
    id: 'gal-3',
    title: 'Handmade Walnut Fudge Brownies',
    category: 'Brownies',
    image: '/images/fudgy-brownies.jpg'
  },
  {
    id: 'gal-4',
    title: 'Royal Saffron Rasmalai Cake',
    category: 'Speciality Cakes',
    image: '/images/rasmalai-cake.jpg'
  },
  {
    id: 'gal-5',
    title: 'Pastel Gourmet Cupcake Box',
    category: 'Cupcakes',
    image: '/images/artisan-cupcakes.jpg'
  },
  {
    id: 'gal-6',
    title: 'Biscoff Cream Dessert Cups',
    category: 'Desserts',
    image: '/images/biscoff-cheesecake.jpg'
  }
];

export const BUSINESS_INFO = {
  name: 'HOME MADE BAKKER',
  tagline: 'Fresh Homemade Bakes Handcrafted With Pure Ingredients',
  address: 'Ammankovil, Sivagiri, Erode District, Tamil Nadu - 638109',
  phone: '7708440767',
  phoneDisplay: '+91 77084 40767',
  whatsapp: '917708440767',
  email: 'kEZHIL30@GMAIL.COM',
  bakerName: 'Ezhilarasi K.',
  hours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  deliveryAreas: 'Ammankovil, Sivagiri, Modakkurichi, Kodumudi & nearby Erode localities',
  orderNotice: 'Orders baked fresh on pre-order. 24–48 hours advance booking recommended for custom designer cakes.'
};
