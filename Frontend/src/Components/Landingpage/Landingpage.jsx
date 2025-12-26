import React, { useEffect, useState } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
          ), url(${images[currentIndex]})`,
        }}
      >
        <div className="hero-content">
          <h1>Discover the best food & drinks near you</h1>
          <p>
            Order food from top restaurants and get it delivered fast at your
            doorstep.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or dish"
            />
            <button>Search</button>
          </div>
        </div>
      </section>
    </div>
  );
}
