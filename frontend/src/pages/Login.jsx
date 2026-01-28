import { useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Header />

      <div className="login-wrapper">
        <div className="login-card">
          <h2>Sign-In</h2>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleLogin}>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
