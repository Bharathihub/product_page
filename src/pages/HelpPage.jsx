
import { Link } from 'react-router-dom';
import './HelpPage.css';

const HelpPage = () => {
  return (
    <div className="help-page">
      <div className="help-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <h1>Help Center</h1>
        <p className="help-subtitle">Find answers to common questions</p>

        <div className="help-sections">
          <div className="help-section">
            <h2>📦 Shipping & Delivery</h2>
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship to most countries worldwide. Shipping costs and times vary by location.</p>
            </div>
          </div>

          <div className="help-section">
            <h2>💳 Payment & Pricing</h2>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
            </div>
            <div className="faq-item">
              <h3>Are prices in USD?</h3>
              <p>Yes, all prices are displayed in US Dollars (USD).</p>
            </div>
          </div>

          <div className="help-section">
            <h2>🔄 Returns & Refunds</h2>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We offer 30-day returns on most items. Products must be unused and in original packaging.</p>
            </div>
            <div className="faq-item">
              <h3>How do I initiate a return?</h3>
              <p>Contact our support team with your order number to start the return process.</p>
            </div>
          </div>

          <div className="help-section">
            <h2>📞 Customer Support</h2>
            <div className="faq-item">
              <h3>How can I contact support?</h3>
              <p>Visit our <Link to="/contact">Contact page</Link> or email us at support@axia.com</p>
            </div>
            <div className="faq-item">
              <h3>What are your support hours?</h3>
              <p>Our support team is available Monday-Friday, 9 AM - 6 PM EST.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
