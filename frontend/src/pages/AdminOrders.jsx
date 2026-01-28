import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    API.get("/api/orders/admin", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => setOrders(res.data));
  }, []);

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1000px", margin: "20px auto" }}>
        <h2>Admin – All Orders</h2>

        {orders.map((o) => (
          <div key={o.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
            <p><b>Order:</b> #{o.id}</p>
            <p><b>User:</b> {o.name} ({o.email})</p>
            <p><b>Total:</b> ₹{o.total_price}</p>
            <p><b>Status:</b> {o.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminOrders;
