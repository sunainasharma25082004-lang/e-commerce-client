import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <p className="nl-eyebrow">✦ JOIN OUR COMMUNITY</p>
        <h2 className="nl-title">Stay in the Loop</h2>
        <p className="nl-desc">
          Subscribe to our newsletter and be the first to hear about new arrivals,
          exclusive deals, and special promotions.
        </p>

        {submitted ? (
          <div className="nl-success">
            ✓ Thank you for subscribing! Check your inbox for a welcome gift.
          </div>
        ) : (
          <div className="nl-form">
            <input
              type="email"
              className="nl-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button className="nl-btn" onClick={handleSubmit}>Subscribe Now</button>
          </div>
        )}

        <div className="nl-privacy">
          <span className="nl-privacy-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No spam, ever
          </span>
          <span className="nl-privacy-divider" aria-hidden="true" />
          <span className="nl-privacy-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
            </svg>
            Unsubscribe anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
