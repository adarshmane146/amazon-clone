import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <Header />

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="cart-container">
          {/* LEFT */}
          <div className="cart-left">
            <h2>Shopping Cart</h2>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image_url} alt={item.name} />

                <div>
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">₹{item.price}</div>

                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    className="qty-input"
                    onChange={(e) =>
                      updateQty(item.id, Number(e.target.value))
                    }
                  />

                  <br />

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="cart-right cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cartItems.length}</p>
            <h2>₹{total}</h2>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
