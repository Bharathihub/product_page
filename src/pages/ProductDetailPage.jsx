import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { mapProduct } from '../utils/productMapper';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        const mappedProduct = mapProduct(data);
        setProduct(mappedProduct);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="loading">Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Products
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>
          
          <div className="detail-rating">
            <span className="stars">★ {product.rating.rate}</span>
            <span className="reviews">({product.rating.count} reviews)</span>
          </div>

          <div className="detail-price">${product.price}</div>

          <div className="detail-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <button className="add-to-cart" onClick={() => {
            addToCart(product);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
          }}>
            {added ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
