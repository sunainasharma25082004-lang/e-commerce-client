import React, { useState } from 'react';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: 'Premium Leather Headphones Pro',
    price: 129.99,
    oldPrice: 179.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    badge: 'SALE',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Artisan Leather Crossbody Bag',
    price: 89.99,
    oldPrice: null,
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    badge: 'NEW',
    category: 'Fashion',
  },
  {
    id: 3,
    name: 'Luxury Perfume Collection',
    price: 64.99,
    oldPrice: 85.00,
    rating: 4.7,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80',
    badge: 'HOT',
    category: 'Beauty',
  },
  {
    id: 4,
    name: 'Premium Running Sneakers',
    price: 149.99,
    oldPrice: 199.99,
    rating: 4.6,
    reviews: 428,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    badge: 'SALE',
    category: 'Fashion',
  },
  {
    id: 5,
    name: 'Handcrafted Coffee Maker',
    price: 99.99,
    oldPrice: null,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    badge: null,
    category: 'Home',
  },
  {
    id: 6,
    name: 'Indoor Plant Collection Set',
    price: 45.99,
    oldPrice: 59.99,
    rating: 4.5,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80',
    badge: 'NEW',
    category: 'Home',
  },
  {
    id: 7,
    name: 'Gourmet Candle Whiteboard',
    price: 35.99,
    oldPrice: null,
    rating: 4.9,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1602528495591-93b83c5be1ae?w=400&q=80',
    badge: null,
    category: 'Home',
  },
  {
    id: 8,
    name: 'Bamboo Facial Skincare Set',
    price: 72.99,
    oldPrice: 95.00,
    rating: 4.7,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    badge: 'HOT',
    category: 'Beauty',
  },
];

const tabs = ['All', 'Electronics', 'Fashion', 'Beauty', 'Home'];

const StarRating = ({ rating }) => {
  return (
    <span className="stars">
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
    </span>
  );
};

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} className="product-img" />
        {product.badge && (
          <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <button
          className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
          onClick={() => setWishlisted(!wishlisted)}
        >
          {wishlisted ? '♥' : '♡'}
        </button>
        <div className="product-actions">
          <button className="action-btn">Quick View</button>
          <button className="action-btn cart-action">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-cat">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="price-current">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="price-old">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-tabs">
            {tabs.map((t) => (
              <button
                key={t}
                className={`tab-btn ${activeTab === t ? 'active' : ''}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <a href="#" className="view-all-link">View All →</a>
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-center">
          <button className="btn-dark view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
