import React from "react";
import "./Menu.css";

export default function Menu() {
  const items = [
    {
      name: "Margherita Pizza",
      desc: "Classic cheese & tomato delight.",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Veg Burger",
      desc: "Crispy patty with fresh veggies.",
      price: "₹139",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "French Fries",
      desc: "Crispy, golden & delicious.",
      price: "₹99",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta Alfredo",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Chocolate Shake",
      desc: "Thick & chilled chocolate shake.",
      price: "₹149",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Paneer Roll",
      desc: "Spicy paneer stuffing with mayo.",
      price: "₹129",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Paneer Roll",
      desc: "Spicy paneer stuffing with mayo.",
      price: "₹129",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Paneer Roll",
      desc: "Spicy paneer stuffing with mayo.",
      price: "₹129",
      img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">🍔 Our Menu</h1>

      <div className="menu-grid">
        {items.map((food, i) => (
          <div className="menu-card" key={i}>
            <img src={food.img} alt={food.name} className="menu-img" />

            <div className="menu-info">
              <h2>{food.name}</h2>
              <p>{food.desc}</p>

              <div className="menu-bottom">
                <span className="price">{food.price}</span>
                <button className="add-btn">Add +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
