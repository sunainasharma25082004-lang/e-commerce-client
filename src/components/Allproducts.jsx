import React, { useState, useMemo } from 'react';
import { products, categories, sortOptions } from '../data/products';
import './Allproducts.css';
import { useNavigate } from 'react-router-dom';

const StarRating = ({ rating, size = 12 }) => (
   
  <span className="stars" style={{ fontSize: size }}>
    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
  </span>
);

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: '$100 – $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: Infinity },
];

const ratingOptions = [5, 4, 3];

const Allproducts = ({ onProductClick }) => {
    const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [activeRating, setActiveRating] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const toggleWishlist = (id) => {
    setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') list = list.filter((p) => p.category === activeCategory);
    if (activePriceRange) {
      list = list.filter((p) => p.price >= activePriceRange.min && p.price <= activePriceRange.max);
    }
    if (activeRating) list = list.filter((p) => Math.floor(p.rating) >= activeRating);
    switch (sortBy) {
      case 'Price: Low to High': list.sort((a, b) => a.price - b.price); break;
      case 'Price: High to Low': list.sort((a, b) => b.price - a.price); break;
      case 'Best Rating': list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [activeCategory, activePriceRange, activeRating, sortBy]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const badgeClass = (b) => ({ SALE: 'badge-sale', NEW: 'badge-new', HOT: 'badge-hot' }[b] || '');

  return (
    <div className="all-products-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb">
            <span className="bc-link" onClick={() => window.scrollTo(0,0)}>Home</span>
            <span className="bc-sep">›</span>
            <span className="bc-current">All Products</span>
          </div>
          <p className="bc-desc">Explore our complete collection of premium handcrafted products</p>
        </div>
      </div>

      <div className="container ap-body">
        <div className="ap-layout">
          {/* ── SIDEBAR ── */}
          <aside className="ap-sidebar">
            {/* Filter header */}
            <div className="sidebar-header">
              <span>⚙ Filters</span>
              <button className="clear-btn" onClick={() => { setActiveCategory('All'); setActivePriceRange(null); setActiveRating(null); }}>
                Clear All
              </button>
            </div>

            {/* Categories */}
            <div className="sidebar-section">
              <h4 className="sidebar-title">Categories</h4>
              <ul className="sidebar-list">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`sidebar-item ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                    >
                      <span>{cat}</span>
                      <span className="sidebar-count">
                        {cat === 'All' ? products.length : products.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="sidebar-section">
              <h4 className="sidebar-title">Price Range</h4>
              <ul className="sidebar-list">
                {priceRanges.map((r) => (
                  <li key={r.label}>
                    <button
                      className={`sidebar-item ${activePriceRange?.label === r.label ? 'active' : ''}`}
                      onClick={() => { setActivePriceRange(activePriceRange?.label === r.label ? null : r); setCurrentPage(1); }}
                    >
                      {r.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating */}
            <div className="sidebar-section">
              <h4 className="sidebar-title">Rating</h4>
              <ul className="sidebar-list">
                {ratingOptions.map((r) => (
                  <li key={r}>
                    <button
                      className={`sidebar-item rating-item ${activeRating === r ? 'active' : ''}`}
                      onClick={() => { setActiveRating(activeRating === r ? null : r); setCurrentPage(1); }}
                    >
                      <span className="stars">{'★'.repeat(r)}{'☆'.repeat(5 - r)}</span>
                      <span style={{ fontSize: 11, color: '#888', marginLeft: 4 }}>& up</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply button */}
            <button className="apply-filters-btn">Apply Filters</button>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="ap-main">
            {/* Toolbar */}
            <div className="ap-toolbar">
              <p className="ap-count">
                Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> products
              </p>
              <div className="toolbar-right">
                <div className="view-toggle">
                  <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>⊞</button>
                  <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>☰</button>
                </div>
                <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  {sortOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`ap-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {paginated.map((product) => (
                <div
                  key={product.id}
                  className="ap-card"
                  onClick={() => onProductClick(product)}
                >
                  <div className="ap-card-img-wrap">
                    <img src={product.image} alt={product.name} className="ap-card-img" />
                    {product.badge && (
                      <span className={`product-badge ${badgeClass(product.badge)}`}>{product.badge}</span>
                    )}
                    <button
                      className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    >
                      {wishlist.includes(product.id) ? '♥' : '♡'}
                    </button>
                    <div className="ap-card-hover">
                     <button
      className="hover-btn"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/product/${product.id}`);
      }}
    >
      Quick View
    </button>
                      <button className="hover-btn hover-cart" onClick={(e) => e.stopPropagation()}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="ap-card-info">
                    <p className="ap-card-cat">{product.category}</p>
                    <h3 className="ap-card-name">{product.name}</h3>
                    <div className="ap-card-rating">
                      <StarRating rating={product.rating} />
                      <span className="rating-count">({product.reviews})</span>
                    </div>
                    <div className="ap-card-price">
                      <span className="price-current">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="price-old">${product.oldPrice.toFixed(2)}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >‹</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`page-btn ${currentPage === p ? 'active' : ''}`}
                    onClick={() => setCurrentPage(p)}
                  >{p}</button>
                ))}
                <button
                  className="page-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >›</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;