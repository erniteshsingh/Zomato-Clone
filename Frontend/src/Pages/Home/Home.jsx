import React from "react";
import "./Home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import LandingPage from "../../Components/Landingpage/Landingpage";

export default function Home() {
  const products = [
    {
      name: "Cheese Pizza",
      desc: "Classic cheese delight with tomato base.",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Burger",
      desc: "Crispy patty with fresh veggies & mayo.",
      price: "₹139",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pasta",
      desc: "Creamy white sauce pasta.",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div>
      <LandingPage />
      <div className="home-container">
        <h1 className="home-title">🔥 Popular Dishes</h1>
        <div className="home-grid">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
