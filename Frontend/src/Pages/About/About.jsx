import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p className="tagline">Good Food, Good Mood.</p>

        <p>
          Welcome to <strong>FoodiesHub</strong>, your go-to destination for
          delicious food delivered right to your doorstep. We aim to bring you
          fresh, hygienic, and irresistible meals with fast delivery.
        </p>

        <p>
          Our mission is simple: to make food ordering easy, reliable, and
          enjoyable for everyone. Whether you're craving snacks, meals, or
          desserts — we’ve got you covered!
        </p>

        <p className="thanks">Thank you for choosing us ❤️</p>
      </div>
    </div>
  );
}
