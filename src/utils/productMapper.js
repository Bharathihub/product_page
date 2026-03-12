// Map Fake Store API products to custom products with realistic pricing
export const customProducts = {
  1: {
    title: 'Premium Wireless Headphones',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 89.99
  },
  2: {
    title: 'Smart Fitness Watch',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
    price: 199.99
  },
  3: {
    title: 'Designer Leather Jacket',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    description: 'Premium leather jacket with modern design and superior craftsmanship.',
    price: 149.99
  },
  4: {
    title: 'Elegant Gold Necklace',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    description: 'Beautiful 18K gold necklace perfect for any occasion.',
    price: 299.99
  },
  5: {
    title: 'Casual Cotton T-Shirt',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    description: 'Comfortable cotton t-shirt in various colors and sizes.',
    price: 24.99
  },
  6: {
    title: 'Diamond Stud Earrings',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
    description: 'Stunning diamond earrings that add sparkle to any outfit.',
    price: 399.99
  },
  7: {
    title: 'Slim Fit Dress Shirt',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80',
    description: 'Professional dress shirt perfect for office or formal events.',
    price: 49.99
  },
  8: {
    title: 'Silver Charm Bracelet',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    description: 'Elegant silver bracelet with customizable charms.',
    price: 79.99
  },
  9: {
    title: '4K Ultra HD Smart TV',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80',
    description: 'Experience stunning visuals with this 55-inch 4K smart television.',
    price: 599.99
  },
  10: {
    title: 'Wireless Gaming Mouse',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'High-precision gaming mouse with customizable RGB lighting.',
    price: 59.99
  },
  11: {
    title: 'Floral Summer Dress',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
    description: 'Light and breezy summer dress with beautiful floral patterns.',
    price: 39.99
  },
  12: {
    title: 'Rose Gold Watch',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
    description: 'Sophisticated rose gold watch with leather strap.',
    price: 179.99
  },
  13: {
    title: 'Denim Jacket',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80',
    description: 'Classic denim jacket that never goes out of style.',
    price: 69.99
  },
  14: {
    title: 'Elegant Evening Gown',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80',
    description: 'Stunning evening gown perfect for special occasions.',
    price: 129.99
  },
  15: {
    title: 'Bluetooth Speaker',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    description: 'Portable Bluetooth speaker with powerful bass and long battery life.',
    price: 45.99
  },
  16: {
    title: 'Leather Crossbody Bag',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
    description: 'Stylish leather bag perfect for everyday use.',
    price: 89.99
  },
  17: {
    title: 'Vintage Sunglasses',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',
    description: 'Trendy vintage-style sunglasses with UV protection.',
    price: 34.99
  },
  18: {
    title: 'Wool Blend Coat',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80',
    description: 'Warm and stylish coat for cold weather.',
    price: 119.99
  },
  19: {
    title: 'Mechanical Keyboard',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    description: 'Premium mechanical keyboard with RGB backlighting.',
    price: 79.99
  },
  20: {
    title: 'Pearl Pendant Necklace',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    description: 'Timeless pearl necklace that adds elegance to any outfit.',
    price: 159.99
  }
};

export const mapProduct = (apiProduct) => {
  const custom = customProducts[apiProduct.id];
  
  if (custom) {
    return {
      ...apiProduct,
      title: custom.title,
      category: custom.category,
      image: custom.image,
      description: custom.description,
      price: custom.price // Use realistic custom price instead of API price
    };
  }
  
  return apiProduct;
};
