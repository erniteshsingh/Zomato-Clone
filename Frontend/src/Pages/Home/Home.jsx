import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import LandingPage from "../../Components/Landingpage/Landingpage";
import { fetchAllProducts } from "../../Feautures/Products/productAction";

export default function Home() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <LandingPage />

      <div className="home-container">
        <h1 className="home-title">🔥 Popular Dishes</h1>

        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}

        <div className="home-grid">
          {products.map((item) => (
            <ProductCard
              key={item._id}
              img={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
