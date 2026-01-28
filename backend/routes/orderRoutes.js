// import express from "express";
// // import { createOrder, getMyOrders } from "../controllers/orderController.js";
// // import { protect } from "../middleware/authMiddleware.js";
// import {
//   createOrder,
//   getMyOrders,
//   getAllOrders,
//   getOrderDetails,
// } from "../controllers/orderController.js";

// import { protect, adminOnly } from "../middleware/authMiddleware.js";
// const router = express.Router();

// router.get("/admin", protect, adminOnly, getAllOrders);
// router.get("/:id", protect, getOrderDetails);


// router.post("/", protect, createOrder);
// router.get("/my", protect, getMyOrders);

// export default router;
import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderDetails,
} from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

// ✅ Router MUST be created first
const router = express.Router();

// USER ROUTES
router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);

// ADMIN ROUTE
router.get("/admin", protect, adminOnly, getAllOrders);

// ORDER DETAILS
router.get("/:id", protect, getOrderDetails);

export default router;