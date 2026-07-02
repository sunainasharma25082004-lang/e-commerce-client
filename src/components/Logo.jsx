import React from 'react';
import clientLogo from '../assets/logo/client-logo.jpeg';
import './Logo.css';

const Logo = ({ className = '', size = 'default' }) => (
  <div className={`brand-logo-wrap size-${size} ${className}`}>
    <img src={clientLogo} alt="Truemart" className="brand-logo-img" />
  </div>
);

export default Logo;