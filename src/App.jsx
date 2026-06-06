import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import ShopCategories from "./components/ShopCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import SummerCollection from "./components/SummerCollection";
import NewArrivals from "./components/NewArrivals";
import CustomerReviews from "./components/CustomerReviews";
import Newsletter from "./components/Newsletter";

import Allproducts from "./components/Allproducts";
import ProductDetail from "./components/ProductDetail";

import "./index.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShopCategories />
      <FeaturedProducts />
      <SummerCollection />
      <NewArrivals />
      <CustomerReviews />
      <Newsletter />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">

        {/* Top always visible */}
        <AnnouncementBar />
        <Navbar />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/allproducts" element={<Allproducts />} />

            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        {/* Footer always visible */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;