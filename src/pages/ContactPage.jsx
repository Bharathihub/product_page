import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We&apos;d love to hear from you!</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>support@axia.com</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>123 Commerce Street<br/>New York, NY 10001</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Business Hours</h3>
              <p>Mon-Fri: 9 AM - 6 PM EST<br/>Sat-Sun: Closed</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
