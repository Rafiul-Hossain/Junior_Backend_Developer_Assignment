import express from 'express';
import {
  getAllUsers, updateUserStatus, approveVendor,
  getDashboardStats, approveProduceCert
} from './admin.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// All admin routes require verifyToken + adminMiddleware
router.use(verifyToken, adminMiddleware);

router.get('/dashboard', getDashboardStats);
router.get('/users', getAllUsers);
router.patch('/users/:id/status', updateUserStatus);
router.patch('/vendors/:id/approve', approveVendor);
router.patch('/produce/:id/certification', approveProduceCert);

export default router;
