import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from '../services/api';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = categoryFilter === 'all'
          ? await fetchAllProducts()
          : await fetchProductsByCategory(categoryFilter);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryFilter]);

  const categoryItems = ['all', ...categories];

  const formatCategoryLabel = (value) =>
    value
      .replace(/'/g, '')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <div className="home-page">
      <Header />
      <Hero />
      
      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Product Categories</h2>
          <div className="category-chip-row" role="tablist" aria-label="Product categories">
            {categoryItems.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={categoryFilter === category}
                className={`category-chip ${categoryFilter === category ? 'active' : ''}`}
                onClick={() => setSearchParams({ category })}
              >
                {category === 'all' ? 'All Product' : formatCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading products...</div>
        ) : error ? (
          <div className="error-message">Error: {error}</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
