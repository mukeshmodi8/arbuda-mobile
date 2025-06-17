import React from "react";
import "./Sale.css";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <section className="sale-section position-relative text-white">
      <div className="sale-bg-image"></div>
      <div className="sale-overlay position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4 animate-sale-title">
            🔥 Mega Sale is Live! 🔥
          </h1>
          <p className="lead mb-4">
            Up to <span className="highlight-text">70% OFF</span> on top mobile gadgets and accessories!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/sale-products" className="btn btn-outline-danger btn-lg shadow">
              🛒 Shop Now
            </Link>
            <a href="#offers" className="btn btn-outline-light btn-lg shadow">
              🎁 View Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
