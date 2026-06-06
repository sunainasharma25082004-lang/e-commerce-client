import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-badge">✦ LIMITED EDITION SET</div>
          <h1 className="hero-title">
            Discover<br />
            Premium<br />
            Products
          </h1>
          <p className="hero-subtitle">
            Explore our exclusive collection of handcrafted items.<br />
            Quality, beauty, and elegance in every product, delivered<br />
            to your doorstep.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-outline">Explore Categories</button>
          </div>
        </div>

        {/* Decorative diamond grid */}
        <div className="hero-grid-decoration">
          <div className="grid-diamond" />
        </div>
      </div>

      {/* Trust Badges */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span className="trust-icon">🚚</span>
              <div>
                <p className="trust-title">Free Shipping</p>
                <p className="trust-sub">On orders over $50</p>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">📦</span>
              <div>
                <p className="trust-title">Easy Delivery</p>
                <p className="trust-sub">Quick & safe delivery</p>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">🔄</span>
              <div>
                <p className="trust-title">Return Guaranteed</p>
                <p className="trust-sub">30-day easy returns</p>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <div>
                <p className="trust-title">100% Payment</p>
                <p className="trust-sub">Secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
