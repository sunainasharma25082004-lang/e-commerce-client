import React from 'react';
import './NewArrivals.css';

const arrivals = [
  {
    id: 1,
    name: 'Fine Linen Handkerchief',
    desc: '100% linen, hand-embroidered edges',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611601777661-e0f6aadbd8a6?w=200&q=80',
  },
  {
    id: 2,
    name: 'Artisan Chocolate Tins Box',
    desc: 'Premium Belgian chocolate assortment',
    price: 38.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=200&q=80',
  },
  {
    id: 3,
    name: 'Walnut Wood Furniture',
    desc: 'Solid walnut, hand-finished natural oil',
    price: 299.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80',
  },
  {
    id: 4,
    name: 'Rosette Sweet Fudge Tins',
    desc: 'Handcrafted rosette fudge in gift tin',
    price: 18.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=200&q=80',
  },
];

const StarRating = ({ rating }) => (
  <span className="stars">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
);

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <p className="arrivals-subtitle">Don't miss the new way for this label with all-new arrivals and limited items.</p>
        </div>
        <button className="btn-dark arrivals-btn">New Arrivals</button>

        <div className="arrivals-list">
          {arrivals.map((item) => (
            <div key={item.id} className="arrival-item">
              <div className="arrival-img-wrap">
                <img src={item.image} alt={item.name} className="arrival-img" />
              </div>
              <div className="arrival-info">
                <h3 className="arrival-name">{item.name}</h3>
                <p className="arrival-desc">{item.desc}</p>
                <div className="arrival-rating">
                  <StarRating rating={item.rating} />
                  <span className="rating-count">({item.rating})</span>
                </div>
              </div>
              <div className="arrival-price">
                <span className="price-current">${item.price.toFixed(2)}</span>
                <button className="add-btn">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
