import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import API from "../services/api";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    await API.post(
      "/api/orders",
      { cartItems, totalPrice },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <>
      <Header />

      <div className="checkout-container">
        {/* LEFT */}
        <div className="checkout-left">
          <h2>Review your order</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <div className="checkout-item-name">
                {item.name} × {item.qty}
              </div>
              <div>₹{item.price * item.qty}</div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          <div className="checkout-total">
            Total: ₹{totalPrice}
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
