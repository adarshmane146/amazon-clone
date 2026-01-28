import express from "express";
import {
  addProduct,
  getProducts,
  getProductById,
} 
from "../controllers/productController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getProducts);
router.get("/:id", getProductById);

// ADMIN ROUTE
router.post("/", protect, adminOnly, addProduct);

export default router;
