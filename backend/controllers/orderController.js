import pool from "../config/db.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { cartItems, totalPrice } = req.body;
    const userId = req.user.id;

    // create order
    const orderRes = await pool.query(
      "INSERT INTO orders (user_id, total_price) VALUES ($1,$2) RETURNING *",
      [userId, totalPrice]
    );

    const orderId = orderRes.rows[0].id;

    // insert order items
    for (let item of cartItems) {
      await pool.query(
        `INSERT INTO order_items
         (order_id, product_id, name, price, qty)
         VALUES ($1,$2,$3,$4,$5)`,
        [orderId, item.id, item.name, item.price, item.qty]
      );
    }

    res.status(201).json({
      message: "Order placed successfully",
      orderId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET USER ORDERS
export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await pool.query(
      "SELECT * FROM orders WHERE user_id=$1 ORDER BY created_at DESC",
      [userId]
    );

    res.json(orders.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADMIN: GET ALL ORDERS
export const getAllOrders = async (req, res) => {
  try {
    const orders = await pool.query(
      `SELECT orders.*, users.name, users.email
       FROM orders
       JOIN users ON orders.user_id = users.id
       ORDER BY orders.created_at DESC`
    );

    res.json(orders.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ORDER DETAILS
export const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await pool.query(
      "SELECT * FROM orders WHERE id=$1",
      [orderId]
    );

    const items = await pool.query(
      "SELECT * FROM order_items WHERE order_id=$1",
      [orderId]
    );

    res.json({
      order: order.rows[0],
      items: items.rows,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};