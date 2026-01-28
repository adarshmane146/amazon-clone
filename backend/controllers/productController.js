import pool from "../config/db.js";

// ADD PRODUCT (ADMIN)
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, image_url, category, count_in_stock } =
      req.body;

    const result = await pool.query(
      `INSERT INTO products 
       (name, description, price, image_url, category, count_in_stock)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [name, description, price, image_url, category, count_in_stock]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL PRODUCTS (PUBLIC)
export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE PRODUCT (PUBLIC)
export const getProductById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE id=$1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};