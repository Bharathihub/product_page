const API_URL = 'https://fakestoreapi.com';

export const fetchAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${API_URL}/products/category/${encodeURIComponent(category)}`);
  if (!response.ok) throw new Error('Failed to fetch products by category');
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};
