import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />

      <div className="products-container">
        <h2 style={{ marginBottom: "20px" }}>Products</h2>

        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img
                src={p.image_url || "https://via.placeholder.com/250"}
                alt={p.name}
                className="product-image"
              />

              <div className="product-title">{p.name}</div>
              <div className="product-price">₹{p.price}</div>

              <button
                className="add-cart-btn"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
