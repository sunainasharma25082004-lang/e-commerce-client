import React, { useState } from 'react';
import './AnnouncementBar.css';

const announcements = [
  '🎉 Free Shipping on orders over $50 | Use code: FREESHIP',
  '✨ New Summer Collection is Live — Shop Now!',
  '🛍️ Extra 10% off on Premium Products this weekend only',
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + announcements.length) % announcements.length);
  const next = () => setCurrent((c) => (c + 1) % announcements.length);

  return (
    <div className="announcement-bar">
      <button className="ann-arrow" onClick={prev}>‹</button>
      <p className="ann-text">{announcements[current]}</p>
      <button className="ann-arrow" onClick={next}>›</button>
    </div>
  );
};

export default AnnouncementBar;
