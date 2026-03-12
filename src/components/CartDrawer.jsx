
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart-drawer">
            <p>Your cart is empty</p>
            <span>🛒</span>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-drawer-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <h4>{item.title}</h4>
                    <p className="item-cat">{item.category}</p>
                    <p className="item-price-single">${item.price}</p>
                  </div>
                  <div className="item-controls">
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-drawer">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-line total-line">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
