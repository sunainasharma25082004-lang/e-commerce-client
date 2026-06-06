import React, { useState } from 'react';
import './ShopCategories.css';

const categories = [
  {
    id: 1,
    name: 'Jewelry & Accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    count: '142 Products',
    featured: true,
  },
  {
    id: 2,
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80',
    count: '98 Products',
  },
  {
    id: 3,
    name: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80',
    count: '67 Products',
  },
  {
    id: 4,
    name: 'Beauty & Skincare',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    count: '115 Products',
  },
  {
    id: 5,
    name: 'Food & Gourmet',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    count: '83 Products',
  },
  {
    id: 6,
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    count: '201 Products',
  },
];

const ShopCategories = () => {
  const [active, setActive] = useState('All');
  const filters = ['All', 'Popular', 'New', 'Sale'];

  return (
    <section className="shop-categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shop Categories</h2>
          <div className="category-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <a href="#" className="view-all-link">View All →</a>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className={`category-card ${cat.featured ? 'featured' : ''}`}>
              <div className="cat-img-wrap">
                <img src={cat.image} alt={cat.name} className="cat-img" />
                <div className="cat-overlay" />
              </div>
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-count">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;
