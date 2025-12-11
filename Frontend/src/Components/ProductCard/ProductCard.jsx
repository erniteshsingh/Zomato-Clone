import React from "react";
import "./ProductCard.css";

export default function ProductCard({ img, name, desc, price }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-img" />

      <div className="product-info">
        <h2>{name}</h2>
        <p>{desc}</p>

        <div className="product-bottom">
          <span className="price">{price}</span>
          <button className="add-btn">Add +</button>
        </div>
      </div>
    </div>
  );
}
