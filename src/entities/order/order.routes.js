import express from 'express';
import { createOrder, getMyOrders, cancelOrder, updateOrderStatus } from './order.controller.js';
import { verifyToken, customerMiddleware, vendorMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, customerMiddleware, createOrder);                       // customer places order
router.get('/my', verifyToken, getMyOrders);                                          // my orders
router.patch('/:id/cancel', verifyToken, customerMiddleware, cancelOrder);            // customer cancels
router.patch('/:id/status', verifyToken, vendorMiddleware, updateOrderStatus);        // vendor updates status

export default router;
