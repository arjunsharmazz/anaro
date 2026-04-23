export const categories = [
  {
    id: 'shirts',
    title: 'Shirts',
    subtitle: 'Architected fits for elevated everyday wear.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pants',
    title: 'Pants',
    subtitle: 'Tailored silhouettes with fluid movement.',
    image:
      'https://images.unsplash.com/photo-1506629905607-c2b0d7d3b5e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jeans',
    title: 'Jeans',
    subtitle: 'Structured denim with a polished finish.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shoes',
    title: 'Shoes',
    subtitle: 'Futuristic comfort designed for motion.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'kids-wear',
    title: 'Kids Wear',
    subtitle: 'Playful luxury with soft performance fabric.',
    image:
      'https://images.unsplash.com/photo-1519238363809-ea26f2709dd4?auto=format&fit=crop&w=900&q=80',
  },
];

export const products = [
  {
    id: 1,
    title: 'Crimson Edge Overshirt',
    price: 129,
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
    description:
      'A structured overshirt in a premium brushed blend with sharp shoulders, tonal hardware, and a modern cropped proportion.',
  },
  {
    id: 2,
    title: 'Noir Motion Trousers',
    price: 148,
    category: 'Pants',
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506629905607-c2b0d7d3b5e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    sizes: ['M', 'L', 'XL'],
    trending: true,
    description:
      'Precision-cut trousers with a technical drape, tapered leg, and engineered stretch for all-day polish.',
  },
  {
    id: 3,
    title: 'Voltage Straight Denim',
    price: 112,
    category: 'Jeans',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    trending: false,
    description:
      'Dark denim with a clean straight fit, laser-finished whiskering, and subtle metallic detailing.',
  },
  {
    id: 4,
    title: 'Aero Luxe Runner',
    price: 168,
    category: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
    description:
      'Lightweight performance runners with sculpted midsoles, luxe mesh, and a bold deep red statement.',
  },
  {
    id: 5,
    title: 'Mini Orbit Set',
    price: 84,
    category: 'Kids Wear',
    image:
      'https://images.unsplash.com/photo-1519238363809-ea26f2709dd4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519238363809-ea26f2709dd4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    trending: false,
    description:
      'A soft-touch coordinated kids set with futuristic piping, clean lines, and comfort-led construction.',
  },
  {
    id: 6,
    title: 'Scarlet Signal Shirt',
    price: 118,
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.4,
    sizes: ['M', 'L', 'XL'],
    trending: true,
    description:
      'A crisp statement shirt finished with angular seams and an understated satin sheen for evening transitions.',
  },
  {
    id: 7,
    title: 'Contour Utility Pants',
    price: 136,
    category: 'Pants',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.3,
    sizes: ['S', 'M', 'L', 'XL'],
    trending: false,
    description:
      'Utility-inspired pants refined with hidden pockets, matte trims, and a precision cut through the ankle.',
  },
  {
    id: 8,
    title: 'Eclipse Leather Sneaker',
    price: 182,
    category: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    sizes: ['M', 'L', 'XL'],
    trending: true,
    description:
      'Minimal leather sneakers with sculpted soles, tonal branding, and a premium handcrafted finish.',
  },
];