
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Home - Product</p>
        <h1 className="hero-title">All Product</h1>
      </div>
      <div className="hero-image-container">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200" alt="Product banner" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
