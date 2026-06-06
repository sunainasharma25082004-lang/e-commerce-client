import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [cartCount] = useState(3);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">🏺</span>
          <span className="logo-text">Tradilian</span>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">

          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item has-dropdown">
            <Link to="/allproducts">
              Shop <span className="chevron">▾</span>
            </Link>
          </li>

          <li className="nav-item has-dropdown">
            <Link to="/products">
              Products <span className="chevron">▾</span>
            </Link>
          </li>

        </ul>

        {/* Nav Actions */}
        <div className="nav-actions">

          <button className="nav-icon-btn" title="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <button className="nav-icon-btn" title="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="nav-icon-btn cart-btn" title="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;