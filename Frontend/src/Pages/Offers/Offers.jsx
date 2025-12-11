import React from "react";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="offers-container">
      <h1 className="offers-title">🔥 Today’s Special Offers</h1>

      <div className="offers-wrapper">

        <div className="offer-card">
          <h2>50% OFF on First Order</h2>
          <p>Enjoy half-price on your first delicious meal.</p>
          <span className="offer-tag">Use Code: FIRST50</span>
        </div>

        <div className="offer-card">
          <h2>Buy 1 Get 1 Free</h2>
          <p>Applicable on selected Burgers & Pizzas.</p>
          <span className="offer-tag">Use Code: BOGO</span>
        </div>

        <div className="offer-card">
          <h2>Free Delivery</h2>
          <p>Valid on orders above ₹199 only.</p>
          <span className="offer-tag">Use Code: FREEDEL</span>
        </div>

      </div>
    </div>
  );
}
