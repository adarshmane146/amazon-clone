import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.href = "/login";
  };

  return (
    <div style={{ background: "#131921", padding: "15px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>
          🛒 Amazon Clone
        </Link>

        <div>
          <Link to="/cart" style={{ color: "#fff", marginRight: "15px" }}>
            Cart ({cartItems.length})
          </Link>

          {token ? (
            <>
              <Link to="/my-orders" style={{ color: "#fff", marginRight: "15px" }}>
                My Orders
              </Link>
              <button
                onClick={logout}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid #fff",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{ color: "#fff" }}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
