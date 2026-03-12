import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { fetchProductById } from '../services/api';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="detail-status">Loading product details...</div>;
  if (error) return <div className="detail-status error">Error: {error}</div>;
  if (!product) return <div className="detail-status">Product not found</div>;

  const originalPrice = (product.price * 1.2).toFixed(2);
  const currentPrice = product.price.toFixed(2);

  return (
    <div className="product-detail-page">
      <Header />
      
      <div className="detail-container">
        <Link to="/" className="back-link">
          ← Back to products
        </Link>
        
        <div className="detail-content">
          <div className="detail-image-section">
            <div className="detail-image-wrapper">
              <img src={product.image} alt={product.title} className="detail-image" />
            </div>
          </div>
          
          <div className="detail-info-section">
            <p className="detail-category">{product.category}</p>
            <h1 className="detail-title">{product.title}</h1>
            
            <div className="detail-rating">
              <span className="stars">
                {'★'.repeat(Math.round(product.rating.rate))}
                {'☆'.repeat(5 - Math.round(product.rating.rate))}
              </span>
              <span className="rating-count">({product.rating.count} reviews)</span>
            </div>

            <div className="detail-pricing">
              <span className="detail-price-current">${currentPrice}</span>
              <span className="detail-price-original">${originalPrice}</span>
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-actions">
              <div className="quantity-selector">
                <button>-</button>
                <input type="number" defaultValue="1" min="1" />
                <button>+</button>
              </div>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
            
            <div className="detail-meta">
              <p><strong>SKU:</strong> FS-{product.id}-00{product.id}</p>
              <p><strong>Tags:</strong> {product.category}, FakeStore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
