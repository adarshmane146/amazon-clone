import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to view orders");
      return;
    }

    API.get("/api/orders/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setOrders(res.data))
      .catch(() => setError("Failed to load orders"));
  }, []);

  return (
    <>
      <Header />

      <div className="orders-container">
        <h2 style={{ marginBottom: "25px" }}>My Orders</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {orders.length === 0 && !error && <p>No orders found.</p>}

        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <div className="order-id">Order #{order.id}</div>
              <div className="order-status">{order.status}</div>
            </div>

            <div className="order-row">
              <span className="order-total">₹{order.total_price}</span>
            </div>

            <div className="order-row">
              Date: {new Date(order.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyOrders;
