import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test database connection added before other routes
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database connected successfully 🚀",
      time: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Amazon Backend API running ");
});


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});