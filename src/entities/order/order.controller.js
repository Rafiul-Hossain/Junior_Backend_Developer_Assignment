import { generateResponse } from '../../lib/responseFormate.js';
import {
  createOrderService, getMyOrdersService,
  cancelOrderService, updateOrderStatusService
} from './order.service.js';

export const createOrder = async (req, res, next) => {
  try {
    const data = await createOrderService(req.user.id, req.body);
    generateResponse(res, 201, true, 'Order placed successfully', data);
  } catch (error) {
    if (['Produce not found', 'Insufficient quantity available'].includes(error.message)) {
      return generateResponse(res, 400, false, error.message, null);
    }
    next(error);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const data = await getMyOrdersService(req.user.id, req.query);
    generateResponse(res, 200, true, 'Orders fetched', data);
  } catch (error) { next(error); }
};

export const cancelOrder = async (req, res, next) => {
  try {
    await cancelOrderService(req.user.id, req.params.id);
    generateResponse(res, 200, true, 'Order cancelled', null);
  } catch (error) {
    if (error.message.includes('not found') || error.message.includes('pending')) {
      return generateResponse(res, 400, false, error.message, null);
    }
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const data = await updateOrderStatusService(req.user.id, req.params.id, req.body.status);
    generateResponse(res, 200, true, 'Order status updated', data);
  } catch (error) { next(error); }
};
