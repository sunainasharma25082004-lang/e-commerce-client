import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const StarRating = ({ rating = 0, size = 14 }) => (
  <span className="stars" style={{ fontSize: size }}>
    {"★".repeat(Math.floor(rating))}
    {"☆".repeat(5 - Math.floor(rating))}
  </span>
);

const badgeClass = (b) =>
  ({ SALE: "badge-sale", NEW: "badge-new", HOT: "badge-hot" }[b] || "");

const ProductDetail = ({ onBack, onProductClick }) => {

  const { id } = useParams();

  // ✅ FIX: product from URL
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
      </div>
    );
  }

  const images =
    product.images?.length > 0
      ? product.images
      : [product.image || "/placeholder.png"];

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [cartAdded, setCartAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const related = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  const discount =
    product.oldPrice && product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : null;

  const handleAddCart = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  return (
    <div className="pd-page">
      <div className="container pd-body">
        <div className="pd-top">

          {/* Gallery */}
          <div className="pd-gallery">
            <div className="pd-main-img-wrap">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="pd-main-img"
              />

              {product.badge && (
                <span className={`product-badge ${badgeClass(product.badge)}`}>
                  {product.badge}
                </span>
              )}

              {discount && (
                <span className="discount-badge">
                  -{discount}%
                </span>
              )}
            </div>

            <div className="pd-thumbnails">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`pd-thumb ${
                    activeImg === i ? "active" : ""
                  }`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`thumb-${i}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pd-info">
            <div className="pd-brand-row">
              <span className="pd-brand">
                {product.brand || "Brand"}
              </span>

              {product.badge && (
                <span className={`pd-badge ${badgeClass(product.badge)}`}>
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-rating-row">
              <StarRating rating={product.rating || 0} size={16} />
              <span className="pd-rating-num">
                {product.rating || 0}
              </span>
              <span className="pd-rating-count">
                ({product.reviews || 0} reviews)
              </span>
            </div>

            <div className="pd-price-row">
              <span className="pd-price-current">
                ${(product.price || 0).toFixed(2)}
              </span>

              {product.oldPrice && (
                <>
                  <span className="pd-price-old">
                    ${product.oldPrice.toFixed(2)}
                  </span>

                  <span className="pd-price-save">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <p className="pd-short-desc">
              {product.description
                ? product.description.split("\n")[0]
                : "No description available"}
            </p>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="pd-option-row">
                <span className="pd-option-label">Color:</span>

                <div className="pd-colors">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      className={`pd-color-btn ${
                        activeColor === i ? "active" : ""
                      }`}
                      style={{ background: color }}
                      onClick={() => setActiveColor(i)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="pd-option-row">
              <span className="pd-option-label">Quantity:</span>

              <div className="pd-qty">
                <button
                  className="qty-btn"
                  onClick={() =>
                    setQty((q) => Math.max(1, q - 1))
                  }
                >
                  -
                </button>

                <span className="qty-val">{qty}</span>

                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="pd-actions">
              <button
                className={`btn-add-cart ${
                  cartAdded ? "added" : ""
                }`}
                onClick={handleAddCart}
              >
                {cartAdded
                  ? "✓ Added to Cart!"
                  : "🛒 Add to Cart"}
              </button>

              <button className="btn-buy-now">
                ⚡ Buy Now
              </button>

              <button
                className={`btn-wishlist ${
                  wishlisted ? "active" : ""
                }`}
                onClick={() => setWishlisted(!wishlisted)}
              >
                {wishlisted ? "♥" : "♡"}
              </button>
            </div>

            <div className="pd-meta">
              <p>
                <span>SKU:</span> {product.sku || "N/A"}
              </p>

              <p>
                <span>Category:</span> {product.category || "N/A"}
              </p>

              <p>
                <span>Tags:</span> {product.tags?.join(", ") || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="pd-tab-content">

          {activeTab === "description" && (
            <div className="tab-desc">
              {(product.description || "No description available")
                .split("\n\n")
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          )}

          {activeTab === "features" && (
            <div className="tab-features">
              {product.keyFeatures?.length ? (
                product.keyFeatures.map((f, i) => (
                  <div key={i} className="feature-card">
                    <span className="feature-icon">{f.icon}</span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No features available.</p>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;