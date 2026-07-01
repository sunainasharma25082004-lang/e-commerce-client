import React from 'react';
import './Logo.css';

const Logo = ({ className = '', size = 'default' }) => (
  <div className={`brand-logo-wrap size-${size} ${className}`}>
    <img src="/green-logo.png" alt="Truemart" className="brand-logo-img" />
  </div>
);

export default Logo;