import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🏺</span>
              <span className="footer-logo-text">Tradilian</span>
            </div>
            <p className="footer-tagline">
              Bringing premium handcrafted products from around the world directly to your doorstep.
            </p>
            <div className="social-links">
              {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((s) => (
                <a key={s} href="#" className="social-link">{s[0]}</a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              {['New Arrivals', 'Featured Products', 'Summer Collection', 'Best Sellers', 'Sale Items'].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {['About Us', 'Our Story', 'Careers', 'Press', 'Blog'].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              {['Help Center', 'Track Order', 'Returns & Refunds', 'Contact Us', 'Shipping Info'].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 Tradilian. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
