import express from "express";
import authMiddleware from "../middleware/auth.js";
import { getAmountPerMonth, getAverageOrderValue, getOrdersPerMonth, listOrders, orderByStatus, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
orderRouter.get('/orders-per-month', getOrdersPerMonth);
orderRouter.get('/amount-per-month', getAmountPerMonth);
orderRouter.get('/average-order-value', getAverageOrderValue);
orderRouter.get('/orders-by-status', orderByStatus);

export default orderRouter;